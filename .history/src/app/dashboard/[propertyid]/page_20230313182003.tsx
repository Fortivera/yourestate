import Link from "next/link"
import React, { FormEvent, Suspense } from "react"
import { Modal } from "../../components/Modal"
import CancelIcon from "public/CancelIcon"
import { useRouter } from "next/navigation"
import { useProperties } from "../../usePropertiesStore"
import Kek from "@/app/components/aaate"

type Params = {
  params: {
    propertyid: number
  }
}

export default async function ShowProperty({ params: { propertyid } }: Params) {
  const { allProperties } = await useProperties.getState()
  console.log(allProperties)

  async function handleSpecificIdFilter(arr: Property[], propertyid: number) {
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

  // const router = useRouter()

  const property = (await handleSpecificIdFilter(allProperties, propertyid)) as Property
  console.log(property)

  // const property: Property = await getProperty(propertyid)

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

  return (
    <Modal>
      <Kek property={property} />
    </Modal>
  )
}

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
