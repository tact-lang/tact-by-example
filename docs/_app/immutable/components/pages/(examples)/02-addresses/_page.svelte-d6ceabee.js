var l=Object.defineProperty;var I=(t,e,s)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var i=(t,e,s)=>(I(t,typeof e!="symbol"?e+"":e,s),s);import{S as w,i as B,s as m,I as E,ac as p}from"../../../../chunks/index-1d4083c1.js";import{d as a,s as g}from"../../../../chunks/store-ab11a47e.js";import{d as L,g as c}from"../../../../chunks/helpers-9ce1d910.js";const y=`# Addresses

\`Address\` is another primitive data type. It represents standard addresses on the TON blockchain. Every smart contract on TON is identifiable by its address. Think of this as a unique id.

TON is divided into multiple chains called *workchains*. One of the internal fields of the address is the workchain id:

* \`0\` - The standard workchain, for regular users.

* \`-1\` - The masterchain, usually for validators.

There are multiple ways to [represent](https://ton.org/docs/learn/overviews/addresses) the same address. Notice in the contract that the bouncable and non-bouncable representations of the same address actually generate the exact same value. It doesn't matter which representation you use.`,h=`import "@stdlib/deploy";

contract Addresses with Deployable {

    // these are three representations of the same address
    a1: Address = address("EQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqB2N"); // bouncable (same foundation wallet)
    a2: Address = address("UQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqEBI"); // non-bounceable (same foundation wallet)
    a3: Address;
    
    a4: Address;
    a5: Address;

    init() {
        // this is the third representation of the same address
        self.a3 = newAddress(0, 0x83dfd552e63729b472fcbcc8c45ebcc6691702558b68ec7527e1ba403a0f31a8); // raw (same foundation wallet)
        
        // here are a few other important addresses
        self.a4 = newAddress(0, 0); // the zero address (nobody)
        self.a5 = myAddress(); // address of this contract
    }

    receive("show all") {
        ///dump(self.a1);
        ///dump(self.a2);
        ///dump(self.a3);
        ///dump(self.a4);
        ///dump(self.a5);
    }

    receive("show ops") {
        // temporary variable
        let a: Address = address("EQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqB2N"); // bouncable (same foundation wallet)

        dump(a == self.a1);
        dump(a == self.a2);
        dump(a == self.a3);
        
        dump(a == self.a4);
        dump(a != self.a5);
    }
}`;function f(t){return e=>{let s=e;s.storeUint(2490013878,32),s.storeUint(t.queryId,64)}}async function u(){const t=a.Cell.fromBase64("te6ccgECEwEABSMAART/APSkE/S88sgLAQIBYgIDBMLQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJIkFVbwT4Ye1E0NQB+GLSAAGOhNs8bBWOjjD4KNcLCoMJuvLgids84lUU2zwwBAUGBwC5oXejBOC52Hq6WVz2PQnYc6yVCjbNBOE7rGpaVsj5ZkWnXlv74sRzBOBAq4A3AM7HKZywdVyOS2WHBOA3qTvfKost446np7wKs4ZNBOE7Lpy1Zp2W5nQdLNsozdFJAeT6QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJAfpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiQHUAdAIAdaNCGAEHv6qlzG5TaOX5eZGIvXmM0i4EqxbR2OpPw3SAdB5jUSNCGAEHv6qlzG5TaOX5eZGIvXmM0i4EqxbR2OpPw3SAdB5jURwgvCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqAkCmO2i7ftwIddJwh+VMCDXCx/eApJbf+AhghCUapi2uo6jMdMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8nbPH/gAcAAkTDjDXAKCwEgyPhCAcx/AcoAVUDbPMntVBEAoPpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiQH6QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkxECUQJBAjAMzIcgHLAXABywASygfL/8nQINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJcCDIcgHLAXABywASygfL/8nQINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJ+CgBJvhBbyQQI18Df3BQA4BCAW1t2zwMAa75ASCC8DJCzGWVLwXZsH0rLKrZFjijQcjh8lPCONTeYLkL/XNKupQwf9sx4ILwrpsV8NUOlRZO9nf+vFel+a43mzrPchtpSkgsd9tlw9W6joXbPH/bMeAOAc7IcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxZQA/oCcAHKaCNusyVus7GXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsADQCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAR0jQhgBB7+qpcxuU2jl+XmRiL15jNIuBKsW0djqT8N0gHQeY1EUwXHBds8UwTHBds8UwPHBds8UwLHBRAQEA8CENs8IccFs9s8EBAALJmLR0cnVlj+FDCai1ZmFsc2WP4UMOIB4FBUINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxZYINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxYBINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxbIUAMSAJQg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFgEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFskBzA=="),e=a.Cell.fromBase64("te6cckECFQEABS0AAQHAAQEFoKT9AgEU/wD0pBP0vPLICwMCAWIFBAC5oXejBOC52Hq6WVz2PQnYc6yVCjbNBOE7rGpaVsj5ZkWnXlv74sRzBOBAq4A3AM7HKZywdVyOS2WHBOA3qTvfKost446np7wKs4ZNBOE7Lpy1Zp2W5nQdLNsozdFJBMLQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJIkFVbwT4Ye1E0NQB+GLSAAGOhNs8bBWOjjD4KNcLCoMJuvLgids84lUU2zwwExEJBgEgyPhCAcx/AcoAVUDbPMntVAcB4FBUINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxZYINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxYBINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxbIUAMIAJQg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFgEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFskBzAKY7aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEJRqmLa6jqMx0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yds8f+ABwACRMOMNcA4KAa75ASCC8DJCzGWVLwXZsH0rLKrZFjijQcjh8lPCONTeYLkL/XNKupQwf9sx4ILwrpsV8NUOlRZO9nf+vFel+a43mzrPchtpSkgsd9tlw9W6joXbPH/bMeALBHSNCGAEHv6qlzG5TaOX5eZGIvXmM0i4EqxbR2OpPw3SAdB5jURTBccF2zxTBMcF2zxTA8cF2zxTAscFDQ0NDAIQ2zwhxwWz2zwNDQAsmYtHRydWWP4UMJqLVmYWxzZY/hQw4gEm+EFvJBAjXwN/cFADgEIBbW3bPA8BzshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFlAD+gJwAcpoI26zJW6zsZczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAQAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAdaNCGAEHv6qlzG5TaOX5eZGIvXmM0i4EqxbR2OpPw3SAdB5jUSNCGAEHv6qlzG5TaOX5eZGIvXmM0i4EqxbR2OpPw3SAdB5jURwgvCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqBIAzMhyAcsBcAHLABLKB8v/ydAg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IlwIMhyAcsBcAHLABLKB8v/ydAg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4In4KAHk+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJAfpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiQH6QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkB1AHQFACg+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJAfpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiTEQJRAkECML2AEO");let s=a.beginCell();s.storeRef(e),s.storeUint(0,1);const o=s.endCell();return{code:t,data:o}}const b={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class d{constructor(e,s){i(this,"address");i(this,"init");i(this,"abi",{errors:b});this.address=e,this.init=s}static async init(){return await u()}static async fromInit(){const e=await u(),s=a.contractAddress(0,e);return new d(s,e)}static fromAddress(e){return new d(e)}async send(e,s,o,n){let r=null;if(n==="show all"&&(r=a.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n==="show ops"&&(r=a.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n&&typeof n=="object"&&!(n instanceof a.Slice)&&n.$$type==="Deploy"&&(r=a.beginCell().store(f(n)).endCell()),r===null)throw new Error("Invalid message type");await e.internal(s,{...o,body:r})}}function Q(t,e,s){let o;E(t,g,A=>s(2,o=A));let n,r;return p(g,o={markdown:y,tactCode:h,deploy:async()=>{const A=await L.Blockchain.create(),C=await A.treasury("deployer");return n=C.getSender(),r=A.openContract(await d.fromInit()),[await r.send(C.getSender(),{value:a.toNano(1)},{$$type:"Deploy",queryId:0n})]},messages:{"show all":async()=>[await r.send(n,{value:a.toNano(1)},"show all")],"show ops":async()=>[await r.send(n,{value:a.toNano(1)},"show ops")]},getters:{},prev:c(import.meta.url).prev,next:c(import.meta.url).next},o),[]}class x extends w{constructor(e){super(),B(this,e,Q,null,m,{})}}export{x as default};
