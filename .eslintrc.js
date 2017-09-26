module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'indent': ['error', 4],
    'keyword-spacing': [2, {
      before: false,
      after: false,
      overrides: {
        "from": { "before": true, "after": true },
        //"use": { "after": true },
        "import": { "after": true },
        "export": { "after": true },
        "return": { "after": true },
        "else": { "before": true, "after": true },
        "as": { "before": true, "after": true },
        "this": { "before": true }
      }
    }],
    'space-before-function-paren': ["error", "never"]
  }
}
