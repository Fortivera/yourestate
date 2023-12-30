import Link from "next/link"
import React, { FormEvent } from "react"
import { Modal } from "../../components/Modal"
import CancelIcon from "public/CancelIcon"
import { useRouter } from "next/navigation"
import { useProperties } from "@/app/usePropertiesStore"

type Params = {
  params: {
    propertyid: number
  }
}

function ff(arr: any, propertyid: number) {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i].id != propertyid) {
      continue
    } else {
      return arr[i]
    }
  }
}

export default async function ShowProperty({ params: { propertyid } }: Params) {
  const pproperty: any = useProperties.getState()
  console.log(pproperty)
  const property = ff(pproperty, propertyid)
  console.log(property)

  // const property: Property = await getProperty(propertyid)
  // const router = useRouter()

  // async function handlePut(event: FormEvent<HTMLFormElement>) {
  //     event.preventDefault()
  //     const dataCollected = event.target as HTMLFormElement
  //     const formData = new FormData(dataCollected) as Iterable<[Property, FormDataEntryValue]>
  //     const requestData: Property = Object.fromEntries(formData);
  //     console.log(requestData);
  //     updateProperty(requestData, propertyid)
  //     router.refresh()
  //     router.push("/dashboard")
  // }

  // function handleDelete() {
  //     deleteProperty(propertyid)
  //     router.refresh()
  //     router.push("/dashboard")
  // }

  return <></>
}

// async function getProperty(propertyid: number) {
//     const response = await fetch(`http://localhost:5085/api/Properties/${propertyid}`)
//     if (!response.ok) {
//         throw new Error('Failed to fetch data');
//     }
//     const data = await response.json()
//     console.log(data)
//     return data
// }

// async function deleteProperty(userInput: number) {

//     const url = `${process.env.NEXT_PUBLIC_SERVER_URL}${process.env.NEXT_PUBLIC_PROPERTY_ENDPOINT}${userInput}`
//     console.log(url)
//     try {
//         const response = await fetch(url, {
//             method: "DELETE",
//             body: JSON.stringify(userInput),
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         });
//         if (!response.ok) {
//             throw new Error(`Invalid response: ${response.status}`);
//         }
//     } catch (err) {
//         console.error(err);
//         alert("We can't submit the form, try again later?");
//     }
// }

// async function updateProperty(userInput: Property, id: number) {

//     const url = `${process.env.NEXT_PUBLIC_SERVER_URL}${process.env.NEXT_PUBLIC_PROPERTY_ENDPOINT}${id}`
//     console.log(url)
//     try {
//         const response = await fetch(url, {
//             method: "PUT",
//             body: JSON.stringify(userInput),
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         });
//         if (!response.ok) {
//             throw new Error(`Invalid response: ${response.status}`);
//         }
//     } catch (err) {
//         console.error(err);
//         alert("We can't submit the form, try again later?");
//     }
// }
