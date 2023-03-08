
async function getData(): Promise<any> {

    const response = await fetch("https://localhost:7227/api/Properties", {
        method: 'GET'
    }).then((response) => response.json())
        .catch((error) => {
            console.error(error);
        });


}

export default async function ProductsPage() {

    const a: any = await getData()

    return (
        <>
            {/* <div>
                {a.map((info: any) =>
                    <div key={info.id}>
                        {info.city}
                    </div>
                )}
            </div> */}
        </>
    )
}

