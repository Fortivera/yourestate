// app/dashboard/layout.tsx

import ThemeProvider from "@/providers/ThemeProvider"
import Navbar from "@/components/Navbar"
import DashboardContent from "./DashboardContent"

import { dehydrate, QueryClient, HydrationBoundary } from "@tanstack/react-query"
import { getProperty } from "lib/useRequestFunctions"
import { ThemeContextProvider } from "@/context/ThemeContex"

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery({
        queryKey: ["allProperties"],
        queryFn: getProperty,
        
    })

    return (
        <ThemeContextProvider>
            <ThemeProvider>
                <header>
                    <Navbar />
                </header>
                <div>{children}</div>
                <main className="mt-14 h-screen-minus-navbar">
                    <HydrationBoundary state={dehydrate(queryClient)}>
                        <DashboardContent />
                    </HydrationBoundary>
                </main>
            </ThemeProvider>
        </ThemeContextProvider>
    )
}
