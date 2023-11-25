import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
export const metadata = {
  title: "Home",
  description: "Home page for the real estate web application",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Analytics />
    </html>
  )
}
