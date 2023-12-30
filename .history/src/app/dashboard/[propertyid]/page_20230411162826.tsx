import React from "react"
import { filterId, getData } from "lib/useRequestFunctions"
import EditProperty from "../../components/EditProperty"
import { useProperties } from "@/app/usePropertiesStore"
import StoreInitializer from "@/app/components/StoreInitializer"

type Params = {
    params: {
        propertyid: number
    }
}

export default async function ShowProperty({ params: { propertyid } }: Params) {
    // const allProperties = useProperties.getState().allProperties

    const allPropertiesPromise: Promise<Property[]> = await getData()
    const allProperties = await allPropertiesPromise
    // setProperties(allProperties)

    console.log(useProperties.getState().allProperties)

    return (
        <>
            <EditProperty property={filterId(allProperties, propertyid)} />
        </>
    )
}
