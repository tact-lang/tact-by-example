var m=Object.defineProperty;var y=(a,e,t)=>e in a?m(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var i=(a,e,t)=>(y(a,typeof e!="symbol"?e+"":e,t),t);import{S as C,i as B,s as p,I as w,ac as I}from"../../../../chunks/index-1d4083c1.js";import{d as o,s as g}from"../../../../chunks/store-ab11a47e.js";import{d as b,g as u}from"../../../../chunks/helpers-9ce1d910.js";const f=`# Variables

The most important variables are those that are persisted in state and retain their value between contract executions. They must be defined in the scope of the contract like \`contractVar1\`.

Persisting data in state costs gas. The contract must pay rent periodically from its balance. State storage is expensive, about [4 TON per 1 MB per year](https://ton.org/docs/develop/smart-contracts/fees#how-to-calculate-fees). If the contract runs out of balance, the data will be deleted. If you need to store large amounts of data, like images, a service like [TON Storage](https://ton.org/docs/participate/ton-storage/storage-faq) would be more suitable.

Persistent state variables can only change in *receivers* by sending messages as transactions. Sending these transactions will cost gas to users.

Executing *getters* is read-only, they can access all variables, but cannot change state variables. They are free to execute and don't cost any gas.

Local variables like \`localVar1\` are temporary. They're not persisted to state. You can define them in any function and they will only exist in run-time during the execution of the function. You can change their value in *getters* too.

## Constants

Constants are not persisted to state. Their values are calculated in compile-time and cannot change during execition. You can read constant values both in *receivers* and in *getters*.`,h=`import "@stdlib/deploy";

// global constants are calculated in compile-time and can't change
const GLOBAL_CONST1: Int = ton("2.17") + 2 * pow(10, 9);

contract VariablesConsts with Deployable {

    // contract constants are calculated in compile-time and can't change
    const CONTRACT_CONST1: Int = ton("1.25") + pow(10, 9);

    // contract variables are persisted in state (cost rent per their specified size) and can change
    contractVar1: Int as coins = ton("1.26") + pow(10, 9);
    contractVar2: Int as uint64;

    init(arg1: Int) {
        // contract variables support complex initialization that are calculated in run-time
        self.contractVar2 = min(arg1, pow(2, 64) - 1);
    }

    // receivers handle incoming messages and can change state
    receive("increment") {
        // local variables are temporary, not persisted in state and can change
        let localVar1: Int = 100;
        localVar1 = localVar1 + 1;

        // contract variables that are persisted in state can only change in receivers
        self.contractVar1 = self.contractVar1 + 1;
        self.contractVar2 = self.contractVar2 + 1;
    }

    // getters are executed by users to query data and can't change state
    get fun sum(arg1: Int): Int {
        // local variables are temporary, not persisted in state and can change
        let localVar1: Int = 100;
        localVar1 = localVar1 + 1;

        // getters can access everything but for read-only operations only
        return arg1 + GLOBAL_CONST1 + self.CONTRACT_CONST1 + self.contractVar1 + localVar1;
    }
}`;function v(a){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(a.queryId,64)}}function E(a){return e=>{e.storeInt(a.arg1,257)}}async function d(a){const e=o.Cell.fromBase64("te6ccgECDAEAApcAART/APSkE/S88sgLAQIBYgIDAvbQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJIkFVbwT4Ye1E0NQB+GLSAAGX+gDTP1lsEo6V+CjXCwqDCbry4ImBAQHXAAEB0ds84lrbPDDI+EIBzH8BygBZWfoCyz/J7VQKBAIBWAgJAfbtou37cCHXScIflTAg1wsf3gKSW3/gIYIQlGqYtrqOozHTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J2zx/4AHAAI4u+QGC8MT41yMS7f3vW3vseDO9uxYtFRG9eKkSrtDyY3r2VXKuupcBpAGkf9sx4JEw4nAFASb4QW8kECNfA39wUAOAQgFtbds8BgHOyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WUAP6AnABymgjbrMlbrOxlzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AAcAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSAJfuL/+1E0NQB+GLSAAGX+gDTP1lsEo6V+CjXCwqDCbry4ImBAQHXAAEB0ds84ljbPICgsAFoIQhrTdAAGEP7YIACYxghD4jSaAoIIQhhxGgKABoKZl"),t=o.Cell.fromBase64("te6cckECDgEAAqEAAQHAAQEFoMGTAgEU/wD0pBP0vPLICwMCAWIIBAIBWAcFAl+4v/7UTQ1AH4YtIAAZf6ANM/WWwSjpX4KNcLCoMJuvLgiYEBAdcAAQHR2zziWNs8gNBgAmMYIQ+I0mgKCCEIYcRoCgAaCmZQC5u70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIAvbQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJIkFVbwT4Ye1E0NQB+GLSAAGX+gDTP1lsEo6V+CjXCwqDCbry4ImBAQHXAAEB0ds84lrbPDDI+EIBzH8BygBZWfoCyz/J7VQNCQH27aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEJRqmLa6jqMx0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yds8f+ABwACOLvkBgvDE+NcjEu3971t77HgzvbsWLRURvXipEq7Q8mN69lVyrrqXAaQBpH/bMeCRMOJwCgEm+EFvJBAjXwN/cFADgEIBbW3bPAsBzshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFlAD+gJwAcpoI26zJW6zsZczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAMAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMABaCEIa03QABhD+2CMsfz/E=");let n=o.beginCell();n.storeRef(t),n.storeUint(0,1),E({$$type:"VariablesConsts_init_args",arg1:a})(n);const s=n.endCell();return{code:e,data:s}}const D={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class l{constructor(e,t){i(this,"address");i(this,"init");i(this,"abi",{errors:D});this.address=e,this.init=t}static async init(e){return await d(e)}static async fromInit(e){const t=await d(e),n=o.contractAddress(0,t);return new l(n,t)}static fromAddress(e){return new l(e)}async send(e,t,n,s){let r=null;if(s==="increment"&&(r=o.beginCell().storeUint(0,32).storeStringTail(s).endCell()),s&&typeof s=="object"&&!(s instanceof o.Slice)&&s.$$type==="Deploy"&&(r=o.beginCell().store(v(s)).endCell()),r===null)throw new Error("Invalid message type");await e.internal(t,{...n,body:r})}async getSum(e,t){let n=new o.TupleBuilder;return n.writeNumber(t),(await e.get("sum",n.build())).stack.readBigNumber()}}function Q(a,e,t){let n;w(a,g,c=>t(2,n=c));let s,r;return I(g,n={markdown:f,tactCode:h,deploy:async()=>{const c=await b.Blockchain.create(),A=await c.treasury("deployer");return s=A.getSender(),r=c.openContract(await l.fromInit(17n)),[await r.send(A.getSender(),{value:o.toNano(1)},{$$type:"Deploy",queryId:0n})]},messages:{increment:async()=>[await r.send(s,{value:o.toNano(1)},"increment")]},getters:{sum:async()=>await r.getSum(18n)},prev:u(import.meta.url).prev,next:u(import.meta.url).next},n),[]}class H extends C{constructor(e){super(),B(this,e,Q,null,p,{})}}export{H as default};
