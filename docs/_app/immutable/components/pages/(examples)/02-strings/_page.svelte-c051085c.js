var d=Object.defineProperty;var u=(n,e,A)=>e in n?d(n,e,{enumerable:!0,configurable:!0,writable:!0,value:A}):n[e]=A;var i=(n,e,A)=>(u(n,typeof e!="symbol"?e+"":e,A),A);import{S as C,i as I,s as p,I as b,ac as y}from"../../../../chunks/index-1d4083c1.js";import{d as t,s as g}from"../../../../chunks/store-ab11a47e.js";import{d as Q,g as w}from"../../../../chunks/helpers-be3eeda0.js";const m=`# Strings

Tact has basic support for strings. Strings support unicode and don't have any special escape characters like \`\\n\`. The use of strings in smart contracts should be quite limited.

Strings are immutable. Once a sequence of characters is created, this sequence cannot be modified.

If you need to concatenate strings in run-time, you can use a \`StringBuilder\`. This object handles gas efficiently.`,D=`import "@stdlib/deploy";

contract Strings with Deployable {
 
    s1: String = "hello world";
    s2: String = "yes unicode 😀 😅 你好 no escaping"; /// \\n \\t";
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

        /// dump(self.s1 == "hello world");
        /// dump(self.s1 != s);
    }

    get fun result(): String {
        return self.s1;
    }
}`;function f(n){return e=>{let A=e;A.storeUint(2490013878,32),A.storeUint(n.queryId,64)}}async function B(){const n=t.Cell.fromBase64("te6ccgECEwEABQYAART/APSkE/S88sgLAQIBYgIDAvbQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJIkFVbwT4Ye1E0NQB+GLSAAGOI9QB0AHUAdAB1AHQ1AHQAdQB0AHUAdAB1DDQ1DDQEEYQRWwWjo4w+CjXCwqDCbry4InbPOIMBAIBIAoLAZxVFds8MMj4QgHMfwHKAFVQyFAGzxbJUAbMyFAEzxbJUAPMyMhQA88WyVjMyFADzxbJWMzIUATPFslQA8zIyFADzxbJWMzJAczJAczJ7VQFApjtou37cCHXScIflTAg1wsf3gKSW3/gIYIQlGqYtrqOozHTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J2zx/4AHAAJEw4w1wBgcBJvhBbyQQI18Df3BQA4BCAW1t2zwIAP75ASCC8DJCzGWVLwXZsH0rLKrZFjijQcjh8lPCONTeYLkL/XNKuo4cMCX+FDAk/hQwI/4UMCL+FDAh/hQwIP4UMH/bMeCC8K6bFfDVDpUWTvZ3/rxXpfmuN5s6z3IbaUpILHfbZcPVuo4Ui8aG93IGFyZSB5b3U/j+FDB/2zHgAc7IcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxZQA/oCcAHKaCNusyVus7GXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsACQCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAKJv3KXaiaGoA/DFpAADHEeoA6ADqAOgA6gDoagDoAOoA6ADqAOgA6hhoahhoCCMIIrYLR0cYfBRrhYVBhN15cETtnnFtnkDA0Aub3ejBOC52Hq6WVz2PQnYc6yVCjbNBOE7rGpaVsj5ZkWnXlv74sRzBOBAq4A3AM7HKZywdVyOS2WHBOA3qTvfKost446np7wKs4ZNBOE7Lpy1Zp2W5nQdLNsozdFJASqi7aGVsbG8gd29ybGSI0KHllcyB1bmljb2RlIPCfmIAg8J+YhSDkvaDlpb0gbm8gZXNjYXBpbmeCBz8eCEZQelwAh2zwCc9s8Ads8yG8AAW+MbW+MJQ4RDxAABF8FAN7IIcEAmIAtAcsHAaMB3iGCODJ8snNBGdO3qaoduY4gcCBxjhQEeqkMpjAlqBKgBKoHAqQhwABFMOYwM6oCzwGOK28AcI4RI3qpCBJvjAGkA3qpBCDAABTmMyKlA5xTAm+BpjBYywcCpVnkMDHiydABBnnbPBEDXts8jQTLCB5b3VyIGJhbGFuY2UgaXM6IINs8Ids8byIByZMhbrOWAW8iWczJ6DHQEhISANogwQEhwk2x8tCGyCLBAJiALQHLBwKjAt5/cG8ABI4bBHqpDCDAAFIwsLObcDOmMBRvjASkBAORMOIE5AGzlwKALm+MAqTejhADeqkMpjATb4wDpCLAABA05jMipQOaUxJvgQHLBwKlAuRsIcnQALog10oh10mXIMIAIsIAsY5KA28igH8izzGrAqEFqwJRVbYIIMIAnCCqAhXXGFAzzxZAFN5ZbwJTQaHCAJnIAW8CUEShqgKOEjEzwgCZ1DDQINdKIddJknAg4uLoXwM="),e=t.Cell.fromBase64("te6cckECFQEABRAAAQHAAQEFob1XAgEU/wD0pBP0vPLICwMCAWIIBAIBIAYFALm93owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwTgN6k73yqLLeOOp6e8CrOGTQThOy6ctWadluZ0HSzbKM3RSQCib9yl2omhqAPwxaQAAxxHqAOgA6gDoAOoA6GoA6ADqAOgA6gDoAOoYaGoYaAgjCCK2C0dHGHwUa4WFQYTdeXBE7Z5xbZ5A8HAARfBQL20AHQ0wMBcbDAAZF/kXDiAfpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiSJBVW8E+GHtRNDUAfhi0gABjiPUAdAB1AHQAdQB0NQB0AHUAdAB1AHQAdQw0NQw0BBGEEVsFo6OMPgo1wsKgwm68uCJ2zziDwkBnFUV2zwwyPhCAcx/AcoAVVDIUAbPFslQBszIUATPFslQA8zIyFADzxbJWMzIUAPPFslYzMhQBM8WyVADzMjIUAPPFslYzMkBzMkBzMntVAoCmO2i7ftwIddJwh+VMCDXCx/eApJbf+AhghCUapi2uo6jMdMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8nbPH/gAcAAkTDjDXAMCwD++QEggvAyQsxllS8F2bB9Kyyq2RY4o0HI4fJTwjjU3mC5C/1zSrqOHDAl/hQwJP4UMCP+FDAi/hQwIf4UMCD+FDB/2zHggvCumxXw1Q6VFk72d/68V6X5rjebOs9yG2lKSCx322XD1bqOFIvGhvdyBhcmUgeW91P4/hQwf9sx4AEm+EFvJBAjXwN/cFADgEIBbW3bPA0BzshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFlAD+gJwAcpoI26zJW6zsZczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAOAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMBKqLtoZWxsbyB3b3JsZIjQoeWVzIHVuaWNvZGUg8J+YgCDwn5iFIOS9oOWlvSBubyBlc2NhcGluZ4IHPx4IRlB6XACHbPAJz2zwB2zzIbwABb4xtb4wlFBMSEANe2zyNBMsIHlvdXIgYmFsYW5jZSBpczogg2zwh2zxvIgHJkyFus5YBbyJZzMnoMdAREREAuiDXSiHXSZcgwgAiwgCxjkoDbyKAfyLPMasCoQWrAlFVtgggwgCcIKoCFdcYUDPPFkAU3llvAlNBocIAmcgBbwJQRKGqAo4SMTPCAJnUMNAg10oh10mScCDi4uhfAwEGeds8EwDaIMEBIcJNsfLQhsgiwQCYgC0BywcCowLef3BvAASOGwR6qQwgwABSMLCzm3AzpjAUb4wEpAQDkTDiBOQBs5cCgC5vjAKk3o4QA3qpDKYwE2+MA6QiwAAQNOYzIqUDmlMSb4EBywcCpQLkbCHJ0ADeyCHBAJiALQHLBwGjAd4hgjgyfLJzQRnTt6mqHbmOIHAgcY4UBHqpDKYwJagSoASqBwKkIcAARTDmMDOqAs8BjitvAHCOESN6qQgSb4wBpAN6qQQgwAAU5jMipQOcUwJvgaYwWMsHAqVZ5DAx4snQoLAZ9g==");let A=t.beginCell();A.storeRef(e),A.storeUint(0,1);const r=A.endCell();return{code:n,data:r}}const h={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class c{constructor(e,A){i(this,"address");i(this,"init");i(this,"abi",{errors:h});this.address=e,this.init=A}static async init(){return await B()}static async fromInit(){const e=await B(),A=t.contractAddress(0,e);return new c(A,e)}static fromAddress(e){return new c(e)}async send(e,A,r,s){let o=null;if(s==="show all"&&(o=t.beginCell().storeUint(0,32).storeStringTail(s).endCell()),s==="show ops"&&(o=t.beginCell().storeUint(0,32).storeStringTail(s).endCell()),s&&typeof s=="object"&&!(s instanceof t.Slice)&&s.$$type==="Deploy"&&(o=t.beginCell().store(f(s)).endCell()),o===null)throw new Error("Invalid message type");await e.internal(A,{...r,body:o})}async getResult(e){let A=new t.TupleBuilder;return(await e.get("result",A.build())).stack.readString()}}function M(n,e,A){let r;b(n,g,a=>A(2,r=a));let s,o;return y(g,r={markdown:m,tactCode:D,deploy:async()=>{const a=await Q.Blockchain.create(),l=await a.treasury("deployer");return s=l.getSender(),o=a.openContract(await c.fromInit()),[await o.send(l.getSender(),{value:t.toNano(1)},{$$type:"Deploy",queryId:0n})]},messages:{"show all":async()=>[await o.send(s,{value:t.toNano(1)},"show all")],"show ops":async()=>[await o.send(s,{value:t.toNano(1)},"show ops")]},getters:{result:async()=>await o.getResult()},prev:w(import.meta.url).prev,next:w(import.meta.url).next},r),[]}class E extends C{constructor(e){super(),I(this,e,M,null,p,{})}}export{E as default};
