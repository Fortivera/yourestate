"use client"
import { useEffect, useState } from "react";
import DeleteButton from "@/app/components/DeleteButton";
import { Modal } from "@/app/components/Modal";
import SubmitButton from "@/app/components/SubmitButton";
import Link from "next/link";
import CancelIcon from "public/CancelIcon";
import { FormEvent } from "react";
import { useRouter } from 'next/navigation';
import { useProperties } from "@/app/usePropertiesStore"

export default function EditProperty({ property }: any) {

    const router = useRouter()
    const store = useProperties((state) => state)

    // const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    //     event.preventDefault()
    //     try {
    //         const dataCollected = event.target as HTMLFormElement
    //         const formData = new FormData(dataCollected) as Iterable<[Property, FormDataEntryValue]>
    //         const requestData: Property = Object.fromEntries(formData)

    //         console.log(requestData)
    //         await updateProperty(requestData, property.id)

    //         router.refresh()
    //         router.replace("/dashboard")
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }



    async function handleSubmit(event: FormEvent<HTMLFormElement>) {

        event.preventDefault()


        try {
            const dataCollected = event.target as HTMLFormElement
            const formData = new FormData(dataCollected) as Iterable<[Property, FormDataEntryValue]>
            const requestData: Property = Object.fromEntries(formData)

            console.log(requestData)
            await updateProperty(requestData, property.id)

            router.refresh()
            router.replace("/dashboard")

        } catch (error) {
            console.error(error)
        }
    }

    async function handleDelete(event: any) {
        event.preventDefault()
        debugger
        await deleteProperty(property.id)
        // await store.deleteProperty(property.id)
        router.refresh()
        router.replace("/dashboard")
    }
    return (
        <Modal>
            <div className="flex justify-end">
                <button className="my-[2px]">
                    <Link href={'/dashboard'}><CancelIcon /></Link>
                </button>
            </div>
            <form method="PUT" id="update-form" onSubmit={handleSubmit} >
                <div className="w-[30rem] py-2 px-8 flex flex-col mx-auto border-2 border-gray-400 z-1">
                    <label hidden className="pr-3 w-52" htmlFor="id"> </label>
                    <input hidden defaultValue={property.id} type="text" name="id" />
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
                        <input className="leading-7 w-72 border-b-2" id="" type="text" name="Suite" aria-label="Suite" defaultValue={property.suite} />
                    </div>
                    <div className="flex py-2">
                        <label className="pr-3 w-52" htmlFor="PostalCode">PostalCode</label>
                        <input className="leading-7 w-72 border-b-2" id="" type="text" name="PostalCode" aria-label="PostalCode" defaultValue={property.postalCode} />
                    </div>
                    <div className="flex py-2">
                        <label className="pr-3 w-52" htmlFor="City">City</label>
                        <input className="leading-7 w-72 border-b-2" id="" type="text" name="City" aria-label="City" defaultValue={property.city} />
                    </div>
                    <div className="flex py-2">
                        <label className="pr-3 w-52" htmlFor="Province">Province</label>
                        <input className="leading-7 w-72 border-b-2" id="" type="text" name="Province" aria-label="Province" defaultValue={property.province} />
                    </div>
                    <div className="flex py-2">
                        <label className="pr-3 w-52" htmlFor="Country">Country</label>
                        <input className="leading-7 w-72 border-b-2" id="" type="text" name="Country" aria-label="Country" defaultValue={property.country} />
                    </div>
                    <div className="flex py-2">
                        <label className="pr-3 w-52" htmlFor="Tenant">Number of Tenants</label>
                        <input className="leading-7 w-72 border-b-2" id="" type="number" name="Tenant" aria-label="Tenants" defaultValue={property.tenant} />
                    </div>
                    <div className="flex py-2">
                        <label className="pr-3 w-52" htmlFor="Rent">Rent</label>
                        <input className="leading-7 w-72 border-b-2" id="" type="number" name="Rent" aria-label="" defaultValue={property.rent} />
                    </div>
                    <div className="flex py-2">
                        <label className="pr-3 w-52" htmlFor="SurfaceArea ">{"Surface Area (sq. ft)"}</label>
                        <input className="leading-7 w-72 border-b-2" id="" type="number" name="SurfaceArea" aria-label="Surface area" defaultValue={property.surfaceArea} />
                    </div>
                    <div className="flex py-2">
                        <label className="pr-3 w-52" htmlFor="Age">Age</label>
                        <input className="leading-7 w-72 border-b-2" id="" type="number" name="Age" aria-label="Age" defaultValue={property.age} />
                    </div>
                    <div className="flex py-2">
                        <label className="pr-3 w-52" htmlFor="Electricity">Electricity</label>
                        <input className="leading-7 w-72 border-b-2" id="" type="number" name="Electricity" aria-label="Electricity" defaultValue={property.electricity} />
                    </div>
                    <div className="flex py-2">
                        <label className="pr-3 w-52" htmlFor="Hydro">Hydro</label>
                        <input className="leading-7 w-72 border-b-2" id="" type="number" name="Hydro" aria-label="Hydro" defaultValue={property.hydro} />
                    </div>
                    <div className="flex py-2">
                        <label className="pr-3 w-52" htmlFor="Gas">Gas</label>
                        <input className="leading-7 w-72 border-b-2" id="" type="number" name="Gas" aria-label="Gas" defaultValue={property.gas} />
                    </div>
                    <div className="my-5 ">
                        <div className="flex flexcol items-center justify-center gap-20">
                            <>
                                <button onClick={handleDelete} className="w-28 rounded-md py-1 shadow-md bg-red-300 hover:bg-red-400" type="button">
                                    <span>Delete</span>
                                </button>
                                <SubmitButton buttonText="Submit" />
                            </>
                        </div>
                    </div>
                </div>
            </form>
        </Modal >
    )
}

async function updateProperty(userInput: Property, id: number) {

    const url = `${process.env.NEXT_PUBLIC_SERVER_URL}${process.env.NEXT_PUBLIC_PROPERTY_ENDPOINT}/${id}`

    console.log(url)

    const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(userInput),
        headers: {
            "Content-Type": "application/json"
        }
    });




}

async function deleteProperty(id: number) {

    const url = `${process.env.NEXT_PUBLIC_SERVER_URL}${process.env.NEXT_PUBLIC_PROPERTY_ENDPOINT}/${id}`
    console.log(url)
    try {
        const response = fetch(url, {
            method: "DELETE",

            headers: {
                "Content-Type": "application/json"
            }
        });
    } catch (err) {
        console.error(err);
    }
}