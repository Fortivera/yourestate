/* eslint-disable prettier/prettier */
import Link from "next/link"

export default function CancelButton(location: any) {
    return (
        <button type="button" className="w-28 rounded-md py-1 shadow-md hover:bg-red-400 bg-white text-black">
            <Link href={`${location}`}>Cancel</Link>
        </button>
    )
}
