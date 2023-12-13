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

export const D3DonutPieChart: React.FC<Props> = ({ allProperties }: Props) => {
    const ref = useRef<SVGSVGElement>(null);
    const { theme } = useContext(ThemeContext)


    useEffect(() => {
        // Clean up existing elements before creating a new chart
        const svg = d3.select(ref.current);
        svg.selectAll('*').remove();

        // Create a new pie chart
        createPieChart(allProperties, theme);
    }, [allProperties, theme]);

    const createPieChart = (data: Property[], theme: string) => {
        const typeCount = new Map<string, number>()

        data.forEach((property) => {
            if (!typeCount.has(property.type)) {
                typeCount.set(property.type, 1);
            }
            else {
                typeCount.set(property.type, typeCount.get(property.type)! + 1);
            }

        });

        const typeTuples: [string, number][] = Array.from(typeCount.entries());

        const pieGenerator = d3.pie<[string, number]>().value((d) => d[1]);
        const pieData = pieGenerator(typeTuples);



        const width = 710
        const height = 500
        const svg = d3.select(ref.current)
            .attr('viewBox', `0 0 ${width} ${height}`)
            .attr('preserveAspectRatio', 'xMidYMid meet');

        const color = d3.scaleOrdinal<string>().range(d3.schemePastel1);

        const arcGenerator = d3.arc<d3.PieArcDatum<[string, number]>>()
            .innerRadius(Math.min(width, height) / 4)
            .outerRadius(Math.min(width, height) / 2);

        const g = svg.append('g')
            .attr('transform', `translate(${width / 2}, ${height / 2})`);

        const slice = g.selectAll('g')
            .data(pieData)
            .enter()
            .append('g')
            .classed('cursor-pointer', true);

        let activeIndex: number | null = null;

        slice.append('path')
            .attr('d', arcGenerator as any)
            .attr('fill', (d, i) => String(color(i.toString())))
            .style('opacity', 1) // Set initial opacity to 1
            .on('click', function (event, d) {
                activeIndex = activeIndex === d.index ? null : d.index;
                updateChart();
            });

        slice.append('text')
            .text((d) => ` ${((d.data[1] / data.length) * 100).toFixed(2)}%`)
            .attr('transform', (d) => `translate(${arcGenerator.centroid(d as any)})`)
            .style('font-size', '1rem')
            .style('text-anchor', 'middle');

        // New legend code starts here
        const legendContainer = svg
            .append('foreignObject')
            .attr('width', 150) // width of the container
            .attr('height', 300) // height of the container
            .attr('transform', `translate(620, 50)`) // position of the container
            .append('xhtml:div')
            .style('overflow-y', 'scroll') // make it scrollable
            .style('height', '100%') // make the div use all the space in the foreignObject
            .style('width', '100%'); // make the div use all the space in the foreignObject

        const legend = legendContainer
            .selectAll('div')
            .data(pieData)
            .enter()
            .append('div')
            .style('display', 'flex') // use flex layout
            .style('align-items', 'center') // center items vertically
            .style('margin-bottom', '10px') // add some space between items
            .classed('cursor-pointer', true)
            .on('click', function (event, d) {
                activeIndex = activeIndex === d.index ? null : d.index;
                updateChart();
            });

        legend.append('svg') // create an SVG to draw the colored square
            .attr('width', 20)
            .attr('height', 20)
            .append('rect')
            .attr('width', 20)
            .attr('height', 20)
            .attr('fill', (d, i) => String(color(i.toString())));

        legend.append('div') // use a div for the text
            .text((d) => d.data[0])
            .style('margin-left', '10px') // add some space between the square and the text
            .style('font-size', '1rem');
        // New legend code ends here

        function updateChart() {
            slice.selectAll('path')
                .transition()
                .duration(500)
                .style('opacity', (d: any) => (activeIndex === null || d.index === activeIndex ? 1 : 0.5));

            legend.selectAll('rect')
                .transition()
                .duration(500)
                .style('opacity', (d: any) => (activeIndex === null || d.index === activeIndex ? 1 : 0.4));
            legend.selectAll('text')
                .transition()
                .duration(500)
                .style('fill', `${theme === 'light' ? "black" : "white"}`);
        }


        // Call updateChart initially to set the correct opacities
        updateChart();

    };

    return (
        <div className={`${theme === 'light' ? 'bg-slate-50' : 'bg-[#515F73]'} w-full `}>
            <div className="max-w-[42.5rem] mx-auto md:p-2 sm:py-10">
                <svg ref={ref} style={{ width: '100%', height: 'auto' }} />
            </div>
        </div>
    );
};

