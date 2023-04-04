var h=Object.defineProperty;var y=(o,e,n)=>e in o?h(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n;var l=(o,e,n)=>(y(o,typeof e!="symbol"?e+"":e,n),n);import{S as m,i as I,s as f,I as B,ac as b}from"../chunks/index.9fe14626.js";import{d as a,g,s as w}from"../chunks/store.d3ab02ad.js";import{d as p}from"../chunks/index.78404594.js";const E=`# Sending TON Coins

This contract allows to withdraw TON coins from its balance. Notice that only the deployer is permitted to do that, otherwise this money could be stolen.

The withdrawn funds are sent as value on an outgoing message to the sender. It's a good idea to set the \`bounce\` flag explicitly to \`true\` (although this also the default), so if the outgoing message fails for any reason, the money would return to the contract.

Contracts need to have a non-zero balance so they can pay storage costs occasionally, otherwise they may get deleted. This contract can make sure you always leave 0.01 TON which is [enough](https://ton.org/docs/develop/smart-contracts/fees#storage-fee) to store 1 KB of state for 2.5 years.

## The intricate math

\`myBalance()\` is the contract balance including the value for gas sent on the incoming message. \`myBalance() - context().value\` is the balance without the value for gas sent on the incoming message.

Send mode \`SendRemainingValue\` will add to the outgoing value any excess left from the incoming message after all gas costs are deducted from it.

Send mode \`SendRemainingBalance\` will ignore the outgoing value and send the entire balance of the contract. Note that this will not leave any balance for storage costs so the contract may be deleted.`,Q=`import "@stdlib/deploy";

message Withdraw {
    amount: Int as coins;
}

contract SendCoins with Deployable {

    const MinTonForStorage: Int = ton("0.01"); // enough for 1 KB of storage for 2.5 years
    deployer: Address;

    init() {
        self.deployer = sender();
    }

    // accept incoming TON transfers
    receive() {
        dump("funds received");
    }

    // this will withdraw the entire balance of the contract and leave 0
    receive("withdraw all") {
        require(sender() == self.deployer, "Only deployer is allowed to withdraw");
        send(SendParameters{
            to: sender(),
            bounce: true,
            value: 0,
            mode: SendRemainingBalance + SendIgnoreErrors
        });
    }

    // this will withdraw the entire balance but leave 0.01 for storage rent costs
    receive("withdraw safe") {
        require(sender() == self.deployer, "Only deployer is allowed to withdraw");
        send(SendParameters{
            to: sender(),
            bounce: true,
            value: myBalance() - context().value - self.MinTonForStorage,
            mode: SendRemainingValue + SendIgnoreErrors
        });
    }

    // this will withdraw a specific amount but leave 0.01 for storage rent costs
    receive(msg: Withdraw) {
        require(sender() == self.deployer, "Only deployer is allowed to withdraw");
        let amount: Int = min(msg.amount, myBalance() - context().value - self.MinTonForStorage);
        require(amount > 0, "Insufficient balance");
        send(SendParameters{
            to: sender(),
            bounce: true,
            value: amount,
            mode: SendRemainingValue + SendIgnoreErrors
        });
    }
 
    get fun balance(): String {
        return myBalance().toCoinsString();
    }
}`;function v(o){return e=>{let n=e;n.storeUint(2490013878,32),n.storeUint(o.queryId,64)}}function M(o){return e=>{let n=e;n.storeUint(195467089,32),n.storeCoins(o.amount)}}async function u(){const o=a.Cell.fromBase64("te6ccgECFAEABB8AART/APSkE/S88sgLAQIBYgIDAsrQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxZ2zwwyPhDAcx/AcoAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFsntVA4EAgFYCgsD9u2i7ftwIddJwh+VMCDXCx/eApJbf+AhwAAh10nBIbCOFVuL5mdW5kcyByZWNlaXZlZI/hQwf+AhghALppdRuuMCIYIQlGqYtrqOrjHTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/Jf/hCcFgDgEIBbW3bPH/gAQUIBgGQMdMfAYIQC6aXUbry4IH6AAExgTyV+EJSMMcF8vT4J28Q+EFvJBNfA6GCCJiWgKG2CIIA1VchwgDy9PhCf1iAQhAjbW1t2zx/CALmwACPa/kBIILwUJK13OBxWlfdlp9ftab5MCWgsC6rMpRwyis2XKDX6Tq6jp0wgTyV+EJSIMcF8vT4Qn9wgQCCECNtbW3bPH/bMeCC8L6yk1qCCJsVTTL5nEN3qpYKoRU2bMLGAnVeNrl/UFzsuuMCkTDicAgHAViBPJX4QlIgxwXy9PhCf/gnbxD4QW8kE18DoYIImJaAoYBCECNtbW3bPH/bMQgByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsACQCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAIBIAwNAgFIEhMCD7bYG2ebZ4YwDg8Aubd6ME4LnYerpZXPY9CdhzrJUKNs0E4TusalpWyPlmRadeW/vixHME4ECrgDcAzscpnLB1XI5LZYcE4DepO98qiy3jjqenvAqzhk0E4TsunLVmnZbmdB0s2yjN0UkAF27UTQ1AH4Y9IAAY4g+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiDHgMPgo1wsKgwm68uCJ2zwQAQ74J28Qeds8EQAE+EIA2iDBASHCTbHy0IbIIsEAmIAtAcsHAqMC3n9wbwAEjhsEeqkMIMAAUjCws5twM6YwFG+MBKQEA5Ew4gTkAbOXAoAub4wCpN6OEAN6qQymMBNvjAOkIsAAEDTmMyKlA5pTEm+BAcsHAqUC5GwhydAAEbCvu1E0NIAAYAB1sm7jQ1aXBmczovL1FtWlg3Vk1QTXo2YXRHdWp5MWtRWXhQQ3U1UVdLOFNVREttUlpKc0oxUk5qZlKCA="),e=a.Cell.fromBase64("te6cckECFgEABCkAAQHAAQEFoFvHAgEU/wD0pBP0vPLICwMCAWINBAIBWAgFAgFIBwYAdbJu40NWlwZnM6Ly9RbVpYN1ZNUE16NmF0R3VqeTFrUVl4UEN1NVFXSzhTVURLbVJaSnNKMVJOamZSggABGwr7tRNDSAAGACASAKCQC5t3owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwTgN6k73yqLLeOOp6e8CrOGTQThOy6ctWadluZ0HSzbKM3RSQAg+22Btnm2eGMBQLAQ74J28Qeds8DADaIMEBIcJNsfLQhsgiwQCYgC0BywcCowLef3BvAASOGwR6qQwgwABSMLCzm3AzpjAUb4wEpAQDkTDiBOQBs5cCgC5vjAKk3o4QA3qpDKYwE2+MA6QiwAAQNOYzIqUDmlMSb4EBywcCpQLkbCHJ0ALK0AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8Wds8MMj4QwHMfwHKAAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbJ7VQUDgP27aLt+3Ah10nCH5UwINcLH94Cklt/4CHAACHXScEhsI4VW4vmZ1bmRzIHJlY2VpdmVkj+FDB/4CGCEAuml1G64wIhghCUapi2uo6uMdMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8l/+EJwWAOAQgFtbds8f+ABERIPAubAAI9r+QEggvBQkrXc4HFaV92Wn1+1pvkwJaCwLqsylHDKKzZcoNfpOrqOnTCBPJX4QlIgxwXy9PhCf3CBAIIQI21tbds8f9sx4ILwvrKTWoIImxVNMvmcQ3eqlgqhFTZswsYCdV42uX9QXOy64wKRMOJwEhABWIE8lfhCUiDHBfL0+EJ/+CdvEPhBbyQTXwOhggiYloChgEIQI21tbds8f9sxEgGQMdMfAYIQC6aXUbry4IH6AAExgTyV+EJSMMcF8vT4J28Q+EFvJBNfA6GCCJiWgKG2CIIA1VchwgDy9PhCf1iAQhAjbW1t2zx/EgHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wATAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAXbtRNDUAfhj0gABjiD6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIMeAw+CjXCwqDCbry4InbPBUABPhCmXKXKw==");let n=a.beginCell();n.storeRef(e),n.storeUint(0,1);const r=n.endCell();return{code:o,data:r}}const S={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"},15509:{message:"Only deployer is allowed to withdraw"},54615:{message:"Insufficient balance"}};class c{constructor(e,n){l(this,"address");l(this,"init");l(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"Withdraw",header:195467089,fields:[]}],errors:S});this.address=e,this.init=n}static async init(){return await u()}static async fromInit(){const e=await u(),n=a.contractAddress(0,e);return new c(n,e)}static fromAddress(e){return new c(e)}async send(e,n,r,t){let s=null;if(t===null&&(s=new a.Cell),t==="withdraw all"&&(s=a.beginCell().storeUint(0,32).storeStringTail(t).endCell()),t==="withdraw safe"&&(s=a.beginCell().storeUint(0,32).storeStringTail(t).endCell()),t&&typeof t=="object"&&!(t instanceof a.Slice)&&t.$$type==="Withdraw"&&(s=a.beginCell().store(M(t)).endCell()),t&&typeof t=="object"&&!(t instanceof a.Slice)&&t.$$type==="Deploy"&&(s=a.beginCell().store(v(t)).endCell()),s===null)throw new Error("Invalid message type");await e.internal(n,{...r,body:s})}async getBalance(e){let n=new a.TupleBuilder;return(await e.get("balance",n.build())).stack.readString()}}function T(o,e,n){let r;B(o,w,i=>n(3,r=i));let t,s;return b(w,r={markdown:E,tactCode:Q,deploy:async()=>{const i=await p.Blockchain.create(),d=await i.treasury("deployer");t=d.getSender();const A=await i.treasury("another");A.getSender(),s=i.openContract(await c.fromInit());const C={[d.address.toString()]:"deployer",[A.address.toString()]:"sender 2",[s.address.toString()]:"contract"};return[[s],C,[await s.send(d.getSender(),{value:a.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{"1 TON":async()=>[await s.send(t,{value:a.toNano(1)},null)],"withdraw all":async()=>[await s.send(t,{value:a.toNano(1)},"withdraw all")],"withdraw safe":async()=>[await s.send(t,{value:a.toNano(1)},"withdraw safe")],"Withdraw{1 TON}":async()=>[await s.send(t,{value:a.toNano(1)},{$$type:"Withdraw",amount:a.toNano(1)})]},getters:{balance:async()=>await s.getBalance()},prev:g(import.meta.url).prev,next:g(import.meta.url).next},r),[]}class L extends m{constructor(e){super(),I(this,e,T,null,f,{})}}export{L as default};
