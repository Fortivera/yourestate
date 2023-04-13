import { Suspense } from "react"
import Property from "../components/Property"
import Link from "next/link"
import { useProperties } from "../usePropertiesStore"
import StoreInitializer from "./StoreInitializer"



async function getData(): Promise<any> {

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${process.env.NEXT_PUBLIC_PROPERTY_ENDPOINT}`)
        if (!response.ok) {

            throw new Error('Failed to fetch data');
        }

        const propertyCollection = await response.json()

        return propertyCollection
    } catch (err) {

        console.log(err);
    }
}

export default async function PropertiesList() {

    const allPropertiesPromise: Promise<Property[]> = await getData()
    const fetchedProperties = await allPropertiesPromise

    useProperties.setState({ allProperties: fetchedProperties })
    const { allProperties } = useProperties.getState()
    // const c = useProperties.getState()
    // console.log('s')
    // console.log(c)

    return (
        <>
            <StoreInitializer allproperties={allProperties} />
            <div className="w-[350px] pt-1 border-b-2 border-r-2 bg-gray-50 border-gray-200   shadow-neutral-400 shadow-sm overflow-auto" >
                <ul>

                    {allProperties.map((property: Property) => {
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

                </ul>
            </div>
        </>
    )
}