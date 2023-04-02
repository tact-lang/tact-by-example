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

export type ChangeOwner = {
  $$type: "ChangeOwner";
  newOwner: Address;
};

export function storeChangeOwner(src: ChangeOwner) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(256331011, 32);
    b_0.storeAddress(src.newOwner);
  };
}

export function loadChangeOwner(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 256331011) {
    throw Error("Invalid prefix");
  }
  let _newOwner = sc_0.loadAddress();
  return { $$type: "ChangeOwner" as const, newOwner: _newOwner };
}

function loadTupleChangeOwner(source: TupleReader) {
  let _newOwner = source.readAddress();
  return { $$type: "ChangeOwner" as const, newOwner: _newOwner };
}

function storeTupleChangeOwner(source: ChangeOwner) {
  let builder = new TupleBuilder();
  builder.writeAddress(source.newOwner);
  return builder.build();
}

function dictValueParserChangeOwner(): DictionaryValue<ChangeOwner> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeChangeOwner(src)).endCell());
    },
    parse: (src) => {
      return loadChangeOwner(src.loadRef().beginParse());
    },
  };
}

export type NewTodo = {
  $$type: "NewTodo";
  task: string;
};

export function storeNewTodo(src: NewTodo) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(1804651575, 32);
    b_0.storeStringRefTail(src.task);
  };
}

export function loadNewTodo(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 1804651575) {
    throw Error("Invalid prefix");
  }
  let _task = sc_0.loadStringRefTail();
  return { $$type: "NewTodo" as const, task: _task };
}

function loadTupleNewTodo(source: TupleReader) {
  let _task = source.readString();
  return { $$type: "NewTodo" as const, task: _task };
}

function storeTupleNewTodo(source: NewTodo) {
  let builder = new TupleBuilder();
  builder.writeString(source.task);
  return builder.build();
}

function dictValueParserNewTodo(): DictionaryValue<NewTodo> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeNewTodo(src)).endCell());
    },
    parse: (src) => {
      return loadNewTodo(src.loadRef().beginParse());
    },
  };
}

export type NewTodoResponse = {
  $$type: "NewTodoResponse";
  seqno: bigint;
};

export function storeNewTodoResponse(src: NewTodoResponse) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(3848528798, 32);
    b_0.storeUint(src.seqno, 256);
  };
}

export function loadNewTodoResponse(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 3848528798) {
    throw Error("Invalid prefix");
  }
  let _seqno = sc_0.loadUintBig(256);
  return { $$type: "NewTodoResponse" as const, seqno: _seqno };
}

function loadTupleNewTodoResponse(source: TupleReader) {
  let _seqno = source.readBigNumber();
  return { $$type: "NewTodoResponse" as const, seqno: _seqno };
}

function storeTupleNewTodoResponse(source: NewTodoResponse) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.seqno);
  return builder.build();
}

function dictValueParserNewTodoResponse(): DictionaryValue<NewTodoResponse> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeNewTodoResponse(src)).endCell());
    },
    parse: (src) => {
      return loadNewTodoResponse(src.loadRef().beginParse());
    },
  };
}

export type CompleteTodo = {
  $$type: "CompleteTodo";
  seqno: bigint;
};

export function storeCompleteTodo(src: CompleteTodo) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2587315870, 32);
    b_0.storeUint(src.seqno, 256);
  };
}

export function loadCompleteTodo(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2587315870) {
    throw Error("Invalid prefix");
  }
  let _seqno = sc_0.loadUintBig(256);
  return { $$type: "CompleteTodo" as const, seqno: _seqno };
}

function loadTupleCompleteTodo(source: TupleReader) {
  let _seqno = source.readBigNumber();
  return { $$type: "CompleteTodo" as const, seqno: _seqno };
}

function storeTupleCompleteTodo(source: CompleteTodo) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.seqno);
  return builder.build();
}

function dictValueParserCompleteTodo(): DictionaryValue<CompleteTodo> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeCompleteTodo(src)).endCell());
    },
    parse: (src) => {
      return loadCompleteTodo(src.loadRef().beginParse());
    },
  };
}

export type InternalSetTask = {
  $$type: "InternalSetTask";
  task: string;
};

export function storeInternalSetTask(src: InternalSetTask) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(3152733790, 32);
    b_0.storeStringRefTail(src.task);
  };
}

export function loadInternalSetTask(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 3152733790) {
    throw Error("Invalid prefix");
  }
  let _task = sc_0.loadStringRefTail();
  return { $$type: "InternalSetTask" as const, task: _task };
}

function loadTupleInternalSetTask(source: TupleReader) {
  let _task = source.readString();
  return { $$type: "InternalSetTask" as const, task: _task };
}

function storeTupleInternalSetTask(source: InternalSetTask) {
  let builder = new TupleBuilder();
  builder.writeString(source.task);
  return builder.build();
}

function dictValueParserInternalSetTask(): DictionaryValue<InternalSetTask> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeInternalSetTask(src)).endCell());
    },
    parse: (src) => {
      return loadInternalSetTask(src.loadRef().beginParse());
    },
  };
}

export type InternalComplete = {
  $$type: "InternalComplete";
  excess: Address;
};

export function storeInternalComplete(src: InternalComplete) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(3472919628, 32);
    b_0.storeAddress(src.excess);
  };
}

export function loadInternalComplete(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 3472919628) {
    throw Error("Invalid prefix");
  }
  let _excess = sc_0.loadAddress();
  return { $$type: "InternalComplete" as const, excess: _excess };
}

function loadTupleInternalComplete(source: TupleReader) {
  let _excess = source.readAddress();
  return { $$type: "InternalComplete" as const, excess: _excess };
}

function storeTupleInternalComplete(source: InternalComplete) {
  let builder = new TupleBuilder();
  builder.writeAddress(source.excess);
  return builder.build();
}

function dictValueParserInternalComplete(): DictionaryValue<InternalComplete> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeInternalComplete(src)).endCell());
    },
    parse: (src) => {
      return loadInternalComplete(src.loadRef().beginParse());
    },
  };
}

export type TodoDetails = {
  $$type: "TodoDetails";
  task: string;
  completed: boolean;
};

export function storeTodoDetails(src: TodoDetails) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeStringRefTail(src.task);
    b_0.storeBit(src.completed);
  };
}

export function loadTodoDetails(slice: Slice) {
  let sc_0 = slice;
  let _task = sc_0.loadStringRefTail();
  let _completed = sc_0.loadBit();
  return { $$type: "TodoDetails" as const, task: _task, completed: _completed };
}

function loadTupleTodoDetails(source: TupleReader) {
  let _task = source.readString();
  let _completed = source.readBoolean();
  return { $$type: "TodoDetails" as const, task: _task, completed: _completed };
}

function storeTupleTodoDetails(source: TodoDetails) {
  let builder = new TupleBuilder();
  builder.writeString(source.task);
  builder.writeBoolean(source.completed);
  return builder.build();
}

function dictValueParserTodoDetails(): DictionaryValue<TodoDetails> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeTodoDetails(src)).endCell());
    },
    parse: (src) => {
      return loadTodoDetails(src.loadRef().beginParse());
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
    "te6ccgECHQEABOAAART/APSkE/S88sgLAQIBYgIDAtDQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxa2zwwyPhDAcx/AcoAWVkg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbL/8ntVBoEAgEgDQ4DvHAh10nCH5UwINcLH94Cklt/4CGCEGuQzDe6jpUx0x8BghBrkMw3uvLggdQB0DHbPH/gIYIQmjdOnrqOlTHTHwGCEJo3Tp668uCB0/8BMds8f+ABghCUapi2uuMCMHAFBgcD4AGk+EP4KCLbPFxwWchwAcsBcwHLAXABywASzMzJ+QDIcgHLAXABywASygfL/8nQINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiATIAYIQu+rmXljLH8hYzxbJAczJEDSCCTEtAFpyWX8GRVXbPCAVCwgDrFnbPIEswFMxu/L0+EP4KEEE2zxwWchwAcsBcwHLAXABywASzMzJ+QDIcgHLAXABywASygfL/8nQINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiPhCCRUKAVrTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/Jf/hCcFgDgEIBbW3bPH8LATbIAYIQ5WPjnljLH8v/yX/4QnBYA4BCAW1t2zwLABL4QlIgxwXy4IQBbMgBghDPAIxMWMsfASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFslwgEJ/BANtbds8AQsByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsADACYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAIRviju2ebZ42EMGg8CASAQEQACIQIBWBITAgEgFhcCE7HVds8WNs8bCGAaFADdsvRgnBc7D1dLK57HoTsOdZKhRtmgnCd1jUtK2R8syLTry398WI5gnAgVcAbgGdjlM5YOq5HJbLDgnAb1J3vlUWW8cdT094FWcMmgnCdl05as07LczoOlm2UZuikgnBAznVp5xX50lCwHWFuJkeygAZD4Q/goWNs8cFnIcAHLAXMBywFwAcsAEszMyfkAyHIBywFwAcsAEsoHy//J0CDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgVAKIC0PQEMG0BgWhBAYAQ9A9vofLghwGBaEEiAoAQ9BfIAcj0AMkBzHABygBAA1kg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxaBAQHPAMkCASAYGQIRt477Z5tnjYQwGhsAEbCvu1E0NIAAYAB1sm7jQ1aXBmczovL1FtYU1Rd05XWW40Z2lHOFFpUnRBbXNUYm5XWDlveFNHYWtYNlVRamdpR1h2a06CABgO1E0NQB+GPSAAGOJfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB0/9ZbBLgMPgo1wsKgwm68uCJ2zwcAAIgAAhw+EIB",
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
  11456: { message: `Todo does not exist` },
  54404: { message: `Parent only` },
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
      { name: "ChangeOwner", header: 256331011, fields: [] },
      { name: "NewTodo", header: 1804651575, fields: [] },
      { name: "NewTodoResponse", header: 3848528798, fields: [] },
      { name: "CompleteTodo", header: 2587315870, fields: [] },
      { name: "InternalSetTask", header: 3152733790, fields: [] },
      { name: "InternalComplete", header: 3472919628, fields: [] },
      { name: "TodoDetails", header: null, fields: [] },
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
    message: NewTodo | CompleteTodo | Deploy,
  ) {
    let body: Cell | null = null;
    if (message && typeof message === "object" && !(message instanceof Slice) && message.$$type === "NewTodo") {
      body = beginCell().store(storeNewTodo(message)).endCell();
    }
    if (message && typeof message === "object" && !(message instanceof Slice) && message.$$type === "CompleteTodo") {
      body = beginCell().store(storeCompleteTodo(message)).endCell();
    }
    if (message && typeof message === "object" && !(message instanceof Slice) && message.$$type === "Deploy") {
      body = beginCell().store(storeDeploy(message)).endCell();
    }
    if (body === null) {
      throw new Error("Invalid message type");
    }

    await provider.internal(via, { ...args, body: body });
  }

  async getNumTodos(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get("numTodos", builder.build())).stack;
    let result = source.readBigNumber();
    return result;
  }

  async getTodoAddress(provider: ContractProvider, seqno: bigint) {
    let builder = new TupleBuilder();
    builder.writeNumber(seqno);
    let source = (await provider.get("todoAddress", builder.build())).stack;
    let result = source.readAddress();
    return result;
  }

  async getOwner(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get("owner", builder.build())).stack;
    let result = source.readAddress();
    return result;
  }
}
