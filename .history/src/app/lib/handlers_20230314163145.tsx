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
