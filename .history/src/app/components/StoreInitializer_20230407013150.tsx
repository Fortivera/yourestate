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

export default function StoreInitializer(allProperties: any) {
  const initialized = useRef(false)
  if (!initialized.current) {
    //Zustand causes strange object enclosure, recreating the same key
    const data = allProperties.allProperties
    const aa = useProperties.setState({ allProperties })
    console.log(aa)
    console.log("perchik")
    console.log(data)
    initialized.current = true
  }
  return null
}
