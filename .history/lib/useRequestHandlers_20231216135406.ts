/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/navigation"
import { FormEvent } from "react"
import { deleteProperty, updateProperty, handleResponse } from "./useRequestFunctions"

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

export async function registerUser(name: string, email: string, password: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    })
    return tokenHandleResponse(response)
  } catch (error) {
    console.error("Error during registration: ", error)
    throw error
  }
}

export async function loginUser(email: string, password: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
    return tokenHandleResponse(response)
  } catch (error) {
    console.error("Error during login: ", error)
    throw error
  }
}
