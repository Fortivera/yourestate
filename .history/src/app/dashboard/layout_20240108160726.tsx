import { ThemeContextProvider } from "@/context/ThemeContex"
import ThemeProvider from "@/providers/ThemeProvider"
import { QueryClient, HydrationBoundary, dehydrate } from "@tanstack/react-query"
import { getProperty } from "lib/useRequestFunctions"
import { Suspense } from "react"

import Navbar from "../../components/Navbar"
import Loading from "../loading"

// import { usePropertyStore } from "../usePropertiesStore"

export default async function Layout({ children, analytics, propertiesList }: { children: React.ReactNode; analytics: React.ReactNode; propertiesList: React.ReactNode }) {
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery({
        queryKey: ["allProperties"],
        queryFn: getProperty,
    })

    // const allPropertiesPromise: Promise<Property[]> = await getProperty()
    // const allProperties = await allPropertiesPromise

    // usePropertyStore.setState({ allProperties })

    return (
        <>
            <ThemeContextProvider>
                <ThemeProvider>
                    <header>
                        <Navbar />
                    </header>
                    <div>{children}</div>
                    <main>
                        <section className="flex flex-col h-screen md:flex-row mt-14 relative">
                            <div className="w-screen md:h-auto md:w-[29rem] h-[50vh]">
                                <Suspense fallback={<Loading />}>
                                    <HydrationBoundary state={dehydrate(queryClient)}>{propertiesList}</HydrationBoundary>
                                </Suspense>
                            </div>
                            <Suspense fallback={<Loading />}>
                                <HydrationBoundary state={dehydrate(queryClient)}>{analytics}</HydrationBoundary>
                            </Suspense>
                        </section>
                    </main>
                </ThemeProvider>
            </ThemeContextProvider>
        </>
    )
}
