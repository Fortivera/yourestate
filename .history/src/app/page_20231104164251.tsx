import Link from "next/link"
import Image from "next/image"
import SvgNewUser from "public/static/SvgNewUser"
import SvgPassword from "public/static/SvgPassword"
import growthVisual from "../../public/static/growth.jpg"

export default function Login() {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center">
      {/* login container */}
      <div className="flex flex-col md:flex-row bg-white rounded-2xl md:shadow-lg max-w-screen-desktop md:m-12">
        {/* image */}
        <figure className="md:block md:w-[60%] p-5">
          <Image src={growthVisual} alt="login page picture" className="rounded-2xl" />
        </figure>
        {/* login form */}
        <form className="flex flex-col items-center md:w-[40%] rounded-lg p-5 ">
          <h1 className="text-2xl font-semibold text-center mt-6 text-[#273768]">Login</h1>

          <div className="w-full mt-10 mb-4 relative">
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

          <button type="button" aria-label="Sign-in button" className="bg-[#5392f7] text-white rounded-lg w-1/3 py-2 mb-4 hover:bg-[#3b83f6]">
            <Link href="/dashboard">Login</Link>
          </button>
          <div className="w-full my-2 ">
            <hr className="border-1 " />
          </div>
          <div className="flex text-sm justify-center">
            <p className="p-1">Don&apos;t have an account?</p>
            <Link href="/user" className="text-blue-500 hover:underline p-1">
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </section>
  )
}
