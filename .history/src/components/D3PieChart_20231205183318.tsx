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
        const typeCount = new Map<string, number>([
            ["Farm", 0],
            ["Parking", 0],
            ["Land", 0],
            ["House", 0],
        ]);

        data.forEach((property) => {
            if (typeCount.has(property.type)) {
                typeCount.set(property.type, typeCount.get(property.type)! + 1);
            }
        });

        const typeTuples: [string, number][] = Array.from(typeCount.entries());

        const pieGenerator = d3.pie<[string, number]>().value((d) => d[1]);
        const pieData = pieGenerator(typeTuples);

        const width = 500;
        const height = 500;
        const svg = d3.select(ref.current)
            .attr('viewBox', `0 0 ${width} ${height}`)
            .attr('preserveAspectRatio', 'xMidYMid meet');

        const color = d3.scaleOrdinal<string>().range(d3.schemePastel1);

        const arcGenerator = d3.arc<d3.PieArcDatum<[string, number]>>()
            .innerRadius(Math.min(width, height) / 4) // Set inner radius for the donut effect
            .outerRadius(Math.min(width, height) / 2);

        const g = svg.append('g')
            .attr('transform', `translate(${width / 2}, ${height / 2})`);

        const slice = g.selectAll('g')
            .data(pieData)
            .enter()
            .append('g')
            .on('click', function (_, i) {
                // Keep the hovered slice in color, dim the others
                slice.select('path')
                    .transition()
                    .duration(200)
                    .attr('fill', (_, j) => (String(i) === String(j) ? String(color(j.toString())) : '#ccc'));
            })
            .on('click', function () {
                // Restore colors on mouseout
                slice.select('path')
                    .transition()
                    .duration(500)
                    .attr('fill', (_, j) => String(color(j.toString())));
            });

        slice.append('path')
            .attr('d', arcGenerator as any)
            .attr('fill', (d, i) => String(color(i.toString())))
            .style('cursor', 'pointer');

        slice.append('text')
            .text((d) => `${d.data[0]}: ${((d.data[1] / data.length) * 100).toFixed(2)}%`)
            .attr('transform', (d) => `translate(${arcGenerator.centroid(d as any)})`)
            .style('font-size', '14px')
            .style('text-anchor', 'middle')
            .style('font-style', 'Times New Roman')
            .style('cursor', 'pointer');
    };

    return <svg ref={ref} width={500} height={500} />;
};