module.exports = {
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["**/*.js", "**/*.jsx"],
      rules: {
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
      },
    },
  ],
};