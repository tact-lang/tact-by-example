var m=Object.defineProperty;var w=(a,e,t)=>e in a?m(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var c=(a,e,t)=>(w(a,typeof e!="symbol"?e+"":e,t),t);import{S as C,i as h,s as f,I as p,ac as v}from"../chunks/index.9fe14626.js";import{d as s,g as d,s as g}from"../chunks/store.d3ab02ad.js";import{d as I}from"../chunks/index.78404594.js";const b=`# Throwing Errors

Processing an incoming message in a transaction isn't always successful. The contract may encounter some error and fail.

This can be due to an explicit decision of the contract author, usually by writing a \`require()\` on a condition that isn't met, or this may happen implicitly due to some computation error in run-time, like a math overflow.

When an error is thrown, the transaction reverts. This means that all persistent state changes that took place during this transaction, even those that happened before the error was thrown, are all reverted and return to their original values.

## Notifying the sender about the error

How would the sender of the incoming message know that the message they had sent was rejected due to an error?

All communication is via messages, so naturally the sender should receive a message about the error. TON will actually return the original message back to the sender and mark it as *bounced* - just like a snail mail letter that couldn't be delivered.`,B=`import "@stdlib/deploy";

message Divide {
    by: Int as uint32;
}

contract Errors with Deployable {

    val: Int as int64;
 
    init() {
        self.val = 0;
    }
 
    // not meeting the condition will raise an error, revert the transaction and all state changes
    receive("increment") {
        self.val = self.val + 1;
        require(self.val < 5, "Counter is too high");
    }

    // any exceptions during execution will also revert the transaction and all state changes
    receive(msg: Divide) {
        self.val = 4;
        self.val = self.val / msg.by;
    }

    // advanced: revert the transaction and return a specific non-zero exit code manually
    // https://ton.org/docs/learn/tvm-instructions/tvm-exit-codes
    receive("no access") {
        throw(132);
    }
 
    get fun value(): Int {
        return self.val;
    }
}`;function D(a){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(a.queryId,64)}}function M(a){return e=>{let t=e;t.storeUint(158375295,32),t.storeUint(a.by,32)}}async function u(){const a=s.Cell.fromBase64("te6ccgECEQEAAt0AART/APSkE/S88sgLAQIBYgIDApTQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxZ2zwwyPhDAcx/AcoAAQHKP8ntVA4EAgFYCAkC8u2i7ftwIddJwh+VMCDXCx/eApJbf+AhghAJcJ1/uo4XMdMfAYIQCXCdf7ry4IHTHwExdDKpBH/gIYIQlGqYtrqOrjHTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/Jf/hCcFgDgEIBbW3bPH/gAcAAkTDjDXAFBgHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAHAML5ASCC8MT41yMS7f3vW3vseDO9uxYtFRG9eKkSrtDyY3r2VXKuup4wpIIAs9ohwQXy9H/bMeCC8LaNjnEfOY7wcnsC7cjrH0+Qy4CCh9nrOocKTO2WoVLJupbywIR/2zHgAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMALm7vRgnBc7D1dLK57HoTsOdZKhRtmgnCd1jUtK2R8syLTry398WI5gnAgVcAbgGdjlM5YOq5HJbLDgnAb1J3vlUWW8cdT094FWcMmgnCdl05as07LczoOlm2UZuikgCAUgKCwARsK+7UTQ0gABgAgFqDA0Ac6d3Ghq0uDM5nReXqLaxNaqpMa07GKmZmKazKio3o7KmGbccIJklmzyjIaWcpRu3uKCzmbGlMjkjmsECDaWBtnm2eGMODwE87UTQ1AH4Y9IAAZTSPwEx4DD4KNcLCoMJuvLgids8EAACIAACcA=="),e=s.Cell.fromBase64("te6cckECEwEAAucAAQHAAQEFoJE5AgEU/wD0pBP0vPLICwMCAWIMBAIBWAsFAgFICgYCAWoJBwINpYG2ebZ4YxEIAAIgAHOndxoatLgzOZ0Xl6i2sTWqqTGtOxipmZimsyoqN6Oyphm3HCCZJZs8oyGlnKUbt7igs5mxpTI5I5rBABGwr7tRNDSAAGAAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSAKU0AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8Wds8MMj4QwHMfwHKAAEByj/J7VQRDQLy7aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEAlwnX+6jhcx0x8BghAJcJ1/uvLggdMfATF0MqkEf+AhghCUapi2uo6uMdMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8l/+EJwWAOAQgFtbds8f+ABwACRMOMNcA8OAML5ASCC8MT41yMS7f3vW3vseDO9uxYtFRG9eKkSrtDyY3r2VXKuup4wpIIAs9ohwQXy9H/bMeCC8LaNjnEfOY7wcnsC7cjrH0+Qy4CCh9nrOocKTO2WoVLJupbywIR/2zHgAcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7ABAAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwBPO1E0NQB+GPSAAGU0j8BMeAw+CjXCwqDCbry4InbPBIAAnDJf7kH");let t=s.beginCell();t.storeRef(e),t.storeUint(0,1);const o=t.endCell();return{code:a,data:o}}const E={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"},46042:{message:"Counter is too high"}};class l{constructor(e,t){c(this,"address");c(this,"init");c(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"Divide",header:158375295,fields:[]}],errors:E});this.address=e,this.init=t}static async init(){return await u()}static async fromInit(){const e=await u(),t=s.contractAddress(0,e);return new l(t,e)}static fromAddress(e){return new l(e)}async send(e,t,o,n){let r=null;if(n==="increment"&&(r=s.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n&&typeof n=="object"&&!(n instanceof s.Slice)&&n.$$type==="Divide"&&(r=s.beginCell().store(M(n)).endCell()),n==="no access"&&(r=s.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n&&typeof n=="object"&&!(n instanceof s.Slice)&&n.$$type==="Deploy"&&(r=s.beginCell().store(D(n)).endCell()),r===null)throw new Error("Invalid message type");await e.internal(t,{...o,body:r})}async getValue(e){let t=new s.TupleBuilder;return(await e.get("value",t.build())).stack.readBigNumber()}}function H(a,e,t){let o;p(a,g,i=>t(2,o=i));let n,r;return v(g,o={markdown:b,tactCode:B,deploy:async()=>{const i=await I.Blockchain.create(),A=await i.treasury("deployer");n=A.getSender(),r=i.openContract(await l.fromInit());const y={[A.address.toString()]:"deployer",[r.address.toString()]:"contract"};return[[r],y,[await r.send(A.getSender(),{value:s.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{increment:async()=>[await r.send(n,{value:s.toNano(1)},"increment")],"Divide{2}":async()=>[await r.send(n,{value:s.toNano(1)},{$$type:"Divide",by:2n})],"Divide{0}":async()=>[await r.send(n,{value:s.toNano(1)},{$$type:"Divide",by:0n})],"no access":async()=>[await r.send(n,{value:s.toNano(1)},"no access")]},getters:{value:async()=>await r.getValue()},prev:d(import.meta.url).prev,next:d(import.meta.url).next},o),[]}class L extends C{constructor(e){super(),h(this,e,H,null,f,{})}}export{L as default};
