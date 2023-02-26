import examples from "../routes/examples.json";
import path from "path";

export function getExample(page: string) {
  const id = path.basename(path.dirname(page));
  let i;
  for (i = 0; i < examples.length; i++) {
    if (examples[i].id == id) break;
  }
  return {
    self: examples[i],
    prev: examples[i - 1],
    next: examples[i + 1],
  };
}
