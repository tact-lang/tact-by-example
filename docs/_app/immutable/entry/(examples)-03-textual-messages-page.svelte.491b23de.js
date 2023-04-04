var w=Object.defineProperty;var y=(r,e,t)=>e in r?w(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var c=(r,e,t)=>(y(r,typeof e!="symbol"?e+"":e,t),t);import{S as h,i as C,s as f,I as v,ac as b}from"../chunks/index.9fe14626.js";import{d as a,g as d,s as g}from"../chunks/store.d3ab02ad.js";import{d as p}from"../chunks/index.78404594.js";const I=`# Textual Messages

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
}`;function x(r){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(r.queryId,64)}}async function m(){const r=a.Cell.fromBase64("te6ccgECEwEAAx4AART/APSkE/S88sgLAQIBYgIDApTQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxZ2zwwyPhDAcx/AcoAAQHKP8ntVBAEAgFYCgsCru2i7ftwIddJwh+VMCDXCx/eApJbf+AhghCUapi2uo6uMdMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8l/+EJwWAOAQgFtbds8f+ABwACRMOMNcAUGAcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AAcC/iD5ASCC8MT41yMS7f3vW3vseDO9uxYtFRG9eKkSrtDyY3r2VXKuupVbpH/bMeAggvCFkVsb9ZQ/0oU7tmAzisrPrjnR9zVUnO+SIlWplFrMPrqVW6V/2zHggvBtBDeiHZ7wNqzBK6tO44aAnxVS5ZTOZzbE9qDiFjAoUbrjAiAICQCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAAMMKYCf9sxAHLXScIfjjGAINchjQhdW5rbm93biB0ZXh0dWFsIG1lc3NhZ2UgcmVjZWl2ZWQ6g/hQw/hQwf9sx4DAAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSAIBSAwNABGwr7tRNDSAAGACAWoODwBzp3caGrS4MzmdF5eotqminDUsoKEqIqWjqrO7vCK5oLO8mKIoqik2sqM8Ghm8NKUZGxsomzy6orUlQQINpYG2ebZ4YxARATztRNDUAfhj0gABlNI/ATHgMPgo1wsKgwm68uCJ2zwSAAIgAAJw"),e=a.Cell.fromBase64("te6cckECFQEAAygAAQHAAQEFofm/AgEU/wD0pBP0vPLICwMCAWIMBAIBWAsFAgFICgYCAWoJBwINpYG2ebZ4YxMIAAIgAHOndxoatLgzOZ0Xl6i2qaKcNSygoSoipaOqs7u8Irmgs7yYoiiqKTayozwaGbw0pRkbGyibPLqitSVBABGwr7tRNDSAAGAAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSAKU0AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8Wds8MMj4QwHMfwHKAAEByj/J7VQTDQKu7aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEJRqmLa6jq4x0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yX/4QnBYA4BCAW1t2zx/4AHAAJEw4w1wEQ4C/iD5ASCC8MT41yMS7f3vW3vseDO9uxYtFRG9eKkSrtDyY3r2VXKuupVbpH/bMeAggvCFkVsb9ZQ/0oU7tmAzisrPrjnR9zVUnO+SIlWplFrMPrqVW6V/2zHggvBtBDeiHZ7wNqzBK6tO44aAnxVS5ZTOZzbE9qDiFjAoUbrjAiAQDwBy10nCH44xgCDXIY0IXVua25vd24gdGV4dHVhbCBtZXNzYWdlIHJlY2VpdmVkOoP4UMP4UMH/bMeAwAAwwpgJ/2zEByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsAEgCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAE87UTQ1AH4Y9IAAZTSPwEx4DD4KNcLCoMJuvLgids8FAACcNsuYkA=");let t=a.beginCell();t.storeRef(e),t.storeUint(0,1);const i=t.endCell();return{code:r,data:i}}const M={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class l{constructor(e,t){c(this,"address");c(this,"init");c(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]}],errors:M});this.address=e,this.init=t}static async init(){return await m()}static async fromInit(){const e=await m(),t=a.contractAddress(0,e);return new l(t,e)}static fromAddress(e){return new l(e)}async send(e,t,i,n){let s=null;if(n==="increment"&&(s=a.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n==="decrement"&&(s=a.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n==="increment by 2"&&(s=a.beginCell().storeUint(0,32).storeStringTail(n).endCell()),typeof n=="string"&&(s=a.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n&&typeof n=="object"&&!(n instanceof a.Slice)&&n.$$type==="Deploy"&&(s=a.beginCell().store(x(n)).endCell()),s===null)throw new Error("Invalid message type");await e.internal(t,{...i,body:s})}async getValue(e){let t=new a.TupleBuilder;return(await e.get("value",t.build())).stack.readBigNumber()}}function D(r,e,t){let i;v(r,g,o=>t(2,i=o));let n,s;return b(g,i={markdown:I,tactCode:B,deploy:async()=>{const o=await p.Blockchain.create(),A=await o.treasury("deployer");n=A.getSender(),s=o.openContract(await l.fromInit());const u={[A.address.toString()]:"deployer",[s.address.toString()]:"contract"};return[[s],u,[await s.send(A.getSender(),{value:a.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{increment:async()=>[await s.send(n,{value:a.toNano(1)},"increment")],decrement:async()=>[await s.send(n,{value:a.toNano(1)},"decrement")],"increment by 2":async()=>[await s.send(n,{value:a.toNano(1)},"increment by 2")],"increment by 3":async()=>[await s.send(n,{value:a.toNano(1)},"increment by 3")]},getters:{value:async()=>await s.getValue()},prev:d(import.meta.url).prev,next:d(import.meta.url).next},i),[]}class T extends h{constructor(e){super(),C(this,e,D,null,f,{})}}export{T as default};
