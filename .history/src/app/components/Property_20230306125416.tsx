import { type } from "os"

interface props {
    key: number,
    city: string,
    type: string,
}
export default function Property({ key, city, type }: props) {
    return (
        <div className="flex items-center justify-center h-8 font-Noto hover:bg-slate-200 " key={key}>
            <div>{city}</div>
            <div>{type}</div>
        </div>
    )
}