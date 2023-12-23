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
        // Clean up existing elements before creating a new chart
        const svg = d3.select(ref.current);
        svg.selectAll('*').remove();

        // Create a new bar chart
        createBarChart(allProperties,);
    }, [allProperties,]);

    const createBarChart = (data: Property[]) => {
        const energySumsByCountry = new Map<string, EnergySums>();


        data.forEach((property) => {
            if (!energySumsByCountry.has(property.country)) {
                energySumsByCountry.set(property.country, {
                    electricity: property.electricity,
                    gas: property.gas,
                    hydro: property.hydro,
                });
            } else {
                const energySums = energySumsByCountry.get(property.country)!;
                energySums.electricity += property.electricity;
                energySums.gas += property.gas;
                energySums.hydro += property.hydro;
            }
        });

        const energyTuples: [string, EnergySums][] = Array.from(energySumsByCountry.entries());

        const svg = d3.select(ref.current);

        const xScale = d3.scaleBand()
            .domain(energyTuples.map(([country]) => country))
            .range([0, 500])
            .padding(0.5);

        const yScale = d3.scaleLinear()
            .domain([0, 1000])
            .range([5000, 0]);

        const colorScale = d3.scaleOrdinal<string>()
            .domain(['electricity', 'gas', 'hydro'])
            .range(['#ffd1dc', '#c4edde', '#d3a3e1']);  // pastel colors

        const types = ['electricity', 'gas', 'hydro'];

        types.forEach((type, i) => {
            const energyType = type as keyof EnergySums;
            svg.selectAll(`.${type}`)
                .data(energyTuples)
                .enter()
                .append('rect')
                .attr('class', type)
                .attr('x', ([country]) => (xScale(country) || 0) + i * xScale.bandwidth() / 3)
                .attr('y', ([, energySums]) => yScale(energySums[type as keyof EnergySums]))
                .attr('width', xScale.bandwidth() / 3)
                .attr('height', ([, energySums]) => yScale(energySums[type as keyof EnergySums]))
                .attr('fill', colorScale(energyType));


        });

        const xAxis = d3.axisBottom(xScale).tickSizeOuter(0);
        const yAxis = d3.axisLeft(yScale);

        svg.append('g')
            .attr('transform', `translate(0,${0})`)
            .call(xAxis)
            .append('text')
            .attr('x', 500)
            .attr('y', 20)
            .attr('fill', 'black')
            .attr('text-anchor', 'end')
            .text('Country');

        svg.append('g')
            .call(yAxis)
            .append('text')
            .attr('x', 20)
            .attr('y', 0)
            .attr('fill', 'black')
            .attr('text-anchor', 'start')
            .text('Amount');

        const legend = svg.append('g')
            .attr('transform', `translate(${500},0)`)
            .selectAll('g')
            .data(types)
            .enter().append('g')
            .attr('transform', (d, i) => `translate(0,${i * 20})`);

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
                <svg ref={ref} style={{ width: '100%', height: "1000px" }} />
            </div>
        </div>
    );
};