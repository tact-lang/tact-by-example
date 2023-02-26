import * as fs from "fs";

console.log(`\nRunning tact post build script`);

const files = fs.readdirSync("./tact-output");
for (const file of files) {
  if (!file.endsWith(".ts")) continue;
  if (file.endsWith(".client.ts")) continue;
  const [example, contract] = file.split(".")[0].split("_");
  if (!fs.existsSync(`./src/routes/${example}`)) {
    console.log(`   > WARNING: route ${example} not found in src`);
    continue;
  }
  let content = fs.readFileSync(`./tact-output/${file}`).toString();
  fs.writeFileSync(`./src/routes/${example}/contract.ts`, content);
  console.log(`   > Moved ${file}`);
}
