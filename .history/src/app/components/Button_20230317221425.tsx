"use client"

export default function Button(textInput: string) {
    return (
        <>
            <button className="w-28 rounded-md py-1  shadow-md " type="button" >
                <span>{textInput}</span>
            </button>
        </>
    )
}