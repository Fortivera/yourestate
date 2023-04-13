import { getData } from "lib/useRequestFunctions"
import { create } from "zustand"


interface PropertyState {

    allProperties: Property[]

}


//play around the type with this zustand
export const useProperties = create<PropertyState>((set) => ({
    allProperties: [],
    fetch: async () => {
        const allPropertiesPromise: Promise<Property[]> = await getData()
        set({ allProperties: await response.json() })
        const fetchedProperties = await allPropertiesPromise
    }
}))