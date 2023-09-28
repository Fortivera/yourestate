"use client"

export function Searchbar() {

    return (
        <form action="POST"  >
            <div className="flex ml-3 font-Noto text-base">
                <div className="ml-2 flex">
                    <input type="text" className="outline-none border-[1px] border-slate-200 rounded-lg mt-1 mb-1 h-9 w-full" placeholder="Search Country" />
                </div>
                {/* <button type="submit">
                    <SearchIcon />
                </button> */}

            </div>
        </form>
    )
}
