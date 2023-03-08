var y=Object.defineProperty;var m=(n,e,t)=>e in n?y(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var i=(n,e,t)=>(m(n,typeof e!="symbol"?e+"":e,t),t);import{S as f,i as p,s as B,I,ac as b}from"../../../../chunks/index-1d4083c1.js";import{d as o,s as A}from"../../../../chunks/store-ab11a47e.js";import{d as w,g as u}from"../../../../chunks/helpers-be3eeda0.js";const C=`# Variables

The most important variables are those that are persisted in state and retain their value between contract executions. They must be defined in the scope of the contract like \`contractVar1\`.

Persisting data in state costs gas. The contract must pay rent periodically from its balance. State storage is expensive, about [4 TON per MB per year](https://ton.org/docs/develop/smart-contracts/fees#how-to-calculate-fees). If the contract runs out of balance, the data will be deleted. If you need to store large amounts of data, like images, a service like [TON Storage](https://ton.org/docs/participate/ton-storage/storage-faq) would be more suitable.

Persistent state variables can only change in *receivers* by sending messages as transactions. Sending these transactions will cost gas to users.

Executing *getters* is read-only, they can access all variables, but cannot change state variables. They are free to execute and don't cost any gas.

Local variables like \`localVar1\` are temporary. They're not persisted to state. You can define them in any function and they will only exist in run-time during the execution of the function. You can change their value in *getters* too.`,h=`import "@stdlib/deploy";

contract Variables with Deployable {

    // contract variables are persisted in state and can change their value between transations
    // as part of the contract's persistent state, they cost rent per their specified size
    contractVar1: Int as coins = 3000 + ton("1.26") + pow(10, 9);
    contractVar2: Int as uint64;

    init(arg1: Int) {
        // contract variables support complex initializations that are calculated in run-time
        self.contractVar2 = min(arg1, pow(2, 64) - 1);
    }

    // receivers handle incoming messages and can change state
    receive("increment") {
        // local variables are temporary, not persisted in state and can change
        let localVar1: Int = 100 * 1000;
        localVar1 = localVar1 * 2;

        // contract variables that are persisted in state can only change in receivers
        self.contractVar1 = self.contractVar1 + 1;
        self.contractVar2 = self.contractVar2 + 1;
    }

    // getters are executed by users to query data and can't change state
    get fun sum(arg1: Int): Int {
        // local variables are temporary, not persisted in state and can change
        let localVar1: Int = 100 * 1000;
        localVar1 = localVar1 * 2;

        // getters can access everything but for read-only operations only
        return arg1 + self.contractVar1 + localVar1;
    }
}`;function v(n){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(n.queryId,64)}}function Q(n){return e=>{e.storeInt(n.arg1,257)}}async function d(n){const e=o.Cell.fromBase64("te6ccgECDAEAAo0AART/APSkE/S88sgLAQIBYgIDAvbQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJIkFVbwT4Ye1E0NQB+GLSAAGX+gDTP1lsEo6V+CjXCwqDCbry4ImBAQHXAAEB0ds84lrbPDDI+EIBzH8BygBZWfoCyz/J7VQKBAIBWAgJAfbtou37cCHXScIflTAg1wsf3gKSW3/gIYIQlGqYtrqOozHTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J2zx/4AHAAI4u+QGC8MT41yMS7f3vW3vseDO9uxYtFRG9eKkSrtDyY3r2VXKuupcBpAGkf9sx4JEw4nAFASb4QW8kECNfA39wUAOAQgFtbds8BgHOyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WUAP6AnABymgjbrMlbrOxlzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AAcAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSAJfuL/+1E0NQB+GLSAAGX+gDTP1lsEo6V+CjXCwqDCbry4ImBAQHXAAEB0ds84ljbPICgsAFoIQhrTouAGEP7YIABIxggMNQAKgAaA="),t=o.Cell.fromBase64("te6cckECDgEAApcAAQHAAQEFoHlVAgEU/wD0pBP0vPLICwMCAWIIBAIBWAcFAl+4v/7UTQ1AH4YtIAAZf6ANM/WWwSjpX4KNcLCoMJuvLgiYEBAdcAAQHR2zziWNs8gNBgASMYIDDUACoAGgALm7vRgnBc7D1dLK57HoTsOdZKhRtmgnCd1jUtK2R8syLTry398WI5gnAgVcAbgGdjlM5YOq5HJbLDgnAb1J3vlUWW8cdT094FWcMmgnCdl05as07LczoOlm2UZuikgC9tAB0NMDAXGwwAGRf5Fw4gH6QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkiQVVvBPhh7UTQ1AH4YtIAAZf6ANM/WWwSjpX4KNcLCoMJuvLgiYEBAdcAAQHR2zziWts8MMj4QgHMfwHKAFlZ+gLLP8ntVA0JAfbtou37cCHXScIflTAg1wsf3gKSW3/gIYIQlGqYtrqOozHTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J2zx/4AHAAI4u+QGC8MT41yMS7f3vW3vseDO9uxYtFRG9eKkSrtDyY3r2VXKuupcBpAGkf9sx4JEw4nAKASb4QW8kECNfA39wUAOAQgFtbds8CwHOyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WUAP6AnABymgjbrMlbrOxlzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AAwAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwAFoIQhrTouAGEP7YI8hTaWQ==");let a=o.beginCell();a.storeRef(t),a.storeUint(0,1),Q({$$type:"Variables_init_args",arg1:n})(a);const s=a.endCell();return{code:e,data:s}}const H={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class l{constructor(e,t){i(this,"address");i(this,"init");i(this,"abi",{errors:H});this.address=e,this.init=t}static async init(e){return await d(e)}static async fromInit(e){const t=await d(e),a=o.contractAddress(0,t);return new l(a,t)}static fromAddress(e){return new l(e)}async send(e,t,a,s){let r=null;if(s==="increment"&&(r=o.beginCell().storeUint(0,32).storeStringTail(s).endCell()),s&&typeof s=="object"&&!(s instanceof o.Slice)&&s.$$type==="Deploy"&&(r=o.beginCell().store(v(s)).endCell()),r===null)throw new Error("Invalid message type");await e.internal(t,{...a,body:r})}async getSum(e,t){let a=new o.TupleBuilder;return a.writeNumber(t),(await e.get("sum",a.build())).stack.readBigNumber()}}function D(n,e,t){let a;I(n,A,c=>t(2,a=c));let s,r;return b(A,a={markdown:C,tactCode:h,deploy:async()=>{const c=await w.Blockchain.create(),g=await c.treasury("deployer");return s=g.getSender(),r=c.openContract(await l.fromInit(17n)),[await r.send(g.getSender(),{value:o.toNano(1)},{$$type:"Deploy",queryId:0n})]},messages:{increment:async()=>[await r.send(s,{value:o.toNano(1)},"increment")]},getters:{sum:async()=>await r.getSum(18n)},prev:u(import.meta.url).prev,next:u(import.meta.url).next},a),[]}class T extends f{constructor(e){super(),p(this,e,D,null,B,{})}}export{T as default};
