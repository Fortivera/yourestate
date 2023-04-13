"use client"
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


    const { allProperties } = useProperties()

    console.log('d')
    console.log(allProperties)
    function useHandleSpecificIdFilter(arr: any, propertyid: number) {
        for (let i = 0; i < arr.length; i++) {
            try {
                if (arr[i].id != propertyid) {
                    continue
                } else {
                    return arr[i]
                }
            } catch (error) {
                console.error(error)
            }
        }
    }
    const property: Property = useHandleSpecificIdFilter(allProperties, propertyid)
    // const property = useHandleSpecificIdFilter(allProperties, propertyid) as Property
    console.log(property)




    // const property: Property = await getProperty(propertyid)

    return (
        <>
            <EditProperty property={property} />
        </>
    )
}

