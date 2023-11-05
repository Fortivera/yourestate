import Link from "next/link";
import Image from "next/image";
import SvgNewUser from "public/static/SvgNewUser";
import SvgPassword from "public/static/SvgPassword";

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full px-4 py-10 tablet:w-[540px] laptop:w-[1000px] laptop:flex laptop:flex-row laptop:space-x-8">
        {/* Image */}
        <figure className="laptop:w-[600px] tablet:w-full">
          <Image
            src="/static/growth.jpg"
            alt="login page picture"
            layout="responsive"
            width={600} // Set a fixed width for desktop and laptop
            height={400} // Adjust the height as needed
            className="w-full"
          />
        </figure>

        {/* Form */}
        <div className="w-full px-4 pb-8 pt-2 bg-white border rounded-lg shadow-md">
          {/* ... rest of the code ... */}
        </div>
      </div>
    </div>
  );
}
