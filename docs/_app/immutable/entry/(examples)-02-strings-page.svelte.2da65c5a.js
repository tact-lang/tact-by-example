var I=Object.defineProperty;var u=(A,e,s)=>e in A?I(A,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):A[e]=s;var i=(A,e,s)=>(u(A,typeof e!="symbol"?e+"":e,s),s);import{S as B,i as p,s as y,I as b,ac as m}from"../chunks/index.9fe14626.js";import{d as r,g,s as d}from"../chunks/store.2b42c038.js";import{d as D}from"../chunks/index.9fe59178.js";const h=`# Strings

Tact has basic support for strings. Strings support unicode and don't have any special escape characters like \`\\n\`.

The use of strings in smart contracts should be quite limited. Smart contracts are very exact programs for managing money, they're not intended for interactive CLI.

Strings are immutable. Once a sequence of characters is created, this sequence cannot be modified.

If you need to concatenate strings in run-time, you can use a \`StringBuilder\`. This object handles gas efficiently and supports \`append()\` of various types to the string.`,f=`import "@stdlib/deploy";

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
}`;function Q(A){return e=>{let s=e;s.storeUint(2490013878,32),s.storeUint(A.queryId,64)}}async function w(){const A=r.Cell.fromBase64("te6ccgECFgEABQUAART/APSkE/S88sgLAQIBYgIDA3bQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVFds8MAsEBQIBIAkKAq7tou37cCHXScIflTAg1wsf3gKSW3/gIYIQlGqYtrqOrjHTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/Jf/hCcFgDgEIBbW3bPH/gAcAAkTDjDXAGBwCSyPhDAcx/AcoAVVDIUAbPFslQBszIUATPFslQA8zIyFADzxbJWMzIUAPPFslYzMhQBM8WyVADzMjIUAPPFslYzMkBzMkBzMntVAHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAIAP75ASCC8DJCzGWVLwXZsH0rLKrZFjijQcjh8lPCONTeYLkL/XNKuo4cMCX+FDAk/hQwI/4UMCL+FDAh/hQwIP4UMH/bMeCC8K6bFfDVDpUWTvZ3/rxXpfmuN5s6z3IbaUpILHfbZcPVuo4Ui8aG93IGFyZSB5b3U/j+FDB/2zHgAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAhG/cpbZ5tnjYwwLDAIBIBITAXztRNDUAfhj0gABjiPUAdAB1AHQAdQB0NQB0AHUAdAB1AHQAdQw0NQw0BBGEEVsFuAw+CjXCwqDCbry4InbPA0AAiUErIu2hlbGxvIHdvcmxkiNCh5ZXMgdW5pY29kZSDwn5iAIPCfmIUg5L2g5aW9IG5vIGVzY2FwaW5nggc/HghGUHpcAIds8AnPbPAF52zzIbwABb4xtb4wlDg8PEADeyCHBAJiALQHLBwGjAd4hgjgyfLJzQRnTt6mqHbmOIHAgcY4UBHqpDKYwJagSoASqBwKkIcAARTDmMDOqAs8BjitvAHCOESN6qQgSb4wBpAN6qQQgwAAU5jMipQOcUwJvgaYwWMsHAqVZ5DAx4snQANogwQEhwk2x8tCGyCLBAJiALQHLBwKjAt5/cG8ABI4bBHqpDCDAAFIwsLObcDOmMBRvjASkBAORMOIE5AGzlwKALm+MAqTejhADeqkMpjATb4wDpCLAABA05jMipQOaUxJvgQHLBwKlAuRsIcnQA17bPI0EywgeW91ciBiYWxhbmNlIGlzOiCDbPCHbPG8iAcmTIW6zlgFvIlnMyegx0BEREQC6INdKIddJlyDCACLCALGOSgNvIoB/Is8xqwKhBasCUVW2CCDCAJwgqgIV1xhQM88WQBTeWW8CU0GhwgCZyAFvAlBEoaoCjhIxM8IAmdQw0CDXSiHXSZJwIOLi6F8DALm7vRgnBc7D1dLK57HoTsOdZKhRtmgnCd1jUtK2R8syLTry398WI5gnAgVcAbgGdjlM5YOq5HJbLDgnAb1J3vlUWW8cdT094FWcMmgnCdl05as07LczoOlm2UZuikgCAUgUFQARsK+7UTQ0gABgAHWybuNDVpcGZzOi8vUW1OcjU2dEdGbmhucVZpek5Gd0FrZnc4ZUZwZVhOalE1NEZGMkp1Y1RqUTVldYIA=="),e=r.Cell.fromBase64("te6cckECGAEABQ8AAQHAAQEFob1XAgEU/wD0pBP0vPLICwMCAWIMBAIBIAoFAgEgCQYCAUgIBwB1sm7jQ1aXBmczovL1FtTnI1NnRHRm5obnFWaXpORndBa2Z3OGVGcGVYTmpRNTRGRjJKdWNUalE1ZXWCAAEbCvu1E0NIAAYAC5u70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIAhG/cpbZ5tnjYwwSCwACJQN20AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8VRXbPDASDg0Aksj4QwHMfwHKAFVQyFAGzxbJUAbMyFAEzxbJUAPMyMhQA88WyVjMyFADzxbJWMzIUATPFslQA8zIyFADzxbJWMzJAczJAczJ7VQCru2i7ftwIddJwh+VMCDXCx/eApJbf+AhghCUapi2uo6uMdMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8l/+EJwWAOAQgFtbds8f+ABwACRMOMNcBAPAP75ASCC8DJCzGWVLwXZsH0rLKrZFjijQcjh8lPCONTeYLkL/XNKuo4cMCX+FDAk/hQwI/4UMCL+FDAh/hQwIP4UMH/bMeCC8K6bFfDVDpUWTvZ3/rxXpfmuN5s6z3IbaUpILHfbZcPVuo4Ui8aG93IGFyZSB5b3U/j+FDB/2zHgAcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7ABEAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwBfO1E0NQB+GPSAAGOI9QB0AHUAdAB1AHQ1AHQAdQB0AHUAdAB1DDQ1DDQEEYQRWwW4DD4KNcLCoMJuvLgids8EwSsi7aGVsbG8gd29ybGSI0KHllcyB1bmljb2RlIPCfmIAg8J+YhSDkvaDlpb0gbm8gZXNjYXBpbmeCBz8eCEZQelwAh2zwCc9s8AXnbPMhvAAFvjG1vjCUXFhYUA17bPI0EywgeW91ciBiYWxhbmNlIGlzOiCDbPCHbPG8iAcmTIW6zlgFvIlnMyegx0BUVFQC6INdKIddJlyDCACLCALGOSgNvIoB/Is8xqwKhBasCUVW2CCDCAJwgqgIV1xhQM88WQBTeWW8CU0GhwgCZyAFvAlBEoaoCjhIxM8IAmdQw0CDXSiHXSZJwIOLi6F8DANogwQEhwk2x8tCGyCLBAJiALQHLBwKjAt5/cG8ABI4bBHqpDCDAAFIwsLObcDOmMBRvjASkBAORMOIE5AGzlwKALm+MAqTejhADeqkMpjATb4wDpCLAABA05jMipQOaUxJvgQHLBwKlAuRsIcnQAN7IIcEAmIAtAcsHAaMB3iGCODJ8snNBGdO3qaoduY4gcCBxjhQEeqkMpjAlqBKgBKoHAqQhwABFMOYwM6oCzwGOK28AcI4RI3qpCBJvjAGkA3qpBCDAABTmMyKlA5xTAm+BpjBYywcCpVnkMDHiydCSzw7H");let s=r.beginCell();s.storeRef(e),s.storeUint(0,1);const o=s.endCell();return{code:A,data:o}}const M={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class l{constructor(e,s){i(this,"address");i(this,"init");i(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]}],errors:M});this.address=e,this.init=s}static async init(){return await w()}static async fromInit(){const e=await w(),s=r.contractAddress(0,e);return new l(s,e)}static fromAddress(e){return new l(e)}async send(e,s,o,n){let t=null;if(n==="show all"&&(t=r.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n==="show ops"&&(t=r.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n&&typeof n=="object"&&!(n instanceof r.Slice)&&n.$$type==="Deploy"&&(t=r.beginCell().store(Q(n)).endCell()),t===null)throw new Error("Invalid message type");await e.internal(s,{...o,body:t})}async getResult(e){let s=new r.TupleBuilder;return(await e.get("result",s.build())).stack.readString()}}function S(A,e,s){let o;b(A,d,a=>s(2,o=a));let n,t;return m(d,o={markdown:h,tactCode:f,deploy:async()=>{const a=await D.Blockchain.create(),c=await a.treasury("deployer");n=c.getSender(),t=a.openContract(await l.fromInit());const C={[c.address.toString()]:"deployer",[t.address.toString()]:"contract"};return[[t],C,[await t.send(c.getSender(),{value:r.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{"show all":async()=>[await t.send(n,{value:r.toNano(1)},"show all")],"show ops":async()=>[await t.send(n,{value:r.toNano(1)},"show ops")]},getters:{result:async()=>await t.getResult()},prev:g(import.meta.url).prev,next:g(import.meta.url).next},o),[]}class F extends B{constructor(e){super(),p(this,e,S,null,y,{})}}export{F as default};
