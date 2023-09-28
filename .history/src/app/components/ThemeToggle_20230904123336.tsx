import Image from "next/image"

export default function ThemeToggle() {
  return (
    <div>
      <Image src={"/moon.png"} alt={"sun icon"} />
      <div></div>
      <Image src={"/sun.png"} alt={"moon icon"} />
    </div>
  )
}
