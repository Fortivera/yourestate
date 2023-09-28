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
    //Zustand causes strange object enclosure, recreating the same key
    const data = allProperties.allProperties
    useProperties.setState({ allProperties: data })

    console.log(useProperties.getState().allProperties)
    console.log("perchik")
    console.log(data)
    initialized.current = true
  }
  return null
}
