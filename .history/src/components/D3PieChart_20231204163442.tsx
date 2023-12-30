/* eslint-disable prettier/prettier */
// components/PieChart.tsx
// InteractivePieChart.tsx
import React, { useEffect, useRef } from "react"
import * as d3 from "d3"

interface Props {
    data: any[] // Your data format
}

const D3PieChart: React.FC<Props> = ({ data }) => {
    const chartRef = useRef(null)

    useEffect(() => {
        // Inside useEffect in InteractivePieChart.tsx
        const pie = d3.pie()
        const arc = d3.arc().innerRadius(0).outerRadius(100)

        const pieData = pie(data)
        const svg = d3.select(chartRef.current)

        svg.selectAll("path")
            .data(pieData)
            .enter()
            .append("path")
            .attr("d", arc)
            .attr("fill", (d, i) => d3.schemeCategory10[i])
            .on("click", (event, d) => {
                // Handle click event
                // Update both pie charts accordingly
            })

        // Your D3 pie chart code here
    }, [data])

    return <svg ref={chartRef}></svg>
}

export default D3PieChart
