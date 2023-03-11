var w=Object.defineProperty;var m=(n,e,t)=>e in n?w(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var i=(n,e,t)=>(m(n,typeof e!="symbol"?e+"":e,t),t);import{S as C,i as y,s as I,I as p,ac as B}from"../../../../chunks/index-1d4083c1.js";import{d as r,g as l,s as d}from"../../../../chunks/store-568ba917.js";import{d as f}from"../../../../chunks/index-4450da48.js";const D=`# Constants

Unlike variables, constants cannot change. Their values are calculated in *compile-time* and cannot change during execution.

Constant initializations must be relatively simple and only rely on values known during compilation. If you add two numbers for example, the compiler will calculate the result during build and put the result in your compiled code.

You can read constants both in *receivers* and in *getters*.

Unlike contract variables, constants don't consume space in persistent state. Their values are stored directly in the code cell.`,J=`import "@stdlib/deploy";

// global constants are calculated in compile-time and can't change
const GlobalConst1: Int = 1000 + ton("1.24") + pow(10, 9);

contract Constants with Deployable {

    // contract constants are calculated in compile-time and can't change
    const ContractConst1: Int = 2000 + ton("1.25") + pow(10, 9);
    
    // if your contract can be in multiple states, constants are an easy alternative to enums
    const StateUnpaid: Int = 0;
    const StatePaid: Int = 1;
    const StateDelivered: Int = 2;
    const StateDisputed: Int = 3;

    init() {}

    get fun sum(): Int {
        // you can read the constants anywhere
        return GlobalConst1 + self.ContractConst1 + self.StatePaid;
    }
}`;function b(n){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(n.queryId,64)}}async function g(){const n=r.Cell.fromBase64("te6ccgECDAEAAiMAART/APSkE/S88sgLAQIBYgIDAtjQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GLtRNDUAfhj0gAwkW2Ojfgo1wsKgwm68uCJ2zziWds8MDDI+EMBzH8BygDJ7VQKBAIBWAgJAYJwIddJwh+VMCDXCx/eApJbf+ABghCUapi2uo6i0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yds8f+AwcAUBGn/4QnBYA4BCAW1t2zwGAc7IcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxZQA/oCcAHKaCNusyVus7GXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsABwCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAC5u70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIAkG4v/7UTQ1AH4Y9IAMJFtjo34KNcLCoMJuvLgids84ts8gKCwACbQAOMIIRC6ACOQ=="),e=r.Cell.fromBase64("te6cckECDgEAAi0AAQHAAQEFoTvZAgEU/wD0pBP0vPLICwMCAWIIBAIBWAcFAkG4v/7UTQ1AH4Y9IAMJFtjo34KNcLCoMJuvLgids84ts8gNBgAOMIIRC6ACOQC5u70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIAtjQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GLtRNDUAfhj0gAwkW2Ojfgo1wsKgwm68uCJ2zziWds8MDDI+EMBzH8BygDJ7VQNCQGCcCHXScIflTAg1wsf3gKSW3/gAYIQlGqYtrqOotMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8nbPH/gMHAKARp/+EJwWAOAQgFtbds8CwHOyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WUAP6AnABymgjbrMlbrOxlzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AAwAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwAAm1QnAyK");let t=r.beginCell();t.storeRef(e),t.storeUint(0,1);const o=t.endCell();return{code:n,data:o}}const v={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class c{constructor(e,t){i(this,"address");i(this,"init");i(this,"abi",{errors:v});this.address=e,this.init=t}static async init(){return await g()}static async fromInit(){const e=await g(),t=r.contractAddress(0,e);return new c(t,e)}static fromAddress(e){return new c(e)}async send(e,t,o,s){let a=null;if(s&&typeof s=="object"&&!(s instanceof r.Slice)&&s.$$type==="Deploy"&&(a=r.beginCell().store(b(s)).endCell()),a===null)throw new Error("Invalid message type");await e.internal(t,{...o,body:a})}async getSum(e){let t=new r.TupleBuilder;return(await e.get("sum",t.build())).stack.readBigNumber()}}function H(n,e,t){let o;p(n,d,a=>t(2,o=a));let s;return B(d,o={markdown:D,tactCode:J,deploy:async()=>{const a=await f.Blockchain.create(),A=await a.treasury("deployer");A.getSender(),s=a.openContract(await c.fromInit());const u={[A.address.toString()]:"deployer",[s.address.toString()]:"contract"};return[s,u,[await s.send(A.getSender(),{value:r.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{},getters:{sum:async()=>await s.getSum()},prev:l(import.meta.url).prev,next:l(import.meta.url).next},o),[]}class S extends C{constructor(e){super(),y(this,e,H,null,I,{})}}export{S as default};
