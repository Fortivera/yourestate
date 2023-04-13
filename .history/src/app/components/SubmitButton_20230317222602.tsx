"use client"

import Link from "next/link"

type buttonParams = {
    buttonText: string
}

export default function Button({ buttonText }: buttonParams) {
    return (
        <>
            <button className="w-28 bg-indigo-200 rounded-md py-1 hover:bg-indigo-300 shadow-md" type="submit">
                <Link href={'/dashboard'}>{buttonText}</Link>
            </button>
        </>
    )
}