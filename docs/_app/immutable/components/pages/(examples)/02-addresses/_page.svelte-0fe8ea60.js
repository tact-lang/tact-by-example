var I=Object.defineProperty;var C=(r,e,s)=>e in r?I(r,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[e]=s;var A=(r,e,s)=>(C(r,typeof e!="symbol"?e+"":e,s),s);import{S as B,i as w,s as y,I as m,ac as b}from"../../../../chunks/index-1d4083c1.js";import{d as a,s as c}from"../../../../chunks/store-ab11a47e.js";import{d as f,g as l}from"../../../../chunks/helpers-1ad14a18.js";const h=`# Addresses

\`Address\` is another primitive data type. It represents standard addresses on the TON blockchain. Every smart contract on TON is identifiable by its address. Think of this as a unique id.

TON is divided into multiple chains called *workchains*. One of the internal fields of the address is the workchain id:

* \`0\` - The standard workchain, for regular users.

* \`-1\` - The masterchain, usually for validators.

There are multiple ways to [represent](https://ton.org/docs/learn/overviews/addresses) the same address. Notice in the contract that the bouncable and non-bouncable representations of the same address actually generate the exact same value. It doesn't matter which representation you use.`,E=`import "@stdlib/deploy";

contract Addresses with Deployable {

    // we have three representations of the same address
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
        self.a5 = myAddress();      // address of this contract
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
}`;function Q(r){return e=>{let s=e;s.storeUint(2490013878,32),s.storeUint(r.queryId,64)}}async function u(){const r=a.Cell.fromBase64("te6ccgECFgEABVUAART/APSkE/S88sgLAQIBYgIDBMrQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GLtRNDUAfhj0gABjoTbPGwVjo4w+CjXCwqDCbry4InbPOJVFNs8MBESBAUCASAPEAKY7aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEJRqmLa6jqMx0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yds8f+ABwACRMOMNcAYHASDI+EMBzH8BygBVQNs8ye1UDQEaf/hCcFgDgEIBbW3bPAgBrvkBIILwMkLMZZUvBdmwfSssqtkWOKNByOHyU8I41N5guQv9c0q6lDB/2zHggvCumxXw1Q6VFk72d/68V6X5rjebOs9yG2lKSCx322XD1bqOhds8f9sx4AoBzshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFlAD+gJwAcpoI26zJW6zsZczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAJAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMBHSNCGAEHv6qlzG5TaOX5eZGIvXmM0i4EqxbR2OpPw3SAdB5jURTBccF2zxTBMcF2zxTA8cF2zxTAscFDAwMCwIQ2zwhxwWz2zwMDAAsmYtHRydWWP4UMJqLVmYWxzZY/hQw4gHgUFQg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFlgg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFgEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFshQAw4AlCDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WyQHMA0u/cpdqJoagD8MekAAMdCbZ42CsdHGHwUa4WFQYTdeXBE7Z5xbZ5BESEwC5vd6ME4LnYerpZXPY9CdhzrJUKNs0E4TusalpWyPlmRadeW/vixHME4ECrgDcAzscpnLB1XI5LZYcE4DepO98qiy3jjqenvAqzhk0E4TsunLVmnZbmdB0s2yjN0UkAeT6QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJAfpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiQHUAdAUAdaNCGAEHv6qlzG5TaOX5eZGIvXmM0i4EqxbR2OpPw3SAdB5jUSNCGAEHv6qlzG5TaOX5eZGIvXmM0i4EqxbR2OpPw3SAdB5jURwgvCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqBUABF8EAKD6QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJMRAlECQQIwDMyHIBywFwAcsAEsoHy//J0CDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiXAgyHIBywFwAcsAEsoHy//J0CDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgifgo"),e=a.Cell.fromBase64("te6cckECGAEABV8AAQHAAQEFoKT9AgEU/wD0pBP0vPLICwMCAWIIBAIBIAYFALm93owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwTgN6k73yqLLeOOp6e8CrOGTQThOy6ctWadluZ0HSzbKM3RSQDS79yl2omhqAPwx6QAAx0JtnjYKx0cYfBRrhYVBhN15cETtnnFtnkFhQHAARfBATK0AHQ0wMBcbDAAZF/kXDiAfpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiVRQUwNvBPhhAvhi7UTQ1AH4Y9IAAY6E2zxsFY6OMPgo1wsKgwm68uCJ2zziVRTbPDAWFAwJASDI+EMBzH8BygBVQNs8ye1UCgHgUFQg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFlgg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFgEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFshQAwsAlCDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WyQHMApjtou37cCHXScIflTAg1wsf3gKSW3/gIYIQlGqYtrqOozHTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J2zx/4AHAAJEw4w1wEQ0BrvkBIILwMkLMZZUvBdmwfSssqtkWOKNByOHyU8I41N5guQv9c0q6lDB/2zHggvCumxXw1Q6VFk72d/68V6X5rjebOs9yG2lKSCx322XD1bqOhds8f9sx4A4EdI0IYAQe/qqXMblNo5fl5kYi9eYzSLgSrFtHY6k/DdIB0HmNRFMFxwXbPFMExwXbPFMDxwXbPFMCxwUQEBAPAhDbPCHHBbPbPBAQACyZi0dHJ1ZY/hQwmotWZhbHNlj+FDDiARp/+EJwWAOAQgFtbds8EgHOyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WUAP6AnABymgjbrMlbrOxlzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7ABMAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwB1o0IYAQe/qqXMblNo5fl5kYi9eYzSLgSrFtHY6k/DdIB0HmNRI0IYAQe/qqXMblNo5fl5kYi9eYzSLgSrFtHY6k/DdIB0HmNRHCC8IPf1VLmNym0cvy8yMRevMZpFwJVi2jsdSfhukA6DzGoFQDMyHIBywFwAcsAEsoHy//J0CDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiXAgyHIBywFwAcsAEsoHy//J0CDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgifgoAeT6QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJAfpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiQHUAdAXAKD6QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJMRAlECQQI5Q8Qhw=");let s=a.beginCell();s.storeRef(e),s.storeUint(0,1);const o=s.endCell();return{code:r,data:o}}const D={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class g{constructor(e,s){A(this,"address");A(this,"init");A(this,"abi",{errors:D});this.address=e,this.init=s}static async init(){return await u()}static async fromInit(){const e=await u(),s=a.contractAddress(0,e);return new g(s,e)}static fromAddress(e){return new g(e)}async send(e,s,o,t){let n=null;if(t==="show all"&&(n=a.beginCell().storeUint(0,32).storeStringTail(t).endCell()),t==="show ops"&&(n=a.beginCell().storeUint(0,32).storeStringTail(t).endCell()),t&&typeof t=="object"&&!(t instanceof a.Slice)&&t.$$type==="Deploy"&&(n=a.beginCell().store(Q(t)).endCell()),n===null)throw new Error("Invalid message type");await e.internal(s,{...o,body:n})}async getResult(e){let s=new a.TupleBuilder;return(await e.get("result",s.build())).stack.readAddress()}}function p(r,e,s){let o;m(r,c,i=>s(2,o=i));let t,n;return b(c,o={markdown:h,tactCode:E,deploy:async()=>{const i=await f.Blockchain.create(),d=await i.treasury("deployer");return t=d.getSender(),n=i.openContract(await g.fromInit()),[n,[await n.send(d.getSender(),{value:a.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{"show all":async()=>[await n.send(t,{value:a.toNano(1)},"show all")],"show ops":async()=>[await n.send(t,{value:a.toNano(1)},"show ops")]},getters:{result:async()=>await n.getResult()},prev:l(import.meta.url).prev,next:l(import.meta.url).next},o),[]}class J extends B{constructor(e){super(),w(this,e,p,null,y,{})}}export{J as default};
