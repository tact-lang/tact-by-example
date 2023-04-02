var C=Object.defineProperty;var h=(s,e,n)=>e in s?C(s,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[e]=n;var r=(s,e,n)=>(h(s,typeof e!="symbol"?e+"":e,n),n);import{S as I,i as u,s as p,I as f,ac as H}from"../chunks/index.9fe14626.js";import{d as A,g as d,s as w}from"../chunks/store.380869d4.js";import{d as Q}from"../chunks/index.b268dd33.js";const M=`# Communicating with Children

In a parent-child relationship, the user would normally just deploy the parent. This is what's happening here when you press the <span class="mdButton blue">Deploy</span> button.

In this example, the user is only supposed to communicate with the parent. You can send the parent contract a message by pressing the <span class="mdButton grape">Send greet 3</span> button.

This message will instruct the parent to send its own \`HiFromParent\` message to the first 3 children. Every child will respond to the greeting by sending the parent its own \`HiFromChild\` back.

## How can parent know if a child is deployed?

You can't send a message to a contract until it is deployed. How can the parent guarantee that they're not communicating with a child that wasn't deployed yet?

The best practice is to include the *stateInit* on every message. This way, if the child isn't deployed, it will be. If the child is already deployed, this field will be ignored.

This is called lazy deployment.`,E=`import "@stdlib/deploy";

message HiFromParent {
    greeting: String;
}

message HiFromChild {
    fromSeqno: Int as uint64;
    greeting: String;
}

// we have multiple instances of the children
contract TodoChild {

    seqno: Int as uint64;
 
    // when deploying an instance, we must specify its index (sequence number)
    init(seqno: Int) {
        self.seqno = seqno;
    }

    receive(msg: HiFromParent) {
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
            let init: StateInit = initOf TodoChild(i);
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
        dump("handling hi from child");
        dump(msg.fromSeqno);
    }
}`;function D(s){return e=>{let n=e;n.storeUint(2490013878,32),n.storeUint(s.queryId,64)}}function b(s){return e=>{let n=e;n.storeUint(1237539370,32),n.storeUint(s.fromSeqno,64),n.storeStringRefTail(s.greeting)}}async function B(){const s=A.Cell.fromBase64("te6ccgECDwEAA6EAART/APSkE/S88sgLAQIBYgIDAgLLBAUAuaF3owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwTgN6k73yqLLeOOp6e8CrOGTQThOy6ctWadluZ0HSzbKM3RSQLX0AdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GLtRNDUAfhj0gAwkW2Ojfgo1wsKgwm68uCJ2zziWds8MDDI+EMBzH8BygDJ7VSBgcAZ6SA6HoCGDaAwLQggMAIege30PlwQ4DAtCCRAUAIegvkAOR6AGSA5jgA5QAsAMCAgOeAZMAAAm0D2O2i7ftwIddJwh+VMCDXCx/eApJbf+AhghBJw1oquo65MdMfAYIQScNaKrry4IHTP9QB0BJsEjCNBZoYW5kbGluZyBoaSBmcm9tIGNoaWxkg/hQw2zz+FDB/4CGCEJRqmLa64wIBwACRMOMNcAgJCgDeyCHBAJiALQHLBwGjAd4hgjgyfLJzQRnTt6mqHbmOIHAgcY4UBHqpDKYwJagSoASqBwKkIcAARTDmMDOqAs8BjitvAHCOESN6qQgSb4wBpAN6qQQgwAAU5jMipQOcUwJvgaYwWMsHAqVZ5DAx4snQAUYx0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yds8fwsCzPkBgvBxkll/MNBNcADYLR2Lzj/mYSWpv8837qLxUky12JrJ2rqPPnBzjzWk+EMh8Blc2zyLdkYXJsaW5njIAYIQ0ahqSljLH8hYzxbJAczJE4IQBfXhAFpyAn8GRVXbPOQwf9sx4AwNARp/+EJwWAOAQgFtbds8DQCMcFnIcAHLAXMBywFwAcsAEszMyfkAyHIBywFwAcsAEsoHy//J0CDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiQHOyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WUAP6AnABymgjbrMlbrOxlzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AA4AmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMw="),e=A.Cell.fromBase64("te6cckECFwEABLsAAQHAAQIBIA0CAQW80jwDART/APSkE/S88sgLBAIBYgUQAgLLBwYAZ6SA6HoCGDaAwLQggMAIege30PlwQ4DAtCCRAUAIegvkAOR6AGSA5jgA5QAsAMCAgOeAZMAC19AHQ0wMBcbDAAZF/kXDiAfpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiVRQUwNvBPhhAvhi7UTQ1AH4Y9IAMJFtjo34KNcLCoMJuvLgids84lnbPDAwyPhDAcx/AcoAye1UgwIA9jtou37cCHXScIflTAg1wsf3gKSW3/gIYIQScNaKrqOuTHTHwGCEEnDWiq68uCB0z/UAdASbBIwjQWaGFuZGxpbmcgaGkgZnJvbSBjaGlsZIP4UMNs8/hQwf+AhghCUapi2uuMCAcAAkTDjDXAWCwkCzPkBgvBxkll/MNBNcADYLR2Lzj/mYSWpv8837qLxUky12JrJ2rqPPnBzjzWk+EMh8Blc2zyLdkYXJsaW5njIAYIQ0ahqSljLH8hYzxbJAczJE4IQBfXhAFpyAn8GRVXbPOQwf9sx4AoUAIxwWchwAcsBcwHLAXABywASzMzJ+QDIcgHLAXABywASygfL/8nQINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJAUYx0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yds8fxMAAm0BBb9CDA4BFP8A9KQT9LzyyAsPAgFiERAAuaF3owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwTgN6k73yqLLeOOp6e8CrOGTQThOy6ctWadluZ0HSzbKM3RSQHw0AHQ0wMBcbDAAZF/kXDiAfpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiVRQUwNvBPhhAvhi7UTQ1AH4Y9IAAZTTPwExjhP4KNcLCoMJuvLgiYEBAdcAAQHR4lnbPDDI+EMBzH8BygABAcs/ye1UEgLocCHXScIflTAg1wsf3gKSW3/gAYIQ0ahqSrqPVdMfAYIQ0ahqSrry4IHUAdAxMCDbPP4UMI0F2hhbmRsaW5nIGhpIGZyb20gcGFyZW50g/hQwizc3VwhSEMhZghBJw1oqUAPLH8s/yFjPFskBzMnbPH/gMHAWEwEaf/hCcFgDgEIBbW3bPBQBzshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFlAD+gJwAcpoI26zJW6zsZczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAVAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAN7IIcEAmIAtAcsHAaMB3iGCODJ8snNBGdO3qaoduY4gcCBxjhQEeqkMpjAlqBKgBKoHAqQhwABFMOYwM6oCzwGOK28AcI4RI3qpCBJvjAGkA3qpBCDAABTmMyKlA5xTAm+BpjBYywcCpVnkMDHiydDMWYcv");let n=A.beginCell();n.storeRef(e),n.storeUint(0,1);const o=n.endCell();return{code:s,data:o}}const L={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class l{constructor(e,n){r(this,"address");r(this,"init");r(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"HiFromParent",header:3517475402,fields:[]},{name:"HiFromChild",header:1237539370,fields:[]}],errors:L});this.address=e,this.init=n}static async init(){return await B()}static async fromInit(){const e=await B(),n=A.contractAddress(0,e);return new l(n,e)}static fromAddress(e){return new l(e)}async send(e,n,o,t){let i=null;if(t==="greet 3"&&(i=A.beginCell().storeUint(0,32).storeStringTail(t).endCell()),t&&typeof t=="object"&&!(t instanceof A.Slice)&&t.$$type==="HiFromChild"&&(i=A.beginCell().store(b(t)).endCell()),t&&typeof t=="object"&&!(t instanceof A.Slice)&&t.$$type==="Deploy"&&(i=A.beginCell().store(D(t)).endCell()),i===null)throw new Error("Invalid message type");await e.internal(n,{...o,body:i})}}function S(s){return e=>{let n=e;n.storeUint(3517475402,32),n.storeStringRefTail(s.greeting)}}function J(s){return e=>{e.storeInt(s.seqno,257)}}async function y(s){const e=A.Cell.fromBase64("te6ccgECCQEAAp0AART/APSkE/S88sgLAQIBYgIDAfDQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GLtRNDUAfhj0gABlNM/ATGOE/go1wsKgwm68uCJgQEB1wABAdHiWds8MMj4QwHMfwHKAAEByz/J7VQEALmhd6ME4LnYerpZXPY9CdhzrJUKNs0E4TusalpWyPlmRadeW/vixHME4ECrgDcAzscpnLB1XI5LZYcE4DepO98qiy3jjqenvAqzhk0E4TsunLVmnZbmdB0s2yjN0UkC6HAh10nCH5UwINcLH94Cklt/4AGCENGoakq6j1XTHwGCENGoakq68uCB1AHQMTAg2zz+FDCNBdoYW5kbGluZyBoaSBmcm9tIHBhcmVudIP4UMIs3N1cIUhDIWYIQScNaKlADyx/LP8hYzxbJAczJ2zx/4DBwBQYA3sghwQCYgC0BywcBowHeIYI4Mnyyc0EZ07epqh25jiBwIHGOFAR6qQymMCWoEqAEqgcCpCHAAEUw5jAzqgLPAY4rbwBwjhEjeqkIEm+MAaQDeqkEIMAAFOYzIqUDnFMCb4GmMFjLBwKlWeQwMeLJ0AEaf/hCcFgDgEIBbW3bPAcBzshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFlAD+gJwAcpoI26zJW6zsZczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAIAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjM"),n=A.Cell.fromBase64("te6cckECCwEAAqcAAQHAAQEFoNCDAgEU/wD0pBP0vPLICwMCAWIFBAC5oXejBOC52Hq6WVz2PQnYc6yVCjbNBOE7rGpaVsj5ZkWnXlv74sRzBOBAq4A3AM7HKZywdVyOS2WHBOA3qTvfKost446np7wKs4ZNBOE7Lpy1Zp2W5nQdLNsozdFJAfDQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GLtRNDUAfhj0gABlNM/ATGOE/go1wsKgwm68uCJgQEB1wABAdHiWds8MMj4QwHMfwHKAAEByz/J7VQGAuhwIddJwh+VMCDXCx/eApJbf+ABghDRqGpKuo9V0x8BghDRqGpKuvLggdQB0DEwINs8/hQwjQXaGFuZGxpbmcgaGkgZnJvbSBwYXJlbnSD+FDCLNzdXCFIQyFmCEEnDWipQA8sfyz/IWM8WyQHMyds8f+AwcAoHARp/+EJwWAOAQgFtbds8CAHOyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WUAP6AnABymgjbrMlbrOxlzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AAkAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwA3sghwQCYgC0BywcBowHeIYI4Mnyyc0EZ07epqh25jiBwIHGOFAR6qQymMCWoEqAEqgcCpCHAAEUw5jAzqgLPAY4rbwBwjhEjeqkIEm+MAaQDeqkEIMAAFOYzIqUDnFMCb4GmMFjLBwKlWeQwMeLJ0AwgNDI=");let o=A.beginCell();o.storeRef(n),o.storeUint(0,1),J({$$type:"TodoChild_init_args",seqno:s})(o);const t=o.endCell();return{code:e,data:t}}const q={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class a{constructor(e,n){r(this,"address");r(this,"init");r(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"HiFromParent",header:3517475402,fields:[]},{name:"HiFromChild",header:1237539370,fields:[]}],errors:q});this.address=e,this.init=n}static async init(e){return await y(e)}static async fromInit(e){const n=await y(e),o=A.contractAddress(0,n);return new a(o,n)}static fromAddress(e){return new a(e)}async send(e,n,o,t){let i=null;if(t&&typeof t=="object"&&!(t instanceof A.Slice)&&t.$$type==="HiFromParent"&&(i=A.beginCell().store(S(t)).endCell()),i===null)throw new Error("Invalid message type");await e.internal(n,{...o,body:i})}}function F(s,e,n){let o;f(s,w,c=>n(3,o=c));let t,i,g;return H(w,o={markdown:M,tactCode:E,deploy:async()=>{t=await Q.Blockchain.create();const c=await t.treasury("deployer");i=c.getSender(),g=t.openContract(await l.fromInit());const m={[c.address.toString()]:"deployer",[g.address.toString()]:"TodoParent",[(await a.fromInit(1n)).address.toString()]:"TodoChild(1)",[(await a.fromInit(2n)).address.toString()]:"TodoChild(2)",[(await a.fromInit(3n)).address.toString()]:"TodoChild(3)"};return[[g],m,[await g.send(c.getSender(),{value:A.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{"greet 3":async()=>[await g.send(i,{value:A.toNano(1)},"greet 3")]},getters:{},prev:d(import.meta.url).prev,next:d(import.meta.url).next},o),[]}class j extends I{constructor(e){super(),u(this,e,F,null,p,{})}}export{j as default};
