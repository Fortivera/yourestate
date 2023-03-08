

export default async function ProductsPage() {
    const a = await fetch("https://localhost:7227/api/Properties", {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': 'back-end url'
        },
    })
    const b: any = await a.json()
    return <div>
        {
            b.map((prosp: any) =>

                <div key={prosp.City}>
                    {prosp.Province}
                </div>
            )

        }
    </div>


}

