import axios from "axios"

export async function GET() {
  const url = (process.env.SERVER_URL as string) + process.env.PROPERTY_ENDPOINT

  await axios.get(url).catch((response) => {
    console.log(response.error)
  })
}
