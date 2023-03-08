import NewProperty from "./createproperty/page"
import { Modal } from "./Modal"
import Navbar from "./Navbar"


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

export default function Layout({ children, }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div>
          <div className="z-20">

            {allProperties.map((property: any) =>
              <Property key={property.id} city={property.city} />
            )}
          </div>
        </div>
        {children}
      </main>
    </>
  )

}
