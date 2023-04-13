import { getData } from "lib/useRequestFunctions"
import { create } from "zustand"


interface PropertyState {

    allProperties: Property[]

}


//play around the type with this zustand
export const useProperties = create<PropertyState>(() => ({
    allProperties: []

}))