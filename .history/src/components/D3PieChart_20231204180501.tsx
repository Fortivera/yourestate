/* eslint-disable prettier/prettier */
// components/PieChart.tsx
// InteractivePieChart.tsx
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface Props {
    data: { id: number; type: string; address: string; suite: string; postalCode: string; city: string; province: string; country: string; tenant: number; rent: number; age: number; electricity: number; gas: number; hydro: number; surfaceArea: number }[]; // Your data format
}

export const D3PieChart: React.FC<Props> = ({ data }) => {
    const ref = useRef(null);

    useEffect(() => {
        if (!data) {
            console.log('No data available');
            return;
        }

        const svg = d3.select(ref.current);
        const width = +svg.attr('width');
        const height = +svg.attr('height');
        const radius = Math.min(width, height) / 2;
        const color = d3.scaleOrdinal(d3.schemeCategory10);

        const pie = d3.pie<any>().value((d: any) => d.value);
        const arc = d3.arc().innerRadius(0).outerRadius(radius);

        svg.attr('transform', `translate(${width / 2}, ${height / 2})`);

        const typeData = data.reduce((acc, curr) => {
            acc[curr.type] = (acc[curr.type] || 0) + 1;
            return acc;
        }, {});

        const g = svg.selectAll('.arc')
            .data(pie(Object.entries(typeData).map(([label, value]) => ({ label, value }))))
            .enter().append('g')
            .attr('class', 'arc');

        g.append('path')
            .attr('d', arc)
            .style('fill', d => color(d.data.label));

        g.append('text')
            .attr('transform', d => `translate(${arc.centroid(d)})`)
            .attr('dy', '.35em')
            .text(d => d.data.label);
    }, [data]);

    return <svg ref={ref} width={400} height={400} />;
};
