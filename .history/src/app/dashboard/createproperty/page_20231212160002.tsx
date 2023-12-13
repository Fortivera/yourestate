"use client"

import Link from "next/link"
import { FormEvent, useContext, useState } from "react"
import { Modal } from "../../../components/Modal"
import { useRouter } from "next/navigation"
import CancelIcon from "public/CancelIcon"
import { ThemeContext } from "@/context/ThemeContex"

export default function NewProperty() {
  const [validInput, setValidIput] = useState<string>()
  const router = useRouter()

  const formLables = [
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
      type: "text",
      placeholder: "Tenants",
      label: "Number of Tenants",
      ariaLabel: "Tenants",
    },
    {
      id: 8,
      name: "Rent",
      type: "text",
      placeholder: "Rent",
      label: "Rent",
      ariaLabel: "Rent",
    },
    {
      id: 9,
      name: "SurfaceArea",
      type: "text",
      placeholder: "Area (sq. ft)",
      label: "Surface Area (sq. ft)",
      ariaLabel: "SurfaceArea",
    },
    {
      id: 10,
      name: "Address",
      type: "text",
      placeholder: "Address",
      label: "Address",
      ariaLabel: "Address",
    },
    {
      id: 11,
      name: "Address",
      type: "text",
      placeholder: "Address",
      label: "Address",
      ariaLabel: "Address",
    },
    {
      id: 12,
      name: "Address",
      type: "text",
      placeholder: "Address",
      label: "Address",
      ariaLabel: "Address",
    },
    {
      id: 13,
      name: "Address",
      type: "text",
      placeholder: "Address",
      label: "Address",
      ariaLabel: "Address",
    },
  ]
  function checkInput(event: React.ChangeEvent<HTMLInputElement>) {
    //if there was a click or change of state, go intot he input and check what type. if type is number and user wasnt? gg error
    const { type, value } = event.target
    let errorMessage: string
    if (type === "text" && !!value.match(/^[a-zA-Z\s]+$/)) {
      errorMessage = "Please insert a text value"
    } else {
      errorMessage = "Please insert a number value"
    }
    setValidIput(errorMessage)
  }

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
          <div className="flex flex-col md:flex-row py-2 ">
            <label className="pr-3 w-52 " htmlFor="Address">
              Address
            </label>
            <input className={`${theme === "light" ? "bg-white" : inputColour} leading-7 w-auto md:w-72 border-b-2`} id="" type="text" name="Address" aria-label="Address" placeholder="Address" />
          </div>
          <div className="flex flex-col md:flex-row py-2">
            <label className="pr-3 w-52" htmlFor="Suite">
              Suite
            </label>
            <input className={`${theme === "light" ? "bg-white" : inputColour} leading-7 w-auto md:w-72 border-b-2`} id="" type="text" name="Suite" aria-label="Suite" placeholder="Suite" />
          </div>
          <div className="flex flex-col md:flex-row py-2">
            <label className="pr-3 w-52" htmlFor="PostalCode">
              PostalCode
            </label>
            <input className={`${theme === "light" ? "bg-white" : inputColour} leading-7 w-auto md:w-72 border-b-2`} id="" type="text" name="PostalCode" aria-label="PostalCode" placeholder="PostalCode" />
          </div>
          <div className="flex flex-col md:flex-row py-2">
            <label className="pr-3 w-52" htmlFor="City">
              City
            </label>
            <input className={`${theme === "light" ? "bg-white" : inputColour} leading-7 w-auto md:w-72 border-b-2`} id="" type="text" name="City" aria-label="City" placeholder="City" />
          </div>
          <div className="flex flex-col md:flex-row py-2">
            <label className="pr-3 w-52" htmlFor="Province">
              Province
            </label>
            <input className={`${theme === "light" ? "bg-white" : inputColour} leading-7 w-auto md:w-72 border-b-2`} id="" type="text" name="Province" aria-label="Province" placeholder="Province" />
          </div>
          <div className="flex flex-col md:flex-row py-2">
            <label className="pr-3 w-52" htmlFor="Country">
              Country
            </label>
            <input className={`${theme === "light" ? "bg-white" : inputColour} leading-7 w-auto md:w-72 border-b-2`} id="" type="text" name="Country" aria-label="Country" placeholder="Country" />
          </div>
          <div className="flex flex-col md:flex-row py-2">
            <label className="pr-3 w-52" htmlFor="Tenant">
              Number of Tenants
            </label>
            <input className={`${theme === "light" ? "bg-white" : inputColour} leading-7 w-auto md:w-72 border-b-2`} id="" type="number" name="Tenant" aria-label="Tenants" placeholder="Tenants" />
          </div>
          <div className="flex flex-col md:flex-row py-2">
            <label className="pr-3 w-52" htmlFor="Rent">
              Rent
            </label>
            <input className={`${theme === "light" ? "bg-white" : inputColour} leading-7 w-auto md:w-72 border-b-2`} id="" type="number" name="Rent" aria-label="" placeholder="Monthly rate" />
          </div>
          <div className="flex flex-col md:flex-row py-2">
            <label className="pr-3 w-52" htmlFor="SurfaceArea">
              {"Surface Area (sq. ft)"}
            </label>
            <input className={`${theme === "light" ? "bg-white" : inputColour} leading-7 w-auto md:w-72 border-b-2`} id="" type="number" name="SurfaceArea" aria-label="Surface area" placeholder="Area (sq. ft)" />
          </div>
          <div className="flex flex-col md:flex-row py-2">
            <label className="pr-3 w-52" htmlFor="Age">
              Property Age
            </label>
            <input className={`${theme === "light" ? "bg-white" : inputColour} leading-7 w-auto md:w-72 border-b-2`} id="" type="number" name="Age" aria-label="Age" placeholder="Age" />
          </div>
          <div className="flex flex-col md:flex-row py-2">
            <label className="pr-3 w-52" htmlFor="Electricity">
              Electricity
            </label>
            <input className={`${theme === "light" ? "bg-white" : inputColour} leading-7 w-auto md:w-72 border-b-2`} id="" type="number" name="Electricity" aria-label="Electricity" placeholder="Monthly rate" />
          </div>
          <div className="flex flex-col md:flex-row py-2">
            <label className="pr-3 w-52" htmlFor="Hydro">
              Hydro
            </label>
            <input className={`${theme === "light" ? "bg-white" : inputColour} leading-7 w-auto md:w-72 border-b-2`} id="" type="number" name="Hydro" aria-label="Hydro" placeholder="Monthly rate" />
          </div>
          <div className="flex flex-col md:flex-row py-2">
            <label className="pr-3 w-52" htmlFor="Gas">
              Gas
            </label>
            <input className={`${theme === "light" ? "bg-white" : inputColour} leading-7 w-auto md:w-72 border-b-2`} id="" type="number" name="Gas" aria-label="Gas" placeholder="Monthly rate" />
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
