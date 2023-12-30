import { ThemeContextProvider } from "@/context/ThemeContex"
import ThemeProvider from "@/providers/ThemeProvider"
import { getProperty } from "lib/useRequestFunctions"
import { Analytics } from "../../components/Analytics/Analytics"
import Navbar from "../../components/Navbar"
import PropertiesList from "../../components/PropertiesList"
import { useQuery, HydrationBoundary } from "@tanstack/react-query"
// import { usePropertyStore } from "../usePropertiesStore"

export default async function Layout({ children }: { children: React.ReactNode }) {
  const queryClient = useQuery("allProperties", getProperty)
  const allPropertiesPromise: Promise<Property[]> = await getProperty()
  const allProperties = await allPropertiesPromise

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
            <div className="flex flex-col md:flex-row mt-14">
              <div className="w-screen md:h-auto md:w-[29rem] h-[50vh]">
                HydrationBoundary
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
