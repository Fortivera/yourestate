import Property from "./Property";

function getData(): any {

    try {
        const response = fetch(`${process.env.SERVER_URL}${process.env.PROPERTY_ENDPOINT}`)

        if (!response.ok) {

            throw new Error('Failed to fetch data');
        }

        const keke = response.json()
        console.log(keke)
        return keke
    } catch (err) {

        console.log(err);
    }
}

export default function ProductsPage() {

    const allProperties: any = getData()

    return (
        <>
            <div>

                {allProperties.map((property: any) =>
                    <Property key={property.id} city={property.city} />
                )}
            </div>
        </>
    )
}

