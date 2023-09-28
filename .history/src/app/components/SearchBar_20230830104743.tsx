"use client"

export function Searchbar() {
  return (
    <form action="POST" onSubmit={postHandler}>
      <div className="flex ml-3 font-Noto text-base ">
        <div className="flex   ">
          <input type="text" className="outline-none border-[1px] border-slate-200 rounded-lg mt-1 mb-1 h-15 w-full" placeholder="Search Country" />
        </div>
        <button type="submit">
          <SearchIcon />
        </button>
      </div>
    </form>
  )
}
