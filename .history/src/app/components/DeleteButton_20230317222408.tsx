"use client"

type buttonParams = {
  buttonText: string
  buttonStyle: string
}

export default function Button({ buttonText }: buttonParams) {
  return (
    <>
      <button className="w-28 rounded-md py-1 shadow-md ${}" type="button">
        buttonParams
        <span>{buttonText}</span>
      </button>
    </>
  )
}
