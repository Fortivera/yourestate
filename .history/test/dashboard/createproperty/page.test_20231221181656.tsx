import { postData } from "../../../app/das"

describe("postData", () => {
    it("should make a POST request to the specified endpoint with the user input", async () => {
        // Arrange
        const userInput = { name: "John Doe", age: 25 }
        const fetchMock = jest.spyOn(fetch, "default").mockResolvedValue({ ok: true })

        // Act
        await postData(userInput)

        // Assert
        expect(fetchMock).toHaveBeenCalledWith(expect.stringContaining(process.env.NEXT_PUBLIC_SERVER_URL), {
            method: "POST",
            body: JSON.stringify(userInput),
            headers: {
                "Content-Type": "application/json",
            },
        })
    })

    it("should throw an error when the response is not ok", async () => {
        // Arrange
        const userInput = { name: "John Doe", age: 25 }
        const fetchMock = jest.spyOn(fetch, "default").mockResolvedValue({ ok: false, status: 400, text: () => Promise.resolve("Invalid input") })

        // Act and Assert
        await expect(postData(userInput)).rejects.toThrow("Request failed with status 400: Invalid input")
    })

    it("should log and show an alert when an error occurs during the request", async () => {
        // Arrange
        const userInput = { name: "John Doe", age: 25 }
        const fetchMock = jest.spyOn(fetch, "default").mockRejectedValue(new Error("Network error"))
        const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => { })
        const alertSpy = jest.spyOn(window, "alert").mockImplementation(() => { })

        // Act
        await postData(userInput)

        // Assert
        expect(consoleErrorSpy).toHaveBeenCalledWith(new Error("Network error"))
        expect(alertSpy).toHaveBeenCalledWith("We can't submit the form, due to Network error")
    })
})
