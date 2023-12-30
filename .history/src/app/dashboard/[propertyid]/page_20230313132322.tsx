"use clint"

import Link from "next/link"
import React, { FormEvent, Suspense } from "react"
import { Modal } from "../../components/Modal"
import CancelIcon from "public/CancelIcon"
import { useRouter } from "next/navigation"
import { useProperties } from "../../usePropertiesStore"
import Loading from "./loading"

type Params = {
    params: {
        propertyid: number
    }
}

export default function ShowProperty({ params: { propertyid } }: Params) {
    const { allProperties } = useProperties.getState()
    console.log(allProperties)

    function handleSpecificIdFilter(arr: Property[], propertyid: number) {
        for (let i = 0; i < arr.length; i++) {
            try {
                if (arr[i].id != propertyid) {
                    continue
                } else {
                    return arr[i]
                }
            } catch (error) {
                console.error(error)
            }
        }
    }

    const property = handleSpecificIdFilter(allProperties, propertyid) as Property

    // const property: Property = await getProperty(propertyid)
    // const router = useRouter()

    // async function handlePut(event: FormEvent<HTMLFormElement>) {
    //     event.preventDefault()
    //     const dataCollected = event.target as HTMLFormElement
    //     const formData = new FormData(dataCollected) as Iterable<[Property, FormDataEntryValue]>
    //     const requestData: Property = Object.fromEntries(formData);
    //     console.log(requestData);
    //     updateProperty(requestData, propertyid)
    //     router.refresh()
    //     router.push("/dashboard")
    // }

    // function handleDelete() {
    //     deleteProperty(propertyid)
    //     router.refresh()
    //     router.push("/dashboard")
    // }

    return (
        <Suspense fallback={<Loading />}>
            <Modal>
                <form method="PUT" id="property-form">
                    <div className="flex justify-end">
                        <button className="my-[2px]">
                            <Link href={"/dashboard"}>
                                <CancelIcon />
                            </Link>
                        </button>
                    </div>
                    <div className="w-[30rem] py-2 px-8 flex flex-col mx-auto border-2 border-gray-400 z-1">
                        <div className="flex py-2">
                            <label className="pr-3 w-52" htmlFor="Type">
                                Property Type
                            </label>
                            <select name="Type" id="Property type" className="border-2 w-72" defaultValue={property.type}>
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
                            <input className="leading-7 w-72 border-b-2" id="" type="text" name="Address" aria-label="Address" defaultValue={property.address} />
                        </div>
                        <div className="flex py-2">
                            <label className="pr-3 w-52" htmlFor="Suite">
                                Suite
                            </label>
                            <input className="leading-7 w-72 border-b-2" id="" type="text" name="Suite" aria-label="Suite" defaultValue={property.suite} />
                        </div>
                        <div className="flex py-2">
                            <label className="pr-3 w-52" htmlFor="PostalCode">
                                PostalCode
                            </label>
                            <input className="leading-7 w-72 border-b-2" id="" type="text" name="PostalCode" aria-label="PostalCode" defaultValue={property.postalCode} />
                        </div>
                        <div className="flex py-2">
                            <label className="pr-3 w-52" htmlFor="City">
                                City
                            </label>
                            <input className="leading-7 w-72 border-b-2" id="" type="text" name="City" aria-label="City" defaultValue={property.city} />
                        </div>
                        <div className="flex py-2">
                            <label className="pr-3 w-52" htmlFor="Province">
                                Province
                            </label>
                            <input className="leading-7 w-72 border-b-2" id="" type="text" name="Province" aria-label="Province" defaultValue={property.province} />
                        </div>
                        <div className="flex py-2">
                            <label className="pr-3 w-52" htmlFor="Country">
                                Country
                            </label>
                            <input className="leading-7 w-72 border-b-2" id="" type="text" name="Country" aria-label="Country" defaultValue={property.country} />
                        </div>
                        <div className="flex py-2">
                            <label className="pr-3 w-52" htmlFor="Tenant">
                                Number of Tenants
                            </label>
                            <input className="leading-7 w-72 border-b-2" id="" type="number" name="Tenant" aria-label="Tenants" defaultValue={property.tenant} />
                        </div>
                        <div className="flex py-2">
                            <label className="pr-3 w-52" htmlFor="Rent">
                                Rent
                            </label>
                            <input className="leading-7 w-72 border-b-2" id="" type="number" name="Rent" aria-label="" defaultValue={property.rent} />
                        </div>
                        <div className="flex py-2">
                            <label className="pr-3 w-52" htmlFor="SurfaceArea ">
                                {"Surface Area (sq. ft)"}
                            </label>
                            <input className="leading-7 w-72 border-b-2" id="" type="number" name="SurfaceArea" aria-label="Surface area" defaultValue={property.surfaceArea} />
                        </div>
                        <div className="flex py-2">
                            <label className="pr-3 w-52" htmlFor="Age">
                                Age
                            </label>
                            <input className="leading-7 w-72 border-b-2" id="" type="number" name="Age" aria-label="Age" defaultValue={property.age} />
                        </div>
                        <div className="flex py-2">
                            <label className="pr-3 w-52" htmlFor="Electricity">
                                Electricity
                            </label>
                            <input className="leading-7 w-72 border-b-2" id="" type="number" name="Electricity" aria-label="Electricity" defaultValue={property.electricity} />
                        </div>
                        <div className="flex py-2">
                            <label className="pr-3 w-52" htmlFor="Hydro">
                                Hydro
                            </label>
                            <input className="leading-7 w-72 border-b-2" id="" type="number" name="Hydro" aria-label="Hydro" defaultValue={property.hydro} />
                        </div>
                        <div className="flex py-2">
                            <label className="pr-3 w-52" htmlFor="Gas">
                                Gas
                            </label>
                            <input className="leading-7 w-72 border-b-2" id="" type="number" name="Gas" aria-label="Gas" defaultValue={property.gas} />
                        </div>
                        <div className="my-5 ">
                            <div className="flex flexcol items-center justify-center gap-20">
                                <button className="w-28 rounded-md py-1 bg-red-300 shadow-md hover:bg-red-400" type="button">
                                    <Link href={"/dashboard"}>Delete</Link>
                                </button>

                                <button className="w-28 bg-indigo-200 rounded-md py-1 hover:bg-indigo-300 shadow-md" type="submit">
                                    <Link href={"/dashboard"}>Submit</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </Modal>
        </Suspense>
    )
}

// async function deleteProperty(userInput: number) {

//     const url = `${process.env.NEXT_PUBLIC_SERVER_URL}${process.env.NEXT_PUBLIC_PROPERTY_ENDPOINT}${userInput}`
//     console.log(url)
//     try {
//         const response = await fetch(url, {
//             method: "DELETE",
//             body: JSON.stringify(userInput),
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         });
//         if (!response.ok) {
//             throw new Error(`Invalid response: ${response.status}`);
//         }
//     } catch (err) {
//         console.error(err);
//         alert("We can't submit the form, try again later?");
//     }
// }

// async function updateProperty(userInput: Property, id: number) {

//     const url = `${process.env.NEXT_PUBLIC_SERVER_URL}${process.env.NEXT_PUBLIC_PROPERTY_ENDPOINT}${id}`
//     console.log(url)
//     try {
//         const response = await fetch(url, {
//             method: "PUT",
//             body: JSON.stringify(userInput),
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         });
//         if (!response.ok) {
//             throw new Error(`Invalid response: ${response.status}`);
//         }
//     } catch (err) {
//         console.error(err);
//         alert("We can't submit the form, try again later?");
//     }
// }
