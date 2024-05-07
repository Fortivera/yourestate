import { ThemeContextProvider } from "@/context/ThemeContex"
import ThemeProvider from "@/providers/ThemeProvider"
import { QueryClient, HydrationBoundary, dehydrate } from "@tanstack/react-query"
import { getProperty } from "lib/useRequestFunctions"
import { Analytics } from "../../components/Analytics/Analytics"
import Navbar from "../../components/Navbar"
import PropertiesList from "../../components/PropertiesList"

export default async function Layout({ children }: { children: React.ReactNode }) {
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery({
        queryKey: ["allProperties"],
        queryFn: getProperty,
    })
    return (
        <>
            <ThemeContextProvider>
                <ThemeProvider>
                    <header>
                        <Navbar />
                    </header>
                    <div>{children}</div>
                    <main className="mt-14 h-screen-minus-navbar">
                        <div className="flex flex-col h-screen md:flex-row   relative ">
                            <div className={`w-screen h-1/2 md:w-[29rem] md:h-screen `}>
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
