var I=Object.defineProperty;var w=(r,e,s)=>e in r?I(r,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[e]=s;var g=(r,e,s)=>(w(r,typeof e!="symbol"?e+"":e,s),s);import{S as B,i as y,s as m,I as Q,ac as L}from"../chunks/index.9fe14626.js";import{d as a,g as l,s as c}from"../chunks/store.d3ab02ad.js";import{d as b}from"../chunks/index.78404594.js";const f=`# Addresses

\`Address\` is another primitive data type. It represents standard addresses on the TON blockchain. Every smart contract on TON is identifiable by its address. Think of this as a unique id.

TON is divided into multiple chains called *workchains*. This allows to balance the load more effectively. One of the internal fields of the address is the workchain id:

* \`0\` - The standard workchain, for regular users. Your contracts will be here.

* \`-1\` - The masterchain, usually for validators. Gas on this chain is significantly more expensive, but you'll probably never use it.

There are multiple ways on TON to [represent](https://docs.ton.org/learn/overviews/addresses#bounceable-vs-non-bounceable-addresses) the same address. Notice in the contract that the bouncable and non-bouncable representations of the same address actually generate the exact same value. Inside the contract, it doesn't matter which representation you use.

## State costs

Most addresses take 264-bit to store (8-bit for the workchain id and 256-bit for the account id). This means that storing 1000 addresses [costs](https://ton.org/docs/develop/smart-contracts/fees#how-to-calculate-fees) about 0.189 TON per year.`,v=`import "@stdlib/deploy";

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
}`;function h(r){return e=>{let s=e;s.storeUint(2490013878,32),s.storeUint(r.queryId,64)}}async function u(){const r=a.Cell.fromBase64("te6ccgECGQEABX0AART/APSkE/S88sgLAQIBYgIDA5bQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVFds8MMj4QwHMfwHKAFVQ2zzJ7VQPBAUCASANDgKu7aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEJRqmLa6jq4x0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yX/4QnBYA4BCAW1t2zx/4AHAAJEw4w1wBgcBwlBlINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAMg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxYBINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WyFgMAcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AAgBrvkBIILwMkLMZZUvBdmwfSssqtkWOKNByOHyU8I41N5guQv9c0q6lDB/2zHggvCumxXw1Q6VFk72d/68V6X5rjebOs9yG2lKSCx322XD1bqOhds8f9sx4AkAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwEdI0IYAQe/qqXMblNo5fl5kYi9eYzSLgSrFtHY6k/DdIB0HmNRFNgxwXbPFNQxwXbPFNAxwXbPFMwxwULCwsKAhLbPFIgxwWz2zwLCwAsmYtHRydWWP4UMJqLVmYWxzZY/hQw4gDAINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAMg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxYBINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WyQHMAhG/cpbZ5tnjYwwPEAIBIBUWAj7tRNDUAfhj0gABjoTbPGwW4DD4KNcLCoMJuvLgids8ERIAAiUBxvpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAdQB0BMB1o0IYAQe/qqXMblNo5fl5kYi9eYzSLgSrFtHY6k/DdIB0HmNRI0IYAQe/qqXMblNo5fl5kYi9eYzSLgSrFtHY6k/DdIB0HmNRHCC8IPf1VLmNym0cvy8yMRevMZpFwJVi2jsdSfhukA6DzGoFADM+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgxEDYQNRA0ALzIcgHLAXABywASygfL/8nQINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiHAgyHIBywFwAcsAEsoHy//J0CDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4Ij4KPhCALm7vRgnBc7D1dLK57HoTsOdZKhRtmgnCd1jUtK2R8syLTry398WI5gnAgVcAbgGdjlM5YOq5HJbLDgnAb1J3vlUWW8cdT094FWcMmgnCdl05as07LczoOlm2UZuikgCAUgXGAARsK+7UTQ0gABgAHWybuNDVpcGZzOi8vUW1mVGJqRFI2dkphYmZEWjN3S2Y2eXZDV2YyVXBDWlVUaDc1bkRnNVA5QVM3MYIA=="),e=a.Cell.fromBase64("te6cckECGwEABYcAAQHAAQEFoKT9AgEU/wD0pBP0vPLICwMCAWIMBAIBIAoFAgEgCQYCAUgIBwB1sm7jQ1aXBmczovL1FtZlRiakRSNnZKYWJmRFozd0tmNnl2Q1dmMlVwQ1pVVGg3NW5EZzVQOUFTNzGCAAEbCvu1E0NIAAYAC5u70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIAhG/cpbZ5tnjYwwWCwACJQOW0AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8VRXbPDDI+EMBzH8BygBVUNs8ye1UFg8NAcJQZSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlADINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFshYDgDAINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAMg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxYBINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WyQHMAq7tou37cCHXScIflTAg1wsf3gKSW3/gIYIQlGqYtrqOrjHTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/Jf/hCcFgDgEIBbW3bPH/gAcAAkTDjDXAUEAGu+QEggvAyQsxllS8F2bB9Kyyq2RY4o0HI4fJTwjjU3mC5C/1zSrqUMH/bMeCC8K6bFfDVDpUWTvZ3/rxXpfmuN5s6z3IbaUpILHfbZcPVuo6F2zx/2zHgEQR0jQhgBB7+qpcxuU2jl+XmRiL15jNIuBKsW0djqT8N0gHQeY1EU2DHBds8U1DHBds8U0DHBds8UzDHBRMTExICEts8UiDHBbPbPBMTACyZi0dHJ1ZY/hQwmotWZhbHNlj+FDDiAcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7ABUAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwCPu1E0NQB+GPSAAGOhNs8bBbgMPgo1wsKgwm68uCJ2zwZFwHWjQhgBB7+qpcxuU2jl+XmRiL15jNIuBKsW0djqT8N0gHQeY1EjQhgBB7+qpcxuU2jl+XmRiL15jNIuBKsW0djqT8N0gHQeY1EcILwg9/VUuY3KbRy/LzIxF68xmkXAlWLaOx1J+G6QDoPMagYALzIcgHLAXABywASygfL/8nQINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiHAgyHIBywFwAcsAEsoHy//J0CDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4Ij4KPhCAcb6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAHUAdAaAMz6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiDEQNhA1EDQWSBrO");let s=a.beginCell();s.storeRef(e),s.storeUint(0,1);const o=s.endCell();return{code:r,data:o}}const p={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class d{constructor(e,s){g(this,"address");g(this,"init");g(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]}],errors:p});this.address=e,this.init=s}static async init(){return await u()}static async fromInit(){const e=await u(),s=a.contractAddress(0,e);return new d(s,e)}static fromAddress(e){return new d(e)}async send(e,s,o,t){let n=null;if(t==="show all"&&(n=a.beginCell().storeUint(0,32).storeStringTail(t).endCell()),t==="show ops"&&(n=a.beginCell().storeUint(0,32).storeStringTail(t).endCell()),t&&typeof t=="object"&&!(t instanceof a.Slice)&&t.$$type==="Deploy"&&(n=a.beginCell().store(h(t)).endCell()),n===null)throw new Error("Invalid message type");await e.internal(s,{...o,body:n})}async getResult(e){let s=new a.TupleBuilder;return(await e.get("result",s.build())).stack.readAddress()}}function D(r,e,s){let o;Q(r,c,i=>s(2,o=i));let t,n;return L(c,o={markdown:f,tactCode:v,deploy:async()=>{const i=await b.Blockchain.create(),A=await i.treasury("deployer");t=A.getSender(),n=i.openContract(await d.fromInit());const C={[A.address.toString()]:"deployer",[n.address.toString()]:"contract"};return[[n],C,[await n.send(A.getSender(),{value:a.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{"show all":async()=>[await n.send(t,{value:a.toNano(1)},"show all")],"show ops":async()=>[await n.send(t,{value:a.toNano(1)},"show ops")]},getters:{result:async()=>await n.getResult()},prev:l(import.meta.url).prev,next:l(import.meta.url).next},o),[]}class Y extends B{constructor(e){super(),y(this,e,D,null,m,{})}}export{Y as default};
