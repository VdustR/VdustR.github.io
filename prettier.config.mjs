export default {
  plugins: ["prettier-plugin-astro"],
  printWidth: 100,
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
