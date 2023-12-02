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

export function deleteProperty(id: number) {
  const url = `${process.env.NEXT_PUBLIC_SERVER_URL}${process.env.NEXT_PUBLIC_PROPERTY_ENDPOINT}${id}`
  console.log(url)
  try {
    fetch(url, {
      method: "DELETE",
      body: JSON.stringify(id),
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
  // const url = "http://localhost:5085/api/Properties/39"
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

export async function getProperty() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${process.env.NEXT_PUBLIC_PROPERTY_ENDPOINT}`, { cache: "no-store" })
    if (!response.ok) {
      throw new Error("Failed to fetch data.")
    }

    const propertyCollection = await response.json()

    return propertyCollection
  } catch (err) {
    console.log(err)
  }
}

export async function postData(userInput: Property) {
  const url = `${process.env.NEXT_PUBLIC_SERVER_URL}${process.env.NEXT_PUBLIC_PROPERTY_ENDPOINT}`
  console.log(url)
  try {
    const response = await fetch(url, {
      method: "POST",
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
    alert(`We can't submit the form, due to ${err}`)
  }
}
