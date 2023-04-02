var h=Object.defineProperty;var f=(s,e,n)=>e in s?h(s,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[e]=n;var d=(s,e,n)=>(f(s,typeof e!="symbol"?e+"":e,n),n);import{S as Q,i as b,s as D,I as p,ac as L}from"../chunks/index.9fe14626.js";import{d as a,g as u,s as w}from"../chunks/store.380869d4.js";import{d as H}from"../chunks/index.b268dd33.js";const J=`# Unbounded Maps - Simplified Token

In general, inifinite data structures that can actually grow to billions of elements are very difficult to implement on blockchain. As the contract persistent state grows in size, read and write operations become more expensive in gas. In the extreme, they may cost more than a transaction gas limit, rendering the contract unusable.

**It is therefore important to design contracts to have an upper bound on state size.** If so, how would we implement a token with a map of balances that can scale to billions of holders?

## Infinitely scalable balance map

The secret of infinite scalability on TON is sharding the data across multiple contracts. We can apply the parent-child design pattern to do just this.

In this example, we hold the balance of every holder in a separate child contract.

To transfer tokens, the owner sends the \`Transfer\` message to the child contract holding their own balance. This will cause the child to deploy its sibling - the child contract holding the recipient's balance - by sending it the \`InternalAddTokens\` message.

This example also handles gas efficiently. The excess gas from every operation is refunded to the original sender.`,M=`import "@stdlib/deploy";

struct Metadata {
    symbol: String;
    totalSupply: Int;
}

message Transfer {
    amount: Int as coins;
    to: Address;
}

// the token parent, mostly used to query general metadata and get children addresses
contract TokenParent with Deployable {
 
    symbol: String;
    totalSupply: Int as coins;

    init() {
        self.symbol = "SHIB";
        self.totalSupply = 500 * pow(10,9);
        self.mint(self.totalSupply, sender()); // mint the entire total supply to deployer
    }

    fun mint(amount: Int, to: Address) {
        let init: StateInit = initOf TokenChild(myAddress(), to);
        send(SendParameters{
            to: contractAddress(init),
            body: InternalAddTokens{amount: amount, origin: myAddress()}.toCell(),
            value: ton("0.03"),             // pay for the deployment and leave some TON in the child for storage
            mode: SendIgnoreErrors,
            code: init.code,                // deploy the child if needed
            data: init.data
        });
    }

    get fun metadata(): Metadata {
        return Metadata{symbol: self.symbol, totalSupply: self.totalSupply};
    }

    get fun childAddress(owner: Address): Address {
        return contractAddress(initOf TokenChild(myAddress(), owner));
    }
}

////////////////////////////////////////////////////////////////////////////
// child contract - the Transfer message is sent by users directly to a child

message InternalAddTokens {
    amount: Int as coins;
    origin: Address;
}

contract TokenChild {

    parent: Address;
    owner: Address;         // every child holds the balance of a different owner
    balance: Int as coins;  // this is the balance of the owner
 
    init(parent: Address, owner: Address) {
        self.parent = parent;
        self.owner = owner;
        self.balance = 0;
    }

    // sent by users to initiate a new transfer
    receive(msg: Transfer) {
        require(sender() == self.owner, "Access denied");
        require(self.balance >= msg.amount, "Insufficient balance");
        self.balance = self.balance - msg.amount;
        let init: StateInit = initOf TokenChild(self.parent, msg.to);
        send(SendParameters{
            to: contractAddress(init),
            body: InternalAddTokens{amount: msg.amount, origin: self.owner}.toCell(),
            value: ton("0.03"),             // pay for the deployment and leave some TON in the child for storage
            mode: SendIgnoreErrors,
            code: init.code,                // deploy the child if needed
            data: init.data
        });
        reply("transferred".asComment());
    }

    // internal message sent by one child to another to update balances
    receive(msg: InternalAddTokens) {
        if (msg.origin == self.parent) { // tokens originate in a mint
            require(sender() == self.parent, "Parent only");
        } else { // tokens originate in a Transfer
            require(sender() == contractAddress(initOf TokenChild(self.parent, msg.origin)), "Sibling only");
        }
        self.balance = self.balance + msg.amount;
    }

     get fun balance(): Int {
        return self.balance;
    }
}
`;function T(s){return e=>{let n=e;n.storeUint(2490013878,32),n.storeUint(s.queryId,64)}}function S(s){let e=s.readString(),n=s.readBigNumber();return{$$type:"Metadata",symbol:e,totalSupply:n}}async function y(){const s=a.Cell.fromBase64("te6ccgECEwEAA8UAART/APSkE/S88sgLAQIBYgIDAgLLBAUCASAJCgPP0AdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GLtRNDUAfhj0gABmdQB0AH6AFlsEo6OMPgo1wsKgwm68uCJ2zziWts8MIOBgcA7aGBaHoCGDaAwJD2gMAIege30PlwQ4DAkPaRAUAIegvkAOR6AGSA5jgA5QAgAayQa6TAgIXdeXBEEGuFhRBBhN0QwIJ/3Vj5cERBhN15cETniwCQa6TAgIXdeXBEEGuFhRBBhN0QwIJ/3Vj5cERBhN15cETni2TAAYJwIddJwh+VMCDXCx/eApJbf+ABghCUapi2uo6i0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yds8f+AwcAgALsj4QwHMfwHKAFnIWM8WyVjMAfoCye1UARp/+EJwWAOAQgFtbds8EQIBIAsMALm93owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwTgN6k73yqLLeOOp6e8CrOGTQThOy6ctWadluZ0HSzbKM3RSQCl7uzEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IntRNDUAfhj0gABmdQB0AH6AFlsEo6OMPgo1wsKgwm68uCJ2zziWNs8gODQFPums+1E0NQB+GPSAAGZ1AHQAfoAWWwSjo4w+CjXCwqDCbry4InbPOKA4BFmwh+EP4KFjwE9s8EAEmi0U0hJQoghh0alKIAPhCUhDbPA8CnvhD+ChY8BNc2zz4KBTIWYIQ+BPIm1ADyx8B+gIBINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxbJggnJw4Bacll/BkVV2zwQEQCMcFnIcAHLAXMBywFwAcsAEszMyfkAyHIBywFwAcsAEsoHy//J0CDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiQHOyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WUAP6AnABymgjbrMlbrOxlzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7ABIAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMw="),e=a.Cell.fromBase64("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");let n=a.beginCell();n.storeRef(e),n.storeUint(0,1);const r=n.endCell();return{code:s,data:r}}const P={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"},20537:{message:"Sibling only"},49469:{message:"Access denied"},54404:{message:"Parent only"},54615:{message:"Insufficient balance"}};class C{constructor(e,n){d(this,"address");d(this,"init");d(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"Metadata",header:null,fields:[]},{name:"Transfer",header:1943715420,fields:[]},{name:"InternalAddTokens",header:4162046107,fields:[]}],errors:P});this.address=e,this.init=n}static async init(){return await y()}static async fromInit(){const e=await y(),n=a.contractAddress(0,e);return new C(n,e)}static fromAddress(e){return new C(e)}async send(e,n,r,t){let A=null;if(t&&typeof t=="object"&&!(t instanceof a.Slice)&&t.$$type==="Deploy"&&(A=a.beginCell().store(T(t)).endCell()),A===null)throw new Error("Invalid message type");await e.internal(n,{...r,body:A})}async getMetadata(e){let n=new a.TupleBuilder,r=(await e.get("metadata",n.build())).stack;return S(r)}async getChildAddress(e,n){let r=new a.TupleBuilder;return r.writeAddress(n),(await e.get("childAddress",r.build())).stack.readAddress()}}function N(s){return e=>{let n=e;n.storeUint(1943715420,32),n.storeCoins(s.amount),n.storeAddress(s.to)}}function X(s){return e=>{let n=e;n.storeUint(4162046107,32),n.storeCoins(s.amount),n.storeAddress(s.origin)}}function k(s){return e=>{let n=e;n.storeAddress(s.parent),n.storeAddress(s.owner)}}async function m(s,e){const n=a.Cell.fromBase64("te6ccgECFwEABakAART/APSkE/S88sgLAQIBYgIDAgLKBAUCAWoSEwF91AdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GKBgDtqIC0PQEMG0BgSHtAYAQ9A9vofLghwGBIe0iAoAQ9BfIAcj0AMkBzHABygBAA1kg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFgEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFsmAE2u1E0NQB+GPSAAGO2vgo1wsKgwm68uCJ+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJAfpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiRIC0QHbPOMNVRLbPDAUFQcIAsZwIddJwh+VMCDXCx/eApJbf+AhghBz2r5cuo66MdMfAYIQc9q+XLry4IH6APpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiRJsEts8f+ABghD4E8ibuuMCMHAJCgCyyPhDAcx/AcoAVSBaINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxZYINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxYB+gLJ7VQE5oIAwT34QiXHBfL0ggDVV12+8vRRIaH4Q1QgVPAiXNs8UTXIWYIQ+BPIm1ADyx8B+gIBINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxbJggnJw4Bacll/BkVV2zyLt0cmFuc2ZlcnJlZI2zwRDwsMAb7THwGCEPgTyJu68uCB+gD6QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkSbBJTBMcFnDCCANSE+EIlxwXy9I6TgVA5+EL4Q1QgdPAi2zwSxwXy9OKgfxEBQshwAcsfbwABb4xtb4wB2zxvIgHJkyFus5YBbyJZzMnoMQ0BBNs8DgC6INdKIddJlyDCACLCALGOSgNvIoB/Is8xqwKhBasCUVW2CCDCAJwgqgIV1xhQM88WQBTeWW8CU0GhwgCZyAFvAlBEoaoCjhIxM8IAmdQw0CDXSiHXSZJwIOLi6F8DARp/+EJwWAOAQgFtbds8DwHOyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WUAP6AnABymgjbrMlbrOxlzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7ABAAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwAjHBZyHABywFzAcsBcAHLABLMzMn5AMhyAcsBcAHLABLKB8v/ydAg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkD2bbYHaiaGoA/DHpAADHbXwUa4WFQYTdeXBE/SAAkGukwICF3XlwRBBrhYUQQYTdEMCCf91Y+XBEQYTdeXBEgP0gAJBrpMCAhd15cEQQa4WFEEGE3RDAgn/dWPlwREGE3XlwRIkBaIDtnnGG7Z5AUFRYAubd6ME4LnYerpZXPY9CdhzrJUKNs0E4TusalpWyPlmRadeW/vixHME4ECrgDcAzscpnLB1XI5LZYcE4DepO98qiy3jjqenvAqzhk0E4TsunLVmnZbmdB0s2yjN0UkAACcACg+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJAfpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiQH6AFUgbBMABGwh"),r=a.Cell.fromBase64("te6cckECGQEABbMAAQHAAQEFoEPbAgEU/wD0pBP0vPLICwMCAWIIBAIBagYFALm3ejBOC52Hq6WVz2PQnYc6yVCjbNBOE7rGpaVsj5ZkWnXlv74sRzBOBAq4A3AM7HKZywdVyOS2WHBOA3qTvfKost446np7wKs4ZNBOE7Lpy1Zp2W5nQdLNsozdFJAD2bbYHaiaGoA/DHpAADHbXwUa4WFQYTdeXBE/SAAkGukwICF3XlwRBBrhYUQQYTdEMCCf91Y+XBEQYTdeXBEgP0gAJBrpMCAhd15cEQQa4WFEEGE3RDAgn/dWPlwREGE3XlwRIkBaIDtnnGG7Z5AYFwcABGwhAgLKCgkA7aiAtD0BDBtAYEh7QGAEPQPb6Hy4IcBgSHtIgKAEPQXyAHI9ADJAcxwAcoAQANZINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxYBINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxbJgAX3UB0NMDAXGwwAGRf5Fw4gH6QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IlUUFMDbwT4YQL4YoLBNrtRNDUAfhj0gABjtr4KNcLCoMJuvLgifpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiQH6QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkSAtEB2zzjDVUS2zwwGBcNDACyyPhDAcx/AcoAVSBaINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxZYINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxYB+gLJ7VQCxnAh10nCH5UwINcLH94Cklt/4CGCEHPavly6jrox0x8BghBz2r5cuvLggfoA+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJEmwS2zx/4AGCEPgTyJu64wIwcA8OAb7THwGCEPgTyJu68uCB+gD6QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkSbBJTBMcFnDCCANSE+EIlxwXy9I6TgVA5+EL4Q1QgdPAi2zwSxwXy9OKgfxYE5oIAwT34QiXHBfL0ggDVV12+8vRRIaH4Q1QgVPAiXNs8UTXIWYIQ+BPIm1ADyx8B+gIBINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxbJggnJw4Bacll/BkVV2zyLt0cmFuc2ZlcnJlZI2zwWFBIQAQTbPBEBGn/4QnBYA4BCAW1t2zwUAULIcAHLH28AAW+MbW+MAds8byIByZMhbrOWAW8iWczJ6DETALog10oh10mXIMIAIsIAsY5KA28igH8izzGrAqEFqwJRVbYIIMIAnCCqAhXXGFAzzxZAFN5ZbwJTQaHCAJnIAW8CUEShqgKOEjEzwgCZ1DDQINdKIddJknAg4uLoXwMBzshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFlAD+gJwAcpoI26zJW6zsZczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAVAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAIxwWchwAcsBcwHLAXABywASzMzJ+QDIcgHLAXABywASygfL/8nQINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJAKD6QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJAfoAVSBsEwACcOhsj4s=");let t=a.beginCell();t.storeRef(r),t.storeUint(0,1),k({$$type:"TokenChild_init_args",parent:s,owner:e})(t);const A=t.endCell();return{code:n,data:A}}const v={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"},20537:{message:"Sibling only"},49469:{message:"Access denied"},54404:{message:"Parent only"},54615:{message:"Insufficient balance"}};class g{constructor(e,n){d(this,"address");d(this,"init");d(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"Metadata",header:null,fields:[]},{name:"Transfer",header:1943715420,fields:[]},{name:"InternalAddTokens",header:4162046107,fields:[]}],errors:v});this.address=e,this.init=n}static async init(e,n){return await m(e,n)}static async fromInit(e,n){const r=await m(e,n),t=a.contractAddress(0,r);return new g(t,r)}static fromAddress(e){return new g(e)}async send(e,n,r,t){let A=null;if(t&&typeof t=="object"&&!(t instanceof a.Slice)&&t.$$type==="Transfer"&&(A=a.beginCell().store(N(t)).endCell()),t&&typeof t=="object"&&!(t instanceof a.Slice)&&t.$$type==="InternalAddTokens"&&(A=a.beginCell().store(X(t)).endCell()),A===null)throw new Error("Invalid message type");await e.internal(n,{...r,body:A})}async getBalance(e){let n=new a.TupleBuilder;return(await e.get("balance",n.build())).stack.readBigNumber()}}function Y(s,e,n){let r;p(s,w,o=>n(6,r=o));let t,A,l,i,I,B;return L(w,r={markdown:J,tactCode:M,deploy:async()=>{t=await H.Blockchain.create();const o=await t.treasury("deployer");A=o.getSender();const c=await t.treasury("another");l=c.getSender(),i=t.openContract(await C.fromInit()),I=t.openContract(await g.fromInit(i.address,A.address)),B=t.openContract(await g.fromInit(i.address,l.address));const E={[o.address.toString()]:"deployer",[c.address.toString()]:"user2",[i.address.toString()]:"TokenParent",[I.address.toString()]:"TokenChild(deployer)",[B.address.toString()]:"TokenChild(user2)"};return[[i,I,B],E,[await i.send(o.getSender(),{value:a.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{"Transfer{100,user2} (from deployer)":async()=>{const o=await i.getChildAddress(A.address);return[await t.openContract(await g.fromAddress(o)).send(A,{value:a.toNano(1)},{$$type:"Transfer",amount:a.toNano(100),to:l.address})]},"Transfer{100,deployer} (from user2)":async()=>{const o=await i.getChildAddress(l.address);return[await t.openContract(await g.fromAddress(o)).send(l,{value:a.toNano(1)},{$$type:"Transfer",amount:a.toNano(100),to:A.address})]}},getters:{metadata:async()=>await i.getMetadata(),"balance(childAddress(deployer))":async()=>{const o=await i.getChildAddress(A.address);return await t.openContract(await g.fromAddress(o)).getBalance()},"balance(childAddress(user2))":async()=>{const o=await i.getChildAddress(l.address);return await t.openContract(await g.fromAddress(o)).getBalance()}},prev:u(import.meta.url).prev,next:u(import.meta.url).next},r),[]}class K extends Q{constructor(e){super(),b(this,e,Y,null,D,{})}}export{K as default};
