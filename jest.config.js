const config = {
  verbose: true,
  preset: "ts-jest",
  globals: {
    "ts-jest": {
      babelConfig: true,
      isolatedModules: true,
    },
  },
  testEnvironment: "jest-environment-jsdom",
  extensionsToTreatAsEsm: [".jsx"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  testMatch: [
    "**/__tests__/**/*.test.[jt]s?(x)",
    "**/?(*.)+(spec|test).[jt]s?(x)",
  ],
  transform: {
    "^.+\\.js$": "babel-jest",
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
  },
  moduleNameMapper: {
    "^__tests__/(.*)$": "<rootDir>/__tests__/$1",
    "^components/(.*)$": "<rootDir>/src/components/$1",
    //   "^messages/(.*)$": "<rootDir>/src/messages/$1",
    //   "^messages$": "<rootDir>/src/messages/index.ts",
    //   "^theme/(.*)$": "<rootDir>/src/theme/$1",
    "^assets/(.*)$": "<rootDir>/src/assets/$1",
    "^types/(.*)$": "<rootDir>/src/types/$1",
    "^lib/(.*)$": "<rootDir>/src/lib/$1",
    //   "^@redux/(.*)$": "<rootDir>/src/redux/$1",
    //   "^@redux$": "<rootDir>/src/redux/index.ts",
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "<rootDir>/__tests__/mocks/fileMock.ts",
    //   "\\.(css|less)$": "<rootDir>/__tests__/mocks/fileMock.ts",
  },
};

export default config;
