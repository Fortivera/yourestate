"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { FormEvent } from "react"
import Image from "next/image"
import SvgEmail from "public/static/SvgEmail"
import SvgNewUser from "public/static/SvgNewUser"
import SvgPassword from "public/static/SvgPassword"

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
        <div className="bg-white border rounded-lg shadow-md p-8  w-[20rem] mx-2">
          <h1 className="text-2xl font-semibold text-center mb-4 text-[#273768]">Sign Up</h1>

          <div className="mb-4 relative">
            <label htmlFor="Email" className="">
              <SvgEmail width={18} height={18} className={"absolute left-3 top-3"} />
            </label>
            <input id="Email" name="Email" type="email" placeholder="Email" className="block w-full border rounded-lg py-2 pl-9 mt-1 focus:ring focus:ring-blue-300" required />
          </div>

          <div className="mb-4 relative">
            <label className="text-sm" htmlFor="Name">
              <SvgNewUser width={18} height={18} className={"absolute left-3 top-3"} />
            </label>
            <input id="Name" name="Name" type="text" placeholder="Name" className="block w-full border rounded-lg py-2 pl-9 mt-1 focus:ring focus:ring-blue-300" required />
          </div>

          <div className="mb-4 relative">
            <label className="text-sm" htmlFor="Password">
              <SvgPassword width={18} height={18} className={"absolute left-3 top-3"} />
            </label>
            <input id="Password" name="Password" type="password" placeholder="Password" pattern="[a-z0-9]{1,15}" title="Password should be digits (0 to 9) or alphabets (a to z)." className="block w-full border rounded-lg py-2 pl-9 mt-1 focus:ring focus:ring-blue-300" required />
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
