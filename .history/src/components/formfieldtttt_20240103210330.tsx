import React, { useState, FocusEvent } from "react"

const FormField: React.FC = () => {
    const [isFocused, setIsFocused] = useState(false)
    const [value, setValue] = useState("")

    const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
        setIsFocused(true)
    }

    const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
        setIsFocused(false)
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return (
        <div className="w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 dark:text-gray-400 text-xs font-bold mb-2" htmlFor="form-field">
                {isFocused || value ? "Address" : "Town"}
            </label>
            <input id="form-field" type="text" value={value} placeholder={isFocused ? "What is your address?" : ""} onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange} className="appearance-none block w-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
            {!isFocused && !value && <p className="text-gray-600 dark:text-gray-400 text-xs italic">Please enter your town</p>}
        </div>
    )
}

export default FormField
