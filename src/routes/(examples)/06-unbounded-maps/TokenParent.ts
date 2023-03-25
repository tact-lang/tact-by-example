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

export type Metadata = {
  $$type: "Metadata";
  symbol: string;
  totalSupply: bigint;
};

export function storeMetadata(src: Metadata) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeStringRefTail(src.symbol);
    b_0.storeInt(src.totalSupply, 257);
  };
}

export function loadMetadata(slice: Slice) {
  let sc_0 = slice;
  let _symbol = sc_0.loadStringRefTail();
  let _totalSupply = sc_0.loadIntBig(257);
  return { $$type: "Metadata" as const, symbol: _symbol, totalSupply: _totalSupply };
}

function loadTupleMetadata(source: TupleReader) {
  let _symbol = source.readString();
  let _totalSupply = source.readBigNumber();
  return { $$type: "Metadata" as const, symbol: _symbol, totalSupply: _totalSupply };
}

function storeTupleMetadata(source: Metadata) {
  let builder = new TupleBuilder();
  builder.writeString(source.symbol);
  builder.writeNumber(source.totalSupply);
  return builder.build();
}

function dictValueParserMetadata(): DictionaryValue<Metadata> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeMetadata(src)).endCell());
    },
    parse: (src) => {
      return loadMetadata(src.loadRef().beginParse());
    },
  };
}

export type Transfer = {
  $$type: "Transfer";
  amount: bigint;
  to: Address;
};

export function storeTransfer(src: Transfer) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(1943715420, 32);
    b_0.storeCoins(src.amount);
    b_0.storeAddress(src.to);
  };
}

export function loadTransfer(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 1943715420) {
    throw Error("Invalid prefix");
  }
  let _amount = sc_0.loadCoins();
  let _to = sc_0.loadAddress();
  return { $$type: "Transfer" as const, amount: _amount, to: _to };
}

function loadTupleTransfer(source: TupleReader) {
  let _amount = source.readBigNumber();
  let _to = source.readAddress();
  return { $$type: "Transfer" as const, amount: _amount, to: _to };
}

function storeTupleTransfer(source: Transfer) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.amount);
  builder.writeAddress(source.to);
  return builder.build();
}

function dictValueParserTransfer(): DictionaryValue<Transfer> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeTransfer(src)).endCell());
    },
    parse: (src) => {
      return loadTransfer(src.loadRef().beginParse());
    },
  };
}

export type InternalAddTokens = {
  $$type: "InternalAddTokens";
  amount: bigint;
  origin: Address;
};

export function storeInternalAddTokens(src: InternalAddTokens) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(4162046107, 32);
    b_0.storeCoins(src.amount);
    b_0.storeAddress(src.origin);
  };
}

export function loadInternalAddTokens(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 4162046107) {
    throw Error("Invalid prefix");
  }
  let _amount = sc_0.loadCoins();
  let _origin = sc_0.loadAddress();
  return { $$type: "InternalAddTokens" as const, amount: _amount, origin: _origin };
}

function loadTupleInternalAddTokens(source: TupleReader) {
  let _amount = source.readBigNumber();
  let _origin = source.readAddress();
  return { $$type: "InternalAddTokens" as const, amount: _amount, origin: _origin };
}

function storeTupleInternalAddTokens(source: InternalAddTokens) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.amount);
  builder.writeAddress(source.origin);
  return builder.build();
}

function dictValueParserInternalAddTokens(): DictionaryValue<InternalAddTokens> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeInternalAddTokens(src)).endCell());
    },
    parse: (src) => {
      return loadInternalAddTokens(src.loadRef().beginParse());
    },
  };
}

type TokenParent_init_args = {
  $$type: "TokenParent_init_args";
};

function initTokenParent_init_args(src: TokenParent_init_args) {
  return (builder: Builder) => {
    let b_0 = builder;
  };
}

async function TokenParent_init() {
  const __code = Cell.fromBase64(
    "te6ccgECEwEAA8UAART/APSkE/S88sgLAQIBYgIDAgLLBAUCASAJCgPP0AdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GLtRNDUAfhj0gABmdQB0AH6AFlsEo6OMPgo1wsKgwm68uCJ2zziWts8MIOBgcA7aGBaHoCGDaAwJD2gMAIege30PlwQ4DAkPaRAUAIegvkAOR6AGSA5jgA5QAgAayQa6TAgIXdeXBEEGuFhRBBhN0QwIJ/3Vj5cERBhN15cETniwCQa6TAgIXdeXBEEGuFhRBBhN0QwIJ/3Vj5cERBhN15cETni2TAAYJwIddJwh+VMCDXCx/eApJbf+ABghCUapi2uo6i0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yds8f+AwcAgALsj4QwHMfwHKAFnIWM8WyVjMAfoCye1UARp/+EJwWAOAQgFtbds8EQIBIAsMALm93owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwTgN6k73yqLLeOOp6e8CrOGTQThOy6ctWadluZ0HSzbKM3RSQCl7uzEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IntRNDUAfhj0gABmdQB0AH6AFlsEo6OMPgo1wsKgwm68uCJ2zziWNs8gODQFPums+1E0NQB+GPSAAGZ1AHQAfoAWWwSjo4w+CjXCwqDCbry4InbPOKA4BFmwh+EP4KFjwE9s8EAEmi0U0hJQoghh0alKIAPhCUhDbPA8CnvhD+ChY8BNc2zz4KBTIWYIQ+BPIm1ADyx8B+gIBINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxbJggnJw4Bacll/BkVV2zwQEQCMcFnIcAHLAXMBywFwAcsAEszMyfkAyHIBywFwAcsAEsoHy//J0CDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiQHOyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WUAP6AnABymgjbrMlbrOxlzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7ABIAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMw=",
  );
  const __system = Cell.fromBase64(
    "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",
  );
  let builder = beginCell();
  builder.storeRef(__system);
  builder.storeUint(0, 1);
  initTokenParent_init_args({ $$type: "TokenParent_init_args" })(builder);
  const __data = builder.endCell();
  return { code: __code, data: __data };
}

const TokenParent_errors: { [key: number]: { message: string } } = {
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
  20537: { message: `Sibling only` },
  49469: { message: `Access denied` },
  54404: { message: `Parent only` },
  54615: { message: `Insufficient balance` },
};

export class TokenParent implements Contract {
  static async init() {
    return await TokenParent_init();
  }

  static async fromInit() {
    const init = await TokenParent_init();
    const address = contractAddress(0, init);
    return new TokenParent(address, init);
  }

  static fromAddress(address: Address) {
    return new TokenParent(address);
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
      { name: "Metadata", header: null, fields: [] },
      { name: "Transfer", header: 1943715420, fields: [] },
      { name: "InternalAddTokens", header: 4162046107, fields: [] },
    ],
    errors: TokenParent_errors,
  };

  private constructor(address: Address, init?: { code: Cell; data: Cell }) {
    this.address = address;
    this.init = init;
  }

  async send(provider: ContractProvider, via: Sender, args: { value: bigint; bounce?: boolean | null | undefined }, message: Deploy) {
    let body: Cell | null = null;
    if (message && typeof message === "object" && !(message instanceof Slice) && message.$$type === "Deploy") {
      body = beginCell().store(storeDeploy(message)).endCell();
    }
    if (body === null) {
      throw new Error("Invalid message type");
    }

    await provider.internal(via, { ...args, body: body });
  }

  async getMetadata(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get("metadata", builder.build())).stack;
    const result = loadTupleMetadata(source);
    return result;
  }

  async getChildAddress(provider: ContractProvider, owner: Address) {
    let builder = new TupleBuilder();
    builder.writeAddress(owner);
    let source = (await provider.get("childAddress", builder.build())).stack;
    let result = source.readAddress();
    return result;
  }
}
