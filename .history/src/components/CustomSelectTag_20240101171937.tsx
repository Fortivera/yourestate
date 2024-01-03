import React, { useState } from "react"

interface CustomDropdownProps {
    name: string
    options: string[]
    theme: string
    defaultValue: string
}

export const CustomDropdown: React.FC<CustomDropdownProps> = ({ name, options, theme, defaultValue }) => {
    const [selectedOption, setSelectedOption] = useState(defaultValue || options[0])

    const handleOptionClick = (option: string) => {
        setSelectedOption(option)
    }

    return (
        <div className="relative inline-block text-left w-auto md:w-72">
            {/* Hidden input to store the selected value */}
            <input type="hidden" name={name} value={selectedOption} />
            <div className={`${theme === "light" ? "bg-white border-2 border-[#9da0a63d] text-black focus:border-[#47444422]" : "bg-[#767a8572] border-2 border-[#595c653d] text-white focus:border-[#bab2b291]"} text-base rounded-lg p-[3px] leading-7 inline-flex justify-between items-center w-full`} onClick={() => setIsOpen(!isOpen)}>
                {selectedOption}
                {/* SVG Icon here */}
            </div>
            {isOpen && (
                <div className={`${theme === "light" ? "bg-white text-black" : "bg-[#595d69fd] text-white"} origin-top-right absolute right-0 mt-1 w-full rounded-md shadow-lg ring-1 ring-gray-100 ring-opacity-10 focus:outline-none`}>
                    <div className="">
                        {options.map((option, index) => (
                            <div key={index} className={`${theme === "light" ? "hover:bg-[#edeef1fd] text-black" : "hover:bg-[#898a90fd] text-white"} block px-4 py-2 text-sm hover:rounded-md`} onClick={() => handleOptionClick(option)}>
                                {option}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
