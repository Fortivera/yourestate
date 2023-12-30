"use client"

type buttonParams = {
    buttonText: string
    buttonStyle: string
}

export default function Button({ buttonText }: buttonParams) {
    return (
        <>
            <button className="w-28 rounded-md py-1 shadow-md bg-red-300 hover:bg-red-400" type="button">
                buttonParams
                <span>{buttonText}</span>
            </button>
        </>
    )
}
