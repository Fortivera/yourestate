import { create } from "zustand"

export const useProperties = create<Property>((set) => ({
    id: 0,
    type: "",
    address: "",
    city: "",
    suite: "",
    postalCode: "",
    province: "",
    country: "",
    tenant: 0,
    rent: 0,
    surfaceArea: 0,
    age: 0,
    electricity: 0,
    hydro: 0,
    gas: 0,
}))
