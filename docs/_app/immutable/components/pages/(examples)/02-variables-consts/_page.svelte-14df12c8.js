var C=Object.defineProperty;var w=(a,e,t)=>e in a?C(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var i=(a,e,t)=>(w(a,typeof e!="symbol"?e+"":e,t),t);import{S as m,i as I,s as p,I as B,ac as h}from"../../../../chunks/index-1d4083c1.js";import{d as o,s as g}from"../../../../chunks/store-ab11a47e.js";import{d as b,g as d}from"../../../../chunks/helpers-9ce1d910.js";const y=`# Variables

The most important variables are those that are persisted in state and retain their value between contract executions. They must be defined in the scope of the contract like \`contractVar1\`.

Persisting data in state costs gas. The contract must pay rent periodically from its balance. State storage is expensive, about [4 TON per 1 MB per year](https://ton.org/docs/develop/smart-contracts/fees#how-to-calculate-fees). If the contract runs out of balance, the data will be deleted. If you need to store large amounts of data, like images, a service like [TON Storage](https://ton.org/docs/participate/ton-storage/storage-faq) would be more suitable.

Persistent state variables can only change in *receivers* by sending messages as transactions. Sending these transactions will cost gas to users.

Executing *getters* is read-only, they can access all variables, but cannot change state variables. They are free to execute and don't cost any gas.

Local variables like \`localVar1\` are temporary. They're not persisted to state. You can define them in any function and they will only exist in run-time during the execution of the function. You can change their value in *getters* too.

## Constants

Constants are not persisted to state. Their values are calculated in compile-time and cannot change during execition. You can read constant values both in *receivers* and in *getters*.`,f=`import "@stdlib/deploy";

// global constants are calculated in compile-time and can't change
const GLOBAL_CONST1: Int = 200;
const GLOBAL_CONST2: Int = ton("2.17") + 2 * pow(10, 9);

contract VariablesConsts with Deployable {
 
    // contract constants are calculated in compile-time and can't change
    const CONTRACT_CONST1: Int = 100;
    const CONTRACT_CONST2: Int = ton("1.25") + pow(10, 9);

    // contract variables are persisted in state (cost rent per their specified size) and can change
    contractVar1: Int as int32 = 101;
    contractVar2: Int as coins = ton("1.26") + pow(10, 9);
    contractVar3: Int as uint64;

    init(arg1: Int) {
        // contract variables support complex initialization that are calculated in run-time
        self.contractVar3 = min(arg1, pow(2, 64) - 1);
    }

    // receivers handle incoming messages
    receive("increment") {
        // local variables are temporary, not persisted in state and can change
        let localVar1: Int = 102;
        localVar1 = localVar1 + 1;

        // contract variables that are persisted in state can only change in receivers
        self.contractVar1 = self.contractVar1 + 1;
        self.contractVar2 = self.contractVar2 + 1;
        self.contractVar3 = self.contractVar3 + 1;

        dump(GLOBAL_CONST1);
        dump(GLOBAL_CONST2);
        dump(self.CONTRACT_CONST1);
        dump(self.CONTRACT_CONST2);
        dump(self.contractVar1);
        dump(self.contractVar2);
        dump(self.contractVar3);
        dump(localVar1);
    }

    // getters are executed by users to query data
    get fun sum(arg1: Int): Int {
        // local variables are temporary, not persisted in state and can change
        let localVar1: Int = 102;
        localVar1 = localVar1 + 1;

        // contract variables that are persisted in state can cannot change in getters

        // getters can access everything but for read-only operations only
        return arg1 + GLOBAL_CONST1 + self.CONTRACT_CONST1 + self.contractVar1 + localVar1;
    }
}`;function Q(a){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(a.queryId,64)}}function v(a){return e=>{e.storeInt(a.arg1,257)}}async function u(a){const e=o.Cell.fromBase64("te6ccgECEQEAA2oAART/APSkE/S88sgLAQIBYgIDA9rQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJIkFVbwT4Ye1E0NQB+GLSAAGa0h/6ANM/VSBsE46V+CjXCwqDCbry4ImBAQHXAAEB0ds84lUS2zwwDwQFAgFYDQ4C9O2i7ftwIddJwh+VMCDXCx/eApJbf+AhghCUapi2uo6jMdMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8nbPH/gAcAAjq35AYLwxPjXIxLt/e9be+x4M727Fi0VEb14qRKu0PJjevZVcq66joXbPH/bMeCRMOJwBgcALsj4QgHMfwHKAFUgUCPKHwH6Ass/ye1UASb4QW8kECNfA39wUAOAQgFtbds8CARQgGcDpAKkAaSBAMjbPP4UMIIQ+I0mgNs8/hQwgGTbPP4UMIIQhhxGgAwMDAoBzshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFlAD+gJwAcpoI26zJW6zsZczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAJAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMBCTbPP4UMCLbPP4UMCHbPP4UMCAMDAwLAhjbPP4UMAPbPP4UMFgMDADeyCHBAJiALQHLBwGjAd4hgjgyfLJzQRnTt6mqHbmOIHAgcY4UBHqpDKYwJagSoASqBwKkIcAARTDmMDOqAs8BjitvAHCOESN6qQgSb4wBpAN6qQQgwAAU5jMipQOcUwJvgaYwWMsHAqVZ5DAx4snQALm7vRgnBc7D1dLK57HoTsOdZKhRtmgnCd1jUtK2R8syLTry398WI5gnAgVcAbgGdjlM5YOq5HJbLDgnAb1J3vlUWW8cdT094FWcMmgnCdl05as07LczoOlm2UZuikgCZ7i//tRNDUAfhi0gABmtIf+gDTP1UgbBOOlfgo1wsKgwm68uCJgQEB1wABAdHbPOJVAts8gPEAAcgGWCEIa03QAChD+2CBIAGGwhgQDIoKZkAaCmZw=="),t=o.Cell.fromBase64("te6cckECEwEAA3QAAQHAAQEFoMGTAgEU/wD0pBP0vPLICwMCAWIIBAIBWAcFAme4v/7UTQ1AH4YtIAAZrSH/oA0z9VIGwTjpX4KNcLCoMJuvLgiYEBAdcAAQHR2zziVQLbPIEgYAGGwhgQDIoKZkAaCmZwC5u70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIA9rQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJIkFVbwT4Ye1E0NQB+GLSAAGa0h/6ANM/VSBsE46V+CjXCwqDCbry4ImBAQHXAAEB0ds84lUS2zwwEgoJAC7I+EIBzH8BygBVIFAjyh8B+gLLP8ntVAL07aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEJRqmLa6jqMx0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yds8f+ABwACOrfkBgvDE+NcjEu3971t77HgzvbsWLRURvXipEq7Q8mN69lVyrrqOhds8f9sx4JEw4nAPCwRQgGcDpAKkAaSBAMjbPP4UMIIQ+I0mgNs8/hQwgGTbPP4UMIIQhhxGgA4ODgwEJNs8/hQwIts8/hQwIds8/hQwIA4ODg0CGNs8/hQwA9s8/hQwWA4OAN7IIcEAmIAtAcsHAaMB3iGCODJ8snNBGdO3qaoduY4gcCBxjhQEeqkMpjAlqBKgBKoHAqQhwABFMOYwM6oCzwGOK28AcI4RI3qpCBJvjAGkA3qpBCDAABTmMyKlA5xTAm+BpjBYywcCpVnkMDHiydABJvhBbyQQI18Df3BQA4BCAW1t2zwQAc7IcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxZQA/oCcAHKaCNusyVus7GXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsAEQCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAAcgGWCEIa03QAChD+2CBLoVP23");let n=o.beginCell();n.storeRef(t),n.storeUint(0,1),v({$$type:"VariablesConsts_init_args",arg1:a})(n);const s=n.endCell();return{code:e,data:s}}const O={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class A{constructor(e,t){i(this,"address");i(this,"init");i(this,"abi",{errors:O});this.address=e,this.init=t}static async init(e){return await u(e)}static async fromInit(e){const t=await u(e),n=o.contractAddress(0,t);return new A(n,t)}static fromAddress(e){return new A(e)}async send(e,t,n,s){let r=null;if(s==="increment"&&(r=o.beginCell().storeUint(0,32).storeStringTail(s).endCell()),s&&typeof s=="object"&&!(s instanceof o.Slice)&&s.$$type==="Deploy"&&(r=o.beginCell().store(Q(s)).endCell()),r===null)throw new Error("Invalid message type");await e.internal(t,{...n,body:r})}async getSum(e,t){let n=new o.TupleBuilder;return n.writeNumber(t),(await e.get("sum",n.build())).stack.readBigNumber()}}function T(a,e,t){let n;B(a,g,c=>t(2,n=c));let s,r;return h(g,n={markdown:y,tactCode:f,deploy:async()=>{const c=await b.Blockchain.create(),l=await c.treasury("deployer");return s=l.getSender(),r=c.openContract(await A.fromInit(17n)),[await r.send(l.getSender(),{value:o.toNano(1)},{$$type:"Deploy",queryId:0n})]},messages:{increment:async()=>[await r.send(s,{value:o.toNano(1)},"increment")]},getters:{sum:async()=>await r.getSum(18n)},prev:d(import.meta.url).prev,next:d(import.meta.url).next},n),[]}class E extends m{constructor(e){super(),I(this,e,T,null,p,{})}}export{E as default};
