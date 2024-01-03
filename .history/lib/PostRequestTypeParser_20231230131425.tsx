export function(formData:FormData): FormDataCreatePost{
    const formDataObj = Object.fromEntries(formData)
    return {
        id: Number(data.id),
        type: String(data.type),
        address: String(data.address),
    }
}