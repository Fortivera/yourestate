import { Suspense } from "react"
import { Analytics } from "./Analytics"
import NewProperty from "./createproperty/page"
import Loading from "../../../components/loading"
import loading from "../../../components/loading"
import { Modal } from "./Modal"
import Navbar from "./Navbar"
import Property from "./Property"
import ProductsPage from "./page"



export const metadata = {
  title: 'Dashboard',
  description: "great explanation of dash",
}



export default async function Layout({ children, }: { children: React.ReactNode }) {



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
          {/* @ts-expect-error Server Component */}
          <ProductsPage />
          <div className="container">
            <Analytics />
          </div>
        </div>
      </main>

    </>
  )

}
