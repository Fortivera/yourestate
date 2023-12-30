import Image from "next/image"

export default function ThemeToggle() {
    return (
        <div className="flex items-center w-12 h-6 rounded-[50px] cursor-pointer justify-between bg-black">
            <Image src="/static/sun.png" alt={"sun icon"} width={20} height={10} className={"m-1"} />
            <div className="rounded bg-white w-1" />
            <Image src="/static/moon.png" alt={"moon icon"} width={20} height={10} className={"m-1"} />
        </div>
    )
}
