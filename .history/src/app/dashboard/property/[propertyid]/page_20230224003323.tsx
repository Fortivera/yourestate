

type Props = {
    params: {
        propertyid: string,

    }

export default function PropertyPage({ params: { propertyid } }: Props) {
    return <h1>Clicked Property</h1>
}