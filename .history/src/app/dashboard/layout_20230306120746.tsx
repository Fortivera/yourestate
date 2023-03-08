import { Suspense } from "react"
import { Analytics } from "../components/Analytics"
import Navbar from "../components/Navbar"
import Property from "../components/Property"
import Link from "next/link"
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
          <PropertiesList />
          <Analytics />
        </div>
      </main>

    </>
  )

}
