"use client"

import Link from "next/link"
import Image from "next/image"
import SvgNewUser from "public/static/SvgNewUser"
import SvgPassword from "public/static/SvgPassword"
import growthVisual from "../../public/static/growth.jpg"
import { useRouter } from "next/navigation"
import SvgGoogle from "public/static/SvgGoogle"

export default function Login() {
    const router = useRouter()
    const handleLogin = () => {
        // event.preventDefault()

        // fetch()
        // if (good) {
        // }
        // else{}
        router.push("/dashboard")
    }
    return (
        <section className="min-h-screen md:bg-gray-50 flex md:items-center justify-center items-start">
            {/* login container */}
            <div className="flex flex-col md:flex-row bg-white rounded-2xl md:shadow-lg max-w-screen-desktop md:m-12">
                {/* image */}
                <figure className="mobile:max-w-[38rem] md:block md:max-w-[60%] p-5">
                    <Image src={growthVisual} alt="login page picture" className="rounded-2xl" />
                </figure>
                {/* login form */}
                <form className="flex flex-col items-center md:w-[40%] rounded-lg md:p-5 py-1 px-5 ">
                    <h1 className="text-2xl font-semibold text-center mt-6 text-[#273768]">Login</h1>
                    <div className="w-full md:mt-10 mt-5 mb-3 relative">
                        <label className="text-sm" htmlFor="Name">
                            <SvgNewUser width={18} height={18} className={"absolute left-3 top-3"} />
                        </label>
                        <input defaultValue="admin" id="Name" type="text" name="Name" placeholder="Username" autoComplete="given-name" required className="block w-full border rounded-lg py-2 pl-9 mt-1 focus:ring focus:ring-blue-300" />
                    </div>
                    <div className="w-full mb-4 relative">
                        <label className="text-sm" htmlFor="Password">
                            <SvgPassword width={18} height={18} className={"absolute left-3 top-3"} />
                        </label>
                        <input defaultValue="admin" id="Password" type="password" name="Password" placeholder="Password" required className="block w-full border rounded-lg py-2 pl-9 mt-1 focus:ring focus:ring-blue-300" />
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 640 512">
                        <path d="M386.1 228.5c1.8 9.7 3.1 19.4 3.1 32C389.2 370.2 315.6 448 204.8 448c-106.1 0-192-85.9-192-192s85.9-192 192-192c51.9 0 95.1 18.9 128.6 50.3l-52.1 50c-14.1-13.6-39-29.6-76.5-29.6-65.5 0-118.9 54.2-118.9 121.3 0 67.1 53.4 121.3 118.9 121.3 76 0 104.5-54.7 109-82.8H204.8v-66h181.3zm185.4 6.4V179.2h-56v55.7h-55.7v56h55.7v55.7h56v-55.7H627.2v-56h-55.7z" />
                    </svg>

                    <button type="button" onClick={handleLogin} aria-label="Sign-in button" className="flex justify-center bg-[#5392f7] text-white rounded-lg w-1/3 py-2 mb-4 hover:bg-[#3b83f6]">
                        <p>Login</p>
                    </button>
                    <div className="w-full mb-2 ">
                        <hr className="border-1 " />
                    </div>
                    <div className="flex text-sm justify-center">
                        <p className="p-1">Don&apos;t have an account?</p>
                        <Link href="/signup" className="text-blue-500 hover:underline p-1">
                            Sign up
                        </Link>
                    </div>
                </form>
            </div>
        </section>
    )
}
