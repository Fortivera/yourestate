
async function fet() {

    const response = await fetch("https://jsonplaceholder.typicode.com/users")
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
                {
                    a.map((prosp: any) =>

                        <div key={prosp.name}>
                            {prosp.name}
                        </div>
                    )

                }
            </div>
        </>
    )

}

