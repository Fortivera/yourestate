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

type objAllProperties = {
    allProperties: {
        allProperties: Property[],
    }
}
export default function ShowProperty({ params: { propertyid } }: Params) {


    const alllProperties = useProperties((state) => state.allProperties) as unknown as objAllProperties
    const allProperties = { alllProperties }
    console.log(allProperties)
    console.log(typeof (allProperties))


    function useHandleSpecificIdFilter(arr: Property[], propertyid: number) {
        for (let i = 0; i < arr.length; i++) {
            console.log(typeof (arr))
            if (arr[i].id != propertyid) {

            } else {
                return arr[i]
            }

        }
    }
    const property = useHandleSpecificIdFilter(alllProperties, propertyid)
    // const property = useHandleSpecificIdFilter(allProperties, propertyid) as Property
    // console.log(property)






    return (
        <>
            <EditProperty property={property} />
        </>
    )
}

