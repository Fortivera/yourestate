"use client"

type buttonParams = {
    buttonText: string
}

export default function DeleteButton({ buttonText }: buttonParams) {
    return (
        <>
            <button className="w-28 rounded-md py-1 shadow-md bg-red-300 hover:bg-red-400" type="button">
                <span>{buttonText}</span>
            </button>
        </>
    )
}
