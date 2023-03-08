
const fet = async () => {
    const a = await fetch("https://localhost:7227/api/Properties")
    return await a.json()
}

export default async function ProductsPage() {
    const a = await fet()

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

