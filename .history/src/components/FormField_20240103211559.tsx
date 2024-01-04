import React, { useState, useContext } from "react"
import { ThemeContext } from "@/context/ThemeContext" // Make sure the path is correct

interface FloatingLabelInputProps {
    defaultValue: string // If you're getting this from a property object
}

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({ defaultValue }) => {
    const [value, setValue] = useState(defaultValue)
    const [isFocused, setIsFocused] = useState(false)
    const { theme } = useContext(ThemeContext) // Assuming this is how you access your theme

    const handleFocus = () => setIsFocused(true)
    const handleBlur = () => setIsFocused(value !== "" || defaultValue !== "")

    return (
        <div className="flex flex-col py-2 relative w-full md:w-72">
            <label htmlFor="address" className={`absolute left-1 -top-5 transition-all duration-200 ${isFocused || value ? "text-sm" : "text-base"} ${isFocused || value ? "scale-75" : "scale-100"} ${theme === "light" ? "text-gray-700" : "text-gray-300"}`}>
                Address
            </label>
            <input id="address" type="text" name="address" aria-label="Address" value={value} onChange={(e) => setValue(e.target.value)} onFocus={handleFocus} onBlur={handleBlur} className={`${theme === "light" ? "bg-white border-2 border-[#9da0a63d] text-black" : "bg-[#767a8572] border-2 border-[#595c653d] text-white"} leading-7 w-full rounded-lg pl-1 p-[2px]`} placeholder={isFocused ? "What is your address?" : ""} />
        </div>
    )
}

export default FloatingLabelInput
