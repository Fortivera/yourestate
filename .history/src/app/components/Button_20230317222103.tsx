"use client"

type button = {
    buttonText: string
}

export default function Button({ buttonText }: textInput) {
    return (
        <>
            <button className="w-28 rounded-md py-1  shadow-md " type="button" >
                <span>{buttonText}</span>
            </button>
        </>
    )
}