var u=Object.defineProperty;var p=(r,e,t)=>e in r?u(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var l=(r,e,t)=>(p(r,typeof e!="symbol"?e+"":e,t),t);import{S as f,i as v,s as w,I as C,ac as h}from"../chunks/index.9fe14626.js";import{d as s,g as A,s as g}from"../chunks/store.96cf5894.js";import{d as I}from"../chunks/index.7100d5a9.js";const b=`# Throwing Errors

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
}`;function D(r){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(r.queryId,64)}}function E(r){return e=>{let t=e;t.storeUint(158375295,32),t.storeUint(r.by,32)}}async function y(){const r=s.Cell.fromBase64("te6ccgECEgEAAvgAART/APSkE/S88sgLAQIBYgIDApjQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxZ2zzy4ILI+EMBzH8BygABAco/ye1UDwQCAVgJCgLk7aLt+wGSMH/gcCHXScIflTAg1wsf3iCCEAlwnX+6jhcw0x8BghAJcJ1/uvLggdMfATF0MqkEf+AgghCUapi2uo6oMNMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8n4QgFwbds8f+DAAJEw4w1wBQYBOm1tIm6zmVsgbvLQgG8iAZEy4hAkcAMEgEJQI9s8BwDC+QEggvDE+NcjEu3971t77HgzvbsWLRURvXipEq7Q8mN69lVyrrqeMKSCALPaIcEF8vR/2zHggvC2jY5xHzmO8HJ7Au3I6x9PkMuAgofZ6zqHCkztlqFSybqW8sCEf9sx4AHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAIAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMALm7vRgnBc7D1dLK57HoTsOdZKhRtmgnCd1jUtK2R8syLTry398WI5gnAgVcAbgGdjlM5YOq5HJbLDgnAb1J3vlUWW8cdT094FWcMmgnCdl05as07LczoOlm2UZuikgCAUgLDAARsK+7UTQ0gABgAgFqDQ4Ac6d3Ghq0uDM5nReXqLaxoy02uBkgmzyyojSxOjgoJyUsKSo3pqKirBqpKje7OTa6urW7sjaltzEZq8ECDaWBtnm2eGMPEAE87UTQ1AH4Y9IAAZTSPwEx4DD4KNcLCoMJuvLgids8EQACIAACcA=="),e=s.Cell.fromBase64("te6cckECFAEAAwIAAQHAAQEFoJE5AgEU/wD0pBP0vPLICwMCAWIMBAIBWAsFAgFICgYCAWoJBwINpYG2ebZ4YxIIAAIgAHOndxoatLgzOZ0Xl6i2saMtNrgZIJs8sqI0sTo4KCclLCkqN6aioqwaqSo3uzk2urq1u7I2pbcxGavBABGwr7tRNDSAAGAAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSAKY0AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8Wds88uCCyPhDAcx/AcoAAQHKP8ntVBINAuTtou37AZIwf+BwIddJwh+VMCDXCx/eIIIQCXCdf7qOFzDTHwGCEAlwnX+68uCB0x8BMXQyqQR/4CCCEJRqmLa6jqgw0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yfhCAXBt2zx/4MAAkTDjDXAPDgDC+QEggvDE+NcjEu3971t77HgzvbsWLRURvXipEq7Q8mN69lVyrrqeMKSCALPaIcEF8vR/2zHggvC2jY5xHzmO8HJ7Au3I6x9PkMuAgofZ6zqHCkztlqFSybqW8sCEf9sx4AE6bW0ibrOZWyBu8tCAbyIBkTLiECRwAwSAQlAj2zwQAcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7ABEAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwBPO1E0NQB+GPSAAGU0j8BMeAw+CjXCwqDCbry4InbPBMAAnCRInr0");let t=s.beginCell();t.storeRef(e),t.storeUint(0,1);const o=t.endCell();return{code:r,data:o}}const k={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"},46042:{message:"Counter is too high"}},x=[{name:"StateInit",header:null,fields:[{name:"code",type:{kind:"simple",type:"cell",optional:!1}},{name:"data",type:{kind:"simple",type:"cell",optional:!1}}]},{name:"Context",header:null,fields:[{name:"bounced",type:{kind:"simple",type:"bool",optional:!1}},{name:"sender",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"raw",type:{kind:"simple",type:"slice",optional:!1}}]},{name:"SendParameters",header:null,fields:[{name:"bounce",type:{kind:"simple",type:"bool",optional:!1}},{name:"to",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"mode",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"body",type:{kind:"simple",type:"cell",optional:!0}},{name:"code",type:{kind:"simple",type:"cell",optional:!0}},{name:"data",type:{kind:"simple",type:"cell",optional:!0}}]},{name:"Deploy",header:2490013878,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"DeployOk",header:2952335191,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"FactoryDeploy",header:1829761339,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}},{name:"cashback",type:{kind:"simple",type:"address",optional:!1}}]},{name:"Divide",header:158375295,fields:[{name:"by",type:{kind:"simple",type:"uint",optional:!1,format:32}}]}],Q=[{name:"value",arguments:[],returnType:{kind:"simple",type:"int",optional:!1,format:257}}],H=[{receiver:"internal",message:{kind:"text",text:"increment"}},{receiver:"internal",message:{kind:"typed",type:"Divide"}},{receiver:"internal",message:{kind:"text",text:"no access"}},{receiver:"internal",message:{kind:"typed",type:"Deploy"}}];class c{constructor(e,t){l(this,"address");l(this,"init");l(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"FactoryDeploy",header:1829761339,fields:[]},{name:"Divide",header:158375295,fields:[]}],types:x,getters:Q,receivers:H,errors:k});this.address=e,this.init=t}static async init(){return await y()}static async fromInit(){const e=await y(),t=s.contractAddress(0,e);return new c(t,e)}static fromAddress(e){return new c(e)}async send(e,t,o,n){let a=null;if(n==="increment"&&(a=s.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n&&typeof n=="object"&&!(n instanceof s.Slice)&&n.$$type==="Divide"&&(a=s.beginCell().store(E(n)).endCell()),n==="no access"&&(a=s.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n&&typeof n=="object"&&!(n instanceof s.Slice)&&n.$$type==="Deploy"&&(a=s.beginCell().store(D(n)).endCell()),a===null)throw new Error("Invalid message type");await e.internal(t,{...o,body:a})}async getValue(e){let t=new s.TupleBuilder;return(await e.get("value",t.build())).stack.readBigNumber()}}function M(r,e,t){let o;C(r,g,i=>t(2,o=i));let n,a;return h(g,o={markdown:b,tactCode:B,deploy:async()=>{const i=await I.Blockchain.create(),d=await i.treasury("deployer");n=d.getSender(),a=i.openContract(await c.fromInit());const m={[d.address.toString()]:"deployer",[a.address.toString()]:"contract"};return[[a],m,[await a.send(d.getSender(),{value:s.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{increment:async()=>[await a.send(n,{value:s.toNano(1)},"increment")],"Divide{2}":async()=>[await a.send(n,{value:s.toNano(1)},{$$type:"Divide",by:2n})],"Divide{0}":async()=>[await a.send(n,{value:s.toNano(1)},{$$type:"Divide",by:0n})],"no access":async()=>[await a.send(n,{value:s.toNano(1)},"no access")]},getters:{value:async()=>await a.getValue()},prev:A(import.meta.url).prev,next:A(import.meta.url).next},o),[]}class T extends f{constructor(e){super(),v(this,e,M,null,w,{})}}export{T as default};
