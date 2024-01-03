/* eslint-disable prettier/prettier */
import {  useContext } from "react"
import { ThemeContext } from "@/context/ThemeContex"
import DataNewFormLabels.json

interface labelStructure {
    id?: string
    name: string
    type: string
    placeholder: string
    label: string
    ariaLabel: string
}
// interface FormInputProps {
//     // eslint-disable-next-line no-unused-vars
//     onChange: (e: ChangeEvent<HTMLInputElement>) => void
// }




export default function FormInput() {
    // const { onChange } = props
    const { theme } = useContext(ThemeContext)
    

    return (
        <>
            <div className="flex flex-col md:flex-row py-2">
                <label className="pr-3 w-52" htmlFor="type">
                    Property Type
                </label>
                <select name="type" id="Property type" className={`w-auto md:w-72 leading-7 border-b-2 ${theme === "light" ? "bg-white" : "bg-slate-500/60 text-[#ddd]"}`}>
                    <option value="House" id="">
                        House
                    </option>
                    <option value="Land" id="">
                        Land
                    </option>
                    <option value="Farm" id="">
                        Farm
                    </option>
                    <option value="Parking" id="">
                        Parking
                    </option>
                </select>
            </div>
            {formLabels.map((entity: labelStructure) => {
                return (
                    <div key={entity.id} className="flex flex-col md:flex-row py-2 ">
                        <label className="pr-3 w-52" htmlFor={`${entity.label}`}>
                            {entity.label}
                        </label>
                        <input
                            className={`${theme === "light" ? "bg-white" : "bg-slate-500/60 text-[#ddd]"} leading-7 w-auto md:w-72 border-b-2`}
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
