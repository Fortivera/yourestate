"use client"

import React from "react"
// import { filterId } from "lib/useRequestFunctions"
import EditProperty from "../../../components/EditProperty"
// import { usePropertyStore } from "@/app/usePropertiesStore"

type Params = {
  params: {
    propertyid: number
  }
}

export default function ShowProperty({ params: { propertyid } }: Params) {
  // const { allProperties } = usePropertyStore()
  // const allPropertiesPromise: Promise<Property[]> = await getProperty()
  // const allProperties = await allPropertiesPromise

  // usePropertyStore.setState({ allProperties })
  // let allProperties = usePropertyStore.getState().allProperties
  // console.log(allProperties)
  // const filteredByIdProperty = filterId(allProperties, propertyid) as Property

  return (
    <>
      <EditProperty propertyid={propertyid} />
    </>
  )
}
