
import React from "react"
import { Modal } from "../Modal"

type Params = {
    params: {
        propertyid: number,

    }
}

async function getProperty(propertyid: number) {
    const response = await fetch(`http://localhost:5085/api/Properties/${propertyid}`)
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    const data = await response.json()
    console.log(data.type)
    return data
}

export default async function ShowProperty({ params: { propertyid } }: Params) {
    const property = await getProperty(propertyid)

    return (
        <>
            <div >
                welp {property.City}
            </div>
        </>
    )
}
