import { create } from "zustand"
import Property from "./components/Property"

export const useProperties = create<Property>((set): Property[] => (_)