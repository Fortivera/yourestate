/* eslint-disable prettier/prettier */
// components/PieChart.tsx
// InteractivePieChart.tsx
"use client"

// Import necessary libraries
import React, { useContext, useEffect, useRef } from "react"
import * as d3 from "d3"
import { ThemeContext } from "@/context/ThemeContex"

interface Props {
    allProperties: Property[]
}

export const D3PieChart: React.FC<Props> = ({ allProperties }: Props) => {
    const ref = useRef<SVGSVGElement>(null)
    const { theme } = useContext(ThemeContext)

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

        const width = 700
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
                const clickedSlice = this as SVGPathElement
                const clickedIndex = d3.select(clickedSlice).datum() as { index: number }

                if (activeSlice === clickedSlice) {
                    // If the clicked slice is the same as the active one, reset opacity for all slices and legend items
                    g.selectAll("path")
                        .transition()
                        .duration(50) // Set the duration of the transition in milliseconds
                        .style("opacity", 1)
                    legend.selectAll("text").style("opacity", 1)
                    legend.selectAll("rect").style("opacity", 1)
                    activeSlice = null
                } else {
                    // Otherwise, update the active slice and set opacity accordingly with a smooth transition
                    g.selectAll("path")
                        .transition()
                        .duration(50)
                        .style("opacity", (sliceData: any) => (sliceData.index === clickedIndex ? 1 : 0.5))
                    legend.selectAll("text").style("opacity", (legendData, i, nodes) => {
                        const isActive = d3.select(nodes[i]).datum().index === clickedIndex
                        return isActive ? 1 : 0.5
                    })
                    legend.selectAll("rect").style("opacity", (legendData, i, nodes) => {
                        const isActive = d3.select(nodes[i]).datum().index === clickedIndex
                        return isActive ? 1 : 0.5
                    })
                    activeSlice = clickedSlice
                }
            })

        slice
            .append("text")
            .text((d) => ` ${((d.data[1] / data.length) * 100).toFixed(2)}%`)
            .attr("transform", (d) => `translate(${arcGenerator.centroid(d as any)})`)
            .style("font-size", "14px")
            .style("text-anchor", "middle")

        const legend = svg
            .append("g")
            .attr("transform", `translate(630, 50)`)
            .selectAll("g")
            .data(pieData)
            .enter()
            .append("g")
            .attr("transform", (d, i) => `translate(0, ${i * 25})`)
            .classed("cursor-pointer", true)
            .on("click", function (event, d) {
                const clickedIndex = d.index

                // Toggle the active class on the legend item
                const clickedLegend = d3.select(this as SVGElement)
                clickedLegend.classed("active", !clickedLegend.classed("active"))

                // Update opacity based on the active class
                legend.selectAll("text").style("opacity", (legendData, i, nodes) => {
                    const isActive = d3.select(nodes[i]).classed("active")
                    return isActive ? 1 : 0.5
                })

                // Update opacity of the corresponding pie chart slice
                slice
                    .selectAll("path")
                    .transition()
                    .duration(500)
                    .style("opacity", (sliceData: any) => (sliceData.index === clickedIndex || clickedLegend.classed("active") ? 1 : 0.5))
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
            .style("opacity", 1) // Set initial opacity to 1 for all legend items
    }

    return (
        <div className={`${theme === "light" ? "bg-slate-200" : "bg-slate-500"} w-full h-screen`}>
            <div className="max-w-[42.5rem] mx-auto p-2">
                <svg ref={ref} style={{ width: "100%", height: "auto" }} />
            </div>
        </div>
    )
}
