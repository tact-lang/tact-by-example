import{ab as C,S as m,i as y,s as h,J as b,ad as p}from"../../../chunks/index-a89a8bfe.js";import{d as s,s as B}from"../../../chunks/store-04c80bb0.js";import{d}from"../../../chunks/index-e79fdc6e.js";const E=`# This is a title

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
`,D=`import "@stdlib/deploy";
 
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
`;function x(a){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(a.queryId,64)}}function H(a){return e=>{let t=e;t.storeUint(2278832834,32),t.storeUint(a.amount,32)}}async function f(a){const e="te6ccgEBBgEALwABFP8A9KQT9LzyyAsBAgFiAgMCAs0EBQAJoUrd4AkAAdQAF9OAFkZgEs54tlj+TA==",t="te6ccgECDwEAAt0AART/APSkE/S88sgLAQIBYgIDA/LQ7aLt+3Ah10nCH5UwINcLH94C0NMDAXGwwAGRf5Fw4gH6QCJQZm8E+GECkVvgIIIQh9Q6wrqOtDDtRNDUAfhi+kABAdMfWWwSAtMfAYIQh9Q6wrry4IHTHwExEts8yPhCAcxZWc8Wyx/J7VTgIIIQlGqYtrrjAsAACgQFAgFqDA0CbDDtRNDUAfhi+kABAdMfWWwSAtMfAYIQlGqYtrry4IHTPwExEts82zzI+EIBzFlZzxbLH8ntVAYHAuqPbfkBgvDE+NcjEu3971t77HgzvbsWLRURvXipEq7Q8mN69lVyrrqPRe1E0NQB+GL6QAEB0x9ZbBKNBZoZWxsbyBmcm9tIGRlYnVnIHdvcmxkg/hQwcds8INs8/hQwyPhCAcxZWc8Wyx/J7VTbMeCRMOLywIIKCwAcyAGCEK/5D1dYyx/LP8kBJPhBbyQQI18DfwJwgEJYbW3bPAgB9shxAcoBUAcBygBwAcoCUAXPFlAD+gJwAcpoI26zJW6zsY5MfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzJczMwFwAcoA4iFuswkAMJx/AcoAASBu8tCAAcyVMXABygDiyQH7AAAe+EFvJFuBEU0yJMcF8vSgAN7IIcEAmIAtAcsHAaMB3iGCODJ8snNBGdO3qaoduY4gcCBxjhQEeqkMpjAlqBKgBKoHAqQhwABFMOYwM6oCzwGOK28AcI4RI3qpCBJvjAGkA3qpBCDAABTmMyKlA5xTAm+BpjBYywcCpVnkMDHiydABKbdDHaiaGoA/DF9IACA6Y+stgltnkA4Acbd6ME4LnYerpZXPY9CdhzrJUKNs0E4TusalpWyPlmRadeW/vixHME4DepO98qiy3jjqenvAqzhk0AACMQ==",r="te6cckECEQEAAucAAQHAAQEFoendAgEU/wD0pBP0vPLICwMCAWIIBAIBagYFAHG3ejBOC52Hq6WVz2PQnYc6yVCjbNBOE7rGpaVsj5ZkWnXlv74sRzBOA3qTvfKost446np7wKs4ZNABKbdDHaiaGoA/DF9IACA6Y+stgltnkAcAAjED8tDtou37cCHXScIflTAg1wsf3gLQ0wMBcbDAAZF/kXDiAfpAIlBmbwT4YQKRW+AgghCH1DrCuo60MO1E0NQB+GL6QAEB0x9ZbBIC0x8BghCH1DrCuvLggdMfATES2zzI+EIBzFlZzxbLH8ntVOAgghCUapi2uuMCwAAQCwkC6o9t+QGC8MT41yMS7f3vW3vseDO9uxYtFRG9eKkSrtDyY3r2VXKuuo9F7UTQ1AH4YvpAAQHTH1lsEo0FmhlbGxvIGZyb20gZGVidWcgd29ybGSD+FDBx2zwg2zz+FDDI+EIBzFlZzxbLH8ntVNsx4JEw4vLAghAKAN7IIcEAmIAtAcsHAaMB3iGCODJ8snNBGdO3qaoduY4gcCBxjhQEeqkMpjAlqBKgBKoHAqQhwABFMOYwM6oCzwGOK28AcI4RI3qpCBJvjAGkA3qpBCDAABTmMyKlA5xTAm+BpjBYywcCpVnkMDHiydACbDDtRNDUAfhi+kABAdMfWWwSAtMfAYIQlGqYtrry4IHTPwExEts82zzI+EIBzFlZzxbLH8ntVA8MAST4QW8kECNfA38CcIBCWG1t2zwNAfbIcQHKAVAHAcoAcAHKAlAFzxZQA/oCcAHKaCNusyVus7GOTH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMyXMzMBcAHKAOIhbrMOADCcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAAHMgBghCv+Q9XWMsfyz/JAB74QW8kW4ERTTIkxwXy9KDHERBR";let n=s.Cell.fromBase64(r),o=new s.TupleBuilder;o.writeCell(n),o.writeAddress(a);let c=o.build(),i=s.Cell.fromBoc(C.Buffer.from(t,"base64"))[0],g=s.Cell.fromBoc(C.Buffer.from(e,"base64"))[0],w=new s.Cell,I=await d.Blockchain.create(),A=await d.SmartContract.create(I,{address:s.contractAddress(0,{code:g,data:w}),code:g,data:w,balance:0n}).get("init",c);if(A.exitCode!==0&&A.exitCode!==1)throw u[A.exitCode]?new s.ComputeError(u[A.exitCode].message,A.exitCode,{logs:A.logs}):new s.ComputeError("Exit code: "+A.exitCode,A.exitCode,{logs:A.logs});return{code:i,data:A.stackReader.readCell()}}const u={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},4429:{message:"Invalid sender"}};class l{constructor(e,t){this.abi={errors:u},this.address=e,this.init=t}static async init(e){return await f(e)}static async fromInit(e){const t=await f(e),r=s.contractAddress(0,t);return new l(r,t)}static fromAddress(e){return new l(e)}async send(e,t,r,n){let o=null;if(n&&typeof n=="object"&&!(n instanceof s.Slice)&&n.$$type==="Add"&&(o=s.beginCell().store(H(n)).endCell()),n==="increment"&&(o=s.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n&&typeof n=="object"&&!(n instanceof s.Slice)&&n.$$type==="Deploy"&&(o=s.beginCell().store(x(n)).endCell()),o===null)throw new Error("Invalid message type");await e.internal(t,{...r,body:o})}async getCounter(e){let t=new s.TupleBuilder;return(await e.get("counter",t.build())).stack.readBigNumber()}}function Q(a,e,t){let r;b(a,B,c=>t(2,r=c));let n,o;return p(B,r={markdown:E,tactCode:D,deploy:async()=>{const c=await d.Blockchain.create(),i=await c.treasury("owner");return n=i.getSender(),o=c.openContract(await l.fromInit(i.address)),[await o.send(i.getSender(),{value:s.toNano(1)},{$$type:"Deploy",queryId:0n})]},messages:{increment:async()=>[await o.send(n,{value:s.toNano(1)},"increment")]},getters:{counter:async()=>await o.getCounter()},next:{name:"This is next",id:"010"}},r),[]}class K extends m{constructor(e){super(),y(this,e,Q,null,h,{})}}export{K as default};
