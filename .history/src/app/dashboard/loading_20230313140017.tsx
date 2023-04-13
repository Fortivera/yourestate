export default function Loading() {
    return (
        <>
            <div className="bg-black/20 backdrop-blur-xs bg-blend-saturation fixed top-0 w-full h-screen bg-cover z-10 " />
            <div className="border rounded-lg shadow-sm overflow-hidden pt-1 z-20 top-48">
                <div>Loading...</div>
            </div>
        </>
    )
} 