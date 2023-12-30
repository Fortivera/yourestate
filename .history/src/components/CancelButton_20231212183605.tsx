import Link from "next/link"

export default function CancelButton() {
  return (
    <button type="button" className="w-28 rounded-md py-1 shadow-md hover:bg-red-400 bg-white text-black">
      <Link href={"/dashboard"}>Cancel</Link>
    </button>
  )
}
