var m=Object.defineProperty;var B=(r,e,n)=>e in r?m(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n;var A=(r,e,n)=>(B(r,typeof e!="symbol"?e+"":e,n),n);import{S as y,i as h,s as p,I as C,ac as v}from"../chunks/index.9fe14626.js";import{d as a,g,s as d}from"../chunks/store.d3ab02ad.js";import{d as f}from"../chunks/index.78404594.js";const I=`# Receiving TON Coins

Every contract has a TON coin balance. This balance is used to pay ongoing rent for storage and should not run out otherwise the contract may be deleted. You can store extra coins in the balance for any purpose.

Every incoming message normally carries some TON coin value sent by the sender. This value is used to pay gas for handling this message. Unused excess will stay in the contract balance. If the value doesn't cover the gas cost, the transaction will revert.

You can query the contract balance with \`myBalance()\` - note that the value is in nano-tons (like cents, just with 9 decimals). The balance already contains the incoming message value.

## Refunding senders

If the transaction reverts, unused excess value will be sent back to sender on the *bounced* message.

You can also refund the excess if the transaction succeeds by sending it back using \`reply()\` in a response message. This is the best way to guarantee senders are only paying for the exact gas that their message consumed.`,Q=`import "@stdlib/deploy";

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
        reply("increment refund".asComment());
    }
 
    get fun balance(): Int {
        return myBalance(); // in nano-tons (like cents, just with 9 decimals)
    }
}`;function b(r){return e=>{let n=e;n.storeUint(2490013878,32),n.storeUint(r.queryId,64)}}async function u(){const r=a.Cell.fromBase64("te6ccgECFQEAA6cAART/APSkE/S88sgLAQIBYgIDApTQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxZ2zwwyPhDAcx/AcoAAQHKP8ntVBAEAgFYDA0Cxu2i7ftwIddJwh+VMCDXCx/eApJbf+AhwAAh10nBIbCOL1uNBZlbXB0eSBtZXNzYWdlIHJlY2VpdmVkg/hQwggCg0PgnbxCCELLQXgC78vR/4CGCEJRqmLa64wIBwACRMOMNcAUGAVwx0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yX/4QnBYA4BCAW1t2zx/CgK++QEggvDE+NcjEu3971t77HgzvbsWLRURvXipEq7Q8mN69lVyrrqOkTD4QW8kE18D2zz+FDCkf9sx4ILw+uPRj2OjBEWqI632oDhGguq9jELZ7AXJ1xUualZ1Lxi64wIIBwM8+EFvJBNfA9s8/hQwpIh/+EJwWAOAQgFtbds8f9sxCAkKAN7IIcEAmIAtAcsHAaMB3iGCODJ8snNBGdO3qaoduY4gcCBxjhQEeqkMpjAlqBKgBKoHAqQhwABFMOYwM6oCzwGOK28AcI4RI3qpCBJvjAGkA3qpBCDAABTmMyKlA5xTAm+BpjBYywcCpVnkMDHiydAAKAAAAABpbmNyZW1lbnQgcmVmdW5kAcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AAsAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwCASAODwIBSBMUAg+22Btnm2eGMBARALm3ejBOC52Hq6WVz2PQnYc6yVCjbNBOE7rGpaVsj5ZkWnXlv74sRzBOBAq4A3AM7HKZywdVyOS2WHBOA3qTvfKost446np7wKs4ZNBOE7Lpy1Zp2W5nQdLNsozdFJABPO1E0NQB+GPSAAGU0j8BMeAw+CjXCwqDCbry4InbPBIACPgnbxAAAnAAEbCvu1E0NIAAYAB1sm7jQ1aXBmczovL1FtVWsyY0FaRjdQN1IyN0dzRlB0b0tFWHNiaHZKNVNLY21jR1dzQXlDaDZoeDaCA="),e=a.Cell.fromBase64("te6cckECFwEAA7EAAQHAAQEFoARXAgEU/wD0pBP0vPLICwMCAWIMBAIBWAgFAgFIBwYAdbJu40NWlwZnM6Ly9RbVVrMmNBWkY3UDdSMjdHc0ZQdG9LRVhzYmh2SjVTS2NtY0dXc0F5Q2g2aHg2ggABGwr7tRNDSAAGACASAKCQC5t3owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwTgN6k73yqLLeOOp6e8CrOGTQThOy6ctWadluZ0HSzbKM3RSQAg+22Btnm2eGMBULAAj4J28QApTQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxZ2zwwyPhDAcx/AcoAAQHKP8ntVBUNAsbtou37cCHXScIflTAg1wsf3gKSW3/gIcAAIddJwSGwji9bjQWZW1wdHkgbWVzc2FnZSByZWNlaXZlZIP4UMIIAoND4J28QghCy0F4Au/L0f+AhghCUapi2uuMCAcAAkTDjDXASDgK++QEggvDE+NcjEu3971t77HgzvbsWLRURvXipEq7Q8mN69lVyrrqOkTD4QW8kE18D2zz+FDCkf9sx4ILw+uPRj2OjBEWqI632oDhGguq9jELZ7AXJ1xUualZ1Lxi64wIRDwM8+EFvJBNfA9s8/hQwpIh/+EJwWAOAQgFtbds8f9sxERATACgAAAAAaW5jcmVtZW50IHJlZnVuZADeyCHBAJiALQHLBwGjAd4hgjgyfLJzQRnTt6mqHbmOIHAgcY4UBHqpDKYwJagSoASqBwKkIcAARTDmMDOqAs8BjitvAHCOESN6qQgSb4wBpAN6qQQgwAAU5jMipQOcUwJvgaYwWMsHAqVZ5DAx4snQAVwx0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yX/4QnBYA4BCAW1t2zx/EwHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAUAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMATztRNDUAfhj0gABlNI/ATHgMPgo1wsKgwm68uCJ2zwWAAJwfV0JUw==");let n=a.beginCell();n.storeRef(e),n.storeUint(0,1);const o=n.endCell();return{code:r,data:o}}const N={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"},41168:{message:"Balance getting too high"}};class c{constructor(e,n){A(this,"address");A(this,"init");A(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]}],errors:N});this.address=e,this.init=n}static async init(){return await u()}static async fromInit(){const e=await u(),n=a.contractAddress(0,e);return new c(n,e)}static fromAddress(e){return new c(e)}async send(e,n,o,t){let s=null;if(t===null&&(s=new a.Cell),t==="increment"&&(s=a.beginCell().storeUint(0,32).storeStringTail(t).endCell()),t==="refunding increment"&&(s=a.beginCell().storeUint(0,32).storeStringTail(t).endCell()),t&&typeof t=="object"&&!(t instanceof a.Slice)&&t.$$type==="Deploy"&&(s=a.beginCell().store(b(t)).endCell()),s===null)throw new Error("Invalid message type");await e.internal(n,{...o,body:s})}async getBalance(e){let n=new a.TupleBuilder;return(await e.get("balance",n.build())).stack.readBigNumber()}}function D(r,e,n){let o;C(r,d,i=>n(2,o=i));let t,s;return v(d,o={markdown:I,tactCode:Q,deploy:async()=>{const i=await f.Blockchain.create(),l=await i.treasury("deployer");t=l.getSender(),s=i.openContract(await c.fromInit());const w={[l.address.toString()]:"deployer",[s.address.toString()]:"contract"};return[[s],w,[await s.send(l.getSender(),{value:a.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{"1 TON":async()=>[await s.send(t,{value:a.toNano(1)},null)],increment:async()=>[await s.send(t,{value:a.toNano(1)},"increment")],"refunding increment":async()=>[await s.send(t,{value:a.toNano(1)},"refunding increment")]},getters:{balance:async()=>await s.getBalance()},prev:g(import.meta.url).prev,next:g(import.meta.url).next},o),[]}class L extends y{constructor(e){super(),h(this,e,D,null,p,{})}}export{L as default};
