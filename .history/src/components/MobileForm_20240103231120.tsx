export const MobileForm = () => {
    return (
        <form method="PUT" id="update-form" onSubmit={handleSubmit}>
                <div className={`py-2 px-8 flex flex-col mx-auto border border-t-2 border-b-2 ${theme === "light" ? "bg-white border-[#ccced3]" : "bg-[#2f323a] border-[#212329] "} z-1`}>
                    <label hidden className="pr-3 w-52" htmlFor="id">
                        {" "}
                    </label>
                    <input hidden defaultValue={property.id} type="text" name="id" />
                    <div className="flex flex-col md:flex-row py-2">
                        <label className="pr-3 w-52" htmlFor="Type">
                            Property Type
                        </label>
                        <CustomDropdown options={["House", "Land", "Farm", "Parking"]} theme={theme} />
                    </div>
                    <div className="flex flex-col md:flex-row py-2">
                        <label className="pr-3 w-52 " htmlFor="Address">
                            Address
                        </label>
                        <input className={`${theme === "light" ? "bg-white border-2 border-[#9da0a63d] text-black" : "bg-[#767a8572] border-2 border-[#595c653d] text-white"} leading-7 w-full md:w-72 rounded-lg  pl-1 p-[2px]`} id="" type="text" name="address" aria-label="Address" defaultValue={property.address} />
                    </div>
                    <FormField defaultValue={property.address} label={"Address"} />
                    <div className="flex flex-col md:flex-row py-2 ">
                        <label className="pr-3 w-52" htmlFor="Suite">
                            Suite
                        </label>
                        <input className={`${theme === "light" ? "bg-white border-2 border-[#9da0a63d] text-black" : "bg-[#767a8572] border-2 border-[#595c653d] text-white"} leading-7 w-full md:w-72 rounded-lg  pl-1 p-[2px]`} id="" type="text" name="suite" aria-label="Suite" defaultValue={property.suite} />
                    </div>
                    <div className="flex flex-col md:flex-row py-2">
                        <label className="pr-3 w-52" htmlFor="PostalCode">
                            PostalCode
                        </label>
                        <input className={`${theme === "light" ? "bg-white border-2 border-[#9da0a63d] text-black" : "bg-[#767a8572] border-2 border-[#595c653d] text-white"} leading-7 w-full md:w-72 rounded-lg  pl-1 p-[2px]`} id="" type="text" name="postalCode" aria-label="PostalCode" defaultValue={property.postalCode} />
                    </div>
                    <div className="flex flex-col md:flex-row py-2">
                        <label className="pr-3 w-52" htmlFor="City">
                            City
                        </label>
                        <input className={`${theme === "light" ? "bg-white border-2 border-[#9da0a63d] text-black" : "bg-[#767a8572] border-2 border-[#595c653d] text-white"} leading-7 w-full md:w-72 rounded-lg  pl-1 p-[2px]`} id="" type="text" name="city" aria-label="City" defaultValue={property.city} />
                    </div>
                    <div className="flex flex-col md:flex-row py-2">
                        <label className="pr-3 w-52" htmlFor="Province">
                            Province
                        </label>
                        <input className={`${theme === "light" ? "bg-white border-2 border-[#9da0a63d] text-black" : "bg-[#767a8572] border-2 border-[#595c653d] text-white"} leading-7 w-full md:w-72 rounded-lg  pl-1 p-[2px]`} id="" type="text" name="province" aria-label="Province" defaultValue={property.province} />
                    </div>
                    <div className="flex flex-col md:flex-row py-2">
                        <label className="pr-3 w-52" htmlFor="Country">
                            Country
                        </label>
                        <input className={`${theme === "light" ? "bg-white border-2 border-[#9da0a63d] text-black" : "bg-[#767a8572] border-2 border-[#595c653d] text-white"} leading-7 w-full md:w-72 rounded-lg  pl-1 p-[2px]`} id="" type="text" name="country" aria-label="Country" defaultValue={property.country} />
                    </div>
                    <div className="flex flex-col md:flex-row py-2">
                        <label className="pr-3 w-52" htmlFor="Tenant">
                            Number of Tenants
                        </label>
                        <input className={`${theme === "light" ? "bg-white border-2 border-[#9da0a63d] text-black" : "bg-[#767a8572] border-2 border-[#595c653d] text-white"} leading-7 w-full md:w-72 rounded-lg  pl-1 p-[2px]`} id="" type="number" name="tenant" aria-label="Tenants" defaultValue={property.tenant} />
                    </div>
                    <div className="flex flex-col md:flex-row py-2">
                        <label className="pr-3 w-52" htmlFor="Rent">
                            Rent
                        </label>
                        <input className={`${theme === "light" ? "bg-white border-2 border-[#9da0a63d] text-black" : "bg-[#767a8572] border-2 border-[#595c653d] text-white"} leading-7 w-full md:w-72 rounded-lg  pl-1 p-[2px]`} id="" type="number" name="rent" aria-label="" defaultValue={property.rent} />
                    </div>
                    <div className="flex flex-col md:flex-row py-2">
                        <label className="pr-3 w-52" htmlFor="SurfaceArea ">
                            {"Surface Area (sq. ft)"}
                        </label>
                        <input className={`${theme === "light" ? "bg-white border-2 border-[#9da0a63d] text-black" : "bg-[#767a8572] border-2 border-[#595c653d] text-white"} leading-7 w-full md:w-72 rounded-lg  pl-1 p-[2px]`} id="" type="number" name="surfaceArea" aria-label="Surface area" defaultValue={property.surfaceArea} />
                    </div>
                    <div className="flex flex-col md:flex-row py-2">
                        <label className="pr-3 w-52" htmlFor="Age">
                            Age
                        </label>
                        <input className={`${theme === "light" ? "bg-white border-2 border-[#9da0a63d] text-black" : "bg-[#767a8572] border-2 border-[#595c653d] text-white"} leading-7 w-full md:w-72 rounded-lg  pl-1 p-[2px]`} id="" type="number" name="age" aria-label="Age" defaultValue={property.age} />
                    </div>
                    <div className="flex flex-col md:flex-row py-2">
                        <label className="pr-3 w-52" htmlFor="Electricity">
                            Electricity
                        </label>
                        <input className={`${theme === "light" ? "bg-white border-2 border-[#9da0a63d] text-black" : "bg-[#767a8572] border-2 border-[#595c653d] text-white"} leading-7 w-full md:w-72 rounded-lg  pl-1 p-[2px]`} id="" type="number" name="electricity" aria-label="Electricity" defaultValue={property.electricity} />
                    </div>
                    <div className="flex flex-col md:flex-row py-2">
                        <label className="pr-3 w-52" htmlFor="Hydro">
                            Hydro
                        </label>
                        <input className={`${theme === "light" ? "bg-white border-2 border-[#9da0a63d] text-black" : "bg-[#767a8572] border-2 border-[#595c653d] text-white"} leading-7 w-full md:w-72 rounded-lg  pl-1 p-[2px]`} id="" type="number" name="hydro" aria-label="Hydro" defaultValue={property.hydro} />
                    </div>
                    <div className="flex flex-col md:flex-row py-2">
                        <label className="pr-3 w-52" htmlFor="Gas">
                            Gas
                        </label>
                        <input className={`${theme === "light" ? "bg-white border-2 border-[#9da0a63d] text-black" : "bg-[#767a8572] border-2 border-[#595c653d] text-white"} leading-7 w-full md:w-72 rounded-lg  pl-1 p-[2px]`} id="" type="number" name="gas" aria-label="Gas" defaultValue={property.gas} />
                    </div>
                    <div className="my-5 ">
                        <div className="flex flexcol items-center justify-center gap-20">
                            <>
                                <button onClick={handleDelete} className="w-28 rounded-md py-1 shadow-md bg-red-300 hover:bg-red-400 text-black" type="button">
                                    <span>Delete</span>
                                </button>
                                <SubmitButton buttonText="Update" />
                            </>
                        </div>
                    </div>
                </div>
            </form>
    )
}
