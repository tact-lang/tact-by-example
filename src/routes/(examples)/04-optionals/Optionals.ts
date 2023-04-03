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

export type StrctOpts = {
  $$type: "StrctOpts";
  sa: bigint | null;
  sb: boolean | null;
  sc: Address | null;
};

export function storeStrctOpts(src: StrctOpts) {
  return (builder: Builder) => {
    let b_0 = builder;
    if (src.sa !== null && src.sa !== undefined) {
      b_0.storeBit(true).storeInt(src.sa, 257);
    } else {
      b_0.storeBit(false);
    }
    if (src.sb !== null && src.sb !== undefined) {
      b_0.storeBit(true).storeBit(src.sb);
    } else {
      b_0.storeBit(false);
    }
    b_0.storeAddress(src.sc);
  };
}

export function loadStrctOpts(slice: Slice) {
  let sc_0 = slice;
  let _sa = sc_0.loadBit() ? sc_0.loadIntBig(257) : null;
  let _sb = sc_0.loadBit() ? sc_0.loadBit() : null;
  let _sc = sc_0.loadMaybeAddress();
  return { $$type: "StrctOpts" as const, sa: _sa, sb: _sb, sc: _sc };
}

function loadTupleStrctOpts(source: TupleReader) {
  let _sa = source.readBigNumberOpt();
  let _sb = source.readBooleanOpt();
  let _sc = source.readAddressOpt();
  return { $$type: "StrctOpts" as const, sa: _sa, sb: _sb, sc: _sc };
}

function storeTupleStrctOpts(source: StrctOpts) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.sa);
  builder.writeBoolean(source.sb);
  builder.writeAddress(source.sc);
  return builder.build();
}

function dictValueParserStrctOpts(): DictionaryValue<StrctOpts> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeStrctOpts(src)).endCell());
    },
    parse: (src) => {
      return loadStrctOpts(src.loadRef().beginParse());
    },
  };
}

export type MsgOpts = {
  $$type: "MsgOpts";
  ma: bigint | null;
  mb: boolean | null;
  mc: Address | null;
  md: StrctOpts | null;
};

export function storeMsgOpts(src: MsgOpts) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(162313165, 32);
    if (src.ma !== null && src.ma !== undefined) {
      b_0.storeBit(true).storeInt(src.ma, 257);
    } else {
      b_0.storeBit(false);
    }
    if (src.mb !== null && src.mb !== undefined) {
      b_0.storeBit(true).storeBit(src.mb);
    } else {
      b_0.storeBit(false);
    }
    b_0.storeAddress(src.mc);
    let b_1 = new Builder();
    if (src.md !== null && src.md !== undefined) {
      b_1.storeBit(true);
      b_1.store(storeStrctOpts(src.md));
    } else {
      b_1.storeBit(false);
    }
    b_0.storeRef(b_1.endCell());
  };
}

export function loadMsgOpts(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 162313165) {
    throw Error("Invalid prefix");
  }
  let _ma = sc_0.loadBit() ? sc_0.loadIntBig(257) : null;
  let _mb = sc_0.loadBit() ? sc_0.loadBit() : null;
  let _mc = sc_0.loadMaybeAddress();
  let sc_1 = sc_0.loadRef().beginParse();
  let _md = sc_1.loadBit() ? loadStrctOpts(sc_1) : null;
  return { $$type: "MsgOpts" as const, ma: _ma, mb: _mb, mc: _mc, md: _md };
}

function loadTupleMsgOpts(source: TupleReader) {
  let _ma = source.readBigNumberOpt();
  let _mb = source.readBooleanOpt();
  let _mc = source.readAddressOpt();
  const _md_p = source.readTupleOpt();
  const _md = _md_p ? loadTupleStrctOpts(_md_p) : null;
  return { $$type: "MsgOpts" as const, ma: _ma, mb: _mb, mc: _mc, md: _md };
}

function storeTupleMsgOpts(source: MsgOpts) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.ma);
  builder.writeBoolean(source.mb);
  builder.writeAddress(source.mc);
  if (source.md !== null && source.md !== undefined) {
    builder.writeTuple(storeTupleStrctOpts(source.md));
  } else {
    builder.writeTuple(null);
  }
  return builder.build();
}

function dictValueParserMsgOpts(): DictionaryValue<MsgOpts> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeMsgOpts(src)).endCell());
    },
    parse: (src) => {
      return loadMsgOpts(src.loadRef().beginParse());
    },
  };
}

type Optionals_init_args = {
  $$type: "Optionals_init_args";
  a: bigint | null;
  b: boolean | null;
  c: Address | null;
};

function initOptionals_init_args(src: Optionals_init_args) {
  return (builder: Builder) => {
    let b_0 = builder;
    if (src.a !== null && src.a !== undefined) {
      b_0.storeBit(true).storeInt(src.a, 257);
    } else {
      b_0.storeBit(false);
    }
    if (src.b !== null && src.b !== undefined) {
      b_0.storeBit(true).storeBit(src.b);
    } else {
      b_0.storeBit(false);
    }
    b_0.storeAddress(src.c);
  };
}

async function Optionals_init(a: bigint | null, b: boolean | null, c: Address | null) {
  const __code = Cell.fromBase64(
    "te6ccgECGwEABNcAART/APSkE/S88sgLAQIBYgIDA3bQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVE9s8MBQEBQIBIAoLAqxwIddJwh+VMCDXCx/eApJbf+AhghAJrLPNuuMCAYIQlGqYtrqOrdMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8l/+EJwWAOAQgFtbds8f+AwcAYHAeDI+EMBzH8BygBVMCNus5t/UAXKABOBAQHPAJgzcFAEygAQI+IhbrOWfwHKAMoAlHAyygDiASBulTBwAcsBjh4g10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbiyCJus5UycFjKAOMNyQHMye1UCQHqMdMfAYIQCayzzbry4IHSAAGVgQEB1wCSbQHi0gABktIAkm0B4vpAIdcLAcMAjh0BINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiJIxbeIB1AHQ0gABkjBt4w0UQzBsFF8DIG6zmjQDIG7y0ICmDAORMOJ/FgHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAIAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAMB/AcoAAiBu8tCAbyMQNCJus5t/UATKABKBAQHPAJcycFADygAS4iFus5Z/AcoAygCUcDLKAOIBIG6VMHABywGOHiDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFuICEb4D9tnm2eNiDBQMAgEgDQ4ARiBus5sgIG7y0IBvI1tus5Fw4p4gIG7y0IBvI1sgbvLQgOBtAgEgDxACAUgZGgIBWBESALm3ejBOC52Hq6WVz2PQnYc6yVCjbNBOE7rGpaVsj5ZkWnXlv74sRzBOBAq4A3AM7HKZywdVyOS2WHBOA3qTvfKost446np7wKs4ZNBOE7Lpy1Zp2W5nQdLNsozdFJACEaxD7Z5tnjYgwBQTAhGtCe2ebZ42IMAUFQAWI26Rf+AjIG7y0IAC1u1E0NQB+GPSAAGO09IAAZWBAQHXAJJtAeLSAAGS0gCSbQHi+kAh1wsBwwCOHQEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIkjFt4gHUAdDSAAGSMG3jDRRDMGwU4Pgo1wsKgwm68uCJFhcAAiMAkNIAAZWBAQHXAJJtAeLSAAGS0gCSbQHi+kAh1wsBwwCOHQEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIkjFt4kMwbBNvAwGS0gABlYEBAdcAkm0B4tIAAZLSAJJtAeL6QCHXCwHDAI4dASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IiSMW3iQzAD0VjbPBgACm1/bW8DABGwr7tRNDSAAGAAdbJu40NWlwZnM6Ly9RbVRFdDRzR0h2MmdieEhiU1ZSVXp0MVpYdzdtN0dYeUJhaXBMckpDTVpvUE5Igg",
  );
  const __system = Cell.fromBase64(
    "te6cckECHQEABOEAAQHAAQEFoB0zAgEU/wD0pBP0vPLICwMCAWISBAIBIBAFAgEgCQYCAUgIBwB1sm7jQ1aXBmczovL1FtVEV0NHNHSHYyZ2J4SGJTVlJVenQxWlh3N203R1h5QmFpcExySkNNWm9QTkiCAAEbCvu1E0NIAAYAIBIAsKALm3ejBOC52Hq6WVz2PQnYc6yVCjbNBOE7rGpaVsj5ZkWnXlv74sRzBOBAq4A3AM7HKZywdVyOS2WHBOA3qTvfKost446np7wKs4ZNBOE7Lpy1Zp2W5nQdLNsozdFJACAVgODAIRrQntnm2eNiDAGQ0AAiMCEaxD7Z5tnjYgwBkPABYjbpF/4CMgbvLQgAIRvgP22ebZ42IMGREARiBus5sgIG7y0IBvI1tus5Fw4p4gIG7y0IBvI1sgbvLQgOBtA3bQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVE9s8MBkVEwHgyPhDAcx/AcoAVTAjbrObf1AFygATgQEBzwCYM3BQBMoAECPiIW6zln8BygDKAJRwMsoA4gEgbpUwcAHLAY4eINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8W4sgibrOVMnBYygDjDckBzMntVBQAwH8BygACIG7y0IBvIxA0Im6zm39QBMoAEoEBAc8AlzJwUAPKABLiIW6zln8BygDKAJRwMsoA4gEgbpUwcAHLAY4eINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8W4gKscCHXScIflTAg1wsf3gKSW3/gIYIQCayzzbrjAgGCEJRqmLa6jq3THwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/Jf/hCcFgDgEIBbW3bPH/gMHAYFgHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAXAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAeox0x8BghAJrLPNuvLggdIAAZWBAQHXAJJtAeLSAAGS0gCSbQHi+kAh1wsBwwCOHQEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIkjFt4gHUAdDSAAGSMG3jDRRDMGwUXwMgbrOaNAMgbvLQgKYMA5Ew4n8cAtbtRNDUAfhj0gABjtPSAAGVgQEB1wCSbQHi0gABktIAkm0B4vpAIdcLAcMAjh0BINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiJIxbeIB1AHQ0gABkjBt4w0UQzBsFOD4KNcLCoMJuvLgiRwaAZLSAAGVgQEB1wCSbQHi0gABktIAkm0B4vpAIdcLAcMAjh0BINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiJIxbeJDMAPRWNs8GwAKbX9tbwMAkNIAAZWBAQHXAJJtAeLSAAGS0gCSbQHi+kAh1wsBwwCOHQEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIkjFt4kMwbBNvA24T46M=",
  );
  let builder = beginCell();
  builder.storeRef(__system);
  builder.storeUint(0, 1);
  initOptionals_init_args({ $$type: "Optionals_init_args", a, b, c })(builder);
  const __data = builder.endCell();
  return { code: __code, data: __data };
}

const Optionals_errors: { [key: number]: { message: string } } = {
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

export class Optionals implements Contract {
  static async init(a: bigint | null, b: boolean | null, c: Address | null) {
    return await Optionals_init(a, b, c);
  }

  static async fromInit(a: bigint | null, b: boolean | null, c: Address | null) {
    const init = await Optionals_init(a, b, c);
    const address = contractAddress(0, init);
    return new Optionals(address, init);
  }

  static fromAddress(address: Address) {
    return new Optionals(address);
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
      { name: "StrctOpts", header: null, fields: [] },
      { name: "MsgOpts", header: 162313165, fields: [] },
    ],
    errors: Optionals_errors,
  };

  private constructor(address: Address, init?: { code: Cell; data: Cell }) {
    this.address = address;
    this.init = init;
  }

  async send(
    provider: ContractProvider,
    via: Sender,
    args: { value: bigint; bounce?: boolean | null | undefined },
    message: MsgOpts | Deploy,
  ) {
    let body: Cell | null = null;
    if (message && typeof message === "object" && !(message instanceof Slice) && message.$$type === "MsgOpts") {
      body = beginCell().store(storeMsgOpts(message)).endCell();
    }
    if (message && typeof message === "object" && !(message instanceof Slice) && message.$$type === "Deploy") {
      body = beginCell().store(storeDeploy(message)).endCell();
    }
    if (body === null) {
      throw new Error("Invalid message type");
    }

    await provider.internal(via, { ...args, body: body });
  }

  async getOptInt(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get("optInt", builder.build())).stack;
    let result = source.readBigNumberOpt();
    return result;
  }

  async getOptIntVal(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get("optIntVal", builder.build())).stack;
    let result = source.readBigNumber();
    return result;
  }

  async getOptNested(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get("optNested", builder.build())).stack;
    let result = source.readBigNumberOpt();
    return result;
  }
}
