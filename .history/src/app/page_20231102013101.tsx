import Link from "next/link";
import Image from "next/image";
import SvgNewUser from "public/static/SvgNewUser";
import SvgPassword from "public/static/SvgPassword";

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="ml-auto mr-auto w-full px-4 py-10 tablet:w-[540px] laptop:w-[1000px]">
        <div className="flex laptop:flex-row tablet:flex-col flex-col">
          <figure className="w-full tablet:w-[300px] laptop:w-[400px]">
            <Image src="/static/growth.jpg" alt="login page picture" layout="responsive" width={400} height={800} />
          </figure>
          <div className="w-[400px] px-4 pb-8 pt-2 bg-white border rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold text-center mb-4">Login</h1>

            <div className="mb-4 relative">
              <label className="text-sm" htmlFor="Name">
                <SvgNewUser width={18} height={18} className={"absolute left-3 top-3"} />
              </label>
              <input defaultValue="admin" id="Name" type="text" name="Name" placeholder="Username" autoComplete="given-name" required className="block w-full border rounded-lg py-2 pl-9 mt-1 focus:ring focus:ring-blue-300" />
            </div>

            <div className="mb-4 relative">
              <label className="text-sm" htmlFor="Password">
                <SvgPassword width={18} height={18} className={"absolute left-3 top-3"} />
              </label>
              <input defaultValue="admin" id="Password" type="password" name="Password" placeholder="Password" required className="block w-full border rounded-lg py-2 pl-9 mt-1 focus:ring focus:ring-blue-300" />
            </div>

            <button type="button" aria-label="Sign-in button" className="bg-[#5392f7] text-white rounded-lg w-full py-2 mb-4 hover:bg-[#3b83f6]">
              <Link href="/dashboard">Login</Link>
            </button>
            <div className="flex text-sm justify-center">
              <div className="p-1">Don't have an account?</div>
              <Link href="/user" className="text-blue-500 hover:underline p-1">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
