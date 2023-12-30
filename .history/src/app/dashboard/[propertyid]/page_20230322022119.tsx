"use client"
import React, { FormEvent, Suspense } from "react"
import { useHandleSpecificIdFilter } from "lib/useRequestFunctions"
import EditProperty from "./EditProperty"
import { useProperties } from "@/app/usePropertiesStore"

type Params = {
  params: {
    propertyid: number
  }
}

type objAllProperties = {
  allProperties: {
    allProperties: Property[]
  }
}
export default function ShowProperty({ params: { propertyid } }: Params) {
  const allProperties = useProperties((state) => state.allProperties) as unknown as objAllProperties

  console.log(allProperties.allProperties)
  console.log(typeof allProperties)

  function useHandleSpecificIdFilter(arr: objAllProperties, propertyid: number) {
    for (let i = 0; i < arr.allProperties.allProperties.length; i++) {
      console.log(typeof arr)
      if (arr.allProperties.allProperties[i].id != propertyid) {
      } else {
        return arr.allProperties.allProperties[i]
      }
    }
  }
  const property = useHandleSpecificIdFilter(allProperties, propertyid)
  // const property = useHandleSpecificIdFilter(allProperties, propertyid) as Property
  // console.log(property)

  return (
    <>
      <EditProperty property={property} />
    </>
  )
}
