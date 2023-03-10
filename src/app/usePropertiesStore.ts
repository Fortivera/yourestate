import { create } from "zustand"
import Property from "./components/Property"

interface PropertyState {
    allProperties: Property[]
}


//play around the type with this zustand
export const useProperties = create<PropertyState>((set) =>({allProperties:[]})
)