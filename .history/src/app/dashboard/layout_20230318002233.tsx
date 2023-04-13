
import { Analytics } from "../components/Analytics"
import Navbar from "../components/Navbar"
import PropertiesList from "../components/PropertiesList"
import { useProperties } from "../usePropertiesStore"



export default function Layout({ children, }: { children: React.ReactNode }) {
  console.log(useProperties.getState())

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

          {/* @ts-expect-error Async Server Component */}
          <PropertiesList />
          <Analytics />

        </div>
      </main>

    </>
  )

}
