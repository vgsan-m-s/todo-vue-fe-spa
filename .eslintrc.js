module.exports = {
    parserOptions: {
        parser: "babel-eslint"
    },
    env: {
      es6: true,
      browser: true,
      node: true,
      jest: true
    },
    rules: {
        'no-console': 'off',
    },
    extends: [
        "plugin:vue/essential"
    ]
};