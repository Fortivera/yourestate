"use client"

type textInput = {
    input: string
}

export default function Button({ input }: textInput) {
    return (
        <>
            <button className="w-28 rounded-md py-1  shadow-md " type="button" >
                <span>{input}</span>
            </button>
        </>
    )
}