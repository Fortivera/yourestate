
async function fet() {
    const response = await fetch("https://localhost:7227/api/Properties")
    if (!response.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return response.json()
}
{/* @ts-expect-error Server Component */ }
export default async function ProductsPage() {

    const a: any = await fet()
    {/* @ts-expect-error Server Component */ }
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

