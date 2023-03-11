var I=Object.defineProperty;var w=(n,e,s)=>e in n?I(n,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[e]=s;var i=(n,e,s)=>(w(n,typeof e!="symbol"?e+"":e,s),s);import{S as B,i as m,s as y,I as h,ac as E}from"../../../../chunks/index-1d4083c1.js";import{d as a,g as c,s as u}from"../../../../chunks/store-3208a846.js";import{d as p}from"../../../../chunks/index-ad3893c0.js";const Q=`# Addresses

\`Address\` is another primitive data type. It represents standard addresses on the TON blockchain. Every smart contract on TON is identifiable by its address. Think of this as a unique id.

TON is divided into multiple chains called *workchains*. One of the internal fields of the address is the workchain id:

* \`0\` - The standard workchain, for regular users.

* \`-1\` - The masterchain, usually for validators.

There are multiple ways to [represent](https://ton.org/docs/learn/overviews/addresses) the same address. Notice in the contract that the bouncable and non-bouncable representations of the same address actually generate the exact same value. It doesn't matter which representation you use.`,b=`import "@stdlib/deploy";

contract Addresses with Deployable {

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
        // addresses cannot currently be dumped
        // TODO: dump(self.a1);
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
}`;function L(n){return e=>{let s=e;s.storeUint(2490013878,32),s.storeUint(n.queryId,64)}}async function C(){const n=a.Cell.fromBase64("te6ccgECFgEABaEAART/APSkE/S88sgLAQIBYgIDBMrQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GLtRNDUAfhj0gABjoTbPGwWjo4w+CjXCwqDCbry4InbPOJVFds8MBESBAUCASAPEAKY7aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEJRqmLa6jqMx0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yds8f+ABwACRMOMNcAYHASDI+EMBzH8BygBVUNs8ye1UDQEaf/hCcFgDgEIBbW3bPAgBrvkBIILwMkLMZZUvBdmwfSssqtkWOKNByOHyU8I41N5guQv9c0q6lDB/2zHggvCumxXw1Q6VFk72d/68V6X5rjebOs9yG2lKSCx322XD1bqOhds8f9sx4AoBzshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFlAD+gJwAcpoI26zJW6zsZczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAJAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMBHSNCGAEHv6qlzG5TaOX5eZGIvXmM0i4EqxbR2OpPw3SAdB5jURTBscF2zxTBccF2zxTBMcF2zxTA8cFDAwMCwIQ2zwixwWz2zwMDAAsmYtHRydWWP4UMJqLVmYWxzZY/hQw4gHgUGUg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFlADINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxYBINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxbIWA4A3iDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WUAMg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFgEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFskBzANLv3KXaiaGoA/DHpAADHQm2eNgtHRxh8FGuFhUGE3XlwRO2ecW2eQREhMAub3ejBOC52Hq6WVz2PQnYc6yVCjbNBOE7rGpaVsj5ZkWnXlv74sRzBOBAq4A3AM7HKZywdVyOS2WHBOA3qTvfKost446np7wKs4ZNBOE7Lpy1Zp2W5nQdLNsozdFJAHk+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJAfpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiQH6QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkB1AHQFAHWjQhgBB7+qpcxuU2jl+XmRiL15jNIuBKsW0djqT8N0gHQeY1EjQhgBB7+qpcxuU2jl+XmRiL15jNIuBKsW0djqT8N0gHQeY1EcILwg9/VUuY3KbRy/LzIxF68xmkXAlWLaOx1J+G6QDoPMagVAARfBQDq+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJAfpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiQH6QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkxEDYQNRA0ANDIcgHLAXABywASygfL/8nQINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJcCDIcgHLAXABywASygfL/8nQINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJ+Cj4Qg=="),e=a.Cell.fromBase64("te6cckECGAEABasAAQHAAQEFoKT9AgEU/wD0pBP0vPLICwMCAWIIBAIBIAYFALm93owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwTgN6k73yqLLeOOp6e8CrOGTQThOy6ctWadluZ0HSzbKM3RSQDS79yl2omhqAPwx6QAAx0JtnjYLR0cYfBRrhYVBhN15cETtnnFtnkFhQHAARfBQTK0AHQ0wMBcbDAAZF/kXDiAfpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiVRQUwNvBPhhAvhi7UTQ1AH4Y9IAAY6E2zxsFo6OMPgo1wsKgwm68uCJ2zziVRXbPDAWFAwJASDI+EMBzH8BygBVUNs8ye1UCgHgUGUg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFlADINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxYBINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxbIWAsA3iDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WUAMg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFgEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFskBzAKY7aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEJRqmLa6jqMx0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yds8f+ABwACRMOMNcBENAa75ASCC8DJCzGWVLwXZsH0rLKrZFjijQcjh8lPCONTeYLkL/XNKupQwf9sx4ILwrpsV8NUOlRZO9nf+vFel+a43mzrPchtpSkgsd9tlw9W6joXbPH/bMeAOBHSNCGAEHv6qlzG5TaOX5eZGIvXmM0i4EqxbR2OpPw3SAdB5jURTBscF2zxTBccF2zxTBMcF2zxTA8cFEBAQDwIQ2zwixwWz2zwQEAAsmYtHRydWWP4UMJqLVmYWxzZY/hQw4gEaf/hCcFgDgEIBbW3bPBIBzshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFlAD+gJwAcpoI26zJW6zsZczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wATAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAdaNCGAEHv6qlzG5TaOX5eZGIvXmM0i4EqxbR2OpPw3SAdB5jUSNCGAEHv6qlzG5TaOX5eZGIvXmM0i4EqxbR2OpPw3SAdB5jURwgvCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqBUA0MhyAcsBcAHLABLKB8v/ydAg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IlwIMhyAcsBcAHLABLKB8v/ydAg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4In4KPhCAeT6QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJAfpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiQHUAdAXAOr6QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJAfpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiTEQNhA1EDQDOBRf");let s=a.beginCell();s.storeRef(e),s.storeUint(0,1);const o=s.endCell();return{code:n,data:o}}const f={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class g{constructor(e,s){i(this,"address");i(this,"init");i(this,"abi",{errors:f});this.address=e,this.init=s}static async init(){return await C()}static async fromInit(){const e=await C(),s=a.contractAddress(0,e);return new g(s,e)}static fromAddress(e){return new g(e)}async send(e,s,o,t){let r=null;if(t==="show all"&&(r=a.beginCell().storeUint(0,32).storeStringTail(t).endCell()),t==="show ops"&&(r=a.beginCell().storeUint(0,32).storeStringTail(t).endCell()),t&&typeof t=="object"&&!(t instanceof a.Slice)&&t.$$type==="Deploy"&&(r=a.beginCell().store(L(t)).endCell()),r===null)throw new Error("Invalid message type");await e.internal(s,{...o,body:r})}async getResult(e){let s=new a.TupleBuilder;return(await e.get("result",s.build())).stack.readAddress()}}function D(n,e,s){let o;h(n,u,A=>s(2,o=A));let t,r;return E(u,o={markdown:Q,tactCode:b,deploy:async()=>{const A=await p.Blockchain.create(),d=await A.treasury("deployer");t=d.getSender(),r=A.openContract(await g.fromInit());const l={[d.address.toString()]:"deployer",[r.address.toString()]:"contract"};return[r,l,[await r.send(d.getSender(),{value:a.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{"show all":async()=>[await r.send(t,{value:a.toNano(1)},"show all")],"show ops":async()=>[await r.send(t,{value:a.toNano(1)},"show ops")]},getters:{result:async()=>await r.getResult()},prev:c(import.meta.url).prev,next:c(import.meta.url).next},o),[]}class M extends B{constructor(e){super(),m(this,e,D,null,y,{})}}export{M as default};
