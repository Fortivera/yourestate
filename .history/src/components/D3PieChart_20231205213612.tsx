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
            .innerRadius(Math.min(width, height) / 4)
            .outerRadius(Math.min(width, height) / 2);

        const g1 = svg.append('g')
            .attr('transform', `translate(${width / 4}, ${height / 2})`);

        const g2 = svg.append('g')
            .attr('transform', `translate(${(width * 3) / 4}, ${height / 2})`);

        const handleSliceClick = (g: d3.Selection<SVGGElement, any, null, undefined>) => {
            const slice = g.selectAll('g')
                .data(pieData)
                .enter()
                .append('g')
                .classed('cursor-pointer', true)
                .on('click', function (this: SVGGElement, event: d3.BaseType, j: number) {
                    const clickedSlice = d3.select(this);
                    const isClicked = clickedSlice.classed('clicked');

                    // Reset all slices in the current group to normal state
                    g.selectAll('path')
                        .transition()
                        .duration(200)
                        .attr('fill', (_, k: number) => String(color(k.toString())));

                    // Toggle the clicked class
                    clickedSlice.classed('clicked', !isClicked);

                    // Dim out the other slices in the current group if a slice is clicked
                    g.selectAll('path')
                        .transition()
                        .duration(200)
                        .attr('fill', (_, k: number) => {
                            if (isClicked || k === j) {
                                return String(color(k.toString()));
                            } else {
                                return (d3.color(color(k.toString()))?.darker(0.3) as any) || '#ccc';
                            }
                        });
                } as any); // Adding 'as any' to handle the TypeScript error

            slice.append('path')
                .attr('d', arcGenerator as any)
                .attr('fill', (d, i) => String(color(i.toString())));

            slice.append('text')
                .text((d) => `${d.data[0]}: ${((d.data[1] / data.length) * 100).toFixed(2)}%`)
                .attr('transform', (d) => `translate(${arcGenerator.centroid(d as any)})`)
                .style('font-size', '14px')
                .style('text-anchor', 'middle');
        };

        handleSliceClick(g1);

    };

    return <svg ref={ref} width={500} height={500} />;
};