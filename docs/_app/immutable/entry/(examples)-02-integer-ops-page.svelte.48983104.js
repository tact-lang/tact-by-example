var u=Object.defineProperty;var C=(n,e,t)=>e in n?u(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var A=(n,e,t)=>(C(n,typeof e!="symbol"?e+"":e,t),t);import{S as p,i as B,s as h,I as y,ac as f}from"../chunks/index.9fe14626.js";import{d as o,g as w,s as d}from"../chunks/store.380869d4.js";import{d as I}from"../chunks/index.b268dd33.js";const b=`# Integer Operations

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
}`;function Q(n){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(n.queryId,64)}}async function g(){const n=o.Cell.fromBase64("te6ccgECEAEAA04AART/APSkE/S88sgLAQIBYgIDAvDQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GLtRNDUAfhj0gABl9N/0h9ZbBKOjjD4KNcLCoMJuvLgids84lrbPDDI+EMBzH8BygBZAst/yh/J7VQEBQC5oXejBOC52Hq6WVz2PQnYc6yVCjbNBOE7rGpaVsj5ZkWnXlv74sRzBOBAq4A3AM7HKZywdVyOS2WHBOA3qTvfKost446np7wKs4ZNBOE7Lpy1Zp2W5nQdLNsozdFJAAqBC7mAOQL07aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEJRqmLa6jqMx0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yds8f+ABwACOrfkBgvCumxXw1Q6VFk72d/68V6X5rjebOs9yG2lKSCx322XD1bqOhds8f9sx4JEw4nAGBwEaf/hCcFgDgEIBbW3bPAgESID0INs8Mf4UMCGnAyGmDKDbPP4UMCF6qQjbPP4UMCGBA+ipBAwMDAoBzshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFlAD+gJwAcpoI26zJW6zsZczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAJAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMBDTbPP4UMCGrAts8/hQwIaoB2zz+FDAggAu2CAwMDAsEOts8/hQwIIBCtgnbPP4UMCCjtgvbPP4UMCGBC7m6DAwMDQDeyCHBAJiALQHLBwGjAd4hgjgyfLJzQRnTt6mqHbmOIHAgcY4UBHqpDKYwJagSoASqBwKkIcAARTDmMDOqAs8BjitvAHCOESN6qQgSb4wBpAN6qQQgwAAU5jMipQOcUwJvgaYwWMsHAqVZ5DAx4snQBCbbPCGBB9C82zwhgQu6vts8IcNGDw8PDgEE2zwPACyZi0dHJ1ZY/hQwmotWZhbHNlj+FDDi"),e=o.Cell.fromBase64("te6cckECEgEAA1gAAQHAAQEFoB6tAgEU/wD0pBP0vPLICwMCAWIFBAC5oXejBOC52Hq6WVz2PQnYc6yVCjbNBOE7rGpaVsj5ZkWnXlv74sRzBOBAq4A3AM7HKZywdVyOS2WHBOA3qTvfKost446np7wKs4ZNBOE7Lpy1Zp2W5nQdLNsozdFJAvDQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GLtRNDUAfhj0gABl9N/0h9ZbBKOjjD4KNcLCoMJuvLgids84lrbPDDI+EMBzH8BygBZAst/yh/J7VQRBgL07aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEJRqmLa6jqMx0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yds8f+ABwACOrfkBgvCumxXw1Q6VFk72d/68V6X5rjebOs9yG2lKSCx322XD1bqOhds8f9sx4JEw4nAOBwRIgPQg2zwx/hQwIacDIaYMoNs8/hQwIXqpCNs8/hQwIYED6KkEDQ0NCAQ02zz+FDAhqwLbPP4UMCGqAds8/hQwIIALtggNDQ0JBDrbPP4UMCCAQrYJ2zz+FDAgo7YL2zz+FDAhgQu5ug0NDQoEJts8IYEH0LzbPCGBC7q+2zwhw0YMDAwLAQTbPAwALJmLR0cnVlj+FDCai1ZmFsc2WP4UMOIA3sghwQCYgC0BywcBowHeIYI4Mnyyc0EZ07epqh25jiBwIHGOFAR6qQymMCWoEqAEqgcCpCHAAEUw5jAzqgLPAY4rbwBwjhEjeqkIEm+MAaQDeqkEIMAAFOYzIqUDnFMCb4GmMFjLBwKlWeQwMeLJ0AEaf/hCcFgDgEIBbW3bPA8BzshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFlAD+gJwAcpoI26zJW6zsZczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAQAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAAqBC7mAOYB3YtA=");let t=o.beginCell();t.storeRef(e),t.storeUint(0,1);const a=t.endCell();return{code:n,data:a}}const E={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class l{constructor(e,t){A(this,"address");A(this,"init");A(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]}],errors:E});this.address=e,this.init=t}static async init(){return await g()}static async fromInit(){const e=await g(),t=o.contractAddress(0,e);return new l(t,e)}static fromAddress(e){return new l(e)}async send(e,t,a,s){let i=null;if(s==="show ops"&&(i=o.beginCell().storeUint(0,32).storeStringTail(s).endCell()),s&&typeof s=="object"&&!(s instanceof o.Slice)&&s.$$type==="Deploy"&&(i=o.beginCell().store(Q(s)).endCell()),i===null)throw new Error("Invalid message type");await e.internal(t,{...a,body:i})}}function M(n,e,t){let a;y(n,d,r=>t(2,a=r));let s,i;return f(d,a={markdown:b,tactCode:D,deploy:async()=>{const r=await I.Blockchain.create(),c=await r.treasury("deployer");s=c.getSender(),i=r.openContract(await l.fromInit());const m={[c.address.toString()]:"deployer",[i.address.toString()]:"contract"};return[[i],m,[await i.send(c.getSender(),{value:o.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{"show ops":async()=>[await i.send(s,{value:o.toNano(1)},"show ops")]},getters:{},prev:w(import.meta.url).prev,next:w(import.meta.url).next},a),[]}class H extends p{constructor(e){super(),B(this,e,M,null,h,{})}}export{H as default};
