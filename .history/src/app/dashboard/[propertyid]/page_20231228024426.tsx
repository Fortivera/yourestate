"use client"
import React from "react"
import { filterId, getProperty } from "lib/useRequestFunctions"
import EditProperty from "../../../components/EditProperty"
// import { usePropertyStore } from "@/app/usePropertiesStore"
import { useQuery } from "@tanstack/react-query"

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

    const { data: allProperties } = useQuery({
        queryKey: ["allProperties"],
        getProperty,{ enabled: false }
    })
 
    const filteredByIdProperty = filterId(allProperties!, propertyid) as Property
    return (
        <>
            <EditProperty property={filteredByIdProperty} />
        </>
    )
}
