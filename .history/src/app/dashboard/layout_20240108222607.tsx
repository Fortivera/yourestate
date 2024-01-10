import { ThemeContextProvider } from "@/context/ThemeContex"
import ThemeProvider from "@/providers/ThemeProvider"
import { QueryClient, HydrationBoundary, dehydrate } from "@tanstack/react-query"
import { getProperty } from "lib/useRequestFunctions"
import { Analytics } from "../../components/Analytics/Analytics"
import Navbar from "../../components/Navbar"
import PropertiesList from "../../components/PropertiesList"

// import { usePropertyStore } from "../usePropertiesStore"

export default async function Layout({ children }: { children: React.ReactNode }) {
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
                        <div className="flex flex-col  md:flex-row mt-14 relative ">
                            <div className={`w-screen h-full md:w-[29rem] `}>
                                <HydrationBoundary state={dehydrate(queryClient)}>
                                    <PropertiesList />
                                </HydrationBoundary>
                            </div>
                            <HydrationBoundary state={dehydrate(queryClient)}>
                                <Analytics />
                            </HydrationBoundary>
                        </div>
                    </main>
                </ThemeProvider>
            </ThemeContextProvider>
        </>
    )
}
