// components/D3Chart.tsx
import { useEffect, useRef } from "react"
import * as d3 from "d3"

interface D3ChartProps {
    data: any[]
    width: number
    height: number
}

function createPieChart(svg, data, width, height) {
    const pie = d3.pie().value((d) => d.value)(data);
    const arc = d3.arc().innerRadius(0).outerRadius(Math.min(width, height) / 2);

    svg
        .selectAll('path')
        .data(pie)
        .join('path')
        .attr('d', arc)
        .attr('fill', (d, i) => d3.schemeCategory10[i]);
}


export default D3Chart
