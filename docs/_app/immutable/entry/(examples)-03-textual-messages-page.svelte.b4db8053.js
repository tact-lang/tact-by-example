var w=Object.defineProperty;var C=(r,e,n)=>e in r?w(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n;var c=(r,e,n)=>(C(r,typeof e!="symbol"?e+"":e,n),n);import{S as h,i as y,s as f,I as v,ac as I}from"../chunks/index.9fe14626.js";import{d as a,g as d,s as g}from"../chunks/store.380869d4.js";import{d as b}from"../chunks/index.b268dd33.js";const p=`# Textual Messages

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
}`;function H(r){return e=>{let n=e;n.storeUint(2490013878,32),n.storeUint(r.queryId,64)}}async function u(){const r=a.Cell.fromBase64("te6ccgECDgEAAvQAART/APSkE/S88sgLAQIBYgIDAubQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GLtRNDUAfhj0gABlNI/ATGOjjD4KNcLCoMJuvLgids84lnbPDDI+EMBzH8BygABAco/ye1UDQQCAVgLDAKY7aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEJRqmLa6jqMx0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yds8f+ABwACRMOMNcAUGARp/+EJwWAOAQgFtbds8BwL+IPkBIILwxPjXIxLt/e9be+x4M727Fi0VEb14qRKu0PJjevZVcq66lVukf9sx4CCC8IWRWxv1lD/ShTu2YDOKys+uOdH3NVSc75IiVamUWsw+upVbpX/bMeCC8G0EN6IdnvA2rMErq07jhoCfFVLllM5nNsT2oOIWMChRuuMCIAkKAc7IcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxZQA/oCcAHKaCNusyVus7GXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsACACYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAAMMKYCf9sxAHLXScIfjjGAINchjQhdW5rbm93biB0ZXh0dWFsIG1lc3NhZ2UgcmVjZWl2ZWQ6g/hQw/hQwf9sx4DAAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSAFFuawO1E0NQB+GPSAAGU0j8BMY6OMPgo1wsKgwm68uCJ2zzigNAAJw"),e=a.Cell.fromBase64("te6cckECEAEAAv4AAQHAAQEFofm/AgEU/wD0pBP0vPLICwMCAWIHBAIBWAYFAUW5rA7UTQ1AH4Y9IAAZTSPwExjo4w+CjXCwqDCbry4InbPOKA8Aubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSALm0AHQ0wMBcbDAAZF/kXDiAfpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiVRQUwNvBPhhAvhi7UTQ1AH4Y9IAAZTSPwExjo4w+CjXCwqDCbry4InbPOJZ2zwwyPhDAcx/AcoAAQHKP8ntVA8IApjtou37cCHXScIflTAg1wsf3gKSW3/gIYIQlGqYtrqOozHTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J2zx/4AHAAJEw4w1wDAkC/iD5ASCC8MT41yMS7f3vW3vseDO9uxYtFRG9eKkSrtDyY3r2VXKuupVbpH/bMeAggvCFkVsb9ZQ/0oU7tmAzisrPrjnR9zVUnO+SIlWplFrMPrqVW6V/2zHggvBtBDeiHZ7wNqzBK6tO44aAnxVS5ZTOZzbE9qDiFjAoUbrjAiALCgBy10nCH44xgCDXIY0IXVua25vd24gdGV4dHVhbCBtZXNzYWdlIHJlY2VpdmVkOoP4UMP4UMH/bMeAwAAwwpgJ/2zEBGn/4QnBYA4BCAW1t2zwNAc7IcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxZQA/oCcAHKaCNusyVus7GXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsADgCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAACcNYynXI=");let n=a.beginCell();n.storeRef(e),n.storeUint(0,1);const i=n.endCell();return{code:r,data:i}}const x={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class l{constructor(e,n){c(this,"address");c(this,"init");c(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]}],errors:x});this.address=e,this.init=n}static async init(){return await u()}static async fromInit(){const e=await u(),n=a.contractAddress(0,e);return new l(n,e)}static fromAddress(e){return new l(e)}async send(e,n,i,t){let s=null;if(t==="increment"&&(s=a.beginCell().storeUint(0,32).storeStringTail(t).endCell()),t==="decrement"&&(s=a.beginCell().storeUint(0,32).storeStringTail(t).endCell()),t==="increment by 2"&&(s=a.beginCell().storeUint(0,32).storeStringTail(t).endCell()),typeof t=="string"&&(s=a.beginCell().storeUint(0,32).storeStringTail(t).endCell()),t&&typeof t=="object"&&!(t instanceof a.Slice)&&t.$$type==="Deploy"&&(s=a.beginCell().store(H(t)).endCell()),s===null)throw new Error("Invalid message type");await e.internal(n,{...i,body:s})}async getValue(e){let n=new a.TupleBuilder;return(await e.get("value",n.build())).stack.readBigNumber()}}function M(r,e,n){let i;v(r,g,o=>n(2,i=o));let t,s;return I(g,i={markdown:p,tactCode:B,deploy:async()=>{const o=await b.Blockchain.create(),A=await o.treasury("deployer");t=A.getSender(),s=o.openContract(await l.fromInit());const m={[A.address.toString()]:"deployer",[s.address.toString()]:"contract"};return[[s],m,[await s.send(A.getSender(),{value:a.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{increment:async()=>[await s.send(t,{value:a.toNano(1)},"increment")],decrement:async()=>[await s.send(t,{value:a.toNano(1)},"decrement")],"increment by 2":async()=>[await s.send(t,{value:a.toNano(1)},"increment by 2")],"increment by 3":async()=>[await s.send(t,{value:a.toNano(1)},"increment by 3")]},getters:{value:async()=>await s.getValue()},prev:d(import.meta.url).prev,next:d(import.meta.url).next},i),[]}class V extends h{constructor(e){super(),y(this,e,M,null,f,{})}}export{V as default};
