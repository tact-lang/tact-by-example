import type { SendMessageResult } from "@ton-community/sandbox";
import { writable } from "svelte/store";

interface Store {
  markdown: string;
  tactCode: string;
  deploy: () => Promise<SendMessageResult[]>;
  messages: { [message: string]: () => Promise<SendMessageResult[]> };
  getters: { [getter: string]: () => Promise<any> };
}

export default writable({
  markdown: "",
  tactCode: "",
  deploy: () => {},
  messages: {},
  getters: {},
} as Store);
