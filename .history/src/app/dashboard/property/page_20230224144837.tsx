import React from "react"

type Props = {
    params: {
        propertyid: string,

    }
}


export default function PropertyPage({ params: { propertyid } }: Props) {
    return <div>list of properties map property fetch on side bar</div>
}