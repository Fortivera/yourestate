import React, { useContext, useEffect, useRef, useState } from "react"
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

interface Property {
    country: string
    electricity: number
    gas: number
    hydro: number
}

export const D3BarChart: React.FC<Props> = ({ allProperties }: Props) => {
    const ref = useRef<SVGSVGElement>(null)
    const { theme } = useContext(ThemeContext)
    const [svgWidth, setSvgWidth] = useState("0px") // State for SVG width

    useEffect(() => {
        if (allProperties && allProperties.length > 0) {
            const width = createBarChart(allProperties, theme)
            setSvgWidth(`${width}px`) // Update SVG width
        }
    }, [allProperties, theme])

    const createBarChart = (data: Property[], theme: string) => {
        if (!ref.current) return 0

        const svg = d3.select(ref.current)
        svg.selectAll("*").remove()

        const energySumsByCountry = new Map<string, EnergySums>()
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

        const energyTuples: [string, EnergySums][] = Array.from(energySumsByCountry.entries())

        const barWidth = 50 // Width for each bar group
        const dynamicWidth = barWidth * energyTuples.length

        const height = 500
        const margin = { top: 20, right: 30, bottom: 40, left: 50 }

        svg.attr("viewBox", `0 0 ${dynamicWidth} ${height}`).attr("preserveAspectRatio", "xMidYMid meet")

        const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`)

        let activeEnergyType: string | null = null

        const updateChart = () => {
            g.selectAll(".bar")
                .transition()
                .duration(300)
                .style("opacity", (d: any) => (activeEnergyType === null || d.type === activeEnergyType ? 1 : 0.1))

            legend
                .selectAll("rect")
                .transition()
                .duration(300)
                .style("opacity", (d) => (activeEnergyType === null || d === activeEnergyType ? 1 : 0.4))

            legend
                .selectAll("text")
                .transition()
                .duration(300)
                .style("opacity", (d) => (activeEnergyType === null || d === activeEnergyType ? 1 : 0.4))
        }

        const x0Scale = d3
            .scaleBand()
            .domain(energyTuples.map(([country]) => country))
            .rangeRound([margin.left, dynamicWidth - margin.right])
            .paddingInner(0.2)

        type EnergyType = "gas" | "hydro" | "electricity"
        const energyTypes: EnergyType[] = ["gas", "hydro", "electricity"]

        const x1Scale = d3.scaleBand().domain(energyTypes).rangeRound([0, x0Scale.bandwidth()]).padding(0.1)

        const maxEnergyValue = d3.max(energyTuples, ([, energySums]) => Math.max(energySums.gas, energySums.hydro, energySums.electricity))

        const yScale = d3
            .scaleLinear()
            .domain([0, maxEnergyValue! * 1.1])
            .range([height - margin.bottom, margin.top])

        const countryGroup = g
            .selectAll(".country-group")
            .data(energyTuples)
            .join("g")
            .attr("class", "country-group")
            .attr("transform", (d) => `translate(${x0Scale(d[0])}, 0)`)

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
            .on("click", function (event, d) {
                activeEnergyType = activeEnergyType === d.type ? null : d.type
                updateChart()
            })

        const xAxisGroup = g
            .append("g")
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(x0Scale))
        xAxisGroup
            .selectAll("path,line")
            .style("stroke", `${theme === "light" ? "black" : "white"}`)
            .style("stroke-width", "1px")
            .style("font-weight", "normal")
            .style("font-size", "1rem")
        xAxisGroup
            .selectAll("text")
            .style("fill", `${theme === "light" ? "black" : "white"}`)
            .style("stroke-width", "1px")
            .style("font-weight", "normal")
            .style("font-size", "1rem")

        const yAxisGroup = g.append("g").attr("transform", `translate(${margin.left},0)`).call(d3.axisLeft(yScale))
        yAxisGroup
            .selectAll("path,line")
            .style("stroke", `${theme === "light" ? "black" : "white"}`)
            .style("stroke-width", "1px")
            .style("font-weight", "normal")
            .style("font-size", "1rem")
        yAxisGroup
            .selectAll("text")
            .style("fill", `${theme === "light" ? "black" : "white"}`)
            .style("stroke-width", "1px")
            .style("font-weight", "normal")
            .style("font-size", "1rem")

        const legend = g.append("g").attr("class", "legend").attr("transform", `translate(100, 0)`).classed("cursor-pointer", true)

        legend
            .selectAll("rect")
            .data(energyTypes)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 100)
            .attr("y", 10)
            .attr("width", 15)
            .attr("height", 15)
            .style("fill", (type) => pastelColors[type])
            .on("click", function (event, d) {
                activeEnergyType = activeEnergyType === d ? null : d
                updateChart()
            })

        legend
            .selectAll("text")
            .data(energyTypes)
            .enter()
            .append("text")
            .attr("x", (d, i) => i * 100 + 20)
            .attr("y", 25)
            .text((d) => d.charAt(0).toUpperCase() + d.slice(1))
            .style("font-size", "1rem")
            .style("fill", `${theme === "light" ? "black" : "white"}`)
            .on("click", function (event, d) {
                activeEnergyType = activeEnergyType === d ? null : d
                updateChart()
            })

        return dynamicWidth + margin.left + margin.right
    }

    return (
        <div className={`${theme === "light" ? "bg-slate-50" : "bg-[#515F73]"} w-full`}>
            <div className="max-w-[42.5rem] mx-auto p-2" style={{ overflowX: "auto" }}>
                <svg ref={ref} style={{ width: svgWidth, height: "auto" }} />
            </div>
        </div>
    )
}
