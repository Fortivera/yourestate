import { useContext } from "react"
import { ThemeContext } from "@/context/ThemeContex"
import { attributesHTML } from "lib/DataNewFormLabels"
import { CustomDropdown } from "./CustomSelectTag"

export default function FormLabelsCreateProperty() {
    const { theme } = useContext(ThemeContext)

    return (
        <>
            <div className="flex flex-col md:flex-row py-2">
                <label className="pr-3 w-full md:w-52" htmlFor="Type">
                    Property Type
                </label>

                <CustomDropdown options={["House", "Land", "Farm", "Parking"]} theme={theme} />
            </div>
            {attributesHTML.map((entity) => {
                return (
                    <div key={entity.id} className="flex flex-col md:flex-row py-2">
                        <label className="pr-3 w-52" htmlFor={`${entity.label}`}>
                            {entity.label}
                        </label>
                        <input
                            id="themed-input"
                            className={`custom-number-input ${theme === "light" ? "bg-white border-2 border-[#9da0a63d] text-black focus:ring-[#bdbdc2]" : "bg-[#767a8572] border-2 border-[#595c653d] text-white focus:ring-[#989898]"} leading-7 w-full md:w-72 rounded-lg p-[2px]  focus:outline-none focus:ring-[2px] `}
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
