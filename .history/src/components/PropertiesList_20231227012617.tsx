"use client"

import { Suspense, useContext, useEffect, useState } from "react"
import Property from "./Property"
import Link from "next/link"
import SearchIcon from "./Search"
import { ThemeContext } from "@/context/ThemeContex"
import Loading from "@/app/loading"
import { usePropertyStore } from "@/app/usePropertiesStore"

// interface Props {
//   allProperties: Property[]
// }

export default function PropertiesList() {
  usePropertyStore((state) => state.fetchAllPropertiesZustand)
  let fetchedProperties = usePropertyStore((state) => state.allProperties)
  const [searchUsed, setSearchUsed] = useState<boolean>(false)
  const [searchedData, setSearchData] = useState("")

  useEffect(() => {
    fetchAllPropertiesZustand();
  }, [fetchAllPropertiesZustand]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1).toLowerCase()
    console.log(value)
    console.log(fetchedProperties)
    setSearchUsed(true)
    setSearchData(value)
  }

  const showAllProperties =
    fetchedProperties &&
    fetchedProperties.map((property: Property, index) => {
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
    fetchedProperties &&
    fetchedProperties
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
  const { theme } = useContext(ThemeContext)
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
