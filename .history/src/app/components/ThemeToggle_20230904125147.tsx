import Image from "next/image"

export default function ThemeToggle() {
    return (
        <div className="flex items-center w-8 h-5 rounded-[50px] cursor-pointer justify-between bg-black">
            <Image src="/static/sun.png" alt={"sun icon"} width={20} height={10} />
            <div className="rounded" />
            <Image src="/static/moon.png" alt={"moon icon"} width={20} height={10} />
        </div>
    )
}
