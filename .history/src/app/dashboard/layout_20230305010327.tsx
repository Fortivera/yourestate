import { Analytics } from "./Analytics"
import NewProperty from "./createproperty/page"
import { Modal } from "./Modal"
import Navbar from "./Navbar"
import Property from "./Property"


export const metadata = {
  title: 'Dashboard',
  description: "great explanation of dash",
}

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

  const allProperties: any = await getData()

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="flex  " >
        <div className="w-60 p-2 border-b-2 border-2 border-gray-300">
          {allProperties.map((property: any) =>
            <Property key={property.id} city={property.city} />
          )}
        </div>
        <div className="container">
          <Analytics />
        </div>
        <div>
          {children}
        </div>
      </main>

    </>
  )

}
