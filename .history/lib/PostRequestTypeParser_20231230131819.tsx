export default function PostRequestTypeParser (formData:FormData): FormDataCreatePost{
    const formDataObj:Record<string, string> = Object.fromEntries(formData)
    return {
        id: Number(formDataObj.id),
        type: String(formDataObj.type),
        address: String(formDataObj.address),
    }
}