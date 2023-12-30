import React from "react"

type Props = {
    params: {
        propertyid: string
    }
}

export default async function getUser() {
    const data = fetch(`${process.env.SERVER_URL}${process.env.SERVER_URL})`)
}

export default function PropertyPage({ params: { propertyid } }: Props) {
    return <div>page {propertyid}</div>
}
