import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { Metadata } from "next"
export const metadata: Metadata = {
  title: "Your Estate Login",
  template: '%s | Acme Dashboard',
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
