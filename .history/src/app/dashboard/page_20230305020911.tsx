import Loading from "components/loading";
import { Suspense } from "react";
import { Analytics } from "./Analytics";
import Property from "./Property";



async function getData(): Promise<any> {

    try {
        const response = await fetch(`${process.env.SERVER_URL}${process.env.PROPERTY_ENDPOINT}`)

        if (!response.ok) {

            throw new Error('Failed to fetch data');
        }

        const keke = await response.json()
        console.log(keke)
        return keke
    } catch (err) {

        console.log(err);
    }
}

export default async function ProductsPage() {

    const allProperties: any = await getData()

    return (
        <>

            <div className="container">
                <Analytics />
            </div>
        </>

    )
}

