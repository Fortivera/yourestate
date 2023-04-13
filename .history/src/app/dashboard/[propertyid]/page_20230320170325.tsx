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

type obj = {
    aallProperties: {
        aallProperties: [],
    }
}
export default function ShowProperty({ params: { propertyid } }: Params) {


    const { aallProperties } = useProperties((state) => state.allProperties) as unknown as obj

    console.log(aallProperties)
    console.log(typeof (aallProperties))


    function useHandleSpecificIdFilter(arr: any, propertyid: number) {
        for (let i = 0; i < arr.length; i++) {

            if (arr[i].id != propertyid) {

            } else {
                return arr[i]
            }

        }
    }
    const property = useHandleSpecificIdFilter(aallProperties, propertyid)
    // const property = useHandleSpecificIdFilter(allProperties, propertyid) as Property
    // console.log(property)






    return (
        <>
            <EditProperty property={property} />
        </>
    )
}

