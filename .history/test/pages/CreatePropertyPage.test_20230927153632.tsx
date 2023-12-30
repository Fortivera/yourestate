/* eslint-disable prettier/prettier */
import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"
import Layout from "@/app/dashboard/layout"

describe("CreateProperty page", () => {
    test("render without errors", () => {
        render(<Layout />)

        fireEvent.change(screen.getByLabelText("Address"), { target: { value: "123 Main St" } })
        fireEvent.change(screen.getByLabelText("Type"), { target: { value: "House" } })

        // form submission
        fireEvent.click(screen.getByText("Submit"))
    })
})
