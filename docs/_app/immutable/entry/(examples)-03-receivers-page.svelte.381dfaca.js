var p=Object.defineProperty;var A=(s,n,e)=>n in s?p(s,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[n]=e;var l=(s,n,e)=>(A(s,typeof n!="symbol"?n+"":n,e),e);import{S as f,i as h,s as v,I as w,ac as C}from"../chunks/index.9fe14626.js";import{d as a,g as u,s as m}from"../chunks/store.476c3091.js";import{d as b}from"../chunks/index.c056099e.js";const I=`# Receivers and Messages

In TON, users interact with contracts by sending them messages. Different contracts can only communicate with each other by sending each other messages.

Since users actually use wallet contracts, messages from users are actually messages coming from just another contract.

Sending a message to a contract costs gas and is processed in the course of a transaction. The transaction executes when validators add the transaction to a new block. This can take a few seconds. Messages are also able to change the contract's persistent state.

## Receivers

When designing your contract, make a list of every operation that your contract supports, then, define a message for each operation, and finally, implement a handler for each message containing the logic of what to do when it arrives.

Contract methods named \`receive()\` are the handlers that process each incoming message type. Tact will automatically route every incoming message to the correct receiver listening for it according to its type. A message is only handled by one receiver.

Messages are defined using the \`message\` keyword. They can carry input arguments. Notice that for integers, you must define the encoding size, just like in state variables. When somebody sends the message, they serialize it over the wire.`,B=`import "@stdlib/deploy";

// this message will cause our contract to add an amount to the counter
message Add {
    amount: Int as uint32;
}

// this message will cause our contract to subtract an amount from the counter
message Subtract {
    amount: Int as uint32;
}

// this message will cause our contract to do a complex math operation on the counter
message MultiMath {
    add: Int as uint32;
    subtract: Int as uint32;
    multiply: Int as uint32;
}

contract Receivers with Deployable {

    val: Int as int64;
 
    init() {
        self.val = 0;
    }

    // handler for the "Add" message - this is a binary message that has an input argument (amount)
    receive(msg: Add) {
        self.val = self.val + msg.amount;
    }

    // handler for the "Subtract" message - this is a different binary message although its format is identical
    receive(msg: Subtract) {
        self.val = self.val - msg.amount;
    }

    // handler for the "MultiMath" message - this is a binary message that holds multiple input arguments
    receive(msg: MultiMath) {
        self.val = self.val + msg.add;
        self.val = self.val - msg.subtract;
        self.val = self.val * msg.multiply;
    }

    // handler for "increment" textual message - this is a textual string message, these cannot carry input arguments
    receive("increment") {
        self.val = self.val + 1;
    }

    // handler for "decrement" textual message - this is a different textual string message, you can have as many as you want
    receive("decrement") {
        self.val = self.val - 1;
    }
 
    get fun value(): Int {
        return self.val;
    }
}`;function M(s){return n=>{let e=n;e.storeUint(2490013878,32),e.storeUint(s.queryId,64)}}function k(s){return n=>{let e=n;e.storeUint(2278832834,32),e.storeUint(s.amount,32)}}function D(s){return n=>{let e=n;e.storeUint(1552846265,32),e.storeUint(s.amount,32)}}function E(s){return n=>{let e=n;e.storeUint(2221071617,32),e.storeUint(s.add,32),e.storeUint(s.subtract,32),e.storeUint(s.multiply,32)}}async function g(){const s=a.Cell.fromBase64("te6ccgECFAEAAzcAART/APSkE/S88sgLAQIBYgIDApjQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxZ2zzy4ILI+EMBzH8BygABAco/ye1UEQQCAVgLDAPe7aLt+wGSMH/gcCHXScIflTAg1wsf3iCCEIfUOsK6jhQw0x8BghCH1DrCuvLggdMfATGgf+AgghBcjo25uo4UMNMfAYIQXI6Nubry4IHTHwExoX/gIIIQhGLdAbrjAiCCEJRqmLa64wLAAJEw4w1wBQYHAD4w0x8BghCEYt0BuvLggdMf0x/TH1UgbBNaoFihAah/AVAw0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yfhCAXBt2zx/CACs+QEggvDE+NcjEu3971t77HgzvbsWLRURvXipEq7Q8mN69lVyrrqVMKR/2zHggvCFkVsb9ZQ/0oU7tmAzisrPrjnR9zVUnO+SIlWplFrMPrqUpX/bMeABOm1tIm6zmVsgbvLQgG8iAZEy4hAkcAMEgEJQI9s8CQHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAKAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMALm7vRgnBc7D1dLK57HoTsOdZKhRtmgnCd1jUtK2R8syLTry398WI5gnAgVcAbgGdjlM5YOq5HJbLDgnAb1J3vlUWW8cdT094FWcMmgnCdl05as07LczoOlm2UZuikgCAUgNDgARsK+7UTQ0gABgAgFqDxAAc6d3Ghq0uDM5nReXqLaysqWyuym0NJkYuDyZOSqiMiU1tymauyOlqqs6qjs3qzOhNyqyJaOYtTU7pEECDaWBtnm2eGMREgE87UTQ1AH4Y9IAAZTSPwEx4DD4KNcLCoMJuvLgids8EwACIAACcA=="),n=a.Cell.fromBase64("te6cckECFgEAA0EAAQHAAQEFofm/AgEU/wD0pBP0vPLICwMCAWIMBAIBWAsFAgFICgYCAWoJBwINpYG2ebZ4YxQIAAIgAHOndxoatLgzOZ0Xl6i2srKlsrsptDSZGLg8mTkqojIlNbcpmrsjpaqrOqo7N6szoTcqsiWjmLU1O6RBABGwr7tRNDSAAGAAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSAKY0AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8Wds88uCCyPhDAcx/AcoAAQHKP8ntVBQNA97tou37AZIwf+BwIddJwh+VMCDXCx/eIIIQh9Q6wrqOFDDTHwGCEIfUOsK68uCB0x8BMaB/4CCCEFyOjbm6jhQw0x8BghBcjo25uvLggdMfATGhf+AgghCEYt0BuuMCIIIQlGqYtrrjAsAAkTDjDXATDw4ArPkBIILwxPjXIxLt/e9be+x4M727Fi0VEb14qRKu0PJjevZVcq66lTCkf9sx4ILwhZFbG/WUP9KFO7ZgM4rKz6450fc1VJzvkiJVqZRazD66lKV/2zHgAVAw0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yfhCAXBt2zx/EAE6bW0ibrOZWyBu8tCAbyIBkTLiECRwAwSAQlAj2zwRAcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7ABIAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwAPjDTHwGCEIRi3QG68uCB0x/TH9MfVSBsE1qgWKEBqH8BPO1E0NQB+GPSAAGU0j8BMeAw+CjXCwqDCbry4InbPBUAAnAo1rzV");let e=a.beginCell();e.storeRef(n),e.storeUint(0,1);const i=e.endCell();return{code:s,data:i}}const S={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}},Q=[{name:"StateInit",header:null,fields:[{name:"code",type:{kind:"simple",type:"cell",optional:!1}},{name:"data",type:{kind:"simple",type:"cell",optional:!1}}]},{name:"Context",header:null,fields:[{name:"bounced",type:{kind:"simple",type:"bool",optional:!1}},{name:"sender",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"raw",type:{kind:"simple",type:"slice",optional:!1}}]},{name:"SendParameters",header:null,fields:[{name:"bounce",type:{kind:"simple",type:"bool",optional:!1}},{name:"to",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"mode",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"body",type:{kind:"simple",type:"cell",optional:!0}},{name:"code",type:{kind:"simple",type:"cell",optional:!0}},{name:"data",type:{kind:"simple",type:"cell",optional:!0}}]},{name:"Deploy",header:2490013878,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"DeployOk",header:2952335191,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"FactoryDeploy",header:1829761339,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}},{name:"cashback",type:{kind:"simple",type:"address",optional:!1}}]},{name:"Add",header:2278832834,fields:[{name:"amount",type:{kind:"simple",type:"uint",optional:!1,format:32}}]},{name:"Subtract",header:1552846265,fields:[{name:"amount",type:{kind:"simple",type:"uint",optional:!1,format:32}}]},{name:"MultiMath",header:2221071617,fields:[{name:"add",type:{kind:"simple",type:"uint",optional:!1,format:32}},{name:"subtract",type:{kind:"simple",type:"uint",optional:!1,format:32}},{name:"multiply",type:{kind:"simple",type:"uint",optional:!1,format:32}}]}],x=[{name:"value",arguments:[],returnType:{kind:"simple",type:"int",optional:!1,format:257}}],L=[{receiver:"internal",message:{kind:"typed",type:"Add"}},{receiver:"internal",message:{kind:"typed",type:"Subtract"}},{receiver:"internal",message:{kind:"typed",type:"MultiMath"}},{receiver:"internal",message:{kind:"text",text:"increment"}},{receiver:"internal",message:{kind:"text",text:"decrement"}},{receiver:"internal",message:{kind:"typed",type:"Deploy"}}];class c{constructor(n,e){l(this,"address");l(this,"init");l(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"FactoryDeploy",header:1829761339,fields:[]},{name:"Add",header:2278832834,fields:[]},{name:"Subtract",header:1552846265,fields:[]},{name:"MultiMath",header:2221071617,fields:[]}],types:Q,getters:x,receivers:L,errors:S});this.address=n,this.init=e}static async init(){return await g()}static async fromInit(){const n=await g(),e=a.contractAddress(0,n);return new c(e,n)}static fromAddress(n){return new c(n)}async send(n,e,i,t){let r=null;if(t&&typeof t=="object"&&!(t instanceof a.Slice)&&t.$$type==="Add"&&(r=a.beginCell().store(k(t)).endCell()),t&&typeof t=="object"&&!(t instanceof a.Slice)&&t.$$type==="Subtract"&&(r=a.beginCell().store(D(t)).endCell()),t&&typeof t=="object"&&!(t instanceof a.Slice)&&t.$$type==="MultiMath"&&(r=a.beginCell().store(E(t)).endCell()),t==="increment"&&(r=a.beginCell().storeUint(0,32).storeStringTail(t).endCell()),t==="decrement"&&(r=a.beginCell().storeUint(0,32).storeStringTail(t).endCell()),t&&typeof t=="object"&&!(t instanceof a.Slice)&&t.$$type==="Deploy"&&(r=a.beginCell().store(M(t)).endCell()),r===null)throw new Error("Invalid message type");await n.internal(e,{...i,body:r})}async getValue(n){let e=new a.TupleBuilder;return(await n.get("value",e.build())).stack.readBigNumber()}}function T(s,n,e){let i;w(s,m,o=>e(2,i=o));let t,r;return C(m,i={markdown:I,tactCode:B,deploy:async()=>{const o=await b.Blockchain.create(),d=await o.treasury("deployer");t=d.getSender(),r=o.openContract(await c.fromInit());const y={[d.address.toString()]:"deployer",[r.address.toString()]:"contract"};return[[r],y,[await r.send(d.getSender(),{value:a.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{increment:async()=>[await r.send(t,{value:a.toNano(1)},"increment")],decrement:async()=>[await r.send(t,{value:a.toNano(1)},"decrement")],"Add{3}":async()=>[await r.send(t,{value:a.toNano(1)},{$$type:"Add",amount:3n})],"Subtract{2}":async()=>[await r.send(t,{value:a.toNano(1)},{$$type:"Subtract",amount:2n})],"MultiMath{1,0,2}":async()=>[await r.send(t,{value:a.toNano(1)},{$$type:"MultiMath",add:1n,subtract:0n,multiply:2n})],"MultiMath{0,3,3}":async()=>[await r.send(t,{value:a.toNano(1)},{$$type:"MultiMath",add:0n,subtract:3n,multiply:3n})]},getters:{value:async()=>await r.getValue()},prev:u(import.meta.url).prev,next:u(import.meta.url).next},i),[]}class N extends f{constructor(n){super(),h(this,n,T,null,v,{})}}export{N as default};
