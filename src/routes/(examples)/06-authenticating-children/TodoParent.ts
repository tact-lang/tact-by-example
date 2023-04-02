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

export type HiFromParent = {
  $$type: "HiFromParent";
  greeting: string;
};

export function storeHiFromParent(src: HiFromParent) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(3517475402, 32);
    b_0.storeStringRefTail(src.greeting);
  };
}

export function loadHiFromParent(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 3517475402) {
    throw Error("Invalid prefix");
  }
  let _greeting = sc_0.loadStringRefTail();
  return { $$type: "HiFromParent" as const, greeting: _greeting };
}

function loadTupleHiFromParent(source: TupleReader) {
  let _greeting = source.readString();
  return { $$type: "HiFromParent" as const, greeting: _greeting };
}

function storeTupleHiFromParent(source: HiFromParent) {
  let builder = new TupleBuilder();
  builder.writeString(source.greeting);
  return builder.build();
}

function dictValueParserHiFromParent(): DictionaryValue<HiFromParent> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeHiFromParent(src)).endCell());
    },
    parse: (src) => {
      return loadHiFromParent(src.loadRef().beginParse());
    },
  };
}

export type HiFromChild = {
  $$type: "HiFromChild";
  fromSeqno: bigint;
  greeting: string;
};

export function storeHiFromChild(src: HiFromChild) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(1237539370, 32);
    b_0.storeUint(src.fromSeqno, 64);
    b_0.storeStringRefTail(src.greeting);
  };
}

export function loadHiFromChild(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 1237539370) {
    throw Error("Invalid prefix");
  }
  let _fromSeqno = sc_0.loadUintBig(64);
  let _greeting = sc_0.loadStringRefTail();
  return { $$type: "HiFromChild" as const, fromSeqno: _fromSeqno, greeting: _greeting };
}

function loadTupleHiFromChild(source: TupleReader) {
  let _fromSeqno = source.readBigNumber();
  let _greeting = source.readString();
  return { $$type: "HiFromChild" as const, fromSeqno: _fromSeqno, greeting: _greeting };
}

function storeTupleHiFromChild(source: HiFromChild) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.fromSeqno);
  builder.writeString(source.greeting);
  return builder.build();
}

function dictValueParserHiFromChild(): DictionaryValue<HiFromChild> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeHiFromChild(src)).endCell());
    },
    parse: (src) => {
      return loadHiFromChild(src.loadRef().beginParse());
    },
  };
}

type TodoParent_init_args = {
  $$type: "TodoParent_init_args";
};

function initTodoParent_init_args(src: TodoParent_init_args) {
  return (builder: Builder) => {
    let b_0 = builder;
  };
}

async function TodoParent_init() {
  const __code = Cell.fromBase64(
    "te6ccgECEwEABFIAART/APSkE/S88sgLAQIBYgIDAo7QAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxZ2zwwMMj4QwHMfwHKAMntVAQFAgFYDxABNO1E0NQB+GPSADCRbeD4KNcLCoMJuvLgids8BgPw7aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEEnDWiq6jpYx0x8BghBJw1oquvLggdM/1AHQEmwS4CGCEJRqmLa6jq4x0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yX/4QnBYA4BCAW1t2zx/4AHAAJEw4w1wBwwIAAJtAuww+EP4KCLbPHBZyHABywFzAcsBcAHLABLMzMn5AMhyAcsBcAHLABLKB8v/ydAg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIggDBPfhCEscF8vSNBZoYW5kbGluZyBoaSBmcm9tIGNoaWxkg/hQw2zz+FDB/CwkBWvkBgvBxkll/MNBNcADYLR2Lzj/mYSWpv8837qLxUky12JrJ2rqOhds8f9sx4AoA3sghwQCYgC0BywcBowHeIYI4Mnyyc0EZ07epqh25jiBwIHGOFAR6qQymMCWoEqAEqgcCpCHAAEUw5jAzqgLPAY4rbwBwjhEjeqkIEm+MAaQDeqkEIMAAFOYzIqUDnFMCb4GmMFjLBwKlWeQwMeLJ0AP2cHOPdqT4Q/goIts8XHBZyHABywFzAcsBcAHLABLMzMn5AMhyAcsBcAHLABLKB8v/ydAg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIi3ZGFybGluZ4yAGCENGoakpYyx/IWM8WyQHMyROCEAX14QBacgJ/BkVV2zzkCwwNAKIC0PQEMG0BgWhBAYAQ9A9vofLghwGBaEEiAoAQ9BfIAcj0AMkBzHABygBAA1kg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxaBAQHPAMkByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsADgACMACYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAC5u70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIAgFIERIAEbCvu1E0NIAAYAB1sm7jQ1aXBmczovL1FtWkhlS2ZxQ0o4QmRxTUZwNGpZQlFqTWVmaGZtdm1xWHRXYU1KWUFqSEdwdlKCA=",
  );
  const __system = Cell.fromBase64(
    "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",
  );
  let builder = beginCell();
  builder.storeRef(__system);
  builder.storeUint(0, 1);
  initTodoParent_init_args({ $$type: "TodoParent_init_args" })(builder);
  const __data = builder.endCell();
  return { code: __code, data: __data };
}

const TodoParent_errors: { [key: number]: { message: string } } = {
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
  49469: { message: `Access denied` },
};

export class TodoParent implements Contract {
  static async init() {
    return await TodoParent_init();
  }

  static async fromInit() {
    const init = await TodoParent_init();
    const address = contractAddress(0, init);
    return new TodoParent(address, init);
  }

  static fromAddress(address: Address) {
    return new TodoParent(address);
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
      { name: "HiFromParent", header: 3517475402, fields: [] },
      { name: "HiFromChild", header: 1237539370, fields: [] },
    ],
    errors: TodoParent_errors,
  };

  private constructor(address: Address, init?: { code: Cell; data: Cell }) {
    this.address = address;
    this.init = init;
  }

  async send(
    provider: ContractProvider,
    via: Sender,
    args: { value: bigint; bounce?: boolean | null | undefined },
    message: "greet 3" | HiFromChild | Deploy,
  ) {
    let body: Cell | null = null;
    if (message === "greet 3") {
      body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
    }
    if (message && typeof message === "object" && !(message instanceof Slice) && message.$$type === "HiFromChild") {
      body = beginCell().store(storeHiFromChild(message)).endCell();
    }
    if (message && typeof message === "object" && !(message instanceof Slice) && message.$$type === "Deploy") {
      body = beginCell().store(storeDeploy(message)).endCell();
    }
    if (body === null) {
      throw new Error("Invalid message type");
    }

    await provider.internal(via, { ...args, body: body });
  }
}
