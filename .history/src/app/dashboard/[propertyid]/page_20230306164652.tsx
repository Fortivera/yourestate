import Link from "next/link"
import React from "react"
import { Modal } from "../../components/Modal"

type Params = {
  params: {
    propertyid: number
  }
}

async function getProperty(propertyid: number) {
  const response = await fetch(`http://localhost:5085/api/Properties/${propertyid}`)
  if (!response.ok) {
    throw new Error("Failed to fetch data")
  }
  const data = await response.json()
  console.log(data)
  return data
}

export default async function ShowProperty({ params: { propertyid } }: Params) {
  const property: Property = await getProperty(propertyid)

  return (
    <Modal>
      <form method="post" id="property-form">
        <div className="flex justify-end">
          <button className="">
            <path xmlns="http://www.w3.org/2000/svg" className="cls-2" d="M35.38,49.72c-2.16-2.13-3.9-3.47-1.19-6.1l8.74-8.53c2.77-2.8,4.39-2.66,7,0L61.68,46.86,73.39,35.15c2.14-2.17,3.47-3.91,6.1-1.2L88,42.69c2.8,2.77,2.66,4.4,0,7L76.27,61.44,88,73.21c2.65,2.58,2.79,4.21,0,7l-8.54,8.74c-2.63,2.71-4,1-6.1-1.19L61.68,76,49.9,87.81c-2.58,2.64-4.2,2.78-7,0l-8.74-8.53c-2.71-2.63-1-4,1.19-6.1L47.1,61.44,35.38,49.72Z" />
          </button>
        </div>
        <div className="  w-96 py-2 px-8 flex flex-col mx-auto border-2 border-gray-400 z-1">
          <div className="flex py-2">
            <label className="pr-3 w-52" htmlFor="Type">
              Property Type
            </label>
            <select name="Type" id="Property type" className="border-2 w-72" value={property.type}>
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
          <div className="flex py-2 ">
            <label className="pr-3 w-52 " htmlFor="Address">
              Address
            </label>
            <input className="leading-7 w-72 border-b-2" id="" type="text" name="Address" aria-label="Address" placeholder="Address" required />
          </div>
          <div className="flex py-2">
            <label className="pr-3 w-52" htmlFor="Suite">
              Suite
            </label>
            <input className="leading-7 w-72 border-b-2" id="" type="text" name="Suite" aria-label="Suite" placeholder="Suite" required />
          </div>
          <div className="flex py-2">
            <label className="pr-3 w-52" htmlFor="PostalCode">
              PostalCode
            </label>
            <input className="leading-7 w-72 border-b-2" id="" type="text" name="PostalCode" aria-label="PostalCode" placeholder="PostalCode" required />
          </div>
          <div className="flex py-2">
            <label className="pr-3 w-52" htmlFor="City">
              City
            </label>
            <input className="leading-7 w-72 border-b-2" id="" type="text" name="City" aria-label="City" placeholder="City" required />
          </div>
          <div className="flex py-2">
            <label className="pr-3 w-52" htmlFor="Province">
              Province
            </label>
            <input className="leading-7 w-72 border-b-2" id="" type="text" name="Province" aria-label="Province" placeholder="Province" required />
          </div>
          <div className="flex py-2">
            <label className="pr-3 w-52" htmlFor="Country">
              Country
            </label>
            <input className="leading-7 w-72 border-b-2" id="" type="text" name="Country" aria-label="Country" placeholder="Country" required />
          </div>
          <div className="flex py-2">
            <label className="pr-3 w-52" htmlFor="Tenant">
              Number of Tenants
            </label>
            <input className="leading-7 w-72 border-b-2" id="" type="number" name="Tenant" aria-label="Tenants" placeholder="Tenants" required />
          </div>
          <div className="flex py-2">
            <label className="pr-3 w-52" htmlFor="Rent">
              Rent
            </label>
            <input className="leading-7 w-72 border-b-2" id="" type="number" name="Rent" aria-label="" placeholder="Monthly rate" required />
          </div>
          <div className="flex py-2">
            <label className="pr-3 w-52" htmlFor="SurfaceArea">
              Surface Area
            </label>
            <input className="leading-7 w-72 border-b-2" id="" type="number" name="SurfaceArea" aria-label="Surface area" placeholder="Area (ft^2)" required />
          </div>
          <div className="flex py-2">
            <label className="pr-3 w-52" htmlFor="Age">
              Age
            </label>
            <input className="leading-7 w-72 border-b-2" id="" type="number" name="Age" aria-label="Age" placeholder="Age" required />
          </div>
          <div className="flex py-2">
            <label className="pr-3 w-52" htmlFor="Electricity">
              Electricity
            </label>
            <input className="leading-7 w-72 border-b-2" id="" type="number" name="Electricity" aria-label="Electricity" placeholder="Monthly rate" required />
          </div>
          <div className="flex py-2">
            <label className="pr-3 w-52" htmlFor="Hydro">
              Hydro
            </label>
            <input className="leading-7 w-72 border-b-2" id="" type="number" name="Hydro" aria-label="Hydro" placeholder="Monthly rate" required />
          </div>
          <div className="flex py-2">
            <label className="pr-3 w-52" htmlFor="Gas">
              Gas
            </label>
            <input className="leading-7 w-72 border-b-2" id="" type="number" name="Gas" aria-label="Gas" placeholder="Monthly rate" required />
          </div>
          <div className="my-5 ">
            <div className="flex flexcol items-center justify-center gap-20">
              <button className=" ">
                <Link href={"/dashboard"}>Cancel</Link>
              </button>

              <button className="w-28 border-2 bg-blue-200 rounded-md py-1" type="submit">
                <span>Submit</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </Modal>
  )
}
