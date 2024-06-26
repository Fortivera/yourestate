import React from "react"
import { Modal } from "../components/Modal"

type Params = {
    params: {
        propertyid: number
    }
}

async function getProperty(propertyid: number) {
    const response = await fetch(`http://localhost:5085/api/Properties/${propertyid}`)
    if (!response.ok) {
        throw new Error("Failed to fetch data")
    }
    const data = await response.json()
    console.log(data)
    return data
}

export default async function ShowProperty({ params: { propertyid } }: Params) {
    const property: Property = await getProperty(propertyid)

    return (
        <Modal>
            <div key={property.id}>
                <div>{property.address}</div>

                <div>{property.age}</div>
                <div>{property.city}</div>
                <div>{property.country}</div>
                <div>{property.electricity}</div>
                <div>{property.gas}</div>
                <div>{property.hydro}</div>
                <div>{property.postalCode}</div>
                <div>{property.province}</div>
            </div>
        </Modal>
    )
}
