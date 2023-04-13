
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

    addProperty: (property) => {
        set((state) => ({
            allProperties: [...state.allProperties, property]
        }))
    },
    deleteProperty: (id) => {
        //find a property with id and delete it. return new state
        set((state) => {
            for (let i = 0; i <= state.allProperties.length; i++) {
                if i 
            }
        })
    }

    // updateProperty(property) => { set(() => ({})) },
    // deleteProperty(property) => { set(() => ({})) },

}))