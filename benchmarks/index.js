import * as asCode from "../build/release.js";
import * as jsCode from "../javascript/index.js";

const csv = Array.from({ length: 1000 }, () => {
  return Array.from({ length: 10 }, () =>
    Math.random().toString(36).substring(2, 15)
  ).join(",");
}).join("\n");

console.log("◄◄◄◄◄◄ JavaScript ►►►►►►\n");

jsCode.testSpeed();
console.time("► parseCsvToObject");
for (let i = 0; i < 10; i++) jsCode.parseCsvToObject(csv);
console.timeEnd("► parseCsvToObject");

console.log("\n◄◄◄◄◄◄ AssemblyScript ►►►►►\n");
asCode.testSpeed();
console.time("► parseCsvToObject");
for (let i = 0; i < 10; i++) asCode.parseCsvToObject(csv);
console.timeEnd("► parseCsvToObject");
