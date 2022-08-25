module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
        alias: {
          "*": ".",
          _root: "./",
          _src: "./src",
          _components: "./src/components",
          _modules: "./src/modules",
          _services: "./src/services",
          _commons: "./src/commons",
          _navigation: "./src/navigation",
          _models: "./src/models",
        },
      },
    ],
  ],
};
