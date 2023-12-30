interface propers {
    id: number
    city: String
}

export default function Property({ id, city }: propers) {
    return <div key={id}>{city}</div>
}
