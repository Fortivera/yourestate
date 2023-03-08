
interface props {
    key: number,
    city: string
}
export default function Property({ key, city }: props) {
    return (
        <div className="mx-auto font-Noto hover:bg-slate-200" key={key}>
            {city}
        </div>
    )
}