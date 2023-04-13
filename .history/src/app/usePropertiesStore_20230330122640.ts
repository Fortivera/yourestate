import { create } from "zustand"


interface PropertyState {

    allProperties: Property[],
    newProperty: Property
}


//play around the type with this zustand
export const useProperties = create<PropertyState>((set) => ({
    allProperties: [],
    addProperty: (newProperty) => set((state) => ({ allProperties: [...state.allProperties, newProperty] }))
}))