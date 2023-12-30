import { useEffect, useState } from "react"
import React from "react"

const ClientOnly = ({ children }: React.ReactNode) => {
    const [hasMounted, setHasMounted] = useState(false)

    useEffect(() => {
        setHasMounted(true)
    }, [])
    if (!hasMounted) {
        return null
    }
    return <>{children}</>
}
