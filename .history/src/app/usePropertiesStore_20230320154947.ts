import { create } from "zustand"


interface PropertyState {
    allProperties:
    aallProperty: Property[]
}


//play around the type with this zustand
export const useProperties = create<PropertyState>(() => ({ allProperties: [] })
)