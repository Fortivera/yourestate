import { getData } from "lib/useRequestFunctions"
import { create } from "zustand"


interface PropertyState {

    allProperties: Property[]
    fetch: any
}


//play around the type with this zustand
export const useProperties = create<PropertyState>((set) => ({
    allProperties: [],
    fetch: async () => {

        set({ allProperties: await getData() })

    }
}))