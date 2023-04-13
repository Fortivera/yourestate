import React from "react"
import { filterId, getData } from "lib/useRequestFunctions"
import EditProperty from "../../components/EditProperty"
import { useProperties } from "@/app/usePropertiesStore";

type Params = {
    params: {
        propertyid: number,
    }
}

export default async function ShowProperty({ params: { propertyid } }: Params) {

    const allPropertiesPromise: Promise<Property[]> = await getData()
    const allProperties = await allPropertiesPromise
    useProperties.setState({ allProperties })
    const filteredProperty = filterId(useProperti, propertyid) as Property

    return (
        <>
            <EditProperty property={filteredProperty} />
        </>
    )
}

