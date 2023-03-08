
async function getData(): Promise<any> {

    try {
        const response = await fetch("https://localhost:7227/api/Properties")

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
                great
                {/* {z.map((info: any) =>
                    <div key={info.id}>
                        {info.city}
                    </div>
                )} */}
            </div>
        </>
    )
}

