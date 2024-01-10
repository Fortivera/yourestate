export function filterId(arr: Property[], propertyid: number) {
    for (let i = 0; i < arr.length; i++) {
        try {
            if (arr[i].id != propertyid) {
                continue
            } else {
                return arr[i] as Property
            }
        } catch (error) {
            console.error(error)
        }
    }
}

export function deleteProperty(userInput: number) {
    const url = `${process.env.NEXT_PUBLIC_SERVER_URL}${process.env.NEXT_PUBLIC_PROPERTY_ENDPOINT}${userInput}`
    console.log(url)
    try {
        fetch(url, {
            method: "DELETE",
            body: JSON.stringify(userInput),
            headers: {
                "Content-Type": "application/json",
            },
        })
    } catch (err) {
        console.error(err)
        alert(`We can't submit the form, because of ${err}`)
    }
}

// eslint-disable-next-line no-unused-vars
export async function updateProperty(userInput: Property, id: number) {
    const url = `${process.env.NEXT_PUBLIC_SERVER_URL}${process.env.NEXT_PUBLIC_PROPERTY_ENDPOINT}/${id}`
    console.log(url)
    try {
        const response = await fetch(url, {
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

export async function getProperty(): Promise<Property[]> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${process.env.NEXT_PUBLIC_PROPERTY_ENDPOINT}`)
        if (!response.ok) {
            throw new Error("Failed to fetch data.")
        }

        const propertyCollection: Property[] = await response.json()
        return propertyCollection
    } catch (err) {
        console.log(err)
        return []
    }
}

// Helper function to get the token and save it in localStorage
export async function tokenHandleResponse(response: Response) {
    if (response.ok) {
        const data = await response.json()
        if (data.token) {
            localStorage.setItem("token", data.token)
            return data
        }
        throw new Error("Token not found in response")
    }
    throw new Error("Network response was not ok.")
}
