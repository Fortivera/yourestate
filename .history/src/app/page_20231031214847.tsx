import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Real Estate Manager",
  description: "Application for managing properties, including profit and spendings",
}

export default function Login() {
  return (
    <>
      <form method="get" id="login-form">
        {/* <div className="flex h-screen justify-center items-center   ">
          <div className="border-2 border-gray-400 bg-blue-100">
            <div className="flex justify-center p-2 ">
              <label className="w-20" htmlFor="Name">
                Username
              </label>
              <input defaultValue={"admin"} id="Name" type="text" name="Name" aria-label="User name" placeholder="Username" autoComplete="given-name" required />
            </div>
            <div className="container flex justify-center p-2">
              <label className="w-20" htmlFor="Password">
                Password
              </label>
              <input defaultValue={"admin"} id="Password" type="text" name="Password" aria-label="User Password" placeholder="Password" required />
            </div>

            <div className="container flex py-2">
              <button type="button" aria-label="Sign-up button" className="bg-orange-50 rounded w-20 mx-5 hover:bg-orange-300">
                <Link href="/dashboard">Login</Link>
              </button>
              <button type="button" aria-label="Sign-up button" className="bg-orange-50 rounded w-20 mx-5 hover:bg-orange-300">
                <Link href="/user">Sign up</Link>
              </button>
            </div>
          </div>
        </div>*/}

        <div className="h-screen w-[1000px]bg-gray-50 flex items-center justify-center">
          <div className="flex">
            <div className="">
              <Image src={"/static/growth.jpg"} alt={"login page picture"} width={300} height={300} className={"m-3 absolute "} />
            </div>
            <div className="w-min-[mobile] bg-white border rounded-lg shadow-md p-8   mx-2">
              <h1 className="text-2xl font-semibold text-center mb-4">Login</h1>

              <div className="mb-4">
                <label className="text-sm" htmlFor="Name">
                  <Image src="/static/name.svg" alt={"moon icon"} width={18} height={10} className={"m-3 absolute "} />
                </label>
                <input defaultValue={"admin"} id="Name" type="text" name="Name" placeholder="Username" autoComplete="given-name" required className="block w-full border rounded-lg py-2 pl-9 mt-1 focus:ring focus:ring-blue-300" />
              </div>

              <div className="mb-4">
                <label className="text-sm" htmlFor="Password">
                  <Image src="/static/password.svg" alt={"moon icon"} width={18} height={10} className={"m-3 absolute "} />
                </label>
                <input defaultValue={"admin"} id="Password" type="password" name="Password" placeholder="Password" required className="block w-full border rounded-lg py-2 pl-9 mt-1 focus:ring focus:ring-blue-300" />
              </div>

              <button type="button" aria-label="Sign-in button" className="bg-[#5392f7] text-white rounded-lg w-full py-2 mb-4 hover:bg-[#3b83f6]">
                <Link href="/dashboard">Login</Link>
              </button>

              <p className="text-sm text-center">
                Don't have an account?
                <Link href="/user" className="text-blue-500 hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
