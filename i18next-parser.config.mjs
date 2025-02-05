// eslint-disable-line unicorn/filename-case
export default {
  input: ['src/**/*.{js,jsx,ts,tsx}', 'public/*.{js,ts}'],

  output: 'public/locales/$LOCALE/$NAMESPACE.json',
  indentation: 4,

  sort: true,

  locales: ['en'],

  lexers: {
    js: ['JavascriptLexer'],
    jsx: ['JsxLexer'],
  },

  defaultValue: (lng, ns, key) => key,

  // Keep in sync between i18next-parser.config.js and i18n-common.js:
  keySeparator: false,
  namespaceSeparator: false,
};
