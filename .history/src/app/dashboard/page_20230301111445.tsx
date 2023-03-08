
async function fet() {
    const a: any = await fetch("https://localhost:7227/api/Properties")
    return await a.json()
}

export default async function ProductsPage() {
    const a: any = await fet()

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

