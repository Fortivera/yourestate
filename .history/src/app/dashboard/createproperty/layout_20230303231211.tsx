'use client'

import ProductsPage from "../page"


export default function Layout({ children, }: { children: React.ReactNode }) {
    return (
        <>

            {ProductsPage}
            {children}

        </>
    )

}