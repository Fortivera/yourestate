import { ThemeContextProvider } from "@/context/ThemeContex"
import ThemeProvider from "@/providers/ThemeProvider"
import { Analytics } from "@vercel/analytics/react"
import { getProperty } from "lib/useRequestFunctions"
// import { Analytics } from "../../components/Analytics"
import Navbar from "../../components/Navbar"
import PropertiesList from "../../components/PropertiesList"

import { usePropertyStore } from "../usePropertiesStore"

export default async function Layout({ children }: { children: React.ReactNode }) {
    const allPropertiesPromise: Promise<Property[]> = await getProperty()
    const allProperties = await allPropertiesPromise

    usePropertyStore.setState({ allProperties })

    return (
        <>
            <ThemeContextProvider>
                <ThemeProvider>
                    <header>
                        <Navbar />
                    </header>
                    <div>
                        {/* <StoreInitializer allProperties={zustandData} /> */}
                        {children}
                    </div>
                    <main>
                        <div className="flex flex-col md:flex-row ">
                            <div className="w-screen md:h-screen md:w-[29rem] ">
                                <PropertiesList allProperties={allProperties} />
                            </div>
                            <div className="w-full h-screen flex justify-center">
                                {/* <Analytics /> */}
                                <Analytics />
                            </div>
                        </div>
                    </main>
                </ThemeProvider>
            </ThemeContextProvider>
        </>
    )
}
