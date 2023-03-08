'use client'

import axios from "axios"
import Link from "next/link"
import { FormEvent } from "react"
import { Modal } from "../Modal"
import { useRouter } from 'next/navigation';


interface Property {
    id: string,
    Type: string,
    Address: string,
    City: string,
    Suite: string,
    PostalCode: string,
    Province: string,
    Country: string,
    Tenant: number,
    Rent: number,
    SurfaceArea: number,
    Age: number,
    Electricity: number,
    Hydro: number,
    Gas: number,
}

export default function NewProperty() {
    const router = useRouter()
    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const dataCollected = event.target as HTMLFormElement
        const formData = new FormData(dataCollected) as Iterable<[Property, FormDataEntryValue]>
        const requestData: Property = Object.fromEntries(formData);
        // const sending = fetch()
        console.log(requestData);
        postData(requestData)
        router.refresh()
        router.push("/dashboard")
    }

    return (
        <Modal >
            <form method="post" id="property-form" onSubmit={onSubmit}>
                <div className="w-96 py-2 px-8 flex flex-col mx-auto border-2 border-gray-400 z-1">
                    <div className="flex py-2">
                        <label className="pr-3 w-52" htmlFor="Type">Property Type</label>
                        <select name="Type" id="Property type" className="border-2 w-72">
                            <option value="House" id="">House</option>
                            <option value="Land" id="">Land</option>
                            <option value="Farm" id="">Farm</option>
                            <option value="Parking" id="">Parking</option>
                        </select>
                    </div>
                    <div className="flex py-2 ">
                        <label className="pr-3 w-52 " htmlFor="Address">Address</label>
                        <input className="leading-7 w-72 border-b-2" id="" type="text" name="Address" aria-label="Address" placeholder="Address" required />
                    </div>
                    <div className="flex py-2">
                        <label className="pr-3 w-52" htmlFor="Suite">Suite</label>
                        <input className="leading-7 w-72 border-b-2" id="" type="text" name="Suite" aria-label="Suite" placeholder="Suite" required />
                    </div>
                    <div className="flex py-2">
                        <label className="pr-3 w-52" htmlFor="PostalCode">PostalCode</label>
                        <input className="leading-7 w-72 border-b-2" id="" type="text" name="PostalCode" aria-label="PostalCode" placeholder="PostalCode" required />
                    </div>
                    <div className="flex py-2">
                        <label className="pr-3 w-52" htmlFor="City">City</label>
                        <input className="leading-7 w-72 border-b-2" id="" type="text" name="City" aria-label="City" placeholder="City" required />
                    </div>
                    <div className="flex py-2">
                        <label className="pr-3 w-52" htmlFor="Province">Province</label>
                        <input className="leading-7 w-72 border-b-2" id="" type="text" name="Province" aria-label="Province" placeholder="Province" required />
                    </div>
                    <div className="flex py-2">
                        <label className="pr-3 w-52" htmlFor="Country">Country</label>
                        <input className="leading-7 w-72 border-b-2" id="" type="text" name="Country" aria-label="Country" placeholder="Country" required />
                    </div>
                    <div className="flex py-2">
                        <label className="pr-3 w-52" htmlFor="Tenant">Number of Tenants</label>
                        <input className="leading-7 w-72 border-b-2" id="" type="number" name="Tenant" aria-label="Tenants" placeholder="Tenants" required />
                    </div>
                    <div className="flex py-2">
                        <label className="pr-3 w-52" htmlFor="Rent">Rent</label>
                        <input className="leading-7 w-72 border-b-2" id="" type="number" name="Rent" aria-label="" placeholder="Monthly rate" required />
                    </div>
                    <div className="flex py-2">
                        <label className="pr-3 w-52" htmlFor="SurfaceArea">Surface Area</label>
                        <input className="leading-7 w-72 border-b-2" id="" type="number" name="SurfaceArea" aria-label="Surface area" placeholder="Area (ft^2)" required />
                    </div>
                    <div className="flex py-2">
                        <label className="pr-3 w-52" htmlFor="Age">Age</label>
                        <input className="leading-7 w-72 border-b-2" id="" type="number" name="Age" aria-label="Age" placeholder="Age" required />
                    </div>
                    <div className="flex py-2">
                        <label className="pr-3 w-52" htmlFor="Electricity">Electricity</label>
                        <input className="leading-7 w-72 border-b-2" id="" type="number" name="Electricity" aria-label="Electricity" placeholder="Monthly rate" required />
                    </div>
                    <div className="flex py-2">
                        <label className="pr-3 w-52" htmlFor="Hydro">Hydro</label>
                        <input className="leading-7 w-72 border-b-2" id="" type="number" name="Hydro" aria-label="Hydro" placeholder="Monthly rate" required />
                    </div>
                    <div className="flex py-2">
                        <label className="pr-3 w-52" htmlFor="Gas">Gas</label>
                        <input className="leading-7 w-72 border-b-2" id="" type="number" name="Gas" aria-label="Gas" placeholder="Monthly rate" required />
                    </div>
                    <div className="my-5 ">
                        <div className="flex flexcol items-center justify-center gap-20">
                            <button className=" ">
                                <Link href={'/dashboard'}>Cancel</Link>
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

async function postData(data: any): Promise<any> {

    const url = `${process.env.SERVER_URL}${process.env.PROPERTY_ENDPOINT}`
    const response = await axios.post(url, data)
        .catch((error: any) => {
            console.log(error);
        });
}