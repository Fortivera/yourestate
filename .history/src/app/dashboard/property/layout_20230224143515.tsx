export const metadata = {
    title: "dash",
    description: "great explanation of dash",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
