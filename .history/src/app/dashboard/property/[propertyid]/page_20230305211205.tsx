import React from "react"

type Props = {
    params: {
        propertyid: string,

    }
}

export async function getUser(userId: number) {
    const dataFetch = await fetch(`${process.env.SERVER_URL}${process.env.PROPERTY_ENDPOINT}/${userId})`)

    if (!res.ok) { }
    const data = await dataFetch.json()
    return data
}

export default function PropertyPage({ params: { propertyid } }: Props) {
    return <div>page {propertyid}</div>
}