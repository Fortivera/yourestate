import React from "react"
import { filterId } from "lib/useRequestFunctions"
import EditProperty from "../../../components/EditProperty"
import { usePropertyStore } from "@/app/usePropertiesStore"

type Params = {
  params: {
    propertyid: number
  }
}

export default function ShowProperty({ params: { propertyid } }: Params) {
  // const allPropertiesPromise: Promise<Property[]> = await getProperty()
  // const allProperties = await allPropertiesPromise

  // usePropertyStore.setState({ allProperties })
  let allProperties = usePropertyStore((state) => state.allProperties)
  console.log(allProperties)
  const filteredByIdProperty = filterId(allProperties, propertyid) as Property

  return (
    <>
      <EditProperty property={filteredByIdProperty} />
    </>
  )
}
