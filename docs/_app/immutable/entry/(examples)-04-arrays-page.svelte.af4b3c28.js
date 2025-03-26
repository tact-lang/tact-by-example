var y=Object.defineProperty;var u=(r,e,t)=>e in r?y(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var o=(r,e,t)=>(u(r,typeof e!="symbol"?e+"":e,t),t);import{S as w,i as f,s as h,I,ac as B}from"../chunks/index.9fe14626.js";import{d as n,g as c,s as p}from"../chunks/store.476c3091.js";import{d as C}from"../chunks/index.c056099e.js";const b=`# Arrays

You can implement simple arrays in Tact by using the \`map\` type.

To create an array, define a map with an \`Int\` type as the key. This key will represent the index in the array. Additionally, include a variable to keep track of the number of items in the array.

The example contract records the last five timestamps when the \`timer\` message was received. These timestamps are stored in a cyclical array, implemented as a map.

## Limit the Number of Items

Maps are designed to hold a limited number of items. Only use a map if you know the maximum number of items it will contain. It's also a good idea to [write a test](https://github.com/tact-lang/tact-emulator) to populate the map with its maximum number of elements and observe how gas consumption behaves under stress.

If the number of items is unbounded and could potentially grow into the billions, you will need to architect your contract differently. We will discuss unbounded arrays later, under the topic of contract sharding.
`,E=`import "@stdlib/deploy";

// this contract records the last 5 timestamps of when "timer" message was received
contract Arrays with Deployable {

    const MaxSize: Int = 5;
    arr: map<Int, Int>; // this is our array implemented with a map
    arrLength: Int as uint8 = 0;
    arrStart: Int as uint8 = 0; // our array is cyclic

    init() {}

    // push an item to the end of the array
    fun arrPush(item: Int) {
        if (self.arrLength < self.MaxSize) {
            self.arr.set(self.arrLength, item);
            self.arrLength = self.arrLength + 1;
        } else {
            self.arr.set(self.arrStart, item);
            self.arrStart = (self.arrStart + 1) % self.MaxSize;
        }
    }

    // iterate over all items in the array and dump them
    fun arrPrint() {
        let i: Int = self.arrStart;
        repeat (self.arrLength) {
            dump(self.arr.get(i)!!); // !! tells the compiler this can't be null
            i = (i + 1) % self.MaxSize;
        }
    }

    // record the timestamp when each "timer" message is received
    receive("timer") {
        let timestamp: Int = now();
        self.arrPush(timestamp);
    }

    receive("dump") {
        self.arrPrint();
    }

    get fun length(): Int {
        return self.arrLength;
    }

    get fun mapping(): map<Int, Int> {
        return self.arr;
    }
}`;function M(r){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(r.queryId,64)}}async function d(){const r=n.Cell.fromBase64("te6ccgECGAEAA+IAART/APSkE/S88sgLAQIBYgIDAqbQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVEts88uCCyPhDAcx/AcoAVSBQI/QAywfLB8ntVBMEAgFYDA0CoO2i7fsBkjB/4HAh10nCH5UwINcLH94gghCUapi2uo6oMNMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8n4QgFwbds8f+DAAJEw4w1wBQYBOm1tIm6zmVsgbvLQgG8iAZEy4hAkcAMEgEJQI9s8BwK4+QEggvDMviWpezhkxiLSxeB29zSlSJWdSBAh/6GtJ2OVbSwOQbqOiDD4I9s8f9sx4ILwrwUDRQtHfCMqXqwgx1MmlDDiZOy0ZOtw2Ezvh3VN3hW6joXbPH/bMeAJCgHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAIAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAI4iwQWOHYEBASAQNVREMyFulVtZ9FowmMgBzwBBM/RC4gGkjiGBAQEgEDVURTMhbpVbWfRaMJjIAc8AQTP0QuICpHWpCFniWAFWUwGOpYEBAVRUAFIwQTP0DG+hlAHXADCSW23iIG7y0IDbPP4UMKR1qQjkMAsA3sghwQCYgC0BywcBowHeIYI4Mnyyc0EZ07epqh25jiBwIHGOFAR6qQymMCWoEqAEqgcCpCHAAEUw5jAzqgLPAY4rbwBwjhEjeqkIEm+MAaQDeqkEIMAAFOYzIqUDnFMCb4GmMFjLBwKlWeQwMeLJ0AIBIA4PAgFIFhcCEbf222ebZ42GMBMQAgEgERIAAiICEbCMNs82zxsMYBMUALmy9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSABSO1E0NQB+GPSAAGa9ATTB9MHVSBsE+Aw+CjXCwqDCbry4InbPBUAAiEABm1wIAARsK+7UTQ0gABgAHWybuNDVpcGZzOi8vUW1SMTdOcEQ0ZFpZNEpnaFBzRU53VnJkNW1KaEg4Z3NVcHJ5OHo4VE4yelI0Y4IA=="),e=n.Cell.fromBase64("te6cckECGgEAA+wAAQHAAQEFoRONAgEU/wD0pBP0vPLICwMCAWIPBAIBWAgFAgFIBwYAdbJu40NWlwZnM6Ly9RbVIxN05wRDRkWlk0SmdoUHNFTndWcmQ1bUpoSDhnc1Vwcnk4ejhUTjJ6UjRjggABGwr7tRNDSAAGACASANCQIBIAsKALmy9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSACEbCMNs82zxsMYBgMAAIhAhG39ttnm2eNhjAYDgACIgKm0AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8VRLbPPLggsj4QwHMfwHKAFUgUCP0AMsHywfJ7VQYEAKg7aLt+wGSMH/gcCHXScIflTAg1wsf3iCCEJRqmLa6jqgw0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yfhCAXBt2zx/4MAAkTDjDXAVEQK4+QEggvDMviWpezhkxiLSxeB29zSlSJWdSBAh/6GtJ2OVbSwOQbqOiDD4I9s8f9sx4ILwrwUDRQtHfCMqXqwgx1MmlDDiZOy0ZOtw2Ezvh3VN3hW6joXbPH/bMeAUEgFWUwGOpYEBAVRUAFIwQTP0DG+hlAHXADCSW23iIG7y0IDbPP4UMKR1qQjkMBMA3sghwQCYgC0BywcBowHeIYI4Mnyyc0EZ07epqh25jiBwIHGOFAR6qQymMCWoEqAEqgcCpCHAAEUw5jAzqgLPAY4rbwBwjhEjeqkIEm+MAaQDeqkEIMAAFOYzIqUDnFMCb4GmMFjLBwKlWeQwMeLJ0ACOIsEFjh2BAQEgEDVURDMhbpVbWfRaMJjIAc8AQTP0QuIBpI4hgQEBIBA1VEUzIW6VW1n0WjCYyAHPAEEz9ELiAqR1qQhZ4lgBOm1tIm6zmVsgbvLQgG8iAZEy4hAkcAMEgEJQI9s8FgHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAXAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAUjtRNDUAfhj0gABmvQE0wfTB1UgbBPgMPgo1wsKgwm68uCJ2zwZAAZtcCAeOBIB");let t=n.beginCell();t.storeRef(e),t.storeUint(0,1);const i=t.endCell();return{code:r,data:i}}const D={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}},k=[{name:"StateInit",header:null,fields:[{name:"code",type:{kind:"simple",type:"cell",optional:!1}},{name:"data",type:{kind:"simple",type:"cell",optional:!1}}]},{name:"Context",header:null,fields:[{name:"bounced",type:{kind:"simple",type:"bool",optional:!1}},{name:"sender",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"raw",type:{kind:"simple",type:"slice",optional:!1}}]},{name:"SendParameters",header:null,fields:[{name:"bounce",type:{kind:"simple",type:"bool",optional:!1}},{name:"to",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"mode",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"body",type:{kind:"simple",type:"cell",optional:!0}},{name:"code",type:{kind:"simple",type:"cell",optional:!0}},{name:"data",type:{kind:"simple",type:"cell",optional:!0}}]},{name:"Deploy",header:2490013878,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"DeployOk",header:2952335191,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"FactoryDeploy",header:1829761339,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}},{name:"cashback",type:{kind:"simple",type:"address",optional:!1}}]}],Q=[{name:"length",arguments:[],returnType:{kind:"simple",type:"int",optional:!1,format:257}},{name:"map",arguments:[],returnType:{kind:"dict",key:"int",value:"int"}}],S=[{receiver:"internal",message:{kind:"text",text:"timer"}},{receiver:"internal",message:{kind:"text",text:"dump"}},{receiver:"internal",message:{kind:"typed",type:"Deploy"}}];class A{constructor(e,t){o(this,"address");o(this,"init");o(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"FactoryDeploy",header:1829761339,fields:[]}],types:k,getters:Q,receivers:S,errors:D});this.address=e,this.init=t}static async init(){return await d()}static async fromInit(){const e=await d(),t=n.contractAddress(0,e);return new A(t,e)}static fromAddress(e){return new A(e)}async send(e,t,i,a){let s=null;if(a==="timer"&&(s=n.beginCell().storeUint(0,32).storeStringTail(a).endCell()),a==="dump"&&(s=n.beginCell().storeUint(0,32).storeStringTail(a).endCell()),a&&typeof a=="object"&&!(a instanceof n.Slice)&&a.$$type==="Deploy"&&(s=n.beginCell().store(M(a)).endCell()),s===null)throw new Error("Invalid message type");await e.internal(t,{...i,body:s})}async getLength(e){let t=new n.TupleBuilder;return(await e.get("length",t.build())).stack.readBigNumber()}async getMap(e){let t=new n.TupleBuilder,i=(await e.get("map",t.build())).stack;return n.Dictionary.loadDirect(n.Dictionary.Keys.BigInt(257),n.Dictionary.Values.BigInt(257),i.readCellOpt())}}function v(r,e,t){let i;I(r,p,l=>t(2,i=l));let a,s;return B(p,i={markdown:b,tactCode:E,deploy:async()=>{const l=await C.Blockchain.create(),m=await l.treasury("deployer");a=m.getSender(),s=l.openContract(await A.fromInit());const g={[m.address.toString()]:"deployer",[s.address.toString()]:"contract"};return[[s],g,[await s.send(m.getSender(),{value:n.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{timer:async()=>[await s.send(a,{value:n.toNano(1)},"timer")],dump:async()=>[await s.send(a,{value:n.toNano(1)},"dump")]},getters:{length:async()=>await s.getLength(),mapping:async()=>await s.getMap()},prev:c(import.meta.url).prev,next:c(import.meta.url).next},i),[]}class L extends w{constructor(e){super(),f(this,e,v,null,h,{})}}export{L as default};
