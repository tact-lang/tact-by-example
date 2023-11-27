var g=Object.defineProperty;var u=(n,e,t)=>e in n?g(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var r=(n,e,t)=>(u(n,typeof e!="symbol"?e+"":e,t),t);import{S as y,i as f,s as C,I as h,ac as w}from"../chunks/index.9fe14626.js";import{d as i,g as d,s as A}from"../chunks/store.476c3091.js";import{d as B}from"../chunks/index.c056099e.js";const I=`# Constants

Unlike variables, constants cannot change. Their values are calculated in _compile-time_ and cannot change during execution.

Constant initializations must be relatively simple and only rely on values known during compilation. If you add two numbers for example, the compiler will calculate the result during build and put the result in your compiled code.

You can read constants both in **_receivers_** and in **_getters_**.

Unlike contract variables, **constants don't consume space in persistent state. Their values are stored directly in the code cell.**

There isn't much difference between constants defined outside of a contract and inside the contract. Those defined outside can be used by other contracts in your project.
`,b=`import "@stdlib/deploy";

// global constants are calculated in compile-time and can't change
const GlobalConst1: Int = 1000 + ton("1.24") + pow(10, 9);

contract Constants with Deployable {

    // contract constants are calculated in compile-time and can't change
    const ContractConst1: Int = 2000 + ton("1.25") + pow(10, 9);
    
    // if your contract can be in multiple states, constants are an easy alternative to enums
    const StateUnpaid: Int = 0;
    const StatePaid: Int = 1;
    const StateDelivered: Int = 2;
    const StateDisputed: Int = 3;

    init() {}

    get fun sum(): Int {
        // you can read the constants anywhere
        return GlobalConst1 + self.ContractConst1 + self.StatePaid;
    }
}`;function D(n){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(n.queryId,64)}}async function p(){const n=i.Cell.fromBase64("te6ccgECEQEAAmcAART/APSkE/S88sgLAQIBYgIDApLQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxZ2zzy4IIwyPhDAcx/AcoAye1UDgQCAVgICQGKAZIwf+BwIddJwh+VMCDXCx/eghCUapi2uo6n0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yfhCAXBt2zx/4DBwBQE6bW0ibrOZWyBu8tCAbyIBkTLiECRwAwSAQlAj2zwGAcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AAcAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSAIBSAoLAgEgDA0AdbJu40NWlwZnM6Ly9RbWFrSzdxUGgxRWdUb0dMeEtxRzJhc1hvWDFHQVpUUFBWSHhYSmN3ZzhnY1Y2ggABGtX3aiaGkAAMACD63/7Z5tnhjADg8BNO1E0NQB+GPSADCRbeD4KNcLCoMJuvLgids8EAAMghELoAI5AAJt"),e=i.Cell.fromBase64("te6cckECEwEAAnEAAQHAAQEFoTvZAgEU/wD0pBP0vPLICwMCAWIMBAIBWAsFAgFIBwYAdbJu40NWlwZnM6Ly9RbWFrSzdxUGgxRWdUb0dMeEtxRzJhc1hvWDFHQVpUUFBWSHhYSmN3ZzhnY1Y2ggAgEgCggCD63/7Z5tnhjAEQkADIIRC6ACOQARrV92omhpAADAALm7vRgnBc7D1dLK57HoTsOdZKhRtmgnCd1jUtK2R8syLTry398WI5gnAgVcAbgGdjlM5YOq5HJbLDgnAb1J3vlUWW8cdT094FWcMmgnCdl05as07LczoOlm2UZuikgCktAB0NMDAXGwowH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIVFBTA28E+GEC+GLbPFnbPPLggjDI+EMBzH8BygDJ7VQRDQGKAZIwf+BwIddJwh+VMCDXCx/eghCUapi2uo6n0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yfhCAXBt2zx/4DBwDgE6bW0ibrOZWyBu8tCAbyIBkTLiECRwAwSAQlAj2zwPAcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7ABAAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwBNO1E0NQB+GPSADCRbeD4KNcLCoMJuvLgids8EgACbZA3iYc=");let t=i.beginCell();t.storeRef(e),t.storeUint(0,1);const s=t.endCell();return{code:n,data:s}}const v={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}},k=[{name:"StateInit",header:null,fields:[{name:"code",type:{kind:"simple",type:"cell",optional:!1}},{name:"data",type:{kind:"simple",type:"cell",optional:!1}}]},{name:"Context",header:null,fields:[{name:"bounced",type:{kind:"simple",type:"bool",optional:!1}},{name:"sender",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"raw",type:{kind:"simple",type:"slice",optional:!1}}]},{name:"SendParameters",header:null,fields:[{name:"bounce",type:{kind:"simple",type:"bool",optional:!1}},{name:"to",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"mode",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"body",type:{kind:"simple",type:"cell",optional:!0}},{name:"code",type:{kind:"simple",type:"cell",optional:!0}},{name:"data",type:{kind:"simple",type:"cell",optional:!0}}]},{name:"Deploy",header:2490013878,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"DeployOk",header:2952335191,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"FactoryDeploy",header:1829761339,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}},{name:"cashback",type:{kind:"simple",type:"address",optional:!1}}]}],L=[{name:"sum",arguments:[],returnType:{kind:"simple",type:"int",optional:!1,format:257}}],Q=[{receiver:"internal",message:{kind:"typed",type:"Deploy"}}];class l{constructor(e,t){r(this,"address");r(this,"init");r(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"FactoryDeploy",header:1829761339,fields:[]}],types:k,getters:L,receivers:Q,errors:v});this.address=e,this.init=t}static async init(){return await p()}static async fromInit(){const e=await p(),t=i.contractAddress(0,e);return new l(t,e)}static fromAddress(e){return new l(e)}async send(e,t,s,a){let o=null;if(a&&typeof a=="object"&&!(a instanceof i.Slice)&&a.$$type==="Deploy"&&(o=i.beginCell().store(D(a)).endCell()),o===null)throw new Error("Invalid message type");await e.internal(t,{...s,body:o})}async getSum(e){let t=new i.TupleBuilder;return(await e.get("sum",t.build())).stack.readBigNumber()}}function S(n,e,t){let s;h(n,A,o=>t(2,s=o));let a;return w(A,s={markdown:I,tactCode:b,deploy:async()=>{const o=await B.Blockchain.create(),c=await o.treasury("deployer");c.getSender(),a=o.openContract(await l.fromInit());const m={[c.address.toString()]:"deployer",[a.address.toString()]:"contract"};return[[a],m,[await a.send(c.getSender(),{value:i.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{},getters:{sum:async()=>await a.getSum()},prev:d(import.meta.url).prev,next:d(import.meta.url).next},s),[]}class z extends y{constructor(e){super(),f(this,e,S,null,C,{})}}export{z as default};
