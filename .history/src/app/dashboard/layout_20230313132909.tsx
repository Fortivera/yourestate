import { Suspense } from "react"
import { Analytics } from "../components/Analytics"
import Navbar from "../components/Navbar"
import PropertiesList from "../components/PropertiesList"
import Loading from "./loading"


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
          <Suspense fallback={<Loading />}>
            {/* @ts-expect-error Async Server Component */}
            <PropertiesList />
          </Suspense>
          <Analytics />
        </div>
      </main>

    </>
  )

}
