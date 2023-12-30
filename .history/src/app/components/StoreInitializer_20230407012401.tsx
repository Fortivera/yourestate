"use client"

import { useRef } from "react"
import { useProperties } from "../usePropertiesStore"

interface Props {
    allProperties: Property[]
}

type objAllProperties = {
    allProperties: {
        allProperties: Property[]
    }
}

export default function StoreInitializer(allProperties: Props) {
    const initialized = useRef(false)
    if (!initialized.current) {
        const data = allProperties.allProperties
        useProperties.setState(allProperties)
        console.log("perchik")
        console.log(data)
        initialized.current = true
    }
    return null
}
