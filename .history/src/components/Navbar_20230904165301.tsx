import Image from "next/image"
import Link from "next/link"
import { container } from "webpack"
import Avatar from "./Avatar"
import ThemeToggle from "./ThemeToggle"


export default function Navbar() {

    return (
        <nav className={container}>
            <div className="flex justify-end pr-5  items-center">
                <ThemeToggle />
                <Link href={'dashboard/createproperty'}  >
                    <div className="h-10 flex items-center px-3">
                        <div className="m-1">
                            <svg fill="none" height="24" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 12H12M15 12H12M12 12V9M12 12V15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M4 21.4V2.6C4 2.26863 4.26863 2 4.6 2H16.2515C16.4106 2 16.5632 2.06321 16.6757 2.17574L19.8243 5.32426C19.9368 5.43679 20 5.5894 20 5.74853V21.4C20 21.7314 19.7314 22 19.4 22H4.6C4.26863 22 4 21.7314 4 21.4Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M16 5.4V2.35355C16 2.15829 16.1583 2 16.3536 2C16.4473 2 16.5372 2.03725 16.6036 2.10355L19.8964 5.39645C19.9628 5.46275 20 5.55268 20 5.64645C20 5.84171 19.8417 6 19.6464 6H16.6C16.2686 6 16 5.73137 16 5.4Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </div>
                        <div>Add Property</div>

                    </div>
                </Link>


                <Link href={'/'}>
                    <div className="h-10 flex items-center px-3">
                        <div className="m-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-logout" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                                <path d="M7 12h14l-3 -3m0 6l3 -3" />
                            </svg>
                        </div>


                        <div>Logout </div>
                    </div>
                </Link>
                <div className="h-10 flex items-center px-3">  <Avatar />
                    <div className="ml-1">Admin</div>
                </div>
            </div>

        </nav >
    )
}

