import React from "react"

type Params = {
    params: {
        propertyId: number
    }
}

export async function getProperty() {
    try {
        const response = await fetch(`http://localhost:5085/api/Properties/2`)

        if (!response.ok) throw new Error("Unsuccessful fetch")

        const data: Property = await response.json()
        return data
    } catch (err) {
        console.log(err)
    }
}

export default async function PropertyPage({ params: { propertyId } }: Params) {
    const propertyData = getProperty()
    const property: any = await propertyData
    return (
        <>
            <div key={property.id}>{property.Address}</div>
        </>
    )
}
