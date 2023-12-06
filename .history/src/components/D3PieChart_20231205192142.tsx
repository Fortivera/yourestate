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
            .innerRadius(0)
            .outerRadius(Math.min(width, height) / 2);

        const g = svg.append('g')
            .attr('transform', `translate(${width / 2}, ${height / 2})`);

        const slice = g.selectAll('g')
            .data(pieData)
            .enter()
            .append('g')
            .on('click', function (_, j) {
                const clickedSlice = d3.select(this);
                const isClicked = clickedSlice.classed('text-black');

                // Toggle Tailwind classes based on the clicked state
                clickedSlice.classed('text-black', !isClicked)
                    .classed('fill-current', !isClicked)
                    .classed('filter-none', !isClicked)
                    .classed('filter-greyscale', !isClicked);

                // Update other slices to have a grey filter and dimmed color
                slice.filter((_, k) => !isClicked && String(k) !== String(j))
                    .select('path')
                    .classed('fill-current', true)
                    .classed('filter-greyscale', true)
                    .classed('text-black', false);
            });

        slice.append('path')
            .attr('d', arcGenerator as any)
            .classed('fill-current', true)
            .classed('cursor-pointer', true);

        slice.append('text')
            .text((d) => `${d.data[0]}: ${((d.data[1] / data.length) * 100).toFixed(2)}%`)
            .attr('transform', (d) => `translate(${arcGenerator.centroid(d as any)})`)
            .classed('text-sm', true)
            .classed('text-center', true)
            .classed('cursor-pointer', true);
    };

    return <svg ref={ref} width={500} height={500} />;
};