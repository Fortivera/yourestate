;("")

export default function Navbar() {
  return (
    <nav className="relative container mx-auto bg-yellow-100 z-0">
      <div className="flex justify-end items-center ">
        <div className="flex px-3">
          <NavLink to={"dashboard/createproperty"}>Add Property</NavLink>
        </div>

        <div className="flex px-3">
          <NavLink to={"/"}>Logout</NavLink>
        </div>
      </div>
    </nav>
  )
}
