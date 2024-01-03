"use client"
import { useContext } from "react"
import { Modal } from "@/components/Modal"
import SubmitButton from "@/components/Buttons/SubmitButton"
import Link from "next/link"
import CancelIcon from "public/CancelIcon"
import { FormEvent } from "react"
import { useRouter } from "next/navigation"
import { ThemeContext } from "@/context/ThemeContex"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { zodPropertySchema } from "lib/ZodPropertySchema"
import toast from "react-hot-toast"
import PropertyTypeParser from "lib/PostRequestTypeParser"

interface Props {
    property: Property
    allProperties?: Property[]
}

export default function EditProperty({ property, allProperties: cachedProperties }: Props) {
    const { theme } = useContext(ThemeContext)
    const queryClient = useQueryClient()
    const router = useRouter()

    const mutation = useMutation<void, Error, Property>({
        mutationFn: async (newPropertyData: Property) => await updateProperty(newPropertyData, property.id),

        onSuccess: (data, updatedProperty) => {
            // 'variables' contains the updated property data sent to the server
            // Update the cached data
            const updatedCachedProperties = cachedProperties!.map((p) => {
                console.log("cached", p, "updated", updatedProperty)
                if (p.id === Number(updatedProperty.id)) {
                    return { ...p, ...updatedProperty, id: p.id }
                }
                return p
            })
            console.log("before set query", updatedCachedProperties)
            queryClient.setQueryData(["allProperties"], updatedCachedProperties)
            console.log("after set query", queryClient.getQueryData(["allProperties"]))
            // Navigate to dashboard
            router.replace("/dashboard")
        },
        // Optionally handle errors, etc.
    })
    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        try {
            const dataCollected = event.target as HTMLFormElement
            const formData = new FormData(dataCollected)
            // const formDataObj = Object.fromEntries(formData)
            const parsedData = propertyTypeParser(formData)
            // formDataObj.id = Number(formDataObj.id)
            // formDataObj.type = String(formDataObj.type)
            // formDataObj.address = String(formDataObj.address)
            // formDataObj.city = String(formDataObj.city)
            // formDataObj.suite = String(formDataObj.suite)
            // formDataObj.postalCode = String(formDataObj.postalCode)
            // formDataObj.province = String(formDataObj.province)
            // formDataObj.country = String(formDataObj.country)
            // formDataObj.tenant = Number(formDataObj.tenant)
            // formDataObj.rent = Number(formDataObj.rent)
            // formDataObj.surfaceArea = Number(formDataObj.surfaceArea)
            // formDataObj.age = Number(formDataObj.age)
            // formDataObj.electricity = Number(formDataObj.electricity)
            // formDataObj.hydro = Number(formDataObj.hydro)
            // formDataObj.gas = Number(formDataObj.gas)
            console.log("bruhformdata", formDataObj)
            const parsedData = zodPropertySchema.safeParse(formDataObj)
            if (parsedData.success) {
                const validatedData = parsedData.data
                console.log("the validated data updating", validatedData)
                mutation.mutate(validatedData)
                toast.success("Property updated successfully!", { duration: 2500 })
                router.replace("/dashboard")
            } else {
                toast.error("Error updating property", { duration: 2500 })
                console.error(parsedData.error)
            }
        } catch (error) {
            // Handle any other errors
            console.error("Error processing form", error)
        }
    }

    async function handleDelete(event: any) {
        event.preventDefault()

        try {
            await deleteProperty(property.id)
            const cachedProperties = queryClient.getQueryData(["allProperties"]) as Property[]
            if (cachedProperties) {
                const filteredCachedProperties = cachedProperties.filter((p) => p.id !== property.id)
                queryClient.setQueryData(["allProperties"], filteredCachedProperties)
                toast.success("Property deleted successfully!", { duration: 2500 })
            }
            router.replace("/dashboard")
        } catch (error) {
            toast.error("Error deleting property", { duration: 2500 })
            console.log("Error deleting property", error)
        }
    }
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
                <div className="py-2 px-8 flex flex-col mx-auto border-2 border-gray-400 z-1">
                    <label hidden className="pr-3 w-52" htmlFor="id">
                        {" "}
                    </label>
                    <input hidden defaultValue={property.id} type="text" name="id" className={`${theme === "light" ? "bg-white" : inputColour}`} />
                    <div className="flex flex-col md:flex-row py-2">
                        <label className="pr-3 w-52" htmlFor="Type">
                            Property Type
                        </label>
                        <select name="type" id="Property type" className={`w-auto md:w-72 leading-7 border-b-2 ${theme === "light" ? "bg-white" : inputColour} `} defaultValue={property.type}>
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
                    <div className="flex flex-col md:flex-row py-2 ">
                        <label className="pr-3 w-52 " htmlFor="Address">
                            Address
                        </label>
                        <input className={`leading-7 w-auto md:w-72 border-b-2 ${theme === "light" ? "bg-white" : inputColour}`} id="" type="text" name="address" aria-label="Address" defaultValue={property.address} />
                    </div>
                    <div className="flex flex-col md:flex-row py-2">
                        <label className="pr-3 w-52" htmlFor="Suite">
                            Suite
                        </label>
                        <input className={`${theme === "light" ? "bg-white" : inputColour} leading-7 w-auto md:w-72 border-b-2`} id="" type="text" name="suite" aria-label="Suite" defaultValue={property.suite} />
                    </div>
                    <div className="flex flex-col md:flex-row py-2">
                        <label className="pr-3 w-52" htmlFor="PostalCode">
                            PostalCode
                        </label>
                        <input className={`${theme === "light" ? "bg-white" : inputColour} leading-7 w-auto md:w-72 border-b-2`} id="" type="text" name="postalCode" aria-label="PostalCode" defaultValue={property.postalCode} />
                    </div>
                    <div className="flex flex-col md:flex-row py-2">
                        <label className="pr-3 w-52" htmlFor="City">
                            City
                        </label>
                        <input className={`${theme === "light" ? "bg-white" : inputColour} leading-7 w-auto md:w-72 border-b-2`} id="" type="text" name="city" aria-label="City" defaultValue={property.city} />
                    </div>
                    <div className="flex flex-col md:flex-row py-2">
                        <label className="pr-3 w-52" htmlFor="Province">
                            Province
                        </label>
                        <input className={`${theme === "light" ? "bg-white" : inputColour} leading-7 w-auto md:w-72 border-b-2`} id="" type="text" name="province" aria-label="Province" defaultValue={property.province} />
                    </div>
                    <div className="flex flex-col md:flex-row py-2">
                        <label className="pr-3 w-52" htmlFor="Country">
                            Country
                        </label>
                        <input className={`${theme === "light" ? "bg-white" : inputColour} leading-7 w-auto md:w-72 border-b-2`} id="" type="text" name="country" aria-label="Country" defaultValue={property.country} />
                    </div>
                    <div className="flex flex-col md:flex-row py-2">
                        <label className="pr-3 w-52" htmlFor="Tenant">
                            Number of Tenants
                        </label>
                        <input className={`${theme === "light" ? "bg-white" : inputColour} leading-7 w-auto md:w-72 border-b-2`} id="" type="number" name="tenant" aria-label="Tenants" defaultValue={property.tenant} />
                    </div>
                    <div className="flex flex-col md:flex-row py-2">
                        <label className="pr-3 w-52" htmlFor="Rent">
                            Rent
                        </label>
                        <input className={`${theme === "light" ? "bg-white" : inputColour} leading-7 w-auto md:w-72 border-b-2`} id="" type="number" name="rent" aria-label="" defaultValue={property.rent} />
                    </div>
                    <div className="flex flex-col md:flex-row py-2">
                        <label className="pr-3 w-52" htmlFor="SurfaceArea ">
                            {"Surface Area (sq. ft)"}
                        </label>
                        <input className={`${theme === "light" ? "bg-white" : inputColour} leading-7 w-auto md:w-72 border-b-2`} id="" type="number" name="surfaceArea" aria-label="Surface area" defaultValue={property.surfaceArea} />
                    </div>
                    <div className="flex flex-col md:flex-row py-2">
                        <label className="pr-3 w-52" htmlFor="Age">
                            Age
                        </label>
                        <input className={`${theme === "light" ? "bg-white" : inputColour} leading-7 w-auto md:w-72 border-b-2`} id="" type="number" name="age" aria-label="Age" defaultValue={property.age} />
                    </div>
                    <div className="flex flex-col md:flex-row py-2">
                        <label className="pr-3 w-52" htmlFor="Electricity">
                            Electricity
                        </label>
                        <input className={`${theme === "light" ? "bg-white" : inputColour} leading-7 w-auto md:w-72 border-b-2`} id="" type="number" name="electricity" aria-label="Electricity" defaultValue={property.electricity} />
                    </div>
                    <div className="flex flex-col md:flex-row py-2">
                        <label className="pr-3 w-52" htmlFor="Hydro">
                            Hydro
                        </label>
                        <input className={`${theme === "light" ? "bg-white" : inputColour} leading-7 w-auto md:w-72 border-b-2`} id="" type="number" name="hydro" aria-label="Hydro" defaultValue={property.hydro} />
                    </div>
                    <div className="flex flex-col md:flex-row py-2">
                        <label className="pr-3 w-52" htmlFor="Gas">
                            Gas
                        </label>
                        <input className={`${theme === "light" ? "bg-white" : inputColour} leading-7 w-auto md:w-72 border-b-2`} id="" type="number" name="gas" aria-label="Gas" defaultValue={property.gas} />
                    </div>
                    <div className="my-5 ">
                        <div className="flex flexcol items-center justify-center gap-20">
                            <>
                                <button onClick={handleDelete} className="w-28 rounded-md py-1 shadow-md bg-red-300 hover:bg-red-400 text-black" type="button">
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

async function updateProperty(userInput: Property, id: number) {
    const url = `${process.env.NEXT_PUBLIC_SERVER_URL}${process.env.NEXT_PUBLIC_PROPERTY_ENDPOINT}/${id}`

    try {
        await fetch(url, {
            method: "PUT",
            body: JSON.stringify(userInput),
            headers: {
                "Content-Type": "application/json",
            },
        })
    } catch (err) {
        console.error(err)
    }
}

async function deleteProperty(id: number) {
    const url = `${process.env.NEXT_PUBLIC_SERVER_URL}${process.env.NEXT_PUBLIC_PROPERTY_ENDPOINT}/${id}`

    try {
        await fetch(url, {
            method: "DELETE",

            headers: {
                "Content-Type": "application/json",
            },
        })
    } catch (err) {
        console.error(err)
    }
}
