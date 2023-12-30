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
        if (ref.current) {
            createBarChart(allProperties)
        }
    }, [allProperties])

    const createBarChart = (data: Property[]) => {
        const margin = { top: 20, right: 20, bottom: 30, left: 40 }
        const width = 960 - margin.left - margin.right
        const height = 500 - margin.top - margin.bottom

        // Clean up existing elements before creating a new chart
        const svg = d3.select(ref.current)
        svg.selectAll("*").remove()

        // Append the svg object to the body of the page
        const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`)

        // Extract the sum of energies by country
        const energySumsByCountry: Record<string, EnergySums> = {}

        data.forEach((property) => {
            if (!energySumsByCountry[property.country]) {
                energySumsByCountry[property.country] = {
                    electricity: property.electricity,
                    gas: property.gas,
                    hydro: property.hydro,
                }
            } else {
                energySumsByCountry[property.country].electricity += property.electricity
                energySumsByCountry[property.country].gas += property.gas
                energySumsByCountry[property.country].hydro += property.hydro
            }
        })

        const countries = Object.keys(energySumsByCountry)
        const energyTypes = ["electricity", "gas", "hydro"]

        const x0 = d3.scaleBand().rangeRound([0, width]).paddingInner(0.1).domain(countries)

        const x1 = d3.scaleBand().padding(0.05).domain(energyTypes).rangeRound([0, x0.bandwidth()])

        const y = d3
            .scaleLinear()
            .rangeRound([height, 0])
            .domain([0, d3.max(Object.values(energySumsByCountry), (d) => Math.max(d.electricity!, d.gas!, d.hydro!)) || 0])

        const xAxis = g.append("g").attr("transform", `translate(0,${height})`).call(d3.axisBottom(x0))

        const yAxis = g.append("g").call(d3.axisLeft(y).ticks(null, "s"))

        const color = d3.scaleOrdinal().range(["#6f42c1", "#fd7e14", "#20c997"]).domain(energyTypes)

        const legend = svg
            .append("g")
            .attr("font-size", 10)
            .attr("text-anchor", "end")
            .selectAll("g")
            .data(energyTypes.slice().reverse())
            .enter()
            .append("g")
            .attr("transform", (d, i) => `translate(-50,${i * 20})`)

        legend
            .append("rect")
            .attr("x", width - 19)
            .attr("width", 19)
            .attr("height", 19)
            .attr("fill", color)

        legend
            .append("text")
            .attr("x", width - 24)
            .attr("y", 9.5)
            .attr("dy", "0.32em")
            .text((d) => d)

        g.append("g")
            .selectAll("g")
            .data(countries)
            .enter()
            .append("g")
            .attr("transform", (d) => `translate(${x0(d)},0)`)
            .selectAll("rect")
            .data((d) => energyTypes.map((key) => ({ key, value: energySumsByCountry[d][key] })))
            .enter()
            .append("rect")
            .attr("x", (d) => x1(d.key)!)
            .attr("y", (d) => y(d.value))
            .attr("width", x1.bandwidth())
            .attr("height", (d) => height - y(d.value))
            .attr("fill", (d) => color(d.key))
    }

    return (
        <div className={`${theme === "light" ? "bg-white" : "bg-gray-800"} w-full`}>
            <svg ref={ref} width={960} height={500} />
        </div>
    )
}

export default D3BarChart
