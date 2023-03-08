'use client'

import { useRouter } from "next/router"

export default function Navbar() {
    const router = useRouter()
    return (
        <nav className="relative container mx-auto bg-yellow-100 z-0">
            <div className="flex justify-end items-center ">
                <div className="flex px-3">
                    <Link to={'dashboard/createproperty'}  >
                        Add Property
                    </Link>
                </div>

                <div className="flex px-3">
                    <Link to={'/'}>
                        Logout
                    </Link>
                </div>
            </div>

        </nav>
    )
}