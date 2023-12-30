"use client"

import ProductsPage from "../page"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <section>
                {ProductsPage}
                {children}
            </section>
        </>
    )
}
