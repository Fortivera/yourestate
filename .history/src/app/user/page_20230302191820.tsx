
import Link from "next/link"


export default function Registration() {
    prevent.e.defaul

    return (

        <form method="post" id="registration-form" >
            <div className="flex flex-col justify-center items-center pt-80">
                <div className="border-2 border-gray-400 bg-blue-100">

                    <div className="flex justify-center p-2 ">
                        <label className="w-20" htmlFor="Email">Email</label>
                        <input id="Email" name="Email" aria-label="User email" type="text" placeholder="Email" required />
                    </div>

                    <div className="flex justify-center p-2 ">
                        <label className="w-20" htmlFor="Name">Name</label>
                        <input id="Name" name="Name" aria-label="User name" type="text" placeholder="Name" required />
                    </div>

                    <div className="container flex justify-center p-2">
                        <label className="w-20" htmlFor="Password">Password</label>
                        <input id="Password" name="Password" aria-label="User password" type="password" placeholder="Password" pattern="[a-z0-9]{1,15}" title="Password should be digits (0 to 9) or alphabets (a to z)." required />
                    </div>

                    <div className="container flex py-2">
                        <div className="w-20 mx-5">
                            <button aria-label="Cancel button" className="bg-orange-50 rounded w-20 mx-5 hover:bg-orange-300">
                                <Link href={"/"}>Cancel</Link>
                            </button>
                        </div>
                        <div>
                            <button aria-label="Submit button" type="submit" className="bg-orange-50 rounded w-20 mx-5 hover:bg-orange-300" >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </form>

    )
}
