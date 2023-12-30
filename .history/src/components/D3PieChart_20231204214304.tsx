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

// Define the D3PieChart component
export const D3PieChart: React.FC<Props> = ({ allProperties }) => {
    const ref = useRef<SVGSVGElement>(null)

    useEffect(() => {
        processAndCalculatePercentage(allProperties)
    }, [allProperties])

    const processAndCalculatePercentage = (allProperties: Property[]) => {
        if (!Array.isArray(allProperties) || allProperties.length === 0) {
            console.error("Invalid data format or empty array")
            return
        }

        // Filter properties for specific types
        const filteredProperties = allProperties.filter((item) => ["House", "Farm", "Land", "Parking"].includes(item.type))

        const typeCounts: Record<string, number> = {}

        filteredProperties.forEach((item) => {
            const itemType = item.type.toLowerCase()
            typeCounts[itemType] = (typeCounts[itemType] || 0) + 1
        })

        // Log the results (or use them as needed)
        console.log("Type Counts:", typeCounts)

        // Set up SVG dimensions and color scale
        const svg = d3.select(ref.current)
        const width = +svg.attr("width")
        const height = +svg.attr("height")
        const radius = Math.min(width, height) / 2
        const color = d3.scaleOrdinal(d3.schemeCategory10)

        // Create pie chart data
        const pie = d3.pie<{ label: string; value: number }>().value((d) => d.value)
        const pieData = pie(Object.entries(typeCounts).map(([label, value]) => ({ label, value })))

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
    }

    // Return the SVG element
    return <svg ref={ref} width={500} height={500} />
}
