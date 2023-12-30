"use client"
import { useContext } from "react"
import { Modal } from "@/components/Modal"
import SubmitButton from "@/components/SubmitButton"
import Link from "next/link"
import CancelIcon from "public/CancelIcon"
import { FormEvent } from "react"
import { ThemeContext } from "@/context/ThemeContex"
import { handleDelete, handlePut } from "lib/useRequestHandlers"

interface Props {
    property: Property
}

export default function EditProperty({ property }: Props) {
    console.log(property)

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        handlePut(event, property)
    }

    const { theme } = useContext(ThemeContext)
    const inputColour = "bg-slate-500/60"
    return (
        <Modal>
            <div className="flex justify-end">
                <button className="my-[2px]">
                    <Link href={"/dashboard"}>
                        <CancelIcon />
                    </Link>
                </button>
            </div>
            <form method="PUT" id="update-form" onSubmit={handleSubmit}>
                <div className="w-[30rem] py-2 px-8 flex flex-col mx-auto border-2 border-gray-400 z-1">
                    <label hidden className="pr-3 w-52" htmlFor="id">
                        {" "}
                    </label>
                    <input hidden defaultValue={property.id} type="text" name="id" className={`${theme === "light" ? "bg-white" : inputColour} `} />
                    <div className="flex py-2">
                        <label className="pr-3 w-52" htmlFor="Type">
                            Property Type
                        </label>
                        <select name="Type" id="Property type" className={`border-2 w-72 ${theme === "light" ? "bg-white" : inputColour} `} defaultValue={property.type}>
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
                        <input className={`leading-7 w-72 border-b-2 ${theme === "light" ? "bg-white" : inputColour}`} id="" type="text" name="Address" aria-label="Address" defaultValue={property.address} />
                    </div>
                    <div className="flex py-2">
                        <label className="pr-3 w-52" htmlFor="Suite">
                            Suite
                        </label>
                        <input className={`${theme === "light" ? "bg-white" : inputColour} leading-7 w-72 border-b-2`} id="" type="text" name="Suite" aria-label="Suite" defaultValue={property.suite} />
                    </div>
                    <div className="flex py-2">
                        <label className="pr-3 w-52" htmlFor="PostalCode">
                            PostalCode
                        </label>
                        <input className={`${theme === "light" ? "bg-white" : inputColour} leading-7 w-72 border-b-2`} id="" type="text" name="PostalCode" aria-label="PostalCode" defaultValue={property.postalCode} />
                    </div>
                    <div className="flex py-2">
                        <label className="pr-3 w-52" htmlFor="City">
                            City
                        </label>
                        <input className={`${theme === "light" ? "bg-white" : inputColour} leading-7 w-72 border-b-2`} id="" type="text" name="City" aria-label="City" defaultValue={property.city} />
                    </div>
                    <div className="flex py-2">
                        <label className="pr-3 w-52" htmlFor="Province">
                            Province
                        </label>
                        <input className={`${theme === "light" ? "bg-white" : inputColour} leading-7 w-72 border-b-2`} id="" type="text" name="Province" aria-label="Province" defaultValue={property.province} />
                    </div>
                    <div className="flex py-2">
                        <label className="pr-3 w-52" htmlFor="Country">
                            Country
                        </label>
                        <input className={`${theme === "light" ? "bg-white" : inputColour} leading-7 w-72 border-b-2`} id="" type="text" name="Country" aria-label="Country" defaultValue={property.country} />
                    </div>
                    <div className="flex py-2">
                        <label className="pr-3 w-52" htmlFor="Tenant">
                            Number of Tenants
                        </label>
                        <input className={`${theme === "light" ? "bg-white" : inputColour} leading-7 w-72 border-b-2`} id="" type="number" name="Tenant" aria-label="Tenants" defaultValue={property.tenant} />
                    </div>
                    <div className="flex py-2">
                        <label className="pr-3 w-52" htmlFor="Rent">
                            Rent
                        </label>
                        <input className={`${theme === "light" ? "bg-white" : inputColour} leading-7 w-72 border-b-2`} id="" type="number" name="Rent" aria-label="" defaultValue={property.rent} />
                    </div>
                    <div className="flex py-2">
                        <label className="pr-3 w-52" htmlFor="SurfaceArea ">
                            {"Surface Area (sq. ft)"}
                        </label>
                        <input className={`${theme === "light" ? "bg-white" : inputColour} leading-7 w-72 border-b-2`} id="" type="number" name="SurfaceArea" aria-label="Surface area" defaultValue={property.surfaceArea} />
                    </div>
                    <div className="flex py-2">
                        <label className="pr-3 w-52" htmlFor="Age">
                            Age
                        </label>
                        <input className={`${theme === "light" ? "bg-white" : inputColour} leading-7 w-72 border-b-2`} id="" type="number" name="Age" aria-label="Age" defaultValue={property.age} />
                    </div>
                    <div className="flex py-2">
                        <label className="pr-3 w-52" htmlFor="Electricity">
                            Electricity
                        </label>
                        <input className={`${theme === "light" ? "bg-white" : inputColour} leading-7 w-72 border-b-2`} id="" type="number" name="Electricity" aria-label="Electricity" defaultValue={property.electricity} />
                    </div>
                    <div className="flex py-2">
                        <label className="pr-3 w-52" htmlFor="Hydro">
                            Hydro
                        </label>
                        <input className={`${theme === "light" ? "bg-white" : inputColour} leading-7 w-72 border-b-2`} id="" type="number" name="Hydro" aria-label="Hydro" defaultValue={property.hydro} />
                    </div>
                    <div className="flex py-2">
                        <label className="pr-3 w-52" htmlFor="Gas">
                            Gas
                        </label>
                        <input className={`${theme === "light" ? "bg-white" : inputColour} leading-7 w-72 border-b-2`} id="" type="number" name="Gas" aria-label="Gas" defaultValue={property.gas} />
                    </div>
                    <div className="my-5 ">
                        <div className="flex flexcol items-center justify-center gap-20">
                            <>
                                <button onClick={(event: React.MouseEvent<HTMLButtonElement>) => handleDelete(event, property.id)} className="w-28 rounded-md py-1 shadow-md bg-red-300 hover:bg-red-400 text-black" type="button">
                                    <span>Delete</span>
                                </button>
                                <SubmitButton buttonText="Update" />
                            </>
                        </div>
                    </div>
                </div>
            </form>
        </Modal>
    )
}
