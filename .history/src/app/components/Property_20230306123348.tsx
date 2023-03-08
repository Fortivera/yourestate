
interface props {
    key: number,
    city: string
}
export default function Property({ key, city }: props) {
    return (
        <div className="font-Noto  " key={key}>
            {city}
        </div>
    )
}