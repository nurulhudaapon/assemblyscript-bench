# AssemblyScript vs JavaScript Benchmark

```sh
◄◄◄◄◄◄ JavaScript ►►►►►►

► generateRandomCsv: 2.167s
► rowCount: 32.465ms
► parseCsvToObject: 5.431ms

◄◄◄◄◄◄ AssemblyScript ►►►►►

► generateRandomCsv: 3.354s
► rowCount: 692.769ms
► parseCsvToObject: 92.419ms
```

## Run

```sh
npm i
npm run asbuild
npm run benchmark
```
