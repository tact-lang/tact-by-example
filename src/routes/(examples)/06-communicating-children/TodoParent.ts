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

export type FactoryDeploy = {
  $$type: "FactoryDeploy";
  queryId: bigint;
  cashback: Address;
};

export function storeFactoryDeploy(src: FactoryDeploy) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(1829761339, 32);
    b_0.storeUint(src.queryId, 64);
    b_0.storeAddress(src.cashback);
  };
}

export function loadFactoryDeploy(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 1829761339) {
    throw Error("Invalid prefix");
  }
  let _queryId = sc_0.loadUintBig(64);
  let _cashback = sc_0.loadAddress();
  return { $$type: "FactoryDeploy" as const, queryId: _queryId, cashback: _cashback };
}

function loadTupleFactoryDeploy(source: TupleReader) {
  let _queryId = source.readBigNumber();
  let _cashback = source.readAddress();
  return { $$type: "FactoryDeploy" as const, queryId: _queryId, cashback: _cashback };
}

function storeTupleFactoryDeploy(source: FactoryDeploy) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  builder.writeAddress(source.cashback);
  return builder.build();
}

function dictValueParserFactoryDeploy(): DictionaryValue<FactoryDeploy> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeFactoryDeploy(src)).endCell());
    },
    parse: (src) => {
      return loadFactoryDeploy(src.loadRef().beginParse());
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
    "te6ccgECEwEAA/EAART/APSkE/S88sgLAQIBYgIDApLQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxZ2zzy4IIwyPhDAcx/AcoAye1UBAUCAVgPEAE07UTQ1AH4Y9IAMJFt4Pgo1wsKgwm68uCJ2zwGA9btou37AZIwf+BwIddJwh+VMCDXCx/eIIIQScNaKrqOuTDTHwGCEEnDWiq68uCB0z/UAdASbBIwjQWaGFuZGxpbmcgaGkgZnJvbSBjaGlsZIP4UMNs8/hQwf+AgghCUapi2uuMCwACRMOMNcAcICQACbQDeyCHBAJiALQHLBwGjAd4hgjgyfLJzQRnTt6mqHbmOIHAgcY4UBHqpDKYwJagSoASqBwKkIcAARTDmMDOqAs8BjitvAHCOESN6qQgSb4wBpAN6qQQgwAAU5jMipQOcUwJvgaYwWMsHAqVZ5DAx4snQAVAw0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yfhCAXBt2zx/CgFO+QGC8HGSWX8w0E1wANgtHYvOP+ZhJam/zzfuovFSTLXYmsnauuMCCwE6bW0ibrOZWyBu8tCAbyIBkTLiECRwAwSAQlAj2zwNAvpwc490pPhDIds8XHBZyHABywFzAcsBcAHLABLMzMn5AMhyAcsBcAHLABLKB8v/ydAg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIi3ZGFybGluZ4yAGCENGoakpYyx/IWM8WyQHMyROCEAX14QBacgJ/BkVV2zzkMH/bMQwNAGQB0PQEMG0BgWhBAYAQ9A9vofLghwGBaEEiAoAQ9BfIAcj0AMkBzHABygBYAYEBAc8AyQHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAOAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMALm7vRgnBc7D1dLK57HoTsOdZKhRtmgnCd1jUtK2R8syLTry398WI5gnAgVcAbgGdjlM5YOq5HJbLDgnAb1J3vlUWW8cdT094FWcMmgnCdl05as07LczoOlm2UZuikgCAUgREgARsK+7UTQ0gABgAHWybuNDVpcGZzOi8vUW1SbWVyTG5aaW5hUjdBYW9EQXJIb0Y3bUhHeEtCbll2WVlNUEVFOENESGNZa4IA==",
  );
  const __system = Cell.fromBase64(
    "te6cckECHwEABVAAAQHAAQIBIBACAQW80jwDART/APSkE/S88sgLBAIBYggFAgFYFwYCAUgWBwB1sm7jQ1aXBmczovL1FtUm1lckxuWmluYVI3QWFvREFySG9GN21IR3hLQm5ZdllZTVBFRThDREhjWWuCACktAB0NMDAXGwowH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIVFBTA28E+GEC+GLbPFnbPPLggjDI+EMBzH8BygDJ7VQOCQPW7aLt+wGSMH/gcCHXScIflTAg1wsf3iCCEEnDWiq6jrkw0x8BghBJw1oquvLggdM/1AHQEmwSMI0FmhhbmRsaW5nIGhpIGZyb20gY2hpbGSD+FDDbPP4UMH/gIIIQlGqYtrrjAsAAkTDjDXAdDQoBTvkBgvBxkll/MNBNcADYLR2Lzj/mYSWpv8837qLxUky12JrJ2rrjAgsC+nBzj3Sk+EMh2zxccFnIcAHLAXMBywFwAcsAEszMyfkAyHIBywFwAcsAEsoHy//J0CDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IiLdkYXJsaW5njIAYIQ0ahqSljLH8hYzxbJAczJE4IQBfXhAFpyAn8GRVXbPOQwf9sxDBsAZAHQ9AQwbQGBaEEBgBD0D2+h8uCHAYFoQSICgBD0F8gByPQAyQHMcAHKAFgBgQEBzwDJAVAw0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yfhCAXBt2zx/GgE07UTQ1AH4Y9IAMJFt4Pgo1wsKgwm68uCJ2zwPAAJtAQW/QgwRART/APSkE/S88sgLEgIBYhgTAgFYFxQCAUgWFQB1sm7jQ1aXBmczovL1FtZXRmNHBUSDkzakNVOXFpZ043a3pxcUJtTXFONDlEOE1iTkg2V1M2S0dmNHqCAAEbCvu1E0NIAAYAC5u70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIApjQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxZ2zzy4ILI+EMBzH8BygABAcs/ye1UHhkC8AGSMH/gcCHXScIflTAg1wsf3oIQ0ahqSrqPWtMfAYIQ0ahqSrry4IHUAdAxMCDbPP4UMI0F2hhbmRsaW5nIGhpIGZyb20gcGFyZW50g/hQwizc3VwhSEMhZghBJw1oqUAPLH8s/yFjPFskBzMn4QgF/bds8f+AwcB0aATptbSJus5lbIG7y0IBvIgGRMuIQJHADBIBCUCPbPBsByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsAHACYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzADeyCHBAJiALQHLBwGjAd4hgjgyfLJzQRnTt6mqHbmOIHAgcY4UBHqpDKYwJagSoASqBwKkIcAARTDmMDOqAs8BjitvAHCOESN6qQgSb4wBpAN6qQQgwAAU5jMipQOcUwJvgaYwWMsHAqVZ5DAx4snQAEbtRNDUAfhj0gABlNM/ATHg+CjXCwqDCbry4ImBAQHXAAEB0YLrp9c=",
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
};

const TodoParent_types: ABIType[] = [
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
  {
    name: "Deploy",
    header: 2490013878,
    fields: [{ name: "queryId", type: { kind: "simple", type: "uint", optional: false, format: 64 } }],
  },
  {
    name: "DeployOk",
    header: 2952335191,
    fields: [{ name: "queryId", type: { kind: "simple", type: "uint", optional: false, format: 64 } }],
  },
  {
    name: "FactoryDeploy",
    header: 1829761339,
    fields: [
      { name: "queryId", type: { kind: "simple", type: "uint", optional: false, format: 64 } },
      { name: "cashback", type: { kind: "simple", type: "address", optional: false } },
    ],
  },
  { name: "HiFromParent", header: 3517475402, fields: [{ name: "greeting", type: { kind: "simple", type: "string", optional: false } }] },
  {
    name: "HiFromChild",
    header: 1237539370,
    fields: [
      { name: "fromSeqno", type: { kind: "simple", type: "uint", optional: false, format: 64 } },
      { name: "greeting", type: { kind: "simple", type: "string", optional: false } },
    ],
  },
];

const TodoParent_getters: ABIGetter[] = [];

const TodoParent_receivers: ABIReceiver[] = [
  { receiver: "internal", message: { kind: "text", text: "greet 3" } },
  { receiver: "internal", message: { kind: "typed", type: "HiFromChild" } },
  { receiver: "internal", message: { kind: "typed", type: "Deploy" } },
];

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
      { name: "FactoryDeploy", header: 1829761339, fields: [] },
      { name: "HiFromParent", header: 3517475402, fields: [] },
      { name: "HiFromChild", header: 1237539370, fields: [] },
    ],
    types: TodoParent_types,
    getters: TodoParent_getters,
    receivers: TodoParent_receivers,
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
