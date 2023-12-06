// components/D3Chart.tsx
import { useEffect, useRef } from "react"
import * as d3 from 'd3'

interface D3ChartProps {
    data: any[]
    width: number
    height: number
}

const D3Chart: React.FC<D3ChartProps> = ({ data, width, height }) => {
    const ref = useRef<SVGSVGElement>(null)

    useEffect(() => {
        if (ref.current) {
            const svg = d3.select(ref.current)

            // Create your D3 charts here
            // For example, to create a pie chart:
            const pie = d3.pie<any>().value((d: any) => d.value)(data)
            const arc = d3
                .arc<any>()
                .innerRadius(0)
                .outerRadius(Math.min(width, height) / 2)

            svg
                .selectAll("path")
                .data(pie)
                .join("path")
                .attr("d", arc)
                .attr("fill", (d, i) => d3.schemeCategory10[i])

            // Add interactivity
            svg.selectAll("path").on("click", (event, d) => {
                // Update your other charts based on the clicked data
            })
        }
    }, [data, width, height])

    return <svg ref={ref} width={width} height={height} />
}

export default D3Chart
