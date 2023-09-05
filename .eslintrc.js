module.exports = {
  root: true,
  extends: [
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "prettier",
    "next/core-web-vitals",
  ],
  plugins: ["prettier"],
  env: {
    es2021: true,
    node: true,
  },
  rules: {
    "no-undef": "off",
    "react/jsx-no-bind": [
      "error",
      { allowFunctions: true, allowArrowFunctions: true },
    ],
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-use-before-define": "off",
  },
  ignorePatterns: ["**/scripts/*"],
  parserOptions: {
    project: ["./tsconfig.json"],
    // https://github.com/typescript-eslint/typescript-eslint/issues/251
    tsconfigRootDir: __dirname,
  },
};
