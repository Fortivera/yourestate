/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/navigation"
import { FormEvent } from "react"
import { deleteProperty, postData, updateProperty } from "./useRequestFunctions"

export async function handlePut(event: FormEvent<HTMLFormElement>, property: Property) {
    event.preventDefault()
    const router = useRouter()
    try {
        const dataCollected = event.target as HTMLFormElement
        const formData = new FormData(dataCollected) as Iterable<[Property, FormDataEntryValue]>
        const requestData: Property = Object.fromEntries(formData)

        console.log(requestData)
        await updateProperty(requestData, property.id)

        router.replace("/dashboard")
    } catch (error) {
        console.error(error)
    }
}

export async function handleDelete(event: React.MouseEvent<HTMLButtonElement>, id: number) {
    event.preventDefault()
    const router = useRouter()
    deleteProperty(id)
    router.replace("/dashboard")
}

export async function handlePost(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const router = useRouter()
    const dataCollected = event.target as HTMLFormElement
    const formData = new FormData(dataCollected) as Iterable<[Property, FormDataEntryValue]>
    const requestData: Property = Object.fromEntries(formData)

    await postData(requestData)

    console.log(requestData)
    router.replace("/dashboard")
}
