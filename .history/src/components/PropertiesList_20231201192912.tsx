"use client"

import { Suspense, useContext, useState } from "react"
import Property from "./Property"
import Link from "next/link"
import SearchIcon from "./Search"
import { ThemeContext } from "@/context/ThemeContex"

interface Props {
  allProperties: Property[]
}

export default function PropertiesList({ allProperties }: Props) {
  const [searchUsed, setSearchUsed] = useState<boolean>(false)
  const [searchedData, setSearchData] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1).toLowerCase()
    console.log(value)
    console.log(allProperties)
    setSearchUsed(true)
    setSearchData(value)
  }

  // async function postHandler(event: FormEvent<HTMLFormElement>) {
  //     event.preventDefault()

  //     const dataCollected = event.target as HTMLFormElement
  //     const formData = new FormData(dataCollected) as Iterable<[SearchBar, FormDataEntryValue]>
  //     const requestData: Property = Object.fromEntries(formData);

  //     setSearchUsed(true)
  //     setSearchData(requestData)
  //     debugger
  //     console.log(requestData)

  // const allPropertiesPromise: any = await getData()
  // const fetchedProperties = await allPropertiesPromise
  // useProperties.setState({ allProperties: fetchedProperties })

  // console.log(allProperties)

  // }

  const showAllProperties =
    allProperties &&
    allProperties.map((property: Property) => {
      return (
        <>
          <Suspense fallback={<div>Loading properties...</div>}>
            <li>
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
      .filter((property: Property) => property.country.includes(searchedData) || property.city.includes(searchedData) || property.type.includes(searchedData) || property.address.includes(searchedData))
      .map((filteredProperty: Property) => {
        console.log(filteredProperty)
        return (
          <>
            <Suspense fallback={<div>Loading properties...</div>}>
              <li>
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
      <div className={`w-full h-full pt-1 border-b-2 border-r-2 ${theme === "light" ? "propertyListLight" : "propertyListDark"} border-gray-200   shadow-neutral-400 shadow-sm overflow-auto`}>
        <div className="flex ml-2 mr-1 font-Noto text-base  ">
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
