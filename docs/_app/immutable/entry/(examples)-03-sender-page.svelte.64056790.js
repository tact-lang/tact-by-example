var C=Object.defineProperty;var w=(a,e,t)=>e in a?C(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var d=(a,e,t)=>(w(a,typeof e!="symbol"?e+"":e,t),t);import{S as I,i as f,s as B,I as h,ac as v}from"../chunks/index.9fe14626.js";import{d as s,g as y,s as p}from"../chunks/store.5f445bdf.js";import{d as b}from"../chunks/index.5a025de5.js";const E=`# Message Sender

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
}`;function D(a){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(a.queryId,64)}}async function m(){const a=s.Cell.fromBase64("te6ccgECEQEAA7QAART/APSkE/S88sgLAQIBYgIDA3jQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxa2zzy4IIEBQYCAVgNDgG67UTQ1AH4Y9IAAY5C+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIEmwS4DD4KNcLCoMJuvLgids8BwKg7aLt+wGSMH/gcCHXScIflTAg1wsf3iCCEJRqmLa6jqgw0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yfhCAXBt2zx/4MAAkTDjDXAICQCWyPhDAcx/AcoAWVkg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxYBINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8Wye1UAGD4QnAgyHIBywFwAcsAEsoHy//J0CDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgBOm1tIm6zmVsgbvLQgG8iAZEy4hAkcAMEgEJQI9s8CgH2+QEggvDWI/hJtP29Oxkb+CRoG3PU6GvjyP3vR1UwRtRJbaKJ/7qOLTD4QlIgxwWdi4ZGVwbG95ZXKP4UMI4Si9bm90IGRlcGxveWVyIY/hQw4n/bMeCC8FUfbD6NeufZs6xTvKm2+Cz/Mi+xYROCB3bRSj+TuTlRuuMCDAHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wALAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAE74QlIQxwWzjhow+EKNBFoZWxsbyBuZXcgc2VuZGVyIYP4UMN5/2zEAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSAIBSA8QABGwr7tRNDSAAGAAdbJu40NWlwZnM6Ly9RbVBlMnM5M0VnRjlyaUVxeVFGbVpZSHk1YWd2ZUs5RU15VnBuY0JCN2ozTEFRgg"),e=s.Cell.fromBase64("te6cckECEwEAA74AAQHAAQEFoAHdAgEU/wD0pBP0vPLICwMCAWIJBAIBWAgFAgFIBwYAdbJu40NWlwZnM6Ly9RbVBlMnM5M0VnRjlyaUVxeVFGbVpZSHk1YWd2ZUs5RU15VnBuY0JCN2ozTEFRggABGwr7tRNDSAAGAAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSAN40AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8Wts88uCCEQsKAJbI+EMBzH8BygBZWSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFgEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbJ7VQCoO2i7fsBkjB/4HAh10nCH5UwINcLH94gghCUapi2uo6oMNMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8n4QgFwbds8f+DAAJEw4w1wDgwB9vkBIILw1iP4SbT9vTsZG/gkaBtz1Ohr48j970dVMEbUSW2iif+6ji0w+EJSIMcFnYuGRlcGxveWVyj+FDCOEovW5vdCBkZXBsb3llciGP4UMOJ/2zHggvBVH2w+jXrn2bOsU7yptvgs/zIvsWETggd20Uo/k7k5UbrjAg0ATvhCUhDHBbOOGjD4Qo0EWhlbGxvIG5ldyBzZW5kZXIhg/hQw3n/bMQE6bW0ibrOZWyBu8tCAbyIBkTLiECRwAwSAQlAj2zwPAcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7ABAAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwBuu1E0NQB+GPSAAGOQvpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiBJsEuAw+CjXCwqDCbry4InbPBIAYPhCcCDIcgHLAXABywASygfL/8nQINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiPntNGk=");let t=s.beginCell();t.storeRef(e),t.storeUint(0,1);const i=t.endCell();return{code:a,data:i}}const S={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}},k=[{name:"StateInit",header:null,fields:[{name:"code",type:{kind:"simple",type:"cell",optional:!1}},{name:"data",type:{kind:"simple",type:"cell",optional:!1}}]},{name:"Context",header:null,fields:[{name:"bounced",type:{kind:"simple",type:"bool",optional:!1}},{name:"sender",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"raw",type:{kind:"simple",type:"slice",optional:!1}}]},{name:"SendParameters",header:null,fields:[{name:"bounce",type:{kind:"simple",type:"bool",optional:!1}},{name:"to",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"mode",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"body",type:{kind:"simple",type:"cell",optional:!0}},{name:"code",type:{kind:"simple",type:"cell",optional:!0}},{name:"data",type:{kind:"simple",type:"cell",optional:!0}}]},{name:"Deploy",header:2490013878,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"DeployOk",header:2952335191,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"FactoryDeploy",header:1829761339,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}},{name:"cashback",type:{kind:"simple",type:"address",optional:!1}}]}],M=[],L=[{receiver:"internal",message:{kind:"text",text:"who"}},{receiver:"internal",message:{kind:"text",text:"hello"}},{receiver:"internal",message:{kind:"typed",type:"Deploy"}}];class g{constructor(e,t){d(this,"address");d(this,"init");d(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"FactoryDeploy",header:1829761339,fields:[]}],types:k,getters:M,receivers:L,errors:S});this.address=e,this.init=t}static async init(){return await m()}static async fromInit(){const e=await m(),t=s.contractAddress(0,e);return new g(t,e)}static fromAddress(e){return new g(e)}async send(e,t,i,n){let r=null;if(n==="who"&&(r=s.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n==="hello"&&(r=s.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n&&typeof n=="object"&&!(n instanceof s.Slice)&&n.$$type==="Deploy"&&(r=s.beginCell().store(D(n)).endCell()),r===null)throw new Error("Invalid message type");await e.internal(t,{...i,body:r})}}function J(a,e,t){let i;h(a,p,l=>t(3,i=l));let n,r,o;return v(p,i={markdown:E,tactCode:Q,deploy:async()=>{const l=await b.Blockchain.create(),c=await l.treasury("deployer");n=c.getSender();const A=await l.treasury("another");r=A.getSender(),o=l.openContract(await g.fromInit());const u={[c.address.toString()]:"deployer",[A.address.toString()]:"sender 2",[o.address.toString()]:"contract"};return[[o],u,[await o.send(c.getSender(),{value:s.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{"who (from deployer)":async()=>[await o.send(n,{value:s.toNano(1)},"who")],"who (from sender 2)":async()=>[await o.send(r,{value:s.toNano(1)},"who")],"hello (from deployer)":async()=>[await o.send(n,{value:s.toNano(1)},"hello")],"hello (from sender 2)":async()=>[await o.send(r,{value:s.toNano(1)},"hello")]},getters:{},prev:y(import.meta.url).prev,next:y(import.meta.url).next},i),[]}class z extends I{constructor(e){super(),f(this,e,J,null,B,{})}}export{z as default};