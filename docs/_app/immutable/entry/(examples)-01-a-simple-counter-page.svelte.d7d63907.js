var A=Object.defineProperty;var f=(s,e,t)=>e in s?A(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var l=(s,e,t)=>(f(s,typeof e!="symbol"?e+"":e,t),t);import{S as y,i as w,s as v,I as h,ac as C}from"../chunks/index.9fe14626.js";import{d as a,g as m,s as p}from"../chunks/store.476c3091.js";import{d as I}from"../chunks/index.c056099e.js";const b=`# A Simple Counter

This is a simple counter contract that allows users to increment its value.

This contract has a state variable \`val\` that persists between contract calls - the counter value. When persisted, this variable is encoded \`as uint32\` - a 32-bit unsigned integer. Contracts pay rent in proportion to the amount of persistent space they consume, so compact representations are encouraged.

State variables should be initialized in \`init()\` that runs on deployment of the contract.

## Receiving messages

This contract can receive **_messages_** from users.

Unlike getters that are just read-only, messages can do write operations and change the contract's persistent state. Incoming messages are processed in \`receive()\` methods as transactions and cost gas for the sender.

After deploying the contract, send the \`increment\` message by pressing the <span class="mdButton grape">Send increment</span> button in order to increase the counter value by one. Afterwards, call the getter \`value()\` to see that the value indeed changed.

<div style="padding-left: 1em; margin: 1em 0; position: relative;">
    <div style="position: absolute; top: 0; bottom: 0%; left: 0; width: 3px; background-color: green;"></div>
    <strong>Info</strong>: We will learn more in details about "getter" functions in the next example.
</div>
`,k=`contract Counter {
 
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
}`;async function u(){const s=a.Cell.fromBase64("te6ccgECDgEAAaEAART/APSkE/S88sgLAQIBYgIDApjQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxZ2zzy4ILI+EMBzH8BygABAcsfye1UCwQCAVgFBgCs7aLt+wGSMH/gcCHXScIflTAg1wsf3iDAACLXScEhsJJbf+DAAI4r+QGC8MT41yMS7f3vW3vseDO9uxYtFRG9eKkSrtDyY3r2VXKuupSkf9sx4JEw4nAAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSAIBSAcIABGwr7tRNDSAAGACAWoJCgBzp3caGrS4MzmdF5eotqs9Mj0pKaWYrKi3GSC3JTqzsLSorKwhsZooqbycJbmmqrwYu7QcPKikOrm4wQINpYG2ebZ4YwsMATztRNDUAfhj0gABlNMfATHgMPgo1wsKgwm68uCJ2zwNAAIgAAJw"),e=a.Cell.fromBase64("te6cckECEAEAAasAAQHAAQEFoendAgEU/wD0pBP0vPLICwMCAWIMBAIBWAsFAgFICgYCAWoJBwINpYG2ebZ4Yw4IAAIgAHOndxoatLgzOZ0Xl6i2qz0yPSkppZisqLcZILclOrOwtKisrCGxmiipvJwluaaqvBi7tBw8qKQ6ubjBABGwr7tRNDSAAGAAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSAKY0AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8Wds88uCCyPhDAcx/AcoAAQHLH8ntVA4NAKztou37AZIwf+BwIddJwh+VMCDXCx/eIMAAItdJwSGwklt/4MAAjiv5AYLwxPjXIxLt/e9be+x4M727Fi0VEb14qRKu0PJjevZVcq66lKR/2zHgkTDicAE87UTQ1AH4Y9IAAZTTHwEx4DD4KNcLCoMJuvLgids8DwACcBH28eA=");let t=a.beginCell();t.storeRef(e),t.storeUint(0,1);const r=t.endCell();return{code:s,data:r}}const S={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}},B=[{name:"StateInit",header:null,fields:[{name:"code",type:{kind:"simple",type:"cell",optional:!1}},{name:"data",type:{kind:"simple",type:"cell",optional:!1}}]},{name:"Context",header:null,fields:[{name:"bounced",type:{kind:"simple",type:"bool",optional:!1}},{name:"sender",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"raw",type:{kind:"simple",type:"slice",optional:!1}}]},{name:"SendParameters",header:null,fields:[{name:"bounce",type:{kind:"simple",type:"bool",optional:!1}},{name:"to",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"mode",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"body",type:{kind:"simple",type:"cell",optional:!0}},{name:"code",type:{kind:"simple",type:"cell",optional:!0}},{name:"data",type:{kind:"simple",type:"cell",optional:!0}}]}],x=[{name:"value",arguments:[],returnType:{kind:"simple",type:"int",optional:!1,format:257}}],T=[{receiver:"internal",message:{kind:"empty"}},{receiver:"internal",message:{kind:"text",text:"increment"}}];class c{constructor(e,t){l(this,"address");l(this,"init");l(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]}],types:B,getters:x,receivers:T,errors:S});this.address=e,this.init=t}static async init(){return await u()}static async fromInit(){const e=await u(),t=a.contractAddress(0,e);return new c(t,e)}static fromAddress(e){return new c(e)}async send(e,t,r,o){let n=null;if(o===null&&(n=new a.Cell),o==="increment"&&(n=a.beginCell().storeUint(0,32).storeStringTail(o).endCell()),n===null)throw new Error("Invalid message type");await e.internal(t,{...r,body:n})}async getValue(e){let t=new a.TupleBuilder;return(await e.get("value",t.build())).stack.readBigNumber()}}function z(s,e,t){let r;h(s,p,i=>t(2,r=i));let o,n;return C(p,r={markdown:b,tactCode:k,deploy:async()=>{const i=await I.Blockchain.create(),d=await i.treasury("deployer");o=d.getSender(),n=i.openContract(await c.fromInit());const g={[d.address.toString()]:"deployer",[n.address.toString()]:"contract"};return[[n],g,[await n.send(d.getSender(),{value:a.toNano(1)},null)]]},messages:{increment:async()=>[await n.send(o,{value:a.toNano(1)},"increment")]},getters:{value:async()=>await n.getValue()},prev:m(import.meta.url).prev,next:m(import.meta.url).next},r),[]}class J extends y{constructor(e){super(),w(this,e,z,null,v,{})}}export{J as default};
