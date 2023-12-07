import { D3PieChart } from "@/components/D3PieChart"
import { ThemeContext, ThemeContextProvider } from "@/context/ThemeContex"
import ThemeProvider from "@/providers/ThemeProvider"
import { getProperty } from "lib/useRequestFunctions"
import { useContext } from "react"
// import { Analytics } from "../../components/Analytics"
import Navbar from "../../components/Navbar"
import PropertiesList from "../../components/PropertiesList"

import { usePropertyStore } from "../usePropertiesStore"

export default async function Layout({ children }: { children: React.ReactNode }) {
  const allPropertiesPromise: Promise<Property[]> = await getProperty()
  const allProperties = await allPropertiesPromise
  const { theme } = useContext(ThemeContext)

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
              <div className="flex flex-col md:flex-row w-screen h-screen md:justify-center ">
                {/* <Analytics /> */}
                <div className={`${theme === "light" ? "bg-white" : "bg-slate-500"}w-full md:max-w-[42.5rem] p-2`}>
                  <D3PieChart allProperties={allProperties} />
                </div>
                {/* <div className="w-[400px]">
                  <D3PieChart allProperties={allProperties} />
                </div>
                <div className="w-[400px]">
                  <D3PieChart allProperties={allProperties} />
                </div> */}
              </div>
            </div>
          </main>
        </ThemeProvider>
      </ThemeContextProvider>
    </>
  )
}
