module.exports = {
  preset: "ts-jest",
  collectCoverage: true,
  clearMocks: true,
  testEnvironment: "jsdom",
  verbose: true,
  moduleNameMapper: {
    axios: "axios/dist/node/axios.cjs",
  },
};
