var I=Object.defineProperty;var w=(r,e,t)=>e in r?I(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var c=(r,e,t)=>(w(r,typeof e!="symbol"?e+"":e,t),t);import{S as y,i as B,s as f,I as m,ac as h}from"../chunks/index.9fe14626.js";import{d as o,g as d,s as u}from"../chunks/store.2b42c038.js";import{d as p}from"../chunks/index.9fe59178.js";const b=`# Functions

To make your code more readable and promote code reuse, you're encouraged to divide it into functions.

Functions in Tact start with the \`fun\` keyword. Functions can receive multiple input arguments and can optionally return a single output value. You can return a \`struct\` if you want to return multiple values.

Global static functions are defined outside the scope of contracts. You can call them from anywhere, but they can't access the contract or any of the contract state variables.

Contract methods are functions that are defined inside the scope of a contract. You can call them only from other contract methods like *receivers* and *getters*. They can access the contract's state variables.`,v=`import "@stdlib/deploy";

struct TokenInfo {
    ticker: String;
    decimals: Int;
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
        reply(best.ticker.asComment());
    }

    get fun result(): Int {
        return average(1, 10);
    }
}`;function D(r){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(r.queryId,64)}}async function g(){const r=o.Cell.fromBase64("te6ccgECFwEAA8MAART/APSkE/S88sgLAQIBYgIDAsrQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxZ2zwwyPhDAcx/AcoAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFsntVA8EAgEgDQ4Cru2i7ftwIddJwh+VMCDXCx/eApJbf+AhghCUapi2uo6uMdMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8l/+EJwWAOAQgFtbds8f+ABwACRMOMNcAoFAqj5ASCC8GeV8BwFgvT7ogGXybH4Kw6Ih0EF6xpKtG65cqOrM8s/uo6GMNs8f9sx4ILwtWslXE4ZY81SKUhkH+u90gsBVEaHuaelNJ7pBt1kTNO64wIGBwAYggDTGPhCUiDHBfL0Ayxx2zww2zx/+EJwWAOAQgFtbds8f9sxCAkKAEIgwAGXMIs1RPToeeDAApeLNFVEiIAS4It3Vua25vd26HABQshwAcsfbwABb4xtb4wB2zxvIgHJkyFus5YBbyJZzMnoMQsByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsADAC6INdKIddJlyDCACLCALGOSgNvIoB/Is8xqwKhBasCUVW2CCDCAJwgqgIV1xhQM88WQBTeWW8CU0GhwgCZyAFvAlBEoaoCjhIxM8IAmdQw0CDXSiHXSZJwIOLi6F8DAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAg+/cpbZ5tnhjA8QAgEgExQBdu1E0NQB+GPSAAGOIPpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4Igx4DD4KNcLCoMJuvLgids8EQEIcXrbPBIABPhCAAagqwAAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSAIBSBUWABGwr7tRNDSAAGAAdbJu40NWlwZnM6Ly9RbU53QUVjUzY0cnR4THI2TU44NGRnZXJrWUFUUFFaMXZCaU51UHZMMlJUWVd1gg"),e=o.Cell.fromBase64("te6cckECGQEAA80AAQHAAQEFoARPAgEU/wD0pBP0vPLICwMCAWINBAIBIAoFAgEgCQYCAUgIBwB1sm7jQ1aXBmczovL1FtTndBRWNTNjRydHhMcjZNTjg0ZGdlcmtZQVRQUVoxdkJpTnVQdkwyUlRZV3WCAAEbCvu1E0NIAAYAC5u70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIAg+/cpbZ5tnhjBcLAQhxets8DAAGoKsAAsrQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxZ2zwwyPhDAcx/AcoAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFsntVBcOAq7tou37cCHXScIflTAg1wsf3gKSW3/gIYIQlGqYtrqOrjHTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/Jf/hCcFgDgEIBbW3bPH/gAcAAkTDjDXAVDwKo+QEggvBnlfAcBYL0+6IBl8mx+CsOiIdBBesaSrRuuXKjqzPLP7qOhjDbPH/bMeCC8LVrJVxOGWPNUilIZB/rvdILAVRGh7mnpTSe6QbdZEzTuuMCFBADLHHbPDDbPH/4QnBYA4BCAW1t2zx/2zETERUBQshwAcsfbwABb4xtb4wB2zxvIgHJkyFus5YBbyJZzMnoMRIAuiDXSiHXSZcgwgAiwgCxjkoDbyKAfyLPMasCoQWrAlFVtgggwgCcIKoCFdcYUDPPFkAU3llvAlNBocIAmcgBbwJQRKGqAo4SMTPCAJnUMNAg10oh10mScCDi4uhfAwBCIMABlzCLNUT06HngwAKXizRVRIiAEuCLd1bmtub3duhwABiCANMY+EJSIMcF8vQByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsAFgCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAF27UTQ1AH4Y9IAAY4g+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiDHgMPgo1wsKgwm68uCJ2zwYAAT4QpLBpHU=");let t=o.beginCell();t.storeRef(e),t.storeUint(0,1);const a=t.endCell();return{code:r,data:a}}const Q={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"},54040:{message:"Only the deployer is permitted here"}};class A{constructor(e,t){c(this,"address");c(this,"init");c(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"TokenInfo",header:null,fields:[]}],errors:Q});this.address=e,this.init=t}static async init(){return await g()}static async fromInit(){const e=await g(),t=o.contractAddress(0,e);return new A(t,e)}static fromAddress(e){return new A(e)}async send(e,t,a,n){let s=null;if(n==="priviliged"&&(s=o.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n==="best L1"&&(s=o.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n&&typeof n=="object"&&!(n instanceof o.Slice)&&n.$$type==="Deploy"&&(s=o.beginCell().store(D(n)).endCell()),s===null)throw new Error("Invalid message type");await e.internal(t,{...a,body:s})}async getResult(e){let t=new o.TupleBuilder;return(await e.get("result",t.build())).stack.readBigNumber()}}function x(r,e,t){let a;m(r,u,i=>t(2,a=i));let n,s;return h(u,a={markdown:b,tactCode:v,deploy:async()=>{const i=await p.Blockchain.create(),l=await i.treasury("deployer");n=l.getSender(),s=i.openContract(await A.fromInit());const C={[l.address.toString()]:"deployer",[s.address.toString()]:"contract"};return[[s],C,[await s.send(l.getSender(),{value:o.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{priviliged:async()=>[await s.send(n,{value:o.toNano(1)},"priviliged")],"best L1":async()=>[await s.send(n,{value:o.toNano(1)},"best L1")]},getters:{result:async()=>await s.getResult()},prev:d(import.meta.url).prev,next:d(import.meta.url).next},a),[]}class U extends y{constructor(e){super(),B(this,e,x,null,f,{})}}export{U as default};
