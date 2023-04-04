var p=Object.defineProperty;var f=(n,e,t)=>e in n?p(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var l=(n,e,t)=>(f(n,typeof e!="symbol"?e+"":e,t),t);import{S as w,i as B,s as h,I as C,ac as I}from"../chunks/index.9fe14626.js";import{d as r,g as d,s as u}from"../chunks/store.d3ab02ad.js";import{d as b}from"../chunks/index.78404594.js";const Q=`# Structs

Structs allow you to combine multiple primitives together in a more semantic way. They're a great tool to make your code more readable.

Structs can define complex data types that contain multiple fields of different types. They can also be nested.

Structs can also include both default fields and optional fields. This can be quite useful when you have many fields but don't want to keep respecifying them.

Structs are also useful as return values from *getters* or other internal functions. They effectively allow a single getter to return multiple return values.

The order of fields does not matter. Unlike other languages, Tact does not have any padding between fields.

## Structs vs. messages

Structs and messages are almost identical with the only difference that messages have a 32-bit header containing their unique numeric id. This allows messages to be used with receivers since the contract can tell different types of messages apart based on this id.`,P=`import "@stdlib/deploy";

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
}`;function E(n){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(n.queryId,64)}}function S(n){return e=>{let t=e;t.storeInt(n.x,64),t.storeInt(n.y,64)}}function m(n){let e=n.readBigNumber(),t=n.readBigNumber();return{$$type:"Point",x:e,y:t}}function v(n){let e=n.readString(),t=n.readBigNumberOpt();const o=m(n.readTuple());return{$$type:"Params",name:e,age:t,point:o}}function T(n){return e=>{let t=e;t.storeUint(4279624855,32),t.store(S(n.point))}}async function g(){const n=r.Cell.fromBase64("te6ccgECFAEAAygAART/APSkE/S88sgLAQIBYgIDAujQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVFds8MMj4QwHMfwHKAFVQRlQCyj/KP0Q0yFAEzxbJUATMIW6zmX8BygCBAQHPAJRwMsoA4lkCyj/KP8ntVBEEAgFYCAkC9O2i7ftwIddJwh+VMCDXCx/eApJbf+AhghD/FeSXuo4dMdMfAYIQ/xXkl7ry4IHSP9I/WWwSUHegUFagBH/gIYIQlGqYtrqOrjHTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/Jf/hCcFgDgEIBbW3bPH/gAcAABQYByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsABwBsjjD5AYLwrpsV8NUOlRZO9nf+vFel+a43mzrPchtpSkgsd9tlw9W6mTQ0dHVQVH/bMeCRMOJwAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAgEgCgsCAUgNDgIRtG7bZ5tnjYxQEQwAubd6ME4LnYerpZXPY9CdhzrJUKNs0E4TusalpWyPlmRadeW/vixHME4ECrgDcAzscpnLB1XI5LZYcE4DepO98qiy3jjqenvAqzhk0E4TsunLVmnZbmdB0s2yjN0UkAAEU1QCAUgPEAB1sm7jQ1aXBmczovL1FtUFlRRXdtb3NLMmthOTh0aGhnemtxSkttZ2k1S1NnWGZqQnZDclJtWnBkM2+CAAEKq+7UTQ0gABAhSq1ds82zxsZG8CERIBfu1E0NQB+GPSAAGOJNI/0j9ZAtQB0AHSAAGVgQEB1wCSbQHi0j/SP1kQJBAjEEZsFuAw+CjXCwqDCbry4InbPBMACFRzISMAHnJzXIt1NhdG9zaGmAJtAg=="),e=r.Cell.fromBase64("te6cckECFgEAAzIAAQHAAQEFoTyfAgEU/wD0pBP0vPLICwMCAWIPBAIBWAsFAgFIBwYAdbJu40NWlwZnM6Ly9RbVBZUUV3bW9zSzJrYTk4dGhoZ3prcUpLbWdpNUtTZ1hmakJ2Q3JSbVpwZDNvggAgFICggCFKrV2zzbPGxkbwIUCQAIVHMhIwAQqr7tRNDSAAECASANDAC5t3owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwTgN6k73yqLLeOOp6e8CrOGTQThOy6ctWadluZ0HSzbKM3RSQAhG0bttnm2eNjFAUDgAEU1QC6NAB0NMDAXGwowH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIVFBTA28E+GEC+GLbPFUV2zwwyPhDAcx/AcoAVVBGVALKP8o/RDTIUATPFslQBMwhbrOZfwHKAIEBAc8AlHAyygDiWQLKP8o/ye1UFBAC9O2i7ftwIddJwh+VMCDXCx/eApJbf+AhghD/FeSXuo4dMdMfAYIQ/xXkl7ry4IHSP9I/WWwSUHegUFagBH/gIYIQlGqYtrqOrjHTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/Jf/hCcFgDgEIBbW3bPH/gAcAAEhEAbI4w+QGC8K6bFfDVDpUWTvZ3/rxXpfmuN5s6z3IbaUpILHfbZcPVupk0NHR1UFR/2zHgkTDicAHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wATAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAX7tRNDUAfhj0gABjiTSP9I/WQLUAdAB0gABlYEBAdcAkm0B4tI/0j9ZECQQIxBGbBbgMPgo1wsKgwm68uCJ2zwVAB5yc1yLdTYXRvc2hpgCbQLkYOxW");let t=r.beginCell();t.storeRef(e),t.storeUint(0,1);const o=t.endCell();return{code:n,data:o}}const H={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class A{constructor(e,t){l(this,"address");l(this,"init");l(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"Point",header:null,fields:[]},{name:"Params",header:null,fields:[]},{name:"Add",header:4279624855,fields:[]}],errors:H});this.address=e,this.init=t}static async init(){return await g()}static async fromInit(){const e=await g(),t=r.contractAddress(0,e);return new A(t,e)}static fromAddress(e){return new A(e)}async send(e,t,o,s){let a=null;if(s==="show ops"&&(a=r.beginCell().storeUint(0,32).storeStringTail(s).endCell()),s&&typeof s=="object"&&!(s instanceof r.Slice)&&s.$$type==="Add"&&(a=r.beginCell().store(T(s)).endCell()),s&&typeof s=="object"&&!(s instanceof r.Slice)&&s.$$type==="Deploy"&&(a=r.beginCell().store(E(s)).endCell()),a===null)throw new Error("Invalid message type");await e.internal(t,{...o,body:a})}async getPoint(e){let t=new r.TupleBuilder,o=(await e.get("point",t.build())).stack;return m(o)}async getParams(e){let t=new r.TupleBuilder,o=(await e.get("params",t.build())).stack;return v(o)}}function M(n,e,t){let o;C(n,u,i=>t(2,o=i));let s,a;return I(u,o={markdown:Q,tactCode:P,deploy:async()=>{const i=await b.Blockchain.create(),c=await i.treasury("deployer");s=c.getSender(),a=i.openContract(await A.fromInit());const y={[c.address.toString()]:"deployer",[a.address.toString()]:"contract"};return[[a],y,[await a.send(c.getSender(),{value:r.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{"show ops":async()=>[await a.send(s,{value:r.toNano(1)},"show ops")],"Add{Point{1,-1}}":async()=>[await a.send(s,{value:r.toNano(1)},{$$type:"Add",point:{$$type:"Point",x:1n,y:-1n}})]},getters:{point:async()=>await a.getPoint(),params:async()=>await a.getParams()},prev:d(import.meta.url).prev,next:d(import.meta.url).next},o),[]}class k extends w{constructor(e){super(),B(this,e,M,null,h,{})}}export{k as default};
