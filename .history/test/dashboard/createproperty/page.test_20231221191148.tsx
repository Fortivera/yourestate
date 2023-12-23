import { postData } from "@/app/dashboard/createproperty/page"

// Mock the global fetch
jest.mock("node-fetch", () => require("fetch-mock").sandbox())
const fetchMock = require("fetch-mock")

