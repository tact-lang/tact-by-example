import{S as m,i as p,s as C,I as h,ac as f}from"../../../../chunks/index-1d4083c1.js";import{d as s,g,s as d}from"../../../../chunks/store-457686a0.js";import{d as w}from"../../../../chunks/index-5faf5019.js";const v=`# A Simple Counter

This contract has a state variable that persists between contract calls, the counter value. When persisted, it's encoded as a \`uint32\` - a 32-bit unsigned integer. Contracts pay rent in proportion to the amount of persistent space they consume, so compact representations are encouraged.

State variables should be initialized in \`init()\` that runs on deployment of the contract.

## Receiving messages

This contract can receive messages. Unlike getters that are read-only and are free to call, messages can do write operations and change the persistent state. Incoming messages are processed in \`receive()\` methods as transactions and cost gas for the sender.

After deploying the contract, send the \`increment\` message by pressing the <span class="mdButton grape">Send increment</span> button and then call the getter to see that the value indeed changed.
`,I=`contract Counter {
 
    // persistent state variable of type Int to hold the counter value
    val: Int as uint32;
 
    // initialize the state variable when contract is deployed
    init() {
        self.val = 0;
    }
 
    // handler for incoming increment messages that change the state
    receive("increment") {
        self.val = self.val + 1;
    }
 
    // read only getter for querying the counter value
    get fun value(): Int {
        return self.val;
    }
}`;async function u(){const o=s.Cell.fromBase64("te6ccgECCAEAAW8AART/APSkE/S88sgLAQIBYgIDAubQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GLtRNDUAfhj0gABlNMfATGOjjD4KNcLCoMJuvLgids84lnbPDDI+EMBzH8BygABAcsfye1UBwQCAVgFBgCu7aLt+3Ah10nCH5UwINcLH94Cklt/4CHAACHXScEhsJJbf+ABwACOK/kBgvDE+NcjEu3971t77HgzvbsWLRURvXipEq7Q8mN69lVyrrqUpH/bMeCRMOJwALm7vRgnBc7D1dLK57HoTsOdZKhRtmgnCd1jUtK2R8syLTry398WI5gnAgVcAbgGdjlM5YOq5HJbLDgnAb1J3vlUWW8cdT094FWcMmgnCdl05as07LczoOlm2UZuikgBRbmsDtRNDUAfhj0gABlNMfATGOjjD4KNcLCoMJuvLgids84oBwACcA=="),e=s.Cell.fromBase64("te6cckECCgEAAXkAAQHAAQEFoendAgEU/wD0pBP0vPLICwMCAWIHBAIBWAYFAUW5rA7UTQ1AH4Y9IAAZTTHwExjo4w+CjXCwqDCbry4InbPOKAkAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSALm0AHQ0wMBcbDAAZF/kXDiAfpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiVRQUwNvBPhhAvhi7UTQ1AH4Y9IAAZTTHwExjo4w+CjXCwqDCbry4InbPOJZ2zwwyPhDAcx/AcoAAQHLH8ntVAkIAK7tou37cCHXScIflTAg1wsf3gKSW3/gIcAAIddJwSGwklt/4AHAAI4r+QGC8MT41yMS7f3vW3vseDO9uxYtFRG9eKkSrtDyY3r2VXKuupSkf9sx4JEw4nAAAnBMFck0");let t=s.beginCell();t.storeRef(e),t.storeUint(0,1);const a=t.endCell();return{code:o,data:a}}const y={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class c{constructor(e,t){this.abi={errors:y},this.address=e,this.init=t}static async init(){return await u()}static async fromInit(){const e=await u(),t=s.contractAddress(0,e);return new c(t,e)}static fromAddress(e){return new c(e)}async send(e,t,a,r){let n=null;if(r===null&&(n=new s.Cell),r==="increment"&&(n=s.beginCell().storeUint(0,32).storeStringTail(r).endCell()),n===null)throw new Error("Invalid message type");await e.internal(t,{...a,body:n})}async getValue(e){let t=new s.TupleBuilder;return(await e.get("value",t.build())).stack.readBigNumber()}}function b(o,e,t){let a;h(o,d,i=>t(2,a=i));let r,n;return f(d,a={markdown:v,tactCode:I,deploy:async()=>{const i=await w.Blockchain.create(),l=await i.treasury("deployer");r=l.getSender(),n=i.openContract(await c.fromInit());const A={[l.address.toString()]:"deployer",[n.address.toString()]:"contract"};return[n,A,[await n.send(l.getSender(),{value:s.toNano(1)},null)]]},messages:{increment:async()=>[await n.send(r,{value:s.toNano(1)},"increment")]},getters:{value:async()=>await n.getValue()},prev:g(import.meta.url).prev,next:g(import.meta.url).next},a),[]}class T extends m{constructor(e){super(),p(this,e,b,null,C,{})}}export{T as default};
