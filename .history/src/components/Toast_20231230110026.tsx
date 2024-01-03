interface ToastProps {
    message: string
    onClose: () => void
}

const Toast = ({ message, onClose }: ToastProps) => (
    <div className="fixed bottom-5 left-5 bg-blue-500 text-white p-4 rounded">
        {message}
        <button onClick={onClose} className="bg-transparent text-white ml-4">
            Close
        </button>
    </div>
)

export default Toast
