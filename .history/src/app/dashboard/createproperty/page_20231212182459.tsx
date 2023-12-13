"use client"

import Link from "next/link"
import { FormEvent, useContext } from "react"
import { Modal } from "../../../components/Modal"
import { useRouter } from "next/navigation"
import CancelIcon from "public/CancelIcon"
import { ThemeContext } from "@/context/ThemeContex"
import FormLabels from "@/components/FormLabels"

export default function NewProperty() {
  // const [validInput, setValidIput] = useState<string>()
  const router = useRouter()

  const formStructure = [
    {
      id: 1,
      name: "Address",
      type: "text",
      placeholder: "Address",
      label: "Address",
      ariaLabel: "Address",
    },
    {
      id: 2,
      name: "Suite",
      type: "text",
      placeholder: "Suite",
      label: "Suite",
      ariaLabel: "Suite",
    },
    {
      id: 3,
      name: "PostalCode",
      type: "text",
      placeholder: "Postal Code",
      label: "Postal Code",
      ariaLabel: "PostalCode",
    },
    {
      id: 4,
      name: "City",
      type: "text",
      placeholder: "City",
      label: "City",
      ariaLabel: "City",
    },
    {
      id: 5,
      name: "Province",
      type: "text",
      placeholder: "Province",
      label: "Province",
      ariaLabel: "Province",
    },
    {
      id: 6,
      name: "Country",
      type: "text",
      placeholder: "Country",
      label: "Country",
      ariaLabel: "Country",
    },
    {
      id: 7,
      name: "Tenants",
      type: "float",
      placeholder: "Tenants",
      label: "Number of Tenants",
      ariaLabel: "Tenants",
    },
    {
      id: 8,
      name: "Rent",
      type: "number",
      placeholder: "Monthly Rate",
      label: "Rent",
      ariaLabel: "Rent",
    },
    {
      id: 9,
      name: "SurfaceArea",
      type: "number",
      placeholder: "Area (sq. ft)",
      label: "Surface Area (sq. ft)",
      ariaLabel: "SurfaceArea",
    },
    {
      id: 10,
      name: "Age",
      type: "number",
      placeholder: "Age",
      label: "Property Age",
      ariaLabel: "Age",
    },
    {
      id: 11,
      name: "Electricity",
      type: "number",
      placeholder: "Monthly Rate",
      label: "Electricity",
      ariaLabel: "Electricity",
    },
    {
      id: 12,
      name: "Hydro",
      type: "number",
      placeholder: "Monthly Rate",
      label: "Hydro",
      ariaLabel: "Hydro",
    },
    {
      id: 13,
      name: "Gas",
      type: "number",
      placeholder: "Monthly Rate",
      label: "Gas",
      ariaLabel: "Gas",
    },
  ]

  // function checkInput(event: React.ChangeEvent<HTMLInputElement>) {
  //   //if there was a click or change of state, go intot he input and check what type. if type is number and user wasnt? gg error
  //   const { type, value } = event.target
  //   let errorMessage: string
  //   if (type === "text" && !!value.match(/^[a-zA-Z\s]+$/)) {
  //     errorMessage = "Please insert a text value"
  //   } else {
  //     errorMessage = "Please insert a number value"
  //   }
  //   setValidIput(errorMessage)
  // }

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
          <FormLabels labels={formStructure} />
        </div>
        <div className="my-5 ">
          <div className="flex flexcol items-center justify-center gap-20">
            <button type="button" className="w-28 rounded-md py-1 shadow-md hover:bg-red-400 bg-white text-black">
              <Link href={"/dashboard"}>Cancel</Link>
            </button>

            <button className="w-28 bg-indigo-200 rounded-md py-1 hover:bg-indigo-300 shadow-md text-black" type="submit">
              Submit
            </button>
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
