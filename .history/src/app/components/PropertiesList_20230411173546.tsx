import { Suspense } from "react"
import Property from "../components/Property"
import Link from "next/link"
import { useProperties } from "../usePropertiesStore"






export default async function PropertiesList({ allProperties }: any) {


    console.log('s')
    console.log(allProperties)

    return (
        <>

            <div className="w-[350px] pt-1 border-b-2 border-r-2 bg-gray-50 border-gray-200   shadow-neutral-400 shadow-sm overflow-auto" >
                <ul>

                    {allProperties.map((property: Property) => {
                        return (
                            <>
                                <Suspense fallback={<div>Loading properties...</div>}>
                                    <li>
                                        <Link href={`/dashboard/${property.id}`}>
                                            <Property property={property} />
                                        </Link>
                                    </li>
                                </Suspense>
                            </>
                        )
                    }
                    )}

                </ul>
            </div>
        </>
    )
}