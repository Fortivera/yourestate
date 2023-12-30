"use client"

import Link from "next/link"
import React, { FormEvent, Suspense } from "react"
import { Modal } from "../../components/Modal"
import CancelIcon from "public/CancelIcon"
import { useRouter } from "next/navigation"
import { useProperties } from "../../usePropertiesStore"
import Button from "@/app/components/DeleteButton"
import { useEffect, useState } from "react"
import { useHandleSpecificIdFilter } from "lib/useRequestFunctions"
import EditProperty from "./EditProperty"

type Params = {
  params: {
    propertyid: number
  }
}

export default function ShowProperty({ params: { propertyid } }: Params) {
  const { allProperties } = useProperties((state) => state.allProperties)
  console.log(allProperties)
  const property: Property = useHandleSpecificIdFilter(allProperties, propertyid) as Property
  console.log(property)

  // const property: Property = await getProperty(propertyid)

  return <EditProperty property={property} />
}
