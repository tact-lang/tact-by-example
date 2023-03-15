var C=Object.defineProperty;var w=(r,e,t)=>e in r?C(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var c=(r,e,t)=>(w(r,typeof e!="symbol"?e+"":e,t),t);import{S as m,i as B,s as y,I as h,ac as f}from"../chunks/index.9fe14626.js";import{d as o,g as u,s as d}from"../chunks/store.512f938c.js";import{d as b}from"../chunks/index.ab579dfb.js";const p=`# Functions

To make your code more readable and promote code reuse, you're encouraged to divide it into functions.

Functions in Tact start with the \`fun\` keyword. Functions can receive multiple input arguments and can optionally return a single output value. You can return a \`struct\` if you want to return multiple values.

Global static functions are defined outside the scope of contracts. You can call them from anywhere, but they can't access the contract or any of the contract state variables.

Contract methods are functions that are defined inside the scope of a contract. You can call them only from other contract methods like *receivers* and *getters*. They can access the contract's state variables.`,E=`import "@stdlib/deploy";

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
}`;function Q(r){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(r.queryId,64)}}async function g(){const r=o.Cell.fromBase64("te6ccgECFAEAA8EAART/APSkE/S88sgLAQIBYgIDAX7QAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GIEAgEgDxAC7O1E0NQB+GPSAAGOJfpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiTGOjjD4KNcLCoMJuvLgids84lnbPDDI+EMBzH8BygABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxbJ7VQRBQKY7aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEJRqmLa6jqMx0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yds8f+ABwACRMOMNcAsGAqj5ASCC8GeV8BwFgvT7ogGXybH4Kw6Ih0EF6xpKtG65cqOrM8s/uo6GMNs8f9sx4ILwtWslXE4ZY81SKUhkH+u90gsBVEaHuaelNJ7pBt1kTNO64wIHCAAWggDTGPhCIscF8vQDFnHbPDDbPNs8f9sxCQoLAEIgwAGXMIs1RPToeeDAApeLNFVEiIAS4It3Vua25vd26HABQshwAcsfbwABb4xtb4wB2zxvIgHJkyFus5YBbyJZzMnoMQwBGn/4QnBYA4BCAW1t2zwNALog10oh10mXIMIAIsIAsY5KA28igH8izzGrAqEFqwJRVbYIIMIAnCCqAhXXGFAzzxZAFN5ZbwJTQaHCAJnIAW8CUEShqgKOEjEzwgCZ1DDQINdKIddJknAg4uLoXwMBzshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFlAD+gJwAcpoI26zJW6zsZczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAOAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAo2/cpdqJoagD8MekAAMcS/SAAkGukwICF3XlwRBBrhYUQQYTdEMCCf91Y+XBEQYTdeXBEmMdHGHwUa4WFQYTdeXBE7Z5xbZ5BESALm93owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwTgN6k73yqLLeOOp6e8CrOGTQThOy6ctWadluZ0HSzbKM3RSQABPhCAQowcXrbPBMABqCrAA=="),e=o.Cell.fromBase64("te6cckECFgEAA8sAAQHAAQEFoARPAgEU/wD0pBP0vPLICwMCAWIJBAIBIAYFALm93owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwTgN6k73yqLLeOOp6e8CrOGTQThOy6ctWadluZ0HSzbKM3RSQCjb9yl2omhqAPwx6QAAxxL9IACQa6TAgIXdeXBEEGuFhRBBhN0QwIJ/3Vj5cERBhN15cESYx0cYfBRrhYVBhN15cETtnnFtnkFQcBCjBxets8CAAGoKsAAX7QAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GIKAuztRNDUAfhj0gABjiX6QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4Ikxjo4w+CjXCwqDCbry4InbPOJZ2zwwyPhDAcx/AcoAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8Wye1UFQsCmO2i7ftwIddJwh+VMCDXCx/eApJbf+AhghCUapi2uo6jMdMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8nbPH/gAcAAkTDjDXASDAKo+QEggvBnlfAcBYL0+6IBl8mx+CsOiIdBBesaSrRuuXKjqzPLP7qOhjDbPH/bMeCC8LVrJVxOGWPNUilIZB/rvdILAVRGh7mnpTSe6QbdZEzTuuMCEQ0DFnHbPDDbPNs8f9sxEA4SAULIcAHLH28AAW+MbW+MAds8byIByZMhbrOWAW8iWczJ6DEPALog10oh10mXIMIAIsIAsY5KA28igH8izzGrAqEFqwJRVbYIIMIAnCCqAhXXGFAzzxZAFN5ZbwJTQaHCAJnIAW8CUEShqgKOEjEzwgCZ1DDQINdKIddJknAg4uLoXwMAQiDAAZcwizVE9Oh54MACl4s0VUSIgBLgi3dW5rbm93bocAAWggDTGPhCIscF8vQBGn/4QnBYA4BCAW1t2zwTAc7IcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxZQA/oCcAHKaCNusyVus7GXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsAFACYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAAE+EK7Yl6v");let t=o.beginCell();t.storeRef(e),t.storeUint(0,1);const a=t.endCell();return{code:r,data:a}}const D={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"},54040:{message:"Only the deployer is permitted here"}};class i{constructor(e,t){c(this,"address");c(this,"init");c(this,"abi",{errors:D});this.address=e,this.init=t}static async init(){return await g()}static async fromInit(){const e=await g(),t=o.contractAddress(0,e);return new i(t,e)}static fromAddress(e){return new i(e)}async send(e,t,a,n){let s=null;if(n==="priviliged"&&(s=o.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n==="best L1"&&(s=o.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n&&typeof n=="object"&&!(n instanceof o.Slice)&&n.$$type==="Deploy"&&(s=o.beginCell().store(Q(n)).endCell()),s===null)throw new Error("Invalid message type");await e.internal(t,{...a,body:s})}async getResult(e){let t=new o.TupleBuilder;return(await e.get("result",t.build())).stack.readBigNumber()}}function T(r,e,t){let a;h(r,d,A=>t(2,a=A));let n,s;return f(d,a={markdown:p,tactCode:E,deploy:async()=>{const A=await b.Blockchain.create(),l=await A.treasury("deployer");n=l.getSender(),s=A.openContract(await i.fromInit());const I={[l.address.toString()]:"deployer",[s.address.toString()]:"contract"};return[s,I,[await s.send(l.getSender(),{value:o.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{priviliged:async()=>[await s.send(n,{value:o.toNano(1)},"priviliged")],"best L1":async()=>[await s.send(n,{value:o.toNano(1)},"best L1")]},getters:{result:async()=>await s.getResult()},prev:u(import.meta.url).prev,next:u(import.meta.url).next},a),[]}class H extends m{constructor(e){super(),B(this,e,T,null,y,{})}}export{H as default};
