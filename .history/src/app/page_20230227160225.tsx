import { Metadata } from "next"



export async function getProperty() {

}


export async function generateMetadata({
  params, }: {
    params: PropertyParams
  }): Promise<Metadata> {
  const property = await getProperty()
}

export default function Home() {
  return (
    <main >


      <div className='font-extrabold'>this is the log in page ya</div>

    </main>
  )
}