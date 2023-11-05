import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Real Estate Manager",
  description: "Application for managing properties, including profit and spendings",
};

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="">
        <div className="w-full desktop:w-[400px] px-4 pb-8 pt-2 desktop:pb-0 desktop:pt-0 order-2 desktop:order-1 bg-white border rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold text-center mb-4">Login</h1>

          <div className="mb-4 relative">
            <label className="text-sm" htmlFor="Name">
              <Image src="/static/name.svg" alt="user icon" width={18} height={10} />
            </label>
            <input
              defaultValue="admin"
              id="Name"
              type="text"
              name="Name"
              placeholder="Username"
              autoComplete="given-name"
              required
              className="block w-full border rounded-lg py-2 pl-9 mt-1 focus:ring focus:ring-blue-300"
            />
          </div>

          <div className="mb-4 relative">
            <label className="text-sm" htmlFor="Password">
              <Image src="/static/password.svg" alt="password icon" width={18} height={10} />
            </label>
            <input
              defaultValue="admin"
              id="Password"
              type="password"
              name="Password"
              placeholder="Password"
              required
              className="block w-full border rounded-lg py-2 pl-9 mt-1 focus:ring focus:ring-blue-300"
            />
          </div>

          <button
            type="button"
            aria-label="Sign-in button"
            className="bg-[#5392f7] text-white rounded-lg w-full py-2 mb-4 hover:bg-[#3b83f6]"
          >
            <Link href="/dashboard">Login</Link>
          </button>

          <p className="text-sm text-center">
            Don't have an account?
            <Link href="/user" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>
        </div>

        <div className="w-full desktop:w-[300px] order-1 desktop:order-2">
          <Image src="/static/growth.jpg" alt="login page picture" layout="responsive" width={300} height={200} />
        </div>
      </div>
    </div>
  );
}
