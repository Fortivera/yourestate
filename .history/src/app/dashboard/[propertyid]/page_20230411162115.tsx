"use client"

import React, { use, useEffect, useState } from "react"
import { filterId, getData } from "lib/useRequestFunctions"
import EditProperty from "../../components/EditProperty"
import { useProperties } from "@/app/usePropertiesStore"
import StoreInitializer from "@/app/components/StoreInitializer"

type Params = {
  params: {
    propertyid: number
  }
}

export default function ShowProperty({ params: { propertyid } }: Params) {
  // const allProperties = useProperties.getState().allProperties

  const [properties, setProperties] = useState<Property[]>([])
  useEffect(() => {
    const fetchData = async () => {
      console.log("useProperties.getState().allProperties")
    }
    fetchData()
  }, [])

  return (
    <>
      <EditProperty property={filterId(useProperties.getState().allProperties, propertyid)} />
    </>
  )
}
