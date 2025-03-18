#!/usr/bin/env node
const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

// Get project name from arguments
const projectName = process.argv[2] || "my-express-app";

// Copy template files
const templatePath = path.join(__dirname, "template");
const targetPath = path.join(process.cwd(), projectName);

if (fs.existsSync(targetPath)) {
  console.error(`Error: The directory "${projectName}" already exists.`);
  process.exit(1);
}

fs.mkdirSync(targetPath);
fs.cpSync(templatePath, targetPath, { recursive: true });

// Install dependencies
console.log(`Installing dependencies...`);
execSync(`cd ${projectName} && npm install`, { stdio: "inherit" });

console.log(`✅ Express Template is ready!`);
console.log(`➡️  Run the following commands:`);
console.log(`cd ${projectName}`);
console.log(`For running devolpment: npm run dev`);
console.log(`For starting the app: npm start`);

