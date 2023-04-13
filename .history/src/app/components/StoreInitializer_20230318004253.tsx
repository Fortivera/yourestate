"use client"

import { useRef } from "react"
import { useProperties } from "../usePropertiesStore"

function StoreInitializer({ allProperties }: {Property[]}) {
    const initialized = useRef(false)
    if (!initialized.current) {
        useProperties.setStore({ allProperties })
        initialized.current = true
    }
    return null
}