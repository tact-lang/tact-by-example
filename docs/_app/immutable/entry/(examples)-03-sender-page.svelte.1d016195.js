var B=Object.defineProperty;var m=(o,e,s)=>e in o?B(o,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[e]=s;var l=(o,e,s)=>(m(o,typeof e!="symbol"?e+"":e,s),s);import{S as y,i as f,s as h,I as p,ac as E}from"../chunks/index.9fe14626.js";import{d as t,g as u,s as C}from"../chunks/store.7ab6b232.js";import{d as v}from"../chunks/index.639aa391.js";const b=`# Message Sender

Every incoming message is sent from some contract that has an address.

You can query the address of the message sender by calling \`sender()\`. Alternatively, the address is also available through \`context().sender\`.

The sender during execution of the \`init()\` method of the contract is the address who deployed the contract.

## Authenticating messages

The main way to authenticate an incoming message, particularly for priviliges actions, is to verify the sender. This field is secure and impossible to fake.`,Q=`import "@stdlib/deploy";

contract MessageSender with Deployable {

    deployer: Address;
    lastSender: Address;
 
    init() {
        self.deployer = sender(); // sender() of init is who deployed the contract
        self.lastSender = newAddress(0, 0); // zero address
    }

    receive("who") {
        if (sender() == self.deployer) {
            dump("deployer");
        } else {
            dump("not deployer!");
        }
    }
 
    receive("hello") {
        if (sender() != self.lastSender) {
            self.lastSender = sender();
            dump("hello new sender!");
        }
    }
}`;function D(o){return e=>{let s=e;s.storeUint(2490013878,32),s.storeUint(o.queryId,64)}}async function w(){const o=t.Cell.fromBase64("te6ccgECDQEAA3AAART/APSkE/S88sgLAQIBYgIDAX7QAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GIEALmhd6ME4LnYerpZXPY9CdhzrJUKNs0E4TusalpWyPlmRadeW/vixHME4ECrgDcAzscpnLB1XI5LZYcE4DepO98qiy3jjqenvAqzhk0E4TsunLVmnZbmdB0s2yjN0UkD2u1E0NQB+GPSAAGOTPpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiQH6QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkSbBKOjjD4KNcLCoMJuvLgids84lrbPDAFBgcAavhCcCDIcgHLAXABywASygfL/8nQINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJApjtou37cCHXScIflTAg1wsf3gKSW3/gIYIQlGqYtrqOozHTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J2zx/4AHAAJEw4w1wCAkAqsj4QwHMfwHKAFlZINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxYBINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxbJ7VQBGn/4QnBYA4BCAW1t2zwKAfT5ASCC8NYj+Em0/b07GRv4JGgbc9Toa+PI/e9HVTBG1Eltoon/uo4sMPhCIscFnYuGRlcGxveWVyj+FDCOEovW5vdCBkZXBsb3llciGP4UMOJ/2zHggvBVH2w+jXrn2bOsU7yptvgs/zIvsWETggd20Uo/k7k5UbrjAgwBzshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFlAD+gJwAcpoI26zJW6zsZczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wALAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAEz4QiHHBbOOGjD4Qo0EWhlbGxvIG5ldyBzZW5kZXIhg/hQw3n/bMQ=="),e=t.Cell.fromBase64("te6cckECDwEAA3oAAQHAAQEFoAHdAgEU/wD0pBP0vPLICwMCAWIFBAC5oXejBOC52Hq6WVz2PQnYc6yVCjbNBOE7rGpaVsj5ZkWnXlv74sRzBOBAq4A3AM7HKZywdVyOS2WHBOA3qTvfKost446np7wKs4ZNBOE7Lpy1Zp2W5nQdLNsozdFJAX7QAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GIGA9rtRNDUAfhj0gABjkz6QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJEmwSjo4w+CjXCwqDCbry4InbPOJa2zwwDggHAKrI+EMBzH8BygBZWSDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8Wye1UApjtou37cCHXScIflTAg1wsf3gKSW3/gIYIQlGqYtrqOozHTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J2zx/4AHAAJEw4w1wCwkB9PkBIILw1iP4SbT9vTsZG/gkaBtz1Ohr48j970dVMEbUSW2iif+6jiww+EIixwWdi4ZGVwbG95ZXKP4UMI4Si9bm90IGRlcGxveWVyIY/hQw4n/bMeCC8FUfbD6NeufZs6xTvKm2+Cz/Mi+xYROCB3bRSj+TuTlRuuMCCgBM+EIhxwWzjhow+EKNBFoZWxsbyBuZXcgc2VuZGVyIYP4UMN5/2zEBGn/4QnBYA4BCAW1t2zwMAc7IcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxZQA/oCcAHKaCNusyVus7GXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsADQCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzABq+EJwIMhyAcsBcAHLABLKB8v/ydAg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkJZCQP");let s=t.beginCell();s.storeRef(e),s.storeUint(0,1);const i=s.endCell();return{code:o,data:i}}const H={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class A{constructor(e,s){l(this,"address");l(this,"init");l(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]}],errors:H});this.address=e,this.init=s}static async init(){return await w()}static async fromInit(){const e=await w(),s=t.contractAddress(0,e);return new A(s,e)}static fromAddress(e){return new A(e)}async send(e,s,i,n){let r=null;if(n==="who"&&(r=t.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n==="hello"&&(r=t.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n&&typeof n=="object"&&!(n instanceof t.Slice)&&n.$$type==="Deploy"&&(r=t.beginCell().store(D(n)).endCell()),r===null)throw new Error("Invalid message type");await e.internal(s,{...i,body:r})}}function L(o,e,s){let i;p(o,C,d=>s(3,i=d));let n,r,a;return E(C,i={markdown:b,tactCode:Q,deploy:async()=>{const d=await v.Blockchain.create(),c=await d.treasury("deployer");n=c.getSender();const g=await d.treasury("another");r=g.getSender(),a=d.openContract(await A.fromInit());const I={[c.address.toString()]:"deployer",[g.address.toString()]:"sender 2",[a.address.toString()]:"contract"};return[[a],I,[await a.send(c.getSender(),{value:t.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{"who (from deployer)":async()=>[await a.send(n,{value:t.toNano(1)},"who")],"who (from sender 2)":async()=>[await a.send(r,{value:t.toNano(1)},"who")],"hello (from deployer)":async()=>[await a.send(n,{value:t.toNano(1)},"hello")],"hello (from sender 2)":async()=>[await a.send(r,{value:t.toNano(1)},"hello")]},getters:{},prev:u(import.meta.url).prev,next:u(import.meta.url).next},i),[]}class x extends y{constructor(e){super(),f(this,e,L,null,h,{})}}export{x as default};
