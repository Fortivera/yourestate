
async function fet() {

    const response = await fetch("https://192.168.2.45:7227/api/Properties")
    if (!response.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return response.json()
}

export default async function ProductsPage() {

    const a: any = await fet()

    return (
        <>
            <div>
                {a.map((prosp: any) =>
                    <div key={prosp.city}>
                        {prosp.city}
                    </div>
                )}
            </div>
        </>
    )
}

