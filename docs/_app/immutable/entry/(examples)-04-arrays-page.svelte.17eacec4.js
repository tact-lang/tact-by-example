var w=Object.defineProperty;var y=(s,e,t)=>e in s?w(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var A=(s,e,t)=>(y(s,typeof e!="symbol"?e+"":e,t),t);import{S as p,i as I,s as B,I as h,ac as C}from"../chunks/index.9fe14626.js";import{d as n,g,s as d}from"../chunks/store.d3ab02ad.js";import{d as f}from"../chunks/index.78404594.js";const M=`# Arrays

You can implement simple arrays in Tact by relying on the map type.

To create an array, define a map with \`Int\` type as key. The key will hold the index in the array. Add another length variable to rememebr how many items are in the array.

The example contract records the last 5 timestamps of when the \`timer\` message was received. The timestamps are held in a cyclical array implemented as a map.

## Limit the number of items

Maps are designed to hold a limited number of items. Only use a map if you know the upper bound of items that it may hold. It's also a good idea to [write a test](https://github.com/tact-lang/tact-emulator) to add the maximum number of elements to the map and see how gas behaves under stress.

If the number of items is unbounded and can potentially grow to billions, you'll need to architect your contract differently. We will discuss unbounded arrays later on under the topic of contract sharding.`,b=`import "@stdlib/deploy";

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
}`;function E(s){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(s.queryId,64)}}async function m(){const s=n.Cell.fromBase64("te6ccgECFwEAA8cAART/APSkE/S88sgLAQIBYgIDAqLQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVEts8MMj4QwHMfwHKAFUgUCP0AMsHywfJ7VQSBAIBWAsMAq7tou37cCHXScIflTAg1wsf3gKSW3/gIYIQlGqYtrqOrjHTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/Jf/hCcFgDgEIBbW3bPH/gAcAAkTDjDXAFBgHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAHArj5ASCC8My+Jal7OGTGItLF4Hb3NKVIlZ1IECH/oa0nY5VtLA5Buo6IMPgj2zx/2zHggvCvBQNFC0d8IyperCDHUyaUMOJk7LRk63DYTO+HdU3eFbqOhds8f9sx4AgJAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAI4iwQWOHYEBASAQNVREMyFulVtZ9FowmMgBzwBBM/RC4gGkjiGBAQEgEDVURTMhbpVbWfRaMJjIAc8AQTP0QuICpHWpCFniWAFWUwGOpYEBAVRUAFIwQTP0DG+hlAHXADCSW23iIG7y0IDbPP4UMKR1qQjkMAoA3sghwQCYgC0BywcBowHeIYI4Mnyyc0EZ07epqh25jiBwIHGOFAR6qQymMCWoEqAEqgcCpCHAAEUw5jAzqgLPAY4rbwBwjhEjeqkIEm+MAaQDeqkEIMAAFOYzIqUDnFMCb4GmMFjLBwKlWeQwMeLJ0AIBIA0OAgFIFRYCEbf222ebZ42GMBIPAgEgEBEAAiICEbCMNs82zxsMYBITALmy9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSABSO1E0NQB+GPSAAGa9ATTB9MHVSBsE+Aw+CjXCwqDCbry4InbPBQAAiEABm1wIAARsK+7UTQ0gABgAHWybuNDVpcGZzOi8vUW1Sd3BwMTIxZjZDMlg5dTZpTnpLeVdCV2FzU3E1bnhRaHo4YVZaeEpCcmJIeIIA=="),e=n.Cell.fromBase64("te6cckECGQEAA9EAAQHAAQEFoRONAgEU/wD0pBP0vPLICwMCAWIPBAIBWAgFAgFIBwYAdbJu40NWlwZnM6Ly9RbVJ3cHAxMjFmNkMyWDl1NmlOekt5V0JXYXNTcTVueFFoejhhVlp4SkJyYkh4ggABGwr7tRNDSAAGACASANCQIBIAsKALmy9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSACEbCMNs82zxsMYBcMAAIhAhG39ttnm2eNhjAXDgACIgKi0AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8VRLbPDDI+EMBzH8BygBVIFAj9ADLB8sHye1UFxACru2i7ftwIddJwh+VMCDXCx/eApJbf+AhghCUapi2uo6uMdMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8l/+EJwWAOAQgFtbds8f+ABwACRMOMNcBURArj5ASCC8My+Jal7OGTGItLF4Hb3NKVIlZ1IECH/oa0nY5VtLA5Buo6IMPgj2zx/2zHggvCvBQNFC0d8IyperCDHUyaUMOJk7LRk63DYTO+HdU3eFbqOhds8f9sx4BQSAVZTAY6lgQEBVFQAUjBBM/QMb6GUAdcAMJJbbeIgbvLQgNs8/hQwpHWpCOQwEwDeyCHBAJiALQHLBwGjAd4hgjgyfLJzQRnTt6mqHbmOIHAgcY4UBHqpDKYwJagSoASqBwKkIcAARTDmMDOqAs8BjitvAHCOESN6qQgSb4wBpAN6qQQgwAAU5jMipQOcUwJvgaYwWMsHAqVZ5DAx4snQAI4iwQWOHYEBASAQNVREMyFulVtZ9FowmMgBzwBBM/RC4gGkjiGBAQEgEDVURTMhbpVbWfRaMJjIAc8AQTP0QuICpHWpCFniWAHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAWAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAUjtRNDUAfhj0gABmvQE0wfTB1UgbBPgMPgo1wsKgwm68uCJ2zwYAAZtcCC6GUUc");let t=n.beginCell();t.storeRef(e),t.storeUint(0,1);const i=t.endCell();return{code:s,data:i}}const Q={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class l{constructor(e,t){A(this,"address");A(this,"init");A(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]}],errors:Q});this.address=e,this.init=t}static async init(){return await m()}static async fromInit(){const e=await m(),t=n.contractAddress(0,e);return new l(t,e)}static fromAddress(e){return new l(e)}async send(e,t,i,r){let a=null;if(r==="timer"&&(a=n.beginCell().storeUint(0,32).storeStringTail(r).endCell()),r==="dump"&&(a=n.beginCell().storeUint(0,32).storeStringTail(r).endCell()),r&&typeof r=="object"&&!(r instanceof n.Slice)&&r.$$type==="Deploy"&&(a=n.beginCell().store(E(r)).endCell()),a===null)throw new Error("Invalid message type");await e.internal(t,{...i,body:a})}async getLength(e){let t=new n.TupleBuilder;return(await e.get("length",t.build())).stack.readBigNumber()}async getMap(e){let t=new n.TupleBuilder,i=(await e.get("map",t.build())).stack;return n.Dictionary.loadDirect(n.Dictionary.Keys.BigInt(257),n.Dictionary.Values.BigInt(257),i.readCellOpt())}}function H(s,e,t){let i;h(s,d,o=>t(2,i=o));let r,a;return C(d,i={markdown:M,tactCode:b,deploy:async()=>{const o=await f.Blockchain.create(),c=await o.treasury("deployer");r=c.getSender(),a=o.openContract(await l.fromInit());const u={[c.address.toString()]:"deployer",[a.address.toString()]:"contract"};return[[a],u,[await a.send(c.getSender(),{value:n.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{timer:async()=>[await a.send(r,{value:n.toNano(1)},"timer")],dump:async()=>[await a.send(r,{value:n.toNano(1)},"dump")]},getters:{length:async()=>await a.getLength(),map:async()=>await a.getMap()},prev:g(import.meta.url).prev,next:g(import.meta.url).next},i),[]}class v extends p{constructor(e){super(),I(this,e,H,null,B,{})}}export{v as default};
