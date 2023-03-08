
// interface kek {
//     id: number,
//     city: string
// }
export default function Property(prop) {
    return (
        <div key={prop.id}>
            {prop.city}
        </div>
    )
}