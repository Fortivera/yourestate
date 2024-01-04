import { ThemeContext } from "@/context/ThemeContex"
import React, { useState, useContext } from "react"

interface FloatingLabelInputProps {
    propertyInfo: Property // If you're getting this from a property object
    placeholder?: string
}

const FloatingLabelInput = ({ propertyInfo, placeholder }: FloatingLabelInputProps) => {
    const [value, setValue] = useState(propertyInfo.)
    const [isFocused, setIsFocused] = useState(false)
    const { theme } = useContext(ThemeContext) // Assuming this is how you access your theme

    const handleFocus = () => setIsFocused(true)
    const handleBlur = () => {
        setIsFocused(value !== "")
    }

    return (
        <div className={`flex flex-col py-2 relative w-full md:w-72`}>
            <label htmlFor="address" className={`absolute left-2 top-[1.3375rem] transition-all duration-200 ${isFocused || value ? "text-sm top-[0.65rem]" : "text-base top-3"} ${theme === "light" ? "text-gray-700" : "text-gray-300"}`}>
                {defaultValue}
            </label>
            <input id="address" type="text" name="address" aria-label="Address" value={value} onChange={(e) => setValue(e.target.value)} onFocus={handleFocus} onBlur={handleBlur} className={`${theme === "light" ? "bg-white border-2 border-[#9da0a63d] text-black" : "bg-[#767a8572] border-2 border-[#595c653d] text-white"} leading-7 w-full rounded-lg px-1 pt-5 transition-all duration-200 `} placeholder={isFocused ? placeholder : ""} />
        </div>
    )
}

export default FloatingLabelInput
