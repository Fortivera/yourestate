import axios from "axios"


export async function GET() {
    const k: string = process.env.SERVER_URL as string
    const url = k + process.env.PROPERTY_ENDPOINT

    await axios.get(url).catch((response) => { console.log(response.error) }
}

