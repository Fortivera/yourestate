"use client"

import { useRef } from "react"
import { useProperties } from "../usePropertiesStore"

interface Props {
    allProperties: Property[],
}



export default function StoreInitializer(data: Props) {

    const initialized = useRef(false)
    if (!initialized.current) {

        //Zustand causes strange object enclosure, so it is required to destructure after this step
        const allProperties = data.allProperties
        useProperties.setState({ allProperties })

        console.log(useProperties(state => state.allProperties))
        console.log("im in the initializere")

        initialized.current = true
    }
    return null
}