import{S as C,i as c,s as I,J as B,ad as w}from"../../../chunks/index-a89a8bfe.js";import{d as n,s as i}from"../../../chunks/store-04c80bb0.js";import{d as m}from"../../../chunks/index-e79fdc6e.js";import{g as l}from"../../../chunks/helpers-7ef692a6.js";const f=`# Addresses, Bools

Tact supports a number of primitive data types that are tailored for smart contract use.

\`Address\` represents standard addresses on the TON blockchain. TON has multiple chains called *workchains*. The address specifies the workchain id:

* \`0\` - The standard workchain, for regular users.

* \`-1\` - The masterchain, usually for validators.

Every smart contract on TON is identifiable by its address. There are usually multiple ways to represent the same address. Notice in the contract that the bouncable and non-bouncable representations of the same address generate the exact same value.

\`Bool\` is convenient for boolean and logical operations and for storing flags.`,b=`import "@stdlib/deploy";

contract AddressesBools with Deployable {
 
    // addresses
    a1: Address;
    a2: Address;
    a3: Address;
    a4: Address;
    a5: Address;

    // bools
    b1: Bool = true;
    b2: Bool = false;
    b3: Bool;

    init() {
        // addressses
        self.a1 = address("EQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqB2N"); // bouncable (foundation wallet)
        self.a2 = address("UQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqEBI"); // non-bounceable (same foundation wallet)
        self.a3 = newAddress(0, 0x83dfd552e63729b472fcbcc8c45ebcc6691702558b68ec7527e1ba403a0f31a8); // raw (same foundation wallet)
        self.a4 = newAddress(0, 0); // the zero address
        self.a5 = myAddress();      // address of this contract

        // bools
        self.b3 = !self.b2;
    }

    receive("address dump") {
        ///dump(self.a1);
        ///dump(self.a2);
        ///dump(self.a3);
        ///dump(self.a4);
        ///dump(self.a5);
    }

    receive("address ops") {
        // temporary variable
        let a: Address = address("EQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqB2N"); // bouncable (same foundation wallet)

        dump(a == self.a1);
        dump(a == self.a2);
        dump(a == self.a3);
        dump(a == self.a4);
        dump(a != self.a5);
    }

    receive("bool dump") {
        dump(self.b1);
        dump(self.b2);
        dump(self.b3);
    }

    receive("bool ops") {
        // temporary variable
        let b: Bool = true;
        dump(b);

        b = self.b1 && self.b2 || self.b3;
        dump(b);

        dump(self.b1 == true);
        dump(self.b1 == self.b2);
        dump(self.b1 != self.b2);
    }
}`;function p(r){return s=>{let o=s;o.storeUint(2490013878,32),o.storeUint(r.queryId,64)}}async function u(){const r=n.Cell.fromBase64("te6ccgECFwEABcUAART/APSkE/S88sgLAQIBYgIDBMLQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJIkFVbwT4Ye1E0NQB+GLSAAGOhNs8bBiOjjD4KNcLCoMJuvLgids84lUX2zwwBAUGBwC5oXejBOC52Hq6WVz2PQnYc6yVCjbNBOE7rGpaVsj5ZkWnXlv74sRzBOBAq4A3AM7HKZywdVyOS2WHBOA3qTvfKost446np7wKs4ZNBOE7Lpy1Zp2W5nQdLNsozdFJAeT6QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJAfpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiQHUAdAIAdp/cI0IYAQe/qqXMblNo5fl5kYi9eYzSLgSrFtHY6k/DdIB0HmNRI0IYAQe/qqXMblNo5fl5kYi9eYzSLgSrFtHY6k/DdIB0HmNRHCC8IPf1VLmNym0cvy8yMRevMZpFwJVi2jsdSfhukA6DzGoCQKY7aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEJRqmLa6jqMx0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yds8f+ABwACRMOMNcAoLASDI+EIBzH8BygBVcNs8ye1UFQCu+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJAfpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiQHSANIA0gAwEFgQVxBWANLIcgHLAXABywASygfL/8nQINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJcCDIcgHLAXABywASygfL/8nQINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJ+ChVFH8BJvhBbyQQI18Df3BQA4BCAW1t2zwMA/75ASCC8J3bH/N1XeRaZYusVvdgRhuL+OmKMuTC2ikF+qJaYgiBupQwf9sx4CCC8HfMdQJ3gpb268hqSyoqllH8ag6rkMr67xOGO0dUn2qAuo6GMNs8f9sx4CCC8FyG3eOoHDTjAef/DBiOB181eiJSVlJmOu8ChUSherXFuuMCDg8QAc7IcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxZQA/oCcAHKaCNusyVus7GXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsADQCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAR0jQhgBB7+qpcxuU2jl+XmRiL15jNIuBKsW0djqT8N0gHQeY1EUwjHBds8UwfHBds8UwbHBds8UwXHBRQUFBEDGjAi2zwh2zwg2zx/2zEUFBQBVoLwOs5T87vLDVMXg/EtrhshNzee55rHPCVBetO3cbarXS+6joXbPH/bMeASAhDbPCTHBbPbPBQUBCR/2zxTIbAhsds8IsD/2zxTIboUFBQTAg7bPFMhvds8FBQALJmLR0cnVlj+FDCai1ZmFsc2WP4UMOIB4lCHINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxZQBSDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WUAMg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFshYFgCkINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxZYINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxYSygATygDKAMkBzA=="),s=n.Cell.fromBase64("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");let o=n.beginCell();o.storeRef(s),o.storeUint(0,1);const t=o.endCell();return{code:r,data:t}}const y={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class d{constructor(s,o){this.abi={errors:y},this.address=s,this.init=o}static async init(){return await u()}static async fromInit(){const s=await u(),o=n.contractAddress(0,s);return new d(o,s)}static fromAddress(s){return new d(s)}async send(s,o,t,e){let a=null;if(e==="address dump"&&(a=n.beginCell().storeUint(0,32).storeStringTail(e).endCell()),e==="address ops"&&(a=n.beginCell().storeUint(0,32).storeStringTail(e).endCell()),e==="bool dump"&&(a=n.beginCell().storeUint(0,32).storeStringTail(e).endCell()),e==="bool ops"&&(a=n.beginCell().storeUint(0,32).storeStringTail(e).endCell()),e&&typeof e=="object"&&!(e instanceof n.Slice)&&e.$$type==="Deploy"&&(a=n.beginCell().store(p(e)).endCell()),a===null)throw new Error("Invalid message type");await s.internal(o,{...t,body:a})}}function E(r,s,o){let t;B(r,i,A=>o(2,t=A));let e,a;return w(i,t={markdown:f,tactCode:b,deploy:async()=>{const A=await m.Blockchain.create(),g=await A.treasury("deployer");return e=g.getSender(),a=A.openContract(await d.fromInit()),[await a.send(g.getSender(),{value:n.toNano(1)},{$$type:"Deploy",queryId:0n})]},messages:{"address dump":async()=>[await a.send(e,{value:n.toNano(1)},"address dump")],"address ops":async()=>[await a.send(e,{value:n.toNano(1)},"address ops")],"bool dump":async()=>[await a.send(e,{value:n.toNano(1)},"bool dump")],"bool ops":async()=>[await a.send(e,{value:n.toNano(1)},"bool ops")]},getters:{},prev:l(import.meta.url).prev,next:l(import.meta.url).next},t),[]}class v extends C{constructor(s){super(),c(this,s,E,null,I,{})}}export{v as default};
