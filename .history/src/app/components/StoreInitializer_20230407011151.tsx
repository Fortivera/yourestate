"use client"

import { useRef } from "react"
import { useProperties } from "../usePropertiesStore"

interface kek {
    data: Property[],
}

export default function StoreInitializer(data: kek) {
    const initialized = useRef(false)
    if (!initialized.current) {
        const { allProperties } = data
        useProperties.setState(allProperties)
        console.log("perchik")
        console.log(allProperties)
        initialized.current = true
    }
    return null
}