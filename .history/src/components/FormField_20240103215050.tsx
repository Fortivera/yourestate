import { ThemeContext } from "@/context/ThemeContex"
import React, { useState, useContext } from "react"

interface FloatingLabelInputProps {
    defaultValue?: string // If you're getting this from a property object
}

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({ defaultValue }) => {
    const [value, setValue] = useState(defaultValue)
    const [isFocused, setIsFocused] = useState(false)
    const { theme } = useContext(ThemeContext) // Assuming this is how you access your theme

    const handleFocus = () => setIsFocused(true)
    const handleBlur = () => {
        if (value === "") {
            setIsFocused(false)
        }
    }

    return (
        <div className={`flex flex-col py-2 relative w-full md:w-72`}>
            <label htmlFor="address" className={`absolute left-2 top-[1.4375rem] transition-all duration-200 ${isFocused || value ? "text-sm top-6" : "text-base top-3"} ${theme === "light" ? "text-gray-700" : "text-gray-300"}`}>
                Address
            </label>
            <input id="address" type="text" name="address" aria-label="Address" value={value} onChange={(e) => setValue(e.target.value)} onFocus={handleFocus} onBlur={handleBlur} className={`${theme === "light" ? "bg-white border-2 border-[#9da0a63d] text-black" : "bg-[#767a8572] border-2 border-[#595c653d] text-white"} leading-7 w-full rounded-lg px-1 pt-5 transition-all duration-200 `} placeholder={isFocused ? "What is your address?" : ""} />
        </div>
    )
}

export default FloatingLabelInput
