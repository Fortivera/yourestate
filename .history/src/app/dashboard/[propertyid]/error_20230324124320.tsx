"use client" // Error components must be Client components

import { Modal } from "@/app/components/Modal"
import { useEffect } from "react"
import Link from "next/link"

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <Modal>
      <div className="container flex flex-col">
        <h2> {`There seems to be an error. ${error.message}`} </h2>

        <button className="w-28 rounded-md py-1 shadow-md bg-red-300 hover:bg-red-400" type="button">
          <Link href={"/dashboard"}>Go Back</Link>
        </button>
      </div>
    </Modal>
  )
}
