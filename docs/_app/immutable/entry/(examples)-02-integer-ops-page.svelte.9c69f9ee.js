var y=Object.defineProperty;var w=(n,e,t)=>e in n?y(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var l=(n,e,t)=>(w(n,typeof e!="symbol"?e+"":e,t),t);import{S as u,i as f,s as h,I as B,ac as C}from"../chunks/index.9fe14626.js";import{d as i,g as d,s as m}from"../chunks/store.5f445bdf.js";import{d as I}from"../chunks/index.5a025de5.js";const b=`# Integer Operations

Since all runtime calculations with integers are done at 257-bit, overflows are quite rare. An overflow can happen if the result of a math operation is too big to fit. For example, multiplying 2^256 by 2^256 will not fit within 257-bit.

Nevertheless, if any math operation overflows, an exception will be thrown and the transaction will fail. You can say that Tact's math is safe by default.

There's no problem with mixing variables of different state sizes in the same calculation. In runtime, they are all the same type - always 257-bit signed. This is the largest supported integer type, so they all fit.

## Decimal point with integers

Arithmetics with dollars, for example, requires 2 decimal places. How can we represent the number \`1.25\` if we can only work with integers? The answer is to work with *cents*. So \`1.25\` becomes \`125\`. We just remember that the two lowest digits are coming after the decimal point.

In the same way, working with TON coins has 9 decimal places instead of 2. So the amount 1.25 TON which can be coded in Tact as \`ton("1.25")\` is actually the number \`1250000000\` - we call these *nano-tons* instead of cents.`,D=`import "@stdlib/deploy";

contract Integers with Deployable {
 
    // contract persistent state variables
    i1: Int as uint128 = 3001;
    i2: Int as int32 = 57;

    init() {}

    receive("show ops") {
        let i: Int = -12; // temporary variable, runtime Int type is always int257 (range -2^256 to 2^256 - 1)
        dump(i);

        i = self.i1 * 3 + (self.i2 - i);    // basic math expressions
        dump(i);

        i = self.i1 % 10;                   // modulo (remainder after division), 3001 % 10 = 1
        dump(i);
        
        i = self.i1 / 1000;                 // integer division (truncation toward zero), 3001 / 1000 = 3
        dump(i);
        
        i = self.i1 >> 3;                   // shift right (multiply by 2^n)
        dump(i);
        
        i = self.i1 << 2;                   // shift left (divide by 2^n)
        dump(i);
        
        i = min(self.i2, 11);               // minimum between two numbers
        dump(i);
        
        i = max(self.i2, 66);               // maximum between two numbers
        dump(i);
        
        i = abs(-1 * self.i2);              // absolute value
        dump(i);

        dump(self.i1 == 3001);
        dump(self.i1 > 2000);
        dump(self.i1 >= 3002);
        dump(self.i1 != 70);
    }
}`;function E(n){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(n.queryId,64)}}async function p(){const n=i.Cell.fromBase64("te6ccgECFgEAA64AART/APSkE/S88sgLAQIBYgIDApzQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxa2zzy4ILI+EMBzH8BygBZAst/yh/J7VQEBQIBWBITAULtRNDUAfhj0gABl9N/0h9ZbBLgMPgo1wsKgwm68uCJ2zwGAqDtou37AZIwf+BwIddJwh+VMCDXCx/eIIIQlGqYtrqOqDDTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J+EIBcG3bPH/gwACRMOMNcAcIAAqBC7mAOQE6bW0ibrOZWyBu8tCAbyIBkTLiECRwAwSAQlAj2zwJAVr5AYLwrpsV8NUOlRZO9nf+vFel+a43mzrPchtpSkgsd9tlw9W6joXbPH/bMeALAcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AAoAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwESID0INs8Mf4UMCGnAyGmDKDbPP4UMCF6qQjbPP4UMCGBA+ipBA4ODgwENNs8/hQwIasC2zz+FDAhqgHbPP4UMCCAC7YIDg4ODQQ62zz+FDAggEK2Cds8/hQwIKO2C9s8/hQwIYELuboODg4PAN7IIcEAmIAtAcsHAaMB3iGCODJ8snNBGdO3qaoduY4gcCBxjhQEeqkMpjAlqBKgBKoHAqQhwABFMOYwM6oCzwGOK28AcI4RI3qpCBJvjAGkA3qpBCDAABTmMyKlA5xTAm+BpjBYywcCpVnkMDHiydAEJts8IYEH0LzbPCGBC7q+2zwhw0YREREQAQTbPBEALJmLR0cnVlj+FDCai1ZmFsc2WP4UMOIAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSAIBSBQVABGwr7tRNDSAAGAAdbJu40NWlwZnM6Ly9RbWZBb1l2cVU3ZEpkTWJQcGhOMVdCVlg0cE5wWkQ1eDQyZW85ZDZTMUxSWVVRgg"),e=i.Cell.fromBase64("te6cckECGAEAA7gAAQHAAQEFoB6tAgEU/wD0pBP0vPLICwMCAWIJBAIBWAgFAgFIBwYAdbJu40NWlwZnM6Ly9RbWZBb1l2cVU3ZEpkTWJQcGhOMVdCVlg0cE5wWkQ1eDQyZW85ZDZTMUxSWVVRggABGwr7tRNDSAAGAAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSAKc0AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8Wts88uCCyPhDAcx/AcoAWQLLf8ofye1UFgoCoO2i7fsBkjB/4HAh10nCH5UwINcLH94gghCUapi2uo6oMNMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8n4QgFwbds8f+DAAJEw4w1wEwsBWvkBgvCumxXw1Q6VFk72d/68V6X5rjebOs9yG2lKSCx322XD1bqOhds8f9sx4AwESID0INs8Mf4UMCGnAyGmDKDbPP4UMCF6qQjbPP4UMCGBA+ipBBISEg0ENNs8/hQwIasC2zz+FDAhqgHbPP4UMCCAC7YIEhISDgQ62zz+FDAggEK2Cds8/hQwIKO2C9s8/hQwIYELuboSEhIPBCbbPCGBB9C82zwhgQu6vts8IcNGEREREAEE2zwRACyZi0dHJ1ZY/hQwmotWZhbHNlj+FDDiAN7IIcEAmIAtAcsHAaMB3iGCODJ8snNBGdO3qaoduY4gcCBxjhQEeqkMpjAlqBKgBKoHAqQhwABFMOYwM6oCzwGOK28AcI4RI3qpCBJvjAGkA3qpBCDAABTmMyKlA5xTAm+BpjBYywcCpVnkMDHiydABOm1tIm6zmVsgbvLQgG8iAZEy4hAkcAMEgEJQI9s8FAHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAVAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAULtRNDUAfhj0gABl9N/0h9ZbBLgMPgo1wsKgwm68uCJ2zwXAAqBC7mAObvvo/w=");let t=i.beginCell();t.storeRef(e),t.storeUint(0,1);const o=t.endCell();return{code:n,data:o}}const Q={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}},M=[{name:"StateInit",header:null,fields:[{name:"code",type:{kind:"simple",type:"cell",optional:!1}},{name:"data",type:{kind:"simple",type:"cell",optional:!1}}]},{name:"Context",header:null,fields:[{name:"bounced",type:{kind:"simple",type:"bool",optional:!1}},{name:"sender",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"raw",type:{kind:"simple",type:"slice",optional:!1}}]},{name:"SendParameters",header:null,fields:[{name:"bounce",type:{kind:"simple",type:"bool",optional:!1}},{name:"to",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"mode",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"body",type:{kind:"simple",type:"cell",optional:!0}},{name:"code",type:{kind:"simple",type:"cell",optional:!0}},{name:"data",type:{kind:"simple",type:"cell",optional:!0}}]},{name:"Deploy",header:2490013878,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"DeployOk",header:2952335191,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"FactoryDeploy",header:1829761339,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}},{name:"cashback",type:{kind:"simple",type:"address",optional:!1}}]}],v=[],k=[{receiver:"internal",message:{kind:"text",text:"show ops"}},{receiver:"internal",message:{kind:"typed",type:"Deploy"}}];class A{constructor(e,t){l(this,"address");l(this,"init");l(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"FactoryDeploy",header:1829761339,fields:[]}],types:M,getters:v,receivers:k,errors:Q});this.address=e,this.init=t}static async init(){return await p()}static async fromInit(){const e=await p(),t=i.contractAddress(0,e);return new A(t,e)}static fromAddress(e){return new A(e)}async send(e,t,o,s){let a=null;if(s==="show ops"&&(a=i.beginCell().storeUint(0,32).storeStringTail(s).endCell()),s&&typeof s=="object"&&!(s instanceof i.Slice)&&s.$$type==="Deploy"&&(a=i.beginCell().store(E(s)).endCell()),a===null)throw new Error("Invalid message type");await e.internal(t,{...o,body:a})}}function O(n,e,t){let o;B(n,m,r=>t(2,o=r));let s,a;return C(m,o={markdown:b,tactCode:D,deploy:async()=>{const r=await I.Blockchain.create(),c=await r.treasury("deployer");s=c.getSender(),a=r.openContract(await A.fromInit());const g={[c.address.toString()]:"deployer",[a.address.toString()]:"contract"};return[[a],g,[await a.send(c.getSender(),{value:i.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{"show ops":async()=>[await a.send(s,{value:i.toNano(1)},"show ops")]},getters:{},prev:d(import.meta.url).prev,next:d(import.meta.url).next},o),[]}class G extends u{constructor(e){super(),f(this,e,O,null,h,{})}}export{G as default};
