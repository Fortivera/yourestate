"use client"

import { useQuery } from "@tanstack/react-query"
import { Analytics } from "@/components/Analytics/Analytics"
import PropertiesList from "@/components/PropertiesList"
import { getProperty } from "lib/useRequestFunctions"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function DashboardContent() {
    const router = useRouter()
    const { data, isError, isLoading } = useQuery({
        queryKey: ["allProperties"],
        queryFn: getProperty,
        retry: 2, // Retry twice before failing
    })

    useEffect(() => {
        if (isError) {
            // Handle the error here, for example, by redirecting the user
            console.error("Error fetching data:", isError)
            router.push("/dashboard")
        }
    }, [isError, router])

    if (isLoading) {
        return <div>Loading...</div> // Optionally show a loading state
    }
    // Provide a default empty array if data is undefined
    const allProperties = data || []
    return (
        <div className="flex flex-col h-screen md:flex-row relative">
            <div className={`w-screen h-1/2 md:w-[29rem] md:h-screen`}>
                <PropertiesList allProperties={allProperties!} />
            </div>
            <Analytics allProperties={allProperties} />
        </div>
    )
}
