// export const metadata = {
//     title: "Products",
// }

import axios from "axios"
import { Metadata } from "next"



export async function getProperty() {
    // const fetching = await fetch("https://localhost:7227/api/Properties", { cache: 'no-store' })

    const a = await axios.get("https://localhost:7227/api/Properties").catch((response) => { console.log(response.error) })
    const b = await a.json()
    // const response = await fetch("https://localhost:7227/api/Properties")
    // const infoJson: Property[] = await response.json()
    // return infoJson

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
    return
    <>
        {propertiez?.map((prop: any) => {
            <div>
                {prop.City}
            </div>
        })}
    </>

}