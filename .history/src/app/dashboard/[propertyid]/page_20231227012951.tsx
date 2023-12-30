"use client"
import React from "react"
import { filterId } from "lib/useRequestFunctions"
import EditProperty from "../../../components/EditProperty"
import { usePropertyStore } from "@/app/usePropertiesStore"

type Params = {
    params: {
        propertyid: number
    }
}

export default function ShowProperty({ params: { propertyid } }: Params) {
    const zustandAllProperties = usePropertyStore((state) => state.allProperties)

    const filteredByIdProperty = filterId(zustandAllProperties, propertyid) as Property

    return (
        <>
            <EditProperty property={filteredByIdProperty} />
        </>
    )
}
