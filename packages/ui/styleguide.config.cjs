const StyleDictionary = require("style-dictionary");
const { registerAnima } = require("@animaapp/style-dictionary");

registerAnima(StyleDictionary);

module.exports = {
  source: ["./src/design-tokens/*tokens.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "src/generated/",
      files: [
        {
          destination: "css/_variables.css",
          format: "css/variables",
        },
      ],
    },
  },
};
