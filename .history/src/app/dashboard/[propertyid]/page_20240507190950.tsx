"use client"
import React from "react"
import { filterId } from "lib/useRequestFunctions"
import EditProperty from "../../../components/EditProperty"

import { useQueryClient } from "@tanstack/react-query"
type Params = {
    params: {
        propertyid: number
    }
}

export default function ShowProperty({ params: { propertyid } }: Params) {
    const queryClient = useQueryClient()
    const allProperties = queryClient.getQueryData<Property[]>(["allProperties"])

    if (!allProperties) {
        // Return a loading indicator, or handle appropriately
        return <div>Loading...</div>
    }

    const filteredByIdProperty = filterId(allProperties, Number(propertyid)) as Property
    if (!filteredByIdProperty) {
        return <div>Property not found</div>
    }
    console.log(queryClient.getQueryCache())

    return (
        <>
            <EditProperty key={propertyid} property={filteredByIdProperty} allProperties={allProperties} />
        </>
    )
}
