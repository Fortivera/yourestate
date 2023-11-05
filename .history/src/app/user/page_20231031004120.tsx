"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { FormEvent } from "react"
import Image from "next/image"

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

          <div className="mb-4">

            <label htmlFor="Email">
              <Image src="/static/email.svg" alt={"moon icon"} width={18} height={10} className={"m-1"} />

              Email
            </label>
            <input
              id="Email"
              name="Email"
              type="email"
              placeholder="Email"
              required
              className="block w-full border rounded-lg px-3 py-2 mt-1 focus:ring focus:ring-blue-300"
            />
          </label>
        </div>

        <div className="mb-4">
          <label className="text-sm" htmlFor="Name">
            Name
          </label>
          <input
            id="Name"
            name="Name"
            type="text"
            placeholder="Name"
            required
            className="block w-full border rounded-lg px-3 py-2 mt-1 focus:ring focus:ring-blue-300"
          />
        </div>

        <div className="mb-4">
          <label className="text-sm" htmlFor="Password">
            Password
          </label>
          <input
            id="Password"
            name="Password"
            type="password"
            placeholder="Password"
            pattern="[a-z0-9]{1,15}"
            title="Password should be digits (0 to 9) or alphabets (a to z)."
            required
            className="block w-full border rounded-lg px-3 py-2 mt-1 focus:ring focus:ring-blue-300"
          />
        </div>

        <div className="flex items-center justify-between">
          <button type="button" aria-label="Cancel button" className="text-blue-500 text-sm hover:underline">
            <Link href={"/"}>Cancel</Link>
          </button>

          <button type="submit" aria-label="Submit button" className="bg-[#5392f7] text-white rounded-lg px-4 py-2 hover:bg-[#3b83f6]">
            Submit
          </button>
        </div>
      </div>
    </div>
    </form >
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
