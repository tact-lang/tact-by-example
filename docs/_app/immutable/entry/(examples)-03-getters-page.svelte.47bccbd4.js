var w=Object.defineProperty;var B=(a,e,t)=>e in a?w(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var c=(a,e,t)=>(B(a,typeof e!="symbol"?e+"":e,t),t);import{S as I,i as y,s as C,I as m,ac as b}from"../chunks/index.9fe14626.js";import{d as s,g as i,s as l}from"../chunks/store.cab86f52.js";import{d as f}from"../chunks/index.f166c76f.js";const h=`# Getters

Getters are special contract functions that allow users to query information from the contract.

Contract methods starting with the prefix \`get fun\` are all getters. You can define as many getters are you want.

Calling getters is free and does not cost gas. The call is executed by a full node and doesn't go through consensus with all the validators nor is added to a new block.

Getters are read-only, they cannot change the contract persistent state.

## Getters between contracts

A contract cannot execute a getter of another contract. Getters are only executable by end-users off-chain. Since contracts are running on-chain, they do not have access to each other's getters.

So, if you can't call a getter, how can two contracts communicate? The only way for contracts to communicate on-chain is by sending messages to each other. Messages are handled in *receivers*.`,p=`import "@stdlib/deploy";

contract Getters with Deployable {
 
    count: Int as uint32;

    init() {
        self.count = 17;
    }
 
    get fun counter(): Int {
        return self.count;
    }

    get fun location(): Address {
        return myAddress();
    }

    get fun greeting(): String {
        return "hello world";
    }

    get fun sum(a: Int, b: Int): Int {
        return a + b;
    }

    get fun and(a: Bool, b: Bool): Bool {
        return a && b;
    }

    get fun answer(a: Int): String {
        let sb: StringBuilder = beginString();
        sb.append("The meaning of life is ");
        sb.append(a.toString());
        return sb.toString();
    }
}`;function D(a){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(a.queryId,64)}}async function u(){const a=s.Cell.fromBase64("te6ccgECHAEABDsAART/APSkE/S88sgLAQIBYgIDAubQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GLtRNDUAfhj0gABlNMfATGOjjD4KNcLCoMJuvLgids84lnbPDDI+EMBzH8BygABAcsfye1UGAQCASAICQGCcCHXScIflTAg1wsf3gKSW3/gAYIQlGqYtrqOotMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8nbPH/gMHAFARp/+EJwWAOAQgFtbds8BgHOyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WUAP6AnABymgjbrMlbrOxlzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AAcAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwCSb2NV2omhqAPwx6QAAymmPgJjHRxh8FGuFhUGE3XlwRO2ecW2eQYCgIBIAsMABwwi7aGVsbG8gd29ybGSAIBIA0OAgEgFRYCAW4PEAIBIBITAUSqGO1E0NQB+GPSAAGU0x8BMY6OMPgo1wsKgwm68uCJ2zziGAJIqIvtRNDUAfhj0gABlNMfATGOjjD4KNcLCoMJuvLgids84ts8GBEABjD4KAJLshc7UTQ1AH4Y9IAAZTTHwExjo4w+CjXCwqDCbry4InbPOJZ2zyAYFAC5svRgnBc7D1dLK57HoTsOdZKhRtmgnCd1jUtK2R8syLTry398WI5gnAgVcAbgGdjlM5YOq5HJbLDgnAb1J3vlUWW8cdT094FWcMmgnCdl05as07LczoOlm2UZuikgAAZsErACS7V//aiaGoA/DHpAADKaY+AmMdHGHwUa4WFQYTdeXBE7Z5xLO2eQGBcCS7Re/aiaGoA/DHpAADKaY+AmMdHGHwUa4WFQYTdeXBE7Z5xAO2eQGBkABmwSoAAEgBEDejHIbwABb4xtb4yNBdUaGUgbWVhbmluZyBvZiBsaWZlIGlzIINs8Ads82zxvIgHJkyFus5YBbyJZzMnoMdAbGhsA3sghwQCYgC0BywcBowHeIYI4Mnyyc0EZ07epqh25jiBwIHGOFAR6qQymMCWoEqAEqgcCpCHAAEUw5jAzqgLPAY4rbwBwjhEjeqkIEm+MAaQDeqkEIMAAFOYzIqUDnFMCb4GmMFjLBwKlWeQwMeLJ0AC6INdKIddJlyDCACLCALGOSgNvIoB/Is8xqwKhBasCUVW2CCDCAJwgqgIV1xhQM88WQBTeWW8CU0GhwgCZyAFvAlBEoaoCjhIxM8IAmdQw0CDXSiHXSZJwIOLi6F8D"),e=s.Cell.fromBase64("te6cckECHgEABEUAAQHAAQEFoSnDAgEU/wD0pBP0vPLICwMCAWIYBAIBIBYFAgEgDQYCASALBwJLtF79qJoagD8MekAAMppj4CYx0cYfBRrhYVBhN15cETtnnEA7Z5AdCAN6MchvAAFvjG1vjI0F1RoZSBtZWFuaW5nIG9mIGxpZmUgaXMgg2zwB2zzbPG8iAcmTIW6zlgFvIlnMyegx0AoJCgDeyCHBAJiALQHLBwGjAd4hgjgyfLJzQRnTt6mqHbmOIHAgcY4UBHqpDKYwJagSoASqBwKkIcAARTDmMDOqAs8BjitvAHCOESN6qQgSb4wBpAN6qQQgwAAU5jMipQOcUwJvgaYwWMsHAqVZ5DAx4snQALog10oh10mXIMIAIsIAsY5KA28igH8izzGrAqEFqwJRVbYIIMIAnCCqAhXXGFAzzxZAFN5ZbwJTQaHCAJnIAW8CUEShqgKOEjEzwgCZ1DDQINdKIddJknAg4uLoXwMCS7V//aiaGoA/DHpAADKaY+AmMdHGHwUa4WFQYTdeXBE7Z5xLO2eQHQwABmwSoAIBIBIOAgEgEA8AubL0YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIAJLshc7UTQ1AH4Y9IAAZTTHwExjo4w+CjXCwqDCbry4InbPOJZ2zyAdEQAGbBKwAgFuFRMCSKiL7UTQ1AH4Y9IAAZTTHwExjo4w+CjXCwqDCbry4InbPOLbPB0UAAYw+CgBRKoY7UTQ1AH4Y9IAAZTTHwExjo4w+CjXCwqDCbry4InbPOIdAkm9jVdqJoagD8MekAAMppj4CYx0cYfBRrhYVBhN15cETtnnFtnkHRcAHDCLtoZWxsbyB3b3JsZIAubQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GLtRNDUAfhj0gABlNMfATGOjjD4KNcLCoMJuvLgids84lnbPDDI+EMBzH8BygABAcsfye1UHRkBgnAh10nCH5UwINcLH94Cklt/4AGCEJRqmLa6jqLTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J2zx/4DBwGgEaf/hCcFgDgEIBbW3bPBsBzshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFlAD+gJwAcpoI26zJW6zsZczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAcAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAASAESySABw=");let t=s.beginCell();t.storeRef(e),t.storeUint(0,1);const r=t.endCell();return{code:a,data:r}}const E={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class g{constructor(e,t){c(this,"address");c(this,"init");c(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]}],errors:E});this.address=e,this.init=t}static async init(){return await u()}static async fromInit(){const e=await u(),t=s.contractAddress(0,e);return new g(t,e)}static fromAddress(e){return new g(e)}async send(e,t,r,n){let o=null;if(n&&typeof n=="object"&&!(n instanceof s.Slice)&&n.$$type==="Deploy"&&(o=s.beginCell().store(D(n)).endCell()),o===null)throw new Error("Invalid message type");await e.internal(t,{...r,body:o})}async getCounter(e){let t=new s.TupleBuilder;return(await e.get("counter",t.build())).stack.readBigNumber()}async getLocation(e){let t=new s.TupleBuilder;return(await e.get("location",t.build())).stack.readAddress()}async getGreeting(e){let t=new s.TupleBuilder;return(await e.get("greeting",t.build())).stack.readString()}async getSum(e,t,r){let n=new s.TupleBuilder;return n.writeNumber(t),n.writeNumber(r),(await e.get("sum",n.build())).stack.readBigNumber()}async getAnd(e,t,r){let n=new s.TupleBuilder;return n.writeBoolean(t),n.writeBoolean(r),(await e.get("and",n.build())).stack.readBoolean()}async getAnswer(e,t){let r=new s.TupleBuilder;return r.writeNumber(t),(await e.get("answer",r.build())).stack.readString()}}function H(a,e,t){let r;m(a,l,o=>t(2,r=o));let n;return b(l,r={markdown:h,tactCode:p,deploy:async()=>{const o=await f.Blockchain.create(),A=await o.treasury("deployer");A.getSender(),n=o.openContract(await g.fromInit());const d={[A.address.toString()]:"deployer",[n.address.toString()]:"contract"};return[[n],d,[await n.send(A.getSender(),{value:s.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{},getters:{counter:async()=>await n.getCounter(),location:async()=>await n.getLocation(),greeting:async()=>await n.getGreeting(),"sum(3,4)":async()=>await n.getSum(3n,4n),"and(true,false)":async()=>await n.getAnd(!0,!1),"answer(42)":async()=>await n.getAnswer(42n)},prev:i(import.meta.url).prev,next:i(import.meta.url).next},r),[]}class Q extends I{constructor(e){super(),y(this,e,H,null,C,{})}}export{Q as default};
