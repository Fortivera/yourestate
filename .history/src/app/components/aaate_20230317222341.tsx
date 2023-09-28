"use client"

import Link from "next/link"
import CancelIcon from "public/CancelIcon"
import Button from "./Button"
import { useProperties } from "../usePropertiesStore"

export default function Kek(propertyid: any) {
  const { allProperties } = useProperties.getState()
  console.log(allProperties)

  function handleSpecificIdFilter(arr: Property[], propertyid: number) {
    for (let i = 0; i < arr.length; i++) {
      try {
        if (arr[i].id != propertyid) {
          continue
        } else {
          return arr[i]
        }
      } catch (error) {
        console.error(error)
      }
    }
  }

  const property = handleSpecificIdFilter(allProperties, propertyid) as Property
  console.log(property)

  return <></>
}
