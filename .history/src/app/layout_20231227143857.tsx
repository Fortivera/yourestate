import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { Metadata } from "next"
import { Provider } from "./providers"

export const metadata: Metadata = {
    title: {
        template: "%s | Your Estate Login",
        default: "Your Estate Login",
    },
    description: "Home page for the real estate web application",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Provider></Provider>
                {children}
            </body>
            <Analytics />
        </html>
    )
}
