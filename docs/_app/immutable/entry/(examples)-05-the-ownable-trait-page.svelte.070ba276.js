var m=Object.defineProperty;var I=(s,e,t)=>e in s?m(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var A=(s,e,t)=>(I(s,typeof e!="symbol"?e+"":e,t),t);import{S as f,i as b,s as h,I as p,ac as B}from"../chunks/index.9fe14626.js";import{d as r,g,s as w}from"../chunks/store.2b42c038.js";import{d as v}from"../chunks/index.9fe59178.js";const D=`# The Ownable Trait

Tact allows you to add common boilerplate behaviors to your contract by using traits.

The Ownable trait allows the contract to set an \`owner\` role, which can have higher priviliges from everybody else.

For example, if your contract allows upgrades, it would make sense to limit upgrades to the owner only, otherwise anyone could break the contract.

Be aware that dapps are supposed to be *decentralized* and an owner role is by definition [centralized](https://defi.org/ton). If you're building a dapp, try to minimize reliance on Ownable.

Note that this trait doesn't allow the owner to transfer ownership to a different owner.

## How to use Ownable

Define a state variable named \`owner: Address\` and call \`self.requireOwner()\` in priviliged receivers.`,M=`// this trait has to be imported
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
}`;function Q(s){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(s.queryId,64)}}async function y(){const s=r.Cell.fromBase64("te6ccgECFQEAAyoAART/APSkE/S88sgLAQIBYgIDAtDQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxa2zwwyPhDAcx/AcoAWVkg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbLH8ntVBIEAgEgCQoCru2i7ftwIddJwh+VMCDXCx/eApJbf+AhghCUapi2uo6uMdMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8l/+EJwWAOAQgFtbds8f+ABwACRMOMNcAUGAcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AAcBtPkBIILwxPjXIxLt/e9be+x4M727Fi0VEb14qRKu0PJjevZVcq66lTCkf9sx4ILwyHXu4Mi9kGm2GogDJWAuGxzFuU+y4qWB4sr8ixvuGc66jofbPKoAf9sx4AgAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwAEvhCUiDHBfLghAIRviju2ebZ42EMEgsCASAMDQACIQDdu70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIJwQM51aecV+dJQsB1hbiZHsoAgFIDg8AEbCvu1E0NIAAYAIBahARAHOndxoatLgzOZ0Xl6i2pzUyPSUpvCM0tLS4GbCZIKOsILe0szE9IKw1shshsam9KioqHDO4HKQpJhxBAg+lgbZ5tnjYQxITAYDtRNDUAfhj0gABjiX6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAdMfWWwS4DD4KNcLCoMJuvLgids8FAACIAAG+EJw"),e=r.Cell.fromBase64("te6cckECFwEAAzQAAQHAAQEFoendAgEU/wD0pBP0vPLICwMCAWIPBAIBIA0FAgEgDAYCAUgLBwIBagoIAg+lgbZ5tnjYQxUJAAIgAHOndxoatLgzOZ0Xl6i2pzUyPSUpvCM0tLS4GbCZIKOsILe0szE9IKw1shshsam9KioqHDO4HKQpJhxBABGwr7tRNDSAAGAA3bu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSCcEDOdWnnFfnSULAdYW4mR7KAIRviju2ebZ42EMFQ4AAiEC0NAB0NMDAXGwowH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIVFBTA28E+GEC+GLbPFrbPDDI+EMBzH8BygBZWSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFssfye1UFRACru2i7ftwIddJwh+VMCDXCx/eApJbf+AhghCUapi2uo6uMdMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8l/+EJwWAOAQgFtbds8f+ABwACRMOMNcBMRAbT5ASCC8MT41yMS7f3vW3vseDO9uxYtFRG9eKkSrtDyY3r2VXKuupUwpH/bMeCC8Mh17uDIvZBpthqIAyVgLhscxblPsuKlgeLK/Isb7hnOuo6H2zyqAH/bMeASABL4QlIgxwXy4IQByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsAFACYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAGA7UTQ1AH4Y9IAAY4l+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAHTH1lsEuAw+CjXCwqDCbry4InbPBYABvhCcDxd7vg=");let t=r.beginCell();t.storeRef(e),t.storeUint(0,1);const o=t.endCell();return{code:s,data:o}}const x={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class d{constructor(e,t){A(this,"address");A(this,"init");A(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"ChangeOwner",header:256331011,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]}],errors:x});this.address=e,this.init=t}static async init(){return await y()}static async fromInit(){const e=await y(),t=r.contractAddress(0,e);return new d(t,e)}static fromAddress(e){return new d(e)}async send(e,t,o,n){let i=null;if(n==="increment"&&(i=r.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n==="double"&&(i=r.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n&&typeof n=="object"&&!(n instanceof r.Slice)&&n.$$type==="Deploy"&&(i=r.beginCell().store(Q(n)).endCell()),i===null)throw new Error("Invalid message type");await e.internal(t,{...o,body:i})}async getValue(e){let t=new r.TupleBuilder;return(await e.get("value",t.build())).stack.readBigNumber()}async getOwner(e){let t=new r.TupleBuilder;return(await e.get("owner",t.build())).stack.readAddress()}}function E(s,e,t){let o;p(s,w,l=>t(3,o=l));let n,i,a;return B(w,o={markdown:D,tactCode:M,deploy:async()=>{const l=await v.Blockchain.create(),c=await l.treasury("deployer");n=c.getSender();const u=await l.treasury("another");i=u.getSender(),a=l.openContract(await d.fromInit());const C={[c.address.toString()]:"deployer",[u.address.toString()]:"sender 2",[a.address.toString()]:"contract"};return[[a],C,[await a.send(c.getSender(),{value:r.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{"increment (from deployer)":async()=>[await a.send(n,{value:r.toNano(1)},"increment")],"increment (from sender 2)":async()=>[await a.send(i,{value:r.toNano(1)},"increment")],"double (from deployer)":async()=>[await a.send(n,{value:r.toNano(1)},"double")],"double (from sender 2)":async()=>[await a.send(i,{value:r.toNano(1)},"double")]},getters:{owner:async()=>await a.getOwner(),value:async()=>await a.getValue()},prev:g(import.meta.url).prev,next:g(import.meta.url).next},o),[]}class S extends f{constructor(e){super(),b(this,e,E,null,h,{})}}export{S as default};
