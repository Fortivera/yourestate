import { create } from "zustand"


interface PropertyState {

    allProperties: Property[]

}


//play around the type with this zustand
export const useProperties = create<PropertyState>((set, something: any) => ({
    allProperties: [],
    newProperty: (something) => set((state) => ({ allProperties: [...state.allProperties, something] }))
}))