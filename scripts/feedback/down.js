// Entry File for the feedback down script

// Node Modules Packages
const path = require("node:path");
const { down } = require("migrate-mongo");

// Configure .dotenv
require("dotenv").config({ path: path.join(__dirname, ".env") });

// Initialize migrate-mongo
require("./init");

// Up Action
await down();
