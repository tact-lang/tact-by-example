var I=Object.defineProperty;var C=(A,e,s)=>e in A?I(A,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):A[e]=s;var i=(A,e,s)=>(C(A,typeof e!="symbol"?e+"":e,s),s);import{S as y,i as B,s as Q,I as m,ac as h}from"../chunks/index.9fe14626.js";import{d as o,g as c,s as d}from"../chunks/store.7ab6b232.js";import{d as p}from"../chunks/index.639aa391.js";const M=`# Strings

Tact has basic support for strings. Strings support unicode and don't have any special escape characters like \`\\n\`. The use of strings in smart contracts should be quite limited.

Strings are immutable. Once a sequence of characters is created, this sequence cannot be modified.

If you need to concatenate strings in run-time, you can use a \`StringBuilder\`. This object handles gas efficiently.`,b=`import "@stdlib/deploy";

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
}`;function H(A){return e=>{let s=e;s.storeUint(2490013878,32),s.storeUint(A.queryId,64)}}async function w(){const A=o.Cell.fromBase64("te6ccgECFAEABQcAART/APSkE/S88sgLAQIBYgIDAX7QAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GIEAgEgCwwDiu1E0NQB+GPSAAGOI9QB0AHUAdAB1AHQ1AHQAdQB0AHUAdAB1DDQ1DDQEEYQRWwWjo4w+CjXCwqDCbry4InbPOJVFds8MA0FBgKY7aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEJRqmLa6jqMx0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yds8f+ABwACRMOMNcAcIAJLI+EMBzH8BygBVUMhQBs8WyVAGzMhQBM8WyVADzMjIUAPPFslYzMhQA88WyVjMyFAEzxbJUAPMyMhQA88WyVjMyQHMyQHMye1UARp/+EJwWAOAQgFtbds8CQD++QEggvAyQsxllS8F2bB9Kyyq2RY4o0HI4fJTwjjU3mC5C/1zSrqOHDAl/hQwJP4UMCP+FDAi/hQwIf4UMCD+FDB/2zHggvCumxXw1Q6VFk72d/68V6X5rjebOs9yG2lKSCx322XD1bqOFIvGhvdyBhcmUgeW91P4/hQwf9sx4AHOyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WUAP6AnABymgjbrMlbrOxlzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AAoAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwCib9yl2omhqAPwx6QAAxxHqAOgA6gDoAOoA6GoA6ADqAOgA6gDoAOoYaGoYaAgjCCK2C0dHGHwUa4WFQYTdeXBE7Z5xbZ5A0OALm93owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwTgN6k73yqLLeOOp6e8CrOGTQThOy6ctWadluZ0HSzbKM3RSQEqou2hlbGxvIHdvcmxkiNCh5ZXMgdW5pY29kZSDwn5iAIPCfmIUg5L2g5aW9IG5vIGVzY2FwaW5nggc/HghGUHpcAIds8AnPbPAHbPMhvAAFvjG1vjCUPEhARAARfBQDeyCHBAJiALQHLBwGjAd4hgjgyfLJzQRnTt6mqHbmOIHAgcY4UBHqpDKYwJagSoASqBwKkIcAARTDmMDOqAs8BjitvAHCOESN6qQgSb4wBpAN6qQQgwAAU5jMipQOcUwJvgaYwWMsHAqVZ5DAx4snQAQZ52zwSA17bPI0EywgeW91ciBiYWxhbmNlIGlzOiCDbPCHbPG8iAcmTIW6zlgFvIlnMyegx0BMTEwDaIMEBIcJNsfLQhsgiwQCYgC0BywcCowLef3BvAASOGwR6qQwgwABSMLCzm3AzpjAUb4wEpAQDkTDiBOQBs5cCgC5vjAKk3o4QA3qpDKYwE2+MA6QiwAAQNOYzIqUDmlMSb4EBywcCpQLkbCHJ0AC6INdKIddJlyDCACLCALGOSgNvIoB/Is8xqwKhBasCUVW2CCDCAJwgqgIV1xhQM88WQBTeWW8CU0GhwgCZyAFvAlBEoaoCjhIxM8IAmdQw0CDXSiHXSZJwIOLi6F8D"),e=o.Cell.fromBase64("te6cckECFgEABREAAQHAAQEFob1XAgEU/wD0pBP0vPLICwMCAWIIBAIBIAYFALm93owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwTgN6k73yqLLeOOp6e8CrOGTQThOy6ctWadluZ0HSzbKM3RSQCib9yl2omhqAPwx6QAAxxHqAOgA6gDoAOoA6GoA6ADqAOgA6gDoAOoYaGoYaAgjCCK2C0dHGHwUa4WFQYTdeXBE7Z5xbZ5BAHAARfBQF+0AHQ0wMBcbDAAZF/kXDiAfpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiVRQUwNvBPhhAvhiCQOK7UTQ1AH4Y9IAAY4j1AHQAdQB0AHUAdDUAdAB1AHQAdQB0AHUMNDUMNAQRhBFbBaOjjD4KNcLCoMJuvLgids84lUV2zwwEAsKAJLI+EMBzH8BygBVUMhQBs8WyVAGzMhQBM8WyVADzMjIUAPPFslYzMhQA88WyVjMyFAEzxbJUAPMyMhQA88WyVjMyQHMyQHMye1UApjtou37cCHXScIflTAg1wsf3gKSW3/gIYIQlGqYtrqOozHTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J2zx/4AHAAJEw4w1wDQwA/vkBIILwMkLMZZUvBdmwfSssqtkWOKNByOHyU8I41N5guQv9c0q6jhwwJf4UMCT+FDAj/hQwIv4UMCH+FDAg/hQwf9sx4ILwrpsV8NUOlRZO9nf+vFel+a43mzrPchtpSkgsd9tlw9W6jhSLxob3cgYXJlIHlvdT+P4UMH/bMeABGn/4QnBYA4BCAW1t2zwOAc7IcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxZQA/oCcAHKaCNusyVus7GXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsADwCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzASqi7aGVsbG8gd29ybGSI0KHllcyB1bmljb2RlIPCfmIAg8J+YhSDkvaDlpb0gbm8gZXNjYXBpbmeCBz8eCEZQelwAh2zwCc9s8Ads8yG8AAW+MbW+MJRUUExEDXts8jQTLCB5b3VyIGJhbGFuY2UgaXM6IINs8Ids8byIByZMhbrOWAW8iWczJ6DHQEhISALog10oh10mXIMIAIsIAsY5KA28igH8izzGrAqEFqwJRVbYIIMIAnCCqAhXXGFAzzxZAFN5ZbwJTQaHCAJnIAW8CUEShqgKOEjEzwgCZ1DDQINdKIddJknAg4uLoXwMBBnnbPBQA2iDBASHCTbHy0IbIIsEAmIAtAcsHAqMC3n9wbwAEjhsEeqkMIMAAUjCws5twM6YwFG+MBKQEA5Ew4gTkAbOXAoAub4wCpN6OEAN6qQymMBNvjAOkIsAAEDTmMyKlA5pTEm+BAcsHAqUC5GwhydAA3sghwQCYgC0BywcBowHeIYI4Mnyyc0EZ07epqh25jiBwIHGOFAR6qQymMCWoEqAEqgcCpCHAAEUw5jAzqgLPAY4rbwBwjhEjeqkIEm+MAaQDeqkEIMAAFOYzIqUDnFMCb4GmMFjLBwKlWeQwMeLJ0GS+yaU=");let s=o.beginCell();s.storeRef(e),s.storeUint(0,1);const a=s.endCell();return{code:A,data:a}}const f={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class l{constructor(e,s){i(this,"address");i(this,"init");i(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]}],errors:f});this.address=e,this.init=s}static async init(){return await w()}static async fromInit(){const e=await w(),s=o.contractAddress(0,e);return new l(s,e)}static fromAddress(e){return new l(e)}async send(e,s,a,t){let n=null;if(t==="show all"&&(n=o.beginCell().storeUint(0,32).storeStringTail(t).endCell()),t==="show ops"&&(n=o.beginCell().storeUint(0,32).storeStringTail(t).endCell()),t&&typeof t=="object"&&!(t instanceof o.Slice)&&t.$$type==="Deploy"&&(n=o.beginCell().store(H(t)).endCell()),n===null)throw new Error("Invalid message type");await e.internal(s,{...a,body:n})}async getResult(e){let s=new o.TupleBuilder;return(await e.get("result",s.build())).stack.readString()}}function D(A,e,s){let a;m(A,d,r=>s(2,a=r));let t,n;return h(d,a={markdown:M,tactCode:b,deploy:async()=>{const r=await p.Blockchain.create(),g=await r.treasury("deployer");t=g.getSender(),n=r.openContract(await l.fromInit());const u={[g.address.toString()]:"deployer",[n.address.toString()]:"contract"};return[[n],u,[await n.send(g.getSender(),{value:o.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{"show all":async()=>[await n.send(t,{value:o.toNano(1)},"show all")],"show ops":async()=>[await n.send(t,{value:o.toNano(1)},"show ops")]},getters:{result:async()=>await n.getResult()},prev:c(import.meta.url).prev,next:c(import.meta.url).next},a),[]}class v extends y{constructor(e){super(),B(this,e,D,null,Q,{})}}export{v as default};
