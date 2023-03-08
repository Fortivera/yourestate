

interface props {
    property: {
        id: number,
        city: string,
        type: string,
        rent: number,
    }
}
export default function Property({ property }: props) {
    return (
        <div className="flex flex-col items-center justify-center h-20 border-b-2  font-Noto hover:bg-slate-200 " key={property.id}>
            <h1 className="text-lg">{property.type}</h1>
            <div className="flex flex-col items-start">
                <div>{property.city}</div>
                <div>Rent:${property.rent}</div>
            </div>
        </div>
    )
}