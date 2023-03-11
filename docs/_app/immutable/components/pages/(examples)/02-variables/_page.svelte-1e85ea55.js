var w=Object.defineProperty;var y=(n,e,t)=>e in n?w(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var i=(n,e,t)=>(y(n,typeof e!="symbol"?e+"":e,t),t);import{S as C,i as b,s as p,I as f,ac as h}from"../../../../chunks/index-1d4083c1.js";import{d as o,g,s as d}from"../../../../chunks/store-3208a846.js";import{d as B}from"../../../../chunks/index-ad3893c0.js";const I=`# Variables

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
}`;function D(n){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(n.queryId,64)}}function E(n){return e=>{e.storeInt(n.arg1,257)}}async function u(n){const e=o.Cell.fromBase64("te6ccgECDQEAAo4AART/APSkE/S88sgLAQIBYgIDA9rQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GLtRNDUAfhj0gABl/oA0z9ZbBKOlfgo1wsKgwm68uCJgQEB1wABAdHbPOJa2zwwCwQFAgFYCQoB9u2i7ftwIddJwh+VMCDXCx/eApJbf+AhghCUapi2uo6jMdMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8nbPH/gAcAAji75AYLwxPjXIxLt/e9be+x4M727Fi0VEb14qRKu0PJjevZVcq66lwGkAaR/2zHgkTDicAYAJMj4QwHMfwHKAFlZ+gLLP8ntVAEaf/hCcFgDgEIBbW3bPAcBzshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFlAD+gJwAcpoI26zJW6zsZczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAIAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMALm7vRgnBc7D1dLK57HoTsOdZKhRtmgnCd1jUtK2R8syLTry398WI5gnAgVcAbgGdjlM5YOq5HJbLDgnAb1J3vlUWW8cdT094FWcMmgnCdl05as07LczoOlm2UZuikgCX7i//tRNDUAfhj0gABl/oA0z9ZbBKOlfgo1wsKgwm68uCJgQEB1wABAdHbPOJY2zyAsMABaCEEsaEwABhD+2CAASMYIDDUACoAGg"),t=o.Cell.fromBase64("te6cckECDwEAApgAAQHAAQEFoHlVAgEU/wD0pBP0vPLICwMCAWIIBAIBWAcFAl+4v/7UTQ1AH4Y9IAAZf6ANM/WWwSjpX4KNcLCoMJuvLgiYEBAdcAAQHR2zziWNs8gOBgASMYIDDUACoAGgALm7vRgnBc7D1dLK57HoTsOdZKhRtmgnCd1jUtK2R8syLTry398WI5gnAgVcAbgGdjlM5YOq5HJbLDgnAb1J3vlUWW8cdT094FWcMmgnCdl05as07LczoOlm2UZuikgD2tAB0NMDAXGwwAGRf5Fw4gH6QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IlUUFMDbwT4YQL4Yu1E0NQB+GPSAAGX+gDTP1lsEo6V+CjXCwqDCbry4ImBAQHXAAEB0ds84lrbPDAOCgkAJMj4QwHMfwHKAFlZ+gLLP8ntVAH27aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEJRqmLa6jqMx0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yds8f+ABwACOLvkBgvDE+NcjEu3971t77HgzvbsWLRURvXipEq7Q8mN69lVyrrqXAaQBpH/bMeCRMOJwCwEaf/hCcFgDgEIBbW3bPAwBzshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFlAD+gJwAcpoI26zJW6zsZczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wANAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMABaCEEsaEwABhD+2CPYAqSA=");let a=o.beginCell();a.storeRef(t),a.storeUint(0,1),E({$$type:"Variables_init_args",arg1:n})(a);const s=a.endCell();return{code:e,data:s}}const L={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class l{constructor(e,t){i(this,"address");i(this,"init");i(this,"abi",{errors:L});this.address=e,this.init=t}static async init(e){return await u(e)}static async fromInit(e){const t=await u(e),a=o.contractAddress(0,t);return new l(a,t)}static fromAddress(e){return new l(e)}async send(e,t,a,s){let r=null;if(s==="increment"&&(r=o.beginCell().storeUint(0,32).storeStringTail(s).endCell()),s&&typeof s=="object"&&!(s instanceof o.Slice)&&s.$$type==="Deploy"&&(r=o.beginCell().store(D(s)).endCell()),r===null)throw new Error("Invalid message type");await e.internal(t,{...a,body:r})}async getSum(e,t){let a=new o.TupleBuilder;return a.writeNumber(t),(await e.get("sum",a.build())).stack.readBigNumber()}}function M(n,e,t){let a;f(n,d,c=>t(2,a=c));let s,r;return h(d,a={markdown:I,tactCode:v,deploy:async()=>{const c=await B.Blockchain.create(),A=await c.treasury("deployer");s=A.getSender(),r=c.openContract(await l.fromInit(17n));const m={[A.address.toString()]:"deployer",[r.address.toString()]:"contract"};return[r,m,[await r.send(A.getSender(),{value:o.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{increment:async()=>[await r.send(s,{value:o.toNano(1)},"increment")]},getters:{sum:async()=>await r.getSum(18n)},prev:g(import.meta.url).prev,next:g(import.meta.url).next},a),[]}class U extends C{constructor(e){super(),b(this,e,M,null,p,{})}}export{U as default};
