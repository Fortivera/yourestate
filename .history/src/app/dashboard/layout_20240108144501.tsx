import { ThemeContextProvider } from "@/context/ThemeContex"
import ThemeProvider from "@/providers/ThemeProvider"
import Navbar from "../../components/Navbar"

// import { usePropertyStore } from "../usePropertiesStore"

export default async function Layout({ children }: { children: React.ReactNode }) {
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
                    {children}
                </ThemeProvider>
            </ThemeContextProvider>
        </>
    )
}
