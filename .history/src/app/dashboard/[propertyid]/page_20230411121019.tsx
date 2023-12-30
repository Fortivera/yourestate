"use client"

import React from "react"
import { filterId } from "lib/useRequestFunctions"
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
    console.log("[propertyid]")

    return (
        <>
            <EditProperty property={filterId(useProperties.getState().allProperties, propertyid)} />
        </>
    )
}
