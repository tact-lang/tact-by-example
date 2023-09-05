var y=Object.defineProperty;var g=(s,e,t)=>e in s?y(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var l=(s,e,t)=>(g(s,typeof e!="symbol"?e+"":e,t),t);import{S as w,i as f,s as h,I,ac as C}from"../chunks/index.9fe14626.js";import{d as a,g as p,s as A}from"../chunks/store.d3ab02ad.js";import{d as B}from"../chunks/index.78404594.js";const b=`# Decimal Point

All numbers in Tact are integers. Floating point types are not used in smart contracts because they're [unpredictable](https://learn.microsoft.com/en-us/cpp/build/why-floating-point-numbers-may-lose-precision).

Arithmetics with dollars, for example, requires 2 decimal places. How can we represent the number \`1.25\` if we can only work with integers? The answer is to work with *cents*. So \`1.25\` becomes \`125\`. We just remember that the two lowest digits are coming after the decimal point.

In the same way, working with TON coins has 9 decimal places instead of 2. So the amount 1.25 TON is actually the number \`1250000000\` - we call these *nano-tons* instead of cents.

## Calculating interest

This example calculates the earned interest over a deposit of 500 TON coins. The yearly interest rate in the example is 3.25%.

Since we can't hold the number \`3.25\` we will use thousandth of a percent as unit ([percent-mille](https://en.wikipedia.org/wiki/Per_cent_mille)). So 3.25% becomes \`3250\` (3.25 * 1000).

On withdraw, to calculate earned interest, we multiply the amount by the fraction of a year that passed (duration in seconds divided by total seconds in a year) and then by the interest rate divided by 100,000 (100% in percent-mille, meaning 100 * 1000).

Notice that total is returned in nano-tons.`,E=`import "@stdlib/deploy";

message Deposit {
    amount: Int as coins; // nano-tons
}

message Withdraw {
    amount: Int as coins; // nano-tons
}

const SecondsPerYear: Int = 365 * 24 * 60 * 60;

contract Interest with Deployable {
 
    interestPercent: Int as int32;
    depositTime: Int as uint32 = 0;  // seconds since the epoch
    depositAmount: Int as coins = 0; // nano-tons
    totalEarned: Int as coins = 0;   // nano-tons

    init() {
        self.interestPercent = 3250; // 3.25% yearly interest rate in percent-mille
    }

    receive(msg: Deposit) {
        require(self.depositAmount == 0, "No multiple deposits");
        self.depositTime = now();
        self.depositAmount = msg.amount;
    }

    receive(msg: Withdraw) {
        require(msg.amount >= self.depositAmount, "Cannot withdraw more than deposit");
        self.depositAmount = self.depositAmount - msg.amount;
        let durationSeconds: Int = now() - self.depositTime;
        let earned: Int = msg.amount * durationSeconds * self.interestPercent / SecondsPerYear / 100000;
        dump(earned);
        self.totalEarned = self.totalEarned + earned;
    }

    get fun total(): Int {
        return self.totalEarned; // in nano-tons
    }
}`;function M(s){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(s.queryId,64)}}function k(s){return e=>{let t=e;t.storeUint(569292295,32),t.storeCoins(s.amount)}}function D(s){return e=>{let t=e;t.storeUint(195467089,32),t.storeCoins(s.amount)}}async function m(){const s=a.Cell.fromBase64("te6ccgECEwEAA2oAART/APSkE/S88sgLAQIBYgIDAq7QAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVE9s88uCCyPhDAcx/AcoAVTBQNMofyx8B+gIB+gLJ7VQOBAIBWAoLAvYBkjB/4HAh10nCH5UwINcLH94gghAh7rYHuo4hMNMfAYIQIe62B7ry4IH6AAExM4IAiTsCwAAS8vT4I1l/4CCCEAuml1G64wKCEJRqmLa6jqfTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J+EIBcG3bPH/gMHAFBgF2MNMfAYIQC6aXUbry4IH6AAExggCmOFMTvvL0USKh+CMkoROoJKiCCeEzgKkEggGGoKkEINs8/hQwoH8HATptbSJus5lbIG7y0IBvIgGRMuIQJHADBIBCUCPbPAgA3sghwQCYgC0BywcBowHeIYI4Mnyyc0EZ07epqh25jiBwIHGOFAR6qQymMCWoEqAEqgcCpCHAAEUw5jAzqgLPAY4rbwBwjhEjeqkIEm+MAaQDeqkEIMAAFOYzIqUDnFMCb4GmMFjLBwKlWeQwMeLJ0AHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAJAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAgEgDA0CAUgREgIRtQi7Z5tnjYgwDg8Aubd6ME4LnYerpZXPY9CdhzrJUKNs0E4TusalpWyPlmRadeW/vixHME4ECrgDcAzscpnLB1XI5LZYcE4DepO98qiy3jjqenvAqzhk0E4TsunLVmnZbmdB0s2yjN0UkAFM7UTQ1AH4Y9IAAZzSH9Mf+gD6AFUwbBTgMPgo1wsKgwm68uCJ2zwQAAIgABBwUwCBDLJVIAARsK+7UTQ0gABgAHWybuNDVpcGZzOi8vUW1iUmNhTmszU2ZOUFhLOHl1Q1lFYmloRUtzNE55QVNGd3hiSDFKa3JzZUN3c4IA=="),e=a.Cell.fromBase64("te6cckECFQEAA3QAAQHAAQEFodbFAgEU/wD0pBP0vPLICwMCAWIMBAIBWAgFAgFIBwYAdbJu40NWlwZnM6Ly9RbWJSY2FOazNTZk5QWEs4eXVDWUViaWhFS3M0TnlBU0Z3eGJIMUprcnNlQ3dzggABGwr7tRNDSAAGACASAKCQC5t3owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwTgN6k73yqLLeOOp6e8CrOGTQThOy6ctWadluZ0HSzbKM3RSQAhG1CLtnm2eNiDATCwACIAKu0AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8VRPbPPLggsj4QwHMfwHKAFUwUDTKH8sfAfoCAfoCye1UEw0C9gGSMH/gcCHXScIflTAg1wsf3iCCECHutge6jiEw0x8BghAh7rYHuvLggfoAATEzggCJOwLAABLy9PgjWX/gIIIQC6aXUbrjAoIQlGqYtrqOp9MfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8n4QgFwbds8f+AwcBEOATptbSJus5lbIG7y0IBvIgGRMuIQJHADBIBCUCPbPA8ByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsAEACYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAF2MNMfAYIQC6aXUbry4IH6AAExggCmOFMTvvL0USKh+CMkoROoJKiCCeEzgKkEggGGoKkEINs8/hQwoH8SAN7IIcEAmIAtAcsHAaMB3iGCODJ8snNBGdO3qaoduY4gcCBxjhQEeqkMpjAlqBKgBKoHAqQhwABFMOYwM6oCzwGOK28AcI4RI3qpCBJvjAGkA3qpBCDAABTmMyKlA5xTAm+BpjBYywcCpVnkMDHiydABTO1E0NQB+GPSAAGc0h/TH/oA+gBVMGwU4DD4KNcLCoMJuvLgids8FAAQcFMAgQyyVSBx2iG0");let t=a.beginCell();t.storeRef(e),t.storeUint(0,1);const i=t.endCell();return{code:s,data:i}}const Q={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"},35131:{message:"No multiple deposits"},42552:{message:"Cannot withdraw more than deposit"}},H=[{name:"StateInit",header:null,fields:[{name:"code",type:{kind:"simple",type:"cell",optional:!1}},{name:"data",type:{kind:"simple",type:"cell",optional:!1}}]},{name:"Context",header:null,fields:[{name:"bounced",type:{kind:"simple",type:"bool",optional:!1}},{name:"sender",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"raw",type:{kind:"simple",type:"slice",optional:!1}}]},{name:"SendParameters",header:null,fields:[{name:"bounce",type:{kind:"simple",type:"bool",optional:!1}},{name:"to",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"mode",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"body",type:{kind:"simple",type:"cell",optional:!0}},{name:"code",type:{kind:"simple",type:"cell",optional:!0}},{name:"data",type:{kind:"simple",type:"cell",optional:!0}}]},{name:"Deploy",header:2490013878,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"DeployOk",header:2952335191,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"FactoryDeploy",header:1829761339,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}},{name:"cashback",type:{kind:"simple",type:"address",optional:!1}}]},{name:"Deposit",header:569292295,fields:[{name:"amount",type:{kind:"simple",type:"uint",optional:!1,format:"coins"}}]},{name:"Withdraw",header:195467089,fields:[{name:"amount",type:{kind:"simple",type:"uint",optional:!1,format:"coins"}}]}],T=[{name:"total",arguments:[],returnType:{kind:"simple",type:"int",optional:!1,format:257}}],v=[{receiver:"internal",message:{kind:"typed",type:"Deposit"}},{receiver:"internal",message:{kind:"typed",type:"Withdraw"}},{receiver:"internal",message:{kind:"typed",type:"Deploy"}}];class d{constructor(e,t){l(this,"address");l(this,"init");l(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"FactoryDeploy",header:1829761339,fields:[]},{name:"Deposit",header:569292295,fields:[]},{name:"Withdraw",header:195467089,fields:[]}],types:H,getters:T,receivers:v,errors:Q});this.address=e,this.init=t}static async init(){return await m()}static async fromInit(){const e=await m(),t=a.contractAddress(0,e);return new d(t,e)}static fromAddress(e){return new d(e)}async send(e,t,i,n){let o=null;if(n&&typeof n=="object"&&!(n instanceof a.Slice)&&n.$$type==="Deposit"&&(o=a.beginCell().store(k(n)).endCell()),n&&typeof n=="object"&&!(n instanceof a.Slice)&&n.$$type==="Withdraw"&&(o=a.beginCell().store(D(n)).endCell()),n&&typeof n=="object"&&!(n instanceof a.Slice)&&n.$$type==="Deploy"&&(o=a.beginCell().store(M(n)).endCell()),o===null)throw new Error("Invalid message type");await e.internal(t,{...i,body:o})}async getTotal(e){let t=new a.TupleBuilder;return(await e.get("total",t.build())).stack.readBigNumber()}}function N(s,e,t){let i;I(s,A,r=>t(2,i=r));let n,o;return C(A,i={markdown:b,tactCode:E,deploy:async()=>{const r=await B.Blockchain.create(),c=await r.treasury("deployer");n=c.getSender(),o=r.openContract(await d.fromInit());const u={[c.address.toString()]:"deployer",[o.address.toString()]:"contract"};return[[o],u,[await o.send(c.getSender(),{value:a.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{"Deposit{500}":async()=>[await o.send(n,{value:a.toNano(1)},{$$type:"Deposit",amount:a.toNano(500)})],"Withdraw{500}":async()=>[await o.send(n,{value:a.toNano(1)},{$$type:"Withdraw",amount:a.toNano(500)})]},getters:{total:async()=>await o.getTotal()},prev:p(import.meta.url).prev,next:p(import.meta.url).next},i),[]}class F extends w{constructor(e){super(),f(this,e,N,null,h,{})}}export{F as default};
