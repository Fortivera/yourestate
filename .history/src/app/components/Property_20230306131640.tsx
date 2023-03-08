import { type } from "os"

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
        <div className="flex flex-col items-center justify-center h-8 font-Noto hover:bg-slate-200 " key={property.id}>
            <h1>{property.type}</h1>
            <div className="flex">
                <h1>{property.city}</h1>
                <h1>Rent:{property.rent}</h1>
            </div>
        </div>
    )
}