module.exports = {
  stories: ["../src/**/*.stories.(js|mdx)"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-docs",
    "@storybook/addon-contexts",
    "@storybook/addon-actions",
    "@storybook/addon-knobs",
    "@storybook/addon-a11y/register"
  ]
};
