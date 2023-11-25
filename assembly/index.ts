export function rowCount(csv: string): i32 {
  const lines = csv.split("\n");
  // const result = [];

  // console.log(lines.length.toString());

  return lines.length;
}

export function generateRandomCsv(): string {
  const lines: string[] = [];
  const max: i32 = 100000;

  for (let i: i8 = 0; i < max; i++) {
    const line: i8[] = [];
    const max2: i8 = 100;
    for (let j = 0; j < max2; j++) {
      const radomValue: i8 = 9;

      line.push(radomValue);
    }

    lines.push(line.join(","));
  }
  return lines.join("\n");
}

export function testSpeed(): void {
  console.log("\n\n◄◄◄◄◄◄ AssemblyScript ►►►►►►\n");

  console.time("► generateRandomCsv");
  let jsCsv = generateRandomCsv();
  jsCsv = generateRandomCsv();
  jsCsv = generateRandomCsv();
  jsCsv = generateRandomCsv();
  jsCsv = generateRandomCsv();
  jsCsv = generateRandomCsv();
  jsCsv = generateRandomCsv();
  jsCsv = generateRandomCsv();
  jsCsv = generateRandomCsv();
  jsCsv = generateRandomCsv();
  jsCsv = generateRandomCsv();
  console.timeEnd("► generateRandomCsv");

  console.time("► rowCount");
  rowCount(jsCsv);
  rowCount(jsCsv);
  rowCount(jsCsv);
  rowCount(jsCsv);
  rowCount(jsCsv);
  rowCount(jsCsv);
  rowCount(jsCsv);
  rowCount(jsCsv);
  rowCount(jsCsv);
  rowCount(jsCsv);
  console.timeEnd("► rowCount");
  console.log("\n");
}
