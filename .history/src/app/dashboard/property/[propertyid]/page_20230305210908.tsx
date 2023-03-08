import React from "react"

type Props = {
    params: {
        propertyid: string,

    }
}

export async function getUser({ userId }) {
    const data: Promise<Property> = await fetch(`${process.env.SERVER_URL}${process.env.PROPERTY_ENDPOINT})`)
}

export default function PropertyPage({ params: { propertyid } }: Props) {
    return <div>page {propertyid}</div>
}