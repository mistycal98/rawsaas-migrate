const path = require("node:path")
require("dotenv").config({ path: path.join(__dirname, ".env") });

module.exports = {
  mongodb: {
    url: process.env.MONGODB_URL,
    options: { useNewUrlParser: true },
  },
  migrationsDir: "./migrations/feedback",
  changelogCollectionName: "changelog-feedback",
  migrationFileExtension: ".js",
  useFileHash: false,
  moduleSystem: "commonjs",
};
