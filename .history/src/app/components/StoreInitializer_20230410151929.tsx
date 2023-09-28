"use client"

import { useRef } from "react"
import { useProperties } from "../usePropertiesStore"

interface Props {
  allProperties: Property[]
}

export default function StoreInitializer(allProperties: Props) {
  const initialized = useRef(false)
  if (!initialized.current) {
    //Zustand causes strange object enclosure, recreating the same key
    const allProperties = allProperties.allProperties
    useProperties.setState({ allProperties })

    console.log(useProperties((state) => state.allProperties))
    console.log("perchik")
    console.log(propertyList)
    initialized.current = true
  }
  return null
}
