/* eslint-disable prettier/prettier */
// components/PieChart.tsx
// InteractivePieChart.tsx
"use client"

// Import necessary libraries
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';



interface Property {
    type: string;
}

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

        const width: number = 400;
        const height: number = 400;
        const radius: number = Math.min(width, height) / 2;

        // Create a color scale
        const color: d3.ScaleOrdinal<string, string> = d3.scaleOrdinal(d3.schemeCategory10);

        // Create a pie chart layout
        const pie: d3.Pie<any, number> = d3.pie();

        // Create arc generator
        const arc: d3.Arc<any, d3.DefaultArcObject> = d3.arc()
            .innerRadius(radius * 0.6)
            .outerRadius(radius);

        // Create SVG container
        const svg: d3.Selection<SVGSVGElement, unknown, HTMLElement, any> = d3.select(chartContainerRef.current)
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', `translate(${width / 2},${height / 2})`);

        // Draw the initial pie chart
        const arcs: d3.Selection<SVGGElement, d3.PieArcDatum<number>, SVGSVGElement, unknown> = svg.selectAll('arc')
            .data(pie(data))
            .enter()
            .append('g')
            .attr('class', 'arc')
            .on('click', toggleSlice);

        arcs.append('path')
            .attr('d', arc)
            .attr('fill', (d, i) => color(i.toString()))
            .attr('class', 'chart-slice');

        // Event handler function for toggling the slice
        function toggleSlice(this: SVGGElement, _, j: number) {
            const clickedSlice: d3.Selection<SVGGElement, d3.PieArcDatum<number>, SVGSVGElement, unknown> = d3.select(this);
            const isClicked: boolean = clickedSlice.classed('clicked');

            // Toggle the clicked class
            clickedSlice.classed('clicked', !isClicked);

            // Dim out the other slices if a slice is clicked
            arcs.select('path')
                .transition()
                .duration(200)
                .attr('fill', (_, k) => {
                    if (isClicked || k === j) {
                        return color(k.toString());
                    } else {
                        return (d3.color(color(k.toString()))?.darker(0.3) as any) || '#ccc';
                    }
                });
        }
        return <svg ref={ref} width={500} height={500} />;
    };