

interface props {
    property: {
        id: number,
        city: string,
        country: string,
        type: string,
        rent: number,
    }
}
export default function Property({ property }: props) {
    return (
        <div className="flex flex-col h-20 py-2 border-b-2  font-Noto hover:bg-slate-200 " key={property.id}>
            <h1 className="text-center text-lg">{property.type}</h1>
            <div className="flex flex-col items-start px-2.5">
                <div>{property.city}, {property.country}</div>
                <div>Rent:${property.rent}</div>
            </div>
        </div>
    )
}