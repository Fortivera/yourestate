import { Suspense } from "react"
import Property from "../components/Property"
import Link from "next/link"




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

export default async function PropertiesList() {
    const allPropertiesData: Promise<Property[]> = await getData()
    const allProperties = await allPropertiesData
    return (
        <>
            <div className="min-w-[350px] w-2 border-b-2 border-r-2 bg-yellow-50 border-gray-200   shadow-neutral-400 shadow-sm overflow-auto">
                <ul>
                    <Suspense fallback={<h1>Loading...</h1>}>
                        {allProperties.map((property) => {
                            return (
                                <>
                                    <li>
                                        <Link href={`/dashboard/${property.id}`}>
                                            <Property property={property} />
                                        </Link>
                                    </li>
                                </>
                            )
                        }
                        )}
                    </Suspense>
                </ul>
            </div>
        </>
    )
}