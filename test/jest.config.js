module.exports = {
  rootDir: "..",
  clearMocks: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: ["src/**/*.ts"],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "types\\.ts",
    "index\\.ts",
    ".+\\.d\\.ts"
  ],
  testPathIgnorePatterns: ["/node_modules/", "/fixtures/", "/utils/"],
  moduleFileExtensions: ["ts", "tsx", "js"],
  setupFilesAfterEnv: ["<rootDir>/test/jest.setup.ts"],
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "src/__tests__/tsconfig.json"
      }
    ]
  }
};
