import{S as g,i as u,s as w,J as f,ad as C}from"../../../chunks/index-a89a8bfe.js";import{d as r,s as l}from"../../../chunks/store-04c80bb0.js";import{d as y}from"../../../chunks/index-e79fdc6e.js";const H=`# This is a 2nd title

This text is so cool

## Another second title

And more text

### Third and final title

Still cool with a [link](https://ton.org) somewhere.
`,B=`import "@stdlib/deploy";
 
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
`;function m(o){return e=>{let n=e;n.storeUint(2490013878,32),n.storeUint(o.queryId,64)}}function I(o){return e=>{let n=e;n.storeUint(2278832834,32),n.storeUint(o.amount,32)}}function p(o){return e=>{e.storeAddress(o.owner)}}async function d(o){const e=r.Cell.fromBase64("te6ccgECDgEAAkMAART/APSkE/S88sgLAQIBYgIDAprQAdDTAwFxsMABkX+RcOIB+kAiUFVvBPhh7UTQ1AH4YtIAAZn6QAEB0x9ZbBKOh/pAAQHR2zziWts8MMj4QgHMfwHKAFlZzxbLH8ntVAwEAgFqCgsD2O2i7ftwIddJwh+VMCDXCx/eApJbf+AhghCH1DrCuo6VMdMfAYIQh9Q6wrry4IHTHwEx2zx/4CGCEJRqmLa6jqMx0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yds8f+ABwACRMOMNcAkFBgEm+EFvJBAjXwN/cFADgEIBbW3bPAcBXPkBgvDE+NcjEu3971t77HgzvbsWLRURvXipEq7Q8mN69lVyrrqOhnHbPH/bMeAJAfbIcQHKAVAHAcoAcAHKAlAFzxZQA/oCcAHKaCNusyVus7GOTH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMyXMzMBcAHKAOIhbrMIADCcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAAHvhBbyRbgRFNMiTHBfL0oAJFt0MdqJoagD8MWkAAMz9IACA6Y+stglHQ/0gAIDo7Z5xbZ5AMDQCVt3owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwTgN6k73yqLLeOOp6e8CrOGTQAAJwAAIx"),n=r.Cell.fromBase64("te6cckECEAEAAk0AAQHAAQEFoendAgEU/wD0pBP0vPLICwMCAWIIBAIBagYFAJW3ejBOC52Hq6WVz2PQnYc6yVCjbNBOE7rGpaVsj5ZkWnXlv74sRzBOBAq4A3AM7HKZywdVyOS2WHBOA3qTvfKost446np7wKs4ZNACRbdDHaiaGoA/DFpAADM/SAAgOmPrLYJR0P9IACA6O2ecW2eQDwcAAjECmtAB0NMDAXGwwAGRf5Fw4gH6QCJQVW8E+GHtRNDUAfhi0gABmfpAAQHTH1lsEo6H+kABAdHbPOJa2zwwyPhCAcx/AcoAWVnPFssfye1UDwkD2O2i7ftwIddJwh+VMCDXCx/eApJbf+AhghCH1DrCuo6VMdMfAYIQh9Q6wrry4IHTHwEx2zx/4CGCEJRqmLa6jqMx0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yds8f+ABwACRMOMNcA4LCgFc+QGC8MT41yMS7f3vW3vseDO9uxYtFRG9eKkSrtDyY3r2VXKuuo6Gcds8f9sx4A4BJvhBbyQQI18Df3BQA4BCAW1t2zwMAfbIcQHKAVAHAcoAcAHKAlAFzxZQA/oCcAHKaCNusyVus7GOTH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMyXMzMBcAHKAOIhbrMNADCcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAAHvhBbyRbgRFNMiTHBfL0oAACcAcJwE8=");let s=r.beginCell();s.storeRef(n),s.storeUint(0,1),p({$$type:"Counter_init_args",owner:o})(s);const t=s.endCell();return{code:e,data:t}}const b={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},4429:{message:"Invalid sender"}};class i{constructor(e,n){this.abi={errors:b},this.address=e,this.init=n}static async init(e){return await d(e)}static async fromInit(e){const n=await d(e),s=r.contractAddress(0,n);return new i(s,n)}static fromAddress(e){return new i(e)}async send(e,n,s,t){let A=null;if(t&&typeof t=="object"&&!(t instanceof r.Slice)&&t.$$type==="Add"&&(A=r.beginCell().store(I(t)).endCell()),t==="increment"&&(A=r.beginCell().storeUint(0,32).storeStringTail(t).endCell()),t&&typeof t=="object"&&!(t instanceof r.Slice)&&t.$$type==="Deploy"&&(A=r.beginCell().store(m(t)).endCell()),A===null)throw new Error("Invalid message type");await e.internal(n,{...s,body:A})}async getCounter(e){let n=new r.TupleBuilder;return(await e.get("counter",n.build())).stack.readBigNumber()}}function M(o,e,n){let s;f(o,l,a=>n(2,s=a));let t,A;return C(l,s={markdown:H,tactCode:B,deploy:async()=>{const a=await y.Blockchain.create(),c=await a.treasury("owner");return t=c.getSender(),A=a.openContract(await i.fromInit(c.address)),[await A.send(c.getSender(),{value:r.toNano(1)},{$$type:"Deploy",queryId:0n})]},messages:{Increment:async()=>[await A.send(t,{value:r.toNano(1)},"increment")]},getters:{Counter:async()=>await A.getCounter()},prev:{name:"This is prev",id:"000"}},s),[]}class D extends g{constructor(e){super(),u(this,e,M,null,w,{})}}export{D as default};
