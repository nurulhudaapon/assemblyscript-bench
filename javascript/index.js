export function parseCsvToObject(csv) {
  const lines = csv.split("\n");
  const result = new Array(lines.length);

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const values = line.split(",");
    const obj = new Array(values.length);

    for (let j = 0; j < values.length; j++) {
      obj[j] = values[j];
    }

    result[i] = obj;
  }

  return result;
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

export function testSpeed() {
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
  rowCount(jsCsv);
  console.timeEnd("► rowCount");
}
