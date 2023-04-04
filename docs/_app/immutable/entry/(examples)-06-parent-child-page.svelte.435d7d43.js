var C=Object.defineProperty;var y=(o,e,n)=>e in o?C(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n;var i=(o,e,n)=>(y(o,typeof e!="symbol"?e+"":e,n),n);import{S as B,i as p,s as I,I as f,ac as Q}from"../chunks/index.9fe14626.js";import{d as a,g,s as w}from"../chunks/store.d3ab02ad.js";import{d as E}from"../chunks/index.78404594.js";const M=`# Parent-Child Relationship

A very common design pattern in Tact is implementing two contracts with a parent-child relationship.

Under this pattern, we would normally have a single instance parent which is deployed by the user. This is the \`TodoParent\` contract in this example.

The child contract \`TodoChild\` will have multiple instances. These instances will normally be deployed by the parent by sending the parent a message. 

Try this out. Press the <span class="mdButton grape">Send "deploy another" to parent</span> button multiple times to send the message to the parent and instruct it to deploy more and more children.

Also notice how we can omit the \`Deployable\` trait from the children. This trait is mostly useful for contracts that users deploy. Since the user only deploys the parent, omitting the trait from the children will explain our intent to readers.

## Unbounded data structures

An interesting property of this pattern is that the number of potential children is unbounded! We can have an infinite number of children.

In general, inifinite data structures that can actually scale to billions are very difficult to implement on blockchain efficiently. This pattern showcases the power of TON.`,H=`import "@stdlib/deploy";

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
}`;function b(o){return e=>{let n=e;n.storeUint(2490013878,32),n.storeUint(o.queryId,64)}}async function u(){const o=a.Cell.fromBase64("te6ccgECFAEAAykAART/APSkE/S88sgLAQIBYgIDApTQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxZ2zwwyPhDAcx/AcoAAQHLP8ntVBEEAgFYCwwCru2i7ftwIddJwh+VMCDXCx/eApJbf+AhghCUapi2uo6uMdMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8l/+EJwWAOAQgFtbds8f+ABwACRMOMNcAkFAU75AYLwqu63xox+f3M2DuE0KgCOkpKQPsvFEj+HxlHYvx7UJJi64wIGA8Ck+EMh2zxccFnIcAHLAXMBywFwAcsAEszMyfkAyHIBywFwAcsAEsoHy//J0CDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IiCEAX14QByiBA1RDASfwYFBEEz2zx/2zEHCAkAZAHQ9AQwbQGBaEEBgBD0D2+h8uCHAYFoQSICgBD0F8gByPQAyQHMcAHKAFgBgQEBzwDJABgAAAAAaWRlbnRpZnkByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsACgCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAC5u70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIAgFIDQ4CAWIPEAB1sm7jQ1aXBmczovL1FtUnJwU1ZRR21nc1Jzd3hwdUZwZ2QxN2N0cFA5N0ZSVHZwWkc4VWZyQkhhOUeCACDaejtnm2eGMREgAPpX3aiaGkAAMBPO1E0NQB+GPSAAGU0z8BMeAw+CjXCwqDCbry4InbPBMAAiAAAnA="),e=a.Cell.fromBase64("te6cckECIgEABNkAAQHAAQIBIBYCAQW80jwDART/APSkE/S88sgLBAIBYgwFAgFYHQYCAUgIBwB1sm7jQ1aXBmczovL1FtUnJwU1ZRR21nc1Jzd3hwdUZwZ2QxN2N0cFA5N0ZSVHZwWkc4VWZyQkhhOUeCACAWIKCQAPpX3aiaGkAAMCDaejtnm2eGMUCwACIAKU0AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8Wds8MMj4QwHMfwHKAAEByz/J7VQUDQKu7aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEJRqmLa6jq4x0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yX/4QnBYA4BCAW1t2zx/4AHAAJEw4w1wEg4BTvkBgvCq7rfGjH5/czYO4TQqAI6SkpA+y8USP4fGUdi/HtQkmLrjAg8DwKT4QyHbPFxwWchwAcsBcwHLAXABywASzMzJ+QDIcgHLAXABywASygfL/8nQINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiIIQBfXhAHKIEDVEMBJ/BgUEQTPbPH/bMREQEgAYAAAAAGlkZW50aWZ5AGQB0PQEMG0BgWhBAYAQ9A9vofLghwGBaEEiAoAQ9BfIAcj0AMkBzHABygBYAYEBAc8AyQHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wATAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMATztRNDUAfhj0gABlNM/ATHgMPgo1wsKgwm68uCJ2zwVAAJwAQW/QgwXART/APSkE/S88sgLGAIBYh4ZAgFYHRoCAUgcGwB1sm7jQ1aXBmczovL1FtUmJtSG5iS3JUdFAxYWdncFJmOWZyS0cyMTNXYWFjdkVUUVBDVXUzbVJyM0eCAAEbCvu1E0NIAAYAC5u70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIApTQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxZ2zwwyPhDAcx/AcoAAQHLP8ntVCEfAaDtou37cCHXScIflTAg1wsf3gKSW3/gAcAAjrH5AYLwdm0hiR6GXynwpncHbjeKwj3bTs9KOQItREHbbyzUhNC6jokg2zz+FDB/2zHgkTDicCAA3sghwQCYgC0BywcBowHeIYI4Mnyyc0EZ07epqh25jiBwIHGOFAR6qQymMCWoEqAEqgcCpCHAAEUw5jAzqgLPAY4rbwBwjhEjeqkIEm+MAaQDeqkEIMAAFOYzIqUDnFMCb4GmMFjLBwKlWeQwMeLJ0ABG7UTQ1AH4Y9IAAZTTPwEx4Pgo1wsKgwm68uCJgQEB1wABAdFsFL1R");let n=a.beginCell();n.storeRef(e),n.storeUint(0,1);const t=n.endCell();return{code:o,data:t}}const D={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class c{constructor(e,n){i(this,"address");i(this,"init");i(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]}],errors:D});this.address=e,this.init=n}static async init(){return await u()}static async fromInit(){const e=await u(),n=a.contractAddress(0,e);return new c(n,e)}static fromAddress(e){return new c(e)}async send(e,n,t,s){let r=null;if(s==="deploy another"&&(r=a.beginCell().storeUint(0,32).storeStringTail(s).endCell()),s&&typeof s=="object"&&!(s instanceof a.Slice)&&s.$$type==="Deploy"&&(r=a.beginCell().store(b(s)).endCell()),r===null)throw new Error("Invalid message type");await e.internal(n,{...t,body:r})}async getNumChildren(e){let n=new a.TupleBuilder;return(await e.get("numChildren",n.build())).stack.readBigNumber()}}function S(o){return e=>{e.storeInt(o.seqno,257)}}async function m(o){const e=a.Cell.fromBase64("te6ccgECCwEAAfoAART/APSkE/S88sgLAQIBYgIDApTQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxZ2zwwyPhDAcx/AcoAAQHLP8ntVAQFAgFYBwgARu1E0NQB+GPSAAGU0z8BMeD4KNcLCoMJuvLgiYEBAdcAAQHRAaDtou37cCHXScIflTAg1wsf3gKSW3/gAcAAjrH5AYLwdm0hiR6GXynwpncHbjeKwj3bTs9KOQItREHbbyzUhNC6jokg2zz+FDB/2zHgkTDicAYA3sghwQCYgC0BywcBowHeIYI4Mnyyc0EZ07epqh25jiBwIHGOFAR6qQymMCWoEqAEqgcCpCHAAEUw5jAzqgLPAY4rbwBwjhEjeqkIEm+MAaQDeqkEIMAAFOYzIqUDnFMCb4GmMFjLBwKlWeQwMeLJ0AC5u70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIAgFICQoAEbCvu1E0NIAAYAB1sm7jQ1aXBmczovL1FtUmJtSG5iS3JUdFAxYWdncFJmOWZyS0cyMTNXYWFjdkVUUVBDVXUzbVJyM0eCA="),n=a.Cell.fromBase64("te6cckECDQEAAgQAAQHAAQEFoNCDAgEU/wD0pBP0vPLICwMCAWIJBAIBWAgFAgFIBwYAdbJu40NWlwZnM6Ly9RbVJibUhuYktyVHRQMWFnZ3BSZjlmcktHMjEzV2FhY3ZFVFFQQ1V1M21ScjNHggABGwr7tRNDSAAGAAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSAKU0AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8Wds8MMj4QwHMfwHKAAEByz/J7VQMCgGg7aLt+3Ah10nCH5UwINcLH94Cklt/4AHAAI6x+QGC8HZtIYkehl8p8KZ3B243isI9207PSjkCLURB228s1ITQuo6JINs8/hQwf9sx4JEw4nALAN7IIcEAmIAtAcsHAaMB3iGCODJ8snNBGdO3qaoduY4gcCBxjhQEeqkMpjAlqBKgBKoHAqQhwABFMOYwM6oCzwGOK28AcI4RI3qpCBJvjAGkA3qpBCDAABTmMyKlA5xTAm+BpjBYywcCpVnkMDHiydAARu1E0NQB+GPSAAGU0z8BMeD4KNcLCoMJuvLgiYEBAdcAAQHRoz112w==");let t=a.beginCell();t.storeRef(n),t.storeUint(0,1),S({$$type:"TodoChild_init_args",seqno:o})(t);const s=t.endCell();return{code:e,data:s}}const Y={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class l{constructor(e,n){i(this,"address");i(this,"init");i(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]}],errors:Y});this.address=e,this.init=n}static async init(e){return await m(e)}static async fromInit(e){const n=await m(e),t=a.contractAddress(0,n);return new l(t,n)}static fromAddress(e){return new l(e)}async send(e,n,t,s){let r=null;if(s==="identify"&&(r=a.beginCell().storeUint(0,32).storeStringTail(s).endCell()),r===null)throw new Error("Invalid message type");await e.internal(n,{...t,body:r})}}function v(o,e,n){let t;f(o,w,d=>n(3,t=d));let s,r,A;return Q(w,t={markdown:M,tactCode:H,deploy:async()=>{s=await E.Blockchain.create();const d=await s.treasury("deployer");r=d.getSender(),A=s.openContract(await c.fromInit());const h={[d.address.toString()]:"deployer",[A.address.toString()]:"TodoParent",[(await l.fromInit(1n)).address.toString()]:"TodoChild(1)",[(await l.fromInit(2n)).address.toString()]:"TodoChild(2)",[(await l.fromInit(3n)).address.toString()]:"TodoChild(3)"};return[[A],h,[await A.send(d.getSender(),{value:a.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{'"deploy another" to parent':async()=>[await A.send(r,{value:a.toNano(1)},"deploy another")]},getters:{numChildren:async()=>await A.getNumChildren()},prev:g(import.meta.url).prev,next:g(import.meta.url).next},t),[]}class L extends B{constructor(e){super(),p(this,e,v,null,I,{})}}export{L as default};
