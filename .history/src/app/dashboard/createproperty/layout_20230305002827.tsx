"use client"

import Layout from "../layout"
import ProductsPage from "../page"

export default function Layouta({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ProductsPage />
            {children}
        </>
    )
}
