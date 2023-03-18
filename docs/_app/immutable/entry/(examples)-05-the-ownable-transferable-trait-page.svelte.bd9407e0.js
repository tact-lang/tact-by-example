var B=Object.defineProperty;var f=(a,e,n)=>e in a?B(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n;var g=(a,e,n)=>(f(a,typeof e!="symbol"?e+"":e,n),n);import{S as I,i as h,s as m,I as b,ac as p}from"../chunks/index.9fe14626.js";import{d as r,g as c,s as u}from"../chunks/store.cab86f52.js";import{d as E}from"../chunks/index.f166c76f.js";const v=`# The Ownable-Transferable Trait

The Ownable-Transferable trait is almost identical to the Ownable trait that we covered in the previous example.

It adds one important feature which is the ability for the owner to transfer ownership to a new owner. This can also be used to renounce ownership completely by transferring ownership to an unusable address like the zero address.

If you're building a dapp and aiming for decentralization, always prefer this trait over Ownable. At some point in the dapps future, when you consider the owner role no longer unnecessary, you will be able to renounce ownership and make the dapp fully decentralized.

## How to use OwnableTransferable

Use it in a contract just like Ownable. Define a state variable named \`owner: Address\` and call \`self.requireOwner()\` in priviliged receivers.

Your contract will automatically handle the \`ChangeOwner{newOwner: Address}\` message which allows the owner to transfer ownership.`,O=`// this trait has to be imported
import "@stdlib/ownable";
import "@stdlib/deploy";

// the OwnableTransferable trait can limit certain actions to the owner only
contract Counter with Deployable, OwnableTransferable {

    owner: Address; // The OwnableTransferable trait requires you to add this exact state variable
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

    // receive(msg: ChangeOwner) is added automatically to transfer ownership
    // get fun owner(): Address is added automatically to query who the owner is
}`;function Q(a){return e=>{let n=e;n.storeUint(256331011,32),n.storeAddress(a.newOwner)}}function M(a){return e=>{let n=e;n.storeUint(2490013878,32),n.storeUint(a.queryId,64)}}async function C(){const a=r.Cell.fromBase64("te6ccgECFAEAA9YAART/APSkE/S88sgLAQIBYgIDAX7QAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GIEAgEgDA0C/O1E0NQB+GPSAAGOKvpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiQHTH1lsEo6OMPgo1wsKgwm68uCJ2zziWts8MMj4QwHMfwHKAFlZINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxbLH8ntVBIFA6ztou37cCHXScIflTAg1wsf3gKSW3/gIYIQlGqYtrqOozHTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J2zx/4CGCEA9HTQO64wIBwACRMOMNcAYHCAEaf/hCcFgDgEIBbW3bPAkBcDHTHwGCEA9HTQO68uCB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJMVnbPDF/CwG0+QEggvDE+NcjEu3971t77HgzvbsWLRURvXipEq7Q8mN69lVyrrqVMKR/2zHggvDIde7gyL2QabYaiAMlYC4bHMW5T7LipYHiyvyLG+4ZzrqOh9s8qgB/2zHgCwHOyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WUAP6AnABymgjbrMlbrOxlzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AAoAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwAEPhCIscF8uCEApe+KO9qJoagD8MekAAMcVfSAAkGukwICF3XlwRBBrhYUQQYTdEMCCf91Y+XBEQYTdeXBEgOmPrLYJR0cYfBRrhYVBhN15cETtnnFtnkEg4CASAPEAACMAHdu70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIJwoBY90JlEubWqqQrClgAsBoEQKXuawO1E0NQB+GPSAAGOKvpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiQHTH1lsEo6OMPgo1wsKgwm68uCJ2zzi2zyBITACSCcEDOdWnnFfnSULAdYW4mR7IABvhCcAACMQ=="),e=r.Cell.fromBase64("te6cckECFgEAA+AAAQHAAQEFoendAgEU/wD0pBP0vPLICwMCAWIMBAIBIAoFAgEgCAYCl7msDtRNDUAfhj0gABjir6QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkB0x9ZbBKOjjD4KNcLCoMJuvLgids84ts8gVBwACMQHdu70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIJwoBY90JlEubWqqQrClgAsBoCQAkgnBAznVp5xX50lCwHWFuJkeyApe+KO9qJoagD8MekAAMcVfSAAkGukwICF3XlwRBBrhYUQQYTdEMCCf91Y+XBEQYTdeXBEgOmPrLYJR0cYfBRrhYVBhN15cETtnnFtnkFQsAAjABftAB0NMDAXGwwAGRf5Fw4gH6QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IlUUFMDbwT4YQL4Yg0C/O1E0NQB+GPSAAGOKvpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiQHTH1lsEo6OMPgo1wsKgwm68uCJ2zziWts8MMj4QwHMfwHKAFlZINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxbLH8ntVBUOA6ztou37cCHXScIflTAg1wsf3gKSW3/gIYIQlGqYtrqOozHTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J2zx/4CGCEA9HTQO64wIBwACRMOMNcBIQDwG0+QEggvDE+NcjEu3971t77HgzvbsWLRURvXipEq7Q8mN69lVyrrqVMKR/2zHggvDIde7gyL2QabYaiAMlYC4bHMW5T7LipYHiyvyLG+4ZzrqOh9s8qgB/2zHgEQFwMdMfAYIQD0dNA7ry4IH6QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkxWds8MX8RABD4QiLHBfLghAEaf/hCcFgDgEIBbW3bPBMBzshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFlAD+gJwAcpoI26zJW6zsZczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAUAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAAb4QnALymDu");let n=r.beginCell();n.storeRef(e),n.storeUint(0,1);const o=n.endCell();return{code:a,data:o}}const D={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class A{constructor(e,n){g(this,"address");g(this,"init");g(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"ChangeOwner",header:256331011,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]}],errors:D});this.address=e,this.init=n}static async init(){return await C()}static async fromInit(){const e=await C(),n=r.contractAddress(0,e);return new A(n,e)}static fromAddress(e){return new A(e)}async send(e,n,o,t){let s=null;if(t==="increment"&&(s=r.beginCell().storeUint(0,32).storeStringTail(t).endCell()),t==="double"&&(s=r.beginCell().storeUint(0,32).storeStringTail(t).endCell()),t&&typeof t=="object"&&!(t instanceof r.Slice)&&t.$$type==="Deploy"&&(s=r.beginCell().store(M(t)).endCell()),t&&typeof t=="object"&&!(t instanceof r.Slice)&&t.$$type==="ChangeOwner"&&(s=r.beginCell().store(Q(t)).endCell()),s===null)throw new Error("Invalid message type");await e.internal(n,{...o,body:s})}async getValue(e){let n=new r.TupleBuilder;return(await e.get("value",n.build())).stack.readBigNumber()}async getOwner(e){let n=new r.TupleBuilder;return(await e.get("owner",n.build())).stack.readAddress()}}function H(a,e,n){let o;b(a,u,l=>n(3,o=l));let t,s,i;return p(u,o={markdown:v,tactCode:O,deploy:async()=>{const l=await E.Blockchain.create(),d=await l.treasury("deployer");t=d.getSender();const w=await l.treasury("another");s=w.getSender(),i=l.openContract(await A.fromInit());const y={[d.address.toString()]:"deployer",[w.address.toString()]:"sender 2",[i.address.toString()]:"contract"};return[[i],y,[await i.send(d.getSender(),{value:r.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{"ChangeOwner{sender 2} (from deployer)":async()=>[await i.send(t,{value:r.toNano(1)},{$$type:"ChangeOwner",newOwner:s.address})],"ChangeOwner{deployer} (from sender 2)":async()=>[await i.send(s,{value:r.toNano(1)},{$$type:"ChangeOwner",newOwner:t.address})]},getters:{owner:async()=>await i.getOwner(),value:async()=>await i.getValue()},prev:c(import.meta.url).prev,next:c(import.meta.url).next},o),[]}class S extends I{constructor(e){super(),h(this,e,H,null,m,{})}}export{S as default};
