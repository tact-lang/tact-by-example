var u=Object.defineProperty;var I=(a,e,t)=>e in a?u(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var o=(a,e,t)=>(I(a,typeof e!="symbol"?e+"":e,t),t);import{S as p,i as Q,s as E,I as f,ac as y}from"../chunks/index.9fe14626.js";import{d as s,g as c,s as d}from"../chunks/store.2b42c038.js";import{d as C}from"../chunks/index.9fe59178.js";const w=`# Maps

Maps are a dictionary type that can hold an arbitrary number of items, each under a different key.

The keys in maps can either be an \`Int\` type or an \`Address\` type.

You can check if a key is found in the map by calling the \`get()\` method. This will return \`null\` if the key is missing or the value if the key is found. Replace the value under a key by calling the \`set()\` method.

Integers in maps stored in state currently use the largest integer size (257-bit). Future versions of Tact will let you optimize the encoding size.

## Limit the number of items

Maps are designed to hold a limited number of items. Only use a map if you know the upper bound of items that it may hold. It's also a good idea to [write a test](https://github.com/tact-lang/tact-emulator) to add the maximum number of elements to the map and see how gas behaves under stress.

If the number of items is unbounded and can potentially grow to billions, you'll need to architect your contract differently. We will discuss unbounded maps later on under the topic of contract sharding.`,b=`import "@stdlib/deploy";

struct TokenInfo {
    ticker: String;
    decimals: Int;
}

// messages can contain maps
message Replace {
    items: map<Int, Address>;
}

contract Maps with Deployable {

    // maps with Int as key
    mi1: map<Int, TokenInfo>;
    mi2: map<Int, Bool>;
    mi3: map<Int, Int>;
    mi4: map<Int, Address>;
    
    // maps with Address as key
    ma1: map<Address, TokenInfo>;
    ma2: map<Address, Bool>;
    ma3: map<Address, Int>;
    ma4: map<Address, Address>;

    init(arg: map<Int, Bool>) {
        // no need to initialize maps if they're empty
        self.mi2 = arg;
    }

    receive("set keys") {
        // keys are Int
        self.mi1.set(17, TokenInfo{ticker: "SHIB", decimals: 9});
        self.mi2.set(0x9377433ff21832, true);
        self.mi3.set(pow(2,240), pow(2,230));
        self.mi4.set(-900, address("EQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqB2N"));
        // keys are Address
        self.ma1.set(address("EQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqB2N"), TokenInfo{ticker: "DOGE", decimals: 18});
        self.ma2.set(address("UQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqEBI"), true);
        self.ma3.set(address("EQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqB2N"), ton("1.23"));
        self.ma4.set(address("UQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqEBI"), myAddress());
    }

    receive("delete keys") {
        // keys are Int
        self.mi1.set(17, null);
        self.mi2.set(0x9377433ff21832, null);
        self.mi3.set(pow(2,240), null);
        self.mi4.set(-900, null);
        // keys are Address
        self.ma1.set(address("EQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqB2N"), null);
        self.ma2.set(address("UQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqEBI"), null);
        self.ma3.set(address("EQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqB2N"), null);
        self.ma4.set(address("UQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqEBI"), null);
    }

    receive("clear") {
        self.mi1 = emptyMap();
        self.mi2 = emptyMap();
        self.mi3 = emptyMap();
        self.mi4 = emptyMap();
        self.ma1 = emptyMap();
        self.ma2 = emptyMap();
        self.ma3 = emptyMap();
        self.ma4 = emptyMap();
    }

    receive(msg: Replace) {
        // replace all items in the map with those coming in the message
        self.mi4 = msg.items;
    }

    // if the key is not found, the get() method returns null
    get fun oneItem(key: Int): Address? {
        return self.mi4.get(key);
    }

    get fun itemCheck(): String {
        if (self.mi1.get(17) == null) {
            return "not found";
        }
        let item: TokenInfo = self.mi1.get(17)!!; // the !! will tell the compiler it's not null
        return item.ticker;
    }

    // you can return maps from getters
    get fun allItems(): map<Address, TokenInfo> {
        return self.ma1;
    }
}`;function M(a){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(a.queryId,64)}}function H(a){return e=>{let t=e;t.storeStringRefTail(a.ticker),t.storeInt(a.decimals,257)}}function h(a){let e=a,t=e.loadStringRefTail(),A=e.loadIntBig(257);return{$$type:"TokenInfo",ticker:t,decimals:A}}function k(){return{serialize:(a,e)=>{e.storeRef(s.beginCell().store(H(a)).endCell())},parse:a=>h(a.loadRef().beginParse())}}function R(a){return e=>{let t=e;t.storeUint(1384510466,32),t.storeDict(a.items,s.Dictionary.Keys.BigInt(257),s.Dictionary.Values.Address())}}function S(a){return e=>{e.storeDict(a.arg,s.Dictionary.Keys.BigInt(257),s.Dictionary.Values.Bool())}}async function g(a){const e=s.Cell.fromBase64("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"),t=s.Cell.fromBase64("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");let A=s.beginCell();A.storeRef(t),A.storeUint(0,1),S({$$type:"Maps_init_args",arg:a})(A);const n=A.endCell();return{code:e,data:n}}const Y={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class l{constructor(e,t){o(this,"address");o(this,"init");o(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"TokenInfo",header:null,fields:[]},{name:"Replace",header:1384510466,fields:[]}],errors:Y});this.address=e,this.init=t}static async init(e){return await g(e)}static async fromInit(e){const t=await g(e),A=s.contractAddress(0,t);return new l(A,t)}static fromAddress(e){return new l(e)}async send(e,t,A,n){let r=null;if(n==="set keys"&&(r=s.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n==="delete keys"&&(r=s.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n==="clear"&&(r=s.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n&&typeof n=="object"&&!(n instanceof s.Slice)&&n.$$type==="Replace"&&(r=s.beginCell().store(R(n)).endCell()),n&&typeof n=="object"&&!(n instanceof s.Slice)&&n.$$type==="Deploy"&&(r=s.beginCell().store(M(n)).endCell()),r===null)throw new Error("Invalid message type");await e.internal(t,{...A,body:r})}async getOneItem(e,t){let A=new s.TupleBuilder;return A.writeNumber(t),(await e.get("oneItem",A.build())).stack.readAddressOpt()}async getItemCheck(e){let t=new s.TupleBuilder;return(await e.get("itemCheck",t.build())).stack.readString()}async getAllItems(e){let t=new s.TupleBuilder,A=(await e.get("allItems",t.build())).stack;return s.Dictionary.loadDirect(s.Dictionary.Keys.Address(),k(),A.readCellOpt())}}function z(a,e,t){let A;f(a,d,i=>t(2,A=i));let n,r;return y(d,A={markdown:w,tactCode:b,deploy:async()=>{const i=await C.Blockchain.create(),B=await i.treasury("deployer");n=B.getSender(),r=i.openContract(await l.fromInit(s.Dictionary.empty()));const m={[B.address.toString()]:"deployer",[r.address.toString()]:"contract"};return[[r],m,[await r.send(B.getSender(),{value:s.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{"set keys":async()=>[await r.send(n,{value:s.toNano(1)},"set keys")],"delete keys":async()=>[await r.send(n,{value:s.toNano(1)},"delete keys")],clear:async()=>[await r.send(n,{value:s.toNano(1)},"clear")],"Replace{{-900:my}}":async()=>{const i=s.Dictionary.empty().set(-900n,n.address);return[await r.send(n,{value:s.toNano(1)},{$$type:"Replace",items:i})]}},getters:{"oneItem(-900)":async()=>await r.getOneItem(-900n),itemCheck:async()=>await r.getItemCheck(),allItems:async()=>await r.getAllItems()},prev:c(import.meta.url).prev,next:c(import.meta.url).next},A),[]}class G extends p{constructor(e){super(),Q(this,e,z,null,E,{})}}export{G as default};
