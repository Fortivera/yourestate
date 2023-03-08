
async function getData(): Promise<any> {

    const response = await fetch("https://localhost:7227/api/Properties", {
        mode: 'no-cors'
    })
    if (!response.ok) {

        throw new Error('Failed to fetch data');
    }

    return response.json()
}

export default async function ProductsPage() {

    const z: any = await getData()

    return (
        <>
            <div>
                {z.map((info: any) =>
                    <div key={info.id}>
                        {info.city}
                    </div>
                )}
            </div>
        </>
    )
}

