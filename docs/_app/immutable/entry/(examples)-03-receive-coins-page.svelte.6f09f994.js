var C=Object.defineProperty;var B=(o,e,n)=>e in o?C(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n;var i=(o,e,n)=>(B(o,typeof e!="symbol"?e+"":e,n),n);import{S as m,i as y,s as I,I as h,ac as p}from"../chunks/index.9fe14626.js";import{d as a,g,s as u}from"../chunks/store.cab86f52.js";import{d as v}from"../chunks/index.f166c76f.js";const b=`# Receiving TON Coins

Every contract has a TON coin balance. This balance is used to pay ongoing rent for storage and should not run out otherwise the contract may be deleted. You can store extra coins in the balance for any purpose.

Every incoming message normally carries some TON coin value sent by the sender. This value is used to pay gas for handling this message. Unused excess will stay in the contract balance. If the value doesn't cover the gas cost, the transaction will revert.

You can query the contract balance with \`myBalance()\` - note that the value is in nano-tons (like cents, just with 9 decimals). The balance already contains the incoming message value.

## Refunding senders

If the transaction reverts, unused excess value will be sent back to sender on the *bounced* message.

You can also refund the excess if the transaction succeeds by sending it back using \`reply()\` in a response message. This is the best way to guarantee senders are only paying for the exact gas that their message consumed.`,E=`import "@stdlib/deploy";

contract ReceiveCoins with Deployable {

    val: Int as int64;

    init() {
        self.val = 0;
    }

    // receive empty messages, these are usually simple TON coin transfers to the contract
    receive() {
        dump("empty message received");
        // revert the transaction if balance is growing over 3 TON
        require(myBalance() <= ton("3"), "Balance getting too high");
    }

    receive("increment") {
        // print how much TON coin were sent with this message
        dump(context().value);
        self.val = self.val + 1;
    }

    receive("refunding increment") {
        // print how much TON coin were sent with this message
        dump(context().value);
        self.val = self.val + 1;
        // return all the unused excess TON coin value on the message back to the sender (with a textual string message)
        reply("increment refund".asComment());
    }
 
    get fun balance(): Int {
        return myBalance(); // in nano-tons (like cents, just with 9 decimals)
    }
}`;function f(o){return e=>{let n=e;n.storeUint(2490013878,32),n.storeUint(o.queryId,64)}}async function d(){const o=a.Cell.fromBase64("te6ccgECEgEAA/gAART/APSkE/S88sgLAQIBYgIDAubQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GLtRNDUAfhj0gABlNI/ATGOjjD4KNcLCoMJuvLgids84lnbPDDI+EMBzH8BygABAco/ye1UEAQCAWoODwLG7aLt+3Ah10nCH5UwINcLH94Cklt/4CHAACHXScEhsI4vW40FmVtcHR5IG1lc3NhZ2UgcmVjZWl2ZWSD+FDCCAKDQ+CdvEIIQstBeALvy9H/gIYIQlGqYtrrjAgHAAJEw4w1wBQYBRjHTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J2zx/CgK++QEggvDE+NcjEu3971t77HgzvbsWLRURvXipEq7Q8mN69lVyrrqOkTD4QW8kE18D2zz+FDCkf9sx4ILw+uPRj2OjBEWqI632oDhGguq9jELZ7AXJ1xUualZ1Lxi64wIIBwNO+EFvJBNfA9s8/hQwpI0EGluY3JlbWVudCByZWZ1bmSDbPNs8f9sxCAkKAN7IIcEAmIAtAcsHAaMB3iGCODJ8snNBGdO3qaoduY4gcCBxjhQEeqkMpjAlqBKgBKoHAqQhwABFMOYwM6oCzwGOK28AcI4RI3qpCBJvjAGkA3qpBCDAABTmMyKlA5xTAm+BpjBYywcCpVnkMDHiydABQshwAcsfbwABb4xtb4wB2zxvIgHJkyFus5YBbyJZzMnoMQsBGn/4QnBYA4BCAW1t2zwMALog10oh10mXIMIAIsIAsY5KA28igH8izzGrAqEFqwJRVbYIIMIAnCCqAhXXGFAzzxZAFN5ZbwJTQaHCAJnIAW8CUEShqgKOEjEzwgCZ1DDQINdKIddJknAg4uLoXwMBzshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFlAD+gJwAcpoI26zJW6zsZczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wANAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAkm22B2omhqAPwx6QAAymkfgJjHRxh8FGuFhUGE3XlwRO2ecW2eQEBEAubd6ME4LnYerpZXPY9CdhzrJUKNs0E4TusalpWyPlmRadeW/vixHME4ECrgDcAzscpnLB1XI5LZYcE4DepO98qiy3jjqenvAqzhk0E4TsunLVmnZbmdB0s2yjN0UkAACcAAKMPgnbxA="),e=a.Cell.fromBase64("te6cckECFAEABAIAAQHAAQEFoARXAgEU/wD0pBP0vPLICwMCAWIIBAIBagYFALm3ejBOC52Hq6WVz2PQnYc6yVCjbNBOE7rGpaVsj5ZkWnXlv74sRzBOBAq4A3AM7HKZywdVyOS2WHBOA3qTvfKost446np7wKs4ZNBOE7Lpy1Zp2W5nQdLNsozdFJACSbbYHaiaGoA/DHpAADKaR+AmMdHGHwUa4WFQYTdeXBE7Z5xbZ5ATBwAKMPgnbxAC5tAB0NMDAXGwwAGRf5Fw4gH6QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IlUUFMDbwT4YQL4Yu1E0NQB+GPSAAGU0j8BMY6OMPgo1wsKgwm68uCJ2zziWds8MMj4QwHMfwHKAAEByj/J7VQTCQLG7aLt+3Ah10nCH5UwINcLH94Cklt/4CHAACHXScEhsI4vW40FmVtcHR5IG1lc3NhZ2UgcmVjZWl2ZWSD+FDCCAKDQ+CdvEIIQstBeALvy9H/gIYIQlGqYtrrjAgHAAJEw4w1wDwoCvvkBIILwxPjXIxLt/e9be+x4M727Fi0VEb14qRKu0PJjevZVcq66jpEw+EFvJBNfA9s8/hQwpH/bMeCC8Prj0Y9jowRFqiOt9qA4RoLqvYxC2ewFydcVLmpWdS8YuuMCDgsDTvhBbyQTXwPbPP4UMKSNBBpbmNyZW1lbnQgcmVmdW5kg2zzbPH/bMQ4MEAFCyHAByx9vAAFvjG1vjAHbPG8iAcmTIW6zlgFvIlnMyegxDQC6INdKIddJlyDCACLCALGOSgNvIoB/Is8xqwKhBasCUVW2CCDCAJwgqgIV1xhQM88WQBTeWW8CU0GhwgCZyAFvAlBEoaoCjhIxM8IAmdQw0CDXSiHXSZJwIOLi6F8DAN7IIcEAmIAtAcsHAaMB3iGCODJ8snNBGdO3qaoduY4gcCBxjhQEeqkMpjAlqBKgBKoHAqQhwABFMOYwM6oCzwGOK28AcI4RI3qpCBJvjAGkA3qpBCDAABTmMyKlA5xTAm+BpjBYywcCpVnkMDHiydABRjHTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J2zx/EAEaf/hCcFgDgEIBbW3bPBEBzshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFlAD+gJwAcpoI26zJW6zsZczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wASAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAAJw1Oc+zg==");let n=a.beginCell();n.storeRef(e),n.storeUint(0,1);const r=n.endCell();return{code:o,data:r}}const D={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"},41168:{message:"Balance getting too high"}};class A{constructor(e,n){i(this,"address");i(this,"init");i(this,"abi",{errors:D});this.address=e,this.init=n}static async init(){return await d()}static async fromInit(){const e=await d(),n=a.contractAddress(0,e);return new A(n,e)}static fromAddress(e){return new A(e)}async send(e,n,r,t){let s=null;if(t===null&&(s=new a.Cell),t==="increment"&&(s=a.beginCell().storeUint(0,32).storeStringTail(t).endCell()),t==="refunding increment"&&(s=a.beginCell().storeUint(0,32).storeStringTail(t).endCell()),t&&typeof t=="object"&&!(t instanceof a.Slice)&&t.$$type==="Deploy"&&(s=a.beginCell().store(f(t)).endCell()),s===null)throw new Error("Invalid message type");await e.internal(n,{...r,body:s})}async getBalance(e){let n=new a.TupleBuilder;return(await e.get("balance",n.build())).stack.readBigNumber()}}function M(o,e,n){let r;h(o,u,c=>n(2,r=c));let t,s;return p(u,r={markdown:b,tactCode:E,deploy:async()=>{const c=await v.Blockchain.create(),l=await c.treasury("deployer");t=l.getSender(),s=c.openContract(await A.fromInit());const w={[l.address.toString()]:"deployer",[s.address.toString()]:"contract"};return[s,w,[await s.send(l.getSender(),{value:a.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{"1 TON":async()=>[await s.send(t,{value:a.toNano(1)},null)],increment:async()=>[await s.send(t,{value:a.toNano(1)},"increment")],"refunding increment":async()=>[await s.send(t,{value:a.toNano(1)},"refunding increment")]},getters:{balance:async()=>await s.getBalance()},prev:g(import.meta.url).prev,next:g(import.meta.url).next},r),[]}class T extends m{constructor(e){super(),y(this,e,M,null,I,{})}}export{T as default};
