var f=Object.defineProperty;var Q=(s,e,n)=>e in s?f(s,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[e]=n;var d=(s,e,n)=>(Q(s,typeof e!="symbol"?e+"":e,n),n);import{S as E,i as b,s as L,I as p,ac as D}from"../chunks/index.9fe14626.js";import{d as r,g as B,s as y}from"../chunks/store.d3ab02ad.js";import{d as v}from"../chunks/index.78404594.js";const J=`# Unbounded Maps - Simplified Token

In general, inifinite data structures that can actually grow to billions of elements are very difficult to implement on blockchain. As the contract persistent state grows in size, read and write operations become more expensive in gas. In the extreme, they may cost more than a transaction gas limit, rendering the contract unusable.

**It is therefore important to design contracts to have an upper bound on state size.** If so, how would we implement a token with a map of balances that can scale to billions of holders?

## Infinitely scalable balance map

The secret of infinite scalability on TON is sharding the data across multiple contracts. We can apply the parent-child design pattern to do just this.

In this example, we hold the balance of every holder in a separate child contract.

To transfer tokens, the owner sends the \`Transfer\` message to the child contract holding their own balance. This will cause the child to deploy its sibling - the child contract holding the recipient's balance - by sending it the \`InternalAddTokens\` message.

This example also handles gas efficiently. The excess gas from every operation is refunded to the original sender.`,S=`import "@stdlib/deploy";

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
`;function M(s){return e=>{let n=e;n.storeUint(2490013878,32),n.storeUint(s.queryId,64)}}function H(s){let e=s.readString(),n=s.readBigNumber();return{$$type:"Metadata",symbol:e,totalSupply:n}}async function w(){const s=r.Cell.fromBase64("te6ccgECFgEAA+UAART/APSkE/S88sgLAQIBYgIDAqLQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxa2zwwyPhDAcx/AcoAWchYzxbJWMwB+gLJ7VQKBAIBIAUGAZhwIddJwh+VMCDXCx/eApJbf+ABghCUapi2uo6t0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yX/4QnBYA4BCAW1t2zx/4DBwEAIBIAcIAgEgEhMCS7uzEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCI2zxY2zxsIYCgkCEbprPbPNs8bCKAoLAZD4Q/goWNs8cFnIcAHLAXMBywFwAcsAEszMyfkAyHIBywFwAcsAEsoHy//J0CDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgOAUbtRNDUAfhj0gABmdQB0AH6AFlsEuAw+CjXCwqDCbry4InbPAwAAlwBJotFNISUKIIYdGpSiAD4QlIQ2zwNAvb4Q/goWNs8XHBZyHABywFzAcsBcAHLABLMzMn5AMhyAcsBcAHLABLKB8v/ydAg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCI+CgUyFmCEPgTyJtQA8sfAfoCASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFskODwDWAtD0BDBtAYEh7QGAEPQPb6Hy4IcBgSHtIgKAEPQXyAHI9ADJAcxwAcoAQANZINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFskBHIIJycOAWnJZfwZFVds8EAHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wARAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMALm7vRgnBc7D1dLK57HoTsOdZKhRtmgnCd1jUtK2R8syLTry398WI5gnAgVcAbgGdjlM5YOq5HJbLDgnAb1J3vlUWW8cdT094FWcMmgnCdl05as07LczoOlm2UZuikgCAUgUFQARsK+7UTQ0gABgAHWybuNDVpcGZzOi8vUW1OVFhzb212RzF2d0RvWFpBdVJuRXUxd2hjRHNqOTJZTG5OaWtzRWo0cGtiOYIA=="),e=r.Cell.fromBase64("te6cckECLgEAB8wAAQHAAQIBIBUCAQW/fVQDART/APSkE/S88sgLBAIBYg8FAgEgCgYCASAJBwIBSBsIAHWybuNDVpcGZzOi8vUW1OVFhzb212RzF2d0RvWFpBdVJuRXUxd2hjRHNqOTJZTG5OaWtzRWo0cGtiOYIAC5u70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIAgEgDQsCEbprPbPNs8bCKBEMAAJcAku7sxINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiNs8WNs8bCGBEOAZD4Q/goWNs8cFnIcAHLAXMBywFwAcsAEszMyfkAyHIBywFwAcsAEsoHy//J0CDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgqAqLQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxa2zwwyPhDAcx/AcoAWchYzxbJWMwB+gLJ7VQREAGYcCHXScIflTAg1wsf3gKSW3/gAYIQlGqYtrqOrdMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8l/+EJwWAOAQgFtbds8f+AwcCgBRu1E0NQB+GPSAAGZ1AHQAfoAWWwS4DD4KNcLCoMJuvLgids8EgEmi0U0hJQoghh0alKIAPhCUhDbPBMC9vhD+ChY2zxccFnIcAHLAXMBywFwAcsAEszMyfkAyHIBywFwAcsAEsoHy//J0CDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4Ij4KBTIWYIQ+BPIm1ADyx8B+gIBINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WySoUARyCCcnDgFpyWX8GRVXbPCgBBb0PbBYBFP8A9KQT9LzyyAsXAgFiIBgCAVgcGQIBSBsaAHWybuNDVpcGZzOi8vUW1aQjFoRVg3SzFhQXZCOXBoQVJ2QUVRNnV1NXJTckhGUUNXb1RZWnN6azlpd4IAARsK+7UTQ0gABgAgEgHh0Aubd6ME4LnYerpZXPY9CdhzrJUKNs0E4TusalpWyPlmRadeW/vixHME4ECrgDcAzscpnLB1XI5LZYcE4DepO98qiy3jjqenvAqzhk0E4TsunLVmnZbmdB0s2yjN0UkAIRttgbZ5tnjYYwKx8AAiADdtAB0NMDAXGwowH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIVFBTA28E+GEC+GLbPFUS2zwwKyIhAJ7I+EMBzH8BygBVIFog10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZYINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WAfoCye1UArxwIddJwh+VMCDXCx/eApJbf+AhghBz2r5cuo61MdMfAYIQc9q+XLry4IH6APpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgSbBLbPH/gAYIQ+BPIm7rjAjBwJSMBYtMfAYIQ+BPIm7ry4IH6APpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgSbBIkAdBTQMcFnTCCANSE+EJSUMcF8vSO0YFQOfhDVCBj2zxwWchwAcsBcwHLAXABywASzMzJ+QDIcgHLAXABywASygfL/8nQINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiPhCxwXy9OKgfyoCxIIAwT34QlJQxwXy9IIA1VddvvL0USGh+ENUIFTbPFxwWchwAcsBcwHLAXABywASzMzJ+QDIcgHLAXABywASygfL/8nQINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFE1KiYDlshZghD4E8ibUAPLHwH6AgEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbJggnJw4Bacll/BkVV2zyIf/hCcFgDgEIBbW3bPCgnKAAeAAAAAHRyYW5zZmVycmVkAcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7ACkAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwA1gLQ9AQwbQGBIe0BgBD0D2+h8uCHAYEh7SICgBD0F8gByPQAyQHMcAHKAEADWSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFgEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbJAbztRNDUAfhj0gABjkb6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB+gBVIGwT4Pgo1wsKgwm68uCJLAGK+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIEgLRAds8LQACcGmY/ZQ=");let n=r.beginCell();n.storeRef(e),n.storeUint(0,1);const a=n.endCell();return{code:s,data:a}}const T={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"},20537:{message:"Sibling only"},49469:{message:"Access denied"},54404:{message:"Parent only"},54615:{message:"Insufficient balance"}};class I{constructor(e,n){d(this,"address");d(this,"init");d(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"Metadata",header:null,fields:[]},{name:"Transfer",header:1943715420,fields:[]},{name:"InternalAddTokens",header:4162046107,fields:[]}],errors:T});this.address=e,this.init=n}static async init(){return await w()}static async fromInit(){const e=await w(),n=r.contractAddress(0,e);return new I(n,e)}static fromAddress(e){return new I(e)}async send(e,n,a,t){let A=null;if(t&&typeof t=="object"&&!(t instanceof r.Slice)&&t.$$type==="Deploy"&&(A=r.beginCell().store(M(t)).endCell()),A===null)throw new Error("Invalid message type");await e.internal(n,{...a,body:A})}async getMetadata(e){let n=new r.TupleBuilder,a=(await e.get("metadata",n.build())).stack;return H(a)}async getChildAddress(e,n){let a=new r.TupleBuilder;return a.writeAddress(n),(await e.get("childAddress",a.build())).stack.readAddress()}}function Y(s){return e=>{let n=e;n.storeUint(1943715420,32),n.storeCoins(s.amount),n.storeAddress(s.to)}}function N(s){return e=>{let n=e;n.storeUint(4162046107,32),n.storeCoins(s.amount),n.storeAddress(s.origin)}}function P(s){return e=>{let n=e;n.storeAddress(s.parent),n.storeAddress(s.owner)}}async function m(s,e){const n=r.Cell.fromBase64("te6ccgECGAEABQAAART/APSkE/S88sgLAQIBYgIDA3bQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVEts8MBIEBQIBWA4PArxwIddJwh+VMCDXCx/eApJbf+AhghBz2r5cuo61MdMfAYIQc9q+XLry4IH6APpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgSbBLbPH/gAYIQ+BPIm7rjAjBwBgcAnsj4QwHMfwHKAFUgWiDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlgg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxYB+gLJ7VQCxIIAwT34QlJQxwXy9IIA1VddvvL0USGh+ENUIFTbPFxwWchwAcsBcwHLAXABywASzMzJ+QDIcgHLAXABywASygfL/8nQINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFE1DQgBYtMfAYIQ+BPIm7ry4IH6APpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgSbBIMA5bIWYIQ+BPIm1ADyx8B+gIBINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WyYIJycOAWnJZfwZFVds8iH/4QnBYA4BCAW1t2zwKCQoAHgAAAAB0cmFuc2ZlcnJlZAHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wALAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAdBTQMcFnTCCANSE+EJSUMcF8vSO0YFQOfhDVCBj2zxwWchwAcsBcwHLAXABywASzMzJ+QDIcgHLAXABywASygfL/8nQINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiPhCxwXy9OKgfw0A1gLQ9AQwbQGBIe0BgBD0D2+h8uCHAYEh7SICgBD0F8gByPQAyQHMcAHKAEADWSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFgEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbJAgEgEBECAUgWFwIRttgbZ5tnjYYwEhMAubd6ME4LnYerpZXPY9CdhzrJUKNs0E4TusalpWyPlmRadeW/vixHME4ECrgDcAzscpnLB1XI5LZYcE4DepO98qiy3jjqenvAqzhk0E4TsunLVmnZbmdB0s2yjN0UkAG87UTQ1AH4Y9IAAY5G+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAfoAVSBsE+D4KNcLCoMJuvLgiRQAAiABivpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiBIC0QHbPBUAAnAAEbCvu1E0NIAAYAB1sm7jQ1aXBmczovL1FtWkIxaEVYN0sxYUF2QjlwaEFSdkFFUTZ1dTVyU3JIRlFDV29UWVpzems5aXeCA="),a=r.Cell.fromBase64("te6cckECGgEABQoAAQHAAQEFoEPbAgEU/wD0pBP0vPLICwMCAWIMBAIBWAgFAgFIBwYAdbJu40NWlwZnM6Ly9RbVpCMWhFWDdLMWFBdkI5cGhBUnZBRVE2dXU1clNySEZRQ1dvVFlac3prOWl3ggABGwr7tRNDSAAGACASAKCQC5t3owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwTgN6k73yqLLeOOp6e8CrOGTQThOy6ctWadluZ0HSzbKM3RSQAhG22Btnm2eNhjAXCwACIAN20AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8VRLbPDAXDg0Ansj4QwHMfwHKAFUgWiDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlgg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxYB+gLJ7VQCvHAh10nCH5UwINcLH94Cklt/4CGCEHPavly6jrUx0x8BghBz2r5cuvLggfoA+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiBJsEts8f+ABghD4E8ibuuMCMHARDwFi0x8BghD4E8ibuvLggfoA+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiBJsEhAB0FNAxwWdMIIA1IT4QlJQxwXy9I7RgVA5+ENUIGPbPHBZyHABywFzAcsBcAHLABLMzMn5AMhyAcsBcAHLABLKB8v/ydAg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCI+ELHBfL04qB/FgLEggDBPfhCUlDHBfL0ggDVV12+8vRRIaH4Q1QgVNs8XHBZyHABywFzAcsBcAHLABLMzMn5AMhyAcsBcAHLABLKB8v/ydAg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIUTUWEgOWyFmCEPgTyJtQA8sfAfoCASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFsmCCcnDgFpyWX8GRVXbPIh/+EJwWAOAQgFtbds8FBMUAB4AAAAAdHJhbnNmZXJyZWQByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsAFQCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzADWAtD0BDBtAYEh7QGAEPQPb6Hy4IcBgSHtIgKAEPQXyAHI9ADJAcxwAcoAQANZINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFskBvO1E0NQB+GPSAAGORvpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAH6AFUgbBPg+CjXCwqDCbry4IkYAYr6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgSAtEB2zwZAAJwry3bvg==");let t=r.beginCell();t.storeRef(a),t.storeUint(0,1),P({$$type:"TokenChild_init_args",parent:s,owner:e})(t);const A=t.endCell();return{code:n,data:A}}const F={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"},20537:{message:"Sibling only"},49469:{message:"Access denied"},54404:{message:"Parent only"},54615:{message:"Insufficient balance"}};class g{constructor(e,n){d(this,"address");d(this,"init");d(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"Metadata",header:null,fields:[]},{name:"Transfer",header:1943715420,fields:[]},{name:"InternalAddTokens",header:4162046107,fields:[]}],errors:F});this.address=e,this.init=n}static async init(e,n){return await m(e,n)}static async fromInit(e,n){const a=await m(e,n),t=r.contractAddress(0,a);return new g(t,a)}static fromAddress(e){return new g(e)}async send(e,n,a,t){let A=null;if(t&&typeof t=="object"&&!(t instanceof r.Slice)&&t.$$type==="Transfer"&&(A=r.beginCell().store(Y(t)).endCell()),t&&typeof t=="object"&&!(t instanceof r.Slice)&&t.$$type==="InternalAddTokens"&&(A=r.beginCell().store(N(t)).endCell()),A===null)throw new Error("Invalid message type");await e.internal(n,{...a,body:A})}async getBalance(e){let n=new r.TupleBuilder;return(await e.get("balance",n.build())).stack.readBigNumber()}}function X(s,e,n){let a;p(s,y,o=>n(6,a=o));let t,A,c,i,C,u;return D(y,a={markdown:J,tactCode:S,deploy:async()=>{t=await v.Blockchain.create();const o=await t.treasury("deployer");A=o.getSender();const l=await t.treasury("another");c=l.getSender(),i=t.openContract(await I.fromInit()),C=t.openContract(await g.fromInit(i.address,A.address)),u=t.openContract(await g.fromInit(i.address,c.address));const h={[o.address.toString()]:"deployer",[l.address.toString()]:"user2",[i.address.toString()]:"TokenParent",[C.address.toString()]:"TokenChild(deployer)",[u.address.toString()]:"TokenChild(user2)"};return[[i,C,u],h,[await i.send(o.getSender(),{value:r.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{"Transfer{100,user2} (from deployer)":async()=>{const o=await i.getChildAddress(A.address);return[await t.openContract(await g.fromAddress(o)).send(A,{value:r.toNano(1)},{$$type:"Transfer",amount:r.toNano(100),to:c.address})]},"Transfer{100,deployer} (from user2)":async()=>{const o=await i.getChildAddress(c.address);return[await t.openContract(await g.fromAddress(o)).send(c,{value:r.toNano(1)},{$$type:"Transfer",amount:r.toNano(100),to:A.address})]}},getters:{metadata:async()=>await i.getMetadata(),"balance(childAddress(deployer))":async()=>{const o=await i.getChildAddress(A.address);return await t.openContract(await g.fromAddress(o)).getBalance()},"balance(childAddress(user2))":async()=>{const o=await i.getChildAddress(c.address);return await t.openContract(await g.fromAddress(o)).getBalance()}},prev:B(import.meta.url).prev,next:B(import.meta.url).next},a),[]}class U extends E{constructor(e){super(),b(this,e,X,null,L,{})}}export{U as default};
