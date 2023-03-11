var C=Object.defineProperty;var w=(a,e,t)=>e in a?C(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var i=(a,e,t)=>(w(a,typeof e!="symbol"?e+"":e,t),t);import{S as B,i as m,s as I,I as y,ac as f}from"../../../../chunks/index-1d4083c1.js";import{d as s,g as c,s as u}from"../../../../chunks/store-568ba917.js";import{d as H}from"../../../../chunks/index-4450da48.js";const M="# Loops\n\nTact does not support traditional `for` loops, but its loop statements are equivalent and can easily implement the same things.\n\nThe `repeat` loop statement input number must fit within an `int32`, otherwise an exception will be thrown.\n\nThe condition of the `while` and `until` loop statements can be any boolean expression.\n\nSmart contracts consume gas for execution. The amount of gas is proportional to the number of iterations. The last example iterates too many times and reverts due to an out of gas exception.",D=`import "@stdlib/deploy";

contract Loops with Deployable {

    init() {}

    receive("loop1") {
        let sum: Int = 0;
        let i: Int = 0;
        repeat (10) {
            i = i + 1;
            sum = sum + i;
        }
        dump(sum);
    }

    receive("loop2") {
        let sum: Int = 0;
        let i: Int = 0;
        while (i < 10) {
            i = i + 1;
            sum = sum + i;
        }
        dump(sum);
    }

    receive("loop3") {
        let sum: Int = 0;
        let i: Int = 0;
        do {
            i = i + 1;
            sum = sum + i;
        } until (i >= 10);
        dump(sum);
    }

    receive("out of gas") {
        let i: Int = 0;
        while (i < pow(10, 6)) {
            i = i + 1;
        }
        dump(i);
    }
}`;function Q(a){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(a.queryId,64)}}async function d(){const a=s.Cell.fromBase64("te6ccgECDAEAA2QAART/APSkE/S88sgLAQIBYgIDAtjQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GLtRNDUAfhj0gAwkW2Ojfgo1wsKgwm68uCJ2zziWds8MDDI+EMBzH8BygDJ7VQEBQC5oXejBOC52Hq6WVz2PQnYc6yVCjbNBOE7rGpaVsj5ZkWnXlv74sRzBOBAq4A3AM7HKZywdVyOS2WHBOA3qTvfKost446np7wKs4ZNBOE7Lpy1Zp2W5nQdLNsozdFJAAJtApjtou37cCHXScIflTAg1wsf3gKSW3/gIYIQlGqYtrqOozHTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J2zx/4AHAAJEw4w1wBgcBGn/4QnBYA4BCAW1t2zwIA/L5ASCC8OpDNYkDMVHkam5txDk2fIqIqtd3iQRTGdhOzBBVRGinuo6TMHAgepSkZqAB5DDbPP4UMH/bMeAgguh/XpZbA40tHB4c4gh/DpzCiITrXb0/Al+OozrQVrk9uo6WMHAgkyDBCpSkZqAB6DDbPP4UMH/bMeAgCwsKAc7IcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxZQA/oCcAHKaCNusyVus7GXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsACQCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzALqgvBsQfkEKCteeWWS7GsLZcWdW7lAAr8QDV6ApGGPQr7PZ7qOlTBwIJekZqAhwgkS5jDbPP4UMH/bMeCC8OhZZ4zN7MoRsB1J4ZZ2aHW1apL0VfVq9xm+I20+hSaUuo6UcJcggggPQkC5kaTo2zz+FDB/2zHgCwsA3sghwQCYgC0BywcBowHeIYI4Mnyyc0EZ07epqh25jiBwIHGOFAR6qQymMCWoEqAEqgcCpCHAAEUw5jAzqgLPAY4rbwBwjhEjeqkIEm+MAaQDeqkEIMAAFOYzIqUDnFMCb4GmMFjLBwKlWeQwMeLJ0A=="),e=s.Cell.fromBase64("te6cckECDgEAA24AAQHAAQEFoc0RAgEU/wD0pBP0vPLICwMCAWIFBAC5oXejBOC52Hq6WVz2PQnYc6yVCjbNBOE7rGpaVsj5ZkWnXlv74sRzBOBAq4A3AM7HKZywdVyOS2WHBOA3qTvfKost446np7wKs4ZNBOE7Lpy1Zp2W5nQdLNsozdFJAtjQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GLtRNDUAfhj0gAwkW2Ojfgo1wsKgwm68uCJ2zziWds8MDDI+EMBzH8BygDJ7VQNBgKY7aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEJRqmLa6jqMx0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yds8f+ABwACRMOMNcAoHA/L5ASCC8OpDNYkDMVHkam5txDk2fIqIqtd3iQRTGdhOzBBVRGinuo6TMHAgepSkZqAB5DDbPP4UMH/bMeAgguh/XpZbA40tHB4c4gh/DpzCiITrXb0/Al+OozrQVrk9uo6WMHAgkyDBCpSkZqAB6DDbPP4UMH/bMeAgCQkIAuqC8GxB+QQoK155ZZLsawtlxZ1buUACvxANXoCkYY9Cvs9nuo6VMHAgl6RmoCHCCRLmMNs8/hQwf9sx4ILw6FlnjM3syhGwHUnhlnZodbVqkvRV9Wr3Gb4jbT6FJpS6jpRwlyCCCA9CQLmRpOjbPP4UMH/bMeAJCQDeyCHBAJiALQHLBwGjAd4hgjgyfLJzQRnTt6mqHbmOIHAgcY4UBHqpDKYwJagSoASqBwKkIcAARTDmMDOqAs8BjitvAHCOESN6qQgSb4wBpAN6qQQgwAAU5jMipQOcUwJvgaYwWMsHAqVZ5DAx4snQARp/+EJwWAOAQgFtbds8CwHOyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WUAP6AnABymgjbrMlbrOxlzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AAwAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwAAm0wT+Bf");let t=s.beginCell();t.storeRef(e),t.storeUint(0,1);const A=t.endCell();return{code:a,data:A}}const b={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class l{constructor(e,t){i(this,"address");i(this,"init");i(this,"abi",{errors:b});this.address=e,this.init=t}static async init(){return await d()}static async fromInit(){const e=await d(),t=s.contractAddress(0,e);return new l(t,e)}static fromAddress(e){return new l(e)}async send(e,t,A,n){let o=null;if(n==="loop1"&&(o=s.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n==="loop2"&&(o=s.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n==="loop3"&&(o=s.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n==="out of gas"&&(o=s.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n&&typeof n=="object"&&!(n instanceof s.Slice)&&n.$$type==="Deploy"&&(o=s.beginCell().store(Q(n)).endCell()),o===null)throw new Error("Invalid message type");await e.internal(t,{...A,body:o})}}function h(a,e,t){let A;y(a,u,r=>t(2,A=r));let n,o;return f(u,A={markdown:M,tactCode:D,deploy:async()=>{const r=await H.Blockchain.create(),g=await r.treasury("deployer");n=g.getSender(),o=r.openContract(await l.fromInit());const p={[g.address.toString()]:"deployer",[o.address.toString()]:"contract"};return[o,p,[await o.send(g.getSender(),{value:s.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{loop1:async()=>[await o.send(n,{value:s.toNano(1)},"loop1")],loop2:async()=>[await o.send(n,{value:s.toNano(1)},"loop2")],loop3:async()=>[await o.send(n,{value:s.toNano(1)},"loop3")],"out of gas":async()=>[await o.send(n,{value:s.toNano(1)},"out of gas")]},getters:{},prev:c(import.meta.url).prev,next:c(import.meta.url).next},A),[]}class L extends B{constructor(e){super(),m(this,e,h,null,I,{})}}export{L as default};
