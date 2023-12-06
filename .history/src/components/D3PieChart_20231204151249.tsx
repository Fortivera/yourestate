// components/PieChart.tsx
import * as d3 from "d3"
import { useEffect, useRef } from "react"

interface PieChartProps {
    data: { label: string; value: number }[]
    onSliceClick: (label: string) => void
}

export const D3PieChart: React.FC<PieChartProps> = ({ data, onSliceClick }) => {
    const ref = useRef(null)

    useEffect(() => {
        const svg = d3.select(ref.current)
        // ... create the pie chart with D3.js ...

        g.append("path")
            .attr("d", arc)
            .style("fill", (d) => color(d.data.label))
            .on("click", (d) => onSliceClick(d.data.label))
    }, [data, onSliceClick])

    return <svg ref={ref} width={400} height={400} />
}
