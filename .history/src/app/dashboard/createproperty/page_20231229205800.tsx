"use client"

import Link from "next/link"
import { ChangeEvent, FormEvent, useState } from "react"
import { Modal } from "../../../components/Modal"
import { useRouter } from "next/navigation"
import CancelIcon from "public/CancelIcon"

import FormLabels from "@/components/FormLabels"

export default function NewProperty() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>()
  const [values, setValues] = useState({
    id: "",
    name: "",
    type: "",
    placeholder: "",
    label: "",
    ariaLabel: "",
  })
  const router = useRouter()
  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  async function postHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    const dataCollected = event.target as HTMLFormElement
    const formData = new FormData(dataCollected) as Iterable<[Property, FormDataEntryValue]>
    const requestData: Property = Object.fromEntries(formData)
    await postData(requestData)
    console.log(requestData)
    router.refresh()
    router.replace("/dashboard")
  }

  return (
    <Modal>
      <div className="flex justify-end">
        <button className="my-[2px]">
          <Link href={"/dashboard"}>
            <CancelIcon />
          </Link>
        </button>
      </div>
      <form method="POST" id="property-form" onSubmit={postHandler}>
        <div className="py-2 px-8 flex flex-col mx-auto border-2 border-gray-400 z-1">
          <FormLabels onChange={onChange} />
          <div className="my-5 ">
            <div className="flex flexcol items-center justify-center gap-20">
              <button type="button" className="w-28 rounded-md py-1 shadow-md hover:bg-red-400 bg-white text-black">
                <Link href={`/dashboard`}>Cancel</Link>
              </button>

              <button className={`${isSubmitting ? "bg-gray-300" : "bg-indigo-200 hover:bg-indigo-300"} w-28  rounded-md py-1  shadow-md text-black`} type="submit">
                {isSubmitting ? "Loading..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </Modal>
  )
}

async function postData(userInput: Property) {
  const url = `${process.env.NEXT_PUBLIC_SERVER_URL}${process.env.NEXT_PUBLIC_PROPERTY_ENDPOINT}`
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
      const errorText = await response.text()
      throw new Error(`Request failed with status ${response.status}: ${errorText}`)
    }
  } catch (err) {
    console.error(err)
    alert(`We can't submit the form, due to ${err}`)
  }
}
