import Link from "next/link"

export const metadata = {
  title: "Real Estate Manager",
  description: "Application for managing properties, including profit and spendings",
}

export default function Login() {
  return (
    <>
      <form method="get" id="login-form">
        {/*<div className="flex h-screen justify-center items-center   ">
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
      </form>
    </>
  )
}
