'use client'

import Link from "next/link"


export default function Navbar() {

    return (
        <nav className="h-10 bg-blue-100 font-Noto text-base shadow-sm shadow-slate-100">
            <div className="flex flex-row justify-end items-center ">
                <div className="flex px-3">
                    <Link href={'dashboard/createproperty'}  >
                        Add Property
                    </Link>
                </div>

                <div className="flex px-3">
                    <Link href={'/'}>
                        Logout
                    </Link>
                </div>
            </div>

        </nav>
    )
}