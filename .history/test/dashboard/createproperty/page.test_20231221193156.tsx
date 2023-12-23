import { postData } from "@/app/dashboard/createproperty/page"

// Mock the global fetch
jest.mock("node-fetch", () => require("fetch-mock").sandbox())
const fetchMock = require("fetch-mock")

describe("postData function", () => {
  beforeEach(() => {
    fetchMock.restore()
  })

  it("should successfully post data", async () => {
    const mockUserInput = {
      /* your test data */
    }
    const mockUrl = "http://example.com/endpoint"
    process.env.NEXT_PUBLIC_SERVER_URL = "http://example.com"
    process.env.NEXT_PUBLIC_PROPERTY_ENDPOINT = "/endpoint"

    fetchMock.post(mockUrl, 200) // Mock a successful response

    await expect(postData(mockUserInput:Property)).resolves.not.toThrow()
    expect(fetchMock.lastCall()[1].body).toEqual(JSON.stringify(mockUserInput))
  })

  it("should throw an error when the response is not ok", async () => {
    const mockUserInput = {
      /* your test data */
    }
    const mockUrl = "http://example.com/endpoint"
    process.env.NEXT_PUBLIC_SERVER_URL = "http://example.com"
    process.env.NEXT_PUBLIC_PROPERTY_ENDPOINT = "/endpoint"

    fetchMock.post(mockUrl, 400) // Mock a failed response

    await expect(postData(mockUserInput)).rejects.toThrow("Request failed with status 400")
  })
})
