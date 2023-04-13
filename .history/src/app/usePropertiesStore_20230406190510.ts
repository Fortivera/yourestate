import { getData } from "lib/useRequestFunctions"
import { create, State } from "zustand"


interface PropertyState {
    allProperties: Property[]
}
type Action = {
    updateFirstName: (firstName: []) => void

//play around the type with this zustand
export const useProperties = create<PropertyState>((set) => ({
        allProperties: [],
        updateProperties: (allProperties) => { set(() => ({ allProperties: allProperties })) }

    }))