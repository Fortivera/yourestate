export default function Loading() {
    return (
        <>
            <div className="bg-black/20 backdrop-blur-xs bg-blend-saturation fixed top-0 w-full h-screen bg-cover z-10 " />
            <dialog className="border rounded-lg shadow-sm overflow-hidden pt-1 z-10 top-48">
                <h1>Loading...</h1>
            </dialog>
        </>
    )
} 