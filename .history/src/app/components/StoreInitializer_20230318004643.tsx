"use client"

import { useRef } from "react"
import { useProperties } from "../usePropertiesStore"

export default function StoreInitializer(allProperties: Property[]) {
    const initialized = useRef(false)
    if (!initialized.current) {
        useProperties.setState({ allProperties: allProperties })
        initialized.current = true
    }
    return null
}