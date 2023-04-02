var y=Object.defineProperty;var p=(n,e,t)=>e in n?y(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var i=(n,e,t)=>(p(n,typeof e!="symbol"?e+"":e,t),t);import{S as w,i as f,s as C,I as B,ac as h}from"../chunks/index.9fe14626.js";import{d as o,g,s as d}from"../chunks/store.2b42c038.js";import{d as b}from"../chunks/index.9fe59178.js";const I=`# Variables

The most important variables are those that are persisted in state and retain their value between contract executions. They must be defined in the scope of the contract like \`contractVar1\`.

Persisting data in state costs gas. The contract must pay rent periodically from its balance. State storage is expensive, about [4 TON per MB per year](https://ton.org/docs/develop/smart-contracts/fees#how-to-calculate-fees). If the contract runs out of balance, the data will be deleted. If you need to store large amounts of data, like images, a service like [TON Storage](https://ton.org/docs/participate/ton-storage/storage-faq) would be more suitable.

Persistent state variables can only change in *receivers* by sending messages as transactions. Sending these transactions will cost gas to users.

Executing *getters* is read-only, they can access all variables, but cannot change state variables. They are free to execute and don't cost any gas.

Local variables like \`localVar1\` are temporary. They're not persisted to state. You can define them in any function and they will only exist in run-time during the execution of the function. You can change their value in *getters* too.`,v=`import "@stdlib/deploy";

contract Variables with Deployable {

    // contract variables are persisted in state and can change their value between transactions
    // they cost rent per their specified size
    contractVar1: Int as coins = ton("1.26");
    contractVar2: Int as uint64;

    init(arg1: Int) {
        // contract variables support complex initializations that are calculated in run-time
        self.contractVar2 = min(arg1, pow(2, 64) - 1);
    }

    // receivers handle incoming messages and can change state
    receive("increment") {
        // local variables are temporary, not persisted in state
        let localVar1: Int = 100 * 1000;
        localVar1 = localVar1 * 2;

        // contract variables that are persisted in state can only change in receivers
        self.contractVar1 = self.contractVar1 + 1;
        self.contractVar2 = self.contractVar2 + 1;
    }

    // getters are executed by users to query data and can't change state
    get fun sum(arg1: Int): Int {
        // local variables are temporary, not persisted in state
        let localVar1: Int = 100 * 1000;
        localVar1 = localVar1 * 2;

        // getters can access everything but for read-only operations only
        return arg1 + self.contractVar1 + localVar1;
    }
}`;function V(n){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(n.queryId,64)}}function Q(n){return e=>{e.storeInt(n.arg1,257)}}async function u(n){const e=o.Cell.fromBase64("te6ccgECEQEAAqoAART/APSkE/S88sgLAQIBYgIDApjQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxa2zwwyPhDAcx/AcoAWVn6Ass/ye1UDgQCAVgICQKu7aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEJRqmLa6jq4x0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yX/4QnBYA4BCAW1t2zx/4AHAAJEw4w1wBQYByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsABwBc+QGC8MT41yMS7f3vW3vseDO9uxYtFRG9eKkSrtDyY3r2VXKuupcBpAGkf9sx4ACYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAC5u70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIAgFICgsCASAMDQB1sm7jQ1aXBmczovL1FtYmNrUnJYYVM2ZkhxcGo3THFUVllNUFpobmo5c1RiZVJkRk5YWTZzaWQ4dUKCAAEa1fdqJoaQAAwAITrf/tnixtnjYQwA4PAVDtRNDUAfhj0gABl/oA0z9ZbBLg+CjXCwqDCbry4ImBAQHXAAEB0ds8EAASggMNQFEToAGgABaCEEsaEwABhD+2CA=="),t=o.Cell.fromBase64("te6cckECEwEAArQAAQHAAQEFoHlVAgEU/wD0pBP0vPLICwMCAWIMBAIBWAsFAgFIBwYAdbJu40NWlwZnM6Ly9RbWJja1JyWGFTNmZIcXBqN0xxVFZZTVBaaG5qOXNUYmVSZEZOWFk2c2lkOHVCggAgEgCggCE63/7Z4sbZ42EMARCQASggMNQFEToAGgABGtX3aiaGkAAMAAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSAKY0AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8Wts8MMj4QwHMfwHKAFlZ+gLLP8ntVBENAq7tou37cCHXScIflTAg1wsf3gKSW3/gIYIQlGqYtrqOrjHTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/Jf/hCcFgDgEIBbW3bPH/gAcAAkTDjDXAPDgBc+QGC8MT41yMS7f3vW3vseDO9uxYtFRG9eKkSrtDyY3r2VXKuupcBpAGkf9sx4AHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAQAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAVDtRNDUAfhj0gABl/oA0z9ZbBLg+CjXCwqDCbry4ImBAQHXAAEB0ds8EgAWghBLGhMAAYQ/tghYCFm1");let a=o.beginCell();a.storeRef(t),a.storeUint(0,1),Q({$$type:"Variables_init_args",arg1:n})(a);const s=a.endCell();return{code:e,data:s}}const D={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class l{constructor(e,t){i(this,"address");i(this,"init");i(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]}],errors:D});this.address=e,this.init=t}static async init(e){return await u(e)}static async fromInit(e){const t=await u(e),a=o.contractAddress(0,t);return new l(a,t)}static fromAddress(e){return new l(e)}async send(e,t,a,s){let r=null;if(s==="increment"&&(r=o.beginCell().storeUint(0,32).storeStringTail(s).endCell()),s&&typeof s=="object"&&!(s instanceof o.Slice)&&s.$$type==="Deploy"&&(r=o.beginCell().store(V(s)).endCell()),r===null)throw new Error("Invalid message type");await e.internal(t,{...a,body:r})}async getSum(e,t){let a=new o.TupleBuilder;return a.writeNumber(t),(await e.get("sum",a.build())).stack.readBigNumber()}}function E(n,e,t){let a;B(n,d,c=>t(2,a=c));let s,r;return h(d,a={markdown:I,tactCode:v,deploy:async()=>{const c=await b.Blockchain.create(),A=await c.treasury("deployer");s=A.getSender(),r=c.openContract(await l.fromInit(17n));const m={[A.address.toString()]:"deployer",[r.address.toString()]:"contract"};return[[r],m,[await r.send(A.getSender(),{value:o.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{increment:async()=>[await r.send(s,{value:o.toNano(1)},"increment")]},getters:{sum:async()=>await r.getSum(18n)},prev:g(import.meta.url).prev,next:g(import.meta.url).next},a),[]}class T extends w{constructor(e){super(),f(this,e,E,null,C,{})}}export{T as default};
