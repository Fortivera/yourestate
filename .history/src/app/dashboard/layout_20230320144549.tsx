
import { all } from "axios";
import { Analytics } from "../components/Analytics"
import Navbar from "../components/Navbar"
import PropertiesList from "../components/PropertiesList"
import StoreInitializer from "../components/StoreInitializer";
import { useProperties } from "../usePropertiesStore";


async function getData(): Promise<any> {

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    if (!response.ok) {

      throw new Error('Failed to fetch data');
    }

    const propertyCollection = await response.json()
    console.log(response)

    return propertyCollection
  } catch (err) {

    console.log(err);
  }
}

export default async function Layout({ children, }: { children: React.ReactNode }) {

  const allPropertiesPromise: Promise<Property[]> = await getData()
  const fetchedProperties = await allPropertiesPromise

  useProperties.setState({ allProperties: fetchedProperties })
  const { allProperties } = useProperties.getState()

  return (
    <>
      <StoreInitializer allProperties={allProperties} />
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
