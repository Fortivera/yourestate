'use client'

import Link from "next/link"


export default function Navbar() {

    return (
        <nav className="w-60 mx-auto bg-yellow-100 shadow-sm">
            <div className="flex justify-end items-center ">
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