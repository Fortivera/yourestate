import React from "react"

type Params = {
  params: {
    propertyid: number
  }
}

export async function getProperty(userId: number) {
  const response = await fetch(`${process.env.SERVER_URL}${process.env.PROPERTY_ENDPOINT}/${userId})`)

  if (!response.ok) throw new Error("Unsuccessful fetch")

  const data: Property = await response.json()
  return data
}

export default async function PropertyPage({ params: { propertyid } }: Params) {
  const property = await getProperty(propertyid)
  return <>{property.Address}</>
}
