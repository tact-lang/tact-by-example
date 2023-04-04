var I=Object.defineProperty;var m=(r,e,s)=>e in r?I(r,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[e]=s;var l=(r,e,s)=>(m(r,typeof e!="symbol"?e+"":e,s),s);import{S as B,i as h,s as f,I as b,ac as p}from"../chunks/index.9fe14626.js";import{d as t,g as u,s as y}from"../chunks/store.d3ab02ad.js";import{d as E}from"../chunks/index.78404594.js";const v=`# Message Sender

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
}`;function D(r){return e=>{let s=e;s.storeUint(2490013878,32),s.storeUint(r.queryId,64)}}async function C(){const r=t.Cell.fromBase64("te6ccgECEAEAA5kAART/APSkE/S88sgLAQIBYgIDA3TQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxa2zwwBAUGAgFYDA0Buu1E0NQB+GPSAAGOQvpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiBJsEuAw+CjXCwqDCbry4InbPAcCru2i7ftwIddJwh+VMCDXCx/eApJbf+AhghCUapi2uo6uMdMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8l/+EJwWAOAQgFtbds8f+ABwACRMOMNcAgJAJbI+EMBzH8BygBZWSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFgEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbJ7VQAYPhCcCDIcgHLAXABywASygfL/8nQINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAKAfb5ASCC8NYj+Em0/b07GRv4JGgbc9Toa+PI/e9HVTBG1Eltoon/uo4tMPhCUiDHBZ2LhkZXBsb3llco/hQwjhKL1ub3QgZGVwbG95ZXIhj+FDDif9sx4ILwVR9sPo1659mzrFO8qbb4LP8yL7FhE4IHdtFKP5O5OVG64wILAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAE74QlIQxwWzjhow+EKNBFoZWxsbyBuZXcgc2VuZGVyIYP4UMN5/2zEAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSAIBSA4PABGwr7tRNDSAAGAAdbJu40NWlwZnM6Ly9RbVE0VjJ1SFoyRG94ZG5EVlpqZ3IzWFhrRExRQzQ3MnBMUjZmR3F5d21TZFd3gg"),e=t.Cell.fromBase64("te6cckECEgEAA6MAAQHAAQEFoAHdAgEU/wD0pBP0vPLICwMCAWIJBAIBWAgFAgFIBwYAdbJu40NWlwZnM6Ly9RbVE0VjJ1SFoyRG94ZG5EVlpqZ3IzWFhrRExRQzQ3MnBMUjZmR3F5d21TZFd3ggABGwr7tRNDSAAGAAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSAN00AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8Wts8MBALCgCWyPhDAcx/AcoAWVkg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxYBINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8Wye1UAq7tou37cCHXScIflTAg1wsf3gKSW3/gIYIQlGqYtrqOrjHTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/Jf/hCcFgDgEIBbW3bPH/gAcAAkTDjDXAODAH2+QEggvDWI/hJtP29Oxkb+CRoG3PU6GvjyP3vR1UwRtRJbaKJ/7qOLTD4QlIgxwWdi4ZGVwbG95ZXKP4UMI4Si9bm90IGRlcGxveWVyIY/hQw4n/bMeCC8FUfbD6NeufZs6xTvKm2+Cz/Mi+xYROCB3bRSj+TuTlRuuMCDQBO+EJSEMcFs44aMPhCjQRaGVsbG8gbmV3IHNlbmRlciGD+FDDef9sxAcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AA8AmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwBuu1E0NQB+GPSAAGOQvpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiBJsEuAw+CjXCwqDCbry4InbPBEAYPhCcCDIcgHLAXABywASygfL/8nQINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFp++zk=");let s=t.beginCell();s.storeRef(e),s.storeUint(0,1);const i=s.endCell();return{code:r,data:i}}const S={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class g{constructor(e,s){l(this,"address");l(this,"init");l(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]}],errors:S});this.address=e,this.init=s}static async init(){return await C()}static async fromInit(){const e=await C(),s=t.contractAddress(0,e);return new g(s,e)}static fromAddress(e){return new g(e)}async send(e,s,i,n){let o=null;if(n==="who"&&(o=t.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n==="hello"&&(o=t.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n&&typeof n=="object"&&!(n instanceof t.Slice)&&n.$$type==="Deploy"&&(o=t.beginCell().store(D(n)).endCell()),o===null)throw new Error("Invalid message type");await e.internal(s,{...i,body:o})}}function L(r,e,s){let i;b(r,y,A=>s(3,i=A));let n,o,a;return p(y,i={markdown:v,tactCode:Q,deploy:async()=>{const A=await E.Blockchain.create(),d=await A.treasury("deployer");n=d.getSender();const c=await A.treasury("another");o=c.getSender(),a=A.openContract(await g.fromInit());const w={[d.address.toString()]:"deployer",[c.address.toString()]:"sender 2",[a.address.toString()]:"contract"};return[[a],w,[await a.send(d.getSender(),{value:t.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{"who (from deployer)":async()=>[await a.send(n,{value:t.toNano(1)},"who")],"who (from sender 2)":async()=>[await a.send(o,{value:t.toNano(1)},"who")],"hello (from deployer)":async()=>[await a.send(n,{value:t.toNano(1)},"hello")],"hello (from sender 2)":async()=>[await a.send(o,{value:t.toNano(1)},"hello")]},getters:{},prev:u(import.meta.url).prev,next:u(import.meta.url).next},i),[]}class x extends B{constructor(e){super(),h(this,e,L,null,f,{})}}export{x as default};
