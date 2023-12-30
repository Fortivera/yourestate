/* eslint-disable prettier/prettier */
// components/PieChart.tsx
// InteractivePieChart.tsx
"use client"

// Import necessary libraries
import React, { useEffect, useRef } from "react"
import * as d3 from "d3"

// Define the Property type
interface Property {
    id: number
    type: string
    // ... other property fields
}

// Define the Props type
interface Props {
    allProperties: Property[]
}

// Define the D3PieChart component
export const D3PieChart: React.FC<Props> = ({ allProperties }: Props) => {
    const ref = useRef<SVGSVGElement>(null)

    useEffect(() => {
        if (!allProperties || allProperties.length === 0) {
            console.log("No data available")
            return
        }

        // Set up SVG dimensions and color scale
        const svg = d3.select(ref.current)
        const width = +svg.attr("width")
        const height = +svg.attr("height")
        const radius = Math.min(width, height) / 2
        const color = d3.scaleOrdinal(d3.schemeCategory10)

        // Create pie chart data
        const pie = d3.pie<{ label: string; value: number }>().value((d) => d.value)
        const pieData = pie(
            Object.entries(
                allProperties.reduce<{ [key: string]: number }>((acc, curr) => {
                    if (curr.type === "House" || curr.type === "Parking" || curr.type === "Land" || curr.type === "Farm") {
                        acc[curr.type] = (acc[curr.type] || 0) + 1
                    }
                    return acc
                }, {})
            ).map(([label, value]) => ({ label, value }))
        )

        // Create arc generator
        const arc: any = d3.arc<{ label: string; value: number }>().innerRadius(0).outerRadius(radius)

        // Move origin to the center of SVG
        svg.attr("transform", `translate(${width / 2}, ${height / 2})`)

        // Create arcs
        const g = svg.selectAll(".arc").data(pieData).enter().append("g").attr("class", "arc")

        // Append path elements
        g.append("path")
            .attr("d", arc)
            .style("fill", (d) => color(d.data.label))

        // Append text labels
        g.append("text")
            .attr("transform", (d) => `translate(${arc.centroid(d)})`)
            .attr("dy", ".35em")
            .text((d) => d.data.label)
    }, [allProperties])

    // Return the SVG element
    return <svg ref={ref} width={500} height={500} />
}
