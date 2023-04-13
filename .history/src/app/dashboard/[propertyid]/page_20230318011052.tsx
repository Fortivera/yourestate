import React, { FormEvent, Suspense } from "react"
import { useHandleSpecificIdFilter } from "lib/useRequestFunctions"
import EditProperty from "./EditProperty"
import { useProperties } from "@/app/usePropertiesStore";

type Params = {
    params: {
        propertyid: number,
    }
}

export default function ShowProperty({ params: { propertyid } }: Params) {


    const allProperties = useProperties.getState().allProperties

    console.log('d')
    console.log(allProperties)
    const property = useHandleSpecificIdFilter(allProperties, propertyid) as Property
    console.log(property)




    // const property: Property = await getProperty(propertyid)

    return (
        <EditProperty property={property} />
    )
}

