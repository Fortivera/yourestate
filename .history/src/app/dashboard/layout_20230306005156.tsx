import { Suspense } from "react"
import { Analytics } from "./Analytics"
import NewProperty from "./createproperty/page"
import Loading from "../../../components/loading"
import loading from "../../../components/loading"
import { Modal } from "./Modal"
import Navbar from "./Navbar"
import Property from "./Property"
import Link from "next/link"




async function getData(): Promise<any> {

  try {
    const response = await fetch(`${process.env.SERVER_URL}${process.env.PROPERTY_ENDPOINT}`)

    if (!response.ok) {

      throw new Error('Failed to fetch data');
    }

    const keke = await response.json()
    console.log(keke)
    return keke
  } catch (err) {

    console.log(err);
  }
}

export default async function Layout({ children, }: { children: React.ReactNode }) {

  const allPropertiesData: Promise<Property[]> = await getData()
  const allProperties = await allPropertiesData
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div >
        {children}
      </div>
      <main  >
        <div className="flex">
          <div className="w-60 p-2 border-b-2 border-2 border-gray-300">
            <Suspense fallback={<Loading />}>
              {allProperties.map((property: Property) => {
                return (
                  <>
                    <Link href={`/dashboard/${property.id}`}>
                      <Property id={property.id} city={property.City} />
                    </Link>
                  </>
                )
              }
              )}
            </Suspense>
          </div>
          <div className="container">
            <Analytics />
          </div>
        </div>
      </main>

    </>
  )

}
