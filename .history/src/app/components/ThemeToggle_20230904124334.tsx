import Image from "next/image"

export default function ThemeToggle() {
    return (
        <div className="flex items-center w-10 h-5 rounded-[50px] cursor-pointer justify-between bg-black">
            <Image src={"/public/static/sun.png"} alt={"sun icon"} width={40} height={40} />
            <div className="rounded" />
            <Image src={"/public/static//sun.png"} alt={"moon icon"} width={40} height={40} />
        </div>
    )
}
