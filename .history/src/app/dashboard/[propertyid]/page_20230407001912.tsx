"use client"

import React from "react"
import { filterId } from "lib/useRequestFunctions"
import EditProperty from "../../components/EditProperty"
import { useProperties } from "@/app/usePropertiesStore";


type Params = {
    params: {
        propertyid: number,
    }
}


export default function ShowProperty({ params: { propertyid } }: Params) {

    //Zustand causes strange object enclosure, so we reassign to make create proper type
    const { allProperties } = useProperties((state) => state)

    console.log(allProperties)

    return (
        <>
            <EditProperty property={filterId(allProperties, propertyid)} />
        </>
    )
}

