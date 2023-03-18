import * as fs from "fs";

console.log(`\nRunning tact post build script`);

const files = fs.readdirSync("./tact-output");
for (const file of files) {
  if (!file.endsWith(".ts")) continue;
  if (file.endsWith(".client.ts")) continue;
  const [example, contract] = file.split(".")[0].split("_");
  if (!fs.existsSync(`./src/routes/(examples)/${example}`)) {
    console.log(`   > WARNING: route (examples)/${example} not found in src`);
    continue;
  }
  let content = editWrapper(file, fs.readFileSync(`./tact-output/${file}`).toString());
  fs.writeFileSync(`./src/routes/(examples)/${example}/${contract}.ts`, content);
  console.log(`   > Moved ${file}`);
}

function editWrapper(file, content) {
  // add missing abi types into the wrapper (currently contains only errors)
  const abiFile = file.split(".")[0] + ".abi";
  const abi = JSON.parse(fs.readFileSync(`./tact-output/${abiFile}`).toString());
  const smallAbi = { types: [] };
  for (const type of abi.types) {
    smallAbi.types.push({ name: type.name, header: type.header, fields: [] });
  }
  const abiTypes = JSON.stringify(smallAbi.types);
  content = content.replace(`readonly abi: ContractABI = {`, `readonly abi: ContractABI = {\n        types: ${abiTypes},`);

  // return content
  return content;
}
