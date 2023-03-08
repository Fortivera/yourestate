// export const metadata = {
//     title: "Products",
// }

import axios from "axios"
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

import { z } from "zod"

const PropertyModelSchema = z.object({
    id: z.number(),
    type: z.string(),
    address: z.string(),
    city: z.string(),
    suite: z.string(),
    postalCode: z.string(),
    province: z.string(),
    country: z.string(),
    tenant: z.number(),
    rent: z.number(),
    surfaceArea: z.number(),
    age: z.number(),
    electricity: z.number(),
    hydro: z.number(),
    gas: z.number(),
})

export type PropertyModel = z.infer<typeof PropertyModelSchema>

export async function getProperty(): Promise<PropertyModel[]> {
    // const fetching = await fetch("https://localhost:7227/api/Properties", { cache: 'no-store' })

    const response = await fetch("https://localhost:7227/api/Properties")
    const infoJson = await response.json()
    const info = z.array(PropertyModelSchema).parse(infoJson)
    console.log(info)
    return {
        props: {
            info: info.map((proper) => proper.City)
        }
    }

}

// export async function generateMetadata({
//     params, }: {
//         params: PropertyParams
//     }): Promise<Metadata> {
//     const property = await getProperty(params.id)
//     return { title: property.title }
// }

export default async function ProductsPage() {
    const properties: any = await getProperty()
    return (
        <>
            {properties?.map((prop: Property) => {
                <div>
                    {prop.City}
                </div>
            })}
        </>
    )
}