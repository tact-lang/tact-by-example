var h=Object.defineProperty;var B=(o,e,n)=>e in o?h(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n;var i=(o,e,n)=>(B(o,typeof e!="symbol"?e+"":e,n),n);import{S as y,i as p,s as f,I,ac as E}from"../chunks/index.9fe14626.js";import{d as a,g,s as w}from"../chunks/store.380869d4.js";import{d as b}from"../chunks/index.b268dd33.js";const D=`# Parent-Child Relationship

A very common design pattern in Tact is implementing two contracts with a parent-child relationship.

Under this pattern, we would normally have a single instance parent which is deployed by the user. This is the \`TodoParent\` contract in this example.

The child contract \`TodoChild\` will have multiple instances. These instances will normally be deployed by the parent by sending the parent a message. 

Try this out. Press the <span class="mdButton grape">Send "deploy another" to parent</span> button multiple times to send the message to the parent and instruct it to deploy more and more children.

Also notice how we can omit the \`Deployable\` trait from the children. This trait is mostly useful for contracts that users deploy. Since the user only deploys the parent, omitting the trait from the children will explain our intent to readers.

## Unbounded data structures

An interesting property of this pattern is that the number of potential children is unbounded! We can have an infinite number of children.

In general, inifinite data structures that can actually scale to billions are very difficult to implement on blockchain efficiently. This pattern showcases the power of TON.`,M=`import "@stdlib/deploy";

// we have multiple instances of the children
contract TodoChild {

    seqno: Int as uint64;
 
    // when deploying an instance, we must specify its index (sequence number)
    init(seqno: Int) {
        self.seqno = seqno;
    }

    // this message handler will just debug print the seqno so we can see when it's called
    receive("identify") {
        dump(self.seqno);
    }
}

// we have one instance of the parent
contract TodoParent with Deployable {

    numChildren: Int as uint64;
 
    init() {
        self.numChildren = 0;
    }

    // this message handler will cause the contract to deploy another child
    receive("deploy another") {
        self.numChildren = self.numChildren + 1;
        let init: StateInit = initOf TodoChild(self.numChildren);
        send(SendParameters{
            to: contractAddress(init),
            value: ton("0.1"),              // pay for message, the deployment and give some TON for storage
            mode: SendIgnoreErrors,
            code: init.code,                // attaching the state init will cause the message to deploy
            data: init.data,
            body: "identify".asComment()    // we must piggyback the deployment on another message
        });
    }

    get fun numChildren(): Int {
        return self.numChildren;
    }
}`;function Q(o){return e=>{let n=e;n.storeUint(2490013878,32),n.storeUint(o.queryId,64)}}async function C(){const o=a.Cell.fromBase64("te6ccgECEQEAA40AART/APSkE/S88sgLAQIBYgIDAgLLBAUCAVgODwLl0AdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GLtRNDUAfhj0gABlNM/ATGOjjD4KNcLCoMJuvLgids84lnbPDDI+EMBzH8BygABAcs/ye1UhAGAGemAOh6Ahg2gMC0IIDACHoHt9D5cEOAwLQgkQFACHoL5ADkegBkgOY4AOUALADAgIDngGTAApjtou37cCHXScIflTAg1wsf3gKSW3/gIYIQlGqYtrqOozHTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J2zx/4AHAAJEw4w1wBwgBGn/4QnBYA4BCAW1t2zwLA6j5AYLwqu63xox+f3M2DuE0KgCOkpKQPsvFEj+HxlHYvx7UJJi6j6yk+EMh8Bxc2zyCEAX14QByi4aWRlbnRpZnmNs8EDVEMBJ/BgUEQTPbPH/bMeAJCgsAjHBZyHABywFzAcsBcAHLABLMzMn5AMhyAcsBcAHLABLKB8v/ydAg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkBQshwAcsfbwABb4xtb4wB2zxvIgHJkyFus5YBbyJZzMnoMQwBzshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFlAD+gJwAcpoI26zJW6zsZczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wANALog10oh10mXIMIAIsIAsY5KA28igH8izzGrAqEFqwJRVbYIIMIAnCCqAhXXGFAzzxZAFN5ZbwJTQaHCAJnIAW8CUEShqgKOEjEzwgCZ1DDQINdKIddJknAg4uLoXwMAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSAFFuB0e1E0NQB+GPSAAGU0z8BMY6OMPgo1wsKgwm68uCJ2zzigQAAJw"),e=a.Cell.fromBase64("te6cckECGwEABVIAAQHAAQIBIBQCAQW80jwDART/APSkE/S88sgLBAIBYggFAgFYBwYBRbgdHtRNDUAfhj0gABlNM/ATGOjjD4KNcLCoMJuvLgids84oEwC5u70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIAgLLCgkAZ6YA6HoCGDaAwLQggMAIege30PlwQ4DAtCCRAUAIegvkAOR6AGSA5jgA5QAsAMCAgOeAZMAC5dAHQ0wMBcbDAAZF/kXDiAfpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiVRQUwNvBPhhAvhi7UTQ1AH4Y9IAAZTTPwExjo4w+CjXCwqDCbry4InbPOJZ2zwwyPhDAcx/AcoAAQHLP8ntVITCwKY7aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEJRqmLa6jqMx0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yds8f+ABwACRMOMNcBAMA6j5AYLwqu63xox+f3M2DuE0KgCOkpKQPsvFEj+HxlHYvx7UJJi6j6yk+EMh8Bxc2zyCEAX14QByi4aWRlbnRpZnmNs8EDVEMBJ/BgUEQTPbPH/bMeAPDREBQshwAcsfbwABb4xtb4wB2zxvIgHJkyFus5YBbyJZzMnoMQ4AuiDXSiHXSZcgwgAiwgCxjkoDbyKAfyLPMasCoQWrAlFVtgggwgCcIKoCFdcYUDPPFkAU3llvAlNBocIAmcgBbwJQRKGqAo4SMTPCAJnUMNAg10oh10mScCDi4uhfAwCMcFnIcAHLAXMBywFwAcsAEszMyfkAyHIBywFwAcsAEsoHy//J0CDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiQEaf/hCcFgDgEIBbW3bPBEBzshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFlAD+gJwAcpoI26zJW6zsZczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wASAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAAJwAQW/QgwVART/APSkE/S88sgLFgIBYhgXALmhd6ME4LnYerpZXPY9CdhzrJUKNs0E4TusalpWyPlmRadeW/vixHME4ECrgDcAzscpnLB1XI5LZYcE4DepO98qiy3jjqenvAqzhk0E4TsunLVmnZbmdB0s2yjN0UkB8NAB0NMDAXGwwAGRf5Fw4gH6QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IlUUFMDbwT4YQL4Yu1E0NQB+GPSAAGU0z8BMY4T+CjXCwqDCbry4ImBAQHXAAEB0eJZ2zwwyPhDAcx/AcoAAQHLP8ntVBkBoO2i7ftwIddJwh+VMCDXCx/eApJbf+ABwACOsfkBgvB2bSGJHoZfKfCmdwduN4rCPdtOz0o5Ai1EQdtvLNSE0LqOiSDbPP4UMH/bMeCRMOJwGgDeyCHBAJiALQHLBwGjAd4hgjgyfLJzQRnTt6mqHbmOIHAgcY4UBHqpDKYwJagSoASqBwKkIcAARTDmMDOqAs8BjitvAHCOESN6qQgSb4wBpAN6qQQgwAAU5jMipQOcUwJvgaYwWMsHAqVZ5DAx4snQhX8ybw==");let n=a.beginCell();n.storeRef(e),n.storeUint(0,1);const t=n.endCell();return{code:o,data:t}}const H={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class c{constructor(e,n){i(this,"address");i(this,"init");i(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]}],errors:H});this.address=e,this.init=n}static async init(){return await C()}static async fromInit(){const e=await C(),n=a.contractAddress(0,e);return new c(n,e)}static fromAddress(e){return new c(e)}async send(e,n,t,s){let r=null;if(s==="deploy another"&&(r=a.beginCell().storeUint(0,32).storeStringTail(s).endCell()),s&&typeof s=="object"&&!(s instanceof a.Slice)&&s.$$type==="Deploy"&&(r=a.beginCell().store(Q(s)).endCell()),r===null)throw new Error("Invalid message type");await e.internal(n,{...t,body:r})}async getNumChildren(e){let n=new a.TupleBuilder;return(await e.get("numChildren",n.build())).stack.readBigNumber()}}function L(o){return e=>{e.storeInt(o.seqno,257)}}async function u(o){const e=a.Cell.fromBase64("te6ccgECBgEAAbAAART/APSkE/S88sgLAQIBYgIDAfDQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GLtRNDUAfhj0gABlNM/ATGOE/go1wsKgwm68uCJgQEB1wABAdHiWds8MMj4QwHMfwHKAAEByz/J7VQEALmhd6ME4LnYerpZXPY9CdhzrJUKNs0E4TusalpWyPlmRadeW/vixHME4ECrgDcAzscpnLB1XI5LZYcE4DepO98qiy3jjqenvAqzhk0E4TsunLVmnZbmdB0s2yjN0UkBoO2i7ftwIddJwh+VMCDXCx/eApJbf+ABwACOsfkBgvB2bSGJHoZfKfCmdwduN4rCPdtOz0o5Ai1EQdtvLNSE0LqOiSDbPP4UMH/bMeCRMOJwBQDeyCHBAJiALQHLBwGjAd4hgjgyfLJzQRnTt6mqHbmOIHAgcY4UBHqpDKYwJagSoASqBwKkIcAARTDmMDOqAs8BjitvAHCOESN6qQgSb4wBpAN6qQQgwAAU5jMipQOcUwJvgaYwWMsHAqVZ5DAx4snQ"),n=a.Cell.fromBase64("te6cckECCAEAAboAAQHAAQEFoNCDAgEU/wD0pBP0vPLICwMCAWIFBAC5oXejBOC52Hq6WVz2PQnYc6yVCjbNBOE7rGpaVsj5ZkWnXlv74sRzBOBAq4A3AM7HKZywdVyOS2WHBOA3qTvfKost446np7wKs4ZNBOE7Lpy1Zp2W5nQdLNsozdFJAfDQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GLtRNDUAfhj0gABlNM/ATGOE/go1wsKgwm68uCJgQEB1wABAdHiWds8MMj4QwHMfwHKAAEByz/J7VQGAaDtou37cCHXScIflTAg1wsf3gKSW3/gAcAAjrH5AYLwdm0hiR6GXynwpncHbjeKwj3bTs9KOQItREHbbyzUhNC6jokg2zz+FDB/2zHgkTDicAcA3sghwQCYgC0BywcBowHeIYI4Mnyyc0EZ07epqh25jiBwIHGOFAR6qQymMCWoEqAEqgcCpCHAAEUw5jAzqgLPAY4rbwBwjhEjeqkIEm+MAaQDeqkEIMAAFOYzIqUDnFMCb4GmMFjLBwKlWeQwMeLJ0AYwxvg=");let t=a.beginCell();t.storeRef(n),t.storeUint(0,1),L({$$type:"TodoChild_init_args",seqno:o})(t);const s=t.endCell();return{code:e,data:s}}const J={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class l{constructor(e,n){i(this,"address");i(this,"init");i(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]}],errors:J});this.address=e,this.init=n}static async init(e){return await u(e)}static async fromInit(e){const n=await u(e),t=a.contractAddress(0,n);return new l(t,n)}static fromAddress(e){return new l(e)}async send(e,n,t,s){let r=null;if(s==="identify"&&(r=a.beginCell().storeUint(0,32).storeStringTail(s).endCell()),r===null)throw new Error("Invalid message type");await e.internal(n,{...t,body:r})}}function T(o,e,n){let t;I(o,w,d=>n(3,t=d));let s,r,A;return E(w,t={markdown:D,tactCode:M,deploy:async()=>{s=await b.Blockchain.create();const d=await s.treasury("deployer");r=d.getSender(),A=s.openContract(await c.fromInit());const m={[d.address.toString()]:"deployer",[A.address.toString()]:"TodoParent",[(await l.fromInit(1n)).address.toString()]:"TodoChild(1)",[(await l.fromInit(2n)).address.toString()]:"TodoChild(2)",[(await l.fromInit(3n)).address.toString()]:"TodoChild(3)"};return[[A],m,[await A.send(d.getSender(),{value:a.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{'"deploy another" to parent':async()=>[await A.send(r,{value:a.toNano(1)},"deploy another")]},getters:{numChildren:async()=>await A.getNumChildren()},prev:g(import.meta.url).prev,next:g(import.meta.url).next},t),[]}class k extends y{constructor(e){super(),p(this,e,T,null,f,{})}}export{k as default};
