
// interface props {
//     key: number,
//     city: string
// }
export default function Property(key: number, city: string) {
    return (
        <div key={key}>
            {city}
        </div>
    )
}