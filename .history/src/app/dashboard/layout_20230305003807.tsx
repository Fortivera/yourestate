import NewProperty from "./createproperty/page"
import { Modal } from "./Modal"
import Navbar from "./Navbar"


export const metadata = {
  title: 'Dashboard',
  description: "great explanation of dash",
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
