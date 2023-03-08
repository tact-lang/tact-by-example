var I=Object.defineProperty;var C=(n,e,s)=>e in n?I(n,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[e]=s;var A=(n,e,s)=>(C(n,typeof e!="symbol"?e+"":e,s),s);import{S as w,i as B,s as m,I as y,ac as f}from"../../../../chunks/index-1d4083c1.js";import{d as r,s as u}from"../../../../chunks/store-ab11a47e.js";import{d as Q,g as c}from"../../../../chunks/helpers-be3eeda0.js";const E=`# Addresses

\`Address\` is another primitive data type. It represents standard addresses on the TON blockchain. Every smart contract on TON is identifiable by its address. Think of this as a unique id.

TON is divided into multiple chains called *workchains*. One of the internal fields of the address is the workchain id:

* \`0\` - The standard workchain, for regular users.

* \`-1\` - The masterchain, usually for validators.

There are multiple ways to [represent](https://ton.org/docs/learn/overviews/addresses) the same address. Notice in the contract that the bouncable and non-bouncable representations of the same address actually generate the exact same value. It doesn't matter which representation you use.`,L=`import "@stdlib/deploy";

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
}`;function b(n){return e=>{let s=e;s.storeUint(2490013878,32),s.storeUint(n.queryId,64)}}async function l(){const n=r.Cell.fromBase64("te6ccgECFgEABVcAART/APSkE/S88sgLAQIBYgIDBMLQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJIkFVbwT4Ye1E0NQB+GLSAAGOhNs8bBWOjjD4KNcLCoMJuvLgids84lUU2zwwERIEBQIBIA8QApjtou37cCHXScIflTAg1wsf3gKSW3/gIYIQlGqYtrqOozHTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J2zx/4AHAAJEw4w1wBgcBIMj4QgHMfwHKAFVA2zzJ7VQNASb4QW8kECNfA39wUAOAQgFtbds8CAGu+QEggvAyQsxllS8F2bB9Kyyq2RY4o0HI4fJTwjjU3mC5C/1zSrqUMH/bMeCC8K6bFfDVDpUWTvZ3/rxXpfmuN5s6z3IbaUpILHfbZcPVuo6F2zx/2zHgCgHOyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WUAP6AnABymgjbrMlbrOxlzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AAkAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwEdI0IYAQe/qqXMblNo5fl5kYi9eYzSLgSrFtHY6k/DdIB0HmNRFMFxwXbPFMExwXbPFMDxwXbPFMCxwUMDAwLAhDbPCHHBbPbPAwMACyZi0dHJ1ZY/hQwmotWZhbHNlj+FDDiAeBQVCDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WWCDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WyFADDgCUINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxYBINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxbJAcwDS79yl2omhqAPwxaQAAx0JtnjYKx0cYfBRrhYVBhN15cETtnnFtnkERITALm93owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwTgN6k73yqLLeOOp6e8CrOGTQThOy6ctWadluZ0HSzbKM3RSQB5PpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiQH6QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJAdQB0BQB1o0IYAQe/qqXMblNo5fl5kYi9eYzSLgSrFtHY6k/DdIB0HmNRI0IYAQe/qqXMblNo5fl5kYi9eYzSLgSrFtHY6k/DdIB0HmNRHCC8IPf1VLmNym0cvy8yMRevMZpFwJVi2jsdSfhukA6DzGoFQAEXwQAoPpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiQH6QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkxECUQJBAjAMzIcgHLAXABywASygfL/8nQINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJcCDIcgHLAXABywASygfL/8nQINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJ+Cg="),e=r.Cell.fromBase64("te6cckECGAEABWEAAQHAAQEFoKT9AgEU/wD0pBP0vPLICwMCAWIIBAIBIAYFALm93owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwTgN6k73yqLLeOOp6e8CrOGTQThOy6ctWadluZ0HSzbKM3RSQDS79yl2omhqAPwxaQAAx0JtnjYKx0cYfBRrhYVBhN15cETtnnFtnkFhQHAARfBATC0AHQ0wMBcbDAAZF/kXDiAfpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiSJBVW8E+GHtRNDUAfhi0gABjoTbPGwVjo4w+CjXCwqDCbry4InbPOJVFNs8MBYUDAkBIMj4QgHMfwHKAFVA2zzJ7VQKAeBQVCDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WWCDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WyFADCwCUINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxYBINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxbJAcwCmO2i7ftwIddJwh+VMCDXCx/eApJbf+AhghCUapi2uo6jMdMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8nbPH/gAcAAkTDjDXARDQGu+QEggvAyQsxllS8F2bB9Kyyq2RY4o0HI4fJTwjjU3mC5C/1zSrqUMH/bMeCC8K6bFfDVDpUWTvZ3/rxXpfmuN5s6z3IbaUpILHfbZcPVuo6F2zx/2zHgDgR0jQhgBB7+qpcxuU2jl+XmRiL15jNIuBKsW0djqT8N0gHQeY1EUwXHBds8UwTHBds8UwPHBds8UwLHBRAQEA8CENs8IccFs9s8EBAALJmLR0cnVlj+FDCai1ZmFsc2WP4UMOIBJvhBbyQQI18Df3BQA4BCAW1t2zwSAc7IcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxZQA/oCcAHKaCNusyVus7GXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsAEwCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAHWjQhgBB7+qpcxuU2jl+XmRiL15jNIuBKsW0djqT8N0gHQeY1EjQhgBB7+qpcxuU2jl+XmRiL15jNIuBKsW0djqT8N0gHQeY1EcILwg9/VUuY3KbRy/LzIxF68xmkXAlWLaOx1J+G6QDoPMagVAMzIcgHLAXABywASygfL/8nQINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJcCDIcgHLAXABywASygfL/8nQINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJ+CgB5PpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiQH6QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJAdQB0BcAoPpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiQH6QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkxECUQJBAjVlSAhA==");let s=r.beginCell();s.storeRef(e),s.storeUint(0,1);const o=s.endCell();return{code:n,data:o}}const p={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class i{constructor(e,s){A(this,"address");A(this,"init");A(this,"abi",{errors:p});this.address=e,this.init=s}static async init(){return await l()}static async fromInit(){const e=await l(),s=r.contractAddress(0,e);return new i(s,e)}static fromAddress(e){return new i(e)}async send(e,s,o,t){let a=null;if(t==="show all"&&(a=r.beginCell().storeUint(0,32).storeStringTail(t).endCell()),t==="show ops"&&(a=r.beginCell().storeUint(0,32).storeStringTail(t).endCell()),t&&typeof t=="object"&&!(t instanceof r.Slice)&&t.$$type==="Deploy"&&(a=r.beginCell().store(b(t)).endCell()),a===null)throw new Error("Invalid message type");await e.internal(s,{...o,body:a})}async getResult(e){let s=new r.TupleBuilder;return(await e.get("result",s.build())).stack.readAddress()}}function h(n,e,s){let o;y(n,u,g=>s(2,o=g));let t,a;return f(u,o={markdown:E,tactCode:L,deploy:async()=>{const g=await Q.Blockchain.create(),d=await g.treasury("deployer");return t=d.getSender(),a=g.openContract(await i.fromInit()),[await a.send(d.getSender(),{value:r.toNano(1)},{$$type:"Deploy",queryId:0n})]},messages:{"show all":async()=>[await a.send(t,{value:r.toNano(1)},"show all")],"show ops":async()=>[await a.send(t,{value:r.toNano(1)},"show ops")]},getters:{result:async()=>await a.getResult()},prev:c(import.meta.url).prev,next:c(import.meta.url).next},o),[]}class x extends w{constructor(e){super(),B(this,e,h,null,m,{})}}export{x as default};
