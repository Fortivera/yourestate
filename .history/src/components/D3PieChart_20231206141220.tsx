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
    const [activeIndex, setActiveIndex] = useState<number | null>(null)
    useEffect(() => {
        // Clean up existing elements before creating a new chart
        const svg = d3.select(ref.current)
        svg.selectAll("*").remove()

        // Create a new pie chart
        createPieChart(allProperties)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allProperties])

    const createPieChart = (data: Property[]) => {
        const typeCount = new Map<string, number>()

        data.forEach((property) => {
            if (!typeCount.has(property.type)) {
                typeCount.set(property.type, 1)
            } else {
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
            .innerRadius(Math.min(width, height) / 4)
            .outerRadius(Math.min(width, height) / 2)

        const g = svg.append("g").attr("transform", `translate(${width / 2}, ${height / 2})`)

        const slice = g.selectAll("g").data(pieData).enter().append("g").classed("cursor-pointer", true)

        slice
            .append("path")
            .attr("d", arcGenerator as any)
            .attr("fill", (d, i) => String(color(i.toString())))
            .style("opacity", (d, i) => (activeIndex === null || activeIndex === i ? 1 : 0.5)) // Adjust opacity based on activeIndex
            .on("click", function (event, d) {
                const clickedSliceIndex: number = d.index // Extract index from PieArcDatum
                setActiveIndex((prevIndex) => (prevIndex === clickedSliceIndex ? null : clickedSliceIndex))
            })

        slice
            .append("text")
            .text((d) => `${d.data[0]}: ${((d.data[1] / data.length) * 100).toFixed(2)}%`)
            .attr("transform", (d) => `translate(${arcGenerator.centroid(d as any)})`)
            .style("font-size", "14px")
            .style("text-anchor", "middle")

        // Legend
        const legend = svg.append("g").attr("transform", `translate(${width - 100}, 20)`)

        // Legend
        // Legend
        legend
            .selectAll("rect")
            .data(typeTuples)
            .enter()
            .append("rect")
            .attr("width", 10)
            .attr("height", 10)
            .attr("fill", (d, i) => String(color(i.toString())))
            .attr("y", (_, i) => i * 20)
            .style("opacity", (_, i) => (activeIndex === null || activeIndex === i ? 1 : 0.5)) // Highlight based on activeIndex
            .on("click", function (event, d, i) {
                event.stopPropagation() // Stop event propagation to prevent interference with pie chart click
                setActiveIndex((prevIndex) => (prevIndex === i ? null : i)) // Toggle activeIndex on click
            })

        legend
            .selectAll("text")
            .data(typeTuples)
            .enter()
            .append("text")
            .text((d) => d[0])
            .attr("x", 15)
            .attr("y", (_, i) => i * 20 + 9)
            .style("font-size", "12px")
            .style("opacity", (_, i) => (activeIndex === null || activeIndex === i ? 1 : 0.5)) // Highlight based on activeIndex
    }

    return <svg ref={ref} width={500} height={500} />
}
