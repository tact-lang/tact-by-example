var w=Object.defineProperty;var p=(s,e,t)=>e in s?w(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var A=(s,e,t)=>(p(s,typeof e!="symbol"?e+"":e,t),t);import{S as y,i as B,s as I,I as f,ac as h}from"../chunks/index.9fe14626.js";import{d as o,g as d,s as g}from"../chunks/store.380869d4.js";import{d as C}from"../chunks/index.b268dd33.js";const E=`# Decimal Point

All numbers in Tact are integers. Floating point types are not used in smart contracts because they're [unpredictable](https://learn.microsoft.com/en-us/cpp/build/why-floating-point-numbers-may-lose-precision).

Arithmetics with dollars, for example, requires 2 decimal places. How can we represent the number \`1.25\` if we can only work with integers? The answer is to work with *cents*. So \`1.25\` becomes \`125\`. We just remember that the two lowest digits are coming after the decimal point.

In the same way, working with TON coins has 9 decimal places instead of 2. So the amount 1.25 TON is actually the number \`1250000000\` - we call these *nano-tons* instead of cents.

## Calculating interest

This example calculates the earned interest over a deposit of 500 TON coins. The yearly interest rate in the example is 3.25%.

Since we can't hold the number \`3.25\` we will use thousandth of a percent as unit ([percent-mille](https://en.wikipedia.org/wiki/Per_cent_mille)). So 3.25% becomes \`3250\` (3.25 * 1000).

On withdraw, to calculate earned interest, we multiply the amount by the fraction of a year that passed (duration in seconds divided by total seconds in a year) and then by the interest rate divided by 100,000 (100% in percent-mille, meaning 100 * 1000).

Notice that total is returned in nano-tons.`,b=`import "@stdlib/deploy";

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
}`;function D(s){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(s.queryId,64)}}function H(s){return e=>{let t=e;t.storeUint(569292295,32),t.storeCoins(s.amount)}}function M(s){return e=>{let t=e;t.storeUint(195467089,32),t.storeCoins(s.amount)}}async function u(){const s=o.Cell.fromBase64("te6ccgECDwEAAzQAART/APSkE/S88sgLAQIBYgIDA9jQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GLtRNDUAfhj0gABnNIf0x/6APoAVTBsFI6OMPgo1wsKgwm68uCJ2zziVRPbPDANBAUCAWoLDALucCHXScIflTAg1wsf3gKSW3/gIYIQIe62B7qOITHTHwGCECHutge68uCB+gABMTOCAIk7AsAAEvL0+CNZf+AhghALppdRuuMCAYIQlGqYtrqOotMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8nbPH/gMHAGBwA0yPhDAcx/AcoAVTBQNMofyx8B+gIB+gLJ7VQBdjHTHwGCEAuml1G68uCB+gABMYIApjhTE77y9FEiofgjJKETqCSoggnhM4CpBIIBhqCpBCDbPP4UMKB/CAEaf/hCcFgDgEIBbW3bPAkA3sghwQCYgC0BywcBowHeIYI4Mnyyc0EZ07epqh25jiBwIHGOFAR6qQymMCWoEqAEqgcCpCHAAEUw5jAzqgLPAY4rbwBwjhEjeqkIEm+MAaQDeqkEIMAAFOYzIqUDnFMCb4GmMFjLBwKlWeQwMeLJ0AHOyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WUAP6AnABymgjbrMlbrOxlzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AAoAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwCWbUIvaiaGoA/DHpAADOaQ/pj/0AfQAqmDYKR0cYfBRrhYVBhN15cETtnnFtnkA0OALm3ejBOC52Hq6WVz2PQnYc6yVCjbNBOE7rGpaVsj5ZkWnXlv74sRzBOBAq4A3AM7HKZywdVyOS2WHBOA3qTvfKost446np7wKs4ZNBOE7Lpy1Zp2W5nQdLNsozdFJAAEHBTAIEMslUgAARsMQ=="),e=o.Cell.fromBase64("te6cckECEQEAAz4AAQHAAQEFodbFAgEU/wD0pBP0vPLICwMCAWIIBAIBagYFALm3ejBOC52Hq6WVz2PQnYc6yVCjbNBOE7rGpaVsj5ZkWnXlv74sRzBOBAq4A3AM7HKZywdVyOS2WHBOA3qTvfKost446np7wKs4ZNBOE7Lpy1Zp2W5nQdLNsozdFJACWbUIvaiaGoA/DHpAADOaQ/pj/0AfQAqmDYKR0cYfBRrhYVBhN15cETtnnFtnkBAHAARsMQPY0AHQ0wMBcbDAAZF/kXDiAfpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiVRQUwNvBPhhAvhi7UTQ1AH4Y9IAAZzSH9Mf+gD6AFUwbBSOjjD4KNcLCoMJuvLgids84lUT2zwwEAoJADTI+EMBzH8BygBVMFA0yh/LHwH6AgH6AsntVALucCHXScIflTAg1wsf3gKSW3/gIYIQIe62B7qOITHTHwGCECHutge68uCB+gABMTOCAIk7AsAAEvL0+CNZf+AhghALppdRuuMCAYIQlGqYtrqOotMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8nbPH/gMHAOCwEaf/hCcFgDgEIBbW3bPAwBzshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFlAD+gJwAcpoI26zJW6zsZczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wANAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAXYx0x8BghALppdRuvLggfoAATGCAKY4UxO+8vRRIqH4IyShE6gkqIIJ4TOAqQSCAYagqQQg2zz+FDCgfw8A3sghwQCYgC0BywcBowHeIYI4Mnyyc0EZ07epqh25jiBwIHGOFAR6qQymMCWoEqAEqgcCpCHAAEUw5jAzqgLPAY4rbwBwjhEjeqkIEm+MAaQDeqkEIMAAFOYzIqUDnFMCb4GmMFjLBwKlWeQwMeLJ0AAQcFMAgQyyVSB7PRd3");let t=o.beginCell();t.storeRef(e),t.storeUint(0,1);const r=t.endCell();return{code:s,data:r}}const Q={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"},35131:{message:"No multiple deposits"},42552:{message:"Cannot withdraw more than deposit"}};class l{constructor(e,t){A(this,"address");A(this,"init");A(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"Deposit",header:569292295,fields:[]},{name:"Withdraw",header:195467089,fields:[]}],errors:Q});this.address=e,this.init=t}static async init(){return await u()}static async fromInit(){const e=await u(),t=o.contractAddress(0,e);return new l(t,e)}static fromAddress(e){return new l(e)}async send(e,t,r,n){let a=null;if(n&&typeof n=="object"&&!(n instanceof o.Slice)&&n.$$type==="Deposit"&&(a=o.beginCell().store(H(n)).endCell()),n&&typeof n=="object"&&!(n instanceof o.Slice)&&n.$$type==="Withdraw"&&(a=o.beginCell().store(M(n)).endCell()),n&&typeof n=="object"&&!(n instanceof o.Slice)&&n.$$type==="Deploy"&&(a=o.beginCell().store(D(n)).endCell()),a===null)throw new Error("Invalid message type");await e.internal(t,{...r,body:a})}async getTotal(e){let t=new o.TupleBuilder;return(await e.get("total",t.build())).stack.readBigNumber()}}function T(s,e,t){let r;f(s,g,i=>t(2,r=i));let n,a;return h(g,r={markdown:E,tactCode:b,deploy:async()=>{const i=await C.Blockchain.create(),c=await i.treasury("deployer");n=c.getSender(),a=i.openContract(await l.fromInit());const m={[c.address.toString()]:"deployer",[a.address.toString()]:"contract"};return[[a],m,[await a.send(c.getSender(),{value:o.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{"Deposit{500}":async()=>[await a.send(n,{value:o.toNano(1)},{$$type:"Deposit",amount:o.toNano(500)})],"Withdraw{500}":async()=>[await a.send(n,{value:o.toNano(1)},{$$type:"Withdraw",amount:o.toNano(500)})]},getters:{total:async()=>await a.getTotal()},prev:d(import.meta.url).prev,next:d(import.meta.url).next},r),[]}class S extends y{constructor(e){super(),B(this,e,T,null,I,{})}}export{S as default};
