import { ThemeContextProvider } from "@/context/ThemeContex"
import ThemeProvider from "@/providers/ThemeProvider"

import { Analytics } from "../../components/Analytics/Analytics"
import Navbar from "../../components/Navbar"
import PropertiesList from "../../components/PropertiesList"

export default async function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ThemeContextProvider>
                <ThemeProvider>
                    <header>
                        <Navbar />
                    </header>
                    <div>{children}</div>
                    <main>
                        <div className="flex flex-col md:flex-row mt-14">
                            <div className="w-screen md:h-auto md:w-[29rem] h-[50vh]">
                                <PropertiesList />
                            </div>
                            <Analytics />
                        </div>
                    </main>
                </ThemeProvider>
            </ThemeContextProvider>
        </>
    )
}
