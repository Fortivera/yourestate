"use client"

import React, { use, useEffect } from "react"
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
    console.log("[propertyid]")
    useEffect(() => {
        const allPropertiesPromise: Promise<Property[]> = await getData()
        const allProperties = await allPropertiesPromise
    })

    return (
        <>
            <EditProperty property={filterId(useProperties.getState().allProperties, propertyid)} />
        </>
    )
}
