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

        const pieGenerator = d3.pie<[string, number]>().value((d) => d[1])
        const pieData = pieGenerator(typeTuples)

        const width = 710
        const height = 500
        const svg = d3.select(ref.current).attr("viewBox", `0 0 ${width} ${height}`).attr("preserveAspectRatio", "xMidYMid meet")

        const color = d3.scaleOrdinal<string>().range(d3.schemePastel1)

        // Define the scales
        const xScale = d3.scaleBand().range([0, width]).padding(0.4)
        const yScale = d3.scaleLinear().range([height, 0])

        // Append a 'g' element in which to place the bars
        const g = svg.append("g").attr("transform", `translate(${width / 2}, ${height / 2})`)

        // Create the bars
        const bars = g
            .selectAll("rect")
            .data(pieData)
            .enter()
            .append("rect")
            .attr("x", (i) => xScale(i.toString()))
            .attr("y", (d) => yScale(d.data[1]))
            .attr("height", (d) => height - yScale(d.data[1]))
            .attr("width", xScale.bandwidth())
            .attr("fill", (d, i) => String(color(i.toString())))

        // Add axes
        const xAxis = d3.axisBottom(xScale)
        const yAxis = d3.axisLeft(yScale)

        svg.append("g").attr("transform", `translate(0, ${height})`).call(xAxis)

        svg.append("g").call(yAxis)

        // Add labels
        bars.append("text")
            .text((d) => d.data[0])
            .attr("x", (d, i) => xScale(i.toString()) + xScale.bandwidth() / 2)
            .attr("y", (d) => yScale(d.data[1]) - 10)
            .attr("text-anchor", "middle")
    }

    return <svg ref={ref} width={500} height={500} />
}
