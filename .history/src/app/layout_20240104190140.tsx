import "./globals.css"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Metadata } from "next"
import ReactQueryProvider from "./providers"

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
                <ReactQueryProvider>
                    {children}
                    <SpeedInsights />
                </ReactQueryProvider>
            </body>
        </html>
    )
}
