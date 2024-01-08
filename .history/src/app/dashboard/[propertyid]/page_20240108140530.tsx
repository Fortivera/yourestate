"use client"
import React from "react"
import { filterId } from "lib/useRequestFunctions"
import EditProperty from "../../../components/EditProperty"
// import { usePropertyStore } from "@/app/usePropertiesStore"

import { useQueryClient } from "@tanstack/react-query"
type Params = {
    params: {
        propertyid: number
    }
}

export default function ShowProperty({ params: { propertyid } }: Params) {
    // const allPropertiesPromise: Promise<Property[]> = await getProperty()
    // const allProperties = await allPropertiesPromise

    // usePropertyStore.setState({ allProperties })
    // const zustandAllProperties = usePropertyStore.getState().allProperties

    const queryClient = useQueryClient()
    const allProperties = queryClient.getQueryData<Property[]>(["allProperties"])

    if (!allProperties) {
        // Return a loading indicator, or handle appropriately
        return <div>Loading...</div>
    }

    const filteredByIdProperty = filterId(allProperties, Number(propertyid)) as Property
    if (!filteredByIdProperty) {
        // Return an error message, redirect, or handle appropriately
        return <div>Property not found</div>
    }
    console.log("filteredByIdProperty", filteredByIdProperty)
    return (
        <>
            <EditProperty key={propertyid} property={filteredByIdProperty} allProperties={allProperties} />
        </>
    )
}
