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

    const createPieChart = (data: Property[]) => {
        // ... (same code as before)

        const g = svg.append('g')
            .attr('transform', `translate(${width / 2}, ${height / 2})`);

        const arcGenerator = d3.arc<d3.PieArcDatum<[string, number]>>()
            .innerRadius(Math.min(width, height) / 4)
            .outerRadius(Math.min(width, height) / 2);

        const slice = g.selectAll('g')
            .data(pieData)
            .enter()
            .append('g')
            .classed('cursor-pointer', true)
            .on('mouseover', function (d) {
                // Handle mouseover event
                d3.select(this).select('path').attr('fill', 'orange'); // Change the color on hover

                const tooltip = g.append('g')
                    .attr('class', 'tooltip')
                    .style('opacity', 0);

                tooltip.append('text')
                    .text(`${d.data[0]}: ${((d.data[1] / data.length) * 100).toFixed(2)}%`)
                    .attr('text-anchor', 'middle')
                    .style('font-size', '14px')
                    .attr('y', 20);

                const bbox = tooltip.node()?.getBBox();
                const padding = 5;

                tooltip.insert('rect', 'text')
                    .attr('x', bbox.x - padding)
                    .attr('y', bbox.y - padding)
                    .attr('width', bbox.width + padding * 2)
                    .attr('height', bbox.height + padding * 2)
                    .style('fill', 'white')
                    .style('opacity', 0.75);
            })
            .on('mousemove', function () {
                // Handle mousemove event (if needed)
            })
            .on('mouseout', function () {
                // Handle mouseout event
                d3.select(this).select('path').attr('fill', (_, i) => String(color(i.toString())));

                // Remove the tooltip
                g.select('.tooltip').remove();
            });

        slice.append('path')
            .attr('d', arcGenerator as any)
            .attr('fill', (d, i) => String(color(i.toString())));

        slice.append('text')
            .text((d) => `${d.data[0]}: ${((d.data[1] / data.length) * 100).toFixed(2)}%`)
            .attr('transform', (d) => `translate(${arcGenerator.centroid(d as any)})`)
            .style('font-size', '14px')
            .style('text-anchor', 'middle');
    }
    return <svg ref={ref} width={500} height={500} />;
};