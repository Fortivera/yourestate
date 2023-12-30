import { z } from "zod"

export const propertySchema = z.object({
    type: z.string(),
    address: z.string(),
    rent: z.number(),
    // ... other fields
})

id: number
type: string
address: string
city: string
suite: string
postalCode: string
province: string
country: string
tenant: number
rent: number
surfaceArea: number
age: number
electricity: number
hydro: number
gas: number
