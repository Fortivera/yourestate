import { Analytics } from "../components/Analytics"
import Navbar from "../components/Navbar"
import PropertiesList from "../components/PropertiesList"






export default async function Layout({ children, }: { children: React.ReactNode }) {


  return (
    <>
      <header>
        <Navbar />
      </header>
      <div>
        {children}
      </div>
      <main>
        <div className="flex">
          {/* @ts-expect-error Async Server Component */}
          <PropertiesList />
          <Analytics />
        </div>
      </main>

    </>
  )

}
