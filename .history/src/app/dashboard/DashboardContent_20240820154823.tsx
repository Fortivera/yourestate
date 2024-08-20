"use client"

import { useQuery } from "@tanstack/react-query"
import { Analytics } from "@/components/Analytics/Analytics"
import PropertiesList from "@/components/PropertiesList"
import { getProperty } from "lib/useRequestFunctions"

export default function DashboardContent() {
    const {
        data: allProperties,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["allProperties"],
        queryFn: getProperty,
        retry: 2,
    })

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>An error occurred: {error.message}</div>
    if (!allProperties) {
        return null
    }
    return (
        <div className="flex flex-col h-screen md:flex-row relative">
            <div className={`w-screen h-1/2 md:w-[29rem] md:h-screen`}>
                <PropertiesList allProperties={allProperties} />
            </div>
            <Analytics allProperties={allProperties} />
        </div>
    )
}
