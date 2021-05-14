module.exports = {
  webpack: (config, webpack) => {
    // Add your variable using the DefinePlugin
    config.plugins.push(
      new webpack.DefinePlugin({
        //All your custom ENVs that you want to use in frontend
        CUSTOM_VARIABLES: {
          token: JSON.stringify(process.env.BEARER_TOKEN),
        },
      })
    );
    // Important: return the modified config
    return config;
  },
};
