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

interface PieChartDatum {
    data: [string, number];
    index: number;
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

        const typeTuples: PieChartDatum[] = Array.from(typeCount.entries()).map(([type, count], index) => ({
            data: [type, count],
            index,
        }));

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
            .attr('d', (d) => arc(d) as string)
            .attr('fill', (d) => color(d.data.data[0]));


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
                    const arcDatum = arcData.data as PieChartDatum | undefined;
                    if (isClicked || (arcDatum && arcDatum.index === (d.data as PieChartDatum).index)) {
                        return color((arcDatum?.data ?? [])[0]);
                    } else {
                        return (d3.color(color((arcDatum?.data ?? [])[0]))?.darker(0.3) as any) || '#ccc';
                    }
                });
        }
    };

    return <svg ref={ref} />;
};


