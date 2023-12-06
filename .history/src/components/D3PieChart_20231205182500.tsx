/* eslint-disable prettier/prettier */
// components/PieChart.tsx
// InteractivePieChart.tsx
"use client"

// Import necessary libraries
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';



interface Props {
    allProperties: Property[];
}

export const D3PieChart: React.FC<Props> = ({ allProperties }: Props) => {
    const ref = useRef<SVGSVGElement>(null);

    useEffect(() => {
        createPieChart(allProperties);
    }, [allProperties]);

    const createPieChart = (allProperties: Property[]) => {
        const width = 500;
        const height = 300;
        const radius = Math.min(width, height) / 2;

        const svg = d3.select(ref.current)
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', `translate(${width / 2},${height / 2})`);

        const color = d3.scaleOrdinal(d3.schemeCategory10);

        const pie = d3.pie<Property>().value((d) => d.type);
        const arcs = pie(allProperties);

        const arc = d3.arc<d3.PieArcDatum<Property>>()
            .innerRadius(radius - 60)
            .outerRadius(radius - 20);

        svg.selectAll('path')
            .data(arcs)
            .enter()
            .append('path')
            .attr('d', arc)
            .attr('fill', (d) => color(d.allProperties.type))
            .attr('stroke', '#fff')
            .style('stroke-width', '2px');

        // Legends
        const legend = svg.selectAll('.legend')
            .data(allProperties.map(d => d.type))
            .enter()
            .append('g')
            .attr('class', 'legend')
            .attr('transform', (d, i) => `translate(0,${i * 20})`);

        legend.append('rect')
            .attr('x', width - 18)
            .attr('width', 18)
            .attr('height', 18)
            .style('fill', (d, i) => color(i.toString()));

        legend.append('text')
            .attr('x', width - 24)
            .attr('y', 9)
            .attr('dy', '.35em')
            .style('text-anchor', 'end')
            .text((d) => d);
    };

    return <svg ref={ref}></svg>;
};