var w=Object.defineProperty;var p=(s,e,t)=>e in s?w(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var c=(s,e,t)=>(p(s,typeof e!="symbol"?e+"":e,t),t);import{S as h,i as v,s as f,I as C,ac as b}from"../chunks/index.9fe14626.js";import{d as a,g as u,s as g}from"../chunks/store.d3ab02ad.js";import{d as y}from"../chunks/index.78404594.js";const I=`# A Simple Counter

This is a simple counter contract that allows users to increment its value.

This contract has a state variable \`val\` that persists between contract calls - the counter value. When persisted, this variable is encoded \`as uint32\` - a 32-bit unsigned integer. Contracts pay rent in proportion to the amount of persistent space they consume, so compact representations are encouraged.

State variables should be initialized in \`init()\` that runs on deployment of the contract.

## Receiving messages

This contract can receive *messages* from users. Unlike getters that are just read-only, messages can do write operations and change the contract's persistent state. Incoming messages are processed in \`receive()\` methods as transactions and cost gas for the sender.

After deploying the contract, send the \`increment\` message by pressing the <span class="mdButton grape">Send increment</span> button in order to increase the counter value by one. Afterwards, call the getter \`value()\` to see that the value indeed changed.
`,B=`contract Counter {
 
    // persistent state variable of type Int to hold the counter value
    val: Int as uint32;
 
    // initialize the state variable when contract is deployed
    init() {
        self.val = 0;
    }
 
    // handler for incoming increment messages that change the state
    receive("increment") {
        self.val = self.val + 1;
    }
 
    // read-only getter for querying the counter value
    get fun value(): Int {
        return self.val;
    }
}`;async function A(){const s=a.Cell.fromBase64("te6ccgECDgEAAaAAART/APSkE/S88sgLAQIBYgIDApTQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxZ2zwwyPhDAcx/AcoAAQHLH8ntVAsEAgFYBQYAru2i7ftwIddJwh+VMCDXCx/eApJbf+AhwAAh10nBIbCSW3/gAcAAjiv5AYLwxPjXIxLt/e9be+x4M727Fi0VEb14qRKu0PJjevZVcq66lKR/2zHgkTDicAC5u70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIAgFIBwgAEbCvu1E0NIAAYAIBagkKAHOndxoatLgzOZ0Xl6i2qz0yPSkppZisqLcZILclOrOwtKisrCGxmiipvJwluaaqvBi7tBw8qKQ6ubjBAg2lgbZ5tnhjCwwBPO1E0NQB+GPSAAGU0x8BMeAw+CjXCwqDCbry4InbPA0AAiAAAnA="),e=a.Cell.fromBase64("te6cckECEAEAAaoAAQHAAQEFoendAgEU/wD0pBP0vPLICwMCAWIMBAIBWAsFAgFICgYCAWoJBwINpYG2ebZ4Yw4IAAIgAHOndxoatLgzOZ0Xl6i2qz0yPSkppZisqLcZILclOrOwtKisrCGxmiipvJwluaaqvBi7tBw8qKQ6ubjBABGwr7tRNDSAAGAAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSAKU0AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8Wds8MMj4QwHMfwHKAAEByx/J7VQODQCu7aLt+3Ah10nCH5UwINcLH94Cklt/4CHAACHXScEhsJJbf+ABwACOK/kBgvDE+NcjEu3971t77HgzvbsWLRURvXipEq7Q8mN69lVyrrqUpH/bMeCRMOJwATztRNDUAfhj0gABlNMfATHgMPgo1wsKgwm68uCJ2zwPAAJwfPvBUA==");let t=a.beginCell();t.storeRef(e),t.storeUint(0,1);const r=t.endCell();return{code:s,data:r}}const S={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class l{constructor(e,t){c(this,"address");c(this,"init");c(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]}],errors:S});this.address=e,this.init=t}static async init(){return await A()}static async fromInit(){const e=await A(),t=a.contractAddress(0,e);return new l(t,e)}static fromAddress(e){return new l(e)}async send(e,t,r,o){let n=null;if(o===null&&(n=new a.Cell),o==="increment"&&(n=a.beginCell().storeUint(0,32).storeStringTail(o).endCell()),n===null)throw new Error("Invalid message type");await e.internal(t,{...r,body:n})}async getValue(e){let t=new a.TupleBuilder;return(await e.get("value",t.build())).stack.readBigNumber()}}function x(s,e,t){let r;C(s,g,i=>t(2,r=i));let o,n;return b(g,r={markdown:I,tactCode:B,deploy:async()=>{const i=await y.Blockchain.create(),d=await i.treasury("deployer");o=d.getSender(),n=i.openContract(await l.fromInit());const m={[d.address.toString()]:"deployer",[n.address.toString()]:"contract"};return[[n],m,[await n.send(d.getSender(),{value:a.toNano(1)},null)]]},messages:{increment:async()=>[await n.send(o,{value:a.toNano(1)},"increment")]},getters:{value:async()=>await n.getValue()},prev:u(import.meta.url).prev,next:u(import.meta.url).next},r),[]}class L extends h{constructor(e){super(),v(this,e,x,null,f,{})}}export{L as default};
