
async function getData(): Promise<any> {

    const response = await fetch("https://dogapi.dog/api/facts?number=5")
    if (!response.ok) {

        throw new Error('Failed to fetch data');
    }

    return response.json()
}

export default async function ProductsPage() {

    const a: any = await getData()

    return (
        <>
            <div>
                {a.map((info: any) =>
                    <div key={info.id}>
                        {info.name}
                    </div>
                )}
            </div>
        </>
    )
}

