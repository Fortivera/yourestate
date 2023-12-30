import axios from "axios"

export async function GET(request: Request) {
    return new Response("eeek")
    // const url = process.env.SERVER_URL as string + process.env.PROPERTY_ENDPOINT

    // const kek = await axios.get(url).catch((response) => { console.log(response.error) })
    // console.log(kek)
}
