var f=Object.defineProperty;var y=(n,e,t)=>e in n?f(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var i=(n,e,t)=>(y(n,typeof e!="symbol"?e+"":e,t),t);import{S as p,i as w,s as C,I,ac as Q}from"../chunks/index.9fe14626.js";import{d as r,g as d,s as u}from"../chunks/store.2b42c038.js";import{d as h}from"../chunks/index.9fe59178.js";const b=`# Structs

Structs allow you to combine multiple primitives together in a more semantic way. They're a great tool to make your code more readable.

Structs can define complex data types that contain multiple fields of different types. They can also be nested.

Structs can also include both default fields and optional fields. This can be quite useful when you have many fields but don't want to keep respecifying them.

Structs are also useful as return values from *getters* or other internal functions. They effectively allow a single getter to return multiple return values.

The order of fields does not matter. Unlike other languages, Tact does not have any padding between fields.

## Structs vs. messages

Structs and messages are actually very similar with the only difference that messages are designed to be serialized and structs aren't.

Messages have a header containing their unique numeric id and therefore can be used with receivers (the contract can tell messages apart based on this id). Unlike messages, struct definitions do not specify field sizes like \`as uint32\`.`,E=`import "@stdlib/deploy";

struct Point {
    x: Int;
    y: Int;
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
}`;function H(n){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(n.queryId,64)}}function v(n){return e=>{let t=e;t.storeInt(n.x,257),t.storeInt(n.y,257)}}function B(n){let e=n.readBigNumber(),t=n.readBigNumber();return{$$type:"Point",x:e,y:t}}function U(n){let e=n.readString(),t=n.readBigNumberOpt();const o=B(n.readTuple());return{$$type:"Params",name:e,age:t,point:o}}function M(n){return e=>{let t=e;t.storeUint(3699268221,32),t.store(v(n.point))}}async function g(){const n=r.Cell.fromBase64("te6ccgECFgEAA1YAART/APSkE/S88sgLAQIBYgIDA3bQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVFds8MBMEBQIBWAoLAqztou37cCHXScIflTAg1wsf3gKSW3/gIYIQ3H5afbqOIzHTHwGCENx+Wn268uCBgQEB1wCBAQHXAFlsElB3oFBWoAR/4CGCEJRqmLa64wIBwACRMOMNcAYHAJbI+EMBzH8BygBVUEZUAoEBAc8AgQEBzwDIQxRFBchQBM8WyVAEzCFus5l/AcoAgQEBzwCUcDLKAOJZAoEBAc8AgQEBzwDJAczJ7VQBXDHTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/Jf/hCcFgDgEIBbW3bPH8IAGD5AYLwrpsV8NUOlRZO9nf+vFel+a43mzrPchtpSkgsd9tlw9W6mTQ0dHVQVH/bMeAByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsACQCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAIBIAwNAgFIDxACEbRu22ebZ42MUBMOALm3ejBOC52Hq6WVz2PQnYc6yVCjbNBOE7rGpaVsj5ZkWnXlv74sRzBOBAq4A3AM7HKZywdVyOS2WHBOA3qTvfKost446np7wKs4ZNBOE7Lpy1Zp2W5nQdLNsozdFJAABFNUAgFIERIAdbJu40NWlwZnM6Ly9RbWJvMXI0Vjc4bTVrN0V2SGQ0eGd6eko4TTFUVkZjWHRBU1h0U3Y1QlZKbmVVggABCqvu1E0NIAAQIUqtXbPNs8bGRvAhMUAaLtRNDUAfhj0gABjjaBAQHXAIEBAdcAWQLUAdDUAdAB0gABlYEBAdcAkm0B4oEBAdcAgQEB1wBZECQQIzQQRlUCbBbgMPgo1wsKgwm68uCJ2zwVAAhUcyEjAB5yc1yLdTYXRvc2hpgCbQI="),e=r.Cell.fromBase64("te6cckECGAEAA2AAAQHAAQEFoTyfAgEU/wD0pBP0vPLICwMCAWIPBAIBWAsFAgFIBwYAdbJu40NWlwZnM6Ly9RbWJvMXI0Vjc4bTVrN0V2SGQ0eGd6eko4TTFUVkZjWHRBU1h0U3Y1QlZKbmVVggAgFICggCFKrV2zzbPGxkbwIWCQAIVHMhIwAQqr7tRNDSAAECASANDAC5t3owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwTgN6k73yqLLeOOp6e8CrOGTQThOy6ctWadluZ0HSzbKM3RSQAhG0bttnm2eNjFAWDgAEU1QDdtAB0NMDAXGwowH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIVFBTA28E+GEC+GLbPFUV2zwwFhEQAJbI+EMBzH8BygBVUEZUAoEBAc8AgQEBzwDIQxRFBchQBM8WyVAEzCFus5l/AcoAgQEBzwCUcDLKAOJZAoEBAc8AgQEBzwDJAczJ7VQCrO2i7ftwIddJwh+VMCDXCx/eApJbf+AhghDcflp9uo4jMdMfAYIQ3H5afbry4IGBAQHXAIEBAdcAWWwSUHegUFagBH/gIYIQlGqYtrrjAgHAAJEw4w1wExIAYPkBgvCumxXw1Q6VFk72d/68V6X5rjebOs9yG2lKSCx322XD1bqZNDR0dVBUf9sx4AFcMdMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8l/+EJwWAOAQgFtbds8fxQByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsAFQCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAGi7UTQ1AH4Y9IAAY42gQEB1wCBAQHXAFkC1AHQ1AHQAdIAAZWBAQHXAJJtAeKBAQHXAIEBAdcAWRAkECM0EEZVAmwW4DD4KNcLCoMJuvLgids8FwAecnNci3U2F0b3NoaYAm0CJyez6Q==");let t=r.beginCell();t.storeRef(e),t.storeUint(0,1);const o=t.endCell();return{code:n,data:o}}const P={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class l{constructor(e,t){i(this,"address");i(this,"init");i(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"Point",header:null,fields:[]},{name:"Params",header:null,fields:[]},{name:"Add",header:3699268221,fields:[]}],errors:P});this.address=e,this.init=t}static async init(){return await g()}static async fromInit(){const e=await g(),t=r.contractAddress(0,e);return new l(t,e)}static fromAddress(e){return new l(e)}async send(e,t,o,s){let a=null;if(s==="show ops"&&(a=r.beginCell().storeUint(0,32).storeStringTail(s).endCell()),s&&typeof s=="object"&&!(s instanceof r.Slice)&&s.$$type==="Add"&&(a=r.beginCell().store(M(s)).endCell()),s&&typeof s=="object"&&!(s instanceof r.Slice)&&s.$$type==="Deploy"&&(a=r.beginCell().store(H(s)).endCell()),a===null)throw new Error("Invalid message type");await e.internal(t,{...o,body:a})}async getPoint(e){let t=new r.TupleBuilder,o=(await e.get("point",t.build())).stack;return B(o)}async getParams(e){let t=new r.TupleBuilder,o=(await e.get("params",t.build())).stack;return U(o)}}function x(n,e,t){let o;I(n,u,A=>t(2,o=A));let s,a;return Q(u,o={markdown:b,tactCode:E,deploy:async()=>{const A=await h.Blockchain.create(),c=await A.treasury("deployer");s=c.getSender(),a=A.openContract(await l.fromInit());const m={[c.address.toString()]:"deployer",[a.address.toString()]:"contract"};return[[a],m,[await a.send(c.getSender(),{value:r.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{"show ops":async()=>[await a.send(s,{value:r.toNano(1)},"show ops")],"Add{Point{1,-1}}":async()=>[await a.send(s,{value:r.toNano(1)},{$$type:"Add",point:{$$type:"Point",x:1n,y:-1n}})]},getters:{point:async()=>await a.getPoint(),params:async()=>await a.getParams()},prev:d(import.meta.url).prev,next:d(import.meta.url).next},o),[]}class F extends p{constructor(e){super(),w(this,e,x,null,C,{})}}export{F as default};
