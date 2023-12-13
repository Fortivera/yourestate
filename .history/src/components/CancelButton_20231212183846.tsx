import Link from "next/link"

export default function CancelButton(redirect: string) {
    return (
        <button type="button" className="w-28 rounded-md py-1 shadow-md hover:bg-red-400 bg-white text-black">
            <Link href={`${redirect}`}>Cancel</Link>
        </button>
    )
}
