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
      <form method="post" id="property-form" onSubmit={onSubmit}>
        <div className="  w-96 py-2 px-8 flex flex-col mx-auto border-2 border-gray-400 z-1">
          <div className="flex py-2">
            <label className="pr-3 w-52" htmlFor="Type">
              Property Type
            </label>
            <div name="Type" id="Property type" className="border-2 w-72"></div>
          </div>
          <div className="flex py-2 ">
            <label className="pr-3 w-52 " htmlFor="Address">
              Address
            </label>
            <div className="leading-7 w-72 border-b-2" id="" name="Address" aria-label="Address" placeholder="Address" />
          </div>
          <div className="flex py-2">
            <label className="pr-3 w-52" htmlFor="Suite">
              Suite
            </label>
            <div className="leading-7 w-72 border-b-2" id="" name="Suite" aria-label="Suite" placeholder="Suite" />
          </div>
          <div className="flex py-2">
            <label className="pr-3 w-52" htmlFor="PostalCode">
              PostalCode
            </label>
            <div className="leading-7 w-72 border-b-2" id="" name="PostalCode" aria-label="PostalCode" placeholder="PostalCode" />
          </div>
          <div className="flex py-2">
            <label className="pr-3 w-52" htmlFor="City">
              City
            </label>
            <div className="leading-7 w-72 border-b-2" id="" name="City" aria-label="City" placeholder="City" />
          </div>
          <div className="flex py-2">
            <label className="pr-3 w-52" htmlFor="Province">
              Province
            </label>
            <div className="leading-7 w-72 border-b-2" id="" name="Province" aria-label="Province" placeholder="Province" />
          </div>
          <div className="flex py-2">
            <label className="pr-3 w-52" htmlFor="Country">
              Country
            </label>
            <div className="leading-7 w-72 border-b-2" id="" name="Country" aria-label="Country" placeholder="Country" />
          </div>
          <div className="flex py-2">
            <label className="pr-3 w-52" htmlFor="Tenant">
              Number of Tenants
            </label>
            <div className="leading-7 w-72 border-b-2" id="" type="number" name="Tenant" aria-label="Tenants" placeholder="Tenants" />
          </div>
          <div className="flex py-2">
            <label className="pr-3 w-52" htmlFor="Rent">
              Rent
            </label>
            <div className="leading-7 w-72 border-b-2" id="" type="number" name="Rent" aria-label="" />
          </div>
          <div className="flex py-2">
            <label className="pr-3 w-52" htmlFor="SurfaceArea">
              Surface Area
            </label>
            <div className="leading-7 w-72 border-b-2" id="" type="number" name="SurfaceArea" aria-label="Surface area" placeholder="Area (ft^2)" />
          </div>
          <div className="flex py-2">
            <label className="pr-3 w-52" htmlFor="Age">
              Age
            </label>
            <div className="leading-7 w-72 border-b-2" id="" type="number" name="Age" aria-label="Age" placeholder="Age" />
          </div>
          <div className="flex py-2">
            <label className="pr-3 w-52" htmlFor="Electricity">
              Electricity
            </label>
            <div className="leading-7 w-72 border-b-2" id="" type="number" name="Electricity" aria-label="Electricity" />
          </div>
          <div className="flex py-2">
            <label className="pr-3 w-52" htmlFor="Hydro">
              Hydro
            </label>
            <div className="leading-7 w-72 border-b-2" id="" type="number" name="Hydro" aria-label="Hydro" />
          </div>
          <div className="flex py-2">
            <label className="pr-3 w-52" htmlFor="Gas">
              Gas
            </label>
            <div className="leading-7 w-72 border-b-2" id="" aria-label="Gas" />
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
