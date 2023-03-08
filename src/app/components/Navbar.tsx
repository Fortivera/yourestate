'use client'

import Link from "next/link"


export default function Navbar() {

    return (
        <nav className=" bg-blue-500/40 font-Noto text-lg shadow-sm shadow-slate-100">
            <div className="flex justify-end pr-5">
                <div className="h-10 flex items-center px-3">
                    <Link href={'dashboard/createproperty'}  >
                        Add Property
                    </Link>
                </div>

                <div className="h-10 flex items-center px-3">
                    <Link href={'/'}>
                        Logout
                    </Link>
                </div>
            </div>

        </nav>
    )
}