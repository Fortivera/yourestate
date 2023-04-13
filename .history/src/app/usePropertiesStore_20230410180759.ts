
import { getData } from "lib/useRequestFunctions"
import { create } from "zustand"



interface PropertyState {
    allProperties: Property[],
    fetchAllProperties: () => void,
    addProperty: (property: Property) => void,
    deleteProperty: (id: number) => void
    // updateProperty: (property: Property) => void,
    // deleteProperty: (property: Property) => void,
}

//play around the type with this zustand
export const useProperties = create<PropertyState>((set) => ({
    allProperties: [],

    fetchAllPropterties: async () => {
        const allPropertiesPromise: Promise<Property[]> = await getData()
        const allProperties = await allPropertiesPromise
        useProperties.setState({ allProperties })
    },

    addProperty: (property) => {
        set((state) => ({
            allProperties: [...state.allProperties, property]
        }))
    },
    deleteProperty: (id) => {
        set((state) => ({
            allProperties: state.allProperties.filter(property => property.id != id)
        }))
    },

    // updateProperty(property) => { set(() => ({})) },
    // deleteProperty(property) => { set(() => ({})) },

}))