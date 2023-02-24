import{ab as w,S as I,i as m,s as b,J as p,ad as Q}from"../../../chunks/index-a89a8bfe.js";import{d as s,s as f}from"../../../chunks/store-04c80bb0.js";import{d}from"../../../chunks/index-e79fdc6e.js";const E=`# This is a 2nd title

This text is so cool

## Another second title

And more text

### Third and final title

Still cool with a [link](https://ton.org) somewhere.
`,H=`import "@stdlib/deploy";
 
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
        self.add(1);
    }
 
    get fun counter(): Int {
        return self.counter;
    }
}
`;function x(a){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(a.queryId,64)}}function h(a){return e=>{let t=e;t.storeUint(2278832834,32),t.storeUint(a.amount,32)}}async function B(a){const e="te6ccgEBBgEALwABFP8A9KQT9LzyyAsBAgFiAgMCAs0EBQAJoUrd4AkAAdQAF9OAFkZgEs54tlj+TA==",t="te6ccgECDgEAAkkAART/APSkE/S88sgLAQIBYgIDA/LQ7aLt+3Ah10nCH5UwINcLH94C0NMDAXGwwAGRf5Fw4gH6QCJQZm8E+GECkVvgIIIQh9Q6wrqOtDDtRNDUAfhi+kABAdMfWWwSAtMfAYIQh9Q6wrry4IHTHwExEts8yPhCAcxZWc8Wyx/J7VTgIIIQlGqYtrrjAsAACgQFAgFqCwwCbDDtRNDUAfhi+kABAdMfWWwSAtMfAYIQlGqYtrry4IHTPwExEts82zzI+EIBzFlZzxbLH8ntVAYHAaaOy/kBgvDE+NcjEu3971t77HgzvbsWLRURvXipEq7Q8mN69lVyrrqOo+1E0NQB+GL6QAEB0x9ZbBJx2zzI+EIBzFlZzxbLH8ntVNsx4JEw4vLAggoAHMgBghCv+Q9XWMsfyz/JAST4QW8kECNfA38CcIBCWG1t2zwIAfbIcQHKAVAHAcoAcAHKAlAFzxZQA/oCcAHKaCNusyVus7GOTH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMyXMzMBcAHKAOIhbrMJADCcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAAHvhBbyRbgRFNMiTHBfL0oAEpt0MdqJoagD8MX0gAIDpj6y2CW2eQDQBxt3owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgN6k73yqLLeOOp6e8CrOGTQAAIx",o="te6cckECEAEAAlMAAQHAAQEFoendAgEU/wD0pBP0vPLICwMCAWIIBAIBagYFAHG3ejBOC52Hq6WVz2PQnYc6yVCjbNBOE7rGpaVsj5ZkWnXlv74sRzBOA3qTvfKost446np7wKs4ZNABKbdDHaiaGoA/DF9IACA6Y+stgltnkAcAAjED8tDtou37cCHXScIflTAg1wsf3gLQ0wMBcbDAAZF/kXDiAfpAIlBmbwT4YQKRW+AgghCH1DrCuo60MO1E0NQB+GL6QAEB0x9ZbBIC0x8BghCH1DrCuvLggdMfATES2zzI+EIBzFlZzxbLH8ntVOAgghCUapi2uuMCwAAPCgkBpo7L+QGC8MT41yMS7f3vW3vseDO9uxYtFRG9eKkSrtDyY3r2VXKuuo6j7UTQ1AH4YvpAAQHTH1lsEnHbPMj4QgHMWVnPFssfye1U2zHgkTDi8sCCDwJsMO1E0NQB+GL6QAEB0x9ZbBIC0x8BghCUapi2uvLggdM/ATES2zzbPMj4QgHMWVnPFssfye1UDgsBJPhBbyQQI18DfwJwgEJYbW3bPAwB9shxAcoBUAcBygBwAcoCUAXPFlAD+gJwAcpoI26zJW6zsY5MfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzJczMwFwAcoA4iFusw0AMJx/AcoAASBu8tCAAcyVMXABygDiyQH7AAAcyAGCEK/5D1dYyx/LP8kAHvhBbyRbgRFNMiTHBfL0oOtDRSc=";let n=s.Cell.fromBase64(o),r=new s.TupleBuilder;r.writeCell(n),r.writeAddress(a);let c=r.build(),i=s.Cell.fromBoc(w.Buffer.from(t,"base64"))[0],u=s.Cell.fromBoc(w.Buffer.from(e,"base64"))[0],C=new s.Cell,y=await d.Blockchain.create(),A=await d.SmartContract.create(y,{address:s.contractAddress(0,{code:u,data:C}),code:u,data:C,balance:0n}).get("init",c);if(A.exitCode!==0&&A.exitCode!==1)throw g[A.exitCode]?new s.ComputeError(g[A.exitCode].message,A.exitCode,{logs:A.logs}):new s.ComputeError("Exit code: "+A.exitCode,A.exitCode,{logs:A.logs});return{code:i,data:A.stackReader.readCell()}}const g={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},4429:{message:"Invalid sender"}};class l{constructor(e,t){this.abi={errors:g},this.address=e,this.init=t}static async init(e){return await B(e)}static async fromInit(e){const t=await B(e),o=s.contractAddress(0,t);return new l(o,t)}static fromAddress(e){return new l(e)}async send(e,t,o,n){let r=null;if(n&&typeof n=="object"&&!(n instanceof s.Slice)&&n.$$type==="Add"&&(r=s.beginCell().store(h(n)).endCell()),n==="increment"&&(r=s.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n&&typeof n=="object"&&!(n instanceof s.Slice)&&n.$$type==="Deploy"&&(r=s.beginCell().store(x(n)).endCell()),r===null)throw new Error("Invalid message type");await e.internal(t,{...o,body:r})}async getCounter(e){let t=new s.TupleBuilder;return(await e.get("counter",t.build())).stack.readBigNumber()}}function D(a,e,t){let o;p(a,f,c=>t(2,o=c));let n,r;return Q(f,o={markdown:E,tactCode:H,deploy:async()=>{const c=await d.Blockchain.create(),i=await c.treasury("owner");return n=i.getSender(),r=c.openContract(await l.fromInit(i.address)),[await r.send(i.getSender(),{value:s.toNano(1)},{$$type:"Deploy",queryId:0n})]},messages:{Increment:async()=>[await r.send(n,{value:s.toNano(1)},"increment")]},getters:{Counter:async()=>await r.getCounter()}},o),[]}class L extends I{constructor(e){super(),m(this,e,D,null,b,{})}}export{L as default};
