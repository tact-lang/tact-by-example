var I=Object.defineProperty;var B=(s,e,t)=>e in s?I(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var A=(s,e,t)=>(B(s,typeof e!="symbol"?e+"":e,t),t);import{S as m,i as f,s as b,I as p,ac as h}from"../chunks/index.9fe14626.js";import{d as r,g as d,s as w}from"../chunks/store.3c4e3faa.js";import{d as v}from"../chunks/index.47089f7b.js";const E=`# The Ownable Trait

Tact allows you to add common boilerplate behaviors to your contract by using traits.

The Ownable trait allows the contract to set an \`owner\` role, which can have higher priviliges from everybody else.

For example, if your contract allows upgrades, it would make sense to limit upgrades to the owner only, otherwise anyone could break the contract.

Be aware that dapps are supposed to be *decentralized* and an owner role is by definition [centralized](https://defi.org/ton). If you're building a dapp, try to minimize reliance on Ownable.

Note that this trait doesn't allow the owner to transfer ownership to a different owner.

## How to use Ownable

Define a state variable named \`owner: Address\` and call \`self.requireOwner()\` in priviliged receivers.`,Q=`// this trait has to be imported
import "@stdlib/ownable";
import "@stdlib/deploy";

// the Ownable trait can limit certain actions to the owner only
contract Counter with Deployable, Ownable {

    owner: Address; // The Ownable trait requires you to add this exact state variable
    val: Int as uint32;
 
    init() {
        self.owner = sender(); // we can initialize owner to any value we want, the deployer in this case
        self.val = 0;
    }
 
    // this message is available to anyone
    receive("increment") {
        self.val = self.val + 1;
    }

    // this message in only available to the owner
    receive("double") {
        self.requireOwner();
        self.val = self.val * 2;
    }
 
    get fun value(): Int {
        return self.val;
    }

    // get fun owner(): Address is added automatically to query who the owner is
}`;function H(s){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(s.queryId,64)}}async function C(){const s=r.Cell.fromBase64("te6ccgECEgEAA3sAART/APSkE/S88sgLAQIBYgIDAX7QAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GIEAgEgCwwC/O1E0NQB+GPSAAGOKvpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiQHTH1lsEo6OMPgo1wsKgwm68uCJ2zziWts8MMj4QwHMfwHKAFlZINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxbLH8ntVBAFApjtou37cCHXScIflTAg1wsf3gKSW3/gIYIQlGqYtrqOozHTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J2zx/4AHAAJEw4w1wBgcBGn/4QnBYA4BCAW1t2zwIAbT5ASCC8MT41yMS7f3vW3vseDO9uxYtFRG9eKkSrtDyY3r2VXKuupUwpH/bMeCC8Mh17uDIvZBpthqIAyVgLhscxblPsuKlgeLK/Isb7hnOuo6H2zyqAH/bMeAKAc7IcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxZQA/oCcAHKaCNusyVus7GXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsACQCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAAQ+EIixwXy4IQCl74o72omhqAPwx6QAAxxV9IACQa6TAgIXdeXBEEGuFhRBBhN0QwIJ/3Vj5cERBhN15cESA6Y+stglHRxh8FGuFhUGE3XlwRO2ecW2eQQDQIBIA4PAAIwAN27vRgnBc7D1dLK57HoTsOdZKhRtmgnCd1jUtK2R8syLTry398WI5gnAgVcAbgGdjlM5YOq5HJbLDgnAb1J3vlUWW8cdT094FWcMmgnCdl05as07LczoOlm2UZuikgnBAznVp5xX50lCwHWFuJkeygCl7msDtRNDUAfhj0gABjir6QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkB0x9ZbBKOjjD4KNcLCoMJuvLgids84ts8gQEQAG+EJwAAIx"),e=r.Cell.fromBase64("te6cckECFAEAA4UAAQHAAQEFoendAgEU/wD0pBP0vPLICwMCAWILBAIBIAkFAgEgCAYCl7msDtRNDUAfhj0gABjir6QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkB0x9ZbBKOjjD4KNcLCoMJuvLgids84ts8gTBwACMQDdu70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIJwQM51aecV+dJQsB1hbiZHsoApe+KO9qJoagD8MekAAMcVfSAAkGukwICF3XlwRBBrhYUQQYTdEMCCf91Y+XBEQYTdeXBEgOmPrLYJR0cYfBRrhYVBhN15cETtnnFtnkEwoAAjABftAB0NMDAXGwwAGRf5Fw4gH6QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IlUUFMDbwT4YQL4YgwC/O1E0NQB+GPSAAGOKvpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiQHTH1lsEo6OMPgo1wsKgwm68uCJ2zziWts8MMj4QwHMfwHKAFlZINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxbLH8ntVBMNApjtou37cCHXScIflTAg1wsf3gKSW3/gIYIQlGqYtrqOozHTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J2zx/4AHAAJEw4w1wEA4BtPkBIILwxPjXIxLt/e9be+x4M727Fi0VEb14qRKu0PJjevZVcq66lTCkf9sx4ILwyHXu4Mi9kGm2GogDJWAuGxzFuU+y4qWB4sr8ixvuGc66jofbPKoAf9sx4A8AEPhCIscF8uCEARp/+EJwWAOAQgFtbds8EQHOyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WUAP6AnABymgjbrMlbrOxlzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7ABIAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwABvhCcKZCSd8=");let t=r.beginCell();t.storeRef(e),t.storeUint(0,1);const a=t.endCell();return{code:s,data:a}}const M={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class c{constructor(e,t){A(this,"address");A(this,"init");A(this,"abi",{errors:M});this.address=e,this.init=t}static async init(){return await C()}static async fromInit(){const e=await C(),t=r.contractAddress(0,e);return new c(t,e)}static fromAddress(e){return new c(e)}async send(e,t,a,n){let i=null;if(n==="increment"&&(i=r.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n==="double"&&(i=r.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n&&typeof n=="object"&&!(n instanceof r.Slice)&&n.$$type==="Deploy"&&(i=r.beginCell().store(H(n)).endCell()),i===null)throw new Error("Invalid message type");await e.internal(t,{...a,body:i})}async getValue(e){let t=new r.TupleBuilder;return(await e.get("value",t.build())).stack.readBigNumber()}async getOwner(e){let t=new r.TupleBuilder;return(await e.get("owner",t.build())).stack.readAddress()}}function D(s,e,t){let a;p(s,w,l=>t(3,a=l));let n,i,o;return h(w,a={markdown:E,tactCode:Q,deploy:async()=>{const l=await v.Blockchain.create(),u=await l.treasury("deployer");n=u.getSender();const g=await l.treasury("another");i=g.getSender(),o=l.openContract(await c.fromInit());const y={[u.address.toString()]:"deployer",[g.address.toString()]:"sender 2",[o.address.toString()]:"contract"};return[o,y,[await o.send(u.getSender(),{value:r.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{"increment (from deployer)":async()=>[await o.send(n,{value:r.toNano(1)},"increment")],"increment (from sender 2)":async()=>[await o.send(i,{value:r.toNano(1)},"increment")],"double (from deployer)":async()=>[await o.send(n,{value:r.toNano(1)},"double")],"double (from sender 2)":async()=>[await o.send(i,{value:r.toNano(1)},"double")]},getters:{owner:async()=>await o.getOwner(),value:async()=>await o.getValue()},prev:d(import.meta.url).prev,next:d(import.meta.url).next},a),[]}class K extends m{constructor(e){super(),f(this,e,D,null,b,{})}}export{K as default};
