import React, { useState } from "react"

const FloatingLabelInput: React.FC = () => {
    const [value, setValue] = useState("")
    const [isFocused, setIsFocused] = useState(false)

    const handleFocus = () => setIsFocused(true)
    const handleBlur = () => setIsFocused(value !== "")

    return (
        <div className="relative pt-4">
            <label htmlFor="address" className={`absolute left-3 top-0 transition-all duration-200 ${isFocused || value ? "text-xs" : "text-base"} ${isFocused || value ? "-translate-y-6" : ""}`}>
                Address
            </label>
            <input id="address" type="text" value={value} onChange={(e) => setValue(e.target.value)} onFocus={handleFocus} onBlur={handleBlur} className="block p-2 w-full text-lg bg-transparent border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-all duration-200" placeholder={isFocused ? "What is your address?" : ""} />
        </div>
    )
}

export default FloatingLabelInput
