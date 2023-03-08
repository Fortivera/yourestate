

type Props = {
    params: {
        propertyid: string,

    }

function PropertyPage({ params: { propertyid } }: Props) {
    return <h1>Clicked Property</h1>
}