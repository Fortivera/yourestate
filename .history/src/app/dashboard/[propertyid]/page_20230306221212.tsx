import Link from "next/link"
import React from "react"
import { Modal } from "../../components/Modal"
import CancelIcon from "public/CancelIcon"

type Params = {
    params: {
        propertyid: number,

    }
}

async function getProperty(propertyid: number) {
    const response = await fetch(`http://localhost:5085/api/Properties/${propertyid}`)
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    const data = await response.json()
    console.log(data)
    return data
}

export default async function ShowProperty({ params: { propertyid } }: Params) {
    const property: Property = await getProperty(propertyid)

    return (
        <Modal >
            <form method="post" id="property-form" >
                <div className="flex justify-end">
                    <button className="my-[2px]">
                        <Link href={'/dashboard'}><CancelIcon /></Link>
                    </button>
                </div>
                <div className="w-96 py-2 px-8 flex flex-col mx-auto border-2 border-gray-400 z-1">
                    <div className="flex py-2">
                        <label className="pr-3 w-52" htmlFor="Type">Property Type</label>
                        <select name="Type" id="Property type" className="border-2 w-72" defaultValue={property.type}>
                            <option value="House" id="">House</option>
                            <option value="Land" id="">Land</option>
                            <option value="Farm" id="">Farm</option>
                            <option value="Parking" id="">Parking</option>
                        </select>
                    </div>
                    <div className="flex py-2 ">
                        <label className="pr-3 w-52 " htmlFor="Address">Address</label>
                        <input className="leading-7 w-72 border-b-2" id="" type="text" name="Address" aria-label="Address" defaultValue={property.address} />
                    </div>
                    <div className="flex py-2">
                        <label className="pr-3 w-52" htmlFor="Suite">Suite</label>
                        <input className="leading-7 w-72 border-b-2" id="" type="text" name="Suite" aria-label="Suite" placeholder="Suite" />
                    </div>
                    <div className="flex py-2">
                        <label className="pr-3 w-52" htmlFor="PostalCode">PostalCode</label>
                        <input className="leading-7 w-72 border-b-2" id="" type="text" name="PostalCode" aria-label="PostalCode" placeholder="PostalCode" />
                    </div>
                    <div className="flex py-2">
                        <label className="pr-3 w-52" htmlFor="City">City</label>
                        <input className="leading-7 w-72 border-b-2" id="" type="text" name="City" aria-label="City" placeholder="City" />
                    </div>
                    <div className="flex py-2">
                        <label className="pr-3 w-52" htmlFor="Province">Province</label>
                        <input className="leading-7 w-72 border-b-2" id="" type="text" name="Province" aria-label="Province" placeholder="Province" />
                    </div>
                    <div className="flex py-2">
                        <label className="pr-3 w-52" htmlFor="Country">Country</label>
                        <input className="leading-7 w-72 border-b-2" id="" type="text" name="Country" aria-label="Country" placeholder="Country" />
                    </div>
                    <div className="flex py-2">
                        <label className="pr-3 w-52" htmlFor="Tenant">Number of Tenants</label>
                        <input className="leading-7 w-72 border-b-2" id="" type="number" name="Tenant" aria-label="Tenants" placeholder="Tenants" />
                    </div>
                    <div className="flex py-2">
                        <label className="pr-3 w-52" htmlFor="Rent">Rent</label>
                        <input className="leading-7 w-72 border-b-2" id="" type="number" name="Rent" aria-label="" placeholder="Monthly rate" />
                    </div>
                    <div className="flex py-2">
                        <label className="pr-3 w-52" htmlFor="SurfaceArea">Surface Area</label>
                        <input className="leading-7 w-72 border-b-2" id="" type="number" name="SurfaceArea" aria-label="Surface area" placeholder="Area (ft^2)" />
                    </div>
                    <div className="flex py-2">
                        <label className="pr-3 w-52" htmlFor="Age">Age</label>
                        <input className="leading-7 w-72 border-b-2" id="" type="number" name="Age" aria-label="Age" placeholder="Age" />
                    </div>
                    <div className="flex py-2">
                        <label className="pr-3 w-52" htmlFor="Electricity">Electricity</label>
                        <input className="leading-7 w-72 border-b-2" id="" type="number" name="Electricity" aria-label="Electricity" placeholder="Monthly rate" />
                    </div>
                    <div className="flex py-2">
                        <label className="pr-3 w-52" htmlFor="Hydro">Hydro</label>
                        <input className="leading-7 w-72 border-b-2" id="" type="number" name="Hydro" aria-label="Hydro" placeholder="Monthly rate" />
                    </div>
                    <div className="flex py-2">
                        <label className="pr-3 w-52" htmlFor="Gas">Gas</label>
                        <input className="leading-7 w-72 border-b-2" id="" type="number" name="Gas" aria-label="Gas" placeholder="Monthly rate" />
                    </div>
                    <div className="my-5 ">
                        <div className="flex flexcol items-center justify-center gap-20">
                            <button className="w-28 rounded-md py-1 bg-red-300 shadow-md hover:bg-red-400">
                                <Link href={'/dashboard'}>Delete</Link>
                            </button>

                            <button className="w-28 bg-indigo-200 rounded-md py-1 hover:bg-indigo-300 shadow-md" type="submit">
                                <span>Submit</span>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </Modal>
    )
}
