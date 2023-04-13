import { create } from "zustand"


interface PropertyState {

    a: Property[]

}


//play around the type with this zustand
export const useProperties = create<PropertyState>(() => ({ a: [] }))