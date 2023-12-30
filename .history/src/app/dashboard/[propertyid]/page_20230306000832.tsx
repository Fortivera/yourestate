import React from "react"
import { Modal } from "../Modal"

type Params = {
    params: {
        propertyId: number
    }
}

export default async function PropertyPage({ params: { propertyId } }: Params) {
    const propertyData: Promise<Property> = getProperty(propertyId)
    const property = await propertyData
    return (
        <>
            <div>{property.City}</div>
        </>
    )
}

export async function getProperty(propertyId: number) {
    const response = await fetch(`http://localhost:5085/api/Properties/${propertyId}`)

    if (!response.ok) {
        throw new Error("Failed to fetch data")
    }

    const data = await response.json()
    console.log(data)
    return data
}
