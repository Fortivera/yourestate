export async function GET() {
    const res = await fetch()
}

export const getProperty = async () => {
    const url = import.meta.env.VITE_SERVER_URL + import.meta.env.VITE_PROPERTY_ENDPOINT

    await axios.get(url).catch((response) => {
        console.log(response.error)
    })
}
