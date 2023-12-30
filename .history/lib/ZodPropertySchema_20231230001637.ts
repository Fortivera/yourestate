import { z } from "zod"

export const propertySchema = z.object({
  type: z.string(),
  address: z.string(),
  rent: z.number(),
  // ... other fields
})
