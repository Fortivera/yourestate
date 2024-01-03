export default function PostRequestTypeParser(formData: FormData): FormDataCreatePost {
    const formDataObj: any = Object.fromEntries(formData)
    return {
        type: String(formDataObj.type),
        address: String(formDataObj.address),
        address: String(formDataObj.address),
        address: String(formDataObj.address),
        address: String(formDataObj.address),
        address: String(formDataObj.address),
        address: String(formDataObj.address),
    }
}
