import { ThemeContextProvider } from "@/context/ThemeContex"
import ThemeProvider from "@/providers/ThemeProvider"
import { getProperty } from "lib/useRequestFunctions"
import { Analytics } from "../../components/Analytics/Analytics"
import Navbar from "../../components/Navbar"
import PropertiesList from "../../components/PropertiesList"
import {QueryClient, dehydrate } from "@tanstack/react-query"
// import { usePropertyStore } from "../usePropertiesStore"

export default async function Layout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ["allProperties"],
    queryFn: () => getProperty(),
  })

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
                <HydrationBoundary state={dehydrate(queryClient)}>
                  <PropertiesList allProperties={allProperties} />
                </HydrationBoundary>
              </div>
              <HydrationBoundary state={dehydrate(queryClient)}>
                <Analytics allProperties={allProperties} />
              </HydrationBoundary>
            </div>
          </main>
        </ThemeProvider>
      </ThemeContextProvider>
    </>
  )
}
