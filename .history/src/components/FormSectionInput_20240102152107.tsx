// eslint-disable-next-line no-unused-vars
import React from "react"

interface Props {
    labelName: string,

}

export default function FormSectionInput({ labelName, className,type,name,ariaLabel }) {
    return (
        <div className="flex flex-col md:flex-row py-2 ">
            <label className="pr-3 w-52 " htmlFor="Address">
                Address
            </label>
            <input className={`${theme === "light" ? "bg-white border-2 border-[#9da0a63d] text-black" : "bg-[#767a8572] border-2 border-[#595c653d] text-white"} leading-7 w-full md:w-72 rounded-lg   p-[3px]`} id="" type="text" name="address" aria-label="Address" defaultValue={property.address} />
        </div>
    )
}
