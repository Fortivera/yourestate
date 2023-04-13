import { getData } from "lib/useRequestFunctions"
import { create, State } from "zustand"


interface PropertyState {
    allProperties: Property[],
    addProperty: (property: Property) => void,
    // updateProperty: (property: Property) => void,
    // deleteProperty: (property: Property) => void,
}

//play around the type with this zustand
export const useProperties = create<PropertyState>((set) => ({
    allProperties: [],
    addPropertyToList(propertya) => { set((propertya) => ({ ...state, propertya })) } ,
// updateProperty(property) => { set(() => ({})) },
// deleteProperty(property) => { set(() => ({})) },

}))