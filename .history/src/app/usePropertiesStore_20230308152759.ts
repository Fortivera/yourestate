import { create } from "zustand"
import Property from "./components/Property"

interface PropertyState {
    property: Property[]
}

export const useProperties = create<PropertyState>((set) => ())