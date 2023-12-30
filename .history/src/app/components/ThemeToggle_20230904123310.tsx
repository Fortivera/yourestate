import Image from "next/image"

export default function ThemeToggle() {
    return (
        <div>
            <Image src={"/moon.png"} alt={""} />
            <div></div>
            <Image src={"/sun.png"} />
        </div>
    )
}
