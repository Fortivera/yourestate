// export const metadata = {
//     title: "Products",
// }

import axios from "axios"
import { Metadata } from "next"



export async function getProperty() {
    const a = await fetch("https://jsonplaceholder.typicode.com/users")
    const b: any = await a.json()
    return b
    // const response = await fetch("https://localhost:7227/api/Properties")
    // const infoJson: Property[] = await response.json()
    // return infoJson

}

interface Property {
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


// export async function generateMetadata({
//     params, }: {
//         params: PropertyParams
//     }): Promise<Metadata> {
//     const property = await getProperty(params.id)
//     return { title: property.title }
// }

export default async function ProductsPage() {
    let users = await getProperty()
    return (

        users.map((prop: any) => {
            <div key={prop.id}>dfsdf
                {prop.name}
            </div>
        })
    )
}

