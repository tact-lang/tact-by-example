var m=Object.defineProperty;var p=(s,e,t)=>e in s?m(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var A=(s,e,t)=>(p(s,typeof e!="symbol"?e+"":e,t),t);import{S as h,i as y,s as C,I,ac as f}from"../chunks/index.9fe14626.js";import{d as o,g as d,s as g}from"../chunks/store.2b42c038.js";import{d as B}from"../chunks/index.9fe59178.js";const b=`# Decimal Point

All numbers in Tact are integers. Floating point types are not used in smart contracts because they're [unpredictable](https://learn.microsoft.com/en-us/cpp/build/why-floating-point-numbers-may-lose-precision).

Arithmetics with dollars, for example, requires 2 decimal places. How can we represent the number \`1.25\` if we can only work with integers? The answer is to work with *cents*. So \`1.25\` becomes \`125\`. We just remember that the two lowest digits are coming after the decimal point.

In the same way, working with TON coins has 9 decimal places instead of 2. So the amount 1.25 TON is actually the number \`1250000000\` - we call these *nano-tons* instead of cents.

## Calculating interest

This example calculates the earned interest over a deposit of 500 TON coins. The yearly interest rate in the example is 3.25%.

Since we can't hold the number \`3.25\` we will use thousandth of a percent as unit ([percent-mille](https://en.wikipedia.org/wiki/Per_cent_mille)). So 3.25% becomes \`3250\` (3.25 * 1000).

On withdraw, to calculate earned interest, we multiply the amount by the fraction of a year that passed (duration in seconds divided by total seconds in a year) and then by the interest rate divided by 100,000 (100% in percent-mille, meaning 100 * 1000).

Notice that total is returned in nano-tons.`,H=`import "@stdlib/deploy";

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
}`;function Q(s){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(s.queryId,64)}}function D(s){return e=>{let t=e;t.storeUint(569292295,32),t.storeCoins(s.amount)}}function M(s){return e=>{let t=e;t.storeUint(195467089,32),t.storeCoins(s.amount)}}async function u(){const s=o.Cell.fromBase64("te6ccgECEwEAA1EAART/APSkE/S88sgLAQIBYgIDAqrQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVE9s8MMj4QwHMfwHKAFUwUDTKH8sfAfoCAfoCye1UDgQCAVgKCwKocCHXScIflTAg1wsf3gKSW3/gIYIQIe62B7qOITHTHwGCECHutge68uCB+gABMTOCAIk7AsAAEvL0+CNZf+AhghALppdRuuMCAYIQlGqYtrrjAjBwBQYBdjHTHwGCEAuml1G68uCB+gABMYIApjhTE77y9FEiofgjJKETqCSoggnhM4CpBIIBhqCpBCDbPP4UMKB/BwFa0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yX/4QnBYA4BCAW1t2zx/CADeyCHBAJiALQHLBwGjAd4hgjgyfLJzQRnTt6mqHbmOIHAgcY4UBHqpDKYwJagSoASqBwKkIcAARTDmMDOqAs8BjitvAHCOESN6qQgSb4wBpAN6qQQgwAAU5jMipQOcUwJvgaYwWMsHAqVZ5DAx4snQAcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AAkAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwCASAMDQIBSBESAhG1CLtnm2eNiDAODwC5t3owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwTgN6k73yqLLeOOp6e8CrOGTQThOy6ctWadluZ0HSzbKM3RSQAUztRNDUAfhj0gABnNIf0x/6APoAVTBsFOAw+CjXCwqDCbry4InbPBAAAiAAEHBTAIEMslUgABGwr7tRNDSAAGAAdbJu40NWlwZnM6Ly9RbVc2alFNN0dDWW1HR24xUVRQM3ZwOTg3bnJGWENLdHY3Vm1Cc3hRSm1YRWhngg"),e=o.Cell.fromBase64("te6cckECFQEAA1sAAQHAAQEFodbFAgEU/wD0pBP0vPLICwMCAWIMBAIBWAgFAgFIBwYAdbJu40NWlwZnM6Ly9RbVc2alFNN0dDWW1HR24xUVRQM3ZwOTg3bnJGWENLdHY3Vm1Cc3hRSm1YRWhnggABGwr7tRNDSAAGACASAKCQC5t3owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwTgN6k73yqLLeOOp6e8CrOGTQThOy6ctWadluZ0HSzbKM3RSQAhG1CLtnm2eNiDATCwACIAKq0AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8VRPbPDDI+EMBzH8BygBVMFA0yh/LHwH6AgH6AsntVBMNAqhwIddJwh+VMCDXCx/eApJbf+AhghAh7rYHuo4hMdMfAYIQIe62B7ry4IH6AAExM4IAiTsCwAAS8vT4I1l/4CGCEAuml1G64wIBghCUapi2uuMCMHARDgFa0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yX/4QnBYA4BCAW1t2zx/DwHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAQAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAXYx0x8BghALppdRuvLggfoAATGCAKY4UxO+8vRRIqH4IyShE6gkqIIJ4TOAqQSCAYagqQQg2zz+FDCgfxIA3sghwQCYgC0BywcBowHeIYI4Mnyyc0EZ07epqh25jiBwIHGOFAR6qQymMCWoEqAEqgcCpCHAAEUw5jAzqgLPAY4rbwBwjhEjeqkIEm+MAaQDeqkEIMAAFOYzIqUDnFMCb4GmMFjLBwKlWeQwMeLJ0AFM7UTQ1AH4Y9IAAZzSH9Mf+gD6AFUwbBTgMPgo1wsKgwm68uCJ2zwUABBwUwCBDLJVILAISnU=");let t=o.beginCell();t.storeRef(e),t.storeUint(0,1);const r=t.endCell();return{code:s,data:r}}const T={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"},35131:{message:"No multiple deposits"},42552:{message:"Cannot withdraw more than deposit"}};class l{constructor(e,t){A(this,"address");A(this,"init");A(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"Deposit",header:569292295,fields:[]},{name:"Withdraw",header:195467089,fields:[]}],errors:T});this.address=e,this.init=t}static async init(){return await u()}static async fromInit(){const e=await u(),t=o.contractAddress(0,e);return new l(t,e)}static fromAddress(e){return new l(e)}async send(e,t,r,n){let a=null;if(n&&typeof n=="object"&&!(n instanceof o.Slice)&&n.$$type==="Deposit"&&(a=o.beginCell().store(D(n)).endCell()),n&&typeof n=="object"&&!(n instanceof o.Slice)&&n.$$type==="Withdraw"&&(a=o.beginCell().store(M(n)).endCell()),n&&typeof n=="object"&&!(n instanceof o.Slice)&&n.$$type==="Deploy"&&(a=o.beginCell().store(Q(n)).endCell()),a===null)throw new Error("Invalid message type");await e.internal(t,{...r,body:a})}async getTotal(e){let t=new o.TupleBuilder;return(await e.get("total",t.build())).stack.readBigNumber()}}function E(s,e,t){let r;I(s,g,i=>t(2,r=i));let n,a;return f(g,r={markdown:b,tactCode:H,deploy:async()=>{const i=await B.Blockchain.create(),c=await i.treasury("deployer");n=c.getSender(),a=i.openContract(await l.fromInit());const w={[c.address.toString()]:"deployer",[a.address.toString()]:"contract"};return[[a],w,[await a.send(c.getSender(),{value:o.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{"Deposit{500}":async()=>[await a.send(n,{value:o.toNano(1)},{$$type:"Deposit",amount:o.toNano(500)})],"Withdraw{500}":async()=>[await a.send(n,{value:o.toNano(1)},{$$type:"Withdraw",amount:o.toNano(500)})]},getters:{total:async()=>await a.getTotal()},prev:d(import.meta.url).prev,next:d(import.meta.url).next},r),[]}class O extends h{constructor(e){super(),y(this,e,E,null,C,{})}}export{O as default};
