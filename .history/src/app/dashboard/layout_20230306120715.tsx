import { Suspense } from "react"
import { Analytics } from "../components/Analytics"
import Navbar from "../components/Navbar"
import Property from "../components/Property"
import Link from "next/link"






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
          <div className="min-w-[300px] p-2 border-b-2 border-r-2 border-gray-300 overflow-auto">
            <Suspense fallback={<h1>Loading...</h1>}>
              {allProperties.map((property) => {
                return (
                  <>
                    <Link href={`/dashboard/${property.id}`}>
                      <Property key={property.id} city={property.city} />
                    </Link>
                  </>
                )
              }
              )}
            </Suspense>
          </div>
          <Analytics />
        </div>
      </main>

    </>
  )

}
