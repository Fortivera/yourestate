
interface props {
    key: number,
    city: string
}
export default function Property({ key, city }: props) {
    return (
        <div className="  " key={key}>
            {city}
        </div>
    )
}