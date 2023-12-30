import { postData } from "@/app/dashboard/createproperty/page"

// fetchData.ts
export default async function fetchData(url: string): Promise<any> {
    const response = await fetch(url)
    const data = await response.json()
    return data
}
// Define a type for the mock fetch response
interface MockFetchResponse {
    json: () => Promise<any>
}

describe("fetchData", () => {
    // Keep a reference to the original fetch
    let originalFetch: typeof fetch

    beforeEach(() => {
        originalFetch = global.fetch
        // Mock the global fetch
        jest.spyOn(global, "fetch").mockImplementation(
            (url: string): Promise<MockFetchResponse> =>
                Promise.resolve({
                    json: () => Promise.resolve({ key: "value" }), // Mocked response
                })
        )
    })

    afterEach(() => {
        // Restore the original fetch
        global.fetch = originalFetch
    })

    it("fetches and returns data from an API", async () => {
        const url = "https://example.com/data"
        const data = await fetchData(url)

        expect(global.fetch).toHaveBeenCalledWith(url)
        expect(data).toEqual({ key: "value" })
    })
})
