import { z } from "zod"

export const propertySchema = z.object({
  type: z.string(),
  address: z.string(),
  rent: z.number(),
  id: z.string(),
  type: z.string(),
  address: z.string(),
  suite: z.string(),
  postalCode: z.string(),
  province: z.string(),
  country: z.string(),
  tenant: z.number(),
  surfaceArea: z.number(),
  age: z.number(),
  electricity: z.number(),
  hydro: z.number(),
  gas: z.number(),
})
