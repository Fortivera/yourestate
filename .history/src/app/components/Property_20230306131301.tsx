import { type } from "os"

interface props {
    key: number,
    city: string,
    type: string,
}
export default function Property({ key, city, type }: props) {
    return (
        <div className="flex flex-col items-center justify-center h-8 font-Noto hover:bg-slate-200 " key={key}>
            <h1>{type}</h1>
            <div className="flex">
                <h1>{city}</h1>
                <h1>Rent:{ }</h1>
            </div>
        </div>
    )
}