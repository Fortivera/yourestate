/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/navigation"
import { FormEvent } from "react"
import { deleteProperty, updateProperty } from "./useRequestFunctions"

export function handlePut(event: FormEvent<HTMLFormElement>, propertyid: number) {
  event.preventDefault()
  const router = useRouter()

  const dataCollected = event.target as HTMLFormElement
  const formData = new FormData(dataCollected) as Iterable<[Property, FormDataEntryValue]>
  const requestData: Property = Object.fromEntries(formData)
  console.log(requestData)
  updateProperty(requestData, propertyid)
  router.refresh()
  router.push("/dashboard")
}

export function handleDelete(propertyid: number) {
  const router = useRouter()

  deleteProperty(propertyid)
  router.refresh()
  router.push("/dashboard")
}
