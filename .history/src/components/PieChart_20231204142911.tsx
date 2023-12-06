// components/D3Chart.tsx
import { useEffect, useRef } from "react"
import * as d3 from "d3"

interface D3ChartProps {
    svg: any
    data: any[]
    width: number
    height: number
}

function D3Chart({ svg, data, width, height }: D3ChartProps) {
    const pie = d3.pie().value((d: { value: any }) => d.value)(data)
    const arc = d3
        .arc()
        .innerRadius(0)
        .outerRadius(Math.min(width, height) / 2)

    svg
        .selectAll("path")
        .data(pie)
        .join("path")
        .attr("d", arc)
        .attr("fill", (d: any, i: string | number) => d3.schemeCategory10[i])
}

export default D3Chart
