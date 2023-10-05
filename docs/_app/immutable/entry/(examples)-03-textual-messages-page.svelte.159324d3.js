var p=Object.defineProperty;var y=(i,e,t)=>e in i?p(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var l=(i,e,t)=>(y(i,typeof e!="symbol"?e+"":e,t),t);import{S as f,i as w,s as h,I as C,ac as v}from"../chunks/index.9fe14626.js";import{d as a,g as m,s as g}from"../chunks/store.476c3091.js";import{d as I}from"../chunks/index.c056099e.js";const b=`# Textual Messages

Most of the messages we saw in the previous example were defined with the \`message\` keyword. They are considered *binary* messages. This means that when somebody wants to send them, they serialize them into bits and bytes of binary data.

The disadvantage with binary messages is that they're not human readable.

## Hardware wallets and blind signing

When working with dangerous contracts that handle a lot of money, users are encouraged to use hardware wallets like [Ledger](https://www.ledger.com/). Hardware wallets cannot decode binary messages to confirm to the user what they're actually signing. Tact supports textual messages for this reason, since they're human readable and can easily be confirmed with users, eliminating phishing risks.

Textual messages are limited because they cannot contain arguments. Future versions of Tact will add this functionality.

## Using the comment field

If you've ever made a transfer using a TON wallet, you probably noticed that you can add a *comment* (also known as a *memo* or a *tag*). This is how textual messages are sent.

Receivers for textual messages just define the string that they expect. Tact automatically does string matching and calls the matching receiver when a comment message arrives.`,B=`import "@stdlib/deploy";

contract Receivers with Deployable {

    val: Int as int64;
 
    init() {
        self.val = 0;
    }
 
    // this receiver is called when the string "increment" is received in an incoming string comment message
    receive("increment") {
        self.val = self.val + 1;
    }

    // this receiver is called when the string "decrement" is received in an incoming string comment message
    receive("decrement") {
        self.val = self.val - 1;
    }

    // this receiver is called when the string "increment by 2" is received in an incoming string comment message
    receive("increment by 2") {
        self.val = self.val + 2;
    }

    // if none of the previous receivers match the comment string, this one is called
    receive(msg: String) {
        dump("unknown textual message received:");
        dump(msg);
    }
 
    get fun value(): Int {
        return self.val;
    }
}`;function x(i){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(i.queryId,64)}}async function A(){const i=a.Cell.fromBase64("te6ccgECFAEAAzkAART/APSkE/S88sgLAQIBYgIDApjQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxZ2zzy4ILI+EMBzH8BygABAco/ye1UEQQCAVgLDAKg7aLt+wGSMH/gcCHXScIflTAg1wsf3iCCEJRqmLa6jqgw0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yfhCAXBt2zx/4MAAkTDjDXAFBgE6bW0ibrOZWyBu8tCAbyIBkTLiECRwAwSAQlAj2zwHAv4g+QEggvDE+NcjEu3971t77HgzvbsWLRURvXipEq7Q8mN69lVyrrqVW6R/2zHgIILwhZFbG/WUP9KFO7ZgM4rKz6450fc1VJzvkiJVqZRazD66lVulf9sx4ILwbQQ3oh2e8DaswSurTuOGgJ8VUuWUzmc2xPag4hYwKFG64wIgCQoByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsACACYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAAMMKYCf9sxAHLXScIfjjGAINchjQhdW5rbm93biB0ZXh0dWFsIG1lc3NhZ2UgcmVjZWl2ZWQ6g/hQw/hQwf9sx4DAAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSAIBSA0OABGwr7tRNDSAAGACAWoPEABzp3caGrS4MzmdF5eotqmjM6iooZmYoS05sbgioyqYu7IxPDQYpCuavTq1O7GbNKmbM6upsicbNKUxwQINpYG2ebZ4YxESATztRNDUAfhj0gABlNI/ATHgMPgo1wsKgwm68uCJ2zwTAAIgAAJw"),e=a.Cell.fromBase64("te6cckECFgEAA0MAAQHAAQEFofm/AgEU/wD0pBP0vPLICwMCAWIMBAIBWAsFAgFICgYCAWoJBwINpYG2ebZ4YxQIAAIgAHOndxoatLgzOZ0Xl6i2qaMzqKihmZihLTmxuCKjKpi7sjE8NBikK5q9OrU7sZs0qZszq6myJxs0pTHBABGwr7tRNDSAAGAAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSAKY0AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8Wds88uCCyPhDAcx/AcoAAQHKP8ntVBQNAqDtou37AZIwf+BwIddJwh+VMCDXCx/eIIIQlGqYtrqOqDDTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J+EIBcG3bPH/gwACRMOMNcBEOAv4g+QEggvDE+NcjEu3971t77HgzvbsWLRURvXipEq7Q8mN69lVyrrqVW6R/2zHgIILwhZFbG/WUP9KFO7ZgM4rKz6450fc1VJzvkiJVqZRazD66lVulf9sx4ILwbQQ3oh2e8DaswSurTuOGgJ8VUuWUzmc2xPag4hYwKFG64wIgEA8ActdJwh+OMYAg1yGNCF1bmtub3duIHRleHR1YWwgbWVzc2FnZSByZWNlaXZlZDqD+FDD+FDB/2zHgMAAMMKYCf9sxATptbSJus5lbIG7y0IBvIgGRMuIQJHADBIBCUCPbPBIByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsAEwCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAE87UTQ1AH4Y9IAAZTSPwEx4DD4KNcLCoMJuvLgids8FQACcCfBbSE=");let t=a.beginCell();t.storeRef(e),t.storeUint(0,1);const r=t.endCell();return{code:i,data:r}}const k={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}},z=[{name:"StateInit",header:null,fields:[{name:"code",type:{kind:"simple",type:"cell",optional:!1}},{name:"data",type:{kind:"simple",type:"cell",optional:!1}}]},{name:"Context",header:null,fields:[{name:"bounced",type:{kind:"simple",type:"bool",optional:!1}},{name:"sender",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"raw",type:{kind:"simple",type:"slice",optional:!1}}]},{name:"SendParameters",header:null,fields:[{name:"bounce",type:{kind:"simple",type:"bool",optional:!1}},{name:"to",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"mode",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"body",type:{kind:"simple",type:"cell",optional:!0}},{name:"code",type:{kind:"simple",type:"cell",optional:!0}},{name:"data",type:{kind:"simple",type:"cell",optional:!0}}]},{name:"Deploy",header:2490013878,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"DeployOk",header:2952335191,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"FactoryDeploy",header:1829761339,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}},{name:"cashback",type:{kind:"simple",type:"address",optional:!1}}]}],D=[{name:"value",arguments:[],returnType:{kind:"simple",type:"int",optional:!1,format:257}}],Q=[{receiver:"internal",message:{kind:"text",text:"increment"}},{receiver:"internal",message:{kind:"text",text:"decrement"}},{receiver:"internal",message:{kind:"text",text:"increment by 2"}},{receiver:"internal",message:{kind:"text"}},{receiver:"internal",message:{kind:"typed",type:"Deploy"}}];class c{constructor(e,t){l(this,"address");l(this,"init");l(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"FactoryDeploy",header:1829761339,fields:[]}],types:z,getters:D,receivers:Q,errors:k});this.address=e,this.init=t}static async init(){return await A()}static async fromInit(){const e=await A(),t=a.contractAddress(0,e);return new c(t,e)}static fromAddress(e){return new c(e)}async send(e,t,r,n){let s=null;if(n==="increment"&&(s=a.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n==="decrement"&&(s=a.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n==="increment by 2"&&(s=a.beginCell().storeUint(0,32).storeStringTail(n).endCell()),typeof n=="string"&&(s=a.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n&&typeof n=="object"&&!(n instanceof a.Slice)&&n.$$type==="Deploy"&&(s=a.beginCell().store(x(n)).endCell()),s===null)throw new Error("Invalid message type");await e.internal(t,{...r,body:s})}async getValue(e){let t=new a.TupleBuilder;return(await e.get("value",t.build())).stack.readBigNumber()}}function H(i,e,t){let r;C(i,g,o=>t(2,r=o));let n,s;return v(g,r={markdown:b,tactCode:B,deploy:async()=>{const o=await I.Blockchain.create(),d=await o.treasury("deployer");n=d.getSender(),s=o.openContract(await c.fromInit());const u={[d.address.toString()]:"deployer",[s.address.toString()]:"contract"};return[[s],u,[await s.send(d.getSender(),{value:a.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{increment:async()=>[await s.send(n,{value:a.toNano(1)},"increment")],decrement:async()=>[await s.send(n,{value:a.toNano(1)},"decrement")],"increment by 2":async()=>[await s.send(n,{value:a.toNano(1)},"increment by 2")],"increment by 3":async()=>[await s.send(n,{value:a.toNano(1)},"increment by 3")]},getters:{value:async()=>await s.getValue()},prev:m(import.meta.url).prev,next:m(import.meta.url).next},r),[]}class K extends f{constructor(e){super(),w(this,e,H,null,h,{})}}export{K as default};
