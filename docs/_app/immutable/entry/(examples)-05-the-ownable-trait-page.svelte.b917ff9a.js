var w=Object.defineProperty;var f=(r,e,t)=>e in r?w(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var d=(r,e,t)=>(f(r,typeof e!="symbol"?e+"":e,t),t);import{S as C,i as b,s as h,I,ac as v}from"../chunks/index.9fe14626.js";import{d as a,g as p,s as g}from"../chunks/store.476c3091.js";import{d as B}from"../chunks/index.c056099e.js";const k=`# The Ownable Trait

Tact allows you to add common boilerplate behaviors to your contract by using traits.

The Ownable trait allows the contract to set an \`owner\` role, which can have higher priviliges from everybody else.

For example, if your contract allows upgrades, it would make sense to limit upgrades to the owner only, otherwise anyone could break the contract.

Be aware that dapps are supposed to be _decentralized_ and an owner role is by definition [centralized](https://defi.org/ton). If you're building a dapp, try to minimize reliance on Ownable.

Note that this trait doesn't allow the owner to transfer ownership to a different owner.

## How to use Ownable

Define a state variable named \`owner: Address\` and call \`self.requireOwner()\` in priviliged receivers.

<div style="padding-left: 1em; margin: 1em 0; position: relative;">
    <div style="position: absolute; top: 0; bottom: 0%; left: 0; width: 3px; background-color: green;"></div>
    <strong>Info</strong>: The Ownable trait is defined in the <a href="https://github.com/tact-lang/tact/blob/main/stdlib/libs/ownable.tact">standard library</a>

</div>
`,D=`// this trait has to be imported
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
}`;function L(r){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(r.queryId,64)}}async function m(){const r=a.Cell.fromBase64("te6ccgECFgEAA0UAART/APSkE/S88sgLAQIBYgIDAtTQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxa2zzy4ILI+EMBzH8BygBZWSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFssfye1UEwQCASAKCwKg7aLt+wGSMH/gcCHXScIflTAg1wsf3iCCEJRqmLa6jqgw0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yfhCAXBt2zx/4MAAkTDjDXAFBgE6bW0ibrOZWyBu8tCAbyIBkTLiECRwAwSAQlAj2zwHAbT5ASCC8MT41yMS7f3vW3vseDO9uxYtFRG9eKkSrtDyY3r2VXKuupUwpH/bMeCC8Mh17uDIvZBpthqIAyVgLhscxblPsuKlgeLK/Isb7hnOuo6H2zyqAH/bMeAJAcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AAgAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwAEvhCUiDHBfLghAIRviju2ebZ42EMEwwCASANDgACIQDdu70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIJwQM51aecV+dJQsB1hbiZHsoAgFIDxAAEbCvu1E0NIAAYAIBahESAHOndxoatLgzOZ0Xl6i2rBm0JiInOyUquCi7oZqcm7a0LRiopaIpN7UlNaW6pbikIrqhKqq1szIhuChBAg+lgbZ5tnjYQxMUAYDtRNDUAfhj0gABjiX6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAdMfWWwS4DD4KNcLCoMJuvLgids8FQACIAAG+EJw"),e=a.Cell.fromBase64("te6cckECGAEAA08AAQHAAQEFoendAgEU/wD0pBP0vPLICwMCAWIPBAIBIA0FAgEgDAYCAUgLBwIBagoIAg+lgbZ5tnjYQxYJAAIgAHOndxoatLgzOZ0Xl6i2rBm0JiInOyUquCi7oZqcm7a0LRiopaIpN7UlNaW6pbikIrqhKqq1szIhuChBABGwr7tRNDSAAGAA3bu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSCcEDOdWnnFfnSULAdYW4mR7KAIRviju2ebZ42EMFg4AAiEC1NAB0NMDAXGwowH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIVFBTA28E+GEC+GLbPFrbPPLggsj4QwHMfwHKAFlZINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8Wyx/J7VQWEAKg7aLt+wGSMH/gcCHXScIflTAg1wsf3iCCEJRqmLa6jqgw0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yfhCAXBt2zx/4MAAkTDjDXATEQG0+QEggvDE+NcjEu3971t77HgzvbsWLRURvXipEq7Q8mN69lVyrrqVMKR/2zHggvDIde7gyL2QabYaiAMlYC4bHMW5T7LipYHiyvyLG+4ZzrqOh9s8qgB/2zHgEgAS+EJSIMcF8uCEATptbSJus5lbIG7y0IBvIgGRMuIQJHADBIBCUCPbPBQByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsAFQCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAGA7UTQ1AH4Y9IAAY4l+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAHTH1lsEuAw+CjXCwqDCbry4InbPBcABvhCcKtR9Ss=");let t=a.beginCell();t.storeRef(e),t.storeUint(0,1);const i=t.endCell();return{code:r,data:i}}const H={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}},E=[{name:"StateInit",header:null,fields:[{name:"code",type:{kind:"simple",type:"cell",optional:!1}},{name:"data",type:{kind:"simple",type:"cell",optional:!1}}]},{name:"Context",header:null,fields:[{name:"bounced",type:{kind:"simple",type:"bool",optional:!1}},{name:"sender",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"raw",type:{kind:"simple",type:"slice",optional:!1}}]},{name:"SendParameters",header:null,fields:[{name:"bounce",type:{kind:"simple",type:"bool",optional:!1}},{name:"to",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"mode",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"body",type:{kind:"simple",type:"cell",optional:!0}},{name:"code",type:{kind:"simple",type:"cell",optional:!0}},{name:"data",type:{kind:"simple",type:"cell",optional:!0}}]},{name:"ChangeOwner",header:2174598809,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}},{name:"newOwner",type:{kind:"simple",type:"address",optional:!1}}]},{name:"ChangeOwnerOk",header:846932810,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}},{name:"newOwner",type:{kind:"simple",type:"address",optional:!1}}]},{name:"Deploy",header:2490013878,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"DeployOk",header:2952335191,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"FactoryDeploy",header:1829761339,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}},{name:"cashback",type:{kind:"simple",type:"address",optional:!1}}]}],O=[{name:"value",arguments:[],returnType:{kind:"simple",type:"int",optional:!1,format:257}},{name:"owner",arguments:[],returnType:{kind:"simple",type:"address",optional:!1}}],Q=[{receiver:"internal",message:{kind:"text",text:"increment"}},{receiver:"internal",message:{kind:"text",text:"double"}},{receiver:"internal",message:{kind:"typed",type:"Deploy"}}];class c{constructor(e,t){d(this,"address");d(this,"init");d(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"ChangeOwner",header:2174598809,fields:[]},{name:"ChangeOwnerOk",header:846932810,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"FactoryDeploy",header:1829761339,fields:[]}],types:E,getters:O,receivers:Q,errors:H});this.address=e,this.init=t}static async init(){return await m()}static async fromInit(){const e=await m(),t=a.contractAddress(0,e);return new c(t,e)}static fromAddress(e){return new c(e)}async send(e,t,i,n){let o=null;if(n==="increment"&&(o=a.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n==="double"&&(o=a.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n&&typeof n=="object"&&!(n instanceof a.Slice)&&n.$$type==="Deploy"&&(o=a.beginCell().store(L(n)).endCell()),o===null)throw new Error("Invalid message type");await e.internal(t,{...i,body:o})}async getValue(e){let t=new a.TupleBuilder;return(await e.get("value",t.build())).stack.readBigNumber()}async getOwner(e){let t=new a.TupleBuilder;return(await e.get("owner",t.build())).stack.readAddress()}}function M(r,e,t){let i;I(r,g,l=>t(3,i=l));let n,o,s;return v(g,i={markdown:k,tactCode:D,deploy:async()=>{const l=await B.Blockchain.create(),u=await l.treasury("deployer");n=u.getSender();const A=await l.treasury("another");o=A.getSender(),s=l.openContract(await c.fromInit());const y={[u.address.toString()]:"deployer",[A.address.toString()]:"sender 2",[s.address.toString()]:"contract"};return[[s],y,[await s.send(u.getSender(),{value:a.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{"increment (from deployer)":async()=>[await s.send(n,{value:a.toNano(1)},"increment")],"increment (from sender 2)":async()=>[await s.send(o,{value:a.toNano(1)},"increment")],"double (from deployer)":async()=>[await s.send(n,{value:a.toNano(1)},"double")],"double (from sender 2)":async()=>[await s.send(o,{value:a.toNano(1)},"double")]},getters:{owner:async()=>await s.getOwner(),value:async()=>await s.getValue()},prev:p(import.meta.url).prev,next:p(import.meta.url).next},i),[]}class N extends C{constructor(e){super(),b(this,e,M,null,h,{})}}export{N as default};
