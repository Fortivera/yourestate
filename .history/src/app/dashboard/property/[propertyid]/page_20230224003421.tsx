

type Props = {
    params: {
        propertyid: string,

    }

function PropertyPage({ params: { propertyid } }: Props) {
    return <div>page {propertyid}</div>
}