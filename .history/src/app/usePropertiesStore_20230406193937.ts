import { getData } from "lib/useRequestFunctions"
import { create, State } from "zustand"


interface PropertyState {
    allProperties: Property[]
}

//play around the type with this zustand
export const useProperties = create<PropertyState>((set) => ({
    allProperties: [],
    addProperty: (property: Property) => { set(state) => ({ state.allProperties }) }
updateProperties: (allProperties: any) => { set((state) => ({ allProperties: allProperties })) }
deleteProperty: () => { set(() => ({})) }

}))