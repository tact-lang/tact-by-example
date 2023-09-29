var m=Object.defineProperty;var w=(a,e,t)=>e in a?m(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var r=(a,e,t)=>(w(a,typeof e!="symbol"?e+"":e,t),t);import{S as u,i as B,s as C,I,ac as f}from"../chunks/index.9fe14626.js";import{d as i,g as c,s as g}from"../chunks/store.5f445bdf.js";import{d as b}from"../chunks/index.5a025de5.js";const h=`# Strings

Tact has basic support for strings. Strings support unicode and don't have any special escape characters like \`\\n\`.

The use of strings in smart contracts should be quite limited. Smart contracts are very exact programs for managing money, they're not intended for interactive CLI.

Strings are immutable. Once a sequence of characters is created, this sequence cannot be modified.

If you need to concatenate strings in run-time, you can use a \`StringBuilder\`. This object handles gas efficiently and supports \`append()\` of various types to the string.`,D=`import "@stdlib/deploy";

contract Strings with Deployable {
 
    // contract persistent state variables
    s1: String = "hello world";
    s2: String = "yes unicode 😀 😅 你好 no escaping"; /// TODO: https://github.com/tact-lang/tact/issues/25 \\n \\t";
    s3: String;
    s4: String;
    s5: String;
    s6: String;

    init() {
        let i1: Int = -12345;
        let i2: Int = 6780000000; // coins = ton("6.78")

        self.s3 = i1.toString();
        self.s4 = i1.toFloatString(3);
        self.s5 = i2.toCoinsString();

        // gas efficient helper to concatenate strings in run-time
        let sb: StringBuilder = beginString();
        sb.append(self.s1);
        sb.append(", your balance is: ");
        sb.append(self.s5);
        self.s6 = sb.toString();
    }

    receive("show all") {
        dump(self.s1);
        dump(self.s2);
        dump(self.s3);
        dump(self.s4);
        dump(self.s5);
        dump(self.s6);
    }

    receive("show ops") {
        let s: String = "how are you?"; // temporary variable
        dump(s);

        /// TODO: https://github.com/tact-lang/tact/issues/24
        /// dump(self.s1 == "hello world");
        /// dump(self.s1 != s);
    }

    get fun result(): String {
        return self.s1;
    }
}`;function Q(a){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(a.queryId,64)}}async function p(){const a=i.Cell.fromBase64("te6ccgECFwEABSAAART/APSkE/S88sgLAQIBYgIDA3rQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVFds88uCCDAQFAgEgCgsCoO2i7fsBkjB/4HAh10nCH5UwINcLH94gghCUapi2uo6oMNMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8n4QgFwbds8f+DAAJEw4w1wBgcAksj4QwHMfwHKAFVQyFAGzxbJUAbMyFAEzxbJUAPMyMhQA88WyVjMyFADzxbJWMzIUATPFslQA8zIyFADzxbJWMzJAczJAczJ7VQBOm1tIm6zmVsgbvLQgG8iAZEy4hAkcAMEgEJQI9s8CAD++QEggvAyQsxllS8F2bB9Kyyq2RY4o0HI4fJTwjjU3mC5C/1zSrqOHDAl/hQwJP4UMCP+FDAi/hQwIf4UMCD+FDB/2zHggvCumxXw1Q6VFk72d/68V6X5rjebOs9yG2lKSCx322XD1bqOFIvGhvdyBhcmUgeW91P4/hQwf9sx4AHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAJAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAhG/cpbZ5tnjYwwMDQIBIBMUAXztRNDUAfhj0gABjiPUAdAB1AHQAdQB0NQB0AHUAdAB1AHQAdQw0NQw0BBGEEVsFuAw+CjXCwqDCbry4InbPA4AAiUErIu2hlbGxvIHdvcmxkiNCh5ZXMgdW5pY29kZSDwn5iAIPCfmIUg5L2g5aW9IG5vIGVzY2FwaW5nggc/HghGUHpcAIds8AnPbPAF52zzIbwABb4xtb4wlDxAQEQDeyCHBAJiALQHLBwGjAd4hgjgyfLJzQRnTt6mqHbmOIHAgcY4UBHqpDKYwJagSoASqBwKkIcAARTDmMDOqAs8BjitvAHCOESN6qQgSb4wBpAN6qQQgwAAU5jMipQOcUwJvgaYwWMsHAqVZ5DAx4snQANogwQEhwk2x8tCGyCLBAJiALQHLBwKjAt5/cG8ABI4bBHqpDCDAAFIwsLObcDOmMBRvjASkBAORMOIE5AGzlwKALm+MAqTejhADeqkMpjATb4wDpCLAABA05jMipQOaUxJvgQHLBwKlAuRsIcnQA17bPI0EywgeW91ciBiYWxhbmNlIGlzOiCDbPCHbPG8iAcmTIW6zlgFvIlnMyegx0BISEgC6INdKIddJlyDCACLCALGOSgNvIoB/Is8xqwKhBasCUVW2CCDCAJwgqgIV1xhQM88WQBTeWW8CU0GhwgCZyAFvAlBEoaoCjhIxM8IAmdQw0CDXSiHXSZJwIOLi6F8DALm7vRgnBc7D1dLK57HoTsOdZKhRtmgnCd1jUtK2R8syLTry398WI5gnAgVcAbgGdjlM5YOq5HJbLDgnAb1J3vlUWW8cdT094FWcMmgnCdl05as07LczoOlm2UZuikgCAUgVFgARsK+7UTQ0gABgAHWybuNDVpcGZzOi8vUW1YNTd1ellwTmY1NmYxbnJwUkFoS0JaVGhtdmFyMWp3VjN4OHNVcHdYTTRwdYIA=="),e=i.Cell.fromBase64("te6cckECGQEABSoAAQHAAQEFob1XAgEU/wD0pBP0vPLICwMCAWIMBAIBIAoFAgEgCQYCAUgIBwB1sm7jQ1aXBmczovL1FtWDU3dXpZcE5mNTZmMW5ycFJBaEtCWlRobXZhcjFqd1YzeDhzVXB3WE00cHWCAAEbCvu1E0NIAAYAC5u70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIAhG/cpbZ5tnjYwwTCwACJQN60AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8VRXbPPLgghMODQCSyPhDAcx/AcoAVVDIUAbPFslQBszIUATPFslQA8zIyFADzxbJWMzIUAPPFslYzMhQBM8WyVADzMjIUAPPFslYzMkBzMkBzMntVAKg7aLt+wGSMH/gcCHXScIflTAg1wsf3iCCEJRqmLa6jqgw0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yfhCAXBt2zx/4MAAkTDjDXAQDwD++QEggvAyQsxllS8F2bB9Kyyq2RY4o0HI4fJTwjjU3mC5C/1zSrqOHDAl/hQwJP4UMCP+FDAi/hQwIf4UMCD+FDB/2zHggvCumxXw1Q6VFk72d/68V6X5rjebOs9yG2lKSCx322XD1bqOFIvGhvdyBhcmUgeW91P4/hQwf9sx4AE6bW0ibrOZWyBu8tCAbyIBkTLiECRwAwSAQlAj2zwRAcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7ABIAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwBfO1E0NQB+GPSAAGOI9QB0AHUAdAB1AHQ1AHQAdQB0AHUAdAB1DDQ1DDQEEYQRWwW4DD4KNcLCoMJuvLgids8FASsi7aGVsbG8gd29ybGSI0KHllcyB1bmljb2RlIPCfmIAg8J+YhSDkvaDlpb0gbm8gZXNjYXBpbmeCBz8eCEZQelwAh2zwCc9s8AXnbPMhvAAFvjG1vjCUYFxcVA17bPI0EywgeW91ciBiYWxhbmNlIGlzOiCDbPCHbPG8iAcmTIW6zlgFvIlnMyegx0BYWFgC6INdKIddJlyDCACLCALGOSgNvIoB/Is8xqwKhBasCUVW2CCDCAJwgqgIV1xhQM88WQBTeWW8CU0GhwgCZyAFvAlBEoaoCjhIxM8IAmdQw0CDXSiHXSZJwIOLi6F8DANogwQEhwk2x8tCGyCLBAJiALQHLBwKjAt5/cG8ABI4bBHqpDCDAAFIwsLObcDOmMBRvjASkBAORMOIE5AGzlwKALm+MAqTejhADeqkMpjATb4wDpCLAABA05jMipQOaUxJvgQHLBwKlAuRsIcnQAN7IIcEAmIAtAcsHAaMB3iGCODJ8snNBGdO3qaoduY4gcCBxjhQEeqkMpjAlqBKgBKoHAqQhwABFMOYwM6oCzwGOK28AcI4RI3qpCBJvjAGkA3qpBCDAABTmMyKlA5xTAm+BpjBYywcCpVnkMDHiydDYvHWR");let t=i.beginCell();t.storeRef(e),t.storeUint(0,1);const o=t.endCell();return{code:a,data:o}}const S={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}},v=[{name:"StateInit",header:null,fields:[{name:"code",type:{kind:"simple",type:"cell",optional:!1}},{name:"data",type:{kind:"simple",type:"cell",optional:!1}}]},{name:"Context",header:null,fields:[{name:"bounced",type:{kind:"simple",type:"bool",optional:!1}},{name:"sender",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"raw",type:{kind:"simple",type:"slice",optional:!1}}]},{name:"SendParameters",header:null,fields:[{name:"bounce",type:{kind:"simple",type:"bool",optional:!1}},{name:"to",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"mode",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"body",type:{kind:"simple",type:"cell",optional:!0}},{name:"code",type:{kind:"simple",type:"cell",optional:!0}},{name:"data",type:{kind:"simple",type:"cell",optional:!0}}]},{name:"Deploy",header:2490013878,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"DeployOk",header:2952335191,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"FactoryDeploy",header:1829761339,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}},{name:"cashback",type:{kind:"simple",type:"address",optional:!1}}]}],M=[{name:"result",arguments:[],returnType:{kind:"simple",type:"string",optional:!1}}],H=[{receiver:"internal",message:{kind:"text",text:"show all"}},{receiver:"internal",message:{kind:"text",text:"show ops"}},{receiver:"internal",message:{kind:"typed",type:"Deploy"}}];class A{constructor(e,t){r(this,"address");r(this,"init");r(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"FactoryDeploy",header:1829761339,fields:[]}],types:v,getters:M,receivers:H,errors:S});this.address=e,this.init=t}static async init(){return await p()}static async fromInit(){const e=await p(),t=i.contractAddress(0,e);return new A(t,e)}static fromAddress(e){return new A(e)}async send(e,t,o,n){let s=null;if(n==="show all"&&(s=i.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n==="show ops"&&(s=i.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n&&typeof n=="object"&&!(n instanceof i.Slice)&&n.$$type==="Deploy"&&(s=i.beginCell().store(Q(n)).endCell()),s===null)throw new Error("Invalid message type");await e.internal(t,{...o,body:s})}async getResult(e){let t=new i.TupleBuilder;return(await e.get("result",t.build())).stack.readString()}}function F(a,e,t){let o;I(a,g,l=>t(2,o=l));let n,s;return f(g,o={markdown:h,tactCode:D,deploy:async()=>{const l=await b.Blockchain.create(),d=await l.treasury("deployer");n=d.getSender(),s=l.openContract(await A.fromInit());const y={[d.address.toString()]:"deployer",[s.address.toString()]:"contract"};return[[s],y,[await s.send(d.getSender(),{value:i.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{"show all":async()=>[await s.send(n,{value:i.toNano(1)},"show all")],"show ops":async()=>[await s.send(n,{value:i.toNano(1)},"show ops")]},getters:{result:async()=>await s.getResult()},prev:c(import.meta.url).prev,next:c(import.meta.url).next},o),[]}class O extends u{constructor(e){super(),B(this,e,F,null,C,{})}}export{O as default};
