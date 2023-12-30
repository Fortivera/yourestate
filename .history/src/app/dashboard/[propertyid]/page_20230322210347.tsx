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
    //Zustand causes strange object enclosure, so we reassign to make create proper type
    const data = useProperties((state) => state.allProperties) as unknown as objAllProperties
    const allProperties = data.allProperties as unknown as Property[]
    const property: Property = filterId(allProperties, propertyid) as Property
    return (
        <>
            <EditProperty property={property} />
        </>
    )
}
