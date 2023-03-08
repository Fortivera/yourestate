
import Link from "next/link"
import React from "react"
import { Modal } from "../../components/Modal"

type Params = {
    params: {
        propertyid: number,

    }
}

async function getProperty(propertyid: number) {
    const response = await fetch(`http://localhost:5085/api/Properties/${propertyid}`)
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    const data = await response.json()
    console.log(data)
    return data
}

export default async function ShowProperty({ params: { propertyid } }: Params) {
    const property: Property = await getProperty(propertyid)

    return (
        <Modal >
            <form method="post" id="property-form"  >
                <div className="  w-96 py-2 px-8 flex flex-col mx-auto border-2 border-gray-400 z-1">
                    <div className="flex py-2">
                        <div className="pr-3 w-52" >Property Type</div>
                        <div id="Property type" className="border-2 w-72">

                        </div>
                    </div>
                    <div className="flex py-2 ">
                        <div className="pr-3 w-52 ">Address</div>
                        <div className="leading-7 w-72 border-b-2" id="" />
                    </div>
                    <div className="flex py-2">
                        <div className="pr-3 w-52" >Suite</div>
                        <div className="leading-7 w-72 border-b-2" id="" />
                    </div>
                    <div className="flex py-2">
                        <div className="pr-3 w-52" >PostalCode</div>
                        <div className="leading-7 w-72 border-b-2" id="" />
                    </div>
                    <div className="flex py-2">
                        <div className="pr-3 w-52" >City</div>
                        <div className="leading-7 w-72 border-b-2" id="" />
                    </div>
                    <div className="flex py-2">
                        <div className="pr-3 w-52" >Province</div>
                        <div className="leading-7 w-72 border-b-2" id="" />
                    </div>
                    <div className="flex py-2">
                        <div className="pr-3 w-52" >Country</div>
                        <div className="leading-7 w-72 border-b-2" id="" />
                    </div>
                    <div className="flex py-2">
                        <div className="pr-3 w-52" >Number of Tenants</div>
                        <div className="leading-7 w-72 border-b-2" id="" />
                    </div>
                    <div className="flex py-2">
                        <div className="pr-3 w-52" >Rent</div>
                        <div className="leading-7 w-72 border-b-2" id="">
                            <div className="flex py-2">
                                <div className="pr-3 w-52" >Surface Area</div>
                                <div className="leading-7 w-72 border-b-2" id="" />
                            </div>
                            <div className="flex py-2">
                                <div className="pr-3 w-52" >Age</div>
                                <div className="leading-7 w-72 border-b-2" id="" />
                            </div>
                            <div className="flex py-2">
                                <div className="pr-3 w-52" >Electricity</div>
                                <div className="leading-7 w-72 border-b-2" id="" />
                            </div>
                            <div className="flex py-2">
                                <div className="pr-3 w-52" >Hydro</div>
                                <div className="leading-7 w-72 border-b-2" id="" />
                            </div>
                            <div className="flex py-2">
                                <div className="pr-3 w-52" >Gas</div>
                                <div className="leading-7 w-72 border-b-2" id="" />
                            </div>
                            <div className="my-5 ">
                                <div className="flex flexcol items-center justify-center gap-20">
                                    <button className=" ">
                                        <Link href={'/dashboard'}>Cancel</Link>
                                    </button>

                                    <button className="w-28 border-2 bg-blue-200 rounded-md py-1" type="submit">
                                        <span>Edit</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </Modal>
    )
}
