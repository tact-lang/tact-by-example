var g=Object.defineProperty;var w=(s,e,n)=>e in s?g(s,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[e]=n;var i=(s,e,n)=>(w(s,typeof e!="symbol"?e+"":e,n),n);import{S as C,i as B,s as f,J as y,ad as m}from"../../../chunks/index-a89a8bfe.js";import{d as A,s as l}from"../../../chunks/store-04c80bb0.js";import{d as p}from"../../../chunks/index-e79fdc6e.js";const I=`# This is a title

This contract has two state variables that persisted between contract calls: owner and counter. The state variables are declared in the contract header and initialized in the init function. The init function is called before contract is deployed.

## Another second title

And more text with \`some code\` inside.

We can also have a full code block:

\`\`\`
this is a code block
\`\`\`

### Third and final title

Still cool with a [link](https://ton.org) somewhere.

We can have items:

- first
- second
- third
`,b=`import "@stdlib/deploy";
 
message Add {
    amount: Int as uint32;
}
 
contract Counter with Deployable {
 
    owner: Address;
    counter: Int as uint32;
 
    init(owner: Address) {
        self.owner = owner;
        self.counter = 0;
    }
 
    fun add(v: Int) {
        
        // Check sender
        let ctx: Context = context();
        require(ctx.sender == self.owner, "Invalid sender");
        
        // Update counter
        self.counter = (self.counter + v);
    }
 
    receive(msg: Add) {
        self.add(msg.amount);
    }
 
    receive("increment") {
        dump("hello from debug world");
        self.add(1);
        dump(self.counter);
    }
 
    get fun counter(): Int {
        return self.counter;
    }
}
`;function H(s){return e=>{let n=e;n.storeUint(2490013878,32),n.storeUint(s.queryId,64)}}function h(s){return e=>{let n=e;n.storeUint(2278832834,32),n.storeUint(s.amount,32)}}function M(s){return e=>{e.storeAddress(s.owner)}}async function u(s){const e=A.Cell.fromBase64("te6ccgECDwEAAtcAART/APSkE/S88sgLAQIBYgIDAprQAdDTAwFxsMABkX+RcOIB+kAiUFVvBPhh7UTQ1AH4YtIAAZn6QAEB0x9ZbBKOh/pAAQHR2zziWts8MMj4QgHMfwHKAFlZzxbLH8ntVA0EAgFqCwwD2O2i7ftwIddJwh+VMCDXCx/eApJbf+AhghCH1DrCuo6VMdMfAYIQh9Q6wrry4IHTHwEx2zx/4CGCEJRqmLa6jqMx0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yds8f+ABwACRMOMNcAkFBgEm+EFvJBAjXwN/cFADgEIBbW3bPAcCoPkBgvDE+NcjEu3971t77HgzvbsWLRURvXipEq7Q8mN69lVyrrqPKI0FmhlbGxvIGZyb20gZGVidWcgd29ybGSD+FDBx2zwg2zz+FDB/2zHgCQoB9shxAcoBUAcBygBwAcoCUAXPFlAD+gJwAcpoI26zJW6zsY5MfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzJczMwFwAcoA4iFuswgAMJx/AcoAASBu8tCAAcyVMXABygDiyQH7AAAe+EFvJFuBEU0yJMcF8vSgAN7IIcEAmIAtAcsHAaMB3iGCODJ8snNBGdO3qaoduY4gcCBxjhQEeqkMpjAlqBKgBKoHAqQhwABFMOYwM6oCzwGOK28AcI4RI3qpCBJvjAGkA3qpBCDAABTmMyKlA5xTAm+BpjBYywcCpVnkMDHiydACRbdDHaiaGoA/DFpAADM/SAAgOmPrLYJR0P9IACA6O2ecW2eQDQ4Albd6ME4LnYerpZXPY9CdhzrJUKNs0E4TusalpWyPlmRadeW/vixHME4ECrgDcAzscpnLB1XI5LZYcE4DepO98qiy3jjqenvAqzhk0AACcAACMQ=="),n=A.Cell.fromBase64("te6cckECEQEAAuEAAQHAAQEFoendAgEU/wD0pBP0vPLICwMCAWIIBAIBagYFAJW3ejBOC52Hq6WVz2PQnYc6yVCjbNBOE7rGpaVsj5ZkWnXlv74sRzBOBAq4A3AM7HKZywdVyOS2WHBOA3qTvfKost446np7wKs4ZNACRbdDHaiaGoA/DFpAADM/SAAgOmPrLYJR0P9IACA6O2ecW2eQEAcAAjECmtAB0NMDAXGwwAGRf5Fw4gH6QCJQVW8E+GHtRNDUAfhi0gABmfpAAQHTH1lsEo6H+kABAdHbPOJa2zwwyPhCAcx/AcoAWVnPFssfye1UEAkD2O2i7ftwIddJwh+VMCDXCx/eApJbf+AhghCH1DrCuo6VMdMfAYIQh9Q6wrry4IHTHwEx2zx/4CGCEJRqmLa6jqMx0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yds8f+ABwACRMOMNcA8MCgKg+QGC8MT41yMS7f3vW3vseDO9uxYtFRG9eKkSrtDyY3r2VXKuuo8ojQWaGVsbG8gZnJvbSBkZWJ1ZyB3b3JsZIP4UMHHbPCDbPP4UMH/bMeAPCwDeyCHBAJiALQHLBwGjAd4hgjgyfLJzQRnTt6mqHbmOIHAgcY4UBHqpDKYwJagSoASqBwKkIcAARTDmMDOqAs8BjitvAHCOESN6qQgSb4wBpAN6qQQgwAAU5jMipQOcUwJvgaYwWMsHAqVZ5DAx4snQASb4QW8kECNfA39wUAOAQgFtbds8DQH2yHEBygFQBwHKAHABygJQBc8WUAP6AnABymgjbrMlbrOxjkx/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMlzMzAXABygDiIW6zDgAwnH8BygABIG7y0IABzJUxcAHKAOLJAfsAAB74QW8kW4ERTTIkxwXy9KAAAnDAeXAK");let r=A.beginCell();r.storeRef(n),r.storeUint(0,1),M({$$type:"Counter_init_args",owner:s})(r);const t=r.endCell();return{code:e,data:t}}const D={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},4429:{message:"Invalid sender"}};class c{constructor(e,n){i(this,"address");i(this,"init");i(this,"abi",{errors:D});this.address=e,this.init=n}static async init(e){return await u(e)}static async fromInit(e){const n=await u(e),r=A.contractAddress(0,n);return new c(r,n)}static fromAddress(e){return new c(e)}async send(e,n,r,t){let o=null;if(t&&typeof t=="object"&&!(t instanceof A.Slice)&&t.$$type==="Add"&&(o=A.beginCell().store(h(t)).endCell()),t==="increment"&&(o=A.beginCell().storeUint(0,32).storeStringTail(t).endCell()),t&&typeof t=="object"&&!(t instanceof A.Slice)&&t.$$type==="Deploy"&&(o=A.beginCell().store(H(t)).endCell()),o===null)throw new Error("Invalid message type");await e.internal(n,{...r,body:o})}async getCounter(e){let n=new A.TupleBuilder;return(await e.get("counter",n.build())).stack.readBigNumber()}}function Q(s,e,n){let r;y(s,l,a=>n(2,r=a));let t,o;return m(l,r={markdown:I,tactCode:b,deploy:async()=>{const a=await p.Blockchain.create(),d=await a.treasury("owner");return t=d.getSender(),o=a.openContract(await c.fromInit(d.address)),[await o.send(d.getSender(),{value:A.toNano(1)},{$$type:"Deploy",queryId:0n})]},messages:{increment:async()=>[await o.send(t,{value:A.toNano(1)},"increment")]},getters:{counter:async()=>await o.getCounter()},next:{name:"This is next",id:"010"}},r),[]}class k extends C{constructor(e){super(),B(this,e,Q,null,f,{})}}export{k as default};
