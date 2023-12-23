import { ThemeContextProvider } from "@/context/ThemeContex"
import ThemeProvider from "@/providers/ThemeProvider"
import { getProperty } from "lib/useRequestFunctions"
import { Analytics } from "../../components/Analytics/Analytics"
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
          <div>{children}</div>
          <main>
            <div className="flex flex-col md:flex-row ">
              <div className="w-screen md:h-screen md:w-[29rem] h-[50vh] overflow-y-scroll">
                <PropertiesList allProperties={allProperties} />
              </div>
              <Analytics allProperties={allProperties} />
            </div>
          </main>
        </ThemeProvider>
      </ThemeContextProvider>
    </>
  )
}
