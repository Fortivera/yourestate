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

export const D3BarChart: React.FC<Props> = ({ allProperties }: Props) => {
    const ref = useRef<SVGSVGElement>(null);
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        // Clean up existing elements before creating a new chart
        const svg = d3.select(ref.current);
        svg.selectAll('*').remove();

        // Create a new bar chart
        createBarChart(allProperties,);
    }, [allProperties,]);

    const createBarChart = (data: Property[],) => {
        const margin = { top: 20, right: 20, bottom: 30, left: 40 };
        const width = 960 - margin.left - margin.right;
        const height = 500 - margin.top - margin.bottom;

        const x0 = d3.scaleBand()
            .rangeRound([0, width])
            .paddingInner(0.1);

        const x1 = d3.scaleBand()
            .padding(0.05);

        const y = d3.scaleLinear()
            .rangeRound([height, 0]);

        const z = d3.scaleOrdinal()
            .range(["#98abc5", "#8a89a6", "#7b6888"]);

        const svg = d3.select(ref.current).append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        const keys = Object.keys(data[0]).slice(1);

        x0.domain(data.map(d => d.country));
        x1.domain(keys).rangeRound([0, x0.bandwidth()]);
        y.domain([0, d3.max(data, d => {
            const values = keys.map(key => d[key]).filter((value): value is number => typeof value === 'number');
            return Math.max(...values) as number; // Explicitly cast as number
        })]).nice();




        svg.append("g")
            .selectAll("g")
            .data(data)
            .enter().append("g")
            .attr("transform", d => `translate(${x0(d.State)},0)`)
            .selectAll("rect")
            .data(d => keys.map(key => ({ key, value: d[key] })))
            .enter().append("rect")
            .attr("x", d => x1(d.key))
            .attr("y", d => y(d.value))
            .attr("width", x1.bandwidth())
            .attr("height", d => height - y(d.value))
            .attr("fill", d => z(d.key));

        svg.append("g")
            .attr("class", "axis")
            .attr("transform", `translate(0,${height})`)
            .call(d3.axisBottom(x0));

        svg.append("g")
            .attr("class", "axis")
            .call(d3.axisLeft(y).ticks(null, "s"))
            .append("text")
            .attr("x", 2)
            .attr("y", y(y.ticks().pop()) + 0.5)
            .attr("dy", "0.32em")
            .attr("fill", "#000")
            .attr("font-weight", "bold")
            .attr("text-anchor", "start")
            .text("Population");

        const legend = svg.append("g")
            .attr("font-family", "sans-serif")
            .attr("font-size", 10)
            .attr("text-anchor", "end")
            .selectAll("g")
            .data(keys.slice().reverse())
            .enter().append("g")
            .attr("transform", (d, i) => `translate(0,${i * 20})`);

        legend.append("rect")
            .attr("x", width - 19)
            .attr("width", 19)
            .attr("height", 19)
            .attr("fill", z);

        legend.append("text")
            .attr("x", width - 24)
            .attr("y", 9.5)
            .attr("dy", "0.32em")
            .text(d => d);
    };

    return (
        <div className={`${theme === 'light' ? 'bg-slate-50' : 'bg-[#515F73]'} w-full`}>
            <div className="max-w-[42.5rem] mx-auto p-2">
                <svg ref={ref} style={{ width: '100%', height: 'auto' }} />
            </div>
        </div>
    );
};