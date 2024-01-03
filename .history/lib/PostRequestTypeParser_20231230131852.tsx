export default function PostRequestTypeParser(formData: FormData): FormDataCreatePost {
    const formDataObj: any = Object.fromEntries(formData)
    return {
        id: Number(formDataObj.id),
        type: String(formDataObj.type),
        address: String(formDataObj.address),
    }
}