
async function getData(): Promise<any> {

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL} + ${process.env.NEXT_PUBLIC_PROPERTY_ENDPOINT}`)

        if (!response.ok) {

            throw new Error('Failed to fetch data');
        }

        const keke = await response.json()
        console.log(keke)
        return keke
    } catch (err) {

        console.log(err);
    }
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

