import { Suspense } from "react"
import { Analytics } from "../components/Analytics"
import Navbar from "../components/Navbar"
import Property from "../components/Property"
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
      <div>
        {children}
      </div>
      <main>
        <div className="flex">
          <div className="w-60 p-2 border-b-2 border-r-2 border-gray-300 ">
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
          <div className=" ">
            <Analytics />
          </div>
        </div>
      </main>

    </>
  )

}
