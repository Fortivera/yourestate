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
import propertyTypeParser from "lib/PostRequestTypeParser"

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
            const parsedData = propertyTypeParser(formData)
            console.log("myparrrrrrseddatanew", parsedData)
            const checkedData = zodPropertySchema.safeParse(parsedData)
            if (checkedData.success) {
                const validatedData = checkedData.data
                console.log("the validated data updating", validatedData)
                mutation.mutate(validatedData)
                toast.success("Property updated successfully!", { duration: 2500 })
                router.replace("/dashboard")
            } else {
                toast.error("Error updating property", { duration: 2500 })
                console.error(checkedData.error)
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
            <div className="flex justify-end ">
                <button className="my-[2px]">
                    <Link href={"/dashboard"}>
                        <CancelIcon />
                    </Link>
                </button>
            </div>
            <form method="PUT" id="update-form" onSubmit={handleSubmit}>
                <div className={`py-2 px-8 flex flex-col mx-auto border border-t-2 border-b-2 ${theme === "light" ? "border-slate-300" : "bg-[#2f323a] border-[#212329] "} z-1`}>
                    {/* Hidden inputs remain unchanged */}

                    {/* Property Type Select */}
                    <div className="flex flex-col md:flex-row py-2">
                        <label className="pr-3 w-52" htmlFor="Type">
                            Property Type
                        </label>
                        <select name="type" id="Property type" className={`w-full md:w-72 leading-7 rounded-md shadow-sm ${theme === "light" ? "bg-white" : "bg-[#2f323a] text-white"} focus:ring focus:ring-indigo-500 focus:ring-opacity-50`} defaultValue={property.type}>
                            {/* options */}
                        </select>
                    </div>

                    {/* Text Inputs */}
                    {/* Repeat the pattern below for each input field */}
                    <div className="flex flex-col md:flex-row py-2 ">
                        <label className="pr-3 w-52 " htmlFor="Address">
                            Address
                        </label>
                        <input className={`w-full md:w-72 leading-7 rounded-md shadow-sm ${theme === "light" ? "bg-white" : "bg-[#2f323a] text-white"} focus:ring focus:ring-indigo-500 focus:ring-opacity-50`} id="" type="text" name="address" aria-label="Address" defaultValue={property.address} />
                    </div>

                    {/* ... other fields ... */}

                    {/* Submit and Delete Buttons */}
                    <div className="my-5 ">
                        <div className="flex flex-col items-center justify-center gap-20">
                            <button onClick={handleDelete} className="w-28 rounded-md py-1 shadow-md bg-red-300 hover:bg-red-400 text-black" type="button">
                                <span>Delete</span>
                            </button>
                            <SubmitButton buttonText="Update" />
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
