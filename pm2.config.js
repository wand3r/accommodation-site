module.exports = {
  apps : [{
    name        : "server",
    script      : "./src/server/index.ts",
    watch: ["src" ],
    env: {
      "NODE_ENV": "development",
    },
    env_production : {
       "NODE_ENV": "production"
    }
  }]
}