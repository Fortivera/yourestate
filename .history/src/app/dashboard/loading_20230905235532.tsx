export default function Loading() {
    return (
        <>
            <div className="bg-black/20 backdrop-blur-xs bg-blend-saturation fixed top-0 w-full h-screen bg-cover z-10 " />
            <dialog open className="flex border rounded-lg shadow-sm overflow-hidden pt-1 z-10 top-96">
                <div className="flex justify-center items-center text-lg">
                    <h1>Loading...</h1>
                </div>
            </dialog>
        </>
    )
} 