// export const metadata = {
//     title: "Products",
// }

import axios from "axios"
import { Metadata } from "next"



export async function getProperty() {
    const a = await fetch("https://localhost:7227/api/Properties")


    const b: any = await a.json()
    return b
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