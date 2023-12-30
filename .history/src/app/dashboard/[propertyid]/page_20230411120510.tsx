"use client"

import React, { useEffect, useState } from "react"
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
    useState
    useEffect(() => {
        const allProperties = useProperties.getState().allProperties
        console.log("[propertyid]")
        console.log(allProperties)
    })

    return (
        <>
            <StoreInitializer allProperties={allProperties} />
            <EditProperty property={filterId(allProperties, propertyid)} />
        </>
    )
}
