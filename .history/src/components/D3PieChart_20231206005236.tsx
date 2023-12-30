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
            .innerRadius(Math.min(width, height) / 4)
            .outerRadius(Math.min(width, height) / 2)

        const g = svg.append("g").attr("transform", `translate(${width / 2}, ${height / 2})`)

        const slice = g
            .selectAll("g")
            .data(pieData)
            .enter()
            .append("g")
            .classed("cursor-pointer", true)
            .on("mouseover", function (this: SVGElement, d) {
                // Handle mouseover event
                const slice = d3.select(this)! // Add the non-null assertion operator here
                const originalColor = slice.select("path").attr("fill") // Store the original color

                // Change the color only for the hovered slice
                slice.select("path").attr("fill", "orange")

                slice.attr("data-original-color", originalColor) // Store the original color as a data attribute

                // Change the color for other slices
                const currentIndex = Array.from(slice.node()?.parentNode?.children || []).indexOf(slice.node())
                if (currentIndex !== undefined) {
                    d3.selectAll(`g:not(:nth-child(${currentIndex + 1})) path`).attr("fill", (_, j) => String(color(j.toString())))
                }

                const tooltip = g.append("g").attr("class", "tooltip").style("opacity", 0)

                if (d.data && Array.isArray(d.data) && d.data.length >= 2) {
                    tooltip
                        .append("text")
                        .text(`${d.data[0]}: ${((d.data[1] / data.length) * 100).toFixed(2)}%`)
                        .attr("text-anchor", "middle")
                        .style("font-size", "14px")
                        .attr("y", 20)

                    const bbox = tooltip.node()?.getBBox()

                    if (bbox) {
                        const padding = 5

                        tooltip
                            .insert("rect", "text")
                            .attr("x", bbox.x - padding)
                            .attr("y", bbox.y - padding)
                            .attr("width", bbox.width + padding * 2)
                            .attr("height", bbox.height + padding * 2)
                            .style("fill", "white")
                            .style("opacity", 0.75)
                    }
                }
            })

        slice
            .append("path")
            .attr("d", arcGenerator as any)
            .attr("fill", (d, i) => String(color(i.toString())))

        slice
            .append("text")
            .text((d) => `${d.data[0]}: ${((d.data[1] / data.length) * 100).toFixed(2)}%`)
            .attr("transform", (d) => `translate(${arcGenerator.centroid(d as any)})`)
            .style("font-size", "14px")
            .style("text-anchor", "middle")
    }
    return <svg ref={ref} width={500} height={500} />
}
