import React from "react"
import { Modal } from "../Modal"

type Params = {
    params: {
        propertyId: number,

    }
}


export default async function PropertyPage({ params: { propertyId } }: Params) {
    const propertyData = getProperty(propertyId)
    const property: any = await propertyData
    return (
        <Modal>
            <div >
                something
            </div>
        </Modal>
    )
}

export async function getProperty(propertyId: number) {

    const response = await fetch(`http://localhost:5085/api/Properties/${propertyId}`)

    if (!response.ok) throw new Error("Unsuccessful fetch")

    const data: Property = await response.json()
    return data

}