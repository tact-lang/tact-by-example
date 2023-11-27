var y=Object.defineProperty;var m=(a,e,t)=>e in a?y(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var l=(a,e,t)=>(m(a,typeof e!="symbol"?e+"":e,t),t);import{S as f,i as I,s as w,I as C,ac as B}from"../chunks/index.9fe14626.js";import{d as o,g as A,s as u}from"../chunks/store.476c3091.js";import{d as h}from"../chunks/index.c056099e.js";const b=`# Functions

To make your code more readable and promote code reuse, you're encouraged to divide it into functions.

Functions in Tact start with the \`fun\` keyword. Functions can receive multiple input arguments and can optionally return a single output value. You can return a \`struct\` if you want to return multiple values.

Global static functions are defined outside the scope of contracts. You can call them from anywhere, but they can't access the contract or any of the contract state variables.

Contract methods are functions that are defined inside the scope of a contract. You can call them only from other contract methods like *receivers* and *getters*. They can access the contract's state variables.`,v=`import "@stdlib/deploy";

struct TokenInfo {
    ticker: String;
    decimals: Int as uint8;
}

// this is a global static function that can be called from anywhere
fun average(a: Int, b: Int): Int {
    return (a + b) / 2;
}

contract Functions with Deployable {

    deployer: Address;

    init() {
        self.deployer = sender();
    }

    // this contract method can be called from within this contract and access its variables
    fun onlyDeployer() {
        require(sender() == self.deployer, "Only the deployer is permitted here");
    }

    receive("priviliged") {
        self.onlyDeployer();
    }

    // this contract method returns multiple return values using a struct
    fun getInfo(index: Int): TokenInfo {
        if (index == 1) {
            return TokenInfo{ticker: "TON", decimals: 9};
        }
        if (index == 2) {
            return TokenInfo{ticker: "ETH", decimals: 18};
        }
        return TokenInfo{ticker: "unknown", decimals: 0};
    }

    receive("best L1") {
        let best: TokenInfo = self.getInfo(1);
        self.reply(best.ticker.asComment());
    }

    get fun result(): Int {
        return average(1, 10);
    }
}`;function k(a){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(a.queryId,64)}}async function g(){const a=o.Cell.fromBase64("te6ccgECGAEAA9gAART/APSkE/S88sgLAQIBYgIDAs7QAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxZ2zzy4ILI+EMBzH8BygABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8Wye1UEAQCASAODwKg7aLt+wGSMH/gcCHXScIflTAg1wsf3iCCEJRqmLa6jqgw0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yfhCAXBt2zx/4MAAkTDjDXAKBQKo+QEggvBnlfAcBYL0+6IBl8mx+CsOiIdBBesaSrRuuXKjqzPLP7qOhjDbPH/bMeCC8LVrJVxOGWPNUilIZB/rvdILAVRGh7mnpTSe6QbdZEzTuuMCBgcAGIIA0xj4QlIgxwXy9AMgcds8MNs8+EIBf23bPH/bMQgJCgBCIMABlzCLNUT06HngwAKXizRVRIiAEuCLd1bmtub3duhwAULIcAHLH28AAW+MbW+MAds8byIByZMhbrOWAW8iWczJ6DELATptbSJus5lbIG7y0IBvIgGRMuIQJHADBIBCUCPbPAwAuiDXSiHXSZcgwgAiwgCxjkoDbyKAfyLPMasCoQWrAlFVtgggwgCcIKoCFdcYUDPPFkAU3llvAlNBocIAmcgBbwJQRKGqAo4SMTPCAJnUMNAg10oh10mScCDi4uhfAwHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wANAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAg+/cpbZ5tnhjBARAgEgFBUBdu1E0NQB+GPSAAGOIPpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4Igx4DD4KNcLCoMJuvLgids8EgEIcXrbPBMABPhCAAagqwAAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSAIBSBYXABGwr7tRNDSAAGAAdbJu40NWlwZnM6Ly9RbVdYQmRpUDhZRktMaTVuajJjRHdyald3V2FUSDlYRFB6Z2NnRFN0UlMzYzE3gg"),e=o.Cell.fromBase64("te6cckECGgEAA+IAAQHAAQEFoARPAgEU/wD0pBP0vPLICwMCAWINBAIBIAoFAgEgCQYCAUgIBwB1sm7jQ1aXBmczovL1FtV1hCZGlQOFlGS0xpNW5qMmNEd3JqV3dXYVRIOVhEUHpnY2dEU3RSUzNjMTeCAAEbCvu1E0NIAAYAC5u70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIAg+/cpbZ5tnhjBgLAQhxets8DAAGoKsAAs7QAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxZ2zzy4ILI+EMBzH8BygABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8Wye1UGA4CoO2i7fsBkjB/4HAh10nCH5UwINcLH94gghCUapi2uo6oMNMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8n4QgFwbds8f+DAAJEw4w1wFQ8CqPkBIILwZ5XwHAWC9PuiAZfJsfgrDoiHQQXrGkq0brlyo6szyz+6joYw2zx/2zHggvC1ayVcThljzVIpSGQf673SCwFURoe5p6U0nukG3WRM07rjAhQQAyBx2zww2zz4QgF/bds8f9sxExEVAULIcAHLH28AAW+MbW+MAds8byIByZMhbrOWAW8iWczJ6DESALog10oh10mXIMIAIsIAsY5KA28igH8izzGrAqEFqwJRVbYIIMIAnCCqAhXXGFAzzxZAFN5ZbwJTQaHCAJnIAW8CUEShqgKOEjEzwgCZ1DDQINdKIddJknAg4uLoXwMAQiDAAZcwizVE9Oh54MACl4s0VUSIgBLgi3dW5rbm93bocAAYggDTGPhCUiDHBfL0ATptbSJus5lbIG7y0IBvIgGRMuIQJHADBIBCUCPbPBYByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsAFwCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAF27UTQ1AH4Y9IAAY4g+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiDHgMPgo1wsKgwm68uCJ2zwZAAT4QloOxuA=");let t=o.beginCell();t.storeRef(e),t.storeUint(0,1);const r=t.endCell();return{code:a,data:r}}const L={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"},54040:{message:"Only the deployer is permitted here"}},D=[{name:"StateInit",header:null,fields:[{name:"code",type:{kind:"simple",type:"cell",optional:!1}},{name:"data",type:{kind:"simple",type:"cell",optional:!1}}]},{name:"Context",header:null,fields:[{name:"bounced",type:{kind:"simple",type:"bool",optional:!1}},{name:"sender",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"raw",type:{kind:"simple",type:"slice",optional:!1}}]},{name:"SendParameters",header:null,fields:[{name:"bounce",type:{kind:"simple",type:"bool",optional:!1}},{name:"to",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"mode",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"body",type:{kind:"simple",type:"cell",optional:!0}},{name:"code",type:{kind:"simple",type:"cell",optional:!0}},{name:"data",type:{kind:"simple",type:"cell",optional:!0}}]},{name:"Deploy",header:2490013878,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"DeployOk",header:2952335191,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"FactoryDeploy",header:1829761339,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}},{name:"cashback",type:{kind:"simple",type:"address",optional:!1}}]},{name:"TokenInfo",header:null,fields:[{name:"ticker",type:{kind:"simple",type:"string",optional:!1}},{name:"decimals",type:{kind:"simple",type:"uint",optional:!1,format:8}}]}],Q=[{name:"result",arguments:[],returnType:{kind:"simple",type:"int",optional:!1,format:257}}],M=[{receiver:"internal",message:{kind:"text",text:"priviliged"}},{receiver:"internal",message:{kind:"text",text:"best L1"}},{receiver:"internal",message:{kind:"typed",type:"Deploy"}}];class c{constructor(e,t){l(this,"address");l(this,"init");l(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"FactoryDeploy",header:1829761339,fields:[]},{name:"TokenInfo",header:null,fields:[]}],types:D,getters:Q,receivers:M,errors:L});this.address=e,this.init=t}static async init(){return await g()}static async fromInit(){const e=await g(),t=o.contractAddress(0,e);return new c(t,e)}static fromAddress(e){return new c(e)}async send(e,t,r,n){let s=null;if(n==="priviliged"&&(s=o.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n==="best L1"&&(s=o.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n&&typeof n=="object"&&!(n instanceof o.Slice)&&n.$$type==="Deploy"&&(s=o.beginCell().store(k(n)).endCell()),s===null)throw new Error("Invalid message type");await e.internal(t,{...r,body:s})}async getResult(e){let t=new o.TupleBuilder;return(await e.get("result",t.build())).stack.readBigNumber()}}function E(a,e,t){let r;C(a,u,i=>t(2,r=i));let n,s;return B(u,r={markdown:b,tactCode:v,deploy:async()=>{const i=await h.Blockchain.create(),d=await i.treasury("deployer");n=d.getSender(),s=i.openContract(await c.fromInit());const p={[d.address.toString()]:"deployer",[s.address.toString()]:"contract"};return[[s],p,[await s.send(d.getSender(),{value:o.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{priviliged:async()=>[await s.send(n,{value:o.toNano(1)},"priviliged")],"best L1":async()=>[await s.send(n,{value:o.toNano(1)},"best L1")]},getters:{result:async()=>await s.getResult()},prev:A(import.meta.url).prev,next:A(import.meta.url).next},r),[]}class S extends f{constructor(e){super(),I(this,e,E,null,w,{})}}export{S as default};
