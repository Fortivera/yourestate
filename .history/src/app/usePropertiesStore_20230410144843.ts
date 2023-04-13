
import { create } from "zustand"



interface PropertyState {
    allProperties: Property[],
    addProperty: (property: Property) => void,
    deleteProperty: (id: number) => void
    // updateProperty: (property: Property) => void,
    // deleteProperty: (property: Property) => void,
}

//play around the type with this zustand
export const useProperties = create<PropertyState>((set) => ({
    allProperties: [],

    storeAddProperty: (property) => {
        set((state) => ({
            allProperties: [...state.allProperties, property]
        }))
    },
    storeDeleteProperty: (id) => {
        set((state) => ({
            allProperties: state.allProperties.filter(property => property.id != id)
        }))
    },

    // updateProperty(property) => { set(() => ({})) },
    // deleteProperty(property) => { set(() => ({})) },

}))