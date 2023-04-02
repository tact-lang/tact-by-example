var C=Object.defineProperty;var p=(a,e,t)=>e in a?C(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var A=(a,e,t)=>(p(a,typeof e!="symbol"?e+"":e,t),t);import{S as m,i as B,s as I,I as y,ac as f}from"../chunks/index.9fe14626.js";import{d as s,g as u,s as g}from"../chunks/store.2b42c038.js";import{d as h}from"../chunks/index.9fe59178.js";const M="# Loops\n\nTact does not support traditional `for` loops, but its loop statements are equivalent and can easily implement the same things. Also note that Tact does not support `break` and `continue` statements in loops like some languages.\n\nThe `repeat` loop statement input number must fit within an `int32`, otherwise an exception will be thrown.\n\nThe condition of the `while` and `until` loop statements can be any boolean expression.\n\nSmart contracts consume gas for execution. The amount of gas is proportional to the number of iterations. The last example iterates too many times and reverts due to an out of gas exception.",H=`import "@stdlib/deploy";

contract Loops with Deployable {

    init() {}

    receive("loop1") {
        let sum: Int = 0;
        let i: Int = 0;
        repeat (10) {               // repeat exactly 10 times
            i = i + 1;
            sum = sum + i;
        }
        dump(sum);
    }

    receive("loop2") {
        let sum: Int = 0;
        let i: Int = 0;
        while (i < 10) {            // loop while a condition is true
            i = i + 1;
            sum = sum + i;
        }
        dump(sum);
    }

    receive("loop3") {
        let sum: Int = 0;
        let i: Int = 0;
        do {                        // loop until a condition is true
            i = i + 1;
            sum = sum + i;
        } until (i >= 10);
        dump(sum);
    }

    receive("out of gas") {
        let i: Int = 0;
        while (i < pow(10, 6)) {    // 1 million iterations is too much
            i = i + 1;
        }
        dump(i);
    }
}`;function Q(a){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(a.queryId,64)}}async function d(){const a=s.Cell.fromBase64("te6ccgECEAEAA6cAART/APSkE/S88sgLAQIBYgIDAo7QAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxZ2zwwMMj4QwHMfwHKAMntVAQFAgFYDA0BNO1E0NQB+GPSADCRbeD4KNcLCoMJuvLgids8BgKu7aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEJRqmLa6jq4x0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yX/4QnBYA4BCAW1t2zx/4AHAAJEw4w1wBwgAAm0ByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsACQPy+QEggvDqQzWJAzFR5GpubcQ5NnyKiKrXd4kEUxnYTswQVURop7qOkzBwIHqUpGagAeQw2zz+FDB/2zHgIILof16WWwONLRweHOIIfw6cwoiE6129PwJfjqM60Fa5PbqOljBwIJMgwQqUpGagAegw2zz+FDB/2zHgIAsLCgCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzALqgvBsQfkEKCteeWWS7GsLZcWdW7lAAr8QDV6ApGGPQr7PZ7qOlTBwIJekZqAhwgkS5jDbPP4UMH/bMeCC8OhZZ4zN7MoRsB1J4ZZ2aHW1apL0VfVq9xm+I20+hSaUuo6UcJcggggPQkC5kaTo2zz+FDB/2zHgCwsA3sghwQCYgC0BywcBowHeIYI4Mnyyc0EZ07epqh25jiBwIHGOFAR6qQymMCWoEqAEqgcCpCHAAEUw5jAzqgLPAY4rbwBwjhEjeqkIEm+MAaQDeqkEIMAAFOYzIqUDnFMCb4GmMFjLBwKlWeQwMeLJ0AC5u70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIAgFIDg8AEbCvu1E0NIAAYAB1sm7jQ1aXBmczovL1FtUnk3MXZMOXZFRDhOa0FHa0QxN2NtaEh6aW9QV1pWcWhKWHk2WjJuYldtNGGCA="),e=s.Cell.fromBase64("te6cckECEgEAA7EAAQHAAQEFoc0RAgEU/wD0pBP0vPLICwMCAWIJBAIBWAgFAgFIBwYAdbJu40NWlwZnM6Ly9RbVJ5NzF2TDl2RUQ4TmtBR2tEMTdjbWhIemlvUFdaVnFoSlh5NloybmJXbTRhggABGwr7tRNDSAAGAAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSAKO0AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8Wds8MDDI+EMBzH8BygDJ7VQQCgKu7aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEJRqmLa6jq4x0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yX/4QnBYA4BCAW1t2zx/4AHAAJEw4w1wDgsD8vkBIILw6kM1iQMxUeRqbm3EOTZ8ioiq13eJBFMZ2E7MEFVEaKe6jpMwcCB6lKRmoAHkMNs8/hQwf9sx4CCC6H9ellsDjS0cHhziCH8OnMKIhOtdvT8CX46jOtBWuT26jpYwcCCTIMEKlKRmoAHoMNs8/hQwf9sx4CANDQwC6oLwbEH5BCgrXnllkuxrC2XFnVu5QAK/EA1egKRhj0K+z2e6jpUwcCCXpGagIcIJEuYw2zz+FDB/2zHggvDoWWeMzezKEbAdSeGWdmh1tWqS9FX1avcZviNtPoUmlLqOlHCXIIIID0JAuZGk6Ns8/hQwf9sx4A0NAN7IIcEAmIAtAcsHAaMB3iGCODJ8snNBGdO3qaoduY4gcCBxjhQEeqkMpjAlqBKgBKoHAqQhwABFMOYwM6oCzwGOK28AcI4RI3qpCBJvjAGkA3qpBCDAABTmMyKlA5xTAm+BpjBYywcCpVnkMDHiydAByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsADwCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAE07UTQ1AH4Y9IAMJFt4Pgo1wsKgwm68uCJ2zwRAAJtsa05YA==");let t=s.beginCell();t.storeRef(e),t.storeUint(0,1);const i=t.endCell();return{code:a,data:i}}const b={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class l{constructor(e,t){A(this,"address");A(this,"init");A(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]}],errors:b});this.address=e,this.init=t}static async init(){return await d()}static async fromInit(){const e=await d(),t=s.contractAddress(0,e);return new l(t,e)}static fromAddress(e){return new l(e)}async send(e,t,i,n){let o=null;if(n==="loop1"&&(o=s.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n==="loop2"&&(o=s.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n==="loop3"&&(o=s.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n==="out of gas"&&(o=s.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n&&typeof n=="object"&&!(n instanceof s.Slice)&&n.$$type==="Deploy"&&(o=s.beginCell().store(Q(n)).endCell()),o===null)throw new Error("Invalid message type");await e.internal(t,{...i,body:o})}}function D(a,e,t){let i;y(a,g,r=>t(2,i=r));let n,o;return f(g,i={markdown:M,tactCode:H,deploy:async()=>{const r=await h.Blockchain.create(),c=await r.treasury("deployer");n=c.getSender(),o=r.openContract(await l.fromInit());const w={[c.address.toString()]:"deployer",[o.address.toString()]:"contract"};return[[o],w,[await o.send(c.getSender(),{value:s.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{loop1:async()=>[await o.send(n,{value:s.toNano(1)},"loop1")],loop2:async()=>[await o.send(n,{value:s.toNano(1)},"loop2")],loop3:async()=>[await o.send(n,{value:s.toNano(1)},"loop3")],"out of gas":async()=>[await o.send(n,{value:s.toNano(1)},"out of gas")]},getters:{},prev:u(import.meta.url).prev,next:u(import.meta.url).next},i),[]}class K extends m{constructor(e){super(),B(this,e,D,null,I,{})}}export{K as default};
