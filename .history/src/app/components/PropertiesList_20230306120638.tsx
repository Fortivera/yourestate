export default async function PropertiesList() {
    return (
        <>
            <div className="min-w-[300px] p-2 border-b-2 border-r-2 border-gray-300 overflow-auto">
                <Suspense fallback={<h1>Loading...</h1>}>
                    {allProperties.map((property) => {
                        return (
                            <>
                                <Link href={`/dashboard/${property.id}`}>
                                    <Property key={property.id} city={property.city} />
                                </Link>
                            </>
                        )
                    }
                    )}
                </Suspense>
            </div>
        </>
    )
}