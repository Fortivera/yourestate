import { create } from "zustand"


interface PropertyState {

    allProperties: Property[]

}


//play around the type with this zustand
export const useProperties = create<PropertyState>((set) => ({
    allProperties: [],
    addProperty: (something) => set(stae)
}))