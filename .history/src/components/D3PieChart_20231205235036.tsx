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
        const radius = Math.min(width, height) / 2;

        // Create SVG container
        const svg = d3.select(ref.current)
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', `translate(${width / 2},${height / 2})`);

        // Create color scale
        const color = d3.scaleOrdinal<string>().range(d3.schemeCategory10);

        // Create pie chart layout
        const pie = d3.pie<PieChartDatum>().value((d) => d.data[1]);

        // Create arc generator
        const arc = d3.arc<d3.PieArcDatum<PieChartDatum>>()
            .innerRadius(radius * 0.6)
            .outerRadius(radius);

        // Draw the initial pie chart
        const arcs = svg.selectAll('arc')
            .data(pie(typeTuples))
            .enter()
            .append('g')
            .attr('class', 'arc')
            .on('click', handleSliceClick);

        arcs.append('path')
            .attr('d', arc as any)
            .attr('fill', (d) => color(d.data[0]));

        // Event handler function for toggling the slice
        function handleSliceClick(this: SVGGElement, d: d3.PieArcDatum<PieChartDatum>) {
            const clickedSlice = d3.select(this);
            const isClicked = clickedSlice.classed('clicked');

            // Toggle the clicked class
            clickedSlice.classed('clicked', !isClicked);

            // Dim out the other slices if a slice is clicked
            arcs.select('path')
                .transition()
                .duration(200)
                .attr('fill', (arcData) => {
                    if (isClicked || arcData.index === d.index) {
                        return color(arcData.data[0]);
                    } else {
                        return (d3.color(color(arcData.data[0]))?.darker(0.3) as any) || '#ccc';
                    }
                });
        }
    };

    return <svg ref={ref} />;
};