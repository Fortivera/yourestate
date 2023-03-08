

export default async function ProductsPage() {
    const a = await fetch("https://jsonplaceholder.typicode.com/users")
    const b: any = await a.json()
    return <div>
        {
            b.map((prosp: any) =>

                <div key={prosp.id}>
                    {prosp.name}
                </div>
            )

        }
    </div>


}

