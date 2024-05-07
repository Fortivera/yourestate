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

export default function NewProperty() {
    // const queryClient = useQueryClient()
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const { theme } = useContext(ThemeContext)
    const router = useRouter()
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
                toast.success("Property was added successfully!", { duration: 2500 })
                router.refresh()
                router.replace("/dashboard")
            } else {
                toast.error("Error updating property", { duration: 2500 })
                console.error(checkedData.error)
            }
        } catch (err) {
            toast.error("The form input is incorrect!", { duration: 2500 })
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

                            <button className={`${isSubmitting ? "bg-gray-300" : "bg-indigo-200 hover:bg-indigo-300"} w-28  rounded-md py-1  shadow-md text-black`} type="submit">
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
    const url = `${process.env.NEXT_PUBLIC_SERVER_URL}${process.env.NEXT_PUBLIC_PROPERTY_ENDPOINT}`
    console.log(url)
    try {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(userInput),
            headers: {
                "Content-Type": "application/json",
            },
        })
        if (!response.ok) {
            const errorText = await response.text()
            throw new Error(`Request failed with status ${response.status}: ${errorText}`)
        }
    } catch (err) {
        console.error(err)
        alert(`We can't submit the form, due to ${err}`)
    }
}
