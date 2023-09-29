var y=Object.defineProperty;var u=(a,e,t)=>e in a?y(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var r=(a,e,t)=>(u(a,typeof e!="symbol"?e+"":e,t),t);import{S as g,i as f,s as I,I as Q,ac as E}from"../chunks/index.9fe14626.js";import{d as s,g as c,s as m}from"../chunks/store.5f445bdf.js";import{d as C}from"../chunks/index.5a025de5.js";const b=`# Maps

Maps are a dictionary type that can hold an arbitrary number of items, each under a different key.

The keys in maps can either be an \`Int\` type or an \`Address\` type.

You can check if a key is found in the map by calling the \`get()\` method. This will return \`null\` if the key is missing or the value if the key is found. Replace the value under a key by calling the \`set()\` method.

Integers in maps stored in state currently use the largest integer size (257-bit). Future versions of Tact will let you optimize the encoding size.

## Limit the number of items

Maps are designed to hold a limited number of items. Only use a map if you know the upper bound of items that it may hold. It's also a good idea to [write a test](https://github.com/tact-lang/tact-emulator) to add the maximum number of elements to the map and see how gas behaves under stress.

If the number of items is unbounded and can potentially grow to billions, you'll need to architect your contract differently. We will discuss unbounded maps later on under the topic of contract sharding.`,M=`import "@stdlib/deploy";

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
        let item: TokenInfo = self.mi1.get(17)!!; // !! tells the compiler this can't be null
        return item.ticker;
    }

    // you can return maps from getters
    get fun allItems(): map<Address, TokenInfo> {
        return self.ma1;
    }
}`;function w(a){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(a.queryId,64)}}function k(a){return e=>{let t=e;t.storeStringRefTail(a.ticker),t.storeInt(a.decimals,257)}}function h(a){let e=a,t=e.loadStringRefTail(),i=e.loadIntBig(257);return{$$type:"TokenInfo",ticker:t,decimals:i}}function H(){return{serialize:(a,e)=>{e.storeRef(s.beginCell().store(k(a)).endCell())},parse:a=>h(a.loadRef().beginParse())}}function R(a){return e=>{let t=e;t.storeUint(1384510466,32),t.storeDict(a.items,s.Dictionary.Keys.BigInt(257),s.Dictionary.Values.Address())}}function D(a){return e=>{e.storeDict(a.arg,s.Dictionary.Keys.BigInt(257),s.Dictionary.Values.Bool())}}async function p(a){const e=s.Cell.fromBase64("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"),t=s.Cell.fromBase64("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");let i=s.beginCell();i.storeRef(t),i.storeUint(0,1),D({$$type:"Maps_init_args",arg:a})(i);const n=i.endCell();return{code:e,data:n}}const W={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}},v=[{name:"StateInit",header:null,fields:[{name:"code",type:{kind:"simple",type:"cell",optional:!1}},{name:"data",type:{kind:"simple",type:"cell",optional:!1}}]},{name:"Context",header:null,fields:[{name:"bounced",type:{kind:"simple",type:"bool",optional:!1}},{name:"sender",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"raw",type:{kind:"simple",type:"slice",optional:!1}}]},{name:"SendParameters",header:null,fields:[{name:"bounce",type:{kind:"simple",type:"bool",optional:!1}},{name:"to",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"mode",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"body",type:{kind:"simple",type:"cell",optional:!0}},{name:"code",type:{kind:"simple",type:"cell",optional:!0}},{name:"data",type:{kind:"simple",type:"cell",optional:!0}}]},{name:"Deploy",header:2490013878,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"DeployOk",header:2952335191,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"FactoryDeploy",header:1829761339,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}},{name:"cashback",type:{kind:"simple",type:"address",optional:!1}}]},{name:"TokenInfo",header:null,fields:[{name:"ticker",type:{kind:"simple",type:"string",optional:!1}},{name:"decimals",type:{kind:"simple",type:"int",optional:!1,format:257}}]},{name:"Replace",header:1384510466,fields:[{name:"items",type:{kind:"dict",key:"int",value:"address"}}]}],S=[{name:"oneItem",arguments:[{name:"key",type:{kind:"simple",type:"int",optional:!1,format:257}}],returnType:{kind:"simple",type:"address",optional:!0}},{name:"itemCheck",arguments:[],returnType:{kind:"simple",type:"string",optional:!1}},{name:"allItems",arguments:[],returnType:{kind:"dict",key:"address",value:"TokenInfo",valueFormat:"ref"}}],z=[{receiver:"internal",message:{kind:"text",text:"set keys"}},{receiver:"internal",message:{kind:"text",text:"delete keys"}},{receiver:"internal",message:{kind:"text",text:"clear"}},{receiver:"internal",message:{kind:"typed",type:"Replace"}},{receiver:"internal",message:{kind:"typed",type:"Deploy"}}];class A{constructor(e,t){r(this,"address");r(this,"init");r(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"FactoryDeploy",header:1829761339,fields:[]},{name:"TokenInfo",header:null,fields:[]},{name:"Replace",header:1384510466,fields:[]}],types:v,getters:S,receivers:z,errors:W});this.address=e,this.init=t}static async init(e){return await p(e)}static async fromInit(e){const t=await p(e),i=s.contractAddress(0,t);return new A(i,t)}static fromAddress(e){return new A(e)}async send(e,t,i,n){let l=null;if(n==="set keys"&&(l=s.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n==="delete keys"&&(l=s.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n==="clear"&&(l=s.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n&&typeof n=="object"&&!(n instanceof s.Slice)&&n.$$type==="Replace"&&(l=s.beginCell().store(R(n)).endCell()),n&&typeof n=="object"&&!(n instanceof s.Slice)&&n.$$type==="Deploy"&&(l=s.beginCell().store(w(n)).endCell()),l===null)throw new Error("Invalid message type");await e.internal(t,{...i,body:l})}async getOneItem(e,t){let i=new s.TupleBuilder;return i.writeNumber(t),(await e.get("oneItem",i.build())).stack.readAddressOpt()}async getItemCheck(e){let t=new s.TupleBuilder;return(await e.get("itemCheck",t.build())).stack.readString()}async getAllItems(e){let t=new s.TupleBuilder,i=(await e.get("allItems",t.build())).stack;return s.Dictionary.loadDirect(s.Dictionary.Keys.Address(),H(),i.readCellOpt())}}function G(a,e,t){let i;Q(a,m,o=>t(2,i=o));let n,l;return E(m,i={markdown:b,tactCode:M,deploy:async()=>{const o=await C.Blockchain.create(),d=await o.treasury("deployer");n=d.getSender(),l=o.openContract(await A.fromInit(s.Dictionary.empty()));const B={[d.address.toString()]:"deployer",[l.address.toString()]:"contract"};return[[l],B,[await l.send(d.getSender(),{value:s.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{"set keys":async()=>[await l.send(n,{value:s.toNano(1)},"set keys")],"delete keys":async()=>[await l.send(n,{value:s.toNano(1)},"delete keys")],clear:async()=>[await l.send(n,{value:s.toNano(1)},"clear")],"Replace{{-900:my}}":async()=>{const o=s.Dictionary.empty().set(-900n,n.address);return[await l.send(n,{value:s.toNano(1)},{$$type:"Replace",items:o})]}},getters:{"oneItem(-900)":async()=>await l.getOneItem(-900n),itemCheck:async()=>await l.getItemCheck(),allItems:async()=>await l.getAllItems()},prev:c(import.meta.url).prev,next:c(import.meta.url).next},i),[]}class N extends g{constructor(e){super(),f(this,e,G,null,I,{})}}export{N as default};
