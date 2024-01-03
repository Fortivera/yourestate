export default function PropertyTypeParser(formData: FormData): FormDataCreatePost {
    const formDataObj: any = Object.fromEntries(formData)
    return {
        type: String(formDataObj.type),
        address: String(formDataObj.address),
        city: String(formDataObj.city),
        suite: String(formDataObj.suite),
        postalCode: String(formDataObj.postalCode),
        province: String(formDataObj.province),
        country: String(formDataObj.country),
        tenant: Number(formDataObj.tenant),
        rent: Number(formDataObj.rent),
        surfaceArea: Number(formDataObj.surfaceArea),
        age: Number(formDataObj.age),
        electricity: Number(formDataObj.electricity),
        hydro: Number(formDataObj.hydro),
        gas: Number(formDataObj.gas),
    }
}
