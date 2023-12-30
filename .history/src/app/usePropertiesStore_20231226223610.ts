/* eslint-disable no-unused-vars */
import { getProperty } from "lib/useRequestFunctions"
import { create } from "zustand"

interface PropertyState {
  allProperties: Property[]
  fetchAllProperties: () => void
  addProperty: (property: Property) => void
  updateProperty: (id: number, updated: Property) => void
  deleteProperty: (id: number) => void
}

export const usePropertyStore = create<PropertyState>((set) => ({
  allProperties: [],

  fetchAllProperties: async () => {
    try {
      const allProperties = await getProperty()
      set({ allProperties })
    } catch (error) {
      console.error("Error fetching properties:", error)
    }
    // const allPropertiesPromise: Promise<Property[]> = await getProperty()
    // const allProperties = await allPropertiesPromise
    // usePropertyStore.setState({ allProperties })
  },

  addProperty: (property) => {
    set((state) => ({
      allProperties: [...state.allProperties, property],
    }))
  },
  updateProperty: (id, updated: Property) => {
    set((state) => ({
      allProperties: state.allProperties.map((property) => (property.id === id ? { ...property, ...updated } : property)),
    }))
  },
  deleteProperty: (id) => {
    set((state) => ({
      allProperties: state.allProperties.filter((property) => property.id != id),
    }))
  },
}))
