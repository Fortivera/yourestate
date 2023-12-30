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

type objAllProperties = {
    allProperties: {
        allProperties: Property[]
    }
}
export default function ShowProperty({ params: { propertyid } }: Params) {
    //Zustand causes strange object enclosure, so we reassign to make create proper type
    const propertyData = useProperties((state) => state.allProperties) as unknown as objAllProperties
    const allProperties = propertyData.allProperties as unknown as Property[]
    // const allProperties = useProperties.getState().allProperties
    console.log("kek")
    console.log(allProperties)

    return (
        <>
            <EditProperty property={filterId(allProperties, propertyid)} />
        </>
    )
}
