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

export async function getProperty(): Promise<any> {
    // const fetching = await fetch("https://localhost:7227/api/Properties", { cache: 'no-store' })

    const response = await fetch("https://localhost:7227/api/Properties")
    const infoJson: Property[] = await response.json()
    return infoJson

}

// export async function generateMetadata({
//     params, }: {
//         params: PropertyParams
//     }): Promise<Metadata> {
//     const property = await getProperty(params.id)
//     return { title: property.title }
// }

export default async function ProductsPage() {
    const propertiez = await getProperty()
    return (
        <>
            {propertiez?.map((prop: Property) => {
                <div>
                    {prop.City}
                </div>
            })}
        </>
    )
}