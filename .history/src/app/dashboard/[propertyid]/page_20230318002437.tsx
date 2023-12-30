import Link from "next/link"
import React, { FormEvent, Suspense } from "react"
import { Modal } from "../../components/Modal"
import CancelIcon from "public/CancelIcon"
import { useRouter } from "next/navigation"

import Button from "@/app/components/DeleteButton"

import { useHandleSpecificIdFilter } from "lib/useRequestFunctions"
import EditProperty from "./EditProperty"
import { useProperties } from "@/app/usePropertiesStore"

type Params = {
    params: {
        propertyid: number
    }
}

export default function ShowProperty({ params: { propertyid } }: Params) {
    const { allProperties } = useProperties.getState()

    // console.log(allProperties)
    const property = useHandleSpecificIdFilter(allProperties, propertyid) as Property
    console.log("d")
    console.log(property)

    // const property: Property = await getProperty(propertyid)

    return <EditProperty property={property} />
}
