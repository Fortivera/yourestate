export function deleteProperty(userInput: number) {
    const url = `${process.env.NEXT_PUBLIC_SERVER_URL}${process.env.NEXT_PUBLIC_PROPERTY_ENDPOINT}${userInput}`
    console.log(url)
    try {
        const response = fetch(url, {
            method: "DELETE",
            body: JSON.stringify(userInput),
            headers: {
                "Content-Type": "application/json",
            },
        })
        if (!response.ok) {
            throw new Error(`Invalid response: ${response.status}`)
        }
    } catch (err) {
        console.error(err)
        alert("We can't submit the form, try again later?")
    }
}

export function updateProperty(userInput: Property, id: number): Promise<any> {
    const url = `${process.env.NEXT_PUBLIC_SERVER_URL}${process.env.NEXT_PUBLIC_PROPERTY_ENDPOINT}${id}`
    console.log(url)
    try {
        const response = fetch(url, {
            method: "PUT",
            body: JSON.stringify(userInput),
            headers: {
                "Content-Type": "application/json",
            },
        })
        if (!response.ok) {
            throw new Error(`Invalid response: ${response.status}`)
        }
    } catch (err) {
        console.error(err)
        alert("We can't submit the form, try again later?")
    }
}
