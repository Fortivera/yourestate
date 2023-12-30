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

          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="bg-white border rounded-lg shadow-md p-8 max-w-xs w-full mx-2">
              <h1 className="text-2xl font-semibold text-center mb-4">Sign Up</h1>

              <div className="mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-blue-500 mr-2">
                  <path d="M2.5 3.5A1.5 1.5 0 014 2h12a1.5 1.5 0 010 3H4a1.5 1.5 0 01-1.5-1.5zm0 8A1.5 1.5 0 014 10h12a1.5 1.5 0 010 3H4a1.5 1.5 0 01-1.5-1.5zM2.5 16A1.5 1.5 0 014 14.5H4a1.5 1.5 0 010 3h-.5A1.5 1.5 0 012 16z" />
                </svg>
                <label className="text-sm" htmlFor="Email">
                  Email
                </label>
              </div>
              <input id="Email" name="Email" type="email" placeholder="Email" required className="block w-full border rounded-lg px-3 py-2 mt-1 focus:ring focus:ring-blue-300" />

              <div className="mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-blue-500 mr-2">
                  <path d="M5 7.29l5.3 5.3a1 1 0 001.4 0L19 8.71m-1.41 2.58l-7.58-7.59a1 1 0 00-1.42 0L3 10.29" />
                </svg>
                <label className="text-sm" htmlFor="Name">
                  Name
                </label>
              </div>
              <input id="Name" name="Name" type="text" placeholder="Name" required className="block w-full border rounded-lg px-3 py-2 mt-1 focus:ring focus:ring-blue-300" />

              <div className="mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-blue-500 mr-2">
                  <path d="M4 6a1 1 0 011 1v6a1 1 0 01-2 0V7a1 1 0 011-1zm14-1a1 1 0 00-1-1h-2a1 1 0 000 2h1.59l-4.3 4.3a1 1 0 101.42 1.42l4.3-4.3V15a1 1 0 002 0V6z" />
                </svg>
                <label className="text-sm" htmlFor="Password">
                  Password
                </label>
              </div>
              <input id="Password" name="Password" type="password" placeholder="Password" pattern="[a-z0-9]{1,15}" title="Password should be digits (0 to 9) or alphabets (a to z)." required className="block w-full border rounded-lg px-3 py-2 mt-1 focus:ring focus:ring-blue-300" />

              <div className="flex items-center justify-between">
                <button type="button" aria-label="Cancel button" className="text-blue-500 text-sm hover:underline">
                  <Link href={"/"}>Cancel</Link>
                </button>

                <button type="submit" aria-label="Submit button" className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600">
                  Submit
                </button>
              </div>
            </div>
          </div>
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
