import type { SendMessageResult } from "@ton-community/sandbox";
import { writable } from "svelte/store";
import type { Contract } from "ton-core";

interface Store {
  markdown: string;
  tactCode: string;
  deploy: () => Promise<[Contract, SendMessageResult[]]>;
  messages: { [message: string]: () => Promise<SendMessageResult[]> };
  getters: { [getter: string]: () => Promise<any> };
  prev?: {
    name: string;
    id: string;
  };
  next?: {
    name: string;
    id: string;
  };
}

export default writable({
  markdown: "",
  tactCode: "",
  deploy: () => {},
  messages: {},
  getters: {},
} as Store);
