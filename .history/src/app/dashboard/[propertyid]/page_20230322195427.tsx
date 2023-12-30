"use client"
import React from "react"
import { filterId } from "lib/useRequestFunctions"
import EditProperty from "./EditProperty"
import { useProperties } from "@/app/usePropertiesStore"

interface Params {
    params: {
        propertyid: number
    }
}

interface objAllProperties {
    allProperties: {
        allProperties: Property[]
    }
}
export default function ShowProperty({ params: { propertyid } }: Params) {
    const data = useProperties((state) => state.allProperties) as unknown as objAllProperties
    const allProperties = data.allProperties as unknown as Property[]
    // console.log(allProperties.allProperties)
    // console.log(typeof (allProperties))

    return (
        <>
            <EditProperty property={filterId(allProperties, propertyid)} />
        </>
    )
}
