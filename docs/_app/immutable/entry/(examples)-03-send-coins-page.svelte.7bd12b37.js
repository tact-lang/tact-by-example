var m=Object.defineProperty;var u=(s,e,t)=>e in s?m(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var l=(s,e,t)=>(u(s,typeof e!="symbol"?e+"":e,t),t);import{S as f,i as h,s as C,I,ac as b}from"../chunks/index.9fe14626.js";import{d as a,g as A,s as y}from"../chunks/store.476c3091.js";import{d as B}from"../chunks/index.c056099e.js";const Q=`# Sending TON Coins

This contract allows to withdraw TON coins from its balance. Notice that only the deployer is permitted to do that, otherwise this money could be stolen.

The withdrawn funds are sent as value on an outgoing message to the sender. It's a good idea to set the \`bounce\` flag explicitly to \`true\` (although this also the default), so if the outgoing message fails for any reason, the money would return to the contract.

Contracts need to have a non-zero balance so they can pay storage costs occasionally, otherwise they may get deleted. This contract can make sure you always leave 0.01 TON which is [enough](https://ton.org/docs/develop/smart-contracts/fees#storage-fee) to store 1 KB of state for 2.5 years.

## The intricate math

\`myBalance()\` is the contract balance including the value for gas sent on the incoming message. \`myBalance() - context().value\` is the balance without the value for gas sent on the incoming message.

Send mode \`SendRemainingValue\` will add to the outgoing value any excess left from the incoming message after all gas costs are deducted from it.

Send mode \`SendRemainingBalance\` will ignore the outgoing value and send the entire balance of the contract. Note that this will not leave any balance for storage costs so the contract may be deleted.

<div style="padding-left: 1em; margin: 1em 0; position: relative;">
    <div style="position: absolute; top: 0; bottom: 0%; left: 0; width: 3px; background-color: green;"></div>
    <strong>Info</strong>:  More details for different sending modes can check 
     <a href="https://docs.tact-lang.org/book/message-mode#combining-modes-with-flags">here</a>
</div>
`,v=`import "@stdlib/deploy";

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
}`;function E(s){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(s.queryId,64)}}function D(s){return e=>{let t=e;t.storeUint(195467089,32),t.storeCoins(s.amount)}}async function p(){const s=a.Cell.fromBase64("te6ccgECFQEABDkAART/APSkE/S88sgLAQIBYgIDAs7QAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxZ2zzy4ILI+EMBzH8BygABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8Wye1UDwQCAVgLDAP27aLt+wGSMH/gcCHXScIflTAg1wsf3iDAACLXScEhsI4VW4vmZ1bmRzIHJlY2VpdmVkj+FDB/4CCCEAuml1G64wIgghCUapi2uo6oMNMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8n4QgFwbds8f+DAAJEw4w1wBQYHAZAw0x8BghALppdRuvLggfoAATGBPJX4QlIwxwXy9PgnbxD4QW8kE18DoYIImJaAobYIggDVVyHCAPL0+EJ/WIBCECNtbW3bPH8JATptbSJus5lbIG7y0IBvIgGRMuIQJHADBIBCUCPbPAkC1vkBIILwUJK13OBxWlfdlp9ftab5MCWgsC6rMpRwyis2XKDX6Tq6jp0wgTyV+EJSIMcF8vT4Qn9wgQCCECNtbW3bPH/bMeCC8L6yk1qCCJsVTTL5nEN3qpYKoRU2bMLGAnVeNrl/UFzsuuMCCQgBWIE8lfhCUiDHBfL0+EJ/+CdvEPhBbyQTXwOhggiYloChgEIQI21tbds8f9sxCQHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAKAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAgEgDQ4CAUgTFAIPttgbZ5tnhjAPEAC5t3owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwTgN6k73yqLLeOOp6e8CrOGTQThOy6ctWadluZ0HSzbKM3RSQAXbtRNDUAfhj0gABjiD6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIMeAw+CjXCwqDCbry4InbPBEBDvgnbxB52zwSAAT4QgDaIMEBIcJNsfLQhsgiwQCYgC0BywcCowLef3BvAASOGwR6qQwgwABSMLCzm3AzpjAUb4wEpAQDkTDiBOQBs5cCgC5vjAKk3o4QA3qpDKYwE2+MA6QiwAAQNOYzIqUDmlMSb4EBywcCpQLkbCHJ0AARsK+7UTQ0gABgAHWybuNDVpcGZzOi8vUW1mQVc2aFpjVVNENnBURVBFa2VVbUx2U29aNG9wZkQ5WGh1VUdMYkVGMnpRVYIA=="),e=a.Cell.fromBase64("te6cckECFwEABEMAAQHAAQEFoFvHAgEU/wD0pBP0vPLICwMCAWINBAIBWAgFAgFIBwYAdbJu40NWlwZnM6Ly9RbWZBVzZoWmNVU0Q2cFRFUEVrZVVtTHZTb1o0b3BmRDlYaHVVR0xiRUYyelFVggABGwr7tRNDSAAGACASAKCQC5t3owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwTgN6k73yqLLeOOp6e8CrOGTQThOy6ctWadluZ0HSzbKM3RSQAg+22Btnm2eGMBULAQ74J28Qeds8DADaIMEBIcJNsfLQhsgiwQCYgC0BywcCowLef3BvAASOGwR6qQwgwABSMLCzm3AzpjAUb4wEpAQDkTDiBOQBs5cCgC5vjAKk3o4QA3qpDKYwE2+MA6QiwAAQNOYzIqUDmlMSb4EBywcCpQLkbCHJ0ALO0AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8Wds88uCCyPhDAcx/AcoAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFsntVBUOA/btou37AZIwf+BwIddJwh+VMCDXCx/eIMAAItdJwSGwjhVbi+ZnVuZHMgcmVjZWl2ZWSP4UMH/gIIIQC6aXUbrjAiCCEJRqmLa6jqgw0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yfhCAXBt2zx/4MAAkTDjDXASEQ8C1vkBIILwUJK13OBxWlfdlp9ftab5MCWgsC6rMpRwyis2XKDX6Tq6jp0wgTyV+EJSIMcF8vT4Qn9wgQCCECNtbW3bPH/bMeCC8L6yk1qCCJsVTTL5nEN3qpYKoRU2bMLGAnVeNrl/UFzsuuMCExABWIE8lfhCUiDHBfL0+EJ/+CdvEPhBbyQTXwOhggiYloChgEIQI21tbds8f9sxEwE6bW0ibrOZWyBu8tCAbyIBkTLiECRwAwSAQlAj2zwTAZAw0x8BghALppdRuvLggfoAATGBPJX4QlIwxwXy9PgnbxD4QW8kE18DoYIImJaAobYIggDVVyHCAPL0+EJ/WIBCECNtbW3bPH8TAcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7ABQAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwBdu1E0NQB+GPSAAGOIPpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4Igx4DD4KNcLCoMJuvLgids8FgAE+EKsoc0K");let t=a.beginCell();t.storeRef(e),t.storeUint(0,1);const r=t.endCell();return{code:s,data:r}}const S={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"},15509:{message:"Only deployer is allowed to withdraw"},54615:{message:"Insufficient balance"}},k=[{name:"StateInit",header:null,fields:[{name:"code",type:{kind:"simple",type:"cell",optional:!1}},{name:"data",type:{kind:"simple",type:"cell",optional:!1}}]},{name:"Context",header:null,fields:[{name:"bounced",type:{kind:"simple",type:"bool",optional:!1}},{name:"sender",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"raw",type:{kind:"simple",type:"slice",optional:!1}}]},{name:"SendParameters",header:null,fields:[{name:"bounce",type:{kind:"simple",type:"bool",optional:!1}},{name:"to",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"mode",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"body",type:{kind:"simple",type:"cell",optional:!0}},{name:"code",type:{kind:"simple",type:"cell",optional:!0}},{name:"data",type:{kind:"simple",type:"cell",optional:!0}}]},{name:"Deploy",header:2490013878,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"DeployOk",header:2952335191,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"FactoryDeploy",header:1829761339,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}},{name:"cashback",type:{kind:"simple",type:"address",optional:!1}}]},{name:"Withdraw",header:195467089,fields:[{name:"amount",type:{kind:"simple",type:"uint",optional:!1,format:"coins"}}]}],T=[{name:"balance",arguments:[],returnType:{kind:"simple",type:"string",optional:!1}}],M=[{receiver:"internal",message:{kind:"empty"}},{receiver:"internal",message:{kind:"text",text:"withdraw all"}},{receiver:"internal",message:{kind:"text",text:"withdraw safe"}},{receiver:"internal",message:{kind:"typed",type:"Withdraw"}},{receiver:"internal",message:{kind:"typed",type:"Deploy"}}];class d{constructor(e,t){l(this,"address");l(this,"init");l(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"FactoryDeploy",header:1829761339,fields:[]},{name:"Withdraw",header:195467089,fields:[]}],types:k,getters:T,receivers:M,errors:S});this.address=e,this.init=t}static async init(){return await p()}static async fromInit(){const e=await p(),t=a.contractAddress(0,e);return new d(t,e)}static fromAddress(e){return new d(e)}async send(e,t,r,n){let o=null;if(n===null&&(o=new a.Cell),n==="withdraw all"&&(o=a.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n==="withdraw safe"&&(o=a.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n&&typeof n=="object"&&!(n instanceof a.Slice)&&n.$$type==="Withdraw"&&(o=a.beginCell().store(D(n)).endCell()),n&&typeof n=="object"&&!(n instanceof a.Slice)&&n.$$type==="Deploy"&&(o=a.beginCell().store(E(n)).endCell()),o===null)throw new Error("Invalid message type");await e.internal(t,{...r,body:o})}async getBalance(e){let t=new a.TupleBuilder;return(await e.get("balance",t.build())).stack.readString()}}function L(s,e,t){let r;I(s,y,i=>t(3,r=i));let n,o;return b(y,r={markdown:Q,tactCode:v,deploy:async()=>{const i=await B.Blockchain.create(),c=await i.treasury("deployer");n=c.getSender();const g=await i.treasury("another");g.getSender(),o=i.openContract(await d.fromInit());const w={[c.address.toString()]:"deployer",[g.address.toString()]:"sender 2",[o.address.toString()]:"contract"};return[[o],w,[await o.send(c.getSender(),{value:a.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{"1 TON":async()=>[await o.send(n,{value:a.toNano(1)},null)],"withdraw all":async()=>[await o.send(n,{value:a.toNano(1)},"withdraw all")],"withdraw safe":async()=>[await o.send(n,{value:a.toNano(1)},"withdraw safe")],"Withdraw{1 TON}":async()=>[await o.send(n,{value:a.toNano(1)},{$$type:"Withdraw",amount:a.toNano(1)})]},getters:{balance:async()=>await o.getBalance()},prev:A(import.meta.url).prev,next:A(import.meta.url).next},r),[]}class J extends f{constructor(e){super(),h(this,e,L,null,C,{})}}export{J as default};
