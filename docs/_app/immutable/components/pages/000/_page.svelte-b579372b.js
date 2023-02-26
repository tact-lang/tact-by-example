import{S as u,i as g,s as w,J as C,ad as B}from"../../../chunks/index-a89a8bfe.js";import{d as r,s as d}from"../../../chunks/store-04c80bb0.js";import{d as f}from"../../../chunks/index-e79fdc6e.js";const y=`# This is a title

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
`,m=`import "@stdlib/deploy";
 
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
`;function p(A){return e=>{let n=e;n.storeUint(2490013878,32),n.storeUint(A.queryId,64)}}function I(A){return e=>{let n=e;n.storeUint(2278832834,32),n.storeUint(A.amount,32)}}function b(A){return e=>{e.storeAddress(A.owner)}}async function l(A){const e=r.Cell.fromBase64("te6ccgECDwEAAtcAART/APSkE/S88sgLAQIBYgIDAprQAdDTAwFxsMABkX+RcOIB+kAiUFVvBPhh7UTQ1AH4YtIAAZn6QAEB0x9ZbBKOh/pAAQHR2zziWts8MMj4QgHMfwHKAFlZzxbLH8ntVA0EAgFqCwwD2O2i7ftwIddJwh+VMCDXCx/eApJbf+AhghCH1DrCuo6VMdMfAYIQh9Q6wrry4IHTHwEx2zx/4CGCEJRqmLa6jqMx0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yds8f+ABwACRMOMNcAkFBgEm+EFvJBAjXwN/cFADgEIBbW3bPAcCoPkBgvDE+NcjEu3971t77HgzvbsWLRURvXipEq7Q8mN69lVyrrqPKI0FmhlbGxvIGZyb20gZGVidWcgd29ybGSD+FDBx2zwg2zz+FDB/2zHgCQoB9shxAcoBUAcBygBwAcoCUAXPFlAD+gJwAcpoI26zJW6zsY5MfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzJczMwFwAcoA4iFuswgAMJx/AcoAASBu8tCAAcyVMXABygDiyQH7AAAe+EFvJFuBEU0yJMcF8vSgAN7IIcEAmIAtAcsHAaMB3iGCODJ8snNBGdO3qaoduY4gcCBxjhQEeqkMpjAlqBKgBKoHAqQhwABFMOYwM6oCzwGOK28AcI4RI3qpCBJvjAGkA3qpBCDAABTmMyKlA5xTAm+BpjBYywcCpVnkMDHiydACRbdDHaiaGoA/DFpAADM/SAAgOmPrLYJR0P9IACA6O2ecW2eQDQ4Albd6ME4LnYerpZXPY9CdhzrJUKNs0E4TusalpWyPlmRadeW/vixHME4ECrgDcAzscpnLB1XI5LZYcE4DepO98qiy3jjqenvAqzhk0AACcAACMQ=="),n=r.Cell.fromBase64("te6cckECEQEAAuEAAQHAAQEFoendAgEU/wD0pBP0vPLICwMCAWIIBAIBagYFAJW3ejBOC52Hq6WVz2PQnYc6yVCjbNBOE7rGpaVsj5ZkWnXlv74sRzBOBAq4A3AM7HKZywdVyOS2WHBOA3qTvfKost446np7wKs4ZNACRbdDHaiaGoA/DFpAADM/SAAgOmPrLYJR0P9IACA6O2ecW2eQEAcAAjECmtAB0NMDAXGwwAGRf5Fw4gH6QCJQVW8E+GHtRNDUAfhi0gABmfpAAQHTH1lsEo6H+kABAdHbPOJa2zwwyPhCAcx/AcoAWVnPFssfye1UEAkD2O2i7ftwIddJwh+VMCDXCx/eApJbf+AhghCH1DrCuo6VMdMfAYIQh9Q6wrry4IHTHwEx2zx/4CGCEJRqmLa6jqMx0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yds8f+ABwACRMOMNcA8MCgKg+QGC8MT41yMS7f3vW3vseDO9uxYtFRG9eKkSrtDyY3r2VXKuuo8ojQWaGVsbG8gZnJvbSBkZWJ1ZyB3b3JsZIP4UMHHbPCDbPP4UMH/bMeAPCwDeyCHBAJiALQHLBwGjAd4hgjgyfLJzQRnTt6mqHbmOIHAgcY4UBHqpDKYwJagSoASqBwKkIcAARTDmMDOqAs8BjitvAHCOESN6qQgSb4wBpAN6qQQgwAAU5jMipQOcUwJvgaYwWMsHAqVZ5DAx4snQASb4QW8kECNfA39wUAOAQgFtbds8DQH2yHEBygFQBwHKAHABygJQBc8WUAP6AnABymgjbrMlbrOxjkx/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMlzMzAXABygDiIW6zDgAwnH8BygABIG7y0IABzJUxcAHKAOLJAfsAAB74QW8kW4ERTTIkxwXy9KAAAnDAeXAK");let s=r.beginCell();s.storeRef(n),s.storeUint(0,1),b({$$type:"Counter_init_args",owner:A})(s);const t=s.endCell();return{code:e,data:t}}const h={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},4429:{message:"Invalid sender"}};class i{constructor(e,n){this.abi={errors:h},this.address=e,this.init=n}static async init(e){return await l(e)}static async fromInit(e){const n=await l(e),s=r.contractAddress(0,n);return new i(s,n)}static fromAddress(e){return new i(e)}async send(e,n,s,t){let o=null;if(t&&typeof t=="object"&&!(t instanceof r.Slice)&&t.$$type==="Add"&&(o=r.beginCell().store(I(t)).endCell()),t==="increment"&&(o=r.beginCell().storeUint(0,32).storeStringTail(t).endCell()),t&&typeof t=="object"&&!(t instanceof r.Slice)&&t.$$type==="Deploy"&&(o=r.beginCell().store(p(t)).endCell()),o===null)throw new Error("Invalid message type");await e.internal(n,{...s,body:o})}async getCounter(e){let n=new r.TupleBuilder;return(await e.get("counter",n.build())).stack.readBigNumber()}}function H(A,e,n){let s;C(A,d,a=>n(2,s=a));let t,o;return B(d,s={markdown:y,tactCode:m,deploy:async()=>{const a=await f.Blockchain.create(),c=await a.treasury("owner");return t=c.getSender(),o=a.openContract(await i.fromInit(c.address)),[await o.send(c.getSender(),{value:r.toNano(1)},{$$type:"Deploy",queryId:0n})]},messages:{increment:async()=>[await o.send(t,{value:r.toNano(1)},"increment")]},getters:{counter:async()=>await o.getCounter()},next:{name:"This is next",id:"010"}},s),[]}class v extends u{constructor(e){super(),g(this,e,H,null,w,{})}}export{v as default};
