const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "nridwan",
    projectName: "home",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {});
};
