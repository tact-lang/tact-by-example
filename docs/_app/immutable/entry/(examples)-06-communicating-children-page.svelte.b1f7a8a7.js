var y=Object.defineProperty;var u=(s,e,n)=>e in s?y(s,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[e]=n;var i=(s,e,n)=>(u(s,typeof e!="symbol"?e+"":e,n),n);import{S as h,i as I,s as p,I as H,ac as f}from"../chunks/index.9fe14626.js";import{d as A,g as l,s as B}from"../chunks/store.d3ab02ad.js";import{d as Q}from"../chunks/index.78404594.js";const M=`# Communicating with Children

In a parent-child relationship, the user would normally just deploy the parent. This is what's happening here when you press the <span class="mdButton blue">Deploy</span> button.

In this example, the user is only supposed to communicate with the parent. You can send the parent contract a message by pressing the <span class="mdButton grape">Send greet 3</span> button.

This message will instruct the parent to send its own \`HiFromParent\` message to the first 3 children. Every child will respond to the greeting by sending the parent its own \`HiFromChild\` back.

## How can parent know if a child is deployed?

You can't send a message to a contract until it is deployed. How can the parent guarantee that they're not communicating with a child that wasn't deployed yet?

The best practice is to include the *stateInit* on every message. This way, if the child isn't deployed, it will be. If the child is already deployed, this field will be ignored.

This is called lazy deployment.`,b=`import "@stdlib/deploy";

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
}`;function D(s){return e=>{let n=e;n.storeUint(2490013878,32),n.storeUint(s.queryId,64)}}function F(s){return e=>{let n=e;n.storeUint(1237539370,32),n.storeUint(s.fromSeqno,64),n.storeStringRefTail(s.greeting)}}async function w(){const s=A.Cell.fromBase64("te6ccgECEgEAA9YAART/APSkE/S88sgLAQIBYgIDAo7QAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxZ2zwwMMj4QwHMfwHKAMntVAQFAgFYDg8BNO1E0NQB+GPSADCRbeD4KNcLCoMJuvLgids8BgPY7aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEEnDWiq6jrkx0x8BghBJw1oquvLggdM/1AHQEmwSMI0FmhhbmRsaW5nIGhpIGZyb20gY2hpbGSD+FDDbPP4UMH/gIYIQlGqYtrrjAgHAAJEw4w1wBwgJAAJtAN7IIcEAmIAtAcsHAaMB3iGCODJ8snNBGdO3qaoduY4gcCBxjhQEeqkMpjAlqBKgBKoHAqQhwABFMOYwM6oCzwGOK28AcI4RI3qpCBJvjAGkA3qpBCDAABTmMyKlA5xTAm+BpjBYywcCpVnkMDHiydABXDHTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/Jf/hCcFgDgEIBbW3bPH8MAU75AYLwcZJZfzDQTXAA2C0di84/5mElqb/PN+6i8VJMtdiaydq64wIKAvpwc490pPhDIds8XHBZyHABywFzAcsBcAHLABLMzMn5AMhyAcsBcAHLABLKB8v/ydAg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIi3ZGFybGluZ4yAGCENGoakpYyx/IWM8WyQHMyROCEAX14QBacgJ/BkVV2zzkMH/bMQsMAGQB0PQEMG0BgWhBAYAQ9A9vofLghwGBaEEiAoAQ9BfIAcj0AMkBzHABygBYAYEBAc8AyQHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wANAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMALm7vRgnBc7D1dLK57HoTsOdZKhRtmgnCd1jUtK2R8syLTry398WI5gnAgVcAbgGdjlM5YOq5HJbLDgnAb1J3vlUWW8cdT094FWcMmgnCdl05as07LczoOlm2UZuikgCAUgQEQARsK+7UTQ0gABgAHWybuNDVpcGZzOi8vUW1UUlFrNGk2cUxpRVFpekdSZDVzZ2k1MW92RmJudnQyc3hCdGlwUVpyY3FWRIIA=="),e=A.Cell.fromBase64("te6cckECHwEABTwAAQHAAQIBIBACAQW80jwDART/APSkE/S88sgLBAIBYggFAgFYFwYCAUgWBwB1sm7jQ1aXBmczovL1FtVFJRazRpNnFMaUVRaXpHUmQ1c2dpNTFvdkZibnZ0MnN4QnRpcFFacmNxVkSCACjtAB0NMDAXGwowH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIVFBTA28E+GEC+GLbPFnbPDAwyPhDAcx/AcoAye1UDgkD2O2i7ftwIddJwh+VMCDXCx/eApJbf+AhghBJw1oquo65MdMfAYIQScNaKrry4IHTP9QB0BJsEjCNBZoYW5kbGluZyBoaSBmcm9tIGNoaWxkg/hQw2zz+FDB/4CGCEJRqmLa64wIBwACRMOMNcB0NCgFO+QGC8HGSWX8w0E1wANgtHYvOP+ZhJam/zzfuovFSTLXYmsnauuMCCwL6cHOPdKT4QyHbPFxwWchwAcsBcwHLAXABywASzMzJ+QDIcgHLAXABywASygfL/8nQINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiIt2RhcmxpbmeMgBghDRqGpKWMsfyFjPFskBzMkTghAF9eEAWnICfwZFVds85DB/2zEMGwBkAdD0BDBtAYFoQQGAEPQPb6Hy4IcBgWhBIgKAEPQXyAHI9ADJAcxwAcoAWAGBAQHPAMkBXDHTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/Jf/hCcFgDgEIBbW3bPH8bATTtRNDUAfhj0gAwkW3g+CjXCwqDCbry4InbPA8AAm0BBb9CDBEBFP8A9KQT9LzyyAsSAgFiGBMCAVgXFAIBSBYVAHWybuNDVpcGZzOi8vUW1mUlNRM1FoZ0NmWUNmMlFUem4yS0JQZnZ6WUxXNDVlRjkyR3ZOZFY3NGpiU4IAARsK+7UTQ0gABgALm7vRgnBc7D1dLK57HoTsOdZKhRtmgnCd1jUtK2R8syLTry398WI5gnAgVcAbgGdjlM5YOq5HJbLDgnAb1J3vlUWW8cdT094FWcMmgnCdl05as07LczoOlm2UZuikgClNAB0NMDAXGwowH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIVFBTA28E+GEC+GLbPFnbPDDI+EMBzH8BygABAcs/ye1UHhkBPHAh10nCH5UwINcLH94Cklt/4AGCENGoakq64wIwcBoCwNMfAYIQ0ahqSrry4IHUAdAxMCDbPP4UMI0F2hhbmRsaW5nIGhpIGZyb20gcGFyZW50g/hQwizc3VwhSEMhZghBJw1oqUAPLH8s/yFjPFskBzMl/+EJwWAOAQgFtbds8fx0bAcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7ABwAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwA3sghwQCYgC0BywcBowHeIYI4Mnyyc0EZ07epqh25jiBwIHGOFAR6qQymMCWoEqAEqgcCpCHAAEUw5jAzqgLPAY4rbwBwjhEjeqkIEm+MAaQDeqkEIMAAFOYzIqUDnFMCb4GmMFjLBwKlWeQwMeLJ0ABG7UTQ1AH4Y9IAAZTTPwEx4Pgo1wsKgwm68uCJgQEB1wABAdGYWKXA");let n=A.beginCell();n.storeRef(e),n.storeUint(0,1);const o=n.endCell();return{code:s,data:o}}const E={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class d{constructor(e,n){i(this,"address");i(this,"init");i(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"HiFromParent",header:3517475402,fields:[]},{name:"HiFromChild",header:1237539370,fields:[]}],errors:E});this.address=e,this.init=n}static async init(){return await w()}static async fromInit(){const e=await w(),n=A.contractAddress(0,e);return new d(n,e)}static fromAddress(e){return new d(e)}async send(e,n,o,t){let r=null;if(t==="greet 3"&&(r=A.beginCell().storeUint(0,32).storeStringTail(t).endCell()),t&&typeof t=="object"&&!(t instanceof A.Slice)&&t.$$type==="HiFromChild"&&(r=A.beginCell().store(F(t)).endCell()),t&&typeof t=="object"&&!(t instanceof A.Slice)&&t.$$type==="Deploy"&&(r=A.beginCell().store(D(t)).endCell()),r===null)throw new Error("Invalid message type");await e.internal(n,{...o,body:r})}}function L(s){return e=>{let n=e;n.storeUint(3517475402,32),n.storeStringRefTail(s.greeting)}}function J(s){return e=>{e.storeInt(s.seqno,257)}}async function m(s){const e=A.Cell.fromBase64("te6ccgECDgEAAuIAART/APSkE/S88sgLAQIBYgIDApTQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxZ2zwwyPhDAcx/AcoAAQHLP8ntVAQFAgFYCgsARu1E0NQB+GPSAAGU0z8BMeD4KNcLCoMJuvLgiYEBAdcAAQHRATxwIddJwh+VMCDXCx/eApJbf+ABghDRqGpKuuMCMHAGAsDTHwGCENGoakq68uCB1AHQMTAg2zz+FDCNBdoYW5kbGluZyBoaSBmcm9tIHBhcmVudIP4UMIs3N1cIUhDIWYIQScNaKlADyx/LP8hYzxbJAczJf/hCcFgDgEIBbW3bPH8HCADeyCHBAJiALQHLBwGjAd4hgjgyfLJzQRnTt6mqHbmOIHAgcY4UBHqpDKYwJagSoASqBwKkIcAARTDmMDOqAs8BjitvAHCOESN6qQgSb4wBpAN6qQQgwAAU5jMipQOcUwJvgaYwWMsHAqVZ5DAx4snQAcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AAkAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSAIBSAwNABGwr7tRNDSAAGAAdbJu40NWlwZnM6Ly9RbWZSU1EzUWhnQ2ZZQ2YyUVR6bjJLQlBmdnpZTFc0NWVGOTJHdk5kVjc0amJTgg"),n=A.Cell.fromBase64("te6cckECEAEAAuwAAQHAAQEFoNCDAgEU/wD0pBP0vPLICwMCAWIJBAIBWAgFAgFIBwYAdbJu40NWlwZnM6Ly9RbWZSU1EzUWhnQ2ZZQ2YyUVR6bjJLQlBmdnpZTFc0NWVGOTJHdk5kVjc0amJTggABGwr7tRNDSAAGAAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSAKU0AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8Wds8MMj4QwHMfwHKAAEByz/J7VQPCgE8cCHXScIflTAg1wsf3gKSW3/gAYIQ0ahqSrrjAjBwCwLA0x8BghDRqGpKuvLggdQB0DEwINs8/hQwjQXaGFuZGxpbmcgaGkgZnJvbSBwYXJlbnSD+FDCLNzdXCFIQyFmCEEnDWipQA8sfyz/IWM8WyQHMyX/4QnBYA4BCAW1t2zx/DgwByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsADQCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzADeyCHBAJiALQHLBwGjAd4hgjgyfLJzQRnTt6mqHbmOIHAgcY4UBHqpDKYwJagSoASqBwKkIcAARTDmMDOqAs8BjitvAHCOESN6qQgSb4wBpAN6qQQgwAAU5jMipQOcUwJvgaYwWMsHAqVZ5DAx4snQAEbtRNDUAfhj0gABlNM/ATHg+CjXCwqDCbry4ImBAQHXAAEB0RZHTB4=");let o=A.beginCell();o.storeRef(n),o.storeUint(0,1),J({$$type:"TodoChild_init_args",seqno:s})(o);const t=o.endCell();return{code:e,data:t}}const S={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class a{constructor(e,n){i(this,"address");i(this,"init");i(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"HiFromParent",header:3517475402,fields:[]},{name:"HiFromChild",header:1237539370,fields:[]}],errors:S});this.address=e,this.init=n}static async init(e){return await m(e)}static async fromInit(e){const n=await m(e),o=A.contractAddress(0,n);return new a(o,n)}static fromAddress(e){return new a(e)}async send(e,n,o,t){let r=null;if(t&&typeof t=="object"&&!(t instanceof A.Slice)&&t.$$type==="HiFromParent"&&(r=A.beginCell().store(L(t)).endCell()),r===null)throw new Error("Invalid message type");await e.internal(n,{...o,body:r})}}function T(s,e,n){let o;H(s,B,c=>n(3,o=c));let t,r,g;return f(B,o={markdown:M,tactCode:b,deploy:async()=>{t=await Q.Blockchain.create();const c=await t.treasury("deployer");r=c.getSender(),g=t.openContract(await d.fromInit());const C={[c.address.toString()]:"deployer",[g.address.toString()]:"TodoParent",[(await a.fromInit(1n)).address.toString()]:"TodoChild(1)",[(await a.fromInit(2n)).address.toString()]:"TodoChild(2)",[(await a.fromInit(3n)).address.toString()]:"TodoChild(3)"};return[[g],C,[await g.send(c.getSender(),{value:A.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{"greet 3":async()=>[await g.send(r,{value:A.toNano(1)},"greet 3")]},getters:{},prev:l(import.meta.url).prev,next:l(import.meta.url).next},o),[]}class U extends h{constructor(e){super(),I(this,e,T,null,p,{})}}export{U as default};
