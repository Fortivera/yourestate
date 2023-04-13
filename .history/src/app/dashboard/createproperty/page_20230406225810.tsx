'use client'

import axios from "axios"
import Link from "next/link"
import { FormEvent } from "react"
import { Modal } from "../../components/Modal"
import { useRouter } from 'next/navigation';
import CancelIcon from "public/CancelIcon"
import { useProperties } from "@/app/usePropertiesStore"
import { getData } from "lib/useRequestFunctions"




type objAllProperties = {
    allProperties: {
        allProperties: Property[],
    }
}




export default function NewProperty() {
    const router = useRouter()
    const store = useProperties((state) => state)

    async function postHandler(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()


        const dataCollected = event.target as HTMLFormElement
        const formData = new FormData(dataCollected) as Iterable<[Property, FormDataEntryValue]>
        const requestData: Property = Object.fromEntries(formData);


        store.addProperty(requestData)
        await postData(requestData)
        // const allPropertiesPromise: any = await getData()
        // const fetchedProperties = await allPropertiesPromise
        // useProperties.setState({ allProperties: fetchedProperties })


        // const propertyData = useProperties((state) => state.allProperties) as unknown as objAllProperties
        // const allProperties = propertyData.allProperties as unknown as Property[]

        // console.log(allProperties)

        router.refresh()
        router.push('/dashboard')
    }

    return (
        <Modal >
            <div className="flex justify-end">
                <button className="my-[2px]">
                    <Link href={'/dashboard'}><CancelIcon /></Link>
                </button>
            </div>
            <form method="POST" id="property-form" onSubmit={postHandler}>
                <div className="w-[30rem] py-2 px-8 flex flex-col mx-auto border-2 border-gray-400 z-1">
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
                        <input className="leading-7 w-72 border-b-2" id="" type="text" name="Address" aria-label="Address" placeholder="Address" />
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
                        <label className="pr-3 w-52" htmlFor="SurfaceArea">{"Surface Area (sq. ft)"}</label>
                        <input className="leading-7 w-72 border-b-2" id="" type="number" name="SurfaceArea" aria-label="Surface area" placeholder="Area (sq. ft)" />
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
                            <button className="w-28 rounded-md py-1 shadow-md hover:bg-red-400">
                                <Link href={'/dashboard'}>Cancel</Link>
                            </button>

                            <button className="w-28 bg-indigo-200 rounded-md py-1 hover:bg-indigo-300 shadow-md" type="submit">
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
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) {
            throw new Error(`Invalid response: ${response.status}`);
        }
    } catch (err) {
        console.error(err);
        alert("We can't submit the form, try again later?");
    }
}