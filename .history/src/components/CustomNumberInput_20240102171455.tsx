// components/CustomInput.tsx
import React, { useState } from "react"

interface CustomInputProps {
    className: string
    theme: "light" | "dark"
}

const CustomInput: React.FC<CustomInputProps> = ({ className, theme }) => {
    const [value, setValue] = useState<number>(0)

    const increment = () => setValue((prevValue) => prevValue + 1)
    const decrement = () => setValue((prevValue) => prevValue - 1)

    return (
        <div className="flex items-center relative">
            <input type="number" className={`${className} ${theme === "light" ? "light-theme" : "dark-theme"} pl-2 pr-10`} value={value} onChange={(e) => setValue(parseInt(e.target.value, 10) || 0)} />

            <div className="absolute inset-y-0 right-0 flex flex-col justify-center pr-2">
                {/* Increment button */}
                <button onClick={increment} className="focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                </button>
                {/* Decrement button */}
                <button onClick={decrement} className="focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default CustomInput
