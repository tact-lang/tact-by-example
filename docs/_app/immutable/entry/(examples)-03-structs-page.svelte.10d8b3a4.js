var g=Object.defineProperty;var f=(n,e,t)=>e in n?g(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var l=(n,e,t)=>(f(n,typeof e!="symbol"?e+"":e,t),t);import{S as w,i as h,s as b,I as C,ac as I}from"../chunks/index.9fe14626.js";import{d as i,g as A,s as c}from"../chunks/store.5f445bdf.js";import{d as B}from"../chunks/index.5a025de5.js";const Q=`# Structs

Structs allow you to combine multiple primitives together in a more semantic way. They're a great tool to make your code more readable.

Structs can define complex data types that contain multiple fields of different types. They can also be nested.

Structs can also include both default fields and optional fields. This can be quite useful when you have many fields but don't want to keep respecifying them.

Structs are also useful as return values from *getters* or other internal functions. They effectively allow a single getter to return multiple return values.

The order of fields does not matter. Unlike other languages, Tact does not have any padding between fields.

## Structs vs. messages

Structs and messages are almost identical with the only difference that messages have a 32-bit header containing their unique numeric id. This allows messages to be used with receivers since the contract can tell different types of messages apart based on this id.`,k=`import "@stdlib/deploy";

struct Point {
    x: Int as int64;
    y: Int as int64;
}

struct Params {
    name: String = "Satoshi";   // default value
    age: Int? = null;           // optional field
    point: Point;               // nested structs
}

message Add {
    point: Point;               // message can hold a struct
}

contract Structs with Deployable {

    // contract persistent state variables
    s1: Point;
    s2: Params;

    init() {
        self.s1 = Point{x: 2, y: 3};
        self.s2 = Params{point: self.s1};
    }

    receive("show ops") {
        // temporary variable
        let s: Point = Point{x: 4, y: 5};

        self.s1 = s;
    }

    receive(msg: Add) {
        self.s1.x = self.s1.x + msg.point.x;
        self.s1.y = self.s1.y + msg.point.y;
    }

    get fun point(): Point {
        return self.s1;
    }

    get fun params(): Params {
        return self.s2;
    }
}`;function P(n){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(n.queryId,64)}}function S(n){return e=>{let t=e;t.storeInt(n.x,64),t.storeInt(n.y,64)}}function u(n){let e=n.readBigNumber(),t=n.readBigNumber();return{$$type:"Point",x:e,y:t}}function v(n){let e=n.readString(),t=n.readBigNumberOpt();const o=u(n.readTuple());return{$$type:"Params",name:e,age:t,point:o}}function D(n){return e=>{let t=e;t.storeUint(4279624855,32),t.store(S(n.point))}}async function m(){const n=i.Cell.fromBase64("te6ccgECFQEAA0IAART/APSkE/S88sgLAQIBYgIDAuzQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVFds88uCCyPhDAcx/AcoAVVBGVALKP8o/RDTIUATPFslQBMwhbrOZfwHKAIEBAc8AlHAyygDiWQLKP8o/ye1UEgQCAVgJCgLw7aLt+wGSMH/gcCHXScIflTAg1wsf3iCCEP8V5Je6jh0w0x8BghD/FeSXuvLggdI/0j9ZbBJQd6BQVqAEf+AgghCUapi2uo6oMNMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8n4QgFwbds8f+DAAJEw4w1wBQYBOm1tIm6zmVsgbvLQgG8iAZEy4hAkcAMEgEJQI9s8BwBg+QGC8K6bFfDVDpUWTvZ3/rxXpfmuN5s6z3IbaUpILHfbZcPVupk0NHR1UFR/2zHgAcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AAgAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwCASALDAIBSA4PAhG0bttnm2eNjFASDQC5t3owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwTgN6k73yqLLeOOp6e8CrOGTQThOy6ctWadluZ0HSzbKM3RSQAARTVAIBSBARAHWybuNDVpcGZzOi8vUW1XNXF3VllRWWV0S0gyNWpHRFJVdXJrTFR0cVpLYlczeW5CNEF3Q1BCcDhBU4IAAQqr7tRNDSAAECFKrV2zzbPGxkbwISEwF+7UTQ1AH4Y9IAAY4k0j/SP1kC1AHQAdIAAZWBAQHXAJJtAeLSP9I/WRAkECMQRmwW4DD4KNcLCoMJuvLgids8FAAIVHMhIwAecnNci3U2F0b3NoaYAm0C"),e=i.Cell.fromBase64("te6cckECFwEAA0wAAQHAAQEFoTyfAgEU/wD0pBP0vPLICwMCAWIPBAIBWAsFAgFIBwYAdbJu40NWlwZnM6Ly9RbVc1cXdWWVFZZXRLSDI1akdEUlV1cmtMVHRxWktiVzN5bkI0QXdDUEJwOEFTggAgFICggCFKrV2zzbPGxkbwIVCQAIVHMhIwAQqr7tRNDSAAECASANDAC5t3owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwTgN6k73yqLLeOOp6e8CrOGTQThOy6ctWadluZ0HSzbKM3RSQAhG0bttnm2eNjFAVDgAEU1QC7NAB0NMDAXGwowH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIVFBTA28E+GEC+GLbPFUV2zzy4ILI+EMBzH8BygBVUEZUAso/yj9ENMhQBM8WyVAEzCFus5l/AcoAgQEBzwCUcDLKAOJZAso/yj/J7VQVEALw7aLt+wGSMH/gcCHXScIflTAg1wsf3iCCEP8V5Je6jh0w0x8BghD/FeSXuvLggdI/0j9ZbBJQd6BQVqAEf+AgghCUapi2uo6oMNMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8n4QgFwbds8f+DAAJEw4w1wEhEAYPkBgvCumxXw1Q6VFk72d/68V6X5rjebOs9yG2lKSCx322XD1bqZNDR0dVBUf9sx4AE6bW0ibrOZWyBu8tCAbyIBkTLiECRwAwSAQlAj2zwTAcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7ABQAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwBfu1E0NQB+GPSAAGOJNI/0j9ZAtQB0AHSAAGVgQEB1wCSbQHi0j/SP1kQJBAjEEZsFuAw+CjXCwqDCbry4InbPBYAHnJzXIt1NhdG9zaGmAJtAi0aAXc=");let t=i.beginCell();t.storeRef(e),t.storeUint(0,1);const o=t.endCell();return{code:n,data:o}}const E={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}},H=[{name:"StateInit",header:null,fields:[{name:"code",type:{kind:"simple",type:"cell",optional:!1}},{name:"data",type:{kind:"simple",type:"cell",optional:!1}}]},{name:"Context",header:null,fields:[{name:"bounced",type:{kind:"simple",type:"bool",optional:!1}},{name:"sender",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"raw",type:{kind:"simple",type:"slice",optional:!1}}]},{name:"SendParameters",header:null,fields:[{name:"bounce",type:{kind:"simple",type:"bool",optional:!1}},{name:"to",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"mode",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"body",type:{kind:"simple",type:"cell",optional:!0}},{name:"code",type:{kind:"simple",type:"cell",optional:!0}},{name:"data",type:{kind:"simple",type:"cell",optional:!0}}]},{name:"Deploy",header:2490013878,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"DeployOk",header:2952335191,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"FactoryDeploy",header:1829761339,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}},{name:"cashback",type:{kind:"simple",type:"address",optional:!1}}]},{name:"Point",header:null,fields:[{name:"x",type:{kind:"simple",type:"int",optional:!1,format:64}},{name:"y",type:{kind:"simple",type:"int",optional:!1,format:64}}]},{name:"Params",header:null,fields:[{name:"name",type:{kind:"simple",type:"string",optional:!1}},{name:"age",type:{kind:"simple",type:"int",optional:!0,format:257}},{name:"point",type:{kind:"simple",type:"Point",optional:!1}}]},{name:"Add",header:4279624855,fields:[{name:"point",type:{kind:"simple",type:"Point",optional:!1}}]}],T=[{name:"point",arguments:[],returnType:{kind:"simple",type:"Point",optional:!1}},{name:"params",arguments:[],returnType:{kind:"simple",type:"Params",optional:!1}}],L=[{receiver:"internal",message:{kind:"text",text:"show ops"}},{receiver:"internal",message:{kind:"typed",type:"Add"}},{receiver:"internal",message:{kind:"typed",type:"Deploy"}}];class d{constructor(e,t){l(this,"address");l(this,"init");l(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"FactoryDeploy",header:1829761339,fields:[]},{name:"Point",header:null,fields:[]},{name:"Params",header:null,fields:[]},{name:"Add",header:4279624855,fields:[]}],types:H,getters:T,receivers:L,errors:E});this.address=e,this.init=t}static async init(){return await m()}static async fromInit(){const e=await m(),t=i.contractAddress(0,e);return new d(t,e)}static fromAddress(e){return new d(e)}async send(e,t,o,a){let s=null;if(a==="show ops"&&(s=i.beginCell().storeUint(0,32).storeStringTail(a).endCell()),a&&typeof a=="object"&&!(a instanceof i.Slice)&&a.$$type==="Add"&&(s=i.beginCell().store(D(a)).endCell()),a&&typeof a=="object"&&!(a instanceof i.Slice)&&a.$$type==="Deploy"&&(s=i.beginCell().store(P(a)).endCell()),s===null)throw new Error("Invalid message type");await e.internal(t,{...o,body:s})}async getPoint(e){let t=new i.TupleBuilder,o=(await e.get("point",t.build())).stack;return u(o)}async getParams(e){let t=new i.TupleBuilder,o=(await e.get("params",t.build())).stack;return v(o)}}function N(n,e,t){let o;C(n,c,r=>t(2,o=r));let a,s;return I(c,o={markdown:Q,tactCode:k,deploy:async()=>{const r=await B.Blockchain.create(),p=await r.treasury("deployer");a=p.getSender(),s=r.openContract(await d.fromInit());const y={[p.address.toString()]:"deployer",[s.address.toString()]:"contract"};return[[s],y,[await s.send(p.getSender(),{value:i.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{"show ops":async()=>[await s.send(a,{value:i.toNano(1)},"show ops")],"Add{Point{1,-1}}":async()=>[await s.send(a,{value:i.toNano(1)},{$$type:"Add",point:{$$type:"Point",x:1n,y:-1n}})]},getters:{point:async()=>await s.getPoint(),params:async()=>await s.getParams()},prev:A(import.meta.url).prev,next:A(import.meta.url).next},o),[]}class J extends w{constructor(e){super(),h(this,e,N,null,b,{})}}export{J as default};
