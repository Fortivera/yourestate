
interface props {
    key: number,
    city: string
}
export default function Property({ key, city }: props) {
    return (
        <div className="font-Noto hover:selection:" key={key}>
            {city}
        </div>
    )
}