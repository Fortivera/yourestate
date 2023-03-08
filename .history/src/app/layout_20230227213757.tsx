import './globals.css'

export const metadata = {
  title: 'home page ya boss',
  description: "great explanation of something",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (


    { children }

  )
}
