var g=Object.defineProperty;var u=(s,e,t)=>e in s?g(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var o=(s,e,t)=>(u(s,typeof e!="symbol"?e+"":e,t),t);import{S as w,i as h,s as f,I,ac as B}from"../chunks/index.9fe14626.js";import{d as n,g as c,s as d}from"../chunks/store.96cf5894.js";import{d as C}from"../chunks/index.7100d5a9.js";const b=`# Arrays

You can implement simple arrays in Tact by relying on the map type.

To create an array, define a map with \`Int\` type as key. The key will hold the index in the array. Add another length variable to rememebr how many items are in the array.

The example contract records the last 5 timestamps of when the \`timer\` message was received. The timestamps are held in a cyclical array implemented as a map.

## Limit the number of items

Maps are designed to hold a limited number of items. Only use a map if you know the upper bound of items that it may hold. It's also a good idea to [write a test](https://github.com/tact-lang/tact-emulator) to add the maximum number of elements to the map and see how gas behaves under stress.

If the number of items is unbounded and can potentially grow to billions, you'll need to architect your contract differently. We will discuss unbounded arrays later on under the topic of contract sharding.`,E=`import "@stdlib/deploy";

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

    get fun map(): map<Int, Int> {
        return self.arr;
    }
}`;function M(s){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(s.queryId,64)}}async function p(){const s=n.Cell.fromBase64("te6ccgECGAEAA+IAART/APSkE/S88sgLAQIBYgIDAqbQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVEts88uCCyPhDAcx/AcoAVSBQI/QAywfLB8ntVBMEAgFYDA0CoO2i7fsBkjB/4HAh10nCH5UwINcLH94gghCUapi2uo6oMNMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8n4QgFwbds8f+DAAJEw4w1wBQYBOm1tIm6zmVsgbvLQgG8iAZEy4hAkcAMEgEJQI9s8BwK4+QEggvDMviWpezhkxiLSxeB29zSlSJWdSBAh/6GtJ2OVbSwOQbqOiDD4I9s8f9sx4ILwrwUDRQtHfCMqXqwgx1MmlDDiZOy0ZOtw2Ezvh3VN3hW6joXbPH/bMeAJCgHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAIAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAI4iwQWOHYEBASAQNVREMyFulVtZ9FowmMgBzwBBM/RC4gGkjiGBAQEgEDVURTMhbpVbWfRaMJjIAc8AQTP0QuICpHWpCFniWAFWUwGOpYEBAVRUAFIwQTP0DG+hlAHXADCSW23iIG7y0IDbPP4UMKR1qQjkMAsA3sghwQCYgC0BywcBowHeIYI4Mnyyc0EZ07epqh25jiBwIHGOFAR6qQymMCWoEqAEqgcCpCHAAEUw5jAzqgLPAY4rbwBwjhEjeqkIEm+MAaQDeqkEIMAAFOYzIqUDnFMCb4GmMFjLBwKlWeQwMeLJ0AIBIA4PAgFIFhcCEbf222ebZ42GMBMQAgEgERIAAiICEbCMNs82zxsMYBMUALmy9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSABSO1E0NQB+GPSAAGa9ATTB9MHVSBsE+Aw+CjXCwqDCbry4InbPBUAAiEABm1wIAARsK+7UTQ0gABgAHWybuNDVpcGZzOi8vUW1SMTdOcEQ0ZFpZNEpnaFBzRU53VnJkNW1KaEg4Z3NVcHJ5OHo4VE4yelI0Y4IA=="),e=n.Cell.fromBase64("te6cckECGgEAA+wAAQHAAQEFoRONAgEU/wD0pBP0vPLICwMCAWIPBAIBWAgFAgFIBwYAdbJu40NWlwZnM6Ly9RbVIxN05wRDRkWlk0SmdoUHNFTndWcmQ1bUpoSDhnc1Vwcnk4ejhUTjJ6UjRjggABGwr7tRNDSAAGACASANCQIBIAsKALmy9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSACEbCMNs82zxsMYBgMAAIhAhG39ttnm2eNhjAYDgACIgKm0AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8VRLbPPLggsj4QwHMfwHKAFUgUCP0AMsHywfJ7VQYEAKg7aLt+wGSMH/gcCHXScIflTAg1wsf3iCCEJRqmLa6jqgw0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yfhCAXBt2zx/4MAAkTDjDXAVEQK4+QEggvDMviWpezhkxiLSxeB29zSlSJWdSBAh/6GtJ2OVbSwOQbqOiDD4I9s8f9sx4ILwrwUDRQtHfCMqXqwgx1MmlDDiZOy0ZOtw2Ezvh3VN3hW6joXbPH/bMeAUEgFWUwGOpYEBAVRUAFIwQTP0DG+hlAHXADCSW23iIG7y0IDbPP4UMKR1qQjkMBMA3sghwQCYgC0BywcBowHeIYI4Mnyyc0EZ07epqh25jiBwIHGOFAR6qQymMCWoEqAEqgcCpCHAAEUw5jAzqgLPAY4rbwBwjhEjeqkIEm+MAaQDeqkEIMAAFOYzIqUDnFMCb4GmMFjLBwKlWeQwMeLJ0ACOIsEFjh2BAQEgEDVURDMhbpVbWfRaMJjIAc8AQTP0QuIBpI4hgQEBIBA1VEUzIW6VW1n0WjCYyAHPAEEz9ELiAqR1qQhZ4lgBOm1tIm6zmVsgbvLQgG8iAZEy4hAkcAMEgEJQI9s8FgHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAXAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAUjtRNDUAfhj0gABmvQE0wfTB1UgbBPgMPgo1wsKgwm68uCJ2zwZAAZtcCAeOBIB");let t=n.beginCell();t.storeRef(e),t.storeUint(0,1);const i=t.endCell();return{code:s,data:i}}const D={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}},Q=[{name:"StateInit",header:null,fields:[{name:"code",type:{kind:"simple",type:"cell",optional:!1}},{name:"data",type:{kind:"simple",type:"cell",optional:!1}}]},{name:"Context",header:null,fields:[{name:"bounced",type:{kind:"simple",type:"bool",optional:!1}},{name:"sender",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"raw",type:{kind:"simple",type:"slice",optional:!1}}]},{name:"SendParameters",header:null,fields:[{name:"bounce",type:{kind:"simple",type:"bool",optional:!1}},{name:"to",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"mode",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"body",type:{kind:"simple",type:"cell",optional:!0}},{name:"code",type:{kind:"simple",type:"cell",optional:!0}},{name:"data",type:{kind:"simple",type:"cell",optional:!0}}]},{name:"Deploy",header:2490013878,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"DeployOk",header:2952335191,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"FactoryDeploy",header:1829761339,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}},{name:"cashback",type:{kind:"simple",type:"address",optional:!1}}]}],k=[{name:"length",arguments:[],returnType:{kind:"simple",type:"int",optional:!1,format:257}},{name:"map",arguments:[],returnType:{kind:"dict",key:"int",value:"int"}}],S=[{receiver:"internal",message:{kind:"text",text:"timer"}},{receiver:"internal",message:{kind:"text",text:"dump"}},{receiver:"internal",message:{kind:"typed",type:"Deploy"}}];class A{constructor(e,t){o(this,"address");o(this,"init");o(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"FactoryDeploy",header:1829761339,fields:[]}],types:Q,getters:k,receivers:S,errors:D});this.address=e,this.init=t}static async init(){return await p()}static async fromInit(){const e=await p(),t=n.contractAddress(0,e);return new A(t,e)}static fromAddress(e){return new A(e)}async send(e,t,i,a){let r=null;if(a==="timer"&&(r=n.beginCell().storeUint(0,32).storeStringTail(a).endCell()),a==="dump"&&(r=n.beginCell().storeUint(0,32).storeStringTail(a).endCell()),a&&typeof a=="object"&&!(a instanceof n.Slice)&&a.$$type==="Deploy"&&(r=n.beginCell().store(M(a)).endCell()),r===null)throw new Error("Invalid message type");await e.internal(t,{...i,body:r})}async getLength(e){let t=new n.TupleBuilder;return(await e.get("length",t.build())).stack.readBigNumber()}async getMap(e){let t=new n.TupleBuilder,i=(await e.get("map",t.build())).stack;return n.Dictionary.loadDirect(n.Dictionary.Keys.BigInt(257),n.Dictionary.Values.BigInt(257),i.readCellOpt())}}function v(s,e,t){let i;I(s,d,l=>t(2,i=l));let a,r;return B(d,i={markdown:b,tactCode:E,deploy:async()=>{const l=await C.Blockchain.create(),m=await l.treasury("deployer");a=m.getSender(),r=l.openContract(await A.fromInit());const y={[m.address.toString()]:"deployer",[r.address.toString()]:"contract"};return[[r],y,[await r.send(m.getSender(),{value:n.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{timer:async()=>[await r.send(a,{value:n.toNano(1)},"timer")],dump:async()=>[await r.send(a,{value:n.toNano(1)},"dump")]},getters:{length:async()=>await r.getLength(),map:async()=>await r.getMap()},prev:c(import.meta.url).prev,next:c(import.meta.url).next},i),[]}class L extends w{constructor(e){super(),h(this,e,v,null,f,{})}}export{L as default};
