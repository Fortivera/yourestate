import React from "react"
import { filterId, getData } from "lib/useRequestFunctions"
import EditProperty from "../../components/EditProperty"
import { useProperties } from "@/app/usePropertiesStore"

type Params = {
  params: {
    propertyid: number
  }
}

export default async function ShowProperty({ params: { propertyid } }: Params) {
  // const allProperties = useProperties.getState().allProperties

  // const allPropertiesPromise: Promise<Property[]> = await getData()
  // const allProperties = await allPropertiesPromise
  // useProperties.setState({ allProperties })
  debugger
  const store = useProperties.getState()
  console.log(store.allProperties)
  const filteredProperty = filterId(store.allProperties, propertyid) as Property

  return (
    <>
      <EditProperty property={filteredProperty} />
    </>
  )
}
