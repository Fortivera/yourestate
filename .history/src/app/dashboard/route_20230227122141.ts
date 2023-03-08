import axios from "axios"


export async function GET() {
    const k = process.env.SERVER_URL
    const url = process.env.SERVER_URL + process.env.PROPERTY_ENDPOINT

    await axios.get(url).catch((response) => { console.log(response.error) }
}

