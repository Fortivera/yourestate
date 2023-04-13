"use client"

import { useRef } from "react"
import { useProperties } from "../usePropertiesStore"

interface Props {
    allProperties: Property[],
}



export default function StoreInitializer(allProperties: any) {
    console.log(allProperties)
    const initialized = useRef(false)
    if (!initialized.current) {

        //Zustand causes strange object enclosure, recreating the same key
        const propertyList = allProperties.allProperties
        useProperties.setState({ allProperties: propertyList })

        console.log(useProperties(state => state.allProperties))
        console.log("perchik")
        console.log(propertyList)
        initialized.current = true
    }
    return null
}