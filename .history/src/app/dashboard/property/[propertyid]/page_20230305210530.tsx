import React from "react"

type Props = {
  params: {
    propertyid: string
  }
}

export default async function getUser() {
  const data = fetch()
}

export default function PropertyPage({ params: { propertyid } }: Props) {
  return <div>page {propertyid}</div>
}
