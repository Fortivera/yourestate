"use client"

import Link from "next/link"
import { FormEvent } from "react"
import { Modal } from "../../../components/Modal"
import { useRouter } from "next/navigation"
import CancelIcon from "public/CancelIcon"

import FormLabels from "@/components/FormLabels"
import CancelButton from "@/components/CancelButton"
import SubmitButton from "@/components/SubmitButton"

export default function NewProperty() {
  // const [validInput, setValidIput] = useState<string>()
  const router = useRouter()
  function onChange(e) {}

  async function postHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

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
          <FormLabels />
          <div className="my-5 ">
            <div className="flex flexcol items-center justify-center gap-20">
              <CancelButton location={"/dashboard"} />
              <SubmitButton buttonText="Submit" />
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
