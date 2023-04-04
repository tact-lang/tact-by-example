var u=Object.defineProperty;var p=(n,e,t)=>e in n?u(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var A=(n,e,t)=>(p(n,typeof e!="symbol"?e+"":e,t),t);import{S as y,i as C,s as h,I as f,ac as B}from"../chunks/index.9fe14626.js";import{d as a,g,s as d}from"../chunks/store.d3ab02ad.js";import{d as I}from"../chunks/index.78404594.js";const b=`# Integer Operations

Since all runtime calculations with integers are done at 257-bit, overflows are quite rare. An overflow can happen if the result of a math operation is too big to fit. For example, multiplying 2^256 by 2^256 will not fit within 257-bit.

Nevertheless, if any math operation overflows, an exception will be thrown and the transaction will fail. You can say that Tact's math is safe by default.

There's no problem with mixing variables of different state sizes in the same calculation. In runtime, they are all the same type - always 257-bit signed. This is the largest supported integer type, so they all fit.

## Decimal point with integers

Arithmetics with dollars, for example, requires 2 decimal places. How can we represent the number \`1.25\` if we can only work with integers? The answer is to work with *cents*. So \`1.25\` becomes \`125\`. We just remember that the two lowest digits are coming after the decimal point.

In the same way, working with TON coins has 9 decimal places instead of 2. So the amount 1.25 TON which can be coded in Tact as \`ton("1.25")\` is actually the number \`1250000000\` - we call these *nano-tons* instead of cents.`,D=`import "@stdlib/deploy";

contract Integers with Deployable {
 
    // contract persistent state variables
    i1: Int as uint128 = 3001;
    i2: Int as int32 = 57;

    init() {}

    receive("show ops") {
        let i: Int = -12; // temporary variable, runtime Int type is always int257 (range -2^256 to 2^256 - 1)
        dump(i);

        i = self.i1 * 3 + (self.i2 - i);    // basic math expressions
        dump(i);

        i = self.i1 % 10;                   // modulo (remainder after division), 3001 % 10 = 1
        dump(i);
        
        i = self.i1 / 1000;                 // integer division (truncation toward zero), 3001 / 1000 = 3
        dump(i);
        
        i = self.i1 >> 3;                   // shift right (multiply by 2^n)
        dump(i);
        
        i = self.i1 << 2;                   // shift left (divide by 2^n)
        dump(i);
        
        i = min(self.i2, 11);               // minimum between two numbers
        dump(i);
        
        i = max(self.i2, 66);               // maximum between two numbers
        dump(i);
        
        i = abs(-1 * self.i2);              // absolute value
        dump(i);

        dump(self.i1 == 3001);
        dump(self.i1 > 2000);
        dump(self.i1 >= 3002);
        dump(self.i1 != 70);
    }
}`;function Q(n){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(n.queryId,64)}}async function w(){const n=a.Cell.fromBase64("te6ccgECFQEAA5MAART/APSkE/S88sgLAQIBYgIDApjQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxa2zwwyPhDAcx/AcoAWQLLf8ofye1UBAUCAVgREgFC7UTQ1AH4Y9IAAZfTf9IfWWwS4DD4KNcLCoMJuvLgids8BgKu7aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEJRqmLa6jq4x0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yX/4QnBYA4BCAW1t2zx/4AHAAJEw4w1wBwgACoELuYA5AcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AAkBWvkBgvCumxXw1Q6VFk72d/68V6X5rjebOs9yG2lKSCx322XD1bqOhds8f9sx4AoAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwESID0INs8Mf4UMCGnAyGmDKDbPP4UMCF6qQjbPP4UMCGBA+ipBA0NDQsENNs8/hQwIasC2zz+FDAhqgHbPP4UMCCAC7YIDQ0NDAQ62zz+FDAggEK2Cds8/hQwIKO2C9s8/hQwIYELuboNDQ0OAN7IIcEAmIAtAcsHAaMB3iGCODJ8snNBGdO3qaoduY4gcCBxjhQEeqkMpjAlqBKgBKoHAqQhwABFMOYwM6oCzwGOK28AcI4RI3qpCBJvjAGkA3qpBCDAABTmMyKlA5xTAm+BpjBYywcCpVnkMDHiydAEJts8IYEH0LzbPCGBC7q+2zwhw0YQEBAPAQTbPBAALJmLR0cnVlj+FDCai1ZmFsc2WP4UMOIAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSAIBSBMUABGwr7tRNDSAAGAAdbJu40NWlwZnM6Ly9RbVcxVm5kVjdZbkVQVkdXdlBiVkUybkxXdVBLVjlySkU0QmR2NFR4bW9DaXBugg"),e=a.Cell.fromBase64("te6cckECFwEAA50AAQHAAQEFoB6tAgEU/wD0pBP0vPLICwMCAWIJBAIBWAgFAgFIBwYAdbJu40NWlwZnM6Ly9RbVcxVm5kVjdZbkVQVkdXdlBiVkUybkxXdVBLVjlySkU0QmR2NFR4bW9DaXBuggABGwr7tRNDSAAGAAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSAKY0AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8Wts8MMj4QwHMfwHKAFkCy3/KH8ntVBUKAq7tou37cCHXScIflTAg1wsf3gKSW3/gIYIQlGqYtrqOrjHTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/Jf/hCcFgDgEIBbW3bPH/gAcAAkTDjDXATCwFa+QGC8K6bFfDVDpUWTvZ3/rxXpfmuN5s6z3IbaUpILHfbZcPVuo6F2zx/2zHgDARIgPQg2zwx/hQwIacDIaYMoNs8/hQwIXqpCNs8/hQwIYED6KkEEhISDQQ02zz+FDAhqwLbPP4UMCGqAds8/hQwIIALtggSEhIOBDrbPP4UMCCAQrYJ2zz+FDAgo7YL2zz+FDAhgQu5uhISEg8EJts8IYEH0LzbPCGBC7q+2zwhw0YREREQAQTbPBEALJmLR0cnVlj+FDCai1ZmFsc2WP4UMOIA3sghwQCYgC0BywcBowHeIYI4Mnyyc0EZ07epqh25jiBwIHGOFAR6qQymMCWoEqAEqgcCpCHAAEUw5jAzqgLPAY4rbwBwjhEjeqkIEm+MAaQDeqkEIMAAFOYzIqUDnFMCb4GmMFjLBwKlWeQwMeLJ0AHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAUAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAULtRNDUAfhj0gABl9N/0h9ZbBLgMPgo1wsKgwm68uCJ2zwWAAqBC7mAOR3r/go=");let t=a.beginCell();t.storeRef(e),t.storeUint(0,1);const o=t.endCell();return{code:n,data:o}}const E={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class l{constructor(e,t){A(this,"address");A(this,"init");A(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]}],errors:E});this.address=e,this.init=t}static async init(){return await w()}static async fromInit(){const e=await w(),t=a.contractAddress(0,e);return new l(t,e)}static fromAddress(e){return new l(e)}async send(e,t,o,s){let i=null;if(s==="show ops"&&(i=a.beginCell().storeUint(0,32).storeStringTail(s).endCell()),s&&typeof s=="object"&&!(s instanceof a.Slice)&&s.$$type==="Deploy"&&(i=a.beginCell().store(Q(s)).endCell()),i===null)throw new Error("Invalid message type");await e.internal(t,{...o,body:i})}}function M(n,e,t){let o;f(n,d,r=>t(2,o=r));let s,i;return B(d,o={markdown:b,tactCode:D,deploy:async()=>{const r=await I.Blockchain.create(),c=await r.treasury("deployer");s=c.getSender(),i=r.openContract(await l.fromInit());const m={[c.address.toString()]:"deployer",[i.address.toString()]:"contract"};return[[i],m,[await i.send(c.getSender(),{value:a.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{"show ops":async()=>[await i.send(s,{value:a.toNano(1)},"show ops")]},getters:{},prev:g(import.meta.url).prev,next:g(import.meta.url).next},o),[]}class H extends y{constructor(e){super(),C(this,e,M,null,h,{})}}export{H as default};
