var m=Object.defineProperty;var u=(t,e,s)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var r=(t,e,s)=>(u(t,typeof e!="symbol"?e+"":e,s),s);import{S as B,i as C,s as p,I,ac as y}from"../../../../chunks/index-1d4083c1.js";import{d as A,s as c}from"../../../../chunks/store-ab11a47e.js";import{d as f,g as w}from"../../../../chunks/helpers-9ce1d910.js";const Q=`# Integer Operations

Since all runtime calculations with integers are done at 257-bit, overflows are quite rare.

Nevertheless, if any math operation overflows, an exception will be thrown and the transaction will revert. You can say that Tact's math is safe by default.

There's no problem with mixing variables of different state sizes in the same calculation. In runtime, they are all the same type - 257-bit signed.`,D=`import "@stdlib/deploy";

contract Integers with Deployable {
 
    i1: Int as uint128 = 3001;
    i2: Int as int32 = 57;

    init() {}

    receive("show ops") {
        let i: Int = -12; // temporary variable, runtime Int type is always int257 (range -2^256 to 2^256 - 1)
        dump(i);

        i = self.i1 * 3 + self.i2 - i;
        dump(i);

        i = self.i1 % 10;          
        dump(i);
        
        i = self.i1 / 1000;
        dump(i);
        
        i = self.i1 >> 3;
        dump(i);
        
        i = self.i1 << 2;
        dump(i);
        
        i = min(self.i2, 11);
        dump(i);
        
        i = max(self.i2, 66);
        dump(i);
        
        i = abs(-1 * self.i2);
        dump(i);

        dump(self.i1 == 3001);
        dump(self.i1 > 2000);
        dump(self.i1 >= 3002);
        dump(self.i1 != 70);
    }
}`;function H(t){return e=>{let s=e;s.storeUint(2490013878,32),s.storeUint(t.queryId,64)}}async function d(){const t=A.Cell.fromBase64("te6ccgECEAEAA1AAART/APSkE/S88sgLAQIBYgIDAujQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJIkFVbwT4Ye1E0NQB+GLSAAGX03/SH1lsEo6OMPgo1wsKgwm68uCJ2zziWts8MMj4QgHMfwHKAFkCy3/KH8ntVAQFALmhd6ME4LnYerpZXPY9CdhzrJUKNs0E4TusalpWyPlmRadeW/vixHME4ECrgDcAzscpnLB1XI5LZYcE4DepO98qiy3jjqenvAqzhk0E4TsunLVmnZbmdB0s2yjN0UkACoELuYA5AvTtou37cCHXScIflTAg1wsf3gKSW3/gIYIQlGqYtrqOozHTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J2zx/4AHAAI6t+QGC8K6bFfDVDpUWTvZ3/rxXpfmuN5s6z3IbaUpILHfbZcPVuo6F2zx/2zHgkTDicAYHASb4QW8kECNfA39wUAOAQgFtbds8CARIgPQg2zwx/hQwIacDIaCmDNs8/hQwIXqpCNs8/hQwIYED6KkEDAwMCgHOyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WUAP6AnABymgjbrMlbrOxlzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AAkAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwENNs8/hQwIasC2zz+FDAhqgHbPP4UMCCAC7YIDAwMCwQ62zz+FDAggEK2Cds8/hQwIKO2C9s8/hQwIYELuboMDAwNAN7IIcEAmIAtAcsHAaMB3iGCODJ8snNBGdO3qaoduY4gcCBxjhQEeqkMpjAlqBKgBKoHAqQhwABFMOYwM6oCzwGOK28AcI4RI3qpCBJvjAGkA3qpBCDAABTmMyKlA5xTAm+BpjBYywcCpVnkMDHiydAEJts8IYEH0LzbPCGBC7q+2zwhw0YPDw8OAQTbPA8ALJmLR0cnVlj+FDCai1ZmFsc2WP4UMOI="),e=A.Cell.fromBase64("te6cckECEgEAA1oAAQHAAQEFoB6tAgEU/wD0pBP0vPLICwMCAWIFBAC5oXejBOC52Hq6WVz2PQnYc6yVCjbNBOE7rGpaVsj5ZkWnXlv74sRzBOBAq4A3AM7HKZywdVyOS2WHBOA3qTvfKost446np7wKs4ZNBOE7Lpy1Zp2W5nQdLNsozdFJAujQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJIkFVbwT4Ye1E0NQB+GLSAAGX03/SH1lsEo6OMPgo1wsKgwm68uCJ2zziWts8MMj4QgHMfwHKAFkCy3/KH8ntVBEGAvTtou37cCHXScIflTAg1wsf3gKSW3/gIYIQlGqYtrqOozHTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J2zx/4AHAAI6t+QGC8K6bFfDVDpUWTvZ3/rxXpfmuN5s6z3IbaUpILHfbZcPVuo6F2zx/2zHgkTDicA4HBEiA9CDbPDH+FDAhpwMhoKYM2zz+FDAheqkI2zz+FDAhgQPoqQQNDQ0IBDTbPP4UMCGrAts8/hQwIaoB2zz+FDAggAu2CA0NDQkEOts8/hQwIIBCtgnbPP4UMCCjtgvbPP4UMCGBC7m6DQ0NCgQm2zwhgQfQvNs8IYELur7bPCHDRgwMDAsBBNs8DAAsmYtHRydWWP4UMJqLVmYWxzZY/hQw4gDeyCHBAJiALQHLBwGjAd4hgjgyfLJzQRnTt6mqHbmOIHAgcY4UBHqpDKYwJagSoASqBwKkIcAARTDmMDOqAs8BjitvAHCOESN6qQgSb4wBpAN6qQQgwAAU5jMipQOcUwJvgaYwWMsHAqVZ5DAx4snQASb4QW8kECNfA39wUAOAQgFtbds8DwHOyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WUAP6AnABymgjbrMlbrOxlzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7ABAAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwACoELuYA5rP9fMg==");let s=A.beginCell();s.storeRef(e),s.storeUint(0,1);const o=s.endCell();return{code:t,data:o}}const E={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class g{constructor(e,s){r(this,"address");r(this,"init");r(this,"abi",{errors:E});this.address=e,this.init=s}static async init(){return await d()}static async fromInit(){const e=await d(),s=A.contractAddress(0,e);return new g(s,e)}static fromAddress(e){return new g(e)}async send(e,s,o,n){let i=null;if(n==="show ops"&&(i=A.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n&&typeof n=="object"&&!(n instanceof A.Slice)&&n.$$type==="Deploy"&&(i=A.beginCell().store(H(n)).endCell()),i===null)throw new Error("Invalid message type");await e.internal(s,{...o,body:i})}}function M(t,e,s){let o;I(t,c,a=>s(2,o=a));let n,i;return y(c,o={markdown:Q,tactCode:D,deploy:async()=>{const a=await f.Blockchain.create(),l=await a.treasury("deployer");return n=l.getSender(),i=a.openContract(await g.fromInit()),[await i.send(l.getSender(),{value:A.toNano(1)},{$$type:"Deploy",queryId:0n})]},messages:{"show ops":async()=>[await i.send(n,{value:A.toNano(1)},"show ops")]},getters:{},prev:w(import.meta.url).prev,next:w(import.meta.url).next},o),[]}class L extends B{constructor(e){super(),C(this,e,M,null,p,{})}}export{L as default};
