/* eslint-disable prettier/prettier */
// components/PieChart.tsx
// InteractivePieChart.tsx
"use client"

// Import necessary libraries
import React, { useEffect, useRef } from "react"
import * as d3 from "d3"

interface Property {
    type: string
    // Add other properties as needed
}

interface Props {
    allProperties: Property[]
}

export const D3PieChart: React.FC<Props> = ({ allProperties }: Props) => {
    const ref = useRef<SVGSVGElement>(null)

    useEffect(() => {
        // Clean up existing elements before creating a new chart
        const svg = d3.select(ref.current)
        svg.selectAll("*").remove()

        // Create a new pie chart
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

        const pieGenerator = d3.pie<[string, number]>().value((d: any) => d.value)

        const width = 500
        const height = 500
        const svg = d3.select(ref.current).attr("viewBox", `0 0 ${width} ${height}`).attr("preserveAspectRatio", "xMidYMid meet")

        const color = d3.scaleOrdinal<string>().range(d3.schemePastel1)

        const arcGenerator = d3
            .arc<d3.PieArcDatum<[string, number]>>()
            .innerRadius(Math.min(width, height) / 4)
            .outerRadius(Math.min(width, height) / 2)

        const g = svg.selectAll(".arc").data(pieGenerator(typeTuples)).enter().append("g").attr("class", "arc")

        g.append("path")
            .attr("d", arcGenerator)
            .style("fill", (d: any) => color(d.data.name))
            .on("click", (event) => {
                d3.selectAll("path").style("opacity", 0.5)
                d3.select(event.currentTarget).style("opacity", 1)
            })

        g.append("text")
            .attr("transform", (d: any) => `translate(${arcGenerator.centroid(d)})`)
            .attr("dy", ".35em")
            .text((d: any) => d.data.name)
    }

    return <svg ref={ref} width={500} height={500} />
}
