import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Real Estate Manager",
  description: "Application for managing properties, including profit and spendings",
}

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="">
        <figure className="w-full">
          <Image src="/static/growth.jpg" alt="login page picture" layout="responsive" width={300} height={200} />
        </figure>
        <div className="w-full px-4 pb-8 pt-2 bg-white border rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold text-center mb-4">Login</h1>

          <div className="mb-4 relative">
            <label className="text-sm" htmlFor="Name">
              <Image src="/static/name.svg" alt="user icon" width={18} height={10} className="absolute left-3 top-3" />
            </label>
            <input defaultValue="admin" id="Name" type="text" name="Name" placeholder="Username" autoComplete="given-name" required className=" block w-full border rounded-lg py-2 pl-9 mt-1 focus:ring focus:ring-blue-300" />
          </div>

          <div className="mb-4 relative">
            <label className="text-sm" htmlFor="Password">
              <Image src="/static/password.svg" alt="password icon" width={18} height={10} className="absolute left-3 top-3" />
            </label>
            <input defaultValue="admin" id="Password" type="password" name="Password" placeholder="Password" required className="block w-full border rounded-lg py-2 pl-9 mt-1 focus:ring focus:ring-blue-300" />
          </div>

          <button type="button" aria-label="Sign-in button" className="bg-[#5392f7] text-white rounded-lg w-full py-2 mb-4 hover:bg-[#3b83f6]">
            <Link href="/dashboard">Login</Link>
          </button>
          <div className="flex text-sm justify-center">
            <p className="p-1">
              Don't have an account?
            </p>
            <Link href="/user" className="text-blue-500 hover:underline p-1">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
