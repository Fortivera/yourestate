/* eslint-disable prettier/prettier */
// components/PieChart.tsx
// InteractivePieChart.tsx
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface Props {
    data: any[]; // Your data format
}

const D3PieChart: React.FC<Props> = ({ data }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        // D3 code for creating pie chart
        // Refer to D3.js documentation for pie chart implementation

        const svg = d3.select(chartRef.current);
        // Your D3 pie chart code here

    }, [data]);

    return <svg ref={chartRef}></svg>;
};

export default D3PieChart;
