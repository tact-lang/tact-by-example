var p=Object.defineProperty;var u=(i,e,n)=>e in i?p(i,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[e]=n;var l=(i,e,n)=>(u(i,typeof e!="symbol"?e+"":e,n),n);import{S as w,i as f,s as h,I as B,ac as v}from"../chunks/index.9fe14626.js";import{d as s,g as A,s as g}from"../chunks/store.476c3091.js";import{d as C}from"../chunks/index.c056099e.js";const b=`# Receiving TON Coins

Every contract has a TON coin balance. This balance is used to pay ongoing rent for storage and should not run out otherwise the contract may be deleted. You can store extra coins in the balance for any purpose.

Every incoming message normally carries some TON coin value sent by the sender. This value is used to pay gas for handling this message. Unused excess will stay in the contract balance. If the value doesn't cover the gas cost, the transaction will revert.

You can query the contract balance with \`myBalance()\` - note that the value is in nano-tons (like cents, just with 9 decimals). The balance already contains the incoming message value.

<div style="padding-left: 1em; margin: 1em 0; position: relative;">
    <div style="position: absolute; top: 0; bottom: 0%; left: 0; width: 3px; background-color: green;"></div>
    <strong>Info</strong>: More detail about myBalance() can be found here: <a href="https://docs.tact-lang.org/ref/core-common/#mybalance">myBalance()</a>
</div>

## Refunding senders

If the transaction reverts, unused excess value will be sent back to sender on the _bounced_ message.

You can also refund the excess if the transaction succeeds by sending it back using \`self.reply()\` in a response message. This is the best way to guarantee senders are only paying for the exact gas that their message consumed.
`,I=`import "@stdlib/deploy";

contract ReceiveCoins with Deployable {

    val: Int as int64;

    init() {
        self.val = 0;
    }

    // receive empty messages, these are usually simple TON coin transfers to the contract
    receive() {
        dump("empty message received");
        // revert the transaction if balance is growing over 3 TON
        require(myBalance() <= ton("3"), "Balance getting too high");
    }

    receive("increment") {
        // print how much TON coin were sent with this message
        dump(context().value);
        self.val = self.val + 1;
    }

    receive("refunding increment") {
        // print how much TON coin were sent with this message
        dump(context().value);
        self.val = self.val + 1;
        // return all the unused excess TON coin value on the message back to the sender (with a textual string message)
        self.reply("increment refund".asComment());
    }
 
    get fun balance(): Int {
        return myBalance(); // in nano-tons (like cents, just with 9 decimals)
    }
}`;function Q(i){return e=>{let n=e;n.storeUint(2490013878,32),n.storeUint(i.queryId,64)}}async function m(){const i=s.Cell.fromBase64("te6ccgECFgEAA7wAART/APSkE/S88sgLAQIBYgIDApjQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxZ2zzy4ILI+EMBzH8BygABAco/ye1UEQQCAVgNDgLE7aLt+wGSMH/gcCHXScIflTAg1wsf3iDAACLXScEhsI4vW40FmVtcHR5IG1lc3NhZ2UgcmVjZWl2ZWSD+FDCCAKDQ+CdvEIIQstBeALvy9H/gIIIQlGqYtrrjAsAAkTDjDXAFBgFQMNMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8n4QgFwbds8fwoCvvkBIILwxPjXIxLt/e9be+x4M727Fi0VEb14qRKu0PJjevZVcq66jpEw+EFvJBNfA9s8/hQwpH/bMeCC8Prj0Y9jowRFqiOt9qA4RoLqvYxC2ewFydcVLmpWdS8YuuMCCAcDMPhBbyQTXwPbPP4UMKSI+EIBf23bPH/bMQgJCgDeyCHBAJiALQHLBwGjAd4hgjgyfLJzQRnTt6mqHbmOIHAgcY4UBHqpDKYwJagSoASqBwKkIcAARTDmMDOqAs8BjitvAHCOESN6qQgSb4wBpAN6qQQgwAAU5jMipQOcUwJvgaYwWMsHAqVZ5DAx4snQACgAAAAAaW5jcmVtZW50IHJlZnVuZAE6bW0ibrOZWyBu8tCAbyIBkTLiECRwAwSAQlAj2zwLAcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AAwAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwCASAPEAIBSBQVAg+22Btnm2eGMBESALm3ejBOC52Hq6WVz2PQnYc6yVCjbNBOE7rGpaVsj5ZkWnXlv74sRzBOBAq4A3AM7HKZywdVyOS2WHBOA3qTvfKost446np7wKs4ZNBOE7Lpy1Zp2W5nQdLNsozdFJABPO1E0NQB+GPSAAGU0j8BMeAw+CjXCwqDCbry4InbPBMACPgnbxAAAnAAEbCvu1E0NIAAYAB1sm7jQ1aXBmczovL1FtYnoxUW8xY2FRN0ZwOEtTWDJ1WnlCTDRrYkdidjJINEhhd3dFZWlKMWNxUlSCA="),e=s.Cell.fromBase64("te6cckECGAEAA8YAAQHAAQEFoARXAgEU/wD0pBP0vPLICwMCAWIMBAIBWAgFAgFIBwYAdbJu40NWlwZnM6Ly9RbWJ6MVFvMWNhUTdGcDhLU1gydVp5Qkw0a2JHYnYySDRIYXd3RWVpSjFjcVJUggABGwr7tRNDSAAGACASAKCQC5t3owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwTgN6k73yqLLeOOp6e8CrOGTQThOy6ctWadluZ0HSzbKM3RSQAg+22Btnm2eGMBYLAAj4J28QApjQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxZ2zzy4ILI+EMBzH8BygABAco/ye1UFg0CxO2i7fsBkjB/4HAh10nCH5UwINcLH94gwAAi10nBIbCOL1uNBZlbXB0eSBtZXNzYWdlIHJlY2VpdmVkg/hQwggCg0PgnbxCCELLQXgC78vR/4CCCEJRqmLa64wLAAJEw4w1wEg4CvvkBIILwxPjXIxLt/e9be+x4M727Fi0VEb14qRKu0PJjevZVcq66jpEw+EFvJBNfA9s8/hQwpH/bMeCC8Prj0Y9jowRFqiOt9qA4RoLqvYxC2ewFydcVLmpWdS8YuuMCEQ8DMPhBbyQTXwPbPP4UMKSI+EIBf23bPH/bMREQEwAoAAAAAGluY3JlbWVudCByZWZ1bmQA3sghwQCYgC0BywcBowHeIYI4Mnyyc0EZ07epqh25jiBwIHGOFAR6qQymMCWoEqAEqgcCpCHAAEUw5jAzqgLPAY4rbwBwjhEjeqkIEm+MAaQDeqkEIMAAFOYzIqUDnFMCb4GmMFjLBwKlWeQwMeLJ0AFQMNMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8n4QgFwbds8fxMBOm1tIm6zmVsgbvLQgG8iAZEy4hAkcAMEgEJQI9s8FAHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAVAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMATztRNDUAfhj0gABlNI/ATHgMPgo1wsKgwm68uCJ2zwXAAJwSN9PBA==");let n=s.beginCell();n.storeRef(e),n.storeUint(0,1);const o=n.endCell();return{code:i,data:o}}const E={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"},41168:{message:"Balance getting too high"}},M=[{name:"StateInit",header:null,fields:[{name:"code",type:{kind:"simple",type:"cell",optional:!1}},{name:"data",type:{kind:"simple",type:"cell",optional:!1}}]},{name:"Context",header:null,fields:[{name:"bounced",type:{kind:"simple",type:"bool",optional:!1}},{name:"sender",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"raw",type:{kind:"simple",type:"slice",optional:!1}}]},{name:"SendParameters",header:null,fields:[{name:"bounce",type:{kind:"simple",type:"bool",optional:!1}},{name:"to",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"mode",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"body",type:{kind:"simple",type:"cell",optional:!0}},{name:"code",type:{kind:"simple",type:"cell",optional:!0}},{name:"data",type:{kind:"simple",type:"cell",optional:!0}}]},{name:"Deploy",header:2490013878,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"DeployOk",header:2952335191,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"FactoryDeploy",header:1829761339,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}},{name:"cashback",type:{kind:"simple",type:"address",optional:!1}}]}],k=[{name:"balance",arguments:[],returnType:{kind:"simple",type:"int",optional:!1,format:257}}],L=[{receiver:"internal",message:{kind:"empty"}},{receiver:"internal",message:{kind:"text",text:"increment"}},{receiver:"internal",message:{kind:"text",text:"refunding increment"}},{receiver:"internal",message:{kind:"typed",type:"Deploy"}}];class c{constructor(e,n){l(this,"address");l(this,"init");l(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"FactoryDeploy",header:1829761339,fields:[]}],types:M,getters:k,receivers:L,errors:E});this.address=e,this.init=n}static async init(){return await m()}static async fromInit(){const e=await m(),n=s.contractAddress(0,e);return new c(n,e)}static fromAddress(e){return new c(e)}async send(e,n,o,t){let a=null;if(t===null&&(a=new s.Cell),t==="increment"&&(a=s.beginCell().storeUint(0,32).storeStringTail(t).endCell()),t==="refunding increment"&&(a=s.beginCell().storeUint(0,32).storeStringTail(t).endCell()),t&&typeof t=="object"&&!(t instanceof s.Slice)&&t.$$type==="Deploy"&&(a=s.beginCell().store(Q(t)).endCell()),a===null)throw new Error("Invalid message type");await e.internal(n,{...o,body:a})}async getBalance(e){let n=new s.TupleBuilder;return(await e.get("balance",n.build())).stack.readBigNumber()}}function D(i,e,n){let o;B(i,g,r=>n(2,o=r));let t,a;return v(g,o={markdown:b,tactCode:I,deploy:async()=>{const r=await C.Blockchain.create(),d=await r.treasury("deployer");t=d.getSender(),a=r.openContract(await c.fromInit());const y={[d.address.toString()]:"deployer",[a.address.toString()]:"contract"};return[[a],y,[await a.send(d.getSender(),{value:s.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{"1 TON":async()=>[await a.send(t,{value:s.toNano(1)},null)],increment:async()=>[await a.send(t,{value:s.toNano(1)},"increment")],"refunding increment":async()=>[await a.send(t,{value:s.toNano(1)},"refunding increment")]},getters:{balance:async()=>await a.getBalance()},prev:A(import.meta.url).prev,next:A(import.meta.url).next},o),[]}class j extends w{constructor(e){super(),f(this,e,D,null,h,{})}}export{j as default};
