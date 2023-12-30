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

        const width = 390
        const height = 500
        const svg = d3.select(ref.current).attr("viewBox", `0 0 ${width} ${height}`).attr("preserveAspectRatio", "xMidYMid meet")

        const color = d3.scaleOrdinal<string>().range(d3.schemePastel1)

        const arcGenerator = d3
            .arc<d3.PieArcDatum<[string, number]>>()
            .innerRadius(Math.min(width, height) / 4)
            .outerRadius(Math.min(width, height) / 2)

        const g = svg.append("g").attr("transform", `translate(${width / 2}, ${height / 2})`)

        const slice = g.selectAll("g").data(pieData).enter().append("g").classed("cursor-pointer", true)

        let activeSlice: SVGPathElement | null = null

        slice
            .append("path")
            .attr("d", arcGenerator as any)
            .attr("fill", (d, i) => String(color(i.toString())))
            .style("opacity", 1) // Set initial opacity to 1
            .on("click", function () {
                const clickedSlice = this

                if (activeSlice === clickedSlice) {
                    // If the clicked slice is the same as the active one, reset opacity for all slices
                    g.selectAll("path")
                        .transition()
                        .duration(200) // Set the duration of the transition in milliseconds
                        .style("opacity", 1)
                    activeSlice = null
                } else {
                    // Otherwise, update the active slice and set opacity accordingly with a smooth transition
                    g.selectAll("path").transition().duration(500).style("opacity", 0.5)
                    d3.select(clickedSlice).transition().duration(500).style("opacity", 1)
                    activeSlice = clickedSlice
                }
            })

        slice
            .append("text")
            .text((d) => `${((d.data[1] / data.length) * 100).toFixed(2)}%`)
            .attr("transform", (d) => `translate(${arcGenerator.centroid(d as any)})`)
            .style("font-size", "14px")
            .style("text-anchor", "middle")

        const legend = svg
            .append("g")
            .attr("transform", `translate(${width}, 50)`)
            .selectAll("g")
            .data(pieData)
            .enter()
            .append("g")
            .attr("transform", (d, i) => `translate(0, ${i * 25})`)
            .classed("cursor-pointer", true)
            .on("click", function (event, d) {
                const clickedSlice = d3.select(`#slice-${d.index}`)

                if (clickedSlice.attr("opacity") === "1") {
                    // If the clicked slice is the same as the active one, reset opacity for all slices
                    slice
                        .selectAll("path")
                        .transition()
                        .duration(200) // Set the duration of the transition in milliseconds
                        .style("opacity", 1)
                } else {
                    // Otherwise, update the active slice and set opacity accordingly with a smooth transition
                    slice.selectAll("path").transition().duration(500).style("opacity", 0.5)
                    clickedSlice.transition().duration(500).style("opacity", 1)
                }
            })

        legend
            .append("rect")
            .attr("width", 20)
            .attr("height", 20)
            .attr("fill", (d, i) => String(color(i.toString())))

        legend
            .append("text")
            .text((d) => d.data[0])
            .attr("x", 25)
            .attr("y", 15)
            .style("font-size", "14px")
    }

    return <svg ref={ref} width={650} height={500} />
}
