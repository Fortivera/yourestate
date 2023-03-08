import Navbar from "./Navbar"


export const metadata = {
  title: 'Dashboard',
  description: "great explanation of dash",
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <>
      <section>
        <Navbar />
        {children}
      </section>
    </>
  )

}
