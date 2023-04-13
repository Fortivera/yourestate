import { getData } from "lib/useRequestFunctions";
import { Analytics } from "../components/Analytics"
import Navbar from "../components/Navbar"
import PropertiesList from "../components/PropertiesList"

import { usePropertyStore } from "../usePropertiesStore";




export default async function Layout({ children, }: { children: React.ReactNode }) {

  const allPropertiesPromise: Promise<Property[]> = await getData()
  const allProperties = await allPropertiesPromise

  // useProperties.setState({ allProperties: fetchedProperties })
  usePropertyStore.setState({ allProperties })

  // const zustandData = useProperties.getState().allProperties

  return (
    <>
      <header>
        <Navbar />
      </header>
      <div >
        {/* <StoreInitializer allProperties={zustandData} /> */}
        {children}
      </div>
      <main>
        <div className="flex h-screen">

          {/* @ts-expect-error Async Server Component */}

          <PropertiesList allProperties={allProperties} />
          <Analytics />

        </div>
      </main>

    </>
  )

}
