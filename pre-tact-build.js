import * as fs from "fs";
import examples from "./src/routes/(examples)/examples.json" assert { type: "json" };

console.log(`\nRunning tact pre build script`);

let tactConfig = {
  projects: [],
};

for (const example of examples) {
  tactConfig.projects.push({
    name: example.id,
    path: `./src/routes/(examples)/${example.id}/contract.tact`,
    output: "./tact-output",
    options: {
      debug: true,
      external: true,
    },
  });
}
fs.writeFileSync("./tact.config.json", JSON.stringify(tactConfig, null, 2));
