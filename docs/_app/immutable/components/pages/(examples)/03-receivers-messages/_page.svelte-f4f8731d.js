var y=Object.defineProperty;var C=(a,n,t)=>n in a?y(a,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[n]=t;var c=(a,n,t)=>(C(a,typeof n!="symbol"?n+"":n,t),t);import{S as m,i as I,s as f,I as h,ac as B}from"../../../../chunks/index-1d4083c1.js";import{d as s,s as g}from"../../../../chunks/store-ab11a47e.js";import{d as b,g as d}from"../../../../chunks/helpers-1ad14a18.js";const v=`# Receivers and Messages

In TON, users interact with contracts by sending them messages. Different contracts can only communicate with each other by sending each other messages.

Since users actually use wallet contracts, messages from users are actually messages coming from just another contract.

Sending a message to a contract costs gas and is processed in the course of a transaction. The transaction executes when validators add the transaction to a new block. This can take a few seconds. Messages are also able to change the contract persistent state.

## Receivers

Contract methods named \`receive()\` are the handlers that process each incoming message type. Tact will automatically route the correct message to the correct receiver listening for it. Use \`sender()\` to get the message sender.

## Hardware wallets and blind signing

When working with dangerous contracts that handle a lot of money, users are encouraged to use hardware wallets like [Ledger](https://www.ledger.com/). Hardware wallets cannot decode binary messages to confirm to the user what they're actually signing. Tact supports textual messages for this reason, since they can easily be confirmed with users, eliminating phishing risks.`,p=`import "@stdlib/deploy";

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
    lastSender: Address;
 
    init() {
        self.val = 0;
        self.lastSender = newAddress(0, 0); // zero address
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

    receive("hello") {
        // every message is sent from a specific contract address that you can get with sender()
        if (sender() != self.lastSender) {
            self.lastSender = sender();
            dump("hello new sender!");
        }
    }
 
    get fun value(): Int {
        return self.val;
    }
}`;function M(a){return n=>{let t=n;t.storeUint(2490013878,32),t.storeUint(a.queryId,64)}}function D(a){return n=>{let t=n;t.storeUint(2278832834,32),t.storeUint(a.amount,32)}}function E(a){return n=>{let t=n;t.storeUint(1552846265,32),t.storeUint(a.amount,32)}}function S(a){return n=>{let t=n;t.storeUint(2221071617,32),t.storeUint(a.add,32),t.storeUint(a.subtract,32),t.storeUint(a.multiply,32)}}async function w(){const a=s.Cell.fromBase64("te6ccgECEQEAA/oAART/APSkE/S88sgLAQIBYgIDAX7QAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GIEAgFYDQ4C/O1E0NQB+GPSAAGOKdI/+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJEmwSjo4w+CjXCwqDCbry4InbPOJa2zwwyPhDAcx/AcoAWQLKPwEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFsntVA8FA+jtou37cCHXScIflTAg1wsf3gKSW3/gIYIQh9Q6wrqOFjHTHwGCEIfUOsK68uCB0x8BMRKgAX/gIYIQXI6NubqOFjHTHwGCEFyOjbm68uCB0x8BMRKhAX/gIYIQhGLdAbrjAiGCEJRqmLa64wIBwACRMOMNcAYHCABEMdMfAYIQhGLdAbry4IHTH9Mf0x9VIGwTUEKgUAOhWKgBfwFGMdMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8nbPH8JAf75ASCC8MT41yMS7f3vW3vseDO9uxYtFRG9eKkSrtDyY3r2VXKuupcwAaQBf9sx4CCC8IWRWxv1lD/ShTu2YDOKys+uOdH3NVSc75IiVamUWsw+upcwAaUBf9sx4ILwVR9sPo1659mzrFO8qbb4LP8yL7FhE4IHdtFKP5O5OVG6DAEaf/hCcFgDgEIBbW3bPAoBzshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFlAD+gJwAcpoI26zJW6zsZczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wALAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAFKOJvhCIccFs44aMPhCjQRaGVsbG8gbmV3IHNlbmRlciGD+FDDef9sx4AC5u70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIApW5rA7UTQ1AH4Y9IAAY4p0j/6QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkSbBKOjjD4KNcLCoMJuvLgids84ts8gPEABocFMAyHIBywFwAcsAEsoHy//J0CDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiQACMA=="),n=s.Cell.fromBase64("te6cckECEwEABAQAAQHAAQEFofm/AgEU/wD0pBP0vPLICwMCAWIIBAIBWAcFApW5rA7UTQ1AH4Y9IAAY4p0j/6QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkSbBKOjjD4KNcLCoMJuvLgids84ts8gSBgACMAC5u70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIAX7QAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GIJAvztRNDUAfhj0gABjinSP/pAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiRJsEo6OMPgo1wsKgwm68uCJ2zziWts8MMj4QwHMfwHKAFkCyj8BINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxbJ7VQSCgPo7aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEIfUOsK6jhYx0x8BghCH1DrCuvLggdMfATESoAF/4CGCEFyOjbm6jhYx0x8BghBcjo25uvLggdMfATESoQF/4CGCEIRi3QG64wIhghCUapi2uuMCAcAAkTDjDXARDQsB/vkBIILwxPjXIxLt/e9be+x4M727Fi0VEb14qRKu0PJjevZVcq66lzABpAF/2zHgIILwhZFbG/WUP9KFO7ZgM4rKz6450fc1VJzvkiJVqZRazD66lzABpQF/2zHggvBVH2w+jXrn2bOsU7yptvgs/zIvsWETggd20Uo/k7k5UboMAFKOJvhCIccFs44aMPhCjQRaGVsbG8gbmV3IHNlbmRlciGD+FDDef9sx4AFGMdMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8nbPH8OARp/+EJwWAOAQgFtbds8DwHOyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WUAP6AnABymgjbrMlbrOxlzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7ABAAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwARDHTHwGCEIRi3QG68uCB0x/TH9MfVSBsE1BCoFADoVioAX8AaHBTAMhyAcsBcAHLABLKB8v/ydAg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4In27zm8");let t=s.beginCell();t.storeRef(n),t.storeUint(0,1);const i=t.endCell();return{code:a,data:i}}const H={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class u{constructor(n,t){c(this,"address");c(this,"init");c(this,"abi",{errors:H});this.address=n,this.init=t}static async init(){return await w()}static async fromInit(){const n=await w(),t=s.contractAddress(0,n);return new u(t,n)}static fromAddress(n){return new u(n)}async send(n,t,i,e){let r=null;if(e==="increment"&&(r=s.beginCell().storeUint(0,32).storeStringTail(e).endCell()),e==="decrement"&&(r=s.beginCell().storeUint(0,32).storeStringTail(e).endCell()),e&&typeof e=="object"&&!(e instanceof s.Slice)&&e.$$type==="Add"&&(r=s.beginCell().store(D(e)).endCell()),e&&typeof e=="object"&&!(e instanceof s.Slice)&&e.$$type==="Subtract"&&(r=s.beginCell().store(E(e)).endCell()),e&&typeof e=="object"&&!(e instanceof s.Slice)&&e.$$type==="MultiMath"&&(r=s.beginCell().store(S(e)).endCell()),e==="hello"&&(r=s.beginCell().storeUint(0,32).storeStringTail(e).endCell()),e&&typeof e=="object"&&!(e instanceof s.Slice)&&e.$$type==="Deploy"&&(r=s.beginCell().store(M(e)).endCell()),r===null)throw new Error("Invalid message type");await n.internal(t,{...i,body:r})}async getValue(n){let t=new s.TupleBuilder;return(await n.get("value",t.build())).stack.readBigNumber()}}function Q(a,n,t){let i;h(a,g,l=>t(3,i=l));let e,r,o;return B(g,i={markdown:v,tactCode:p,deploy:async()=>{const l=await b.Blockchain.create(),A=await l.treasury("deployer");return e=A.getSender(),r=(await l.treasury("another")).getSender(),o=l.openContract(await u.fromInit()),[o,[await o.send(A.getSender(),{value:s.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{increment:async()=>[await o.send(e,{value:s.toNano(1)},"increment")],decrement:async()=>[await o.send(e,{value:s.toNano(1)},"decrement")],"Add{3}":async()=>[await o.send(e,{value:s.toNano(1)},{$$type:"Add",amount:3n})],"Subtract{2}":async()=>[await o.send(e,{value:s.toNano(1)},{$$type:"Subtract",amount:2n})],"MultiMath{1,0,2}":async()=>[await o.send(e,{value:s.toNano(1)},{$$type:"MultiMath",add:1n,subtract:0n,multiply:2n})],"MultiMath{0,3,3}":async()=>[await o.send(e,{value:s.toNano(1)},{$$type:"MultiMath",add:0n,subtract:3n,multiply:3n})],"hello (from deployer)":async()=>[await o.send(e,{value:s.toNano(1)},"hello")],"hello (from sender 2)":async()=>[await o.send(r,{value:s.toNano(1)},"hello")]},getters:{value:async()=>await o.getValue()},prev:d(import.meta.url).prev,next:d(import.meta.url).next},i),[]}class O extends m{constructor(n){super(),I(this,n,Q,null,f,{})}}export{O as default};
