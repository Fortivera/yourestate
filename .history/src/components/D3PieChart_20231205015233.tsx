/* eslint-disable prettier/prettier */
// components/PieChart.tsx
// InteractivePieChart.tsx
"use client"

// Import necessary libraries
import React, { useEffect, useRef } from "react"
import * as d3 from "d3"

interface Props {
    allProperties: Property[]
}

export const D3PieChart: React.FC<Props> = ({ allProperties }: Props) => {
    const ref = useRef<SVGSVGElement>(null)

    useEffect(() => {
        createPieChart(allProperties)
    }, [allProperties])

    const createPieChart = (data: Property[]) => {
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
        const svg = d3.select(ref.current).attr("viewBox", `0 0 ${width} ${height}`).attr("preserveAspectRatio", "xMidYMid meet")

        const color = d3.scaleOrdinal<string>().range(d3.schemePastel1)

        const arcGenerator = d3
            .arc<d3.PieArcDatum<[string, number]>>()
            .innerRadius(0)
            .outerRadius(Math.min(width, height) / 2)

        const g = svg.append("g").attr("transform", `translate(${width / 2}, ${height / 2})`)

        const slice = g
            .selectAll("g")
            .data(pieData)
            .enter()
            .append("g")
            .on("mouseover", function (_, index) {
                d3.select(this)
                    .select("path")
                    .transition()
                    .duration(200)
                    .attr("fill", String(color(index.toString())))
                    .attr("opacity", 0.7)

                g.selectAll("g")
                    .filter((_, j) => j !== index)
                    .select("path")
                    .transition()
                    .duration(200)
                    .attr("opacity", 0.2)
            })
            .on("mouseout", function (_, index) {
                d3.select(this)
                    .select("path")
                    .transition()
                    .duration(200)
                    .attr("fill", String(color(index.toString())))
                    .attr("opacity", 1)

                g.selectAll("g")
                    .filter((_, j) => j !== index)
                    .select("path")
                    .transition()
                    .duration(200)
                    .attr("opacity", 1)
            })

        slice
            .append("path")
            .attr("d", arcGenerator)
            .attr("fill", (_, index) => color(index.toString()))
    }

    return <svg ref={ref} width={500} height={500} />
}
