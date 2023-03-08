'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

type Props = {
    children: React.ReactNode
}

const queryClient = new QueryClient()

export default function Providers({ children }: Props) {
    return (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
}