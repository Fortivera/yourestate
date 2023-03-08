import { Modal } from "./Modal"
import Navbar from "./Navbar"


export const metadata = {
  title: 'Dashboard',
  description: "great explanation of dash",
}

export default function DashboardLayout({ children, }: { children: React.ReactNode }) {
  return (
    <>
      <main>
        <Navbar />
        {children}
      </main>
    </>
  )

}
