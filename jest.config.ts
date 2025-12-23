import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  moduleNameMapper: {
    "^react(.*)$": "<rootDir>/node_modules/react$1",
    "^@testing-library/react$": "<rootDir>/node_modules/@testing-library/react",
    "^@testing-library/jest-dom$":
      "<rootDir>/node_modules/@testing-library/jest-dom",
    "^@testing-library/user-event$":
      "<rootDir>/node_modules/@testing-library/user-event",
    "^react-router-dom$": "<rootDir>/node_modules/react-router-dom",
    "^.+\\.(css|scss)$": "identity-obj-proxy",
    "^.+\\.(webmanifest|svg|png|jpg|jpeg|gif|ico|bmp|json)$":
      "<rootDir>/__mocks__/fileMock.js",
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testMatch: ["**/?(*.)+(test).[jt]s?(x)"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};

export default config;
