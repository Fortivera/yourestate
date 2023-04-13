
import { useRouter } from 'next/navigation';
import { FormEvent } from "react"
import { useDeleteProperty, useUpdateProperty } from "./useRequestFunctions"





export function useHandlePut(event: FormEvent<HTMLFormElement>, propertyid: number) {
    event.preventDefault()
    const router = useRouter()

    const dataCollected = event.target as HTMLFormElement
    const formData = new FormData(dataCollected) as Iterable<[Property, FormDataEntryValue]>
    const requestData: Property = Object.fromEntries(formData);
    console.log(requestData);
    useUpdateProperty(requestData, propertyid)
    router.refresh()
    router.push("/dashboard")
}

export function useHandleDelete(propertyid: number) {
    const router = useRouter()

    useDeleteProperty(propertyid)
    router.refresh()
    router.push("/dashboard")
}