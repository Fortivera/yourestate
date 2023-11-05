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

        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="bg-white border rounded-lg shadow-md p-8 max-w-xs w-full mx-2">
            <h1 className="text-2xl font-semibold text-center mb-4">Login</h1>

            <div className="mb-4">
              <label className="text-sm" htmlFor="Name">
                Username
              </label>
              <input defaultValue={"admin"}
                id="Name"
                type="text"
                name="Name"
                placeholder="Username"
                autoComplete="given-name"
                required
                className="block w-full border rounded-lg px-3 py-2 mt-1 focus:ring focus:ring-blue-300"
              />
            </div>

            <div className="mb-4">
              <label className="text-sm" htmlFor="Password">
                Password
              </label>
              <input
                defaultValue={"admin"}
                id="Password"
                type="password"
                name="Password"
                placeholder="Password"
                required
                className="block w-full border rounded-lg px-3 py-2 mt-1 focus:ring focus:ring-blue-300"
              />
            </div>

            <button type="button" aria-label="Sign-in button" className="bg-blue-500 text-white rounded-lg w-full py-2 mb-4 hover:bg-blue-600">
              Login
            </button>

            <p className="text-sm text-center">
              Don't have an account?{" "}
              <Link href="/user" className="text-blue-500 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </form>
    </>
  )
}
