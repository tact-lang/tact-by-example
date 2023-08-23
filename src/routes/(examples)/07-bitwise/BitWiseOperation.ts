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
  ABIType,
  ABIGetter,
  ABIReceiver,
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

type BitWiseOperation_init_args = {
  $$type: "BitWiseOperation_init_args";
};

function initBitWiseOperation_init_args(src: BitWiseOperation_init_args) {
  return (builder: Builder) => {
    let b_0 = builder;
  };
}

async function BitWiseOperation_init() {
  const __code = Cell.fromBase64(
    "te6ccgECGgEAAdkAART/APSkE/S88sgLAQIBYgIDArbQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVE9s88uCCyPhDAcx/AcoAVTBQNMoAygCBAQHPAIEBAc8Aye1UFwQCASAFBgAaAZIwf+Ag10kxwh8wcAIBIAcIAgEgDg8CEbn07bPNs8bEGBcJAgEgCgsABiGrAAIRtDwbZ5tnjYgwFwwCEbfGm2ebZ42IMBcNAAwjkSKRcOIABFyxAgFYEBECAUgTFAIRs2v2zzbPGxBgFxIAubL0YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIAAGIaoAABGwr7tRNDSAAGACAWoVFgBzp3caGrS4MzmdF5eotrKYsjw0KjepqywhMrCppCYbma0iu7eiJC0muZy1JDy5saQquzMnNyoZpZkrwQIPpMm2ebZ42IMXGAFa7UTQ1AH4Y9IAAY4S0gDSAIEBAdcAgQEB1wBVMGwU4DD4KNcLCoMJuvLgids8GQAEXLAACH9wdXM=",
  );
  const __system = Cell.fromBase64(
    "te6cckECHAEAAeMAAQHAAQEFoYftAgEU/wD0pBP0vPLICwMCAWIYBAIBIBAFAgEgDAYCAUgLBwIBagoIAg+kybZ5tnjYgxoJAARcsABzp3caGrS4MzmdF5eotrKYsjw0KjepqywhMrCppCYbma0iu7eiJC0muZy1JDy5saQquzMnNyoZpZkrwQARsK+7UTQ0gABgAgFYDg0AubL0YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIAIRs2v2zzbPGxBgGg8ABiGqAAIBIBYRAgEgFBICEbfGm2ebZ42IMBoTAARcsQIRtDwbZ5tnjYgwGhUADCORIpFw4gIRufTts82zxsQYGhcABiGrAAK20AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8VRPbPPLggsj4QwHMfwHKAFUwUDTKAMoAgQEBzwCBAQHPAMntVBoZABoBkjB/4CDXSTHCHzBwAVrtRNDUAfhj0gABjhLSANIAgQEB1wCBAQHXAFUwbBTgMPgo1wsKgwm68uCJ2zwbAAh/cHVziIPf+w==",
  );
  let builder = beginCell();
  builder.storeRef(__system);
  builder.storeUint(0, 1);
  initBitWiseOperation_init_args({ $$type: "BitWiseOperation_init_args" })(builder);
  const __data = builder.endCell();
  return { code: __code, data: __data };
}

const BitWiseOperation_errors: { [key: number]: { message: string } } = {
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

const BitWiseOperation_types: ABIType[] = [
  {
    name: "StateInit",
    header: null,
    fields: [
      { name: "code", type: { kind: "simple", type: "cell", optional: false } },
      { name: "data", type: { kind: "simple", type: "cell", optional: false } },
    ],
  },
  {
    name: "Context",
    header: null,
    fields: [
      { name: "bounced", type: { kind: "simple", type: "bool", optional: false } },
      { name: "sender", type: { kind: "simple", type: "address", optional: false } },
      { name: "value", type: { kind: "simple", type: "int", optional: false, format: 257 } },
      { name: "raw", type: { kind: "simple", type: "slice", optional: false } },
    ],
  },
  {
    name: "SendParameters",
    header: null,
    fields: [
      { name: "bounce", type: { kind: "simple", type: "bool", optional: false } },
      { name: "to", type: { kind: "simple", type: "address", optional: false } },
      { name: "value", type: { kind: "simple", type: "int", optional: false, format: 257 } },
      { name: "mode", type: { kind: "simple", type: "int", optional: false, format: 257 } },
      { name: "body", type: { kind: "simple", type: "cell", optional: true } },
      { name: "code", type: { kind: "simple", type: "cell", optional: true } },
      { name: "data", type: { kind: "simple", type: "cell", optional: true } },
    ],
  },
];

const BitWiseOperation_getters: ABIGetter[] = [
  { name: "Bool_and", arguments: [], returnType: { kind: "simple", type: "bool", optional: false } },
  { name: "int_and", arguments: [], returnType: { kind: "simple", type: "int", optional: false, format: 257 } },
  { name: "int_or", arguments: [], returnType: { kind: "simple", type: "int", optional: false, format: 257 } },
  { name: "int_left_shift", arguments: [], returnType: { kind: "simple", type: "int", optional: false, format: 257 } },
  { name: "int_right_shift", arguments: [], returnType: { kind: "simple", type: "int", optional: false, format: 257 } },
];

const BitWiseOperation_receivers: ABIReceiver[] = [];

export class BitWiseOperation implements Contract {
  static async init() {
    return await BitWiseOperation_init();
  }

  static async fromInit() {
    const init = await BitWiseOperation_init();
    const address = contractAddress(0, init);
    return new BitWiseOperation(address, init);
  }

  static fromAddress(address: Address) {
    return new BitWiseOperation(address);
  }

  readonly address: Address;
  readonly init?: { code: Cell; data: Cell };
  readonly abi: ContractABI = {
    types: [
      { name: "StateInit", header: null, fields: [] },
      { name: "Context", header: null, fields: [] },
      { name: "SendParameters", header: null, fields: [] },
    ],
    types: BitWiseOperation_types,
    getters: BitWiseOperation_getters,
    receivers: BitWiseOperation_receivers,
    errors: BitWiseOperation_errors,
  };

  private constructor(address: Address, init?: { code: Cell; data: Cell }) {
    this.address = address;
    this.init = init;
  }

  async send(provider: ContractProvider, via: Sender, args: { value: bigint; bounce?: boolean | null | undefined }, message: null) {
    let body: Cell | null = null;
    if (message === null) {
      body = new Cell();
    }
    if (body === null) {
      throw new Error("Invalid message type");
    }

    await provider.internal(via, { ...args, body: body });
  }

  async getBoolAnd(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get("Bool_and", builder.build())).stack;
    let result = source.readBoolean();
    return result;
  }

  async getIntAnd(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get("int_and", builder.build())).stack;
    let result = source.readBigNumber();
    return result;
  }

  async getIntOr(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get("int_or", builder.build())).stack;
    let result = source.readBigNumber();
    return result;
  }

  async getIntLeftShift(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get("int_left_shift", builder.build())).stack;
    let result = source.readBigNumber();
    return result;
  }

  async getIntRightShift(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get("int_right_shift", builder.build())).stack;
    let result = source.readBigNumber();
    return result;
  }
}
