"use client"
import React from "react"
import { filterId } from "lib/useRequestFunctions"
import EditProperty from "./EditProperty"
import { useProperties } from "@/app/usePropertiesStore";

interface Params {
    params: {
        propertyid: number,
    }
}

interface objAllProperties {
    allProperties: {
        data: Property[],
    }
}
export default function ShowProperty({ params: { propertyid } }: Params) {

    //Zustand causes strange object enclosure, so we reassign to make create proper type
    const allData = useProperties((state) => state.allProperties) as unknown as objAllProperties
    const allProperties = allData.data as unknown as Property[]

    return (
        <>
            <EditProperty property={filterId(allProperties, propertyid)} />
        </>
    )
}

