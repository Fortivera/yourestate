"use client"

import { Suspense, useContext, useState } from "react"
import Property from "./Property"
import Link from "next/link"
import SearchIcon from "./Search"
import { ThemeContext } from "@/context/ThemeContex"
import Loading from "@/app/loading"
import { useQuery } from "@tanstack/react-query"
import { getProperty } from "lib/useRequestFunctions"

interface Props {
    allProperties: Property[]
}

export default function PropertiesList({ allProperties }: Props) {
    const [searchUsed, setSearchUsed] = useState<boolean>(false)
    const [searchedData, setSearchData] = useState("")
    const { theme } = useContext(ThemeContext)
    
    const { data, error } = useQuery({
        queryKey: ["allProperties"],
        queryFn: getProperty,
    })
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1).toLowerCase()
        console.log(value)
        console.log(allProperties)
        setSearchUsed(true)
        setSearchData(value)
    }

    const showAllProperties =
        allProperties &&
        allProperties.map((property: Property, index) => {
            return (
                <>
                    <Suspense fallback={<Loading />}>
                        <li key={index} className="border-b-2 last:border-b-0">
                            <Link href={`/dashboard/${property.id}`}>
                                <Property property={property} />
                            </Link>
                        </li>
                    </Suspense>
                </>
            )
        })

    const showSearchedProperties =
        allProperties &&
        allProperties
            .filter((property: Property) => property.country.toLowerCase().includes(searchedData.toLowerCase()) || property.city.toLowerCase().includes(searchedData.toLowerCase()) || property.type.toLowerCase().includes(searchedData.toLowerCase()) || property.address.toLowerCase().includes(searchedData.toLowerCase()))
            .map((filteredProperty: Property) => {
                console.log(filteredProperty)
                return (
                    <>
                        <Suspense fallback={<div>Loading properties...</div>}>
                            <li key={filteredProperty.id}>
                                <Link href={`/dashboard/${filteredProperty.id}`}>
                                    <Property property={filteredProperty} />
                                </Link>
                            </li>
                        </Suspense>
                    </>
                )
            })
    return (
        <>
            <div className={`w-full h-full pt-1 border-b-2 md:border-r-2 ${theme === "light" ? "propertyListLight" : "propertyListDark"} border-gray-200   shadow-neutral-400 shadow-sm overflow-auto`}>
                <div className="flex mx-4 font-Noto text-base  ">
                    <div className="w-full">
                        <input type="text" className={`${theme === "light" ? "bg-slate-50" : "bg-slate-500/60"} relative pl-2 outline-none border-[1px] border-slate-200 rounded-lg mt-1 mb-1 h-8 w-full`} placeholder="Search..." onChange={handleChange} />
                    </div>

                    <button type="submit">
                        <SearchIcon />
                    </button>
                </div>

                <ul>{searchUsed ? showSearchedProperties : showAllProperties}</ul>
            </div>
        </>
    )
}
