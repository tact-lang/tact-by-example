import { writable } from "svelte/store";

interface Store {
  markdown: string;
  tactCode: string;
  deploy: () => Promise<void>;
  messages: { [message: string]: () => Promise<void> };
  getters: { [getter: string]: () => Promise<void> };
}

export default writable({
  markdown: "",
  tactCode: "",
  deploy: () => {},
  messages: {},
  getters: {},
} as Store);
