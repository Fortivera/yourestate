import { getData } from "lib/useRequestFunctions"
import { create, State } from "zustand"


interface PropertyState {
    allProperties: Property[],
    addProperty: (prop: Property) => void,
    updateProperty: (property: Property) => void,
    deleteProperty: (property: Property) => void,

}

//play around the type with this zustand
export const useProperties = create<PropertyState>((set) => ({
    allProperties: [],
    addProperty: (property: Property) => { set(state) => ({
        allProperties: [
            ...state.allProperties
        ]
    })},
updateProperty: (allProperties: any) => { set((state) => ({ allProperties: allProperties })) },
    deleteProperty: () => { set(() => ({})) },

}))