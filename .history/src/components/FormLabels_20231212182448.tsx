/* eslint-disable prettier/prettier */

import { useContext } from "react"

import { ThemeContext } from "@/context/ThemeContex"

interface labelProps {
    id: number
    name: string
    type: string
    placeholder: string
    label: string
    ariaLabel: string
}

export default function FormInput({ labels }: { labels: labelProps[] }) {
    const { theme } = useContext(ThemeContext)
    const inputColour = "bg-slate-500/60 text-[#ddd]"
    return (
        <>
            <div className="flex flex-col md:flex-row py-2">
                <label className="pr-3 w-52" htmlFor="Type">
                    Property Type
                </label>
                <select name="Type" id="Property type" className={`w-auto md:w-72 leading-7 border-b-2 ${theme === "light" ? "bg-white" : inputColour}`}>
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
            {labels.map((entity: any) => {
                return (
                    <div key={entity.id} className="flex flex-col md:flex-row py-2 ">
                        <label className="pr-3 w-52" htmlFor={`${entity.name}`}>
                            {entity.name}
                        </label>
                        <input
                            className={`${theme === "light" ? "bg-white" : inputColour} leading-7 w-auto md:w-72 border-b-2`}
                            id=""
                            type={`${entity.type}`}
                            name={`${entity.name}`}
                            aria-label={`${entity.ariaLabel}`}
                            placeholder={`${entity.placeholder}`}
                            onKeyDown={
                                entity.type === "number"
                                    ? (event: React.KeyboardEvent<HTMLInputElement>) => {
                                          if (event.key.toLowerCase() === "e") {
                                              event.preventDefault()
                                          }
                                      }
                                    : undefined
                            }
                        />
                    </div>
                )
            })}
        </>
    )
}
