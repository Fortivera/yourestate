interface Property {
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
}

// eslint-disable-next-line no-unused-vars
interface UserCredentials {
  email: string
  name: string
  password: any
}
