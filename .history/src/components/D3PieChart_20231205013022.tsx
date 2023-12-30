/* eslint-disable prettier/prettier */
// components/PieChart.tsx
// InteractivePieChart.tsx
"use client"

// Import necessary libraries
import React, { useEffect, useRef } from "react"
import * as d3 from "d3"

interface Property {
    type: string
}

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

        const typeTuples: [string, number][] = Array.from(typeCount.entries())

        const pieGenerator = d3.pie<[string, number]>().value((d) => d[1])
        const pieData = pieGenerator(typeTuples)

        const width = +svg.attr("width")
        const height = +svg.attr("height")
        const color = d3.scaleOrdinal(d3.schemeCategory10)

        const arcGenerator = d3
            .arc<d3.PieArcDatum<[string, number]>>()
            .innerRadius(0)
            .outerRadius(Math.min(width, height) / 2)

        // Create a group element for the pie chart and translate it to the center
        const g = svg.append("g").attr("transform", `translate(${width / 2}, ${height / 2})`)

        // Create a group element for each slice
        const slice = g.selectAll("g").data(pieData).enter().append("g")

        slice
            .append("path")
            .attr("d", arcGenerator as any)
            .attr("fill", (d, i) => color(i.toString()))

        slice
            .append("text")
            .text((d) => `${d.data[0]}: ${((d.data[1] / data.length) * 100).toFixed(2)}%`)
            .attr("transform", (d) => `translate(${arcGenerator.centroid(d as any)})`)
    }

    return <svg ref={ref} width={1000} height={1000} />
}
