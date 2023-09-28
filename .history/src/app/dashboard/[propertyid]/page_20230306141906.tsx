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
            <div className="pr-3 w-52">Property Type</div>
            <div name="Type" id="Property type" className="border-2 w-72"></div>
          </div>
          <div className="flex py-2 ">
            <div className="pr-3 w-52 ">Address</div>
            <div className="leading-7 w-72 border-b-2" id="" aria-div="Address" placeholder="Address" />
          </div>
          <div className="flex py-2">
            <div className="pr-3 w-52">Suite</div>
            <div className="leading-7 w-72 border-b-2" id="" name="Suite" aria-div="Suite" placeholder="Suite" />
          </div>
          <div className="flex py-2">
            <div className="pr-3 w-52">PostalCode</div>
            <div className="leading-7 w-72 border-b-2" id="" name="PostalCode" aria-div="PostalCode" placeholder="PostalCode" />
          </div>
          <div className="flex py-2">
            <div className="pr-3 w-52">City</div>
            <div className="leading-7 w-72 border-b-2" id="" name="City" aria-div="City" placeholder="City" />
          </div>
          <div className="flex py-2">
            <div className="pr-3 w-52">Province</div>
            <div className="leading-7 w-72 border-b-2" id="" name="Province" aria-div="Province" placeholder="Province" />
          </div>
          <div className="flex py-2">
            <div className="pr-3 w-52">Country</div>
            <div className="leading-7 w-72 border-b-2" id="" name="Country" aria-div="Country" placeholder="Country" />
          </div>
          <div className="flex py-2">
            <div className="pr-3 w-52">Number of Tenants</div>
            <div className="leading-7 w-72 border-b-2" id="" type="number" name="Tenant" aria-div="Tenants" placeholder="Tenants" />
          </div>
          <div className="flex py-2">
            <div className="pr-3 w-52">Rent</div>
            <div className="leading-7 w-72 border-b-2" id="" type="number" name="Rent" aria-div="" />
          </div>
          <div className="flex py-2">
            <div className="pr-3 w-52">Surface Area</div>
            <div className="leading-7 w-72 border-b-2" id="" type="number" name="SurfaceArea" aria-div="Surface area" placeholder="Area (ft^2)" />
          </div>
          <div className="flex py-2">
            <div className="pr-3 w-52">Age</div>
            <div className="leading-7 w-72 border-b-2" id="" type="number" name="Age" aria-div="Age" placeholder="Age" />
          </div>
          <div className="flex py-2">
            <div className="pr-3 w-52">Electricity</div>
            <div className="leading-7 w-72 border-b-2" id="" type="number" name="Electricity" aria-div="Electricity" />
          </div>
          <div className="flex py-2">
            <div className="pr-3 w-52">Hydro</div>
            <div className="leading-7 w-72 border-b-2" id="" type="number" name="Hydro" aria-div="Hydro" />
          </div>
          <div className="flex py-2">
            <div className="pr-3 w-52">Gas</div>
            <div className="leading-7 w-72 border-b-2" id="" aria-div="Gas" />
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
