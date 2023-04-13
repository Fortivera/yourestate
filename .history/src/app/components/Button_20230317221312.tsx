"use client"

export default function Button(textInput: any) {
    return (
        <button className="w-28 rounded-md py-1  shadow-md " type="button" >
            {textInput}
        </button>
    )
}