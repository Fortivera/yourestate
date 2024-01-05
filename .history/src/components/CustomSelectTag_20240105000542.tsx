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
        <div className={"relative text-left w-full md:w-60"}>
            <input type="hidden" name="type" value={selectedOption} />
            <div
                className={`${theme === "light" ? "bg-white border-2 border-[#9da0a63d] text-black focus:border-[#47444422] " : "bg-[#767a8572] border-2 border-[#595c653d] text-white focus:border-[#bab2b291]"}
                          text-base rounded-[15.125px] pl-1 p-[1.5px] leading-7 inline-flex justify-between items-center  `}
                onClick={toggleDropdown}
            >
                {selectedOption}
                <svg className="mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </div>

            {isOpen && (
                <div className={`${theme === "light" ? "bg-white text-black" : "bg-[#595d69fd]  text-white"}   absolute right-0 mt-1 w-full rounded-md shadow-lg  ring-1  ring-gray-100 ring-opacity-10 focus:outline-none`}>
                    {options.map((userinput: any, index: any) => (
                        <div key={index} className={`${theme === "light" ? "hover:bg-[#edeef1fd] text-black" : "hover:bg-[#898a90fd]  text-white"} block px-4 py-2 my-1  text-sm hover:rounded-md`} onClick={() => handleOptionClick(userinput)}>
                            {userinput}
                        </div>
                    ))}
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
