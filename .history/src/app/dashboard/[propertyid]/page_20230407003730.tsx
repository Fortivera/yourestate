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

    const { allProperties } = useProperties.getState()
    console.log("kek")
    console.log({ allProperties })

    return (
        <>
            <EditProperty property={filterId(allProperties, propertyid)} />
        </>
    )
}
