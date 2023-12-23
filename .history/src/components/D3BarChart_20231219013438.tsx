/* eslint-disable prettier/prettier */
// components/PieChart.tsx
// InteractivePieChart.tsx
"use client"

// Import necessary libraries
import React, { useContext, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { ThemeContext } from '@/context/ThemeContex';


interface Props {
    allProperties: Property[];
}

interface EnergySums {
    electricity: number;
    gas: number;
    hydro: number;
}

export const D3BarChart: React.FC<Props> = ({ allProperties }) => {
    const ref = useRef<SVGSVGElement>(null);
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        if (ref.current) {
            createBarChart(allProperties);
        }
    }, [allProperties]);

    const createBarChart = (data: Property[]) => {
        const margin = { top: 20, right: 30, bottom: 30, left: 40 };
        const svgWidth = 960;
        const svgHeight = 500;
        const width = svgWidth - margin.left - margin.right;
        const height = svgHeight - margin.top - margin.bottom;

        // Clean up existing elements before creating a new chart
        const svg = d3.select(ref.current).attr('width', svgWidth).attr('height', svgHeight);
        svg.selectAll('*').remove();

        // Set up the container group to account for margins
        const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

        const xScale = d3.scaleBand()
            .domain(data.map(d => d.country))
            .rangeRound([0, width])
            .padding(0.1);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => Math.max(d.electricity, d.gas, d.hydro))])
            .rangeRound([height, 0]);

        const colorScale = d3.scaleOrdinal()
            .domain(['electricity', 'gas', 'hydro'])
            .range(['#ffd1dc', '#c4edde', '#d3a3e1']);

        const xAxis = d3.axisBottom(xScale).tickSizeOuter(0);
        const yAxis = d3.axisLeft(yScale);

        // Append the x-axis to the bottom of the container
        g.append('g')
            .attr('transform', `translate(0,${height})`)
            .call(xAxis);

        // Append the y-axis to the side of the container
        g.append('g')
            .call(yAxis);

        // Create the bars
        const types = ['electricity', 'gas', 'hydro'];
        types.forEach((type, i) => {
            g.selectAll(`.${type}`)
                .data(data)
                .enter()
                .append('rect')
                .attr('class', type)
                .attr('x', d => xScale(d.country)! + i * xScale.bandwidth() / types.length)
                .attr('y', d => yScale(d[type as keyof Property]))
                .attr('width', xScale.bandwidth() / types.length)
                .attr('height', d => height - yScale(d[type as keyof Property]))
                .attr('fill', colorScale(type));
        });

        // Add the legend
        const legend = svg.append('g')
            .attr('transform', `translate(${width + margin.right}, ${margin.top})`)
            .selectAll('g')
            .data(types)
            .enter()
            .append('g')
            .attr('transform', (d, i) => `translate(0, ${i * 20})`);

        legend.append('rect')
            .attr('width', 18)
            .attr('height', 18)
            .attr('fill', colorScale);

        legend.append('text')
            .attr('x', 24)
            .attr('y', 9)
            .attr('dy', '0.35em')
            .text(d => d);
    };

    return (
        <div className={`${theme === 'light' ? 'bg-slate-50' : 'bg-[#515F73]'} w-full`}>
            <div className="max-w-[42.5rem] mx-auto p-2">
                <svg ref={ref} />
            </div>
        </div>
    );
};

export default D3BarChart;