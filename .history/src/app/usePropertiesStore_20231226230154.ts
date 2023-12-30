/* eslint-disable no-unused-vars */
import { getProperty } from "lib/useRequestFunctions"
import { create } from "zustand"

interface PropertyState {
  allProperties: Property[]
  fetchAllPropertiesZustand: () => void
  addPropertyZustand: (property: Property) => void
  updatePropertyZustand: (id: number, updated: Property) => void
  deletePropertyZustand: (id: number) => void
}

export const usePropertyStore = create<PropertyState>((set) => ({
  allProperties: [],

  fetchAllPropertiesZustand: async () => {
    try {
      const allProperties = await getProperty()
      set({ allProperties })
    } catch (error) {
      console.error("Error fetching properties:", error)
    }
  },

  addPropertyZustand: (property) => {
    set((state) => ({
      allProperties: [...state.allProperties, property],
    }))
  },
  updatePropertyZustand: (id, updated: Property) => {
    set((state) => ({
      allProperties: state.allProperties.map((property) => (property.id === id ? { ...property, ...updated } : property)),
    }))
  },
  deletePropertyZustand: (id) => {
    set((state) => ({
      allProperties: state.allProperties.filter((property) => property.id != id),
    }))
  },
}))
