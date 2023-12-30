async function getData(): Promise<any> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${process.env.NEXT_PUBLIC_PROPERTY_ENDPOINT}`)

        if (!response.ok) {
            throw new Error("Failed to fetch data")
        }

        const propertyCollection = await response.json()
        console.log(propertyCollection)
        return propertyCollection
    } catch (err) {
        console.log(err)
    }
}
