var w=Object.defineProperty;var B=(a,e,t)=>e in a?w(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var c=(a,e,t)=>(B(a,typeof e!="symbol"?e+"":e,t),t);import{S as m,i as I,s as y,I as C,ac as f}from"../chunks/index.9fe14626.js";import{d as s,g as l,s as g}from"../chunks/store.2b42c038.js";import{d as b}from"../chunks/index.9fe59178.js";const h=`# Getters

Getters are special contract functions that allow users to query information from the contract.

Contract methods starting with the prefix \`get fun\` are all getters. You can define as many getters are you want. Each getter must also specify its return type - \`counter()\` for example returns an \`Int\`. 

Calling getters is free and does not cost gas. The call is executed by a full node and doesn't go through consensus with all the validators nor is added to a new block.

Getters are read-only, they cannot change the contract persistent state.

If we were to omit the \`get\` keyword from the function declaration of a getter, it will stop being a getter. External users would no longer be able call this function and it would essentially become a private method of the contract.

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
}`;function M(a){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(a.queryId,64)}}async function u(){const a=s.Cell.fromBase64("te6ccgECIQEAA9MAART/APSkE/S88sgLAQIBYgIDApTQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxZ2zwwyPhDAcx/AcoAAQHLH8ntVBwEAgEgBwgBmHAh10nCH5UwINcLH94Cklt/4AGCEJRqmLa6jq3THwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/Jf/hCcFgDgEIBbW3bPH/gMHAFAcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AAYAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwCD72NVtnm2eGMHAkCASAKCwAai7aGVsbG8gd29ybGSAIBIAwNAgEgFRYCAW4ODwIBIBITAg6qGNs82zwxHBACDqiL2zzbPDEcEQACIAAE+CgCEbIXNs8Wds8MYBwUALmy9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSAACgGSMHDfAgEgFxgCEbRe+2eAO2eGMBwdAgEgGRoAdbJu40NWlwZnM6Ly9RbVMxM0NDNllaQ0w4OWlGYVFMdmtFVERzZXdTc0JuYTJSYWt0RFNEenllRzF2ggABGtX3aiaGkAAMACEa3/7Z4s7Z4YwBwbAAKgATztRNDUAfhj0gABlNMfATHgMPgo1wsKgwm68uCJ2zweA3jIbwABb4xtb4yNBdUaGUgbWVhbmluZyBvZiBsaWZlIGlzIINs8Ads82zxvIgHJkyFus5YBbyJZzMnoMdAgHyAABIARAN7IIcEAmIAtAcsHAaMB3iGCODJ8snNBGdO3qaoduY4gcCBxjhQEeqkMpjAlqBKgBKoHAqQhwABFMOYwM6oCzwGOK28AcI4RI3qpCBJvjAGkA3qpBCDAABTmMyKlA5xTAm+BpjBYywcCpVnkMDHiydAAuiDXSiHXSZcgwgAiwgCxjkoDbyKAfyLPMasCoQWrAlFVtgggwgCcIKoCFdcYUDPPFkAU3llvAlNBocIAmcgBbwJQRKGqAo4SMTPCAJnUMNAg10oh10mScCDi4uhfAw=="),e=s.Cell.fromBase64("te6cckECIwEAA90AAQHAAQEFoSnDAgEU/wD0pBP0vPLICwMCAWIdBAIBIBsFAgEgEQYCASALBwIRtF77Z4A7Z4YwIQgDeMhvAAFvjG1vjI0F1RoZSBtZWFuaW5nIG9mIGxpZmUgaXMgg2zwB2zzbPG8iAcmTIW6zlgFvIlnMyegx0AoJCgDeyCHBAJiALQHLBwGjAd4hgjgyfLJzQRnTt6mqHbmOIHAgcY4UBHqpDKYwJagSoASqBwKkIcAARTDmMDOqAs8BjitvAHCOESN6qQgSb4wBpAN6qQQgwAAU5jMipQOcUwJvgaYwWMsHAqVZ5DAx4snQALog10oh10mXIMIAIsIAsY5KA28igH8izzGrAqEFqwJRVbYIIMIAnCCqAhXXGFAzzxZAFN5ZbwJTQaHCAJnIAW8CUEShqgKOEjEzwgCZ1DDQINdKIddJknAg4uLoXwMCASANDAB1sm7jQ1aXBmczovL1FtUzEzQ0M2WVpDTDg5aUZhUUx2a0VURHNld1NzQm5hMlJha3REU0R6eWVHMXaCACASAQDgIRrf/tniztnhjAIQ8AAqAAEa1fdqJoaQAAwAIBIBYSAgEgFBMAubL0YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIAIRshc2zxZ2zwxgIRUACgGSMHDfAgFuGRcCDqiL2zzbPDEhGAAE+CgCDqoY2zzbPDEhGgACIAIPvY1W2ebZ4YwhHAAai7aGVsbG8gd29ybGSAKU0AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8Wds8MMj4QwHMfwHKAAEByx/J7VQhHgGYcCHXScIflTAg1wsf3gKSW3/gAYIQlGqYtrqOrdMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8l/+EJwWAOAQgFtbds8f+AwcB8ByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsAIACYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAE87UTQ1AH4Y9IAAZTTHwEx4DD4KNcLCoMJuvLgids8IgAEgBHIQDQK");let t=s.beginCell();t.storeRef(e),t.storeUint(0,1);const r=t.endCell();return{code:a,data:r}}const D={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class i{constructor(e,t){c(this,"address");c(this,"init");c(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]}],errors:D});this.address=e,this.init=t}static async init(){return await u()}static async fromInit(){const e=await u(),t=s.contractAddress(0,e);return new i(t,e)}static fromAddress(e){return new i(e)}async send(e,t,r,n){let o=null;if(n&&typeof n=="object"&&!(n instanceof s.Slice)&&n.$$type==="Deploy"&&(o=s.beginCell().store(M(n)).endCell()),o===null)throw new Error("Invalid message type");await e.internal(t,{...r,body:o})}async getCounter(e){let t=new s.TupleBuilder;return(await e.get("counter",t.build())).stack.readBigNumber()}async getLocation(e){let t=new s.TupleBuilder;return(await e.get("location",t.build())).stack.readAddress()}async getGreeting(e){let t=new s.TupleBuilder;return(await e.get("greeting",t.build())).stack.readString()}async getSum(e,t,r){let n=new s.TupleBuilder;return n.writeNumber(t),n.writeNumber(r),(await e.get("sum",n.build())).stack.readBigNumber()}async getAnd(e,t,r){let n=new s.TupleBuilder;return n.writeBoolean(t),n.writeBoolean(r),(await e.get("and",n.build())).stack.readBoolean()}async getAnswer(e,t){let r=new s.TupleBuilder;return r.writeNumber(t),(await e.get("answer",r.build())).stack.readString()}}function H(a,e,t){let r;C(a,g,o=>t(2,r=o));let n;return f(g,r={markdown:h,tactCode:p,deploy:async()=>{const o=await b.Blockchain.create(),A=await o.treasury("deployer");A.getSender(),n=o.openContract(await i.fromInit());const d={[A.address.toString()]:"deployer",[n.address.toString()]:"contract"};return[[n],d,[await n.send(A.getSender(),{value:s.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{},getters:{counter:async()=>await n.getCounter(),location:async()=>await n.getLocation(),greeting:async()=>await n.getGreeting(),"sum(3,4)":async()=>await n.getSum(3n,4n),"and(true,false)":async()=>await n.getAnd(!0,!1),"answer(42)":async()=>await n.getAnswer(42n)},prev:l(import.meta.url).prev,next:l(import.meta.url).next},r),[]}class z extends m{constructor(e){super(),I(this,e,H,null,y,{})}}export{z as default};
