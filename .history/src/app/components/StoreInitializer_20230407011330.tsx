"use client"

import { useRef } from "react"
import { useProperties } from "../usePropertiesStore"

interface kek {
    allProperties: Property[]
}

export default function StoreInitializer(allProperties: kek) {
    const initialized = useRef(false)
    if (!initialized.current) {
        const { allProperties } = allProperties
        useProperties.setState(allProperties)
        console.log("perchik")
        console.log(data)
        initialized.current = true
    }
    return null
}
