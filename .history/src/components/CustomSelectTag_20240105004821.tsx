import React, { useState } from "react"

export const CustomDropdown = ({ options, theme }: any) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState(options[0])

    const toggleDropdown = () => setIsOpen(!isOpen)
    const handleOptionClick = (option: any) => {
        setSelectedOption(option)
        setIsOpen(false)
    }
    const handleBlur = () => {
        setIsOpen(!false)
    }

    return (
         <div className={"relative text-left w-full md:w-[292px]"} ref={dropdownRef}>
            <input type="hidden" name="type" value={selectedOption} />
            <div
                className={`${theme === "light" ? "bg-white border-2 border-[#9da0a63d] text-black focus:border-[#47444422] " : "bg-[#767a8572] border-2 border-[#595c653d] text-white focus:border-[#bab2b291]"}
                          text-base rounded-[15.125px] pl-1 p-[1.5px] leading-7 inline-flex justify-between items-center w-full`}
                onClick={toggleDropdown}
                onBlur={handleBlur}
                tabIndex="0" // Make the div focusable
            >

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
