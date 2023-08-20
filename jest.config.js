module.exports = {
  testMatch: ['**/*.test.ts', '**/*.test.tsx'],
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};
