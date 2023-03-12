var m=Object.defineProperty;var I=(i,e,t)=>e in i?m(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var A=(i,e,t)=>(I(i,typeof e!="symbol"?e+"":e,t),t);import{S as y,i as C,s as B,I as b,ac as h}from"../../../../chunks/index-1d4083c1.js";import{d as r,g as l,s as d}from"../../../../chunks/store-457686a0.js";import{d as M}from"../../../../chunks/index-5faf5019.js";const p=`# Current Time

Many blockchains rely on the current *block number* to give a sense of progress to contracts. This approach isn't well suited for TON because contracts on TON can run on multiple workchains and those may have different block seqnos. 

In TON, the best practice is to rely on the current time instead, which is available by calling \`now()\`. Standard [unix time](https://en.wikipedia.org/wiki/Unix_time) is returned, meaning the number of seconds since 1 January 1970. 

Transactions are not executed until validators add them to a new block. The current time will therefore be the timestamp of the new block when called in the context of a *receiver*.

If you need to store the time in state or encode it in a message, use \`Int as uint32\`.

If you need to compare two points in time simply subtract the earlier from the later. This will give you the number of seconds between the two. Divide by 60 to get the difference in minutes, by 60 * 60 to get the difference in hours and by 24 * 60 * 60 to get the difference in days.`,f=`import "@stdlib/deploy";

contract CurrentTime with Deployable {

    deployTime: Int as uint32;

    init() {
        self.deployTime = now(); // returns unix time, the number of seconds since the epoch
    }

    receive("wait 10s") {
        require(now() - self.deployTime > 10, "Did not wait long enough");
        dump("thanks for waiting 10 seconds");
    }

    receive("wait 10d") {
        require(now() - self.deployTime > 10*24*60*60, "Did not wait long enough");
        dump("thanks for waiting 10 days");
    }

    get fun unixTime(): Int {
        return now();
    }

    get fun stringTime(): String {
        let sb: StringBuilder = beginString();
        sb.append(now().toString());
        sb.append(" seconds elapsed since 1 January 1970");
        return sb.toString();
    }
}`;function E(i){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(i.queryId,64)}}async function u(){const i=r.Cell.fromBase64("te6ccgECEwEABEAAART/APSkE/S88sgLAQIBYgIDAubQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GLtRNDUAfhj0gABlNMfATGOjjD4KNcLCoMJuvLgids84lnbPDDI+EMBzH8BygABAcsfye1UDwQCAWoKCwKY7aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEJRqmLa6jqMx0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yds8f+ABwACRMOMNcAUGARp/+EJwWAOAQgFtbds8BwH++QEggvChx1/NHV8tl8zYAi7oWtd6xXVEYSAMddxuTZVKmsYa9bqOMzCCAOWm+CMiocIK8vSNB10aGFua3MgZm9yIHdhaXRpbmcgMTAgc2Vjb25kc4P4UMH/bMeCC8FxubW9a29XuNEtSeuyr77wTOJCcEN9LDwc2eAa8mU+gugkBzshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFlAD+gJwAcpoI26zJW6zsZczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAIAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAGyOM4IA5ab4IyKhgggNLwC88vSNBp0aGFua3MgZm9yIHdhaXRpbmcgMTAgZGF5c4P4UMH/bMeACSbVGnaiaGoA/DHpAADKaY+AmMdHGHwUa4WFQYTdeXBE7Z5xbZ5APDAIBIA0OAAYw+CMCSbE8O1E0NQB+GPSAAGU0x8BMY6OMPgo1wsKgwm68uCJ2zzi2zyAPEAC5svRgnBc7D1dLK57HoTsOdZKhRtmgnCd1jUtK2R8syLTry398WI5gnAgVcAbgGdjlM5YOq5HJbLDgnAb1J3vlUWW8cdT094FWcMmgnCdl05as07LczoOlm2UZuikgAAT4IwOYMMhvAAFvjG1vjPgj2zzbPI0JSBzZWNvbmRzIGVsYXBzZWQgc2luY2UgMSBKYW51YXJ5IDE5NzCDbPG8iAcmTIW6zlgFvIlnMyegx0BESEgDeyCHBAJiALQHLBwGjAd4hgjgyfLJzQRnTt6mqHbmOIHAgcY4UBHqpDKYwJagSoASqBwKkIcAARTDmMDOqAs8BjitvAHCOESN6qQgSb4wBpAN6qQQgwAAU5jMipQOcUwJvgaYwWMsHAqVZ5DAx4snQALog10oh10mXIMIAIsIAsY5KA28igH8izzGrAqEFqwJRVbYIIMIAnCCqAhXXGFAzzxZAFN5ZbwJTQaHCAJnIAW8CUEShqgKOEjEzwgCZ1DDQINdKIddJknAg4uLoXwM="),e=r.Cell.fromBase64("te6cckECFQEABEoAAQHAAQEFoBIXAgEU/wD0pBP0vPLICwMCAWINBAIBagsFAgEgBwYAubL0YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIAJJsTw7UTQ1AH4Y9IAAZTTHwExjo4w+CjXCwqDCbry4InbPOLbPIBQIA5gwyG8AAW+MbW+M+CPbPNs8jQlIHNlY29uZHMgZWxhcHNlZCBzaW5jZSAxIEphbnVhcnkgMTk3MINs8byIByZMhbrOWAW8iWczJ6DHQCgkJALog10oh10mXIMIAIsIAsY5KA28igH8izzGrAqEFqwJRVbYIIMIAnCCqAhXXGFAzzxZAFN5ZbwJTQaHCAJnIAW8CUEShqgKOEjEzwgCZ1DDQINdKIddJknAg4uLoXwMA3sghwQCYgC0BywcBowHeIYI4Mnyyc0EZ07epqh25jiBwIHGOFAR6qQymMCWoEqAEqgcCpCHAAEUw5jAzqgLPAY4rbwBwjhEjeqkIEm+MAaQDeqkEIMAAFOYzIqUDnFMCb4GmMFjLBwKlWeQwMeLJ0AJJtUadqJoagD8MekAAMppj4CYx0cYfBRrhYVBhN15cETtnnFtnkBQMAAYw+CMC5tAB0NMDAXGwwAGRf5Fw4gH6QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IlUUFMDbwT4YQL4Yu1E0NQB+GPSAAGU0x8BMY6OMPgo1wsKgwm68uCJ2zziWds8MMj4QwHMfwHKAAEByx/J7VQUDgKY7aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEJRqmLa6jqMx0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yds8f+ABwACRMOMNcBEPAf75ASCC8KHHX80dXy2XzNgCLuha13rFdURhIAx13G5NlUqaxhr1uo4zMIIA5ab4IyKhwgry9I0HXRoYW5rcyBmb3Igd2FpdGluZyAxMCBzZWNvbmRzg/hQwf9sx4ILwXG5tb1rb1e40S1J67KvvvBM4kJwQ30sPBzZ4BryZT6C6EABsjjOCAOWm+CMioYIIDS8AvPL0jQadGhhbmtzIGZvciB3YWl0aW5nIDEwIGRheXOD+FDB/2zHgARp/+EJwWAOAQgFtbds8EgHOyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WUAP6AnABymgjbrMlbrOxlzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7ABMAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwABPgjqWS1dA==");let t=r.beginCell();t.storeRef(e),t.storeUint(0,1);const o=t.endCell();return{code:i,data:o}}const H={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"},58790:{message:"Did not wait long enough"}};class g{constructor(e,t){A(this,"address");A(this,"init");A(this,"abi",{errors:H});this.address=e,this.init=t}static async init(){return await u()}static async fromInit(){const e=await u(),t=r.contractAddress(0,e);return new g(t,e)}static fromAddress(e){return new g(e)}async send(e,t,o,n){let s=null;if(n==="wait 10s"&&(s=r.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n==="wait 10d"&&(s=r.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n&&typeof n=="object"&&!(n instanceof r.Slice)&&n.$$type==="Deploy"&&(s=r.beginCell().store(E(n)).endCell()),s===null)throw new Error("Invalid message type");await e.internal(t,{...o,body:s})}async getUnixTime(e){let t=new r.TupleBuilder;return(await e.get("unixTime",t.build())).stack.readBigNumber()}async getStringTime(e){let t=new r.TupleBuilder;return(await e.get("stringTime",t.build())).stack.readString()}}function D(i,e,t){let o;b(i,d,a=>t(2,o=a));let n,s;return h(d,o={markdown:p,tactCode:f,deploy:async()=>{const a=await M.Blockchain.create(),c=await a.treasury("deployer");n=c.getSender(),s=a.openContract(await g.fromInit());const w={[c.address.toString()]:"deployer",[s.address.toString()]:"contract"};return[s,w,[await s.send(c.getSender(),{value:r.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{"wait 10s":async()=>[await s.send(n,{value:r.toNano(1)},"wait 10s")],"wait 10d":async()=>[await s.send(n,{value:r.toNano(1)},"wait 10d")]},getters:{unixTime:async()=>await s.getUnixTime(),stringTime:async()=>await s.getStringTime()},prev:l(import.meta.url).prev,next:l(import.meta.url).next},o),[]}class N extends y{constructor(e){super(),C(this,e,D,null,B,{})}}export{N as default};
