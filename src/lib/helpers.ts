import { Address, Slice, Cell, Dictionary } from "ton-core";
import examples from "../routes/(examples)/examples.json";

export function getExample(page: string) {
  let i;
  for (i = 0; i < examples.length; i++) {
    if (page.includes(examples[i].id)) break;
  }
  return {
    self: examples[i],
    prev: examples[i - 1],
    next: examples[i + 1],
  };
}

export function convertToText(obj: any): string {
  //create an array that will later be joined into a string.
  var string = [];

  //is object
  //    Both arrays and objects seem to return "object"
  //    when typeof(obj) is applied to them. So instead
  //    I am checking to see if they have the property
  //    join, which normal objects don't have but
  //    arrays do.
  if (obj == undefined) {
    return String(obj);
  } else if (typeof obj == "object" && obj.join == undefined) {
    if (obj instanceof Address) return obj.toString();
    if (obj instanceof Slice) return obj.toString();
    if (obj instanceof Cell) return obj.toString();
    if (obj instanceof Dictionary) {
      const items = [];
      for (const key of obj.keys()) items.push(`${convertToText(key)}: ${convertToText(obj.get(key))}`);
      const itemsStr = items.join(", ");
      return itemsStr ? `{ ${itemsStr} }` : `{}`;
    }

    for (const prop in obj) {
      if (obj.hasOwnProperty(prop)) string.push(prop + ": " + convertToText(obj[prop]));
    }
    return "{" + string.join(", ") + "}";

    //is array
  } else if (typeof obj == "object" && !(obj.join == undefined)) {
    for (const prop in obj) {
      string.push(convertToText(obj[prop]));
    }
    return "[" + string.join(",") + "]";

    //is function
  } else if (typeof obj == "function") {
    string.push(obj.toString());

    //all other values can be done with JSON.stringify
  } else {
    if (typeof obj == "string") string.push(JSON.stringify(obj));
    else if (typeof obj == "bigint") string.push(obj.toString());
    else string.push(obj.toString());
  }

  return string.join(",");
}
