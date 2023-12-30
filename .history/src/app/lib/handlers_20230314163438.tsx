export default function handleSpecificIdFilter(arr: Property[], propertyid: number) {
  for (let i = 0; i < arr.length; i++) {
    try {
      if (arr[i].id != propertyid) {
        continue
      } else {
        return arr[i]
      }
    } catch (error) {
      console.error(error)
    }
  }
}

function handlePut(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()
  const dataCollected = event.target as HTMLFormElement
  const formData = new FormData(dataCollected) as Iterable<[Property, FormDataEntryValue]>
  const requestData: Property = Object.fromEntries(formData)
  console.log(requestData)
  updateProperty(requestData, propertyid)
  router.refresh()
  router.push("/dashboard")
}

function handleDelete() {
  deleteProperty(propertyid)
  router.refresh()
  router.push("/dashboard")
}
