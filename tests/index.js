import assert from "assert";
import * as asCode from "../build/debug.js";

asCode.testSpeed();

export function parseCsvToObject(csv) {
  const lines = csv.split("\n");
  const result = [];

  console.log(lines.length.toString());

  return lines.join("\n");
}
export function rowCount(csv) {
  const lines = csv.split("\n");
  return lines.length;
}

export function generateRandomCsv() {
  const lines = [];
  const max = 100000;

  for (let i = 0; i < max; i++) {
    const line = [];
    const max2 = 100;
    for (let j = 0; j < max2; j++) {
      const radomValue = 9;

      line.push(radomValue.toString());
    }

    lines.push(line.join(","));
  }
  return lines.join("\n");
}

console.log("◄◄◄◄◄◄ JavaScript ►►►►►►\n");

console.time("► generateRandomCsv");
const jsCsv = generateRandomCsv();
console.timeEnd("► generateRandomCsv");

console.time("► rowCount");
rowCount(jsCsv);
console.timeEnd("► rowCount");
console.log('\n')
