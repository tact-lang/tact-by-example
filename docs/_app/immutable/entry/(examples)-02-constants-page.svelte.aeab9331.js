var m=Object.defineProperty;var C=(n,e,t)=>e in n?m(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var c=(n,e,t)=>(C(n,typeof e!="symbol"?e+"":e,t),t);import{S as y,i as p,s as w,I as B,ac as f}from"../chunks/index.9fe14626.js";import{d as r,g as A,s as d}from"../chunks/store.2b42c038.js";import{d as b}from"../chunks/index.9fe59178.js";const I=`# Constants

Unlike variables, constants cannot change. Their values are calculated in *compile-time* and cannot change during execution.

Constant initializations must be relatively simple and only rely on values known during compilation. If you add two numbers for example, the compiler will calculate the result during build and put the result in your compiled code.

You can read constants both in *receivers* and in *getters*.

Unlike contract variables, constants don't consume space in persistent state. Their values are stored directly in the code cell.

There isn't much difference between constants defined outside of a contract and inside the contract. Those defined outside can be used by other contracts in your project.`,h=`import "@stdlib/deploy";

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
}`;function v(n){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(n.queryId,64)}}async function g(){const n=r.Cell.fromBase64("te6ccgECEAEAAkwAART/APSkE/S88sgLAQIBYgIDAo7QAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxZ2zwwMMj4QwHMfwHKAMntVA0EAgFYBwgBmHAh10nCH5UwINcLH94Cklt/4AGCEJRqmLa6jq3THwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/Jf/hCcFgDgEIBbW3bPH/gMHAFAcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AAYAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSAIBSAkKAgEgCwwAdbJu40NWlwZnM6Ly9RbVlDOFYyZ0xvU3BSakM0cUNSb0dkejVuNmVpV1ZYaVpqUUFxV2JLSFF1U2Q3ggABGtX3aiaGkAAMACD63/7Z5tnhjADQ4BNO1E0NQB+GPSADCRbeD4KNcLCoMJuvLgids8DwAMghELoAI5AAJt"),e=r.Cell.fromBase64("te6cckECEgEAAlYAAQHAAQEFoTvZAgEU/wD0pBP0vPLICwMCAWIMBAIBWAsFAgFIBwYAdbJu40NWlwZnM6Ly9RbVlDOFYyZ0xvU3BSakM0cUNSb0dkejVuNmVpV1ZYaVpqUUFxV2JLSFF1U2Q3ggAgEgCggCD63/7Z5tnhjAEAkADIIRC6ACOQARrV92omhpAADAALm7vRgnBc7D1dLK57HoTsOdZKhRtmgnCd1jUtK2R8syLTry398WI5gnAgVcAbgGdjlM5YOq5HJbLDgnAb1J3vlUWW8cdT094FWcMmgnCdl05as07LczoOlm2UZuikgCjtAB0NMDAXGwowH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIVFBTA28E+GEC+GLbPFnbPDAwyPhDAcx/AcoAye1UEA0BmHAh10nCH5UwINcLH94Cklt/4AGCEJRqmLa6jq3THwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/Jf/hCcFgDgEIBbW3bPH/gMHAOAcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AA8AmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwBNO1E0NQB+GPSADCRbeD4KNcLCoMJuvLgids8EQACbWPJ5iA=");let t=r.beginCell();t.storeRef(e),t.storeUint(0,1);const a=t.endCell();return{code:n,data:a}}const D={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class i{constructor(e,t){c(this,"address");c(this,"init");c(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]}],errors:D});this.address=e,this.init=t}static async init(){return await g()}static async fromInit(){const e=await g(),t=r.contractAddress(0,e);return new i(t,e)}static fromAddress(e){return new i(e)}async send(e,t,a,s){let o=null;if(s&&typeof s=="object"&&!(s instanceof r.Slice)&&s.$$type==="Deploy"&&(o=r.beginCell().store(v(s)).endCell()),o===null)throw new Error("Invalid message type");await e.internal(t,{...a,body:o})}async getSum(e){let t=new r.TupleBuilder;return(await e.get("sum",t.build())).stack.readBigNumber()}}function L(n,e,t){let a;B(n,d,o=>t(2,a=o));let s;return f(d,a={markdown:I,tactCode:h,deploy:async()=>{const o=await b.Blockchain.create(),l=await o.treasury("deployer");l.getSender(),s=o.openContract(await i.fromInit());const u={[l.address.toString()]:"deployer",[s.address.toString()]:"contract"};return[[s],u,[await s.send(l.getSender(),{value:r.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{},getters:{sum:async()=>await s.getSum()},prev:A(import.meta.url).prev,next:A(import.meta.url).next},a),[]}class S extends y{constructor(e){super(),p(this,e,L,null,w,{})}}export{S as default};
