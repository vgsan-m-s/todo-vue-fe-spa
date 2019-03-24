module.exports = {
  presets: [
    ["env"]
  ],
  env: {
    test: {
      presets: [
        ["env", { targets: { node: "current" }}]
      ]
    },
    development: {
      presets: [
        '@vue/app',
        ["env", { modules: false, targets: { node: "current" }}]
      ]
    },
    production: {
      presets: [
        '@vue/app',
        ["env", { modules: false, targets: { node: "current" }}]
      ]
    }
  }
}
