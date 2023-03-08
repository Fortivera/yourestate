export default function Property({ id, city }: any) {
    return (
        <div key={id}>
            {city}
        </div>
    )
}