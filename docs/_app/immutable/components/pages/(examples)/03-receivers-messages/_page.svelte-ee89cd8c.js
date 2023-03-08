var f=Object.defineProperty;var m=(s,n,e)=>n in s?f(s,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[n]=e;var c=(s,n,e)=>(m(s,typeof n!="symbol"?n+"":n,e),e);import{S as w,i as y,s as C,I,ac as h}from"../../../../chunks/index-1d4083c1.js";import{d as a,s as A}from"../../../../chunks/store-ab11a47e.js";import{d as b,g}from"../../../../chunks/helpers-be3eeda0.js";const B=`# Receivers and Messages

In TON, users interact with contracts by sending them messages. Different contracts can only communicate with each other by sending each other messages.

Since users actually use wallet contracts, messages from users are actually messages coming from just another contract.

Sending a message to a contract costs gas and is processed in the course of a transaction. The transaction executes when validators add the transaction to a new block. This can take a few seconds. Messages are also able to change the contract persistent state.

## Receivers

Contract methods named \`receive()\` are the handlers that process each incoming message type. Tact will automatically route the correct message to the correct receiver listening for it.

## Hardware wallets and blind signing

When working with dangerous contracts that handle a lot of money, users are encouraged to use hardware wallets like [Ledger](https://www.ledger.com/). Hardware wallets cannot decode binary messages to confirm to the user what they're actually signing. Tact supports textual messages for this reason, since they can easily be confirmed with users, eliminating phishing risks.`,v=`import "@stdlib/deploy";

message Add {
    amount: Int as uint32;
}

message Subtract {
    amount: Int as uint32;
}

message MultiMath {
    add: Int as uint32;
    subtract: Int as uint32;
    multiply: Int as uint32;
}

contract Receivers with Deployable {

    val: Int as int64;
 
    init() {
        self.val = 0;
    }
 
    // a textual string message, using the comment field of a transfer (great for Ledger)
    receive("increment") {
        self.val = self.val + 1;
    }

    // a different textual string message, you can have as many as you want
    receive("decrement") {
        self.val = self.val - 1;
    }

    // binary message that can carry input arguments
    receive(msg: Add) {
        self.val = self.val + msg.amount;
    }

    // a different binary message, although its format is identical
    receive(msg: Subtract) {
        self.val = self.val - msg.amount;
    }

    // binary messages can hold multiple arguments
    receive(msg: MultiMath) {
        self.val = self.val + msg.add;
        self.val = self.val - msg.subtract;
        self.val = self.val * msg.multiply;
    }
 
    get fun value(): Int {
        return self.val;
    }
}`;function p(s){return n=>{let e=n;e.storeUint(2490013878,32),e.storeUint(s.queryId,64)}}function M(s){return n=>{let e=n;e.storeUint(2278832834,32),e.storeUint(s.amount,32)}}function H(s){return n=>{let e=n;e.storeUint(1552846265,32),e.storeUint(s.amount,32)}}function x(s){return n=>{let e=n;e.storeUint(2221071617,32),e.storeUint(s.add,32),e.storeUint(s.subtract,32),e.storeUint(s.multiply,32)}}async function d(){const s=a.Cell.fromBase64("te6ccgECDgEAAvQAART/APSkE/S88sgLAQIBYgIDAt7QAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJIkFVbwT4Ye1E0NQB+GLSAAGU0j8BMY6OMPgo1wsKgwm68uCJ2zziWds8MMj4QgHMfwHKAAEByj/J7VQNBAIBWAsMA+Dtou37cCHXScIflTAg1wsf3gKSW3/gIYIQh9Q6wrqOFDHTHwGCEIfUOsK68uCB0x8BMaB/4CGCEFyOjbm6jhQx0x8BghBcjo25uvLggdMfATGhf+AhghCEYt0BuuMCIYIQlGqYtrrjAgHAAJEw4w1wBQYHAD4x0x8BghCEYt0BuvLggdMf0x/TH1UgbBNaoFihAah/AUYx0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yds8fwgArPkBIILwxPjXIxLt/e9be+x4M727Fi0VEb14qRKu0PJjevZVcq66lTCkf9sx4ILwhZFbG/WUP9KFO7ZgM4rKz6450fc1VJzvkiJVqZRazD66lKV/2zHgASb4QW8kECNfA39wUAOAQgFtbds8CQHOyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WUAP6AnABymgjbrMlbrOxlzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AAoAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSAFFuawO1E0NQB+GLSAAGU0j8BMY6OMPgo1wsKgwm68uCJ2zzigNAAJw"),n=a.Cell.fromBase64("te6cckECEAEAAv4AAQHAAQEFofm/AgEU/wD0pBP0vPLICwMCAWIHBAIBWAYFAUW5rA7UTQ1AH4YtIAAZTSPwExjo4w+CjXCwqDCbry4InbPOKA8Aubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSALe0AHQ0wMBcbDAAZF/kXDiAfpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiSJBVW8E+GHtRNDUAfhi0gABlNI/ATGOjjD4KNcLCoMJuvLgids84lnbPDDI+EIBzH8BygABAco/ye1UDwgD4O2i7ftwIddJwh+VMCDXCx/eApJbf+AhghCH1DrCuo4UMdMfAYIQh9Q6wrry4IHTHwExoH/gIYIQXI6NubqOFDHTHwGCEFyOjbm68uCB0x8BMaF/4CGCEIRi3QG64wIhghCUapi2uuMCAcAAkTDjDXAOCgkArPkBIILwxPjXIxLt/e9be+x4M727Fi0VEb14qRKu0PJjevZVcq66lTCkf9sx4ILwhZFbG/WUP9KFO7ZgM4rKz6450fc1VJzvkiJVqZRazD66lKV/2zHgAUYx0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yds8fwsBJvhBbyQQI18Df3BQA4BCAW1t2zwMAc7IcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxZQA/oCcAHKaCNusyVus7GXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsADQCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAA+MdMfAYIQhGLdAbry4IHTH9Mf0x9VIGwTWqBYoQGofwACcJVGk7g=");let e=a.beginCell();e.storeRef(n),e.storeUint(0,1);const o=e.endCell();return{code:s,data:o}}const Q={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class l{constructor(n,e){c(this,"address");c(this,"init");c(this,"abi",{errors:Q});this.address=n,this.init=e}static async init(){return await d()}static async fromInit(){const n=await d(),e=a.contractAddress(0,n);return new l(e,n)}static fromAddress(n){return new l(n)}async send(n,e,o,t){let r=null;if(t==="increment"&&(r=a.beginCell().storeUint(0,32).storeStringTail(t).endCell()),t==="decrement"&&(r=a.beginCell().storeUint(0,32).storeStringTail(t).endCell()),t&&typeof t=="object"&&!(t instanceof a.Slice)&&t.$$type==="Add"&&(r=a.beginCell().store(M(t)).endCell()),t&&typeof t=="object"&&!(t instanceof a.Slice)&&t.$$type==="Subtract"&&(r=a.beginCell().store(H(t)).endCell()),t&&typeof t=="object"&&!(t instanceof a.Slice)&&t.$$type==="MultiMath"&&(r=a.beginCell().store(x(t)).endCell()),t&&typeof t=="object"&&!(t instanceof a.Slice)&&t.$$type==="Deploy"&&(r=a.beginCell().store(p(t)).endCell()),r===null)throw new Error("Invalid message type");await n.internal(e,{...o,body:r})}async getValue(n){let e=new a.TupleBuilder;return(await n.get("value",e.build())).stack.readBigNumber()}}function D(s,n,e){let o;I(s,A,i=>e(2,o=i));let t,r;return h(A,o={markdown:B,tactCode:v,deploy:async()=>{const i=await b.Blockchain.create(),u=await i.treasury("deployer");return t=u.getSender(),r=i.openContract(await l.fromInit()),[await r.send(u.getSender(),{value:a.toNano(1)},{$$type:"Deploy",queryId:0n})]},messages:{increment:async()=>[await r.send(t,{value:a.toNano(1)},"increment")],decrement:async()=>[await r.send(t,{value:a.toNano(1)},"decrement")],"Add(3)":async()=>[await r.send(t,{value:a.toNano(1)},{$$type:"Add",amount:3n})],"Subtract(2)":async()=>[await r.send(t,{value:a.toNano(1)},{$$type:"Subtract",amount:2n})],"MultiMath(1,0,2)":async()=>[await r.send(t,{value:a.toNano(1)},{$$type:"MultiMath",add:1n,subtract:0n,multiply:2n})],"MultiMath(0,3,3)":async()=>[await r.send(t,{value:a.toNano(1)},{$$type:"MultiMath",add:0n,subtract:3n,multiply:3n})]},getters:{value:async()=>await r.getValue()},prev:g(import.meta.url).prev,next:g(import.meta.url).next},o),[]}class k extends w{constructor(n){super(),y(this,n,D,null,C,{})}}export{k as default};
