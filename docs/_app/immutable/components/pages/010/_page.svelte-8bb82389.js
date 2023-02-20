import{O as f,S as I,i as m,s as b,N as p,R as Q}from"../../../chunks/index-55652f94.js";import{d as s,a as d}from"../../../chunks/index-9eeb7f13.js";import{s as w}from"../../../chunks/store-28a523f8.js";const E=`import "@stdlib/deploy";
 
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
`;function H(a){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(a.queryId,64)}}function D(a){return e=>{let t=e;t.storeUint(2278832834,32),t.storeUint(a.amount,32)}}async function B(a){const e="te6ccgEBBgEALwABFP8A9KQT9LzyyAsBAgFiAgMCAs0EBQAJoUrd4AkAAdQAF9OAFkZgEs54tlj+TA==",t="te6ccgECDgEAAkkAART/APSkE/S88sgLAQIBYgIDA/LQ7aLt+3Ah10nCH5UwINcLH94C0NMDAXGwwAGRf5Fw4gH6QCJQZm8E+GECkVvgIIIQh9Q6wrqOtDDtRNDUAfhi+kABAdMfWWwSAtMfAYIQh9Q6wrry4IHTHwExEts8yPhCAcxZWc8Wyx/J7VTgIIIQlGqYtrrjAsAACgQFAgFqCwwCbDDtRNDUAfhi+kABAdMfWWwSAtMfAYIQlGqYtrry4IHTPwExEts82zzI+EIBzFlZzxbLH8ntVAYHAaaOy/kBgvDE+NcjEu3971t77HgzvbsWLRURvXipEq7Q8mN69lVyrrqOo+1E0NQB+GL6QAEB0x9ZbBJx2zzI+EIBzFlZzxbLH8ntVNsx4JEw4vLAggoAHMgBghCv+Q9XWMsfyz/JAST4QW8kECNfA38CcIBCWG1t2zwIAfbIcQHKAVAHAcoAcAHKAlAFzxZQA/oCcAHKaCNusyVus7GOTH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMyXMzMBcAHKAOIhbrMJADCcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAAHvhBbyRbgRFNMiTHBfL0oAEpt0MdqJoagD8MX0gAIDpj6y2CW2eQDQBxt3owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgN6k73yqLLeOOp6e8CrOGTQAAIx",r="te6cckECEAEAAlMAAQHAAQEFoendAgEU/wD0pBP0vPLICwMCAWIIBAIBagYFAHG3ejBOC52Hq6WVz2PQnYc6yVCjbNBOE7rGpaVsj5ZkWnXlv74sRzBOA3qTvfKost446np7wKs4ZNABKbdDHaiaGoA/DF9IACA6Y+stgltnkAcAAjED8tDtou37cCHXScIflTAg1wsf3gLQ0wMBcbDAAZF/kXDiAfpAIlBmbwT4YQKRW+AgghCH1DrCuo60MO1E0NQB+GL6QAEB0x9ZbBIC0x8BghCH1DrCuvLggdMfATES2zzI+EIBzFlZzxbLH8ntVOAgghCUapi2uuMCwAAPCgkBpo7L+QGC8MT41yMS7f3vW3vseDO9uxYtFRG9eKkSrtDyY3r2VXKuuo6j7UTQ1AH4YvpAAQHTH1lsEnHbPMj4QgHMWVnPFssfye1U2zHgkTDi8sCCDwJsMO1E0NQB+GL6QAEB0x9ZbBIC0x8BghCUapi2uvLggdM/ATES2zzbPMj4QgHMWVnPFssfye1UDgsBJPhBbyQQI18DfwJwgEJYbW3bPAwB9shxAcoBUAcBygBwAcoCUAXPFlAD+gJwAcpoI26zJW6zsY5MfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzJczMwFwAcoA4iFusw0AMJx/AcoAASBu8tCAAcyVMXABygDiyQH7AAAcyAGCEK/5D1dYyx/LP8kAHvhBbyRbgRFNMiTHBfL0oOtDRSc=";let n=s.Cell.fromBase64(r),o=new s.TupleBuilder;o.writeCell(n),o.writeAddress(a);let c=o.build(),l=s.Cell.fromBoc(f.Buffer.from(t,"base64"))[0],u=s.Cell.fromBoc(f.Buffer.from(e,"base64"))[0],C=new s.Cell,y=await d.Blockchain.create(),A=await d.SmartContract.create(y,{address:s.contractAddress(0,{code:u,data:C}),code:u,data:C,balance:0n}).get("init",c);if(A.exitCode!==0&&A.exitCode!==1)throw g[A.exitCode]?new s.ComputeError(g[A.exitCode].message,A.exitCode,{logs:A.logs}):new s.ComputeError("Exit code: "+A.exitCode,A.exitCode,{logs:A.logs});return{code:l,data:A.stackReader.readCell()}}const g={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},4429:{message:"Invalid sender"}};class i{constructor(e,t){this.abi={errors:g},this.address=e,this.init=t}static async init(e){return await B(e)}static async fromInit(e){const t=await B(e),r=s.contractAddress(0,t);return new i(r,t)}static fromAddress(e){return new i(e)}async send(e,t,r,n){let o=null;if(n&&typeof n=="object"&&!(n instanceof s.Slice)&&n.$$type==="Add"&&(o=s.beginCell().store(D(n)).endCell()),n==="increment"&&(o=s.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n&&typeof n=="object"&&!(n instanceof s.Slice)&&n.$$type==="Deploy"&&(o=s.beginCell().store(H(n)).endCell()),o===null)throw new Error("Invalid message type");await e.internal(t,{...r,body:o})}async getCounter(e){let t=new s.TupleBuilder;return(await e.get("counter",t.build())).stack.readBigNumber()}}function x(a,e,t){let r;p(a,w,c=>t(2,r=c));let n,o;return Q(w,r={tactCode:E,deploy:async()=>{console.log("deploy - start");const c=await d.Blockchain.create(),l=await c.treasury("owner");n=l.getSender(),o=c.openContract(await i.fromInit(l.address)),await o.send(l.getSender(),{value:s.toNano(1)},{$$type:"Deploy",queryId:0n}),console.log("deploy - end")},messages:{Increment:async()=>{console.log("Increment - start"),await o.send(n,{value:s.toNano(1)},"increment"),console.log("Increment - end")}},getters:{Counter:async()=>{console.log(await o.getCounter())}}},r),[]}class T extends I{constructor(e){super(),m(this,e,x,null,b,{})}}export{T as default};
