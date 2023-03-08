import { Metadata } from "next"


export interface Property {
  id: string,
  Type: string,
  Address: string,
  City: string,
  Suite: string,
  PostalCode: string,
  Province: string,
  Country: string,
  Tenant: number,
  Rent: number,
  SurfaceArea: number,
  Age: number,
  Electricity: number,
  Hydro: number,
  Gas: number,
}


export async function getProperty() {

}


export async function generateMetadata({
  params, }: {
    params: PropertyParams
  }): Promise<Metadata> {
  const property = await getProperty(params.id)
  return { title: property.title }
}

export default function Home() {
  return (
    <main >


      <div className='font-extrabold'>this is the log in page ya</div>

    </main>
  )
}