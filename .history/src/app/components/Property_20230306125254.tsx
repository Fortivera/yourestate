
interface props {
    key: number,
    city: string
}
export default function Property({ key, city }: props) {
    return (
        <div className="flex items-center justify-center h-8 font-Noto hover:bg-slate-200 " key={key}>
            {city}
        </div>
    )
}