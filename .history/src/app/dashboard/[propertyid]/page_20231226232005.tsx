import React from "react"
import { filterId } from "lib/useRequestFunctions"
import EditProperty from "../../../components/EditProperty"
import { usePropertyStore } from "@/app/usePropertiesStore"

type Params = {
    params: {
        propertyid: number
    }
}

export default async function ShowProperty({ params: { propertyid } }: Params) {
    // const allPropertiesPromise: Promise<Property[]> = await getProperty()
    // const allProperties = await allPropertiesPromise

    // usePropertyStore.setState({ allProperties })
    const zustandAllProperties = usePropertyStore((state) => state.allProperties)

    const filteredByIdProperty = filterId(zustandAllProperties, propertyid) as Property

    return (
        <>
            <EditProperty property={filteredByIdProperty} />
        </>
    )
}
