"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { FormEvent } from "react"

interface RequestData {
    email: string
    name: string
    password: string
}

export default function Registration() {
    const router = useRouter()

    const postHandler = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const dataCollected = event.target as HTMLFormElement
        const formData = new FormData(dataCollected) as Iterable<[RequestData, FormDataEntryValue]>
        const requestData: RequestData = Object.fromEntries(formData)
        // const sending = fetch()
        console.log(requestData)
        await postData(requestData)
        router.push("/dashboard")
    }
    return (
        <form method="POST" id="registration-form" onSubmit={postHandler}>
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="bg-white border rounded-lg shadow-md p-8 max-w-xs w-full mx-2">
                    <h1 className="text-2xl font-semibold text-center mb-4">Sign Up</h1>

                    <div className="mb-4">
                        <svg fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
                            <path
                                id="Mail"
                                d="M58.0034485,8H5.9965506c-3.3136795,0-5.9999995,2.6862001-5.9999995,6v36c0,3.3137016,2.6863203,6,5.9999995,6
	h52.006897c3.3137016,0,6-2.6862984,6-6V14C64.0034485,10.6862001,61.3171501,8,58.0034485,8z M62.0034485,49.1108017
	L43.084549,30.1919994l18.9188995-12.0555992V49.1108017z M5.9965506,10h52.006897c2.2056007,0,4,1.7943001,4,4v1.7664003
	L34.4677505,33.3134003c-1.4902,0.9492989-3.3935013,0.9199982-4.8495998-0.0703011L1.9965508,14.4694996V14
	C1.9965508,11.7943001,3.7910507,10,5.9965506,10z M1.9965508,16.8852005L21.182251,29.9251003L1.9965508,49.1108017V16.8852005z
	 M58.0034485,54H5.9965506c-1.6473999,0-3.0638998-1.0021019-3.6760998-2.4278984l20.5199013-20.5200024l5.6547985,3.843401
	c1.0859013,0.7383003,2.3418007,1.1083984,3.5995998,1.1083984c1.1953011,0,2.3925018-0.3339996,3.4463005-1.0048981
	l5.8423996-3.7230015l20.2961006,20.2961025C61.0673485,52.9978981,59.6508713,54,58.0034485,54z"
                            />
                        </svg>
                        <label className="text-sm" htmlFor="Email">
                            Email
                        </label>
                        <input id="Email" name="Email" type="email" placeholder="Email" required className="block w-full border rounded-lg px-3 py-2 mt-1 focus:ring focus:ring-blue-300" />
                    </div>

                    <div className="mb-4">
                        <label className="text-sm" htmlFor="Name">
                            Name
                        </label>
                        <input id="Name" name="Name" type="text" placeholder="Name" required className="block w-full border rounded-lg px-3 py-2 mt-1 focus:ring focus:ring-blue-300" />
                    </div>

                    <div className="mb-4">
                        <label className="text-sm" htmlFor="Password">
                            Password
                        </label>
                        <input id="Password" name="Password" type="password" placeholder="Password" pattern="[a-z0-9]{1,15}" title="Password should be digits (0 to 9) or alphabets (a to z)." required className="block w-full border rounded-lg px-3 py-2 mt-1 focus:ring focus:ring-blue-300" />
                    </div>

                    <div className="flex items-center justify-between">
                        <button type="button" aria-label="Cancel button" className="text-blue-500 text-sm hover:underline">
                            <Link href={"/"}>Cancel</Link>
                        </button>

                        <button type="submit" aria-label="Submit button" className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

async function postData(userInput: RequestData) {
    const url = `${process.env.NEXT_PUBLIC_SERVER_URL}${process.env.NEXT_PUBLIC_USER_ENDPOINT}`
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
            throw new Error(`Invalid response: ${response.status}`)
        }
    } catch (err) {
        console.error(err)
        alert(`We can't submit the form, dur to ${err}`)
    }
}
