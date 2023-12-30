import React from "react"
import { filterId, getData } from "lib/useRequestFunctions"
import EditProperty from "../../components/EditProperty"
import { useProperties } from "@/app/usePropertiesStore"

type Params = {
  params: {
    propertyid: number
  }
}

const store = useProperties.getState()
export default async function ShowProperty({ params: { propertyid } }: Params) {
  // const allProperties = useProperties.getState().allProperties

  // const allPropertiesPromise: Promise<Property[]> = await getData()
  // const allProperties = await allPropertiesPromise
  // useProperties.setState({ allProperties })
  debugger
  console.log("what a jike")
  console.log(store.allProperties)
  const filteredProperty = filterId(store.allProperties, propertyid) as Property

  return (
    <>
      <EditProperty property={filteredProperty} />
    </>
  )
}
