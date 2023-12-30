interface propers {
  id: number
  city: string
}

export default function Property({ id, city }: propers) {
  return <div key={id}>{city}</div>
}
