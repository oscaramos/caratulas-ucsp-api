module.exports = {
  apps: [
    {
      name: "caratulas-ucsp-api",
      script: "./index.js",
      instances: 1,
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
