import React from "react"

type Props = {
  params: {
    propertyid: string
  }
}

export async function getUser(userId: number) {
  const response = await fetch(`${process.env.SERVER_URL}${process.env.PROPERTY_ENDPOINT}/${userId})`)

  if (!response.ok) throw new Error("Unsuccessful fetch")

  const data: Property = await response.json()
  return data
}

export default function PropertyPage({ params: { propertyid } }: Props) {
  return <div>page {propertyid}</div>
}
