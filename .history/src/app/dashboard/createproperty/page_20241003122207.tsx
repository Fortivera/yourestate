"use client"

import Link from "next/link"
import { FormEvent, useContext, useState } from "react"
import { Modal } from "../../../components/Modal"
import { useRouter } from "next/navigation"
import CancelIcon from "public/CancelIcon"
import toast from "react-hot-toast"
import FormLabelsCreateProperty from "@/components/FormLabelsCreateProperty"
import { ThemeContext } from "@/context/ThemeContex"
import propertyTypeParser from "lib/PostRequestTypeParser"
import { zodPropertyPostSchema } from "lib/ZodPropertySchema"
import { useQueryClient } from "@tanstack/react-query"

export default function NewProperty() {
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const { theme } = useContext(ThemeContext)
    const router = useRouter()
    const queryClient = useQueryClient() // Initialize the query client

    async function postHandler(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        try {
            setIsSubmitting(true)
            const dataCollected = event.target as HTMLFormElement
            const formData = new FormData(dataCollected)
            // checking the type, then validation with zod
            const parsedData = propertyTypeParser(formData)

            const checkedData = zodPropertyPostSchema.safeParse(parsedData)
            if (checkedData.success) {
                const validatedData = checkedData.data
                await postData(validatedData)
                await queryClient.invalidateQueries({ queryKey: ["allProperties"] })
                toast.success("Property was added successfully!", { duration: 2500 })
                router.push("/dashboard")
            } else {
                toast.error("Validation failed. Please check your input.", { duration: 2500 })
                console.error("Validation errors:", checkedData.error)
            }
        } catch (err) {
            let errorMessage = "An unknown error occurred"

            if (err instanceof Error) {
                errorMessage = err.message
            }

            console.error("Error creating property:", errorMessage)
            toast.error(errorMessage, { duration: 2500 })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Modal>
            <div className="flex justify-end">
                <button className="my-[2px]">
                    <Link href={"/dashboard"}>
                        <CancelIcon />
                    </Link>
                </button>
            </div>
            <form method="POST" id="property-form" onSubmit={postHandler}>
                <div className={`py-2 px-8 w mx-auto border border-t-2 border-b-2 ${theme === "light" ? "border-[#ccced3]" : "bg-[#2f323a] border-[#212329] "} z-10`}>
                    <FormLabelsCreateProperty />
                    <div className="my-5 ">
                        <div className="flex flexcol items-center justify-center gap-20">
                            <button type="button" className="w-28 rounded-md py-1 shadow-md hover:bg-red-400 bg-white text-black">
                                <Link href={`/dashboard`}>Cancel</Link>
                            </button>

                            <button className={`${isSubmitting ? "bg-gray-300" : "bg-indigo-200 hover:bg-indigo-300"} w-28  rounded-md py-1  shadow-md text-black`} type="submit" disabled={isSubmitting}>
                                {isSubmitting ? "Loading..." : "Submit"}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </Modal>
    )
}

async function postData(userInput: FormDataType) {
    // const url = `http://localhost:3000/api/properties`
    const prodUrl = `https://yourestate.vercel.app/api/properties`
    try {
        const response = await fetch(prodUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userInput),
        })

        if (!response.ok) {
            const errorText = await response.text()
            let errorMessage = `Request failed with status ${response.status}`

            try {
                const errorJson = JSON.parse(errorText)
                errorMessage = errorJson.error || errorMessage
            } catch {
                // Use the error text if JSON parsing fails
                errorMessage = errorText || errorMessage
            }

            throw new Error(errorMessage)
        }

        return await response.json()
    } catch (err) {
        console.error(err)
        alert(`We can't submit the form, due to ${err}`)
    }
}
