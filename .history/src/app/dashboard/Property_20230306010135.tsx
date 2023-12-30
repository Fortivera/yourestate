interface kek {
    id: number
    city: string
}
export default function Property({ id, city }: kek) {
    return <div key={id}>{city}</div>
}
