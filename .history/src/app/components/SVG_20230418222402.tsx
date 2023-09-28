import React from "react"

interface SearchIconAttributes {
  className?: string
}

export const SearchIcon: React.FC<SearchIconAttributes> = ({ className = "" }: SearchIconAttributes) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 48 48`}>
      <path d="M 20.5 6 C 12.515556 6 6 [...] 10 20.5 10 z" />
    </svg>
  )
}
