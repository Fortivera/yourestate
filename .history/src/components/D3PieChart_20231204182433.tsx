/* eslint-disable prettier/prettier */
// components/PieChart.tsx
// InteractivePieChart.tsx
"use client"

import React, { useEffect, useRef } from "react"
import * as d3 from "d3"

interface Props {
    allProperties: Property[]
}

export const D3PieChart: React.FC<Props> = ({ allProperties }: Props) => {
    const ref = useRef(null)

    useEffect(() => {
        if (!allProperties) {
            console.log("No data available")
            return
        }

        const svg = d3.select(ref.current)
        const width = +svg.attr("width")
        const height = +svg.attr("height")
        const radius = Math.min(width, height) / 2
        const color = d3.scaleOrdinal(d3.schemeCategory10)

        const pie = d3.pie<any>().value((d: any) => d.value)
        const arc: any = d3.arc().innerRadius(0).outerRadius(radius)

        svg.attr("transform", `translate(${width / 2}, ${height / 2})`)

        const typeData = allProperties.reduce<{ [key: string]: number }>((acc, curr) => {
            acc[curr.type] = (acc[curr.type] || 0) + 1
            return acc
        }, {})

        const g = svg
            .selectAll(".arc")
            .data(pie(Object.entries(typeData).map(([label, value]) => ({ label, value }))))
            .enter()
            .append("g")
            .attr("class", "arc")

        g.append("path")
            .attr("d", arc)
            .style("fill", (d) => color(d.data.label))

        g.append("text")
            .attr("transform", (d) => `translate(${arc.centroid(d)})`)
            .attr("dy", ".35em")
            .text((d) => d.data.label)
    }, [allProperties])

    return <svg ref={ref} width={100} height={100} />
}
