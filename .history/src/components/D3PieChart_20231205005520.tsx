/* eslint-disable prettier/prettier */
// components/PieChart.tsx
// InteractivePieChart.tsx
"use client"

// Import necessary libraries
import React, { useEffect, useRef } from "react"
import * as d3 from "d3"

// Define the Props type
interface Props {
    allProperties: Property[]
}

export const D3PieChart = ({ allProperties }: Props) => {
    const ref = useRef<SVGSVGElement>(null)

    useEffect(() => {
        createPieChart(allProperties)
    }, [allProperties])

    const createPieChart = (data: Property[]) => {
        let typeCount = new Map<string, number>([
            ["Farm", 0],
            ["Parking", 0],
            ["Land", 0],
            ["House", 0],
        ])

        data.forEach((property) => {
            if (typeCount.has(property.type)) {
                typeCount.set(property.type, typeCount.get(property.type)++)
            }
        })

        const svg = d3.select(ref.current)
        const width = +svg.attr("width")
        const height = +svg.attr("height")
        const radius = Math.min(width, height) / 2
        const color = d3.scaleOrdinal(d3.schemeCategory10)

        const pieGenerator = d3.pie().value((d) => d.value)
        const pie = pieGenerator(data)

        const arcPathGenerator = d3.arc()
        const arcs = pie.map((p) =>
            arcPathGenerator({
                innerRadius: 50, // makes a donut instead of a pie
                outerRadius: radius,
                startAngle: p.startAngle,
                endAngle: p.endAngle,
            })
        )

        svg.attr("transform", `translate(${width / 2}, ${height / 2})`)

        svg.selectAll("path")
            .data(pieData)
            .enter()
            .append("path")
            .attr("d", arc)
            .style("fill", (d, i) => color(i.toString()))

        svg.selectAll("text")
            .data(pieData)
            .enter()
            .append("text")
            .attr("transform", (d) => `translate(${arc.centroid(d)})`)
            .attr("dy", ".35em")
            .text((d) => d.data.type)
    }

    return <svg ref={ref} width={500} height={500} />
}
