import { useTheme } from "./ThemeContext"

const Toast: React.FC<ToastProps> = ({ message, onClose }:) => {
    const { theme } = useTheme()

    const toastClasses = theme === "dark" ? "bg-gray-700 text-white" : "bg-blue-500 text-black"

    return (
        <div className={`fixed bottom-5 left-5 p-4 rounded ${toastClasses}`}>
            {message}
            <button onClick={onClose} className="bg-transparent text-white ml-4">
                Close
            </button>
        </div>
    )
}

export default Toast
