import { create } from "zustand"
import Property from "./components/Property"

export const useProperties = create<Property[]>((set) => (
    [id: 1,
        type: 'House',
        address: '703 Santiago Shoals',
        suite: '087',
        postalCode: 'A3A 6I3',
        city: ' Altheaport',
        province: 'Alberta',
        country: 'Canada',
        tenant: 4,
        rent: 2000,
        surfaceArea: 200,
        age: 5,
        electricity: 300,
        hydro: 200,
        gas: 300]
))