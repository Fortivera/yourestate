"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { FormEvent } from "react"

interface RequestData {
    email: string
    name: string
    password: string
}

export default function Registration() {
    const router = useRouter()

    const postHandler = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const dataCollected = event.target as HTMLFormElement
        const formData = new FormData(dataCollected) as Iterable<[RequestData, FormDataEntryValue]>
        const requestData: RequestData = Object.fromEntries(formData)
        // const sending = fetch()
        console.log(requestData)
        await postData(requestData)
        router.push("/dashboard")
    }
    return (
        <form method="POST" id="registration-form" onSubmit={postHandler}>
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="bg-white border rounded-lg shadow-md p-8 max-w-xs w-full mx-2">
                    <h1 className="text-2xl font-semibold text-center mb-4">Sign Up</h1>
                </div>
            </div>
        </form>
    )
}

async function postData(userInput: RequestData) {
    const url = `${process.env.NEXT_PUBLIC_SERVER_URL}${process.env.NEXT_PUBLIC_USER_ENDPOINT}`
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
        alert(`We can't submit the form, dur to ${err}`)
    }
}
