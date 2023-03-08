
interface kek {
    key: number,
    city: string
}
export default function Property({ key, city }:) {
    return (
        <div key={key}>
            {city}
        </div>
    )
}