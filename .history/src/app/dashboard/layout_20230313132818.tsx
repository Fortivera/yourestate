import { Suspense } from "react"
import { Analytics } from "../components/Analytics"
import Navbar from "../components/Navbar"
import PropertiesList from "../components/PropertiesList"


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
          <Suspense fallback={<h1>Loading...</h1>}>
            {/* @ts-expect-error Async Server Component */}
            <PropertiesList />
          </Suspense>
          <Analytics />
        </div>
      </main>

    </>
  )

}
