"use client"

// import { useContext, useState } from "react"
// import Property from "./Property"
// import Link from "next/link"
// import SearchIcon from "./Search"
// import { ThemeContext } from "@/context/ThemeContex"

import { useQuery } from "@tanstack/react-query"
import { getProperty } from "lib/useRequestFunctions"

// interface Props {
//     allProperties: Property[]
// }

export default function PropertiesList() {
  const { data: allProperties, error } = useQuery({
    queryKey: ["allProperties"],
    queryFn: getProperty,
  })

  if (error) return <div>Failed to load</div>
  if (!allProperties) return <div>Loading...</div>

  return (
    <ul>
      {allProperties.map((property) => (
        <li key={property.id}>{property.country}</li>
      ))}
    </ul>
  )
}
