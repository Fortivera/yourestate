"use client"

import { Suspense, useContext, useState } from "react"
import Property from "./Property"
import Link from "next/link"
import SearchIcon from "./Search"
import { ThemeContext } from "@/context/ThemeContex"

import { useQuery } from "@tanstack/react-query"
import { getProperty } from "lib/useRequestFunctions"
import Loading from "@/app/loading"
import { Toaster, ToastIcon resolveValue } from "react-hot-toast"

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

    const showAllProperties =
        allProperties &&
        allProperties.map((property: Property) => {
            return (
                <>
                    <Suspense fallback={<Loading />}>
                        <li key={property.id} className="border-b-2 last:border-b-0">
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
                return (
                    <>
                        <Suspense fallback={<Loading />}>
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
                <Toaster position="top-right">
      {(t) => (
        <Transition
          appear
          show={t.visible}
          className="transform p-4 flex bg-white rounded shadow-lg"
          enter="transition-all duration-150"
          enterFrom="opacity-0 scale-50"
          enterTo="opacity-100 scale-100"
          leave="transition-all duration-150"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-75"
        >
          <ToastIcon toast={t} />
          <p className="px-2">{resolveValue(t.message)}</p>
        </Transition>
      )}
    </Toaster>
            </div>
        </>
    )
}
