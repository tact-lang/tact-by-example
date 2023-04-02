var h=Object.defineProperty;var y=(s,e,n)=>e in s?h(s,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[e]=n;var l=(s,e,n)=>(y(s,typeof e!="symbol"?e+"":e,n),n);import{S as m,i as I,s as f,I as B,ac as E}from"../chunks/index.9fe14626.js";import{d as a,g,s as w}from"../chunks/store.380869d4.js";import{d as p}from"../chunks/index.b268dd33.js";const b=`# Sending TON Coins

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
}`;function v(s){return e=>{let n=e;n.storeUint(2490013878,32),n.storeUint(s.queryId,64)}}function D(s){return e=>{let n=e;n.storeUint(195467089,32),n.storeCoins(s.amount)}}async function u(){const s=a.Cell.fromBase64("te6ccgECEgEABCoAART/APSkE/S88sgLAQIBYgIDAX7QAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GIEAgFqDA0C7O1E0NQB+GPSAAGOJfpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiTGOjjD4KNcLCoMJuvLgids84lnbPDDI+EMBzH8BygABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxbJ7VQOBQPu7aLt+3Ah10nCH5UwINcLH94Cklt/4CHAACHXScEhsI4VW4vmZ1bmRzIHJlY2VpdmVkj+FDB/4CGCEAuml1G64wIhghCUapi2uo6jMdMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8nbPH/gAcAAkTDjDXAGBwgBjjHTHwGCEAuml1G68uCB+gABMYE8lfhCI8cF8vT4J28Q+EFvJBNfA6GCCJiWgKG2CIIA1VchwgDy9PhCf1iAQhAjbW1t2zx/CgEaf/hCcFgDgEIBbW3bPAoC1PkBIILwUJK13OBxWlfdlp9ftab5MCWgsC6rMpRwyis2XKDX6Tq6jpwwgTyV+EIixwXy9PhCf3CBAIIQI21tbds8f9sx4ILwvrKTWoIImxVNMvmcQ3eqlgqhFTZswsYCdV42uX9QXOy64wIKCQFWgTyV+EIixwXy9PhCf/gnbxD4QW8kE18DoYIImJaAoYBCECNtbW3bPH/bMQoBzshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFlAD+gJwAcpoI26zJW6zsZczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wALAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAo222B2omhqAPwx6QAAxxL9IACQa6TAgIXdeXBEEGuFhRBBhN0QwIJ/3Vj5cERBhN15cESYx0cYfBRrhYVBhN15cETtnnFtnkA4PALm3ejBOC52Hq6WVz2PQnYc6yVCjbNBOE7rGpaVsj5ZkWnXlv74sRzBOBAq4A3AM7HKZywdVyOS2WHBOA3qTvfKost446np7wKs4ZNBOE7Lpy1Zp2W5nQdLNsozdFJAABPhCAQ4w+CdvENs8EAEGeds8EQDaIMEBIcJNsfLQhsgiwQCYgC0BywcCowLef3BvAASOGwR6qQwgwABSMLCzm3AzpjAUb4wEpAQDkTDiBOQBs5cCgC5vjAKk3o4QA3qpDKYwE2+MA6QiwAAQNOYzIqUDmlMSb4EBywcCpQLkbCHJ0A=="),e=a.Cell.fromBase64("te6cckECFAEABDQAAQHAAQEFoFvHAgEU/wD0pBP0vPLICwMCAWIKBAIBagYFALm3ejBOC52Hq6WVz2PQnYc6yVCjbNBOE7rGpaVsj5ZkWnXlv74sRzBOBAq4A3AM7HKZywdVyOS2WHBOA3qTvfKost446np7wKs4ZNBOE7Lpy1Zp2W5nQdLNsozdFJACjbbYHaiaGoA/DHpAADHEv0gAJBrpMCAhd15cEQQa4WFEEGE3RDAgn/dWPlwREGE3XlwRJjHRxh8FGuFhUGE3XlwRO2ecW2eQEwcBDjD4J28Q2zwIAQZ52zwJANogwQEhwk2x8tCGyCLBAJiALQHLBwKjAt5/cG8ABI4bBHqpDCDAAFIwsLObcDOmMBRvjASkBAORMOIE5AGzlwKALm+MAqTejhADeqkMpjATb4wDpCLAABA05jMipQOaUxJvgQHLBwKlAuRsIcnQAX7QAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GILAuztRNDUAfhj0gABjiX6QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4Ikxjo4w+CjXCwqDCbry4InbPOJZ2zwwyPhDAcx/AcoAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8Wye1UEwwD7u2i7ftwIddJwh+VMCDXCx/eApJbf+AhwAAh10nBIbCOFVuL5mdW5kcyByZWNlaXZlZI/hQwf+AhghALppdRuuMCIYIQlGqYtrqOozHTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J2zx/4AHAAJEw4w1wEA8NAtT5ASCC8FCStdzgcVpX3ZafX7Wm+TAloLAuqzKUcMorNlyg1+k6uo6cMIE8lfhCIscF8vT4Qn9wgQCCECNtbW3bPH/bMeCC8L6yk1qCCJsVTTL5nEN3qpYKoRU2bMLGAnVeNrl/UFzsuuMCEQ4BVoE8lfhCIscF8vT4Qn/4J28Q+EFvJBNfA6GCCJiWgKGAQhAjbW1t2zx/2zERARp/+EJwWAOAQgFtbds8EQGOMdMfAYIQC6aXUbry4IH6AAExgTyV+EIjxwXy9PgnbxD4QW8kE18DoYIImJaAobYIggDVVyHCAPL0+EJ/WIBCECNtbW3bPH8RAc7IcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxZQA/oCcAHKaCNusyVus7GXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsAEgCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAAE+EJeuDsT");let n=a.beginCell();n.storeRef(e),n.storeUint(0,1);const r=n.endCell();return{code:s,data:r}}const N={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"},15509:{message:"Only deployer is allowed to withdraw"},54615:{message:"Insufficient balance"}};class c{constructor(e,n){l(this,"address");l(this,"init");l(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"Withdraw",header:195467089,fields:[]}],errors:N});this.address=e,this.init=n}static async init(){return await u()}static async fromInit(){const e=await u(),n=a.contractAddress(0,e);return new c(n,e)}static fromAddress(e){return new c(e)}async send(e,n,r,t){let o=null;if(t===null&&(o=new a.Cell),t==="withdraw all"&&(o=a.beginCell().storeUint(0,32).storeStringTail(t).endCell()),t==="withdraw safe"&&(o=a.beginCell().storeUint(0,32).storeStringTail(t).endCell()),t&&typeof t=="object"&&!(t instanceof a.Slice)&&t.$$type==="Withdraw"&&(o=a.beginCell().store(D(t)).endCell()),t&&typeof t=="object"&&!(t instanceof a.Slice)&&t.$$type==="Deploy"&&(o=a.beginCell().store(v(t)).endCell()),o===null)throw new Error("Invalid message type");await e.internal(n,{...r,body:o})}async getBalance(e){let n=new a.TupleBuilder;return(await e.get("balance",n.build())).stack.readString()}}function J(s,e,n){let r;B(s,w,i=>n(3,r=i));let t,o;return E(w,r={markdown:b,tactCode:Q,deploy:async()=>{const i=await p.Blockchain.create(),A=await i.treasury("deployer");t=A.getSender();const d=await i.treasury("another");d.getSender(),o=i.openContract(await c.fromInit());const C={[A.address.toString()]:"deployer",[d.address.toString()]:"sender 2",[o.address.toString()]:"contract"};return[[o],C,[await o.send(A.getSender(),{value:a.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{"1 TON":async()=>[await o.send(t,{value:a.toNano(1)},null)],"withdraw all":async()=>[await o.send(t,{value:a.toNano(1)},"withdraw all")],"withdraw safe":async()=>[await o.send(t,{value:a.toNano(1)},"withdraw safe")],"Withdraw{1 TON}":async()=>[await o.send(t,{value:a.toNano(1)},{$$type:"Withdraw",amount:a.toNano(1)})]},getters:{balance:async()=>await o.getBalance()},prev:g(import.meta.url).prev,next:g(import.meta.url).next},r),[]}class O extends m{constructor(e){super(),I(this,e,J,null,f,{})}}export{O as default};
