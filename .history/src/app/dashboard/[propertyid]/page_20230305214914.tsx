import React from "react"

type Params = {
  params: {
    propertyId: number
  }
}

export async function getProperty(propertyId: number) {
  try {
    const response = await fetch(`http://localhost:5085/api/Properties/${propertyId})`)

    if (!response.ok) throw new Error("Unsuccessful fetch")

    const data: Property = await response.json()
    return data
  } catch (err) {
    console.log(err)
  }
}

export default async function PropertyPage({ params: { propertyId } }: Params) {
  const propertyData: Promise<any> = getProperty(propertyId)
  const property = await propertyData
  return (
    <>
      <div key={property.id}>{property.Address}</div>
    </>
  )
}
