import React, { useState } from "react"

const CustomDropdown = ({ options }: any) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState(options[0])

    const toggleDropdown = () => setIsOpen(!isOpen)
    const handleOptionClick = (option: any) => {
        setSelectedOption(option)
        setIsOpen(false)
    }

    return (
        <div className="relative inline-block text-left">
            <div className="inline-flex justify-between items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={toggleDropdown}>
                {selectedOption}
                <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </div>

            {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {options.map((option: any, index: any) => (
                            <a key={index} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" onClick={() => handleOptionClick(option)}>
                                {option}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default function App() {
    const options = ["Option 1", "Option 2", "Option 3"]
    return <CustomDropdown options={options} />
}
