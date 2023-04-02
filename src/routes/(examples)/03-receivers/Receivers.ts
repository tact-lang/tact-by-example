import {
  Cell,
  Slice,
  Address,
  Builder,
  beginCell,
  ComputeError,
  TupleItem,
  TupleReader,
  Dictionary,
  contractAddress,
  ContractProvider,
  Sender,
  Contract,
  ContractABI,
  TupleBuilder,
  DictionaryValue,
} from "ton-core";

export type StateInit = {
  $$type: "StateInit";
  code: Cell;
  data: Cell;
};

export function storeStateInit(src: StateInit) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeRef(src.code);
    b_0.storeRef(src.data);
  };
}

export function loadStateInit(slice: Slice) {
  let sc_0 = slice;
  let _code = sc_0.loadRef();
  let _data = sc_0.loadRef();
  return { $$type: "StateInit" as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
  let _code = source.readCell();
  let _data = source.readCell();
  return { $$type: "StateInit" as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
  let builder = new TupleBuilder();
  builder.writeCell(source.code);
  builder.writeCell(source.data);
  return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeStateInit(src)).endCell());
    },
    parse: (src) => {
      return loadStateInit(src.loadRef().beginParse());
    },
  };
}

export type Context = {
  $$type: "Context";
  bounced: boolean;
  sender: Address;
  value: bigint;
  raw: Cell;
};

export function storeContext(src: Context) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeBit(src.bounced);
    b_0.storeAddress(src.sender);
    b_0.storeInt(src.value, 257);
    b_0.storeRef(src.raw);
  };
}

export function loadContext(slice: Slice) {
  let sc_0 = slice;
  let _bounced = sc_0.loadBit();
  let _sender = sc_0.loadAddress();
  let _value = sc_0.loadIntBig(257);
  let _raw = sc_0.loadRef();
  return { $$type: "Context" as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadTupleContext(source: TupleReader) {
  let _bounced = source.readBoolean();
  let _sender = source.readAddress();
  let _value = source.readBigNumber();
  let _raw = source.readCell();
  return { $$type: "Context" as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function storeTupleContext(source: Context) {
  let builder = new TupleBuilder();
  builder.writeBoolean(source.bounced);
  builder.writeAddress(source.sender);
  builder.writeNumber(source.value);
  builder.writeSlice(source.raw);
  return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeContext(src)).endCell());
    },
    parse: (src) => {
      return loadContext(src.loadRef().beginParse());
    },
  };
}

export type SendParameters = {
  $$type: "SendParameters";
  bounce: boolean;
  to: Address;
  value: bigint;
  mode: bigint;
  body: Cell | null;
  code: Cell | null;
  data: Cell | null;
};

export function storeSendParameters(src: SendParameters) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeBit(src.bounce);
    b_0.storeAddress(src.to);
    b_0.storeInt(src.value, 257);
    b_0.storeInt(src.mode, 257);
    if (src.body !== null && src.body !== undefined) {
      b_0.storeBit(true).storeRef(src.body);
    } else {
      b_0.storeBit(false);
    }
    if (src.code !== null && src.code !== undefined) {
      b_0.storeBit(true).storeRef(src.code);
    } else {
      b_0.storeBit(false);
    }
    if (src.data !== null && src.data !== undefined) {
      b_0.storeBit(true).storeRef(src.data);
    } else {
      b_0.storeBit(false);
    }
  };
}

export function loadSendParameters(slice: Slice) {
  let sc_0 = slice;
  let _bounce = sc_0.loadBit();
  let _to = sc_0.loadAddress();
  let _value = sc_0.loadIntBig(257);
  let _mode = sc_0.loadIntBig(257);
  let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
  let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
  let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
  return { $$type: "SendParameters" as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadTupleSendParameters(source: TupleReader) {
  let _bounce = source.readBoolean();
  let _to = source.readAddress();
  let _value = source.readBigNumber();
  let _mode = source.readBigNumber();
  let _body = source.readCellOpt();
  let _code = source.readCellOpt();
  let _data = source.readCellOpt();
  return { $$type: "SendParameters" as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function storeTupleSendParameters(source: SendParameters) {
  let builder = new TupleBuilder();
  builder.writeBoolean(source.bounce);
  builder.writeAddress(source.to);
  builder.writeNumber(source.value);
  builder.writeNumber(source.mode);
  builder.writeCell(source.body);
  builder.writeCell(source.code);
  builder.writeCell(source.data);
  return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeSendParameters(src)).endCell());
    },
    parse: (src) => {
      return loadSendParameters(src.loadRef().beginParse());
    },
  };
}

export type Deploy = {
  $$type: "Deploy";
  queryId: bigint;
};

export function storeDeploy(src: Deploy) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2490013878, 32);
    b_0.storeUint(src.queryId, 64);
  };
}

export function loadDeploy(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2490013878) {
    throw Error("Invalid prefix");
  }
  let _queryId = sc_0.loadUintBig(64);
  return { $$type: "Deploy" as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
  let _queryId = source.readBigNumber();
  return { $$type: "Deploy" as const, queryId: _queryId };
}

function storeTupleDeploy(source: Deploy) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  return builder.build();
}

function dictValueParserDeploy(): DictionaryValue<Deploy> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeDeploy(src)).endCell());
    },
    parse: (src) => {
      return loadDeploy(src.loadRef().beginParse());
    },
  };
}

export type DeployOk = {
  $$type: "DeployOk";
  queryId: bigint;
};

export function storeDeployOk(src: DeployOk) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2952335191, 32);
    b_0.storeUint(src.queryId, 64);
  };
}

export function loadDeployOk(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2952335191) {
    throw Error("Invalid prefix");
  }
  let _queryId = sc_0.loadUintBig(64);
  return { $$type: "DeployOk" as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
  let _queryId = source.readBigNumber();
  return { $$type: "DeployOk" as const, queryId: _queryId };
}

function storeTupleDeployOk(source: DeployOk) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  return builder.build();
}

function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeDeployOk(src)).endCell());
    },
    parse: (src) => {
      return loadDeployOk(src.loadRef().beginParse());
    },
  };
}

export type Add = {
  $$type: "Add";
  amount: bigint;
};

export function storeAdd(src: Add) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2278832834, 32);
    b_0.storeUint(src.amount, 32);
  };
}

export function loadAdd(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2278832834) {
    throw Error("Invalid prefix");
  }
  let _amount = sc_0.loadUintBig(32);
  return { $$type: "Add" as const, amount: _amount };
}

function loadTupleAdd(source: TupleReader) {
  let _amount = source.readBigNumber();
  return { $$type: "Add" as const, amount: _amount };
}

function storeTupleAdd(source: Add) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.amount);
  return builder.build();
}

function dictValueParserAdd(): DictionaryValue<Add> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeAdd(src)).endCell());
    },
    parse: (src) => {
      return loadAdd(src.loadRef().beginParse());
    },
  };
}

export type Subtract = {
  $$type: "Subtract";
  amount: bigint;
};

export function storeSubtract(src: Subtract) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(1552846265, 32);
    b_0.storeUint(src.amount, 32);
  };
}

export function loadSubtract(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 1552846265) {
    throw Error("Invalid prefix");
  }
  let _amount = sc_0.loadUintBig(32);
  return { $$type: "Subtract" as const, amount: _amount };
}

function loadTupleSubtract(source: TupleReader) {
  let _amount = source.readBigNumber();
  return { $$type: "Subtract" as const, amount: _amount };
}

function storeTupleSubtract(source: Subtract) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.amount);
  return builder.build();
}

function dictValueParserSubtract(): DictionaryValue<Subtract> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeSubtract(src)).endCell());
    },
    parse: (src) => {
      return loadSubtract(src.loadRef().beginParse());
    },
  };
}

export type MultiMath = {
  $$type: "MultiMath";
  add: bigint;
  subtract: bigint;
  multiply: bigint;
};

export function storeMultiMath(src: MultiMath) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2221071617, 32);
    b_0.storeUint(src.add, 32);
    b_0.storeUint(src.subtract, 32);
    b_0.storeUint(src.multiply, 32);
  };
}

export function loadMultiMath(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2221071617) {
    throw Error("Invalid prefix");
  }
  let _add = sc_0.loadUintBig(32);
  let _subtract = sc_0.loadUintBig(32);
  let _multiply = sc_0.loadUintBig(32);
  return { $$type: "MultiMath" as const, add: _add, subtract: _subtract, multiply: _multiply };
}

function loadTupleMultiMath(source: TupleReader) {
  let _add = source.readBigNumber();
  let _subtract = source.readBigNumber();
  let _multiply = source.readBigNumber();
  return { $$type: "MultiMath" as const, add: _add, subtract: _subtract, multiply: _multiply };
}

function storeTupleMultiMath(source: MultiMath) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.add);
  builder.writeNumber(source.subtract);
  builder.writeNumber(source.multiply);
  return builder.build();
}

function dictValueParserMultiMath(): DictionaryValue<MultiMath> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeMultiMath(src)).endCell());
    },
    parse: (src) => {
      return loadMultiMath(src.loadRef().beginParse());
    },
  };
}

type Receivers_init_args = {
  $$type: "Receivers_init_args";
};

function initReceivers_init_args(src: Receivers_init_args) {
  return (builder: Builder) => {
    let b_0 = builder;
  };
}

async function Receivers_init() {
  const __code = Cell.fromBase64(
    "te6ccgECEwEAAxwAART/APSkE/S88sgLAQIBYgIDApTQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxZ2zwwyPhDAcx/AcoAAQHKP8ntVBAEAgFYCgsD4O2i7ftwIddJwh+VMCDXCx/eApJbf+AhghCH1DrCuo4UMdMfAYIQh9Q6wrry4IHTHwExoH/gIYIQXI6NubqOFDHTHwGCEFyOjbm68uCB0x8BMaF/4CGCEIRi3QG64wIhghCUapi2uuMCAcAAkTDjDXAFBgcAPjHTHwGCEIRi3QG68uCB0x/TH9MfVSBsE1qgWKEBqH8BXDHTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/Jf/hCcFgDgEIBbW3bPH8IAKz5ASCC8MT41yMS7f3vW3vseDO9uxYtFRG9eKkSrtDyY3r2VXKuupUwpH/bMeCC8IWRWxv1lD/ShTu2YDOKys+uOdH3NVSc75IiVamUWsw+upSlf9sx4AHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAJAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMALm7vRgnBc7D1dLK57HoTsOdZKhRtmgnCd1jUtK2R8syLTry398WI5gnAgVcAbgGdjlM5YOq5HJbLDgnAb1J3vlUWW8cdT094FWcMmgnCdl05as07LczoOlm2UZuikgCAUgMDQARsK+7UTQ0gABgAgFqDg8Ac6d3Ghq0uDM5nReXqLanMJkkPKC4rBq2uRqlqbIluzksmLesJiUZoasZMK0bIxikJDOYujq6o7uqmcECDaWBtnm2eGMQEQE87UTQ1AH4Y9IAAZTSPwEx4DD4KNcLCoMJuvLgids8EgACIAACcA==",
  );
  const __system = Cell.fromBase64(
    "te6cckECFQEAAyYAAQHAAQEFofm/AgEU/wD0pBP0vPLICwMCAWIMBAIBWAsFAgFICgYCAWoJBwINpYG2ebZ4YxMIAAIgAHOndxoatLgzOZ0Xl6i2pzCZJDyguKwatrkapamyJbs5LJi3rCYlGaGrGTCtGyMYpCQzmLo6uqO7qpnBABGwr7tRNDSAAGAAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSAKU0AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8Wds8MMj4QwHMfwHKAAEByj/J7VQTDQPg7aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEIfUOsK6jhQx0x8BghCH1DrCuvLggdMfATGgf+AhghBcjo25uo4UMdMfAYIQXI6Nubry4IHTHwExoX/gIYIQhGLdAbrjAiGCEJRqmLa64wIBwACRMOMNcBIPDgCs+QEggvDE+NcjEu3971t77HgzvbsWLRURvXipEq7Q8mN69lVyrrqVMKR/2zHggvCFkVsb9ZQ/0oU7tmAzisrPrjnR9zVUnO+SIlWplFrMPrqUpX/bMeABXDHTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/Jf/hCcFgDgEIBbW3bPH8QAcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7ABEAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwAPjHTHwGCEIRi3QG68uCB0x/TH9MfVSBsE1qgWKEBqH8BPO1E0NQB+GPSAAGU0j8BMeAw+CjXCwqDCbry4InbPBQAAnABQhB2",
  );
  let builder = beginCell();
  builder.storeRef(__system);
  builder.storeUint(0, 1);
  initReceivers_init_args({ $$type: "Receivers_init_args" })(builder);
  const __data = builder.endCell();
  return { code: __code, data: __data };
}

const Receivers_errors: { [key: number]: { message: string } } = {
  2: { message: `Stack undeflow` },
  3: { message: `Stack overflow` },
  4: { message: `Integer overflow` },
  5: { message: `Integer out of expected range` },
  6: { message: `Invalid opcode` },
  7: { message: `Type check error` },
  8: { message: `Cell overflow` },
  9: { message: `Cell underflow` },
  10: { message: `Dictionary error` },
  13: { message: `Out of gas error` },
  32: { message: `Method ID not found` },
  34: { message: `Action is invalid or not supported` },
  37: { message: `Not enough TON` },
  38: { message: `Not enough extra-currencies` },
  128: { message: `Null reference exception` },
  129: { message: `Invalid serialization prefix` },
  130: { message: `Invalid incoming message` },
  131: { message: `Constraints error` },
  132: { message: `Access denied` },
  133: { message: `Contract stopped` },
  134: { message: `Invalid argument` },
  135: { message: `Code of a contract was not found` },
  136: { message: `Invalid address` },
  137: { message: `Masterchain support is not enabled for this contract` },
};

export class Receivers implements Contract {
  static async init() {
    return await Receivers_init();
  }

  static async fromInit() {
    const init = await Receivers_init();
    const address = contractAddress(0, init);
    return new Receivers(address, init);
  }

  static fromAddress(address: Address) {
    return new Receivers(address);
  }

  readonly address: Address;
  readonly init?: { code: Cell; data: Cell };
  readonly abi: ContractABI = {
    types: [
      { name: "StateInit", header: null, fields: [] },
      { name: "Context", header: null, fields: [] },
      { name: "SendParameters", header: null, fields: [] },
      { name: "Deploy", header: 2490013878, fields: [] },
      { name: "DeployOk", header: 2952335191, fields: [] },
      { name: "Add", header: 2278832834, fields: [] },
      { name: "Subtract", header: 1552846265, fields: [] },
      { name: "MultiMath", header: 2221071617, fields: [] },
    ],
    errors: Receivers_errors,
  };

  private constructor(address: Address, init?: { code: Cell; data: Cell }) {
    this.address = address;
    this.init = init;
  }

  async send(
    provider: ContractProvider,
    via: Sender,
    args: { value: bigint; bounce?: boolean | null | undefined },
    message: Add | Subtract | MultiMath | "increment" | "decrement" | Deploy,
  ) {
    let body: Cell | null = null;
    if (message && typeof message === "object" && !(message instanceof Slice) && message.$$type === "Add") {
      body = beginCell().store(storeAdd(message)).endCell();
    }
    if (message && typeof message === "object" && !(message instanceof Slice) && message.$$type === "Subtract") {
      body = beginCell().store(storeSubtract(message)).endCell();
    }
    if (message && typeof message === "object" && !(message instanceof Slice) && message.$$type === "MultiMath") {
      body = beginCell().store(storeMultiMath(message)).endCell();
    }
    if (message === "increment") {
      body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
    }
    if (message === "decrement") {
      body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
    }
    if (message && typeof message === "object" && !(message instanceof Slice) && message.$$type === "Deploy") {
      body = beginCell().store(storeDeploy(message)).endCell();
    }
    if (body === null) {
      throw new Error("Invalid message type");
    }

    await provider.internal(via, { ...args, body: body });
  }

  async getValue(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get("value", builder.build())).stack;
    let result = source.readBigNumber();
    return result;
  }
}
