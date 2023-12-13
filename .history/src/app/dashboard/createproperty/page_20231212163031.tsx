"use client"

import Link from "next/link"
import { FormEvent, useContext } from "react"
import { Modal } from "../../../components/Modal"
import { useRouter } from "next/navigation"
import CancelIcon from "public/CancelIcon"
import { ThemeContext } from "@/context/ThemeContex"

export default function NewProperty() {
  // const [validInput, setValidIput] = useState<string>()
  const router = useRouter()

  const formLables = [
    {
      id: 1,
      name: "Address",
      type: "text",
      placeholder: "Address",
      label: "Address",
      ariaLabel: "Address",
      pattern: "[0-9]",
    },
    {
      id: 2,
      name: "Suite",
      type: "text",
      placeholder: "Suite",
      label: "Suite",
      ariaLabel: "Suite",
      pattern: "[0-9]",
    },
    {
      id: 3,
      name: "PostalCode",
      type: "text",
      placeholder: "Postal Code",
      label: "Postal Code",
      ariaLabel: "PostalCode",
      pattern: "[0-9]",
    },
    {
      id: 4,
      name: "City",
      type: "text",
      placeholder: "City",
      label: "City",
      ariaLabel: "City",
      pattern: "[0-9]",
    },
    {
      id: 5,
      name: "Province",
      type: "text",
      placeholder: "Province",
      label: "Province",
      ariaLabel: "Province",
      pattern: "[0-9]",
    },
    {
      id: 6,
      name: "Country",
      type: "text",
      placeholder: "Country",
      label: "Country",
      ariaLabel: "Country",
      pattern: "[0-9]",
    },
    {
      id: 7,
      name: "Tenants",
      type: "float",
      placeholder: "Tenants",
      label: "Number of Tenants",
      ariaLabel: "Tenants",
      pattern: "[0-9]",
    },
    {
      id: 8,
      name: "Rent",
      type: "number",
      placeholder: "Monthly Rate",
      label: "Rent",
      ariaLabel: "Rent",
      pattern: "[0-9]",
    },
    {
      id: 9,
      name: "SurfaceArea",
      type: "number",
      placeholder: "Area (sq. ft)",
      label: "Surface Area (sq. ft)",
      ariaLabel: "SurfaceArea",
      pattern: "[0-9]",
    },
    {
      id: 10,
      name: "Age",
      type: "number",
      placeholder: "Age",
      label: "Property Age",
      ariaLabel: "Age",
      pattern: "[0-9]",
    },
    {
      id: 11,
      name: "Electricity",
      type: "number",
      placeholder: "Monthly Rate",
      label: "Electricity",
      ariaLabel: "Electricity",
      pattern: "[0-9]",
    },
    {
      id: 12,
      name: "Hydro",
      type: "number",
      placeholder: "Monthly Rate",
      label: "Hydro",
      ariaLabel: "Hydro",
      pattern: "[0-9]",
    },
    {
      id: 13,
      name: "Gas",
      type: "number",
      placeholder: "Monthly Rate",
      label: "Gas",
      ariaLabel: "Gas",
      pattern: "[0-9]",
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
  const { theme } = useContext(ThemeContext)
  const inputColour = "bg-slate-500/60 text-[#ddd]"
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
          <div className="flex flex-col md:flex-row py-2">
            <label className="pr-3 w-52" htmlFor="Type">
              Property Type
            </label>
            <select name="Type" id="Property type" className={`w-auto md:w-72 leading-7 border-b-2 ${theme === "light" ? "bg-white" : inputColour}`}>
              <option value="House" id="">
                House
              </option>
              <option value="Land" id="">
                Land
              </option>
              <option value="Farm" id="">
                Farm
              </option>
              <option value="Parking" id="">
                Parking
              </option>
            </select>
          </div>
          {formLables.map((entity) => {
            return (
              <div key={entity.id} className="flex flex-col md:flex-row py-2 ">
                <label className="pr-3 w-52 " htmlFor={`${entity.name}`}>
                  {entity.name}
                </label>
                <input className={`${theme === "light" ? "bg-white" : inputColour} leading-7 w-auto md:w-72 border-b-2`} id="" type={`${entity.type}`} name={`${entity.name}`} aria-label={`${entity.ariaLabel}`} placeholder={`${entity.placeholder}`} pattern={`${entity.pattern}`} />
              </div>
            )
          })}
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
