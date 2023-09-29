var g=Object.defineProperty;var u=(o,e,t)=>e in o?g(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var A=(o,e,t)=>(u(o,typeof e!="symbol"?e+"":e,t),t);import{S as f,i as w,s as I,I as C,ac as h}from"../chunks/index.9fe14626.js";import{d as s,g as c,s as m}from"../chunks/store.5f445bdf.js";import{d as B}from"../chunks/index.5a025de5.js";const b=`# Emitting Logs

It is sometimes useful to emit events from the contract in order to indicate that certain things happened.

This data can later be analyzed off-chain and indexed by using [RPC API](https://orbs.com/ton-access) to query all transactions sent to the contract.

Consider for example a staking contract that wants to indicate how much time passed before users unstaked for analytics purposes. By analyzing this data, the developer can think of improvements to the product.

One way to achieve this is by sending messages back to the sender using \`self.reply()\` or by sending messages to the zero address. These two methods work, but they are not the most efficient in terms of gas.

The \`emit()\` function will output a message (binary or textual) from the contract. This message does not actually have a recipient and is very gas-efficient because it doesn't actually need to be delivered.

The messages emitted in this way are still recorded on the blockchain and can be analyzed by anyone at any later time.`,v=`import "@stdlib/deploy";

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
}`;function k(o){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(o.queryId,64)}}async function p(){const o=s.Cell.fromBase64("te6ccgECEgEAA4sAART/APSkE/S88sgLAQIBYgIDApLQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxZ2zzy4IIwyPhDAcx/AcoAye1UBAUCAVgODwE07UTQ1AH4Y9IAMJFt4Pgo1wsKgwm68uCJ2zwGAqDtou37AZIwf+BwIddJwh+VMCDXCx/eIIIQlGqYtrqOqDDTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J+EIBcG3bPH/gwACRMOMNcAcIAAJtATptbSJus5lbIG7y0IBvIgGRMuIQJHADBIBCUCPbPAkD2PkBIILwXsoCtjzu92n8Bt/OOmUr4nYpoM/NU58QSg7YWosDSIS6jp0wiMiCWMAAAAAAAAAAAAAAAAEBy2fMyXD7AH/bMeAggvCnwr18B3X5QcKPxxl3v3/Ce0iZUwAHfdIkKD9DQzX43LrjAgsMDQHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAKAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMACQAAAAAQWN0aW9uIGhhbmRsZWQApjCCEEqBfID4QshZghAuDyUbUAPLHwH6AgEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbJyIJYwAAAAAAAAAAAAAAAAQHLZ8zJcPsAf9sxAKqC8Ljmwv/iUI1QaqHMqgF4vpGdXssHhbS2iMavz5a+y7Weuo4vgghqz8DIAYIQrewmIljLHwH6AsnIgljAAAAAAAAAAAAAAAABActnzMlw+wB/2zHgALm7vRgnBc7D1dLK57HoTsOdZKhRtmgnCd1jUtK2R8syLTry398WI5gnAgVcAbgGdjlM5YOq5HJbLDgnAb1J3vlUWW8cdT094FWcMmgnCdl05as07LczoOlm2UZuikgCAUgQEQARsK+7UTQ0gABgAHWybuNDVpcGZzOi8vUW1iWUZIMzJqcGdYUjNqUENDVm5xQm5jZXFXc3JiMTZyNXdwejM5NUV4TGhrdYIA=="),e=s.Cell.fromBase64("te6cckECFAEAA5UAAQHAAQEFoQiFAgEU/wD0pBP0vPLICwMCAWIJBAIBWAgFAgFIBwYAdbJu40NWlwZnM6Ly9RbWJZRkgzMmpwZ1hSM2pQQ0NWbnFCbmNlcVdzcmIxNnI1d3B6Mzk1RXhMaGt1ggABGwr7tRNDSAAGAAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSAKS0AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8Wds88uCCMMj4QwHMfwHKAMntVBIKAqDtou37AZIwf+BwIddJwh+VMCDXCx/eIIIQlGqYtrqOqDDTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J+EIBcG3bPH/gwACRMOMNcA8LA9j5ASCC8F7KArY87vdp/AbfzjplK+J2KaDPzVOfEEoO2FqLA0iEuo6dMIjIgljAAAAAAAAAAAAAAAABActnzMlw+wB/2zHgIILwp8K9fAd1+UHCj8cZd79/wntImVMAB33SJCg/Q0M1+Ny64wIODQwAqoLwuObC/+JQjVBqocyqAXi+kZ1eyweFtLaIxq/Plr7LtZ66ji+CCGrPwMgBghCt7CYiWMsfAfoCyciCWMAAAAAAAAAAAAAAAAEBy2fMyXD7AH/bMeAApjCCEEqBfID4QshZghAuDyUbUAPLHwH6AgEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbJyIJYwAAAAAAAAAAAAAAAAQHLZ8zJcPsAf9sxACQAAAAAQWN0aW9uIGhhbmRsZWQBOm1tIm6zmVsgbvLQgG8iAZEy4hAkcAMEgEJQI9s8EAHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wARAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMATTtRNDUAfhj0gAwkW3g+CjXCwqDCbry4InbPBMAAm05vLYx");let t=s.beginCell();t.storeRef(e),t.storeUint(0,1);const i=t.endCell();return{code:o,data:i}}const M={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}},E=[{name:"StateInit",header:null,fields:[{name:"code",type:{kind:"simple",type:"cell",optional:!1}},{name:"data",type:{kind:"simple",type:"cell",optional:!1}}]},{name:"Context",header:null,fields:[{name:"bounced",type:{kind:"simple",type:"bool",optional:!1}},{name:"sender",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"raw",type:{kind:"simple",type:"slice",optional:!1}}]},{name:"SendParameters",header:null,fields:[{name:"bounce",type:{kind:"simple",type:"bool",optional:!1}},{name:"to",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"mode",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"body",type:{kind:"simple",type:"cell",optional:!0}},{name:"code",type:{kind:"simple",type:"cell",optional:!0}},{name:"data",type:{kind:"simple",type:"cell",optional:!0}}]},{name:"Deploy",header:2490013878,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"DeployOk",header:2952335191,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"FactoryDeploy",header:1829761339,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}},{name:"cashback",type:{kind:"simple",type:"address",optional:!1}}]},{name:"TransferEvent",header:772744475,fields:[{name:"amount",type:{kind:"simple",type:"uint",optional:!1,format:"coins"}},{name:"recipient",type:{kind:"simple",type:"address",optional:!1}}]},{name:"StakeEvent",header:2917934626,fields:[{name:"amount",type:{kind:"simple",type:"uint",optional:!1,format:"coins"}}]}],D=[],Q=[{receiver:"internal",message:{kind:"text",text:"action"}},{receiver:"internal",message:{kind:"text",text:"transfer"}},{receiver:"internal",message:{kind:"text",text:"stake"}},{receiver:"internal",message:{kind:"typed",type:"Deploy"}}];class l{constructor(e,t){A(this,"address");A(this,"init");A(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"FactoryDeploy",header:1829761339,fields:[]},{name:"TransferEvent",header:772744475,fields:[]},{name:"StakeEvent",header:2917934626,fields:[]}],types:E,getters:D,receivers:Q,errors:M});this.address=e,this.init=t}static async init(){return await p()}static async fromInit(){const e=await p(),t=s.contractAddress(0,e);return new l(t,e)}static fromAddress(e){return new l(e)}async send(e,t,i,n){let a=null;if(n==="action"&&(a=s.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n==="transfer"&&(a=s.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n==="stake"&&(a=s.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n&&typeof n=="object"&&!(n instanceof s.Slice)&&n.$$type==="Deploy"&&(a=s.beginCell().store(k(n)).endCell()),a===null)throw new Error("Invalid message type");await e.internal(t,{...i,body:a})}}function z(o,e,t){let i;C(o,m,r=>t(2,i=r));let n,a;return h(m,i={markdown:b,tactCode:v,deploy:async()=>{const r=await B.Blockchain.create(),d=await r.treasury("deployer");n=d.getSender(),a=r.openContract(await l.fromInit());const y={[d.address.toString()]:"deployer",[a.address.toString()]:"contract"};return[[a],y,[await a.send(d.getSender(),{value:s.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{action:async()=>[await a.send(n,{value:s.toNano(1)},"action")],transfer:async()=>[await a.send(n,{value:s.toNano(1)},"transfer")],stake:async()=>[await a.send(n,{value:s.toNano(1)},"stake")]},getters:{},prev:c(import.meta.url).prev,next:c(import.meta.url).next},i),[]}class U extends f{constructor(e){super(),w(this,e,z,null,I,{})}}export{U as default};
