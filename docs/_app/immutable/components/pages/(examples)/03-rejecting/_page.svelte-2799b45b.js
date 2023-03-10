var w=Object.defineProperty;var C=(r,e,t)=>e in r?w(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var c=(r,e,t)=>(C(r,typeof e!="symbol"?e+"":e,t),t);import{S as m,i as h,s as f,I as v,ac as p}from"../../../../chunks/index-1d4083c1.js";import{d as a,g,s as d}from"../../../../chunks/helpers-e86371c8.js";import{d as I}from"../../../../chunks/index-7e0e6ef9.js";const B=`# Rejecting Messages

Processing an incoming message in a transaction isn't always successful. The contract may encounter some error and fail the transaction.

This can be due to an explicit decision of the contract author, usually by writing a \`require()\` on a condition that isn't met, or this may happen implicitly due to some computation error in run-time, like a math overflow.

The folowing things happen when a message is rejected:

* The transaction reverts - meaning all persistent state changes that took place during this transaction, even those that happened before the error was thrown, are all reverted and return to their original values.

* The message will be bounced back to its sender to notify them about the failure. Senders may opt out of a bounced reply by clearing the \`bounce\` flag, more on this later.

* The compute phase of the transaction will fail and a non-zero exit code returned. Numerical exit codes are a [low-level property](https://ton.org/docs/learn/tvm-instructions/tvm-exit-codes) of TON, Tact abstracts them away with meaningful error messages that its client libraries can translate.
`,b=`import "@stdlib/deploy";

message Divide {
    by: Int as uint32;
}

contract Rejecting with Deployable {

    val: Int as int64;
 
    init() {
        self.val = 0;
    }
 
    // not meeting the condition will reject the message, revert the transaction and all state changes
    receive("increment") {
        self.val = self.val + 1;
        require(self.val < 5, "Counter is too high");
    }

    // any exceptions during execution will revert the transaction and all state changes
    receive(msg: Divide) {
        self.val = 4;
        self.val = self.val / msg.by;
    }

    // advanced: revert the transaction and throw a specific non-zero exit code manually
    receive("no access") {
        throw(132);
    }
 
    get fun value(): Int {
        return self.val;
    }
}`;function D(r){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(r.queryId,64)}}function L(r){return e=>{let t=e;t.storeUint(158375295,32),t.storeUint(r.by,32)}}async function u(){const r=a.Cell.fromBase64("te6ccgECDAEAArMAART/APSkE/S88sgLAQIBYgIDAubQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GLtRNDUAfhj0gABlNI/ATGOjjD4KNcLCoMJuvLgids84lnbPDDI+EMBzH8BygABAco/ye1UCwQCAVgJCgLc7aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEAlwnX+6jhcx0x8BghAJcJ1/uvLggdMfATF0MqkEf+AhghCUapi2uo6jMdMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8nbPH/gAcAAkTDjDXAFBgEaf/hCcFgDgEIBbW3bPAcAwvkBIILwxPjXIxLt/e9be+x4M727Fi0VEb14qRKu0PJjevZVcq66njCkggCz2iHBBfL0f9sx4ILwto2OcR85jvByewLtyOsfT5DLgIKH2es6hwpM7ZahUsm6lvLAhH/bMeABzshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFlAD+gJwAcpoI26zJW6zsZczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAIAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMALm7vRgnBc7D1dLK57HoTsOdZKhRtmgnCd1jUtK2R8syLTry398WI5gnAgVcAbgGdjlM5YOq5HJbLDgnAb1J3vlUWW8cdT094FWcMmgnCdl05as07LczoOlm2UZuikgBRbmsDtRNDUAfhj0gABlNI/ATGOjjD4KNcLCoMJuvLgids84oCwACcA=="),e=a.Cell.fromBase64("te6cckECDgEAAr0AAQHAAQEFoDo/AgEU/wD0pBP0vPLICwMCAWIHBAIBWAYFAUW5rA7UTQ1AH4Y9IAAZTSPwExjo4w+CjXCwqDCbry4InbPOKA0Aubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSALm0AHQ0wMBcbDAAZF/kXDiAfpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiVRQUwNvBPhhAvhi7UTQ1AH4Y9IAAZTSPwExjo4w+CjXCwqDCbry4InbPOJZ2zwwyPhDAcx/AcoAAQHKP8ntVA0IAtztou37cCHXScIflTAg1wsf3gKSW3/gIYIQCXCdf7qOFzHTHwGCEAlwnX+68uCB0x8BMXQyqQR/4CGCEJRqmLa6jqMx0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yds8f+ABwACRMOMNcAoJAML5ASCC8MT41yMS7f3vW3vseDO9uxYtFRG9eKkSrtDyY3r2VXKuup4wpIIAs9ohwQXy9H/bMeCC8LaNjnEfOY7wcnsC7cjrH0+Qy4CCh9nrOocKTO2WoVLJupbywIR/2zHgARp/+EJwWAOAQgFtbds8CwHOyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WUAP6AnABymgjbrMlbrOxlzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AAwAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwAAnCJXWTc");let t=a.beginCell();t.storeRef(e),t.storeUint(0,1);const o=t.endCell();return{code:r,data:o}}const M={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"},46042:{message:"Counter is too high"}};class l{constructor(e,t){c(this,"address");c(this,"init");c(this,"abi",{errors:M});this.address=e,this.init=t}static async init(){return await u()}static async fromInit(){const e=await u(),t=a.contractAddress(0,e);return new l(t,e)}static fromAddress(e){return new l(e)}async send(e,t,o,n){let s=null;if(n==="increment"&&(s=a.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n&&typeof n=="object"&&!(n instanceof a.Slice)&&n.$$type==="Divide"&&(s=a.beginCell().store(L(n)).endCell()),n==="no access"&&(s=a.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n&&typeof n=="object"&&!(n instanceof a.Slice)&&n.$$type==="Deploy"&&(s=a.beginCell().store(D(n)).endCell()),s===null)throw new Error("Invalid message type");await e.internal(t,{...o,body:s})}async getValue(e){let t=new a.TupleBuilder;return(await e.get("value",t.build())).stack.readBigNumber()}}function T(r,e,t){let o;v(r,d,i=>t(2,o=i));let n,s;return p(d,o={markdown:B,tactCode:b,deploy:async()=>{const i=await I.Blockchain.create(),A=await i.treasury("deployer");n=A.getSender(),s=i.openContract(await l.fromInit());const y={[A.address.toString()]:"deployer",[s.address.toString()]:"contract"};return[s,y,[await s.send(A.getSender(),{value:a.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{increment:async()=>[await s.send(n,{value:a.toNano(1)},"increment")],"Divide{2}":async()=>[await s.send(n,{value:a.toNano(1)},{$$type:"Divide",by:2n})],"Divide{0}":async()=>[await s.send(n,{value:a.toNano(1)},{$$type:"Divide",by:0n})],"no access":async()=>[await s.send(n,{value:a.toNano(1)},"no access")]},getters:{value:async()=>await s.getValue()},prev:g(import.meta.url).prev,next:g(import.meta.url).next},o),[]}class J extends m{constructor(e){super(),h(this,e,T,null,f,{})}}export{J as default};
