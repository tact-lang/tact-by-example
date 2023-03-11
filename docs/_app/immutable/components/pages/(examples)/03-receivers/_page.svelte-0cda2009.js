var m=Object.defineProperty;var f=(a,n,e)=>n in a?m(a,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[n]=e;var c=(a,n,e)=>(f(a,typeof n!="symbol"?n+"":n,e),e);import{S as w,i as C,s as h,I,ac as b}from"../../../../chunks/index-1d4083c1.js";import{d as s,g as A,s as d}from"../../../../chunks/store-3208a846.js";import{d as v}from"../../../../chunks/index-ad3893c0.js";const p=`# Receivers and Messages

In TON, users interact with contracts by sending them messages. Different contracts can only communicate with each other by sending each other messages.

Since users actually use wallet contracts, messages from users are actually messages coming from just another contract.

Sending a message to a contract costs gas and is processed in the course of a transaction. The transaction executes when validators add the transaction to a new block. This can take a few seconds. Messages are also able to change the contract persistent state.

## Receivers

Contract methods named \`receive()\` are the handlers that process each incoming message type. Tact will automatically route the correct message to the correct receiver listening for it.

## Hardware wallets and blind signing

When working with dangerous contracts that handle a lot of money, users are encouraged to use hardware wallets like [Ledger](https://www.ledger.com/). Hardware wallets cannot decode binary messages to confirm to the user what they're actually signing. Tact supports textual messages for this reason, since they can easily be confirmed with users, eliminating phishing risks.`,B=`import "@stdlib/deploy";

message Add {
    amount: Int as uint32;
}

message Subtract {
    amount: Int as uint32;
}

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
 
    // a textual string message, using the comment field of a transfer (great for Ledger)
    receive("increment") {
        self.val = self.val + 1;
    }

    // a different textual string message, you can have as many as you want
    receive("decrement") {
        self.val = self.val - 1;
    }

    // binary message that can carry input arguments
    receive(msg: Add) {
        self.val = self.val + msg.amount;
    }

    // a different binary message, although its format is identical
    receive(msg: Subtract) {
        self.val = self.val - msg.amount;
    }

    // binary messages can hold multiple arguments
    receive(msg: MultiMath) {
        self.val = self.val + msg.add;
        self.val = self.val - msg.subtract;
        self.val = self.val * msg.multiply;
    }
 
    get fun value(): Int {
        return self.val;
    }
}`;function M(a){return n=>{let e=n;e.storeUint(2490013878,32),e.storeUint(a.queryId,64)}}function D(a){return n=>{let e=n;e.storeUint(2278832834,32),e.storeUint(a.amount,32)}}function H(a){return n=>{let e=n;e.storeUint(1552846265,32),e.storeUint(a.amount,32)}}function S(a){return n=>{let e=n;e.storeUint(2221071617,32),e.storeUint(a.add,32),e.storeUint(a.subtract,32),e.storeUint(a.multiply,32)}}async function g(){const a=s.Cell.fromBase64("te6ccgECDgEAAvIAART/APSkE/S88sgLAQIBYgIDAubQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GLtRNDUAfhj0gABlNI/ATGOjjD4KNcLCoMJuvLgids84lnbPDDI+EMBzH8BygABAco/ye1UDQQCAVgLDAPg7aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEIfUOsK6jhQx0x8BghCH1DrCuvLggdMfATGgf+AhghBcjo25uo4UMdMfAYIQXI6Nubry4IHTHwExoX/gIYIQhGLdAbrjAiGCEJRqmLa64wIBwACRMOMNcAUGBwA+MdMfAYIQhGLdAbry4IHTH9Mf0x9VIGwTWqBYoQGofwFGMdMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8nbPH8IAKz5ASCC8MT41yMS7f3vW3vseDO9uxYtFRG9eKkSrtDyY3r2VXKuupUwpH/bMeCC8IWRWxv1lD/ShTu2YDOKys+uOdH3NVSc75IiVamUWsw+upSlf9sx4AEaf/hCcFgDgEIBbW3bPAkBzshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFlAD+gJwAcpoI26zJW6zsZczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAKAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMALm7vRgnBc7D1dLK57HoTsOdZKhRtmgnCd1jUtK2R8syLTry398WI5gnAgVcAbgGdjlM5YOq5HJbLDgnAb1J3vlUWW8cdT094FWcMmgnCdl05as07LczoOlm2UZuikgBRbmsDtRNDUAfhj0gABlNI/ATGOjjD4KNcLCoMJuvLgids84oDQACcA=="),n=s.Cell.fromBase64("te6cckECEAEAAvwAAQHAAQEFofm/AgEU/wD0pBP0vPLICwMCAWIHBAIBWAYFAUW5rA7UTQ1AH4Y9IAAZTSPwExjo4w+CjXCwqDCbry4InbPOKA8Aubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSALm0AHQ0wMBcbDAAZF/kXDiAfpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiVRQUwNvBPhhAvhi7UTQ1AH4Y9IAAZTSPwExjo4w+CjXCwqDCbry4InbPOJZ2zwwyPhDAcx/AcoAAQHKP8ntVA8IA+Dtou37cCHXScIflTAg1wsf3gKSW3/gIYIQh9Q6wrqOFDHTHwGCEIfUOsK68uCB0x8BMaB/4CGCEFyOjbm6jhQx0x8BghBcjo25uvLggdMfATGhf+AhghCEYt0BuuMCIYIQlGqYtrrjAgHAAJEw4w1wDgoJAKz5ASCC8MT41yMS7f3vW3vseDO9uxYtFRG9eKkSrtDyY3r2VXKuupUwpH/bMeCC8IWRWxv1lD/ShTu2YDOKys+uOdH3NVSc75IiVamUWsw+upSlf9sx4AFGMdMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8nbPH8LARp/+EJwWAOAQgFtbds8DAHOyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WUAP6AnABymgjbrMlbrOxlzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AA0AmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwAPjHTHwGCEIRi3QG68uCB0x/TH9MfVSBsE1qgWKEBqH8AAnCY/MTc");let e=s.beginCell();e.storeRef(n),e.storeUint(0,1);const o=e.endCell();return{code:a,data:o}}const T={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class l{constructor(n,e){c(this,"address");c(this,"init");c(this,"abi",{errors:T});this.address=n,this.init=e}static async init(){return await g()}static async fromInit(){const n=await g(),e=s.contractAddress(0,n);return new l(e,n)}static fromAddress(n){return new l(n)}async send(n,e,o,t){let r=null;if(t==="increment"&&(r=s.beginCell().storeUint(0,32).storeStringTail(t).endCell()),t==="decrement"&&(r=s.beginCell().storeUint(0,32).storeStringTail(t).endCell()),t&&typeof t=="object"&&!(t instanceof s.Slice)&&t.$$type==="Add"&&(r=s.beginCell().store(D(t)).endCell()),t&&typeof t=="object"&&!(t instanceof s.Slice)&&t.$$type==="Subtract"&&(r=s.beginCell().store(H(t)).endCell()),t&&typeof t=="object"&&!(t instanceof s.Slice)&&t.$$type==="MultiMath"&&(r=s.beginCell().store(S(t)).endCell()),t&&typeof t=="object"&&!(t instanceof s.Slice)&&t.$$type==="Deploy"&&(r=s.beginCell().store(M(t)).endCell()),r===null)throw new Error("Invalid message type");await n.internal(e,{...o,body:r})}async getValue(n){let e=new s.TupleBuilder;return(await n.get("value",e.build())).stack.readBigNumber()}}function x(a,n,e){let o;I(a,d,i=>e(2,o=i));let t,r;return b(d,o={markdown:p,tactCode:B,deploy:async()=>{const i=await v.Blockchain.create(),u=await i.treasury("deployer");t=u.getSender(),r=i.openContract(await l.fromInit());const y={[u.address.toString()]:"deployer",[r.address.toString()]:"contract"};return[r,y,[await r.send(u.getSender(),{value:s.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{increment:async()=>[await r.send(t,{value:s.toNano(1)},"increment")],decrement:async()=>[await r.send(t,{value:s.toNano(1)},"decrement")],"Add{3}":async()=>[await r.send(t,{value:s.toNano(1)},{$$type:"Add",amount:3n})],"Subtract{2}":async()=>[await r.send(t,{value:s.toNano(1)},{$$type:"Subtract",amount:2n})],"MultiMath{1,0,2}":async()=>[await r.send(t,{value:s.toNano(1)},{$$type:"MultiMath",add:1n,subtract:0n,multiply:2n})],"MultiMath{0,3,3}":async()=>[await r.send(t,{value:s.toNano(1)},{$$type:"MultiMath",add:0n,subtract:3n,multiply:3n})]},getters:{value:async()=>await r.getValue()},prev:A(import.meta.url).prev,next:A(import.meta.url).next},o),[]}class G extends w{constructor(n){super(),C(this,n,x,null,h,{})}}export{G as default};
