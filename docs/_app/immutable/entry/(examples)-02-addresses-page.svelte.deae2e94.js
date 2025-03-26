var m=Object.defineProperty;var p=(a,e,s)=>e in a?m(a,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[e]=s;var d=(a,e,s)=>(p(a,typeof e!="symbol"?e+"":e,s),s);import{S as I,i as w,s as C,I as f,ac as B}from"../chunks/index.9fe14626.js";import{d as r,g,s as c}from"../chunks/store.476c3091.js";import{d as b}from"../chunks/index.c056099e.js";const Q=`# Addresses

\`Address\` is another primitive data type. It represents standard addresses on the TON blockchain. Every smart contract on TON is identifiable by its address. Think of this as a unique id.

TON is divided into multiple chains called _workchains_. This allows to balance the load more effectively. One of the internal fields of the address is the workchain id:

- \`0\` - The standard workchain, for regular users. Your contracts will be here.

- \`-1\` - The masterchain, usually for validators. Gas on this chain is significantly more expensive, but you'll probably never use it.

There are multiple ways on TON to [represent](https://docs.ton.org/learn/overviews/addresses#bounceable-vs-non-bounceable-addresses) the same address. Notice in the contract that the bouncable and non-bouncable representations of the same address actually generate the exact same value. Inside the contract, it doesn't matter which representation you use.

## State costs

Most addresses take 267-bit to store (3 flag bits indicating standard address, 8-bit for the workchain id and 256-bit for the account id). This means that storing 1000 addresses [costs](https://ton.org/docs/develop/smart-contracts/fees#how-to-calculate-fees) about 0.191 TON per year.
`,h=`import "@stdlib/deploy";

contract Addresses with Deployable {

    // contract persistent state variables
    // we have three representations of the same address
    a1: Address = address("EQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqB2N"); // bouncable (same foundation wallet)
    a2: Address = address("UQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqEBI"); // non-bounceable (same foundation wallet)
    a3: Address;

    a4: Address;
    a5: Address;
    a6: Address;

    init() {
        // this is the third representation of the same address
        self.a3 = newAddress(0, 0x83dfd552e63729b472fcbcc8c45ebcc6691702558b68ec7527e1ba403a0f31a8); // raw (same foundation wallet)
        
        // here are a few other important addresses
        self.a4 = newAddress(0, 0); // the zero address (nobody)
        self.a5 = myAddress();      // address of this contract
        self.a6 = sender();         // address of the deployer (the sender during init())
    }

    receive("show all") {
        /// addresses cannot currently be dumped
        /// TODO: https://github.com/tact-lang/tact/issues/16
        /// dump(self.a1);
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

    get fun result(): Address {
        return self.a1;
    }
}`;function L(a){return e=>{let s=e;s.storeUint(2490013878,32),s.storeUint(a.queryId,64)}}async function u(){const a=r.Cell.fromBase64("te6ccgECGgEABZgAART/APSkE/S88sgLAQIBYgIDA5rQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVFds88uCCyPhDAcx/AcoAVVDbPMntVBAEBQIBIA4PAqDtou37AZIwf+BwIddJwh+VMCDXCx/eIIIQlGqYtrqOqDDTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J+EIBcG3bPH/gwACRMOMNcAYHAcJQZSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlADINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFshYDQE6bW0ibrOZWyBu8tCAbyIBkTLiECRwAwSAQlAj2zwIAa75ASCC8DJCzGWVLwXZsH0rLKrZFjijQcjh8lPCONTeYLkL/XNKupQwf9sx4ILwrpsV8NUOlRZO9nf+vFel+a43mzrPchtpSkgsd9tlw9W6joXbPH/bMeAKAcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AAkAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwEdI0IYAQe/qqXMblNo5fl5kYi9eYzSLgSrFtHY6k/DdIB0HmNRFNgxwXbPFNQxwXbPFNAxwXbPFMwxwUMDAwLAhLbPFIgxwWz2zwMDAAsmYtHRydWWP4UMJqLVmYWxzZY/hQw4gDAINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAMg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxYBINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WyQHMAhG/cpbZ5tnjYwwQEQIBIBYXAj7tRNDUAfhj0gABjoTbPGwW4DD4KNcLCoMJuvLgids8EhMAAiUBxvpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAdQB0BQB1o0IYAQe/qqXMblNo5fl5kYi9eYzSLgSrFtHY6k/DdIB0HmNRI0IYAQe/qqXMblNo5fl5kYi9eYzSLgSrFtHY6k/DdIB0HmNRHCC8IPf1VLmNym0cvy8yMRevMZpFwJVi2jsdSfhukA6DzGoFQDM+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgxEDYQNRA0ALzIcgHLAXABywASygfL/8nQINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiHAgyHIBywFwAcsAEsoHy//J0CDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4Ij4KPhCALm7vRgnBc7D1dLK57HoTsOdZKhRtmgnCd1jUtK2R8syLTry398WI5gnAgVcAbgGdjlM5YOq5HJbLDgnAb1J3vlUWW8cdT094FWcMmgnCdl05as07LczoOlm2UZuikgCAUgYGQARsK+7UTQ0gABgAHWybuNDVpcGZzOi8vUW1lRkU3M2hGdkp0WUdxUUVEQnNWMWF1MjVHcUVqSjRQeFdWWVhmRkJZMmRFdIIA=="),e=r.Cell.fromBase64("te6cckECHAEABaIAAQHAAQEFoKT9AgEU/wD0pBP0vPLICwMCAWIMBAIBIAoFAgEgCQYCAUgIBwB1sm7jQ1aXBmczovL1FtZUZFNzNoRnZKdFlHcVFFREJzVjFhdTI1R3FFako0UHhXVllYZkZCWTJkRXSCAAEbCvu1E0NIAAYAC5u70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIAhG/cpbZ5tnjYwwXCwACJQOa0AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8VRXbPPLggsj4QwHMfwHKAFVQ2zzJ7VQXDw0BwlBlINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAMg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxYBINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WyFgOAMAg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQAyDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFgEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbJAcwCoO2i7fsBkjB/4HAh10nCH5UwINcLH94gghCUapi2uo6oMNMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8n4QgFwbds8f+DAAJEw4w1wFBABrvkBIILwMkLMZZUvBdmwfSssqtkWOKNByOHyU8I41N5guQv9c0q6lDB/2zHggvCumxXw1Q6VFk72d/68V6X5rjebOs9yG2lKSCx322XD1bqOhds8f9sx4BEEdI0IYAQe/qqXMblNo5fl5kYi9eYzSLgSrFtHY6k/DdIB0HmNRFNgxwXbPFNQxwXbPFNAxwXbPFMwxwUTExMSAhLbPFIgxwWz2zwTEwAsmYtHRydWWP4UMJqLVmYWxzZY/hQw4gE6bW0ibrOZWyBu8tCAbyIBkTLiECRwAwSAQlAj2zwVAcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7ABYAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwCPu1E0NQB+GPSAAGOhNs8bBbgMPgo1wsKgwm68uCJ2zwaGAHWjQhgBB7+qpcxuU2jl+XmRiL15jNIuBKsW0djqT8N0gHQeY1EjQhgBB7+qpcxuU2jl+XmRiL15jNIuBKsW0djqT8N0gHQeY1EcILwg9/VUuY3KbRy/LzIxF68xmkXAlWLaOx1J+G6QDoPMagZALzIcgHLAXABywASygfL/8nQINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiHAgyHIBywFwAcsAEsoHy//J0CDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4Ij4KPhCAcb6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAHUAdAbAMz6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiDEQNhA1EDSvQDBA");let s=r.beginCell();s.storeRef(e),s.storeUint(0,1);const o=s.endCell();return{code:a,data:o}}const v={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}},D=[{name:"StateInit",header:null,fields:[{name:"code",type:{kind:"simple",type:"cell",optional:!1}},{name:"data",type:{kind:"simple",type:"cell",optional:!1}}]},{name:"Context",header:null,fields:[{name:"bounced",type:{kind:"simple",type:"bool",optional:!1}},{name:"sender",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"raw",type:{kind:"simple",type:"slice",optional:!1}}]},{name:"SendParameters",header:null,fields:[{name:"bounce",type:{kind:"simple",type:"bool",optional:!1}},{name:"to",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"mode",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"body",type:{kind:"simple",type:"cell",optional:!0}},{name:"code",type:{kind:"simple",type:"cell",optional:!0}},{name:"data",type:{kind:"simple",type:"cell",optional:!0}}]},{name:"Deploy",header:2490013878,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"DeployOk",header:2952335191,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"FactoryDeploy",header:1829761339,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}},{name:"cashback",type:{kind:"simple",type:"address",optional:!1}}]}],E=[{name:"result",arguments:[],returnType:{kind:"simple",type:"address",optional:!1}}],M=[{receiver:"internal",message:{kind:"text",text:"show all"}},{receiver:"internal",message:{kind:"text",text:"show ops"}},{receiver:"internal",message:{kind:"typed",type:"Deploy"}}];class l{constructor(e,s){d(this,"address");d(this,"init");d(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"FactoryDeploy",header:1829761339,fields:[]}],types:D,getters:E,receivers:M,errors:v});this.address=e,this.init=s}static async init(){return await u()}static async fromInit(){const e=await u(),s=r.contractAddress(0,e);return new l(s,e)}static fromAddress(e){return new l(e)}async send(e,s,o,t){let n=null;if(t==="show all"&&(n=r.beginCell().storeUint(0,32).storeStringTail(t).endCell()),t==="show ops"&&(n=r.beginCell().storeUint(0,32).storeStringTail(t).endCell()),t&&typeof t=="object"&&!(t instanceof r.Slice)&&t.$$type==="Deploy"&&(n=r.beginCell().store(L(t)).endCell()),n===null)throw new Error("Invalid message type");await e.internal(s,{...o,body:n})}async getResult(e){let s=new r.TupleBuilder;return(await e.get("result",s.build())).stack.readAddress()}}function N(a,e,s){let o;f(a,c,i=>s(2,o=i));let t,n;return B(c,o={markdown:Q,tactCode:h,deploy:async()=>{const i=await b.Blockchain.create(),A=await i.treasury("deployer");t=A.getSender(),n=i.openContract(await l.fromInit());const y={[A.address.toString()]:"deployer",[n.address.toString()]:"contract"};return[[n],y,[await n.send(A.getSender(),{value:r.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{"show all":async()=>[await n.send(t,{value:r.toNano(1)},"show all")],"show ops":async()=>[await n.send(t,{value:r.toNano(1)},"show ops")]},getters:{result:async()=>await n.getResult()},prev:g(import.meta.url).prev,next:g(import.meta.url).next},o),[]}class S extends I{constructor(e){super(),w(this,e,N,null,C,{})}}export{S as default};
