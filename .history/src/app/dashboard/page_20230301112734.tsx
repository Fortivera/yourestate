
async function fet() {
    {/* @ts-ignore  */ }
    const response = await fetch("https://localhost:7227/api/Properties")
    if (!response.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }
    {/* @ts-ignore  */ }
    return response.json()
}

export default async function ProductsPage() {

    const a: any = await fet()
    {/* @ts-ignore  */ }
    return <div>
        {
            a.map((prosp: any) =>

                <div key={prosp.City}>
                    {prosp.Province}
                </div>
            )

        }
    </div>


}

