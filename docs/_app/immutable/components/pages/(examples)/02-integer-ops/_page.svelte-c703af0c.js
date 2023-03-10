var C=Object.defineProperty;var m=(n,e,s)=>e in n?C(n,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[e]=s;var A=(n,e,s)=>(m(n,typeof e!="symbol"?e+"":e,s),s);import{S as B,i as u,s as p,I,ac as y}from"../../../../chunks/index-1d4083c1.js";import{d as i,s as g}from"../../../../chunks/store-ab11a47e.js";import{d as f,g as w}from"../../../../chunks/helpers-1ad14a18.js";const h=`# Integer Operations

Since all runtime calculations with integers are done at 257-bit, overflows are quite rare.

Nevertheless, if any math operation overflows, an exception will be thrown and the transaction will revert. You can say that Tact's math is safe by default.

There's no problem with mixing variables of different state sizes in the same calculation. In runtime, they are all the same type - 257-bit signed.`,b=`import "@stdlib/deploy";

contract Integers with Deployable {
 
    i1: Int as uint128 = 3001;
    i2: Int as int32 = 57;

    init() {}

    receive("show ops") {
        let i: Int = -12; // temporary variable, runtime Int type is always int257 (range -2^256 to 2^256 - 1)
        dump(i);

        i = self.i1 * 3 + (self.i2 - i);    // basic math expressions
        dump(i);

        i = self.i1 % 10;                   // modulo (remainder after division)
        dump(i);
        
        i = self.i1 / 1000;                 // integer division (truncation toward zero)
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
}`;function D(n){return e=>{let s=e;s.storeUint(2490013878,32),s.storeUint(n.queryId,64)}}async function d(){const n=i.Cell.fromBase64("te6ccgECEAEAA04AART/APSkE/S88sgLAQIBYgIDAvDQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GLtRNDUAfhj0gABl9N/0h9ZbBKOjjD4KNcLCoMJuvLgids84lrbPDDI+EMBzH8BygBZAst/yh/J7VQEBQC5oXejBOC52Hq6WVz2PQnYc6yVCjbNBOE7rGpaVsj5ZkWnXlv74sRzBOBAq4A3AM7HKZywdVyOS2WHBOA3qTvfKost446np7wKs4ZNBOE7Lpy1Zp2W5nQdLNsozdFJAAqBC7mAOQL07aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEJRqmLa6jqMx0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yds8f+ABwACOrfkBgvCumxXw1Q6VFk72d/68V6X5rjebOs9yG2lKSCx322XD1bqOhds8f9sx4JEw4nAGBwEaf/hCcFgDgEIBbW3bPAgESID0INs8Mf4UMCGnAyGmDKDbPP4UMCF6qQjbPP4UMCGBA+ipBAwMDAoBzshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFlAD+gJwAcpoI26zJW6zsZczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAJAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMBDTbPP4UMCGrAts8/hQwIaoB2zz+FDAggAu2CAwMDAsEOts8/hQwIIBCtgnbPP4UMCCjtgvbPP4UMCGBC7m6DAwMDQDeyCHBAJiALQHLBwGjAd4hgjgyfLJzQRnTt6mqHbmOIHAgcY4UBHqpDKYwJagSoASqBwKkIcAARTDmMDOqAs8BjitvAHCOESN6qQgSb4wBpAN6qQQgwAAU5jMipQOcUwJvgaYwWMsHAqVZ5DAx4snQBCbbPCGBB9C82zwhgQu6vts8IcNGDw8PDgEE2zwPACyZi0dHJ1ZY/hQwmotWZhbHNlj+FDDi"),e=i.Cell.fromBase64("te6cckECEgEAA1gAAQHAAQEFoB6tAgEU/wD0pBP0vPLICwMCAWIFBAC5oXejBOC52Hq6WVz2PQnYc6yVCjbNBOE7rGpaVsj5ZkWnXlv74sRzBOBAq4A3AM7HKZywdVyOS2WHBOA3qTvfKost446np7wKs4ZNBOE7Lpy1Zp2W5nQdLNsozdFJAvDQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GLtRNDUAfhj0gABl9N/0h9ZbBKOjjD4KNcLCoMJuvLgids84lrbPDDI+EMBzH8BygBZAst/yh/J7VQRBgL07aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEJRqmLa6jqMx0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yds8f+ABwACOrfkBgvCumxXw1Q6VFk72d/68V6X5rjebOs9yG2lKSCx322XD1bqOhds8f9sx4JEw4nAOBwRIgPQg2zwx/hQwIacDIaYMoNs8/hQwIXqpCNs8/hQwIYED6KkEDQ0NCAQ02zz+FDAhqwLbPP4UMCGqAds8/hQwIIALtggNDQ0JBDrbPP4UMCCAQrYJ2zz+FDAgo7YL2zz+FDAhgQu5ug0NDQoEJts8IYEH0LzbPCGBC7q+2zwhw0YMDAwLAQTbPAwALJmLR0cnVlj+FDCai1ZmFsc2WP4UMOIA3sghwQCYgC0BywcBowHeIYI4Mnyyc0EZ07epqh25jiBwIHGOFAR6qQymMCWoEqAEqgcCpCHAAEUw5jAzqgLPAY4rbwBwjhEjeqkIEm+MAaQDeqkEIMAAFOYzIqUDnFMCb4GmMFjLBwKlWeQwMeLJ0AEaf/hCcFgDgEIBbW3bPA8BzshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFlAD+gJwAcpoI26zJW6zsZczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAQAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAAqBC7mAOYB3YtA=");let s=i.beginCell();s.storeRef(e),s.storeUint(0,1);const a=s.endCell();return{code:n,data:a}}const Q={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class c{constructor(e,s){A(this,"address");A(this,"init");A(this,"abi",{errors:Q});this.address=e,this.init=s}static async init(){return await d()}static async fromInit(){const e=await d(),s=i.contractAddress(0,e);return new c(s,e)}static fromAddress(e){return new c(e)}async send(e,s,a,t){let o=null;if(t==="show ops"&&(o=i.beginCell().storeUint(0,32).storeStringTail(t).endCell()),t&&typeof t=="object"&&!(t instanceof i.Slice)&&t.$$type==="Deploy"&&(o=i.beginCell().store(D(t)).endCell()),o===null)throw new Error("Invalid message type");await e.internal(s,{...a,body:o})}}function E(n,e,s){let a;I(n,g,r=>s(2,a=r));let t,o;return y(g,a={markdown:h,tactCode:b,deploy:async()=>{const r=await f.Blockchain.create(),l=await r.treasury("deployer");return t=l.getSender(),o=r.openContract(await c.fromInit()),[o,[await o.send(l.getSender(),{value:i.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{"show ops":async()=>[await o.send(t,{value:i.toNano(1)},"show ops")]},getters:{},prev:w(import.meta.url).prev,next:w(import.meta.url).next},a),[]}class H extends B{constructor(e){super(),u(this,e,E,null,p,{})}}export{H as default};
