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
    DictionaryValue
} from 'ton-core';

export type StateInit = {
    $$type: 'StateInit';
    code: Cell;
    data: Cell;
}

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
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
    let _code = source.readCell();
    let _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
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
        }
    }
}

export type Context = {
    $$type: 'Context';
    bounced: boolean;
    sender: Address;
    value: bigint;
    raw: Cell;
}

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
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadTupleContext(source: TupleReader) {
    let _bounced = source.readBoolean();
    let _sender = source.readAddress();
    let _value = source.readBigNumber();
    let _raw = source.readCell();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
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
        }
    }
}

export type SendParameters = {
    $$type: 'SendParameters';
    bounce: boolean;
    to: Address;
    value: bigint;
    mode: bigint;
    body: Cell | null;
    code: Cell | null;
    data: Cell | null;
}

export function storeSendParameters(src: SendParameters) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounce);
        b_0.storeAddress(src.to);
        b_0.storeInt(src.value, 257);
        b_0.storeInt(src.mode, 257);
        if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
        if (src.code !== null && src.code !== undefined) { b_0.storeBit(true).storeRef(src.code); } else { b_0.storeBit(false); }
        if (src.data !== null && src.data !== undefined) { b_0.storeBit(true).storeRef(src.data); } else { b_0.storeBit(false); }
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
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadTupleSendParameters(source: TupleReader) {
    let _bounce = source.readBoolean();
    let _to = source.readAddress();
    let _value = source.readBigNumber();
    let _mode = source.readBigNumber();
    let _body = source.readCellOpt();
    let _code = source.readCellOpt();
    let _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
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
        }
    }
}

export type Deploy = {
    $$type: 'Deploy';
    queryId: bigint;
}

export function storeDeploy(src: Deploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2490013878, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2490013878) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'Deploy' as const, queryId: _queryId };
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
        }
    }
}

export type DeployOk = {
    $$type: 'DeployOk';
    queryId: bigint;
}

export function storeDeployOk(src: DeployOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2952335191, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeployOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2952335191) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'DeployOk' as const, queryId: _queryId };
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
        }
    }
}

export type FactoryDeploy = {
    $$type: 'FactoryDeploy';
    queryId: bigint;
    cashback: Address;
}

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
    if (sc_0.loadUint(32) !== 1829761339) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _cashback = sc_0.loadAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function loadTupleFactoryDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _cashback = source.readAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
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
        }
    }
}

export type TokenInfo = {
    $$type: 'TokenInfo';
    ticker: string;
    decimals: bigint;
}

export function storeTokenInfo(src: TokenInfo) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeStringRefTail(src.ticker);
        b_0.storeInt(src.decimals, 257);
    };
}

export function loadTokenInfo(slice: Slice) {
    let sc_0 = slice;
    let _ticker = sc_0.loadStringRefTail();
    let _decimals = sc_0.loadIntBig(257);
    return { $$type: 'TokenInfo' as const, ticker: _ticker, decimals: _decimals };
}

function loadTupleTokenInfo(source: TupleReader) {
    let _ticker = source.readString();
    let _decimals = source.readBigNumber();
    return { $$type: 'TokenInfo' as const, ticker: _ticker, decimals: _decimals };
}

function storeTupleTokenInfo(source: TokenInfo) {
    let builder = new TupleBuilder();
    builder.writeString(source.ticker);
    builder.writeNumber(source.decimals);
    return builder.build();
}

function dictValueParserTokenInfo(): DictionaryValue<TokenInfo> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeTokenInfo(src)).endCell());
        },
        parse: (src) => {
            return loadTokenInfo(src.loadRef().beginParse());
        }
    }
}

export type Replace = {
    $$type: 'Replace';
    items: Dictionary<bigint, Address>;
}

export function storeReplace(src: Replace) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1384510466, 32);
        b_0.storeDict(src.items, Dictionary.Keys.BigInt(257), Dictionary.Values.Address());
    };
}

export function loadReplace(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1384510466) { throw Error('Invalid prefix'); }
    let _items = Dictionary.load(Dictionary.Keys.BigInt(257), Dictionary.Values.Address(), sc_0);
    return { $$type: 'Replace' as const, items: _items };
}

function loadTupleReplace(source: TupleReader) {
    let _items = Dictionary.loadDirect(Dictionary.Keys.BigInt(257), Dictionary.Values.Address(), source.readCellOpt());
    return { $$type: 'Replace' as const, items: _items };
}

function storeTupleReplace(source: Replace) {
    let builder = new TupleBuilder();
    builder.writeCell(source.items.size > 0 ? beginCell().storeDictDirect(source.items, Dictionary.Keys.BigInt(257), Dictionary.Values.Address()).endCell() : null);
    return builder.build();
}

function dictValueParserReplace(): DictionaryValue<Replace> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeReplace(src)).endCell());
        },
        parse: (src) => {
            return loadReplace(src.loadRef().beginParse());
        }
    }
}

 type Maps_init_args = {
    $$type: 'Maps_init_args';
    arg: Dictionary<bigint, boolean>;
}

function initMaps_init_args(src: Maps_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeDict(src.arg, Dictionary.Keys.BigInt(257), Dictionary.Values.Bool());
    };
}

async function Maps_init(arg: Dictionary<bigint, boolean>) {
    const __code = Cell.fromBase64('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');
    const __system = Cell.fromBase64('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');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initMaps_init_args({ $$type: 'Maps_init_args', arg })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const Maps_errors: { [key: number]: { message: string } } = {
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
}

const Maps_types: ABIType[] = [
    {"name":"StateInit","header":null,"fields":[{"name":"code","type":{"kind":"simple","type":"cell","optional":false}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"Context","header":null,"fields":[{"name":"bounced","type":{"kind":"simple","type":"bool","optional":false}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"raw","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"SendParameters","header":null,"fields":[{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"code","type":{"kind":"simple","type":"cell","optional":true}},{"name":"data","type":{"kind":"simple","type":"cell","optional":true}}]},
    {"name":"Deploy","header":2490013878,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"DeployOk","header":2952335191,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"FactoryDeploy","header":1829761339,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"cashback","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"TokenInfo","header":null,"fields":[{"name":"ticker","type":{"kind":"simple","type":"string","optional":false}},{"name":"decimals","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"Replace","header":1384510466,"fields":[{"name":"items","type":{"kind":"dict","key":"int","value":"address"}}]},
]

const Maps_getters: ABIGetter[] = [
    {"name":"oneItem","arguments":[{"name":"key","type":{"kind":"simple","type":"int","optional":false,"format":257}}],"returnType":{"kind":"simple","type":"address","optional":true}},
    {"name":"itemCheck","arguments":[],"returnType":{"kind":"simple","type":"string","optional":false}},
    {"name":"allItems","arguments":[],"returnType":{"kind":"dict","key":"address","value":"TokenInfo","valueFormat":"ref"}},
]

const Maps_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"text","text":"set keys"}},
    {"receiver":"internal","message":{"kind":"text","text":"delete keys"}},
    {"receiver":"internal","message":{"kind":"text","text":"clear"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Replace"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Deploy"}},
]

export class Maps implements Contract {
    
    static async init(arg: Dictionary<bigint, boolean>) {
        return await Maps_init(arg);
    }
    
    static async fromInit(arg: Dictionary<bigint, boolean>) {
        const init = await Maps_init(arg);
        const address = contractAddress(0, init);
        return new Maps(address, init);
    }
    
    static fromAddress(address: Address) {
        return new Maps(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types: [{"name":"StateInit","header":null,"fields":[]},{"name":"Context","header":null,"fields":[]},{"name":"SendParameters","header":null,"fields":[]},{"name":"Deploy","header":2490013878,"fields":[]},{"name":"DeployOk","header":2952335191,"fields":[]},{"name":"FactoryDeploy","header":1829761339,"fields":[]},{"name":"TokenInfo","header":null,"fields":[]},{"name":"Replace","header":1384510466,"fields":[]}],
        types:  Maps_types,
        getters: Maps_getters,
        receivers: Maps_receivers,
        errors: Maps_errors,
    };
    
    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: 'set keys' | 'delete keys' | 'clear' | Replace | Deploy) {
        
        let body: Cell | null = null;
        if (message === 'set keys') {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
        }
        if (message === 'delete keys') {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
        }
        if (message === 'clear') {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Replace') {
            body = beginCell().store(storeReplace(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
            body = beginCell().store(storeDeploy(message)).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
    async getOneItem(provider: ContractProvider, key: bigint) {
        let builder = new TupleBuilder();
        builder.writeNumber(key);
        let source = (await provider.get('oneItem', builder.build())).stack;
        let result = source.readAddressOpt();
        return result;
    }
    
    async getItemCheck(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('itemCheck', builder.build())).stack;
        let result = source.readString();
        return result;
    }
    
    async getAllItems(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('allItems', builder.build())).stack;
        let result = Dictionary.loadDirect(Dictionary.Keys.Address(), dictValueParserTokenInfo(), source.readCellOpt());
        return result;
    }
    
}