import { create } from "zustand"
import Property from "./components/Property"

type PropertyState{
    property:
}

export const useProperties = create<Property>((set): Property[] => (_))