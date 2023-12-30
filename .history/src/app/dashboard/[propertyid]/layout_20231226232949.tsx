import React from "react"
import { filterId } from "lib/useRequestFunctions"
import EditProperty from "../../../components/EditProperty"
import { usePropertyStore } from "@/app/usePropertiesStore"

type Params = {
  params: {
    propertyid: number
  }
}

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
            <div className="flex flex-col md:flex-row mt-14">
              <div className="w-screen md:h-auto md:w-[29rem] h-[50vh]">
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
