// export const metadata = {
//     title: "Products",
// }

import { Metadata } from "next"

export interface Property {
    id: string,
    Type: string,
    Address: string,
    City: string,
    Suite: string,
    PostalCode: string,
    Province: string,
    Country: string,
    Tenant: number,
    Rent: number,
    SurfaceArea: number,
    Age: number,
    Electricity: number,
    Hydro: number,
    Gas: number,
}

export async function getProperty(): Promise<any> {
    // const fetching = await fetch("https://localhost:7227/api/Properties", { cache: 'no-store' })
    const fetching = await fetch("https://localhost:7227/api/Properties", {
        method: "POST",
        body: JSON.stringify(userInput),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const res = fetching.json()
    return res
}

// export async function generateMetadata({
//     params, }: {
//         params: PropertyParams
//     }): Promise<Metadata> {
//     const property = await getProperty(params.id)
//     return { title: property.title }
// }

export default async function ProductsPage() {
    const properties = await getProperty()
    return (

        properties.map((prop: Property) => {
            <div>
                {prop.City}
            </div>
        })

    )
}