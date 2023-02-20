import{O as w,S as y,i as m,s as p,N as E,R as b}from"../../../chunks/index-55652f94.js";import{d as o,a as d}from"../../../chunks/index-9eeb7f13.js";import{s as B}from"../../../chunks/store-28a523f8.js";const D=`import "@stdlib/deploy";
 
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
`;function H(c){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(c.queryId,64)}}function Q(c){return e=>{let t=e;t.storeUint(2278832834,32),t.storeUint(c.amount,32)}}async function f(c){const e="te6ccgEBBgEALwABFP8A9KQT9LzyyAsBAgFiAgMCAs0EBQAJoUrd4AkAAdQAF9OAFkZgEs54tlj+TA==",t="te6ccgECDwEAAt0AART/APSkE/S88sgLAQIBYgIDA/LQ7aLt+3Ah10nCH5UwINcLH94C0NMDAXGwwAGRf5Fw4gH6QCJQZm8E+GECkVvgIIIQh9Q6wrqOtDDtRNDUAfhi+kABAdMfWWwSAtMfAYIQh9Q6wrry4IHTHwExEts8yPhCAcxZWc8Wyx/J7VTgIIIQlGqYtrrjAsAACgQFAgFqDA0CbDDtRNDUAfhi+kABAdMfWWwSAtMfAYIQlGqYtrry4IHTPwExEts82zzI+EIBzFlZzxbLH8ntVAYHAuqPbfkBgvDE+NcjEu3971t77HgzvbsWLRURvXipEq7Q8mN69lVyrrqPRe1E0NQB+GL6QAEB0x9ZbBKNBZoZWxsbyBmcm9tIGRlYnVnIHdvcmxkg/hQwcds8INs8/hQwyPhCAcxZWc8Wyx/J7VTbMeCRMOLywIIKCwAcyAGCEK/5D1dYyx/LP8kBJPhBbyQQI18DfwJwgEJYbW3bPAgB9shxAcoBUAcBygBwAcoCUAXPFlAD+gJwAcpoI26zJW6zsY5MfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzJczMwFwAcoA4iFuswkAMJx/AcoAASBu8tCAAcyVMXABygDiyQH7AAAe+EFvJFuBEU0yJMcF8vSgAN7IIcEAmIAtAcsHAaMB3iGCODJ8snNBGdO3qaoduY4gcCBxjhQEeqkMpjAlqBKgBKoHAqQhwABFMOYwM6oCzwGOK28AcI4RI3qpCBJvjAGkA3qpBCDAABTmMyKlA5xTAm+BpjBYywcCpVnkMDHiydABKbdDHaiaGoA/DF9IACA6Y+stgltnkA4Acbd6ME4LnYerpZXPY9CdhzrJUKNs0E4TusalpWyPlmRadeW/vixHME4DepO98qiy3jjqenvAqzhk0AACMQ==",A="te6cckECEQEAAucAAQHAAQEFoendAgEU/wD0pBP0vPLICwMCAWIIBAIBagYFAHG3ejBOC52Hq6WVz2PQnYc6yVCjbNBOE7rGpaVsj5ZkWnXlv74sRzBOA3qTvfKost446np7wKs4ZNABKbdDHaiaGoA/DF9IACA6Y+stgltnkAcAAjED8tDtou37cCHXScIflTAg1wsf3gLQ0wMBcbDAAZF/kXDiAfpAIlBmbwT4YQKRW+AgghCH1DrCuo60MO1E0NQB+GL6QAEB0x9ZbBIC0x8BghCH1DrCuvLggdMfATES2zzI+EIBzFlZzxbLH8ntVOAgghCUapi2uuMCwAAQCwkC6o9t+QGC8MT41yMS7f3vW3vseDO9uxYtFRG9eKkSrtDyY3r2VXKuuo9F7UTQ1AH4YvpAAQHTH1lsEo0FmhlbGxvIGZyb20gZGVidWcgd29ybGSD+FDBx2zwg2zz+FDDI+EIBzFlZzxbLH8ntVNsx4JEw4vLAghAKAN7IIcEAmIAtAcsHAaMB3iGCODJ8snNBGdO3qaoduY4gcCBxjhQEeqkMpjAlqBKgBKoHAqQhwABFMOYwM6oCzwGOK28AcI4RI3qpCBJvjAGkA3qpBCDAABTmMyKlA5xTAm+BpjBYywcCpVnkMDHiydACbDDtRNDUAfhi+kABAdMfWWwSAtMfAYIQlGqYtrry4IHTPwExEts82zzI+EIBzFlZzxbLH8ntVA8MAST4QW8kECNfA38CcIBCWG1t2zwNAfbIcQHKAVAHAcoAcAHKAlAFzxZQA/oCcAHKaCNusyVus7GOTH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMyXMzMBcAHKAOIhbrMOADCcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAAHMgBghCv+Q9XWMsfyz/JAB74QW8kW4ERTTIkxwXy9KDHERBR";let n=o.Cell.fromBase64(A),s=new o.TupleBuilder;s.writeCell(n),s.writeAddress(c);let l=s.build(),a=o.Cell.fromBoc(w.Buffer.from(t,"base64"))[0],u=o.Cell.fromBoc(w.Buffer.from(e,"base64"))[0],C=new o.Cell,I=await d.Blockchain.create(),r=await d.SmartContract.create(I,{address:o.contractAddress(0,{code:u,data:C}),code:u,data:C,balance:0n}).get("init",l);if(r.exitCode!==0&&r.exitCode!==1)throw g[r.exitCode]?new o.ComputeError(g[r.exitCode].message,r.exitCode,{logs:r.logs}):new o.ComputeError("Exit code: "+r.exitCode,r.exitCode,{logs:r.logs});return{code:a,data:r.stackReader.readCell()}}const g={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},4429:{message:"Invalid sender"}};class i{constructor(e,t){this.abi={errors:g},this.address=e,this.init=t}static async init(e){return await f(e)}static async fromInit(e){const t=await f(e),A=o.contractAddress(0,t);return new i(A,t)}static fromAddress(e){return new i(e)}async send(e,t,A,n){let s=null;if(n&&typeof n=="object"&&!(n instanceof o.Slice)&&n.$$type==="Add"&&(s=o.beginCell().store(Q(n)).endCell()),n==="increment"&&(s=o.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n&&typeof n=="object"&&!(n instanceof o.Slice)&&n.$$type==="Deploy"&&(s=o.beginCell().store(H(n)).endCell()),s===null)throw new Error("Invalid message type");await e.internal(t,{...A,body:s})}async getCounter(e){let t=new o.TupleBuilder;return(await e.get("counter",t.build())).stack.readBigNumber()}}function x(c,e,t){let A;E(c,B,l=>t(2,A=l));let n,s;return b(B,A={tactCode:D,deploy:async()=>{console.log("deploy - start");const l=await d.Blockchain.create(),a=await l.treasury("owner");n=a.getSender(),s=l.openContract(await i.fromInit(a.address)),await s.send(a.getSender(),{value:o.toNano(1)},{$$type:"Deploy",queryId:0n}),console.log("deploy - end")},messages:{Increment:async()=>{console.log("Increment - start"),await s.send(n,{value:o.toNano(1)},"increment"),console.log("Increment - end")}},getters:{Counter:async()=>{console.log(await s.getCounter())}}},A),[]}class K extends y{constructor(e){super(),m(this,e,x,null,p,{})}}export{K as default};
