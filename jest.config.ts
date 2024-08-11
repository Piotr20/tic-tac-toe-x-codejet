import type { Config } from "jest";
import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/components/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  coverageProvider: "v8",
  testEnvironment: "jsdom",
};

export default createJestConfig(config);
