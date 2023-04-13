"use client"

import { useRef } from "react"
import { useProperties } from "../usePropertiesStore"

interface Props {
    allProperties: Property[]
}

export default function StoreInitializer(allProperties: Props) {
    const initialized = useRef(false)
    if (!initialized.current) {
        useProperties.setState(allProperties)
        console.log("perchik")
        console.log(allProperties)
        initialized.current = true
    }
    return null
}