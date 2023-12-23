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

export const D3BarChart: React.FC<Props> = ({ allProperties }: Props) => {
    const ref = useRef<SVGSVGElement>(null);
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        // Create a new bar chart
        createBarChart(allProperties,);
    }, [allProperties,]);

    const createBarChart = (data: Property[]) => {
        if (!ref.current) return;

        const svg = d3.select(ref.current);
        svg.selectAll('*').remove();
        const energySumsByCountry = new Map<string, EnergySums>(); // country: {gas: amount, hydro: amount, electricity: amount}


        data.forEach((property) => {
            if (!energySumsByCountry.has(property.country)) {
                energySumsByCountry.set(property.country, {
                    electricity: property.electricity,
                    gas: property.gas,
                    hydro: property.hydro,
                });
            } else {
                const energyTypes = energySumsByCountry.get(property.country)!;
                energyTypes.electricity += property.electricity;
                energyTypes.gas += property.gas;
                energyTypes.hydro += property.hydro;
            }
        });

        const energyTuples: [string, EnergySums][] = Array.from(energySumsByCountry.entries()) // [[country: {gas: amount, hydro: amount, electricity: amount}], [...]]

        const width = 710;
        const height = 500;
        const margin = { top: 30, right: 20, bottom: 70, left: 50 };

        svg.attr('viewBox', `0 0 ${width} ${height}`)
            .attr('preserveAspectRatio', 'xMidYMid meet');

        // Assuming 'data' is an array of objects with 'category' and 'value'
        const xScale = d3.scaleBand()
            .range([0, width - margin.left - margin.right])
            .domain(data.map(d => d.category))
            .padding(0.1);

        const yScale = d3.scaleLinear()
            .range([height - margin.top - margin.bottom, 0])
            .domain([0, d3.max(data, d => d.value)]);

        const g = svg.append('g')
            .attr('transform', `translate(${margin.left}, ${margin.top})`);

        let activeIndex = null;

        g.selectAll('.bar')
            .data(data)
            .enter()
            .append('rect')
            .classed('bar', true)
            .attr('x', d => xScale(d.category))
            .attr('y', d => yScale(d.value))
            .attr('width', xScale.bandwidth())
            .attr('height', d => height - margin.top - margin.bottom - yScale(d.value))
            .on('click', function (event, d, i) {
                activeIndex = activeIndex === i ? null : i;
                updateChart();
            });

        const legend = svg.append('g')
            .attr('transform', `translate(${margin.left}, ${margin.top / 2})`);

        legend.selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .attr('width', 20)
            .attr('height', 20)
            .attr('x', (d, i) => i * 100)
            .attr('y', 0)
            .attr('fill', (d, i) => d.color) // Assuming each data point has a color
            .on('click', function (event, d, i) {
                activeIndex = activeIndex === i ? null : i;
                updateChart();
            });

        legend.selectAll('text')
            .data(data)
            .enter()
            .append('text')
            .attr('x', (d, i) => i * 100 + 25)
            .attr('y', 15)
            .text(d => d.category)
            .on('click', function (event, d, i) {
                activeIndex = activeIndex === i ? null : i;
                updateChart();
            });

        function updateChart() {
            g.selectAll('.bar')
                .transition()
                .duration(500)
                .style('opacity', (d, i) => (activeIndex === null || i === activeIndex ? 1 : 0.1));
        }

        updateChart(); // Initial update

        // const xScale = d3.scaleBand()
        //     .domain(energyTuples.map(([country]) => country))
        //     .range([0, 500])
        //     .padding(0.5);

        // const yScale = d3.scaleLinear()
        //     .domain([0, 2000])
        //     .range([5000, 0]);

        // const colorScale = d3.scaleOrdinal<string>()
        //     .domain(['electricity', 'gas', 'hydro'])
        //     .range(['#ffd1dc', '#c4edde', '#d3a3e1']);  // pastel colors

        // const types = ['electricity', 'gas', 'hydro'];

        // types.forEach((type, i) => {
        //     const energyType = type as keyof EnergySums;
        //     svg.selectAll(`.${type}`)
        //         .data(energyTuples)
        //         .enter()
        //         .append('rect')
        //         .attr('class', type)
        //         .attr('x', ([country]) => (xScale(country) || 0) + i * xScale.bandwidth() / 3)
        //         .attr('y', ([, energySums]) => yScale(energySums[type as keyof EnergySums]))
        //         .attr('width', xScale.bandwidth() / 3)
        //         .attr('height', ([, energySums]) => yScale(energySums[type as keyof EnergySums]))
        //         .attr('fill', colorScale(energyType));


        // });

        // const xAxis = d3.axisBottom(xScale).tickSizeOuter(0);
        // const yAxis = d3.axisLeft(yScale);

        // svg.append('g')
        //     .attr('transform', `translate(0,${0})`)
        //     .call(xAxis)
        //     .append('text')
        //     .attr('x', 500)
        //     .attr('y', 20)
        //     .attr('fill', 'black')
        //     .attr('text-anchor', 'end')
        //     .text('Country');

        // svg.append('g')
        //     .call(yAxis)
        //     .append('text')
        //     .attr('x', 20)
        //     .attr('y', 0)
        //     .attr('fill', 'black')
        //     .attr('text-anchor', 'start')
        //     .text('Amount');

        // const legend = svg.append('g')
        //     .attr('transform', `translate(${500},0)`)
        //     .selectAll('g')
        //     .data(types)
        //     .enter().append('g')
        //     .attr('transform', (d, i) => `translate(0,${i * 20})`);

        // legend.append('rect')
        //     .attr('width', 18)
        //     .attr('height', 18)
        //     .attr('fill', colorScale);

        // legend.append('text')
        //     .attr('x', 24)
        //     .attr('y', 9)
        //     .attr('dy', '0.35em')
        //     .text(d => d);
    };

    return (
        <div className={`${theme === 'light' ? 'bg-slate-50' : 'bg-[#515F73]'} w-full`}>
            <div className="max-w-[42.5rem] mx-auto p-2">
                <svg ref={ref} style={{ width: '100%', height: 'auto' }} />
            </div>
        </div>
    );
};