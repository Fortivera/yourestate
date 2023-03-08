interface propers {
    id: number,
    City: String
}

export default function Property({ id, City }: propers) {
    return (
        <div key={id}>
            {City}
        </div>
    )
}