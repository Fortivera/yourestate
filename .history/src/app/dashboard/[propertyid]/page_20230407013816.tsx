"use client"

import React from "react"
import { filterId } from "lib/useRequestFunctions"
import EditProperty from "../../components/EditProperty"
import { useProperties } from "@/app/usePropertiesStore"

type Params = {
  params: {
    propertyid: number
  }
}

export default function ShowProperty({ params: { propertyid } }: Params) {
  const allProperties = useProperties.getState().allProperties
  console.log("kekq")
  console.log(allProperties)

  return (
    <>
      <EditProperty property={filterId(allProperties, propertyid)} />
    </>
  )
}
