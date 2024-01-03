/* eslint-disable prettier/prettier */
import {  useContext } from "react"
import { ThemeContext } from "@/context/ThemeContex"
import { attributesHTML } from "lib/DataNewFormLabels"
import { CustomDropdown } from "./CustomSelectTag"

// interface FormInputProps {
//     // eslint-disable-next-line no-unused-vars
//     onChange: (e: ChangeEvent<HTMLInputElement>) => void
// }

export default function FormLabelsCreateProperty() {
    // const { onChange } = props
    const { theme } = useContext(ThemeContext)
    

    return (
        <>
            <div className="flex flex-col md:flex-row py-2">
                        <label className="pr-3 w-52" htmlFor="Type">
                            Property Type
                        </label>                      
                        <CustomDropdown options={["House", "Land", "Farm", "Parking"]} theme={theme} />
                    </div>
            {attributesHTML.map((entity) => {
                return (
                    <div key={entity.id} className="flex flex-col md:flex-row py-2 ">
                        <label className="pr-3 w-52" htmlFor={`${entity.label}`}>
                            {entity.label}
                        </label>
                        <input
                            className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  `}
                            {...entity} 
                            required
                            //handling the exponent input default setting for numbers in html, disallowing strings as you type "e"
                            onKeyDown={
                                entity.type === "number"
                                    ? (event: React.KeyboardEvent<HTMLInputElement>) => {
                                          if (event.key.toLowerCase() === "e") {
                                              event.preventDefault()
                                          }
                                      }
                                    : undefined
                            }
                            // onChange={onChange}
                        />
                    </div>
                )
            })}
        </>
    )
}
