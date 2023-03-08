import { MouseEventHandler } from "react"

export const Modal = ({ children }) => {


    const closeHandler: MouseEventHandler = (): void => {
        navigate('/dashboard')
    }
    return (
        <>
            <div className="bg-black/20 backdrop-blur-xs bg-blend-saturation fixed top-0 w-full h-screen bg-cover z-10 " onClick={closeHandler} />
            <dialog open className="border rounded-lg shadow-sm  overflow-hidden z-10">
                {children}
            </dialog>
        </>
    )
}