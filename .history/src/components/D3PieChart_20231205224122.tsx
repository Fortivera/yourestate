/* eslint-disable prettier/prettier */
// components/PieChart.tsx
// InteractivePieChart.tsx
"use client"

// Import necessary libraries
import React, { useEffect, useRef, useState } from "react"
import * as d3 from "d3"

interface Props {
    allProperties: Property[]
}

export const D3PieChart: React.FC<Props> = ({ allProperties }: Props) => {
    const ref = useRef<SVGSVGElement>(null)
    const chartCreated = useRef(false)
    const [dimmedSlice, setDimmedSlice] = useState<number | null>(null)

    useEffect(() => {
        if (!chartCreated.current) {
            createDonutChart(allProperties)
            chartCreated.current = true
        }
    }, [allProperties, dimmedSlice])

    const createDonutChart = (data: Property[]) => {
        const typeCount = new Map<string, number>([
            ["Farm", 0],
            ["Parking", 0],
            ["Land", 0],
            ["House", 0],
        ])

        data.forEach((property) => {
            if (typeCount.has(property.type)) {
                typeCount.set(property.type, typeCount.get(property.type)! + 1)
            }
        })

        const typeTuples: [string, number][] = Array.from(typeCount.entries())

        const pieGenerator = d3.pie<[string, number]>().value((d) => d[1])
        const pieData = pieGenerator(typeTuples)

        const width = 500
        const height = 500
        const radius = Math.min(width, height) / 2

        const svg = d3
            .select(ref.current)
            .attr("viewBox", `0 0 ${width} ${height}`)
            .attr("preserveAspectRatio", "xMidYMid meet")
            .append("g")
            .attr("transform", `translate(${width / 2},${height / 2})`)

        const color = d3.scaleOrdinal<string>().range(d3.schemePastel1)

        const arcGenerator = d3
            .arc<d3.PieArcDatum<[string, number]>>()
            .innerRadius(radius / 2)
            .outerRadius(radius)

        const slice = svg
            .selectAll(".arc")
            .data(pieData)
            .enter()
            .append("g")
            .classed("arc", true)
            .on("click", (event: any, d: d3.PieArcDatum<[string, number]>) => handleSliceClick(event, d))

        slice
            .append("path")
            .attr("d", arcGenerator as any)
            .attr("fill", (d, i) => String(color(i.toString())))
            .attr("opacity", (d, i) => (i === dimmedSlice ? 0.5 : 1))

        slice
            .append("text")
            .text((d) => `${d.data[0]}: ${((d.data[1] / data.length) * 100).toFixed(2)}%`)
            .attr("transform", (d) => `translate(${arcGenerator.centroid(d as any)})`)
            .style("font-size", "14px")
            .style("text-anchor", "middle")
    }

    const handleSliceClick = (event: React.MouseEvent<SVGGElement, MouseEvent>, d: d3.PieArcDatum<[string, number]>) => {
        const index = d.index! // Accessing the index property of PieArcDatum
        if (dimmedSlice === null || dimmedSlice !== index) {
            // Dim the clicked slice
            setDimmedSlice(index)
        } else {
            // Restore the opacity if the same slice is clicked again
            setDimmedSlice(null)
        }
    }

    return <svg ref={ref} width={500} height={500} />
}
