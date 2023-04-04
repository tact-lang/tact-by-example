var u=Object.defineProperty;var I=(s,e,n)=>e in s?u(s,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[e]=n;var i=(s,e,n)=>(I(s,typeof e!="symbol"?e+"":e,n),n);import{S as y,i as h,s as Q,I as p,ac as f}from"../chunks/index.9fe14626.js";import{d as A,g as l,s as B}from"../chunks/store.d3ab02ad.js";import{d as H}from"../chunks/index.78404594.js";const E=`# Authenticating Children

If you look closely at the previous example you will notice that it is somewhat dangerous.

What happens if some user tries to send a \`HiFromChild\` message and impersonate a child? What happens if some user tries to send a \`HiFromParent\` message and impersonate the parent?

To add authentication that messages came from where we think they came from, we simply need to add \`require()\` in the beginning of every protected receiver and make sure that the sender is who we expect it is.

It is best practice to add this authentication to every message coming from a parent and every message coming from a child.

## Let's try to hack this contract

Try pressing the <span class="mdButton grape">Send HiFromChild{1}</span> button. This will send the parent an impersonated \`HiFromChild\` message, but from some user, not from a real child.

Since this code is now protected, it will notice that the sender is incorrect and reject the message with an access denied error.`,D=`import "@stdlib/deploy";

message HiFromParent {
    greeting: String;
}

message HiFromChild {
    fromSeqno: Int as uint64;
    greeting: String;
}

// we have multiple instances of the children
contract TodoChild {

    parent: Address; // we added this variable so a child always knows who the parent is
    seqno: Int as uint64;
 
    // when deploying an instance, we must specify its index (sequence number)
    init(parent: Address, seqno: Int) {
        self.parent = parent;
        self.seqno = seqno;
    }

    receive(msg: HiFromParent) {
        require(sender() == self.parent, "Access denied");
        // only the real parent can get here
        dump(self.seqno);
        dump("handling hi from parent");
        reply(HiFromChild{fromSeqno: self.seqno, greeting: "sup"}.toCell());
    }
}

// we have one instance of the parent
contract TodoParent with Deployable {
 
    init() {}

    receive("greet 3") {
        let i: Int = 0;
        repeat (3) {
            i = i + 1;
            let init: StateInit = initOf TodoChild(myAddress(), i);
            send(SendParameters{
                to: contractAddress(init),
                body: HiFromParent{greeting: "darling"}.toCell(),
                value: ton("0.1"),              // pay for message and potential deployment
                mode: SendIgnoreErrors,
                code: init.code,                // if child is not deployed, also deploy it
                data: init.data
            });
        }
    }

    receive(msg: HiFromChild) {
        let expectedAddress: Address = contractAddress(initOf TodoChild(myAddress(), msg.fromSeqno));
        require(sender() == expectedAddress, "Access denied");
        // only the real children can get here
        dump("handling hi from child");
        dump(msg.fromSeqno);
    }
}`;function M(s){return e=>{let n=e;n.storeUint(2490013878,32),n.storeUint(s.queryId,64)}}function L(s){return e=>{let n=e;n.storeUint(1237539370,32),n.storeUint(s.fromSeqno,64),n.storeStringRefTail(s.greeting)}}async function C(){const s=A.Cell.fromBase64("te6ccgECEwEABFIAART/APSkE/S88sgLAQIBYgIDAo7QAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxZ2zwwMMj4QwHMfwHKAMntVAQFAgFYDxABNO1E0NQB+GPSADCRbeD4KNcLCoMJuvLgids8BgPw7aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEEnDWiq6jpYx0x8BghBJw1oquvLggdM/1AHQEmwS4CGCEJRqmLa6jq4x0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yX/4QnBYA4BCAW1t2zx/4AHAAJEw4w1wBwwIAAJtAuww+EP4KCLbPHBZyHABywFzAcsBcAHLABLMzMn5AMhyAcsBcAHLABLKB8v/ydAg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIggDBPfhCEscF8vSNBZoYW5kbGluZyBoaSBmcm9tIGNoaWxkg/hQw2zz+FDB/CwkBWvkBgvBxkll/MNBNcADYLR2Lzj/mYSWpv8837qLxUky12JrJ2rqOhds8f9sx4AoA3sghwQCYgC0BywcBowHeIYI4Mnyyc0EZ07epqh25jiBwIHGOFAR6qQymMCWoEqAEqgcCpCHAAEUw5jAzqgLPAY4rbwBwjhEjeqkIEm+MAaQDeqkEIMAAFOYzIqUDnFMCb4GmMFjLBwKlWeQwMeLJ0AP2cHOPdqT4Q/goIts8XHBZyHABywFzAcsBcAHLABLMzMn5AMhyAcsBcAHLABLKB8v/ydAg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIi3ZGFybGluZ4yAGCENGoakpYyx/IWM8WyQHMyROCEAX14QBacgJ/BkVV2zzkCwwNAKIC0PQEMG0BgWhBAYAQ9A9vofLghwGBaEEiAoAQ9BfIAcj0AMkBzHABygBAA1kg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxaBAQHPAMkByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsADgACMACYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAC5u70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIAgFIERIAEbCvu1E0NIAAYAB1sm7jQ1aXBmczovL1FtWkhlS2ZxQ0o4QmRxTUZwNGpZQlFqTWVmaGZtdm1xWHRXYU1KWUFqSEdwdlKCA="),e=A.Cell.fromBase64("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");let n=A.beginCell();n.storeRef(e),n.storeUint(0,1);const r=n.endCell();return{code:s,data:r}}const F={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"},49469:{message:"Access denied"}};class c{constructor(e,n){i(this,"address");i(this,"init");i(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"HiFromParent",header:3517475402,fields:[]},{name:"HiFromChild",header:1237539370,fields:[]}],errors:F});this.address=e,this.init=n}static async init(){return await C()}static async fromInit(){const e=await C(),n=A.contractAddress(0,e);return new c(n,e)}static fromAddress(e){return new c(e)}async send(e,n,r,t){let o=null;if(t==="greet 3"&&(o=A.beginCell().storeUint(0,32).storeStringTail(t).endCell()),t&&typeof t=="object"&&!(t instanceof A.Slice)&&t.$$type==="HiFromChild"&&(o=A.beginCell().store(L(t)).endCell()),t&&typeof t=="object"&&!(t instanceof A.Slice)&&t.$$type==="Deploy"&&(o=A.beginCell().store(M(t)).endCell()),o===null)throw new Error("Invalid message type");await e.internal(n,{...r,body:o})}}function S(s){return e=>{let n=e;n.storeUint(3517475402,32),n.storeStringRefTail(s.greeting)}}function b(s){return e=>{let n=e;n.storeAddress(s.parent),n.storeInt(s.seqno,257)}}async function w(s,e){const n=A.Cell.fromBase64("te6ccgECDgEAA08AART/APSkE/S88sgLAQIBYgIDAtDQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxa2zwwyPhDAcx/AcoAWVkg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbLP8ntVAQFAgFYCgsAzO1E0NQB+GPSAAGOJfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB0z9ZbBLg+CjXCwqDCbry4In6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAYEBAdcAWQLRAQE8cCHXScIflTAg1wsf3gKSW3/gAYIQ0ahqSrrjAjBwBgLY0x8BghDRqGpKuvLggdQB0DEwggDBPfhCUjDHBfL0INs8/hQwjQXaGFuZGxpbmcgaGkgZnJvbSBwYXJlbnSD+FDCLNzdXCFIQyFmCEEnDWipQA8sfyz/IWM8WyQHMyX/4QnBYA4BCAW1t2zx/BwgA3sghwQCYgC0BywcBowHeIYI4Mnyyc0EZ07epqh25jiBwIHGOFAR6qQymMCWoEqAEqgcCpCHAAEUw5jAzqgLPAY4rbwBwjhEjeqkIEm+MAaQDeqkEIMAAFOYzIqUDnFMCb4GmMFjLBwKlWeQwMeLJ0AHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAJAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMALm7vRgnBc7D1dLK57HoTsOdZKhRtmgnCd1jUtK2R8syLTry398WI5gnAgVcAbgGdjlM5YOq5HJbLDgnAb1J3vlUWW8cdT094FWcMmgnCdl05as07LczoOlm2UZuikgCAUgMDQARsK+7UTQ0gABgAHWybuNDVpcGZzOi8vUW1URDNQZE1xVjdKTUV0blNNV1hld1NwZ3d0YXhmRjg0Q0NKZG1GZWhkVmdzZoIA=="),r=A.Cell.fromBase64("te6cckECEAEAA1kAAQHAAQEFoNCDAgEU/wD0pBP0vPLICwMCAWIJBAIBWAgFAgFIBwYAdbJu40NWlwZnM6Ly9RbVREM1BkTXFWN0pNRXRuU01XWGV3U3Bnd3RheGZGODRDQ0pkbUZlaGRWZ3NmggABGwr7tRNDSAAGAAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSALQ0AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8Wts8MMj4QwHMfwHKAFlZINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8Wyz/J7VQPCgE8cCHXScIflTAg1wsf3gKSW3/gAYIQ0ahqSrrjAjBwCwLY0x8BghDRqGpKuvLggdQB0DEwggDBPfhCUjDHBfL0INs8/hQwjQXaGFuZGxpbmcgaGkgZnJvbSBwYXJlbnSD+FDCLNzdXCFIQyFmCEEnDWipQA8sfyz/IWM8WyQHMyX/4QnBYA4BCAW1t2zx/DgwByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsADQCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzADeyCHBAJiALQHLBwGjAd4hgjgyfLJzQRnTt6mqHbmOIHAgcY4UBHqpDKYwJagSoASqBwKkIcAARTDmMDOqAs8BjitvAHCOESN6qQgSb4wBpAN6qQQgwAAU5jMipQOcUwJvgaYwWMsHAqVZ5DAx4snQAMztRNDUAfhj0gABjiX6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAdM/WWwS4Pgo1wsKgwm68uCJ+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAGBAQHXAFkC0QHZjyx4");let t=A.beginCell();t.storeRef(r),t.storeUint(0,1),b({$$type:"TodoChild_init_args",parent:s,seqno:e})(t);const o=t.endCell();return{code:n,data:o}}const J={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"},49469:{message:"Access denied"}};class d{constructor(e,n){i(this,"address");i(this,"init");i(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"HiFromParent",header:3517475402,fields:[]},{name:"HiFromChild",header:1237539370,fields:[]}],errors:J});this.address=e,this.init=n}static async init(e,n){return await w(e,n)}static async fromInit(e,n){const r=await w(e,n),t=A.contractAddress(0,r);return new d(t,r)}static fromAddress(e){return new d(e)}async send(e,n,r,t){let o=null;if(t&&typeof t=="object"&&!(t instanceof A.Slice)&&t.$$type==="HiFromParent"&&(o=A.beginCell().store(S(t)).endCell()),o===null)throw new Error("Invalid message type");await e.internal(n,{...r,body:o})}}function v(s,e,n){let r;p(s,B,g=>n(3,r=g));let t,o,a;return f(B,r={markdown:E,tactCode:D,deploy:async()=>{t=await H.Blockchain.create();const g=await t.treasury("deployer");o=g.getSender(),a=t.openContract(await c.fromInit());const m={[g.address.toString()]:"deployer",[a.address.toString()]:"TodoParent",[(await d.fromInit(a.address,1n)).address.toString()]:"TodoChild(1)",[(await d.fromInit(a.address,2n)).address.toString()]:"TodoChild(2)",[(await d.fromInit(a.address,3n)).address.toString()]:"TodoChild(3)"};return[[a],m,[await a.send(g.getSender(),{value:A.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{"greet 3":async()=>[await a.send(o,{value:A.toNano(1)},"greet 3")],"HiFromChild{1}":async()=>[await a.send(o,{value:A.toNano(1)},{$$type:"HiFromChild",fromSeqno:1n,greeting:"hack"})]},getters:{},prev:l(import.meta.url).prev,next:l(import.meta.url).next},r),[]}class k extends y{constructor(e){super(),h(this,e,v,null,Q,{})}}export{k as default};
