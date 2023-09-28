import { getProperty } from "lib/useRequestFunctions"
import { create } from "zustand"



interface PropertyState {
    allProperties: Property[];
    fetchAllProperties: () => void;
    addProperty: (property: Property) => void;
    deleteProperty: (id: number) => void;

}


export const usePropertyStore = create<PropertyState>((set) => ({
    allProperties: [],

    fetchAllProperties: async () => {
        try {
            const allProperties = await getProperty();
            set({ allProperties });
        } catch (error) {
            set({ error: "An error occurred while fetching properties." });
        }
        // const allPropertiesPromise: Promise<Property[]> = await getProperty()
        // const allProperties = await allPropertiesPromise
        // usePropertyStore.setState({ allProperties })
    },

    addProperty: (property) => {
        set((state) => ({
            allProperties: [...state.allProperties, property]
        }))
    },
    deleteProperty: (id) => {
        set((state) => ({
            allProperties: state.allProperties.filter(property => property.id != id)
        }))
    },



}))