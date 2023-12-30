/* eslint-disable prettier/prettier */
// components/PieChart.tsx
// InteractivePieChart.tsx
"use client"

// Import necessary libraries
import React, { useContext, useEffect, useRef } from "react"
import * as d3 from "d3"
import { ThemeContext } from "@/context/ThemeContex"

interface Props {
    allProperties: Property[]
}

interface EnergySums {
    electricity: number
    gas: number
    hydro: number
}

export const D3BarChart: React.FC<Props> = ({ allProperties }: Props) => {
    const ref = useRef<SVGSVGElement>(null)
    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        // Create a new bar chart
        createBarChart(allProperties)
    }, [allProperties])

    const createBarChart = (data: Property[]) => {
        if (!ref.current) return

        const svg = d3.select(ref.current)
        svg.selectAll("*").remove()
        const energySumsByCountry = new Map<string, EnergySums>() // country: {gas: amount, hydro: amount, electricity: amount}

        data.forEach((property) => {
            if (!energySumsByCountry.has(property.country)) {
                energySumsByCountry.set(property.country, {
                    electricity: property.electricity,
                    gas: property.gas,
                    hydro: property.hydro,
                })
            } else {
                const energyTypes = energySumsByCountry.get(property.country)!
                energyTypes.electricity += property.electricity
                energyTypes.gas += property.gas
                energyTypes.hydro += property.hydro
            }
        })

        const energyTuples: [string, EnergySums][] = Array.from(energySumsByCountry.entries()) // [[country: {gas: amount, hydro: amount, electricity: amount}], [...]]

        const width = 700
        const height = 500
        const margin = { top: 20, right: 30, bottom: 40, left: 90 }
        svg.attr("viewBox", `0 0 ${width} ${height}`).attr("preserveAspectRatio", "xMidYMid meet")
        let activeIndex: number | null = null
        const updateChart = () => {
            // Update the opacity of bars based on the active index
            svg.selectAll(".bar")
                .transition()
                .duration(300)
                .style("opacity", (d) => (activeIndex === null || d.type === energyTypes[activeIndex] ? 1 : 0.1))

            // Update the opacity of legend items
            legend
                .selectAll("rect")
                .transition()
                .duration(300)
                .style("opacity", (d, i) => (activeIndex === null || i === activeIndex ? 1 : 0.4))

            legend
                .selectAll("text")
                .transition()
                .duration(300)
                .style("opacity", (d, i) => (activeIndex === null || i === activeIndex ? 1 : 0.4))
        }

        // Scale for the groups (countries)
        const x0Scale = d3
            .scaleBand()
            .domain(energyTuples.map(([country]) => country))
            .rangeRound([margin.left, width - margin.right])
            .paddingInner(0.2)

        // Scale for the bars within each group (energy types)
        type EnergyType = "gas" | "hydro" | "electricity"
        const energyTypes: EnergyType[] = ["gas", "hydro", "electricity"]

        const x1Scale = d3.scaleBand().domain(energyTypes).rangeRound([0, x0Scale.bandwidth()]).padding(0.1)

        // Compute the maximum value for the y-axis
        const maxEnergyValue = d3.max(energyTuples, ([, energySums]) => Math.max(energySums.gas, energySums.hydro, energySums.electricity))

        // Scale for the y-axis
        const yScale = d3
            .scaleLinear()
            .domain([0, maxEnergyValue! * 1.1])
            .range([height - margin.bottom, margin.top])

        // Group for each country
        const countryGroup = svg
            .selectAll(".country-group")
            .data(energyTuples)
            .join("g")
            .attr("class", "country-group")
            .attr("transform", (d) => `translate(${x0Scale(d[0])}, 0)`)

        // Bars for each energy type within the country group
        const pastelColors: Record<EnergyType, string> = {
            gas: "#a1c9f4", // Pastel Blue
            hydro: "#b8deb8", // Pastel Green
            electricity: "#ffb3de", // Pastel Pink
        }

        countryGroup
            .selectAll(".bar")
            .data((d) => energyTypes.map((type) => ({ type, value: d[1][type] })))
            .join("rect")
            .attr("class", "bar")
            .attr("x", (d) => x1Scale(d.type)!)
            .attr("y", (d) => yScale(d.value))
            .attr("width", x1Scale.bandwidth())
            .attr("height", (d) => height - margin.bottom - yScale(d.value))
            .attr("fill", (d) => pastelColors[d.type])

        // X-axis
        svg.append("g")
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(x0Scale))

        // Y-axis
        svg.append("g").attr("transform", `translate(${margin.left},0)`).call(d3.axisLeft(yScale))

        const legend = svg.append("g").attr("class", "legend").attr("transform", `translate(${margin.left}, 0)`)

        legend
            .selectAll("rect")
            .data(energyTypes)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 100) // Adjust spacing based on your layout
            .attr("y", 10)
            .attr("width", 15)
            .attr("height", 15)
            .style("fill", (type) => pastelColors[type])
            .on("click", function (event, d) {
                activeIndex = activeIndex === energyTypes.indexOf(d) ? null : energyTypes.indexOf(d)
                updateChart()
            })

        legend
            .selectAll("text")
            .data(energyTypes)
            .enter()
            .append("text")
            .attr("x", (d, i) => i * 100 + 20) // Align with the squares
            .attr("y", 25)
            .text((d) => d.charAt(0).toUpperCase() + d.slice(1)) // Capitalize labels
            .style("font-size", "12px")
            .style("cursor", "pointer")
            .on("click", function (event, d) {
                activeIndex = activeIndex === energyTypes.indexOf(d) ? null : energyTypes.indexOf(d)
                updateChart()
            })

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
    }

    return (
        <div className={`${theme === "light" ? "bg-slate-50" : "bg-[#515F73]"} w-full`}>
            <div className="max-w-[42.5rem] mx-auto p-2">
                <svg ref={ref} style={{ width: "100%", height: "auto" }} />
            </div>
        </div>
    )
}
