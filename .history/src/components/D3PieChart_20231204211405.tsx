/* eslint-disable prettier/prettier */
// components/PieChart.tsx
// InteractivePieChart.tsx
"use client"

// Import necessary libraries
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

// Define the Property type
interface Property {
    id: number;
    type: string;
    // other properties from your schema
}

// Define the Props type
interface Props {
    allProperties: Property[];
}

// Define the D3PieChart component
export const D3PieChart: React.FC<Props> = ({ allProperties }: Props) => {
    const ref = useRef<SVGSVGElement>(null);

    useEffect(() => {
        processAndCalculatePercentage(allProperties);
    }, [allProperties]);

    const processAndCalculatePercentage = (allProperties: string | any[]) => {
        if (!Array.isArray(allProperties) || allProperties.length === 0) {
            console.error('Invalid data format or empty array');
            return;
        }

        const typeCounts: Record<string, number> = {
            'd': 0,
            'c': 0,
            'b': 0,
            'a': 0,
        };

        allProperties.forEach((item: { type: string; }) => {
            const itemType = item.type.toLowerCase();
            if (typeCounts.hasOwnProperty(itemType)) {
                typeCounts[itemType]++;
            }
        });

        const totalItems = data.length;
        const percentage: Record<string, number> = {};

        Object.keys(typeCounts).forEach(type => {
            percentage[type] = (typeCounts[type] / totalItems) * 100;
        });

        // Log the results (or use them as needed)
        console.log('Type Counts:', typeCounts);
        console.log('Percentage:', percentage);

        // Set up SVG dimensions and color scale
        const svg = d3.select(ref.current);
        const width = +svg.attr('width');
        const height = +svg.attr('height');
        const radius = Math.min(width, height) / 2;
        const color = d3.scaleOrdinal(d3.schemeCategory10);



        const pie = d3.pie<{ label: string; value: number }>().value((d) => d.value);
        const pieData = pie(Object.entries(typeData).map(([label, value]) => ({ label, value })));

        // Create arc generator
        const arc: any = d3.arc<{ label: string; value: number }>().innerRadius(0).outerRadius(radius);

        // Move origin to the center of SVG
        svg.attr('transform', `translate(${width / 2}, ${height / 2})`);

        // Create arcs
        const g = svg.selectAll('.arc').data(pieData).enter().append('g').attr('class', 'arc');

        // Append path elements
        g.append('path').attr('d', arc).style('fill', (d) => color(d.data.label));

        // Append text labels
        g.append('text').attr('transform', (d) => `translate(${arc.centroid(d)})`).attr('dy', '.35em').text((d) => d.data.label);
    }, [allProperties]);

    // Return the SVG element
    return <svg ref={ref} width={500} height={500} />;
};

