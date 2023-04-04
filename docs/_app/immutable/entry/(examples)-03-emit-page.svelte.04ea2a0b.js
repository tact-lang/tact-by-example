var y=Object.defineProperty;var u=(A,e,t)=>e in A?y(A,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):A[e]=t;var i=(A,e,t)=>(u(A,typeof e!="symbol"?e+"":e,t),t);import{S as w,i as h,s as I,I as B,ac as f}from"../chunks/index.9fe14626.js";import{d as a,g as d,s as g}from"../chunks/store.d3ab02ad.js";import{d as p}from"../chunks/index.78404594.js";const v=`# Emitting Logs

It is sometimes useful to emit events from the contract in order to indicate that certain things happened.

This data can later be analyzed off-chain and indexed by using [RPC API](https://orbs.com/ton-access) to query all transactions sent to the contract.

Consider for example a staking contract that wants to indicate how much time passed before users unstaked for analytics purposes. By analyzing this data, the developer can think of improvements to the product.

One way to achieve this is by sending messages back to the sender using \`reply()\` or by sending messages to the zero address. These two methods work, but they are not the most efficient in terms of gas.

The \`emit()\` function will output a message (binary or textual) from the contract. This message does not actually have a recipient and is very gas-efficient because it doesn't actually need to be delivered.

The messages emitted in this way are still recorded on the blockchain and can be analyzed by anyone at any later time.`,b=`import "@stdlib/deploy";

message TransferEvent {
    amount: Int as coins;
    recipient: Address;
}

message StakeEvent {
    amount: Int as coins;
}

contract Emit with Deployable {

    init() {}

    receive("action") {
        // handle action here
        // ...
        // emit log that the action was handled
        emit("Action handled".asComment());
    }

    receive("transfer") {
        // handle transfer here
        // ...
        // emit log that the transfer happened
        emit(TransferEvent{amount: ton("1.25"), recipient: sender()}.toCell());
    }

    receive("stake") {
        // handle stake here
        // ...
        // emit log that stake happened
        emit(StakeEvent{amount: ton("0.007")}.toCell());
    }
}`;function Q(A){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(A.queryId,64)}}async function m(){const A=a.Cell.fromBase64("te6ccgECEQEAA3AAART/APSkE/S88sgLAQIBYgIDAo7QAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxZ2zwwMMj4QwHMfwHKAMntVAQFAgFYDQ4BNO1E0NQB+GPSADCRbeD4KNcLCoMJuvLgids8BgKu7aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEJRqmLa6jq4x0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yX/4QnBYA4BCAW1t2zx/4AHAAJEw4w1wBwgAAm0ByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsACQPY+QEggvBeygK2PO73afwG3846ZSvidimgz81TnxBKDthaiwNIhLqOnTCIyIJYwAAAAAAAAAAAAAAAAQHLZ8zJcPsAf9sx4CCC8KfCvXwHdflBwo/HGXe/f8J7SJlTAAd90iQoP0NDNfjcuuMCCgsMAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMACQAAAAAQWN0aW9uIGhhbmRsZWQApjCCEEqBfID4QshZghAuDyUbUAPLHwH6AgEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbJyIJYwAAAAAAAAAAAAAAAAQHLZ8zJcPsAf9sxAKqC8Ljmwv/iUI1QaqHMqgF4vpGdXssHhbS2iMavz5a+y7Weuo4vgghqz8DIAYIQrewmIljLHwH6AsnIgljAAAAAAAAAAAAAAAABActnzMlw+wB/2zHgALm7vRgnBc7D1dLK57HoTsOdZKhRtmgnCd1jUtK2R8syLTry398WI5gnAgVcAbgGdjlM5YOq5HJbLDgnAb1J3vlUWW8cdT094FWcMmgnCdl05as07LczoOlm2UZuikgCAUgPEAARsK+7UTQ0gABgAHWybuNDVpcGZzOi8vUW1iWm42UVJLUHdKSnJiOHlXWER4dEFnUUVnNHNGY0hHMmpUMkJEcDFjZmVjaIIA=="),e=a.Cell.fromBase64("te6cckECEwEAA3oAAQHAAQEFoQiFAgEU/wD0pBP0vPLICwMCAWIJBAIBWAgFAgFIBwYAdbJu40NWlwZnM6Ly9RbWJabjZRUktQd0pKcmI4eVdYRHh0QWdRRWc0c0ZjSEcyalQyQkRwMWNmZWNoggABGwr7tRNDSAAGAAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSAKO0AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8Wds8MDDI+EMBzH8BygDJ7VQRCgKu7aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEJRqmLa6jq4x0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yX/4QnBYA4BCAW1t2zx/4AHAAJEw4w1wDwsD2PkBIILwXsoCtjzu92n8Bt/OOmUr4nYpoM/NU58QSg7YWosDSIS6jp0wiMiCWMAAAAAAAAAAAAAAAAEBy2fMyXD7AH/bMeAggvCnwr18B3X5QcKPxxl3v3/Ce0iZUwAHfdIkKD9DQzX43LrjAg4NDACqgvC45sL/4lCNUGqhzKoBeL6RnV7LB4W0tojGr8+Wvsu1nrqOL4IIas/AyAGCEK3sJiJYyx8B+gLJyIJYwAAAAAAAAAAAAAAAAQHLZ8zJcPsAf9sx4ACmMIIQSoF8gPhCyFmCEC4PJRtQA8sfAfoCASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFsnIgljAAAAAAAAAAAAAAAABActnzMlw+wB/2zEAJAAAAABBY3Rpb24gaGFuZGxlZAHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAQAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMATTtRNDUAfhj0gAwkW3g+CjXCwqDCbry4InbPBIAAm01yWvP");let t=a.beginCell();t.storeRef(e),t.storeUint(0,1);const o=t.endCell();return{code:A,data:o}}const E={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class c{constructor(e,t){i(this,"address");i(this,"init");i(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"TransferEvent",header:772744475,fields:[]},{name:"StakeEvent",header:2917934626,fields:[]}],errors:E});this.address=e,this.init=t}static async init(){return await m()}static async fromInit(){const e=await m(),t=a.contractAddress(0,e);return new c(t,e)}static fromAddress(e){return new c(e)}async send(e,t,o,n){let s=null;if(n==="action"&&(s=a.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n==="transfer"&&(s=a.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n==="stake"&&(s=a.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n&&typeof n=="object"&&!(n instanceof a.Slice)&&n.$$type==="Deploy"&&(s=a.beginCell().store(Q(n)).endCell()),s===null)throw new Error("Invalid message type");await e.internal(t,{...o,body:s})}}function H(A,e,t){let o;B(A,g,r=>t(2,o=r));let n,s;return f(g,o={markdown:v,tactCode:b,deploy:async()=>{const r=await p.Blockchain.create(),l=await r.treasury("deployer");n=l.getSender(),s=r.openContract(await c.fromInit());const C={[l.address.toString()]:"deployer",[s.address.toString()]:"contract"};return[[s],C,[await s.send(l.getSender(),{value:a.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{action:async()=>[await s.send(n,{value:a.toNano(1)},"action")],transfer:async()=>[await s.send(n,{value:a.toNano(1)},"transfer")],stake:async()=>[await s.send(n,{value:a.toNano(1)},"stake")]},getters:{},prev:d(import.meta.url).prev,next:d(import.meta.url).next},o),[]}class U extends w{constructor(e){super(),h(this,e,H,null,I,{})}}export{U as default};
