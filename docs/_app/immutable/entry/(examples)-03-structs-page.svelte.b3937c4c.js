var y=Object.defineProperty;var m=(n,e,t)=>e in n?y(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var i=(n,e,t)=>(m(n,typeof e!="symbol"?e+"":e,t),t);import{S as C,i as f,s as p,I as Q,ac as I}from"../chunks/index.9fe14626.js";import{d as o,g as d,s as g}from"../chunks/store.7ab6b232.js";import{d as E}from"../chunks/index.639aa391.js";const b=`# Structs

Structs allow you to combine multiple primitives together in a more semantic way. They're a great tool to make your code more readable.

Structs can define complex data types that contain multiple fields of different types. They can also be nested.

Structs can also include both default fields and optional fields. This can be quite useful when you have many fields but don't want to keep respecifying them.

Structs are also useful as return values from *getters* or other internal functions. They effectively allow a single getter to return multiple return values.

## Structs and messages

Structs and messages are actually very similar with the only difference that messages can be serialized, have a header when serialized and therefore can be used as receivers. Unlike messages, struct definitions do not specify field sizes like \`as uint32\`.`,h=`import "@stdlib/deploy";

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
}`;function H(n){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(n.queryId,64)}}function D(n){return e=>{let t=e;t.storeInt(n.x,257),t.storeInt(n.y,257)}}function B(n){let e=n.readBigNumber(),t=n.readBigNumber();return{$$type:"Point",x:e,y:t}}function x(n){let e=n.readString(),t=n.readBigNumberOpt();const r=B(n.readTuple());return{$$type:"Params",name:e,age:t,point:r}}function S(n){return e=>{let t=e;t.storeUint(3699268221,32),t.store(D(n.point))}}async function u(){const n=o.Cell.fromBase64("te6ccgECEgEAA7IAART/APSkE/S88sgLAQIBYgIDAX7QAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GIEAgFYCwwDsO1E0NQB+GPSAAGONoEBAdcAgQEB1wBZAtQB0NQB0AHSAAGVgQEB1wCSbQHigQEB1wCBAQHXAFkQJBAjNBBGVQJsFo6OMPgo1wsKgwm68uCJ2zziVRXbPDAQBQYC9O2i7ftwIddJwh+VMCDXCx/eApJbf+AhghDcflp9uo4jMdMfAYIQ3H5afbry4IGBAQHXAIEBAdcAWWwSUHegUFagBH/gIYIQlGqYtrqOozHTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J2zx/4AHAAJEw4w1wBwgAlsj4QwHMfwHKAFVQRlQCgQEBzwCBAQHPAMhDFEUFyFAEzxbJUATMIW6zmX8BygCBAQHPAJRwMsoA4lkCgQEBzwCBAQHPAMkBzMntVAEaf/hCcFgDgEIBbW3bPAkAYPkBgvCumxXw1Q6VFk72d/68V6X5rjebOs9yG2lKSCx322XD1bqZNDR0dVBUf9sx4AHOyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WUAP6AnABymgjbrMlbrOxlzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AAoAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwCASANDgKzuG1e1E0NQB+GPSAAGONoEBAdcAgQEB1wBZAtQB0NQB0AHSAAGVgQEB1wCSbQHigQEB1wCBAQHXAFkQJBAjNBBGVQJsFo6OMPgo1wsKgwm68uCJ2zzi2zxvAoEBECr7Ru3aiaGoA/DHpAADHG0CAgOuAQICA64AsgWoA6GoA6ADpAADKwICA64BJNoDxQICA64BAgIDrgCyIEggRmggjKoE2C0dHGHwUa4WFQYTdeXBE7Z5xbZ5AQDwC5t3owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwTgN6k73yqLLeOOp6e8CrOGTQThOy6ctWadluZ0HSzbKM3RSQAARfBAAecnNci3U2F0b3NoaYAm0CAARsJA=="),e=o.Cell.fromBase64("te6cckECFAEAA7wAAQHAAQEFoTyfAgEU/wD0pBP0vPLICwMCAWILBAIBWAcFArO4bV7UTQ1AH4Y9IAAY42gQEB1wCBAQHXAFkC1AHQ1AHQAdIAAZWBAQHXAJJtAeKBAQHXAIEBAdcAWRAkECM0EEZVAmwWjo4w+CjXCwqDCbry4InbPOLbPG8CgTBgAEbCQCASAJCAC5t3owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwTgN6k73yqLLeOOp6e8CrOGTQThOy6ctWadluZ0HSzbKM3RSQAq+0bt2omhqAPwx6QAAxxtAgIDrgECAgOuALIFqAOhqAOgA6QAAysCAgOuASTaA8UCAgOuAQICA64AsiBIIEZoIIyqBNgtHRxh8FGuFhUGE3XlwRO2ecW2eQEwoABF8EAX7QAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GIMA7DtRNDUAfhj0gABjjaBAQHXAIEBAdcAWQLUAdDUAdAB0gABlYEBAdcAkm0B4oEBAdcAgQEB1wBZECQQIzQQRlUCbBaOjjD4KNcLCoMJuvLgids84lUV2zwwEw4NAJbI+EMBzH8BygBVUEZUAoEBAc8AgQEBzwDIQxRFBchQBM8WyVAEzCFus5l/AcoAgQEBzwCUcDLKAOJZAoEBAc8AgQEBzwDJAczJ7VQC9O2i7ftwIddJwh+VMCDXCx/eApJbf+AhghDcflp9uo4jMdMfAYIQ3H5afbry4IGBAQHXAIEBAdcAWWwSUHegUFagBH/gIYIQlGqYtrqOozHTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J2zx/4AHAAJEw4w1wEA8AYPkBgvCumxXw1Q6VFk72d/68V6X5rjebOs9yG2lKSCx322XD1bqZNDR0dVBUf9sx4AEaf/hCcFgDgEIBbW3bPBEBzshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFlAD+gJwAcpoI26zJW6zsZczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wASAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAB5yc1yLdTYXRvc2hpgCbQLGzYHW");let t=o.beginCell();t.storeRef(e),t.storeUint(0,1);const r=t.endCell();return{code:n,data:r}}const P={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class l{constructor(e,t){i(this,"address");i(this,"init");i(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"Point",header:null,fields:[]},{name:"Params",header:null,fields:[]},{name:"Add",header:3699268221,fields:[]}],errors:P});this.address=e,this.init=t}static async init(){return await u()}static async fromInit(){const e=await u(),t=o.contractAddress(0,e);return new l(t,e)}static fromAddress(e){return new l(e)}async send(e,t,r,s){let a=null;if(s==="show ops"&&(a=o.beginCell().storeUint(0,32).storeStringTail(s).endCell()),s&&typeof s=="object"&&!(s instanceof o.Slice)&&s.$$type==="Add"&&(a=o.beginCell().store(S(s)).endCell()),s&&typeof s=="object"&&!(s instanceof o.Slice)&&s.$$type==="Deploy"&&(a=o.beginCell().store(H(s)).endCell()),a===null)throw new Error("Invalid message type");await e.internal(t,{...r,body:a})}async getPoint(e){let t=new o.TupleBuilder,r=(await e.get("point",t.build())).stack;return B(r)}async getParams(e){let t=new o.TupleBuilder,r=(await e.get("params",t.build())).stack;return x(r)}}function O(n,e,t){let r;Q(n,g,A=>t(2,r=A));let s,a;return I(g,r={markdown:b,tactCode:h,deploy:async()=>{const A=await E.Blockchain.create(),c=await A.treasury("deployer");s=c.getSender(),a=A.openContract(await l.fromInit());const w={[c.address.toString()]:"deployer",[a.address.toString()]:"contract"};return[[a],w,[await a.send(c.getSender(),{value:o.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{"show ops":async()=>[await a.send(s,{value:o.toNano(1)},"show ops")],"Add{Point{1,-1}}":async()=>[await a.send(s,{value:o.toNano(1)},{$$type:"Add",point:{$$type:"Point",x:1n,y:-1n}})]},getters:{point:async()=>await a.getPoint(),params:async()=>await a.getParams()},prev:d(import.meta.url).prev,next:d(import.meta.url).next},r),[]}class T extends C{constructor(e){super(),f(this,e,O,null,p,{})}}export{T as default};
