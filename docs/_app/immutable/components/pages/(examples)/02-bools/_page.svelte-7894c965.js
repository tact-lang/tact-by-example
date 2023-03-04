var w=Object.defineProperty;var C=(t,e,s)=>e in t?w(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var l=(t,e,s)=>(C(t,typeof e!="symbol"?e+"":e,s),s);import{S as f,i as B,s as b,I,ac as m}from"../../../../chunks/index-1d4083c1.js";import{d as n,s as g}from"../../../../chunks/store-ab11a47e.js";import{d as p,g as d}from"../../../../chunks/helpers-9ce1d910.js";const y="# Bools\n\nThis primitive data type can hold the values `true` or `false`.\n\n`Bool` is convenient for boolean and logical operations. It is also useful for storing flags.\n\nPersisting bools to state is very space-efficient, they only take 1 bit.",D=`import "@stdlib/deploy";

contract Bools with Deployable {
 
    b1: Bool = true;
    b2: Bool = false;
    b3: Bool;

    init() {
        self.b3 = !self.b2;
    }

    receive("show all") {
        dump(self.b1);
        dump(self.b2);
        dump(self.b3);
    }

    receive("show ops") {
        let b: Bool = true; // temporary variable
        dump(b);

        b = self.b1 && self.b2 || !self.b3;
        dump(b);

        dump(self.b1 == true);
        dump(self.b1 == self.b2);
        dump(self.b1 != self.b2);
    }
}`;function h(t){return e=>{let s=e;s.storeUint(2490013878,32),s.storeUint(t.queryId,64)}}async function u(){const t=n.Cell.fromBase64("te6ccgECDgEAAroAART/APSkE/S88sgLAQIBYgIDAvjQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJIkFVbwT4Ye1E0NQB+GLSAAGa0gDSANIAVSBsE46OMPgo1wsKgwm68uCJ2zziVRLbPDDI+EIBzH8BygBVIFAjygDKAMoAye1UBAUAuaF3owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwTgN6k73yqLLeOOp6e8CrOGTQThOy6ctWadluZ0HSzbKM3RSQAGf3B/Apjtou37cCHXScIflTAg1wsf3gKSW3/gIYIQlGqYtrqOozHTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J2zx/4AHAAJEw4w1wBgcBJvhBbyQQI18Df3BQA4BCAW1t2zwIBLL5ASCC8DJCzGWVLwXZsH0rLKrZFjijQcjh8lPCONTeYLkL/XNKuo+NMCLbPCHbPCDbPH/bMeCC8K6bFfDVDpUWTvZ3/rxXpfmuN5s6z3IbaUpILHfbZcPVug0NDQoBzshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFlAD+gJwAcpoI26zJW6zsZczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAJAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMARCOhds8f9sx4AsEJn/bPFMhsCGzsds8IsD/2zxTIboNDQ0MAg7bPFMhvds8DQ0ALJmLR0cnVlj+FDCai1ZmFsc2WP4UMOI="),e=n.Cell.fromBase64("te6cckECEAEAAsQAAQHAAQEFoN59AgEU/wD0pBP0vPLICwMCAWIFBAC5oXejBOC52Hq6WVz2PQnYc6yVCjbNBOE7rGpaVsj5ZkWnXlv74sRzBOBAq4A3AM7HKZywdVyOS2WHBOA3qTvfKost446np7wKs4ZNBOE7Lpy1Zp2W5nQdLNsozdFJAvjQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJIkFVbwT4Ye1E0NQB+GLSAAGa0gDSANIAVSBsE46OMPgo1wsKgwm68uCJ2zziVRLbPDDI+EIBzH8BygBVIFAjygDKAMoAye1UDwYCmO2i7ftwIddJwh+VMCDXCx/eApJbf+AhghCUapi2uo6jMdMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8nbPH/gAcAAkTDjDXAMBwSy+QEggvAyQsxllS8F2bB9Kyyq2RY4o0HI4fJTwjjU3mC5C/1zSrqPjTAi2zwh2zwg2zx/2zHggvCumxXw1Q6VFk72d/68V6X5rjebOs9yG2lKSCx322XD1boLCwsIARCOhds8f9sx4AkEJn/bPFMhsCGzsds8IsD/2zxTIboLCwsKAg7bPFMhvds8CwsALJmLR0cnVlj+FDCai1ZmFsc2WP4UMOIBJvhBbyQQI18Df3BQA4BCAW1t2zwNAc7IcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxZQA/oCcAHKaCNusyVus7GXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsADgCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAAGf3B/N5kApg==");let s=n.beginCell();s.storeRef(e),s.storeUint(0,1);const a=s.endCell();return{code:t,data:a}}const Q={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class c{constructor(e,s){l(this,"address");l(this,"init");l(this,"abi",{errors:Q});this.address=e,this.init=s}static async init(){return await u()}static async fromInit(){const e=await u(),s=n.contractAddress(0,e);return new c(s,e)}static fromAddress(e){return new c(e)}async send(e,s,a,o){let r=null;if(o==="show all"&&(r=n.beginCell().storeUint(0,32).storeStringTail(o).endCell()),o==="show ops"&&(r=n.beginCell().storeUint(0,32).storeStringTail(o).endCell()),o&&typeof o=="object"&&!(o instanceof n.Slice)&&o.$$type==="Deploy"&&(r=n.beginCell().store(h(o)).endCell()),r===null)throw new Error("Invalid message type");await e.internal(s,{...a,body:r})}}function v(t,e,s){let a;I(t,g,A=>s(2,a=A));let o,r;return m(g,a={markdown:y,tactCode:D,deploy:async()=>{const A=await p.Blockchain.create(),i=await A.treasury("deployer");return o=i.getSender(),r=A.openContract(await c.fromInit()),[await r.send(i.getSender(),{value:n.toNano(1)},{$$type:"Deploy",queryId:0n})]},messages:{"show all":async()=>[await r.send(o,{value:n.toNano(1)},"show all")],"show ops":async()=>[await r.send(o,{value:n.toNano(1)},"show ops")]},getters:{},prev:d(import.meta.url).prev,next:d(import.meta.url).next},a),[]}class M extends f{constructor(e){super(),B(this,e,v,null,b,{})}}export{M as default};
