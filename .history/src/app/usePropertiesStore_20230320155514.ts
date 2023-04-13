import { create } from "zustand"


interface PropertyState {
    allProperties: {
        allProperties: Property[]
    }
}


//play around the type with this zustand
export const useProperties = create<PropertyState>(() => ({ allProperties: [] })
)