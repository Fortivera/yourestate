
import { Analytics } from "../components/Analytics"
import Navbar from "../components/Navbar"
import PropertiesList from "../components/PropertiesList"
import StoreInitializer from "../components/StoreInitializer"
import { useProperties } from "../usePropertiesStore"



export default function Layout({ children, }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div>
        {children}
      </div>
      <main>
        <div className="flex h-screen">
          <StoreInitializer />
          {/* @ts-expect-error Async Server Component */}
          <PropertiesList />
          <Analytics />

        </div>
      </main>

    </>
  )

}
