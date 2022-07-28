const path = require('path')
const { mergeConfig } = require("vite");

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  framework: "@storybook/vue3",
  core: {
    "builder": "storybook-builder-vite"
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [],
      resolve: {
        alias: [
          {
            find: "@",
            replacement: path.resolve(__dirname, "../src"),
          },
        ],
      },
    });
  },
}