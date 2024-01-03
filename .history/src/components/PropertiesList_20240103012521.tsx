"use client"

import { Suspense, useContext, useState } from "react"
import Property from "./PropertyCard"
import Link from "next/link"
import SearchIcon from "./Search"
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
                <div className="flex mx-4 font-Noto text-base  ">
                    <div className="flex w-full relative">
                        <input type="text" className={`${theme === "light" ? "bg-slate-50" : "bg-slate-500/60"} relative pl-2 outline-none border-[1px] border-slate-200 rounded-lg mt-1 mb-1 h-8 w-full`} placeholder="Search..." onChange={handleChange} />
                        {searchedData && (
                            <button
                                onClick={handleSearchClear}
                                className={`${theme === "light" ? "text-slate-700 hover:bg-slate-200" : "text-white hover:bg-slate-400"}
                                    absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent rounded-full p-1`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        )}
                    </div>

                    <button type="submit">
                        <SearchIcon />
                    </button>
                </div>

                <ul className="pr-1">{searchUsed ? showSearchedProperties : showAllProperties}</ul>
                <Toaster />
            </div>
        </>
    )
}
