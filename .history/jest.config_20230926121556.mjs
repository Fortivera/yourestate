// jest.config.mjs
import { configure } from "next/dist/server/config-shared"
import { withEnzyme } from "jest-next-dynamic"

const createJestConfig = configure({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: "./",
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */

const config = {
    // Add more setup options before each test is run
    // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

    testEnvironment: "jest-environment-jsdom",
    moduleNameMapper: {
        "^public/(.*)$": "<rootDir>/public/$1",
    },
}

// createJestConfig is exported this way to ensure that next/dist/server/config-shared can load the Next.js config which is async
export default withEnzyme(createJestConfig(config))
