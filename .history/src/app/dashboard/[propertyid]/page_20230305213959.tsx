import React from "react"

type Params = {
    params: {
        propertyId: number,

    }
}

export async function getProperty(userId: number) {
    const response = await fetch(`http://localhost:5085/api/Properties/${userId})`)

    if (!response.ok) throw new Error("Unsuccessful fetch")

    const data: Property = await response.json()
    return data
}

export default async function PropertyPage({ params: { propertyid } }: Params) {
    const property = await getProperty(propertyid)
    return (
        <>
            <div key={property.id}>
                {property.Address}
            </div>

        </>
    )
}