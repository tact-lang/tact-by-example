var C=Object.defineProperty;var y=(t,e,n)=>e in t?C(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var a=(t,e,n)=>(y(t,typeof e!="symbol"?e+"":e,n),n);import{S as u,i as h,s as f,I as p,ac as Q}from"../chunks/index.9fe14626.js";import{d as r,g as l,s as B}from"../chunks/store.7ab6b232.js";import{d as H}from"../chunks/index.639aa391.js";const E=`# Authenticating Children

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
}`;function M(t){return e=>{let n=e;n.storeUint(2490013878,32),n.storeUint(t.queryId,64)}}function L(t){return e=>{let n=e;n.storeUint(1237539370,32),n.storeUint(t.fromSeqno,64),n.storeStringRefTail(t.greeting)}}async function m(){const t=r.Cell.fromBase64("te6ccgECDwEAA90AART/APSkE/S88sgLAQIBYgIDAgLLBAUAuaF3owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwTgN6k73yqLLeOOp6e8CrOGTQThOy6ctWadluZ0HSzbKM3RSQLX0AdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GLtRNDUAfhj0gAwkW2Ojfgo1wsKgwm68uCJ2zziWds8MDDI+EMBzH8BygDJ7VSBgcAr6UBaHoCGDaAwLQggMAIege30PlwQ4DAtCCRAUAIegvkAOR6AGSA5jgA5QAgAayQa6TAgIXdeXBEEGuFhRBBhN0QwIJ/3Vj5cERBhN15cETni0CAgOeAZMAAAm0E9u2i7ftwIddJwh+VMCDXCx/eApJbf+AhghBJw1oquo9NMdMfAYIQScNaKrry4IHTP9QB0BJsEjD4Q/goIvAa2zyCAME9+EJYxwXy9I0FmhhbmRsaW5nIGhpIGZyb20gY2hpbGSD+FDDbPP4UMH/gIYIQlGqYtrrjAgHAAAwICQoA3sghwQCYgC0BywcBowHeIYI4Mnyyc0EZ07epqh25jiBwIHGOFAR6qQymMCWoEqAEqgcCpCHAAEUw5jAzqgLPAY4rbwBwjhEjeqkIEm+MAaQDeqkEIMAAFOYzIqUDnFMCb4GmMFjLBwKlWeQwMeLJ0AFGMdMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8nbPH8LAtyPaPkBgvBxkll/MNBNcADYLR2Lzj/mYSWpv8837qLxUky12JrJ2rqPQHBzjzek+EP4KCLwGlzbPIt2RhcmxpbmeMgBghDRqGpKWMsfyFjPFskBzMkTghAF9eEAWnICfwZFVds85DB/2zHgkTDicAwNARp/+EJwWAOAQgFtbds8DQCMcFnIcAHLAXMBywFwAcsAEszMyfkAyHIBywFwAcsAEsoHy//J0CDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiQHOyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WUAP6AnABymgjbrMlbrOxlzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AA4AmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMw="),e=r.Cell.fromBase64("te6cckECGgEABXoAAQHAAQIBIA0CAQW80jwDART/APSkE/S88sgLBAIBYgUQAgLLBwYAr6UBaHoCGDaAwLQggMAIege30PlwQ4DAtCCRAUAIegvkAOR6AGSA5jgA5QAgAayQa6TAgIXdeXBEEGuFhRBBhN0QwIJ/3Vj5cERBhN15cETni0CAgOeAZMAC19AHQ0wMBcbDAAZF/kXDiAfpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiVRQUwNvBPhhAvhi7UTQ1AH4Y9IAMJFtjo34KNcLCoMJuvLgids84lnbPDAwyPhDAcx/AcoAye1UgwIBPbtou37cCHXScIflTAg1wsf3gKSW3/gIYIQScNaKrqPTTHTHwGCEEnDWiq68uCB0z/UAdASbBIw+EP4KCLwGts8ggDBPfhCWMcF8vSNBZoYW5kbGluZyBoaSBmcm9tIGNoaWxkg/hQw2zz+FDB/4CGCEJRqmLa64wIBwAALGQoJAtyPaPkBgvBxkll/MNBNcADYLR2Lzj/mYSWpv8837qLxUky12JrJ2rqPQHBzjzek+EP4KCLwGlzbPIt2RhcmxpbmeMgBghDRqGpKWMsfyFjPFskBzMkTghAF9eEAWnICfwZFVds85DB/2zHgkTDicAsXAUYx0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yds8fxYAjHBZyHABywFzAcsBcAHLABLMzMn5AMhyAcsBcAHLABLKB8v/ydAg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkAAm0BBb9CDA4BFP8A9KQT9LzyyAsPAgFiERAAuaF3owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwTgN6k73yqLLeOOp6e8CrOGTQThOy6ctWadluZ0HSzbKM3RSQF+0AHQ0wMBcbDAAZF/kXDiAfpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiVRQUwNvBPhhAvhiEgLs7UTQ1AH4Y9IAAY4q+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJAdM/WWwSjjn4KNcLCoMJuvLgifpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiQGBAQHXAFkC0QHiWts8MBQTAGbI+EMBzH8BygBZWSDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8Wyz/J7VQBPHAh10nCH5UwINcLH94Cklt/4AGCENGoakq64wIwcBUCwNMfAYIQ0ahqSrry4IHUAdAxMIIAwT34QiPHBfL0INs8/hQwjQXaGFuZGxpbmcgaGkgZnJvbSBwYXJlbnSD+FDCLNzdXCFIQyFmCEEnDWipQA8sfyz/IWM8WyQHMyds8fxkWARp/+EJwWAOAQgFtbds8FwHOyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WUAP6AnABymgjbrMlbrOxlzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7ABgAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwA3sghwQCYgC0BywcBowHeIYI4Mnyyc0EZ07epqh25jiBwIHGOFAR6qQymMCWoEqAEqgcCpCHAAEUw5jAzqgLPAY4rbwBwjhEjeqkIEm+MAaQDeqkEIMAAFOYzIqUDnFMCb4GmMFjLBwKlWeQwMeLJ0GbWtpM=");let n=r.beginCell();n.storeRef(e),n.storeUint(0,1);const o=n.endCell();return{code:t,data:o}}const b={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"},49469:{message:"Access denied"}};class c{constructor(e,n){a(this,"address");a(this,"init");a(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"HiFromParent",header:3517475402,fields:[]},{name:"HiFromChild",header:1237539370,fields:[]}],errors:b});this.address=e,this.init=n}static async init(){return await m()}static async fromInit(){const e=await m(),n=r.contractAddress(0,e);return new c(n,e)}static fromAddress(e){return new c(e)}async send(e,n,o,s){let A=null;if(s==="greet 3"&&(A=r.beginCell().storeUint(0,32).storeStringTail(s).endCell()),s&&typeof s=="object"&&!(s instanceof r.Slice)&&s.$$type==="HiFromChild"&&(A=r.beginCell().store(L(s)).endCell()),s&&typeof s=="object"&&!(s instanceof r.Slice)&&s.$$type==="Deploy"&&(A=r.beginCell().store(M(s)).endCell()),A===null)throw new Error("Invalid message type");await e.internal(n,{...o,body:A})}}function S(t){return e=>{let n=e;n.storeUint(3517475402,32),n.storeStringRefTail(t.greeting)}}function F(t){return e=>{let n=e;n.storeAddress(t.parent),n.storeInt(t.seqno,257)}}async function w(t,e){const n=r.Cell.fromBase64("te6ccgECDAEAAyAAART/APSkE/S88sgLAQIBYgIDAX7QAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GIEALmhd6ME4LnYerpZXPY9CdhzrJUKNs0E4TusalpWyPlmRadeW/vixHME4ECrgDcAzscpnLB1XI5LZYcE4DepO98qiy3jjqenvAqzhk0E4TsunLVmnZbmdB0s2yjN0UkC7O1E0NQB+GPSAAGOKvpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiQHTP1lsEo45+CjXCwqDCbry4In6QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkBgQEB1wBZAtEB4lrbPDAFBgE8cCHXScIflTAg1wsf3gKSW3/gAYIQ0ahqSrrjAjBwBwBmyPhDAcx/AcoAWVkg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFss/ye1UAsDTHwGCENGoakq68uCB1AHQMTCCAME9+EIjxwXy9CDbPP4UMI0F2hhbmRsaW5nIGhpIGZyb20gcGFyZW50g/hQwizc3VwhSEMhZghBJw1oqUAPLH8s/yFjPFskBzMnbPH8ICQDeyCHBAJiALQHLBwGjAd4hgjgyfLJzQRnTt6mqHbmOIHAgcY4UBHqpDKYwJagSoASqBwKkIcAARTDmMDOqAs8BjitvAHCOESN6qQgSb4wBpAN6qQQgwAAU5jMipQOcUwJvgaYwWMsHAqVZ5DAx4snQARp/+EJwWAOAQgFtbds8CgHOyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WUAP6AnABymgjbrMlbrOxlzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AAsAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMw="),o=r.Cell.fromBase64("te6cckECDgEAAyoAAQHAAQEFoNCDAgEU/wD0pBP0vPLICwMCAWIFBAC5oXejBOC52Hq6WVz2PQnYc6yVCjbNBOE7rGpaVsj5ZkWnXlv74sRzBOBAq4A3AM7HKZywdVyOS2WHBOA3qTvfKost446np7wKs4ZNBOE7Lpy1Zp2W5nQdLNsozdFJAX7QAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GIGAuztRNDUAfhj0gABjir6QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkB0z9ZbBKOOfgo1wsKgwm68uCJ+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJAYEBAdcAWQLRAeJa2zwwCAcAZsj4QwHMfwHKAFlZINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxbLP8ntVAE8cCHXScIflTAg1wsf3gKSW3/gAYIQ0ahqSrrjAjBwCQLA0x8BghDRqGpKuvLggdQB0DEwggDBPfhCI8cF8vQg2zz+FDCNBdoYW5kbGluZyBoaSBmcm9tIHBhcmVudIP4UMIs3N1cIUhDIWYIQScNaKlADyx/LP8hYzxbJAczJ2zx/DQoBGn/4QnBYA4BCAW1t2zwLAc7IcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxZQA/oCcAHKaCNusyVus7GXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsADACYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzADeyCHBAJiALQHLBwGjAd4hgjgyfLJzQRnTt6mqHbmOIHAgcY4UBHqpDKYwJagSoASqBwKkIcAARTDmMDOqAs8BjitvAHCOESN6qQgSb4wBpAN6qQQgwAAU5jMipQOcUwJvgaYwWMsHAqVZ5DAx4snQZ6Us9w==");let s=r.beginCell();s.storeRef(o),s.storeUint(0,1),F({$$type:"TodoChild_init_args",parent:t,seqno:e})(s);const A=s.endCell();return{code:n,data:A}}const J={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"},49469:{message:"Access denied"}};class g{constructor(e,n){a(this,"address");a(this,"init");a(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"HiFromParent",header:3517475402,fields:[]},{name:"HiFromChild",header:1237539370,fields:[]}],errors:J});this.address=e,this.init=n}static async init(e,n){return await w(e,n)}static async fromInit(e,n){const o=await w(e,n),s=r.contractAddress(0,o);return new g(s,o)}static fromAddress(e){return new g(e)}async send(e,n,o,s){let A=null;if(s&&typeof s=="object"&&!(s instanceof r.Slice)&&s.$$type==="HiFromParent"&&(A=r.beginCell().store(S(s)).endCell()),A===null)throw new Error("Invalid message type");await e.internal(n,{...o,body:A})}}function q(t,e,n){let o;p(t,B,d=>n(3,o=d));let s,A,i;return Q(B,o={markdown:E,tactCode:D,deploy:async()=>{s=await H.Blockchain.create();const d=await s.treasury("deployer");A=d.getSender(),i=s.openContract(await c.fromInit());const I={[d.address.toString()]:"deployer",[i.address.toString()]:"TodoParent",[(await g.fromInit(i.address,1n)).address.toString()]:"TodoChild(1)",[(await g.fromInit(i.address,2n)).address.toString()]:"TodoChild(2)",[(await g.fromInit(i.address,3n)).address.toString()]:"TodoChild(3)"};return[[i],I,[await i.send(d.getSender(),{value:r.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{"greet 3":async()=>[await i.send(A,{value:r.toNano(1)},"greet 3")],"HiFromChild{1}":async()=>[await i.send(A,{value:r.toNano(1)},{$$type:"HiFromChild",fromSeqno:1n,greeting:"hack"})]},getters:{},prev:l(import.meta.url).prev,next:l(import.meta.url).next},o),[]}class z extends u{constructor(e){super(),h(this,e,q,null,f,{})}}export{z as default};
