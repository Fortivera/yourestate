import React, { useState } from "react"

export const CustomDropdown = ({ options, theme }: any) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState(options[0])

    const toggleDropdown = () => setIsOpen(!isOpen)
    const handleOptionClick = (option: any) => {
        setSelectedOption(option)
        setIsOpen(false)
    }

    return (
        <div className={"relative inline-block text-left w-auto md:w-72"}>
            <div
                className={`${theme === "light" ? "bg-white border-2 border-[#9da0a63d] text-black focus:border-[#47444422]" : "bg-[#767a8572] border-2 border-[#595c653d] text-white focus:border-[#bab2b291]"}
                          text-base rounded-lg p-[3px] leading-7 inline-flex justify-between items-center w-full `}
                onClick={toggleDropdown}
            >
                {selectedOption}
                <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </div>

            {isOpen && (
                <div className={`${theme === "light" ? "bg-white text-black" : "bg-[#a6a9b3fd] hover:bg-[#b7bac465] text-white"} origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg  ring-1 ring-black ring-opacity-1 focus:outline-none`}>
                    <div className="py-1">
                        {options.map((userinput: any, index: any) => (
                            <option key={index} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" onClick={() => handleOptionClick(userinput)}>
                                {userinput}
                            </option>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

// export default function App() {
//     const options = ["House", "Land", "Farm", "Parking"]
//     const theme = "light" // or "dark", depending on the theme context
//     return <CustomDropdown options={options} theme={theme} />
// }
