import { writable } from 'svelte/store';

interface Store {
  tactCode: string;
  deploy: () => Promise<void>;
  messages: {[message: string]: () => Promise<void> };
  getters: {[getter: string]: () => Promise<void> };
}

export default writable({
  tactCode: "",
  deploy: () => {},
  messages: {},
  getters: {},
} as Store);