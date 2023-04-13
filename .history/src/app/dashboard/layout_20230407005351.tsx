

import { getData } from "lib/useRequestFunctions";
import { useRouter } from "next/navigation";
import { Analytics } from "../components/Analytics"
import { ClientOnly } from "../components/ClientOnly";
import { Modal } from "../components/Modal";
import Navbar from "../components/Navbar"
import PropertiesList from "../components/PropertiesList"
import StoreInitializer from "../components/StoreInitializer";
import { useProperties } from "../usePropertiesStore";




export default async function Layout({ children, }: { children: React.ReactNode }) {

  const allPropertiesPromise: Promise<Property[]> = await getData()
  const allProperties = await allPropertiesPromise

  // useProperties.setState({ allProperties: fetchedProperties })
  useProperties.setState({ allProperties })
  const aaaa = useProperties.getState().allPropertiess
  console.log(aaaa)

  return (
    <>
      <StoreInitializer allProperties={allProperties} />
      <header>
        <ClientOnly>

          <Navbar />
        </ClientOnly>
      </header>
      <div >
        {children}
      </div>
      <main>
        <div className="flex h-screen">

          {/* @ts-expect-error Async Server Component */}
          <PropertiesList />
          <Analytics />

        </div>
      </main>

    </>
  )

}
