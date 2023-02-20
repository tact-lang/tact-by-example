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
  content = modifyTypeScriptWrapper(content, contract);
  fs.writeFileSync(`./src/routes/${example}/contract.ts`, content);
  console.log(`   > Moved ${file}`);
}

function modifyTypeScriptWrapper(content, contract) {
  content = content.replace(
    `import { ContractSystem, ContractExecutor } from 'ton-emulator';`,
    `
import { Blockchain, SmartContract } from "@ton-community/sandbox";`,
  );
  content = content.replace(
    `let system = await ContractSystem.create();`,
    `
    /* let system = await ContractSystem.create();`,
  );
  content = content.replace(
    `return { code: codeCell, data };`,
    `
    return { code: codeCell, data }; */

    let code = initCell;
    let data = new Cell();
    let blockchain = await Blockchain.create();
    let executor = SmartContract.create(blockchain, { address: contractAddress(0, { code, data }), code, data, balance: 0n });
    let res = await executor.get('init', __stack);
    if (res.exitCode !== 0 && res.exitCode !== 1) {
        if (${contract}_errors[res.exitCode]) {
            throw new ComputeError(${contract}_errors[res.exitCode].message, res.exitCode, { logs: res.logs });
        } else {
            throw new ComputeError('Exit code: ' + res.exitCode, res.exitCode, { logs: res.logs });
        }
    }

    return { code: codeCell, data: res.stackReader.readCell() };`,
  );
  return content;
}
