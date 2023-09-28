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
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">
              <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                <path d="M 3 90 c -0.768 0 -1.536 -0.293 -2.121 -0.879 c -1.172 -1.171 -1.172 -3.071 0 -4.242 l 84 -84 c 1.172 -1.172 3.07 -1.172 4.242 0 c 1.172 1.171 1.172 3.071 0 4.242 l -84 84 C 4.536 89.707 3.768 90 3 90 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path d="M 87 90 c -0.768 0 -1.535 -0.293 -2.121 -0.879 l -84 -84 c -1.172 -1.171 -1.172 -3.071 0 -4.242 c 1.171 -1.172 3.071 -1.172 4.242 0 l 84 84 c 1.172 1.171 1.172 3.071 0 4.242 C 88.535 89.707 87.768 90 87 90 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
              </g>
            </svg>
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
