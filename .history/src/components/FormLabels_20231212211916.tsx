/* eslint-disable prettier/prettier */
import { ChangeEvent, useContext } from "react"
import { ThemeContext } from "@/context/ThemeContex"
import "../../src/app/dashboard/createproperty/createproperty.css";
interface labelStructure {
    id: number,
    name: string,
    type: string,
    placeholder: string,
    label: string,
    ariaLabel: string,

}
interface FormInputProps {
    // eslint-disable-next-line no-unused-vars
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const formLabels: labelStructure[] = [
    {
        id: 1,
        name: "Address",
        type: "text",
        placeholder: "Address",
        label: "Address",
        ariaLabel: "Address",


    },
    {
        id: 2,
        name: "Suite",
        type: "text",
        placeholder: "Suite",
        label: "Suite",
        ariaLabel: "Suite",
    },
    {
        id: 3,
        name: "PostalCode",
        type: "text",
        placeholder: "Postal Code",
        label: "Postal Code",
        ariaLabel: "PostalCode",
    },
    {
        id: 4,
        name: "City",
        type: "text",
        placeholder: "City",
        label: "City",
        ariaLabel: "City",
    },
    {
        id: 5,
        name: "Province",
        type: "text",
        placeholder: "Province",
        label: "Province",
        ariaLabel: "Province",
    },
    {
        id: 6,
        name: "Country",
        type: "text",
        placeholder: "Country",
        label: "Country",
        ariaLabel: "Country",
    },
    {
        id: 7,
        name: "Tenants",
        type: "text",
        placeholder: "Tenants",
        label: "Number of Tenants",
        ariaLabel: "Tenants",
    },
    {
        id: 8,
        name: "Rent",
        type: "number",
        placeholder: "Monthly Rate",
        label: "Rent",
        ariaLabel: "Rent",
    },
    {
        id: 9,
        name: "SurfaceArea",
        type: "number",
        placeholder: "Area (sq. ft)",
        label: "Surface Area (sq. ft)",
        ariaLabel: "SurfaceArea",
    },
    {
        id: 10,
        name: "Age",
        type: "number",
        placeholder: "Age",
        label: "Property Age",
        ariaLabel: "Age",
    },
    {
        id: 11,
        name: "Electricity",
        type: "number",
        placeholder: "Monthly Rate",
        label: "Electricity",
        ariaLabel: "Electricity",
    },
    {
        id: 12,
        name: "Hydro",
        type: "number",
        placeholder: "Monthly Rate",
        label: "Hydro",
        ariaLabel: "Hydro",
    },
    {
        id: 13,
        name: "Gas",
        type: "number",
        placeholder: "Monthly Rate",
        label: "Gas",
        ariaLabel: "Gas",
    },
]



export default function FormInput(props: FormInputProps) {
    const { onChange } = props
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
            {formLabels.map((entity: any) => {
                return (
                    <div key={entity.id} className="flex flex-col md:flex-row py-2 ">
                        <label className="pr-3 w-52" htmlFor={`${entity.name}`}>
                            {entity.name}
                        </label>
                        <input
                            className={`${theme === "light" ? "bg-white" : inputColour} leading-7 w-auto md:w-72 border-b-2`}
                            {...entity} required
                            onKeyDown={
                                entity.type === "number" ? (event: React.KeyboardEvent<HTMLInputElement>) => {
                                    if (event.key.toLowerCase() === "e") {
                                        event.preventDefault()
                                    }
                                } : undefined
                            }
                            onChange={onChange}


                        />

                    </div>
                )
            })}
        </>
    )
}
