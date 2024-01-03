"use client"
import { ThemeContext } from "@/context/ThemeContex"
import { useContext } from "react"

interface ToastProps {
    message: string
    onClose: () => void
}
const Toast: React.FC<ToastProps> = ({ message, onClose }: ToastProps) => {
    const { theme } = useContext(ThemeContext)

    const toastThemeClasses = theme === "light" ? "bg-gray-700 text-white" : "bg-blue-500 text-black"

    return (
        <div className={`fixed bottom-5 left-5 p-4 rounded ${toastThemeClasses}`}>
            {message}
            <button onClick={onClose} className="bg-transparent text-white ml-4">
                Close
            </button>
        </div>
    )
}

export default Toast
