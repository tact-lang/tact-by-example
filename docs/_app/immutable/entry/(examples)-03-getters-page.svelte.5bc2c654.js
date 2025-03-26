var p=Object.defineProperty;var m=(r,e,t)=>e in r?p(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var l=(r,e,t)=>(m(r,typeof e!="symbol"?e+"":e,t),t);import{S as y,i as f,s as w,I,ac as B}from"../chunks/index.9fe14626.js";import{d as s,g as A,s as d}from"../chunks/store.476c3091.js";import{d as C}from"../chunks/index.c056099e.js";const b=`# Getters

Getters are special contract functions that allow users to query information from the contract.

Contract methods starting with the prefix \`get fun\` are all getters. You can define as many getters are you want. Each getter must also specify its return type - \`counter()\` for example returns an \`Int\`.

Calling getters is free and does not cost gas. The call is executed by a full node and doesn't go through consensus with all the validators nor is added to a new block.

Getters are read-only, they cannot change the contract persistent state.

If we were to omit the \`get\` keyword from the function declaration of a getter, it will stop being a getter. External users would no longer be able call this function and it would essentially become a private method of the contract.

## Getters between contracts

**A contract cannot execute a getter of another contract.**

Getters are only executable by end-users off-chain. Since contracts are running on-chain, they do not have access to each other's getters.

So, if you can't call a getter, how can two contracts communicate?

The only way for contracts to communicate on-chain is by sending messages to each other. Messages are handled in _receivers_.

> **Info**: TON Blockchain is an asynchronous blockchain, which means that smart contracts can interact with each other only by sending messages.
`,h=`import "@stdlib/deploy";

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
}`;function k(r){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(r.queryId,64)}}async function g(){const r=s.Cell.fromBase64("te6ccgECIgEAA+4AART/APSkE/S88sgLAQIBYgIDApjQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxZ2zzy4ILI+EMBzH8BygABAcsfye1UHQQCASAICQGKAZIwf+BwIddJwh+VMCDXCx/eghCUapi2uo6n0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yfhCAXBt2zx/4DBwBQE6bW0ibrOZWyBu8tCAbyIBkTLiECRwAwSAQlAj2zwGAcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AAcAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwCD72NVtnm2eGMHQoCASALDAAai7aGVsbG8gd29ybGSAIBIA0OAgEgFhcCAW4PEAIBIBMUAg6qGNs82zwxHRECDqiL2zzbPDEdEgACIAAE+CgCEbIXNs8Wds8MYB0VALmy9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSAACgGSMHDfAgEgGBkCEbRe+2eAO2eGMB0eAgEgGhsAdbJu40NWlwZnM6Ly9RbVRSZVBOTHI3cWRqd1A4YkRva01tWTdUNEJMY3NSRUtFblhXejZSaEtOSlpNggABGtX3aiaGkAAMACEa3/7Z4s7Z4YwB0cAAKgATztRNDUAfhj0gABlNMfATHgMPgo1wsKgwm68uCJ2zwfA3jIbwABb4xtb4yNBdUaGUgbWVhbmluZyBvZiBsaWZlIGlzIINs8Ads82zxvIgHJkyFus5YBbyJZzMnoMdAhICEABIARAN7IIcEAmIAtAcsHAaMB3iGCODJ8snNBGdO3qaoduY4gcCBxjhQEeqkMpjAlqBKgBKoHAqQhwABFMOYwM6oCzwGOK28AcI4RI3qpCBJvjAGkA3qpBCDAABTmMyKlA5xTAm+BpjBYywcCpVnkMDHiydAAuiDXSiHXSZcgwgAiwgCxjkoDbyKAfyLPMasCoQWrAlFVtgggwgCcIKoCFdcYUDPPFkAU3llvAlNBocIAmcgBbwJQRKGqAo4SMTPCAJnUMNAg10oh10mScCDi4uhfAw=="),e=s.Cell.fromBase64("te6cckECJAEAA/gAAQHAAQEFoSnDAgEU/wD0pBP0vPLICwMCAWIdBAIBIBsFAgEgEQYCASALBwIRtF77Z4A7Z4YwIggDeMhvAAFvjG1vjI0F1RoZSBtZWFuaW5nIG9mIGxpZmUgaXMgg2zwB2zzbPG8iAcmTIW6zlgFvIlnMyegx0AoJCgDeyCHBAJiALQHLBwGjAd4hgjgyfLJzQRnTt6mqHbmOIHAgcY4UBHqpDKYwJagSoASqBwKkIcAARTDmMDOqAs8BjitvAHCOESN6qQgSb4wBpAN6qQQgwAAU5jMipQOcUwJvgaYwWMsHAqVZ5DAx4snQALog10oh10mXIMIAIsIAsY5KA28igH8izzGrAqEFqwJRVbYIIMIAnCCqAhXXGFAzzxZAFN5ZbwJTQaHCAJnIAW8CUEShqgKOEjEzwgCZ1DDQINdKIddJknAg4uLoXwMCASANDAB1sm7jQ1aXBmczovL1FtVFJlUE5McjdxZGp3UDhiRG9rTW1ZN1Q0Qkxjc1JFS0VuWFd6NlJoS05KWk2CACASAQDgIRrf/tniztnhjAIg8AAqAAEa1fdqJoaQAAwAIBIBYSAgEgFBMAubL0YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIAIRshc2zxZ2zwxgIhUACgGSMHDfAgFuGRcCDqiL2zzbPDEiGAAE+CgCDqoY2zzbPDEiGgACIAIPvY1W2ebZ4YwiHAAai7aGVsbG8gd29ybGSAKY0AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8Wds88uCCyPhDAcx/AcoAAQHLH8ntVCIeAYoBkjB/4HAh10nCH5UwINcLH96CEJRqmLa6jqfTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J+EIBcG3bPH/gMHAfATptbSJus5lbIG7y0IBvIgGRMuIQJHADBIBCUCPbPCAByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsAIQCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAE87UTQ1AH4Y9IAAZTTHwEx4DD4KNcLCoMJuvLgids8IwAEgBEEVE/b");let t=s.beginCell();t.storeRef(e),t.storeUint(0,1);const a=t.endCell();return{code:r,data:a}}const D={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}},S=[{name:"StateInit",header:null,fields:[{name:"code",type:{kind:"simple",type:"cell",optional:!1}},{name:"data",type:{kind:"simple",type:"cell",optional:!1}}]},{name:"Context",header:null,fields:[{name:"bounced",type:{kind:"simple",type:"bool",optional:!1}},{name:"sender",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"raw",type:{kind:"simple",type:"slice",optional:!1}}]},{name:"SendParameters",header:null,fields:[{name:"bounce",type:{kind:"simple",type:"bool",optional:!1}},{name:"to",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"mode",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"body",type:{kind:"simple",type:"cell",optional:!0}},{name:"code",type:{kind:"simple",type:"cell",optional:!0}},{name:"data",type:{kind:"simple",type:"cell",optional:!0}}]},{name:"Deploy",header:2490013878,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"DeployOk",header:2952335191,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"FactoryDeploy",header:1829761339,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}},{name:"cashback",type:{kind:"simple",type:"address",optional:!1}}]}],M=[{name:"counter",arguments:[],returnType:{kind:"simple",type:"int",optional:!1,format:257}},{name:"location",arguments:[],returnType:{kind:"simple",type:"address",optional:!1}},{name:"greeting",arguments:[],returnType:{kind:"simple",type:"string",optional:!1}},{name:"sum",arguments:[{name:"a",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"b",type:{kind:"simple",type:"int",optional:!1,format:257}}],returnType:{kind:"simple",type:"int",optional:!1,format:257}},{name:"and",arguments:[{name:"a",type:{kind:"simple",type:"bool",optional:!1}},{name:"b",type:{kind:"simple",type:"bool",optional:!1}}],returnType:{kind:"simple",type:"bool",optional:!1}},{name:"answer",arguments:[{name:"a",type:{kind:"simple",type:"int",optional:!1,format:257}}],returnType:{kind:"simple",type:"string",optional:!1}}],E=[{receiver:"internal",message:{kind:"typed",type:"Deploy"}}];class c{constructor(e,t){l(this,"address");l(this,"init");l(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"FactoryDeploy",header:1829761339,fields:[]}],types:S,getters:M,receivers:E,errors:D});this.address=e,this.init=t}static async init(){return await g()}static async fromInit(){const e=await g(),t=s.contractAddress(0,e);return new c(t,e)}static fromAddress(e){return new c(e)}async send(e,t,a,n){let o=null;if(n&&typeof n=="object"&&!(n instanceof s.Slice)&&n.$$type==="Deploy"&&(o=s.beginCell().store(k(n)).endCell()),o===null)throw new Error("Invalid message type");await e.internal(t,{...a,body:o})}async getCounter(e){let t=new s.TupleBuilder;return(await e.get("counter",t.build())).stack.readBigNumber()}async getLocation(e){let t=new s.TupleBuilder;return(await e.get("location",t.build())).stack.readAddress()}async getGreeting(e){let t=new s.TupleBuilder;return(await e.get("greeting",t.build())).stack.readString()}async getSum(e,t,a){let n=new s.TupleBuilder;return n.writeNumber(t),n.writeNumber(a),(await e.get("sum",n.build())).stack.readBigNumber()}async getAnd(e,t,a){let n=new s.TupleBuilder;return n.writeBoolean(t),n.writeBoolean(a),(await e.get("and",n.build())).stack.readBoolean()}async getAnswer(e,t){let a=new s.TupleBuilder;return a.writeNumber(t),(await e.get("answer",a.build())).stack.readString()}}function G(r,e,t){let a;I(r,d,o=>t(2,a=o));let n;return B(d,a={markdown:b,tactCode:h,deploy:async()=>{const o=await C.Blockchain.create(),i=await o.treasury("deployer");i.getSender(),n=o.openContract(await c.fromInit());const u={[i.address.toString()]:"deployer",[n.address.toString()]:"contract"};return[[n],u,[await n.send(i.getSender(),{value:s.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{},getters:{counter:async()=>await n.getCounter(),location:async()=>await n.getLocation(),greeting:async()=>await n.getGreeting(),"sum(3,4)":async()=>await n.getSum(3n,4n),"and(true,false)":async()=>await n.getAnd(!0,!1),"answer(42)":async()=>await n.getAnswer(42n)},prev:A(import.meta.url).prev,next:A(import.meta.url).next},a),[]}class J extends y{constructor(e){super(),f(this,e,G,null,w,{})}}export{J as default};
