var d=Object.defineProperty;var C=(n,e,t)=>e in n?d(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var c=(n,e,t)=>(C(n,typeof e!="symbol"?e+"":e,t),t);import{S as w,i as m,s as I,I as y,ac as p}from"../../../../chunks/index-1d4083c1.js";import{d as r,s as l}from"../../../../chunks/store-ab11a47e.js";import{d as B,g}from"../../../../chunks/helpers-be3eeda0.js";const f=`# Constants

Unlike variables, constants cannot change. Their values are calculated in *compile-time* and cannot change during execution.

Constant initializations must be relatively simple and only rely on values known during compilation. If you add two numbers for example, the compiler will calculate the result during build and put the result in your compiled code.

You can read constants both in *receivers* and in *getters*.

Unlike contract variables, constants don't consume space in persistent state. Their values are stored directly in the code cell.`,b=`import "@stdlib/deploy";

// global constants are calculated in compile-time and can't change
const GLOBAL_CONST1: Int = 1000 + ton("1.24") + pow(10, 9);

contract Constants with Deployable {

    // contract constants are calculated in compile-time and can't change
    const CONTRACT_CONST1: Int = 2000 + ton("1.25") + pow(10, 9);
    
    // if your contract can be in multiple states, constants are an easy alternative to enums
    const STATE_UNPAID: Int = 0;
    const STATE_PAID: Int = 1;
    const STATE_DELIVERED: Int = 2;
    const STATE_DISPUTED: Int = 3;

    init() {}

    get fun sum(): Int {
        // you can read the constants anywhere
        return GLOBAL_CONST1 + self.CONTRACT_CONST1 + self.STATE_PAID;
    }
}`;function D(n){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(n.queryId,64)}}async function u(){const n=r.Cell.fromBase64("te6ccgECDAEAAiUAART/APSkE/S88sgLAQIBYgIDAtDQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJIkFVbwT4Ye1E0NQB+GLSADCRbY6N+CjXCwqDCbry4InbPOJZ2zwwMMj4QgHMfwHKAMntVAoEAgFYCAkBgnAh10nCH5UwINcLH94Cklt/4AGCEJRqmLa6jqLTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J2zx/4DBwBQEm+EFvJBAjXwN/cFADgEIBbW3bPAYBzshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFlAD+gJwAcpoI26zJW6zsZczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAHAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMALm7vRgnBc7D1dLK57HoTsOdZKhRtmgnCd1jUtK2R8syLTry398WI5gnAgVcAbgGdjlM5YOq5HJbLDgnAb1J3vlUWW8cdT094FWcMmgnCdl05as07LczoOlm2UZuikgCQbi//tRNDUAfhi0gAwkW2Ojfgo1wsKgwm68uCJ2zzi2zyAoLAAJtAA4wghELoAI5"),e=r.Cell.fromBase64("te6cckECDgEAAi8AAQHAAQEFoTvZAgEU/wD0pBP0vPLICwMCAWIIBAIBWAcFAkG4v/7UTQ1AH4YtIAMJFtjo34KNcLCoMJuvLgids84ts8gNBgAOMIIRC6ACOQC5u70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIAtDQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJIkFVbwT4Ye1E0NQB+GLSADCRbY6N+CjXCwqDCbry4InbPOJZ2zwwMMj4QgHMfwHKAMntVA0JAYJwIddJwh+VMCDXCx/eApJbf+ABghCUapi2uo6i0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yds8f+AwcAoBJvhBbyQQI18Df3BQA4BCAW1t2zwLAc7IcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxZQA/oCcAHKaCNusyVus7GXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsADACYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAACbdUVTRw=");let t=r.beginCell();t.storeRef(e),t.storeUint(0,1);const o=t.endCell();return{code:n,data:o}}const T={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class A{constructor(e,t){c(this,"address");c(this,"init");c(this,"abi",{errors:T});this.address=e,this.init=t}static async init(){return await u()}static async fromInit(){const e=await u(),t=r.contractAddress(0,e);return new A(t,e)}static fromAddress(e){return new A(e)}async send(e,t,o,s){let a=null;if(s&&typeof s=="object"&&!(s instanceof r.Slice)&&s.$$type==="Deploy"&&(a=r.beginCell().store(D(s)).endCell()),a===null)throw new Error("Invalid message type");await e.internal(t,{...o,body:a})}async getSum(e){let t=new r.TupleBuilder;return(await e.get("sum",t.build())).stack.readBigNumber()}}function h(n,e,t){let o;y(n,l,a=>t(2,o=a));let s;return p(l,o={markdown:f,tactCode:b,deploy:async()=>{const a=await B.Blockchain.create(),i=await a.treasury("deployer");return i.getSender(),s=a.openContract(await A.fromInit()),[await s.send(i.getSender(),{value:r.toNano(1)},{$$type:"Deploy",queryId:0n})]},messages:{},getters:{sum:async()=>await s.getSum()},prev:g(import.meta.url).prev,next:g(import.meta.url).next},o),[]}class M extends w{constructor(e){super(),m(this,e,h,null,I,{})}}export{M as default};
