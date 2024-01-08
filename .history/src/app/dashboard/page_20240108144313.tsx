import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Dashboard | Yourestate Dashboard",
    description: "Property list of user's real estate",
}

export default async function ProductsPage() {
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery({
        queryKey: ["allProperties"],
        queryFn: getProperty,
    })
    return (
        <>
            <main>
                        <div className="flex flex-col h-screen md:flex-row mt-14 relative">
                            <div className="w-screen md:h-auto md:w-[29rem] h-[50vh]">
                                <HydrationBoundary state={dehydrate(queryClient)}>
                                    <PropertiesList />
                                </HydrationBoundary>
                            </div>
                            <HydrationBoundary state={dehydrate(queryClient)}>
                                <Analytics />
                            </HydrationBoundary>
                        </div>
                    </main>
        </>
    )
}
