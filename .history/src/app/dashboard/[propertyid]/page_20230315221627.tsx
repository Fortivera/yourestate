'use client'

import Link from "next/link"
import React, { FormEvent, Suspense } from "react"
import { Modal } from "../../components/Modal"
import CancelIcon from "public/CancelIcon"
import { useRouter } from 'next/navigation';
import { useProperties } from "../../usePropertiesStore"
import Button from "@/app/components/Button";
import { useEffect, useState } from "react"
import { useHandleSpecificIdFilter } from "@/app/lib/useRequestFunctions"
import EditProperty from "./EditProperty"

type Params = {
    params: {
        propertyid: number,
    }
}

export default function ShowProperty({ params: { propertyid } }: Params) {


    const { allProperties } = useProperties.getState()
    console.log(allProperties)
    const property = useHandleSpecificIdFilter(allProperties, propertyid) as Property console.log(property)




    // const property: Property = await getProperty(propertyid)

    return (
        <EditProperty property={property} />
    )
}

