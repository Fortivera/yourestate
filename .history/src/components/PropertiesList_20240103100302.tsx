"use client"

import { Suspense, useContext, useState } from "react"
import Property from "./PropertyCard"
import Link from "next/link"

import { ThemeContext } from "@/context/ThemeContex"

import { useQuery } from "@tanstack/react-query"
import { getProperty } from "lib/useRequestFunctions"
import Loading from "@/app/loading"
import { Toaster } from "react-hot-toast"
import PropertyCard from "./PropertyCard"

// interface Props {
//     allProperties: Property[]
// }

export default function PropertiesList() {
    const [searchUsed, setSearchUsed] = useState<boolean>(false)
    const [searchedData, setSearchData] = useState("")
    const { theme } = useContext(ThemeContext)
    const { data: allProperties, error } = useQuery({
        queryKey: ["allProperties"],
        queryFn: getProperty,
    })
    if (error) return <div>Failed to load</div>

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1).toLowerCase()
        setSearchUsed(true)
        setSearchData(value)
    }
    const handleSearchClear = () => {
        setSearchUsed(false)
        setSearchData("")
    }
    const showAllProperties =
        allProperties &&
        allProperties.map((property: Property) => {
            return (
                <>
                    <Suspense fallback={<Loading />}>
                        <li key={property.id} className="py-[4px] last:border-b-0">
                            <Link href={`/dashboard/${property.id}`}>
                                <PropertyCard property={property} />
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
                return (
                    <>
                        <Suspense fallback={<Loading />}>
                            <li key={filteredProperty.id} className="border-b-2 last:border-b-0">
                                <Link href={`/dashboard/${filteredProperty.id}`}>
                                    <PropertyCard property={filteredProperty} />
                                </Link>
                            </li>
                        </Suspense>
                    </>
                )
            })
    return (
        <>
            <div className={`w-full h-full pt-1 border-b-2 md:border-r-2 ${theme === "light" ? "bg-slate-600/10 border-[#e4e7ec]" : "propertyListDark border-[#536079]"}    shadow-neutral-400 shadow-sm overflow-auto`}>
                <form>
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                        Search
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                    </div>
                </form>

                <ul className="pr-1">{searchUsed ? showSearchedProperties : showAllProperties}</ul>
                <Toaster />
            </div>
        </>
    )
}
