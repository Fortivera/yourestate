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
                typeCount.set(property.type, typeCount.get(property.type)! + 1)
            }
        })

        const typeTuples: [string, number][] = Object.entries(typeCount)

        // Create a pie generator
        const pieGenerator = pie<[string, number]>().value((d) => d[1])

        // Generate the pie data
        const pieData = pieGenerator(typeTuples)

        const svg = d3.select(ref.current)
        const width = +svg.attr("width")
        const height = +svg.attr("height")
        const radius = Math.min(width, height) / 2
        const color = d3.scaleOrdinal(d3.schemeCategory10)

        // Create an arc generator
        const arcGenerator = arc<PieArcDatum<[string, number]>>()
            .innerRadius(0)
            .outerRadius(Math.min(width, height) / 2)

        // Select the SVG element
        const svg = select("svg")

        // Create a group element for each slice
        const g = svg.selectAll("g").data(pieData).enter().append("g")

        // Append a path element to each group
        g.append("path")
            .attr("d", arcGenerator)
            .attr("fill", (d, i) => colorScale(i))

        // Append a text element to each group
        g.append("text")
            .text((d) => `${d.data[0]}: ${((d.data[1] / data.length) * 100).toFixed(2)}%`)
            .attr("transform", (d) => `translate(${arcGenerator.centroid(d)})`)

        return <svg ref={ref} width={500} height={500} />
    }
}
