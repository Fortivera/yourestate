"use client" // Error components must be Client components

import { Modal } from "@/app/components/Modal"
import { useEffect } from "react"

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <Modal>
      <div>
        <h2>{error.message}</h2>
        <Link href={"/dashboard"}>Go back</Link>
      </div>
    </Modal>
  )
}
