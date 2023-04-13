
export const filterId = (arr: Property[], propertyid: number): Property => {
    for (let i = 0; i < arr.length; i++) {
        try {
            if (arr[i].id != propertyid) {
                continue
            } else {
                return arr[i]
            }
        } catch (error) {
            console.error(error)
        }
    }
}

export function deleteProperty(userInput: number): any {

    const url = `${process.env.NEXT_PUBLIC_SERVER_URL}${process.env.NEXT_PUBLIC_PROPERTY_ENDPOINT}${userInput}`
    console.log(url)
    try {
        const response = fetch(url, {
            method: "DELETE",
            body: JSON.stringify(userInput),
            headers: {
                "Content-Type": "application/json"
            }
        });
    } catch (err) {
        console.error(err);
        alert("We can't submit the form, try again later?");
    }
}

export function updateProperty(userInput: Property, id: number) {

    const url = `${process.env.NEXT_PUBLIC_SERVER_URL}${process.env.NEXT_PUBLIC_PROPERTY_ENDPOINT}/${id}`
    console.log(url)
    try {
        const response = fetch(url, {
            method: "PUT",
            body: JSON.stringify(userInput),
            headers: {
                "Content-Type": "application/json"
            }
        });
    } catch (err) {
        console.error(err);
        alert("We can't submit the form, try again later?");
    }
}