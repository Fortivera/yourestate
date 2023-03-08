import { Analytics } from "./Analytics"
import Navbar from "./Navbar"


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

      <main  >
        <div className="flex">
          {children}
        </div>
      </main>

    </>
  )

}
