// export const metadata = {
//     title: "Products",
// }



export async function getProperty() {
    const fetching = await fetch(, { cache: 'no-store' })
    const res = fetching.json()

}

export async function generateMetadata({
    params, }: {
        params: PropertyParams
    }): Promise<Metadata> {
    const property = await getProperty(params.id)
    return { title: property.title }
}

export default function ProductsPage() {
    return <h1>Products</h1>
}