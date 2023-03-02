import{S as d,i as u,s as y,J as b,ad as m}from"../../../chunks/index-a89a8bfe.js";import{d as n,s as l}from"../../../chunks/store-04c80bb0.js";import{d as p}from"../../../chunks/index-e79fdc6e.js";import{g as c}from"../../../chunks/helpers-7ef692a6.js";const C=`# Integers

Tact supports a number of primitive data types that are tailored for smart contract use.

\`Int\` is the primary number type. Math in smart contracts is always done with integers and no floating points.

The runtime type \`Int\` is *always* 257-bit signed, so all calculations are done at 257-bit. This should be enough for everything as it's large enough to hold the number of atoms in the universe.

If any math operation overflows, an exception will be thrown. When encoding \`Int\` to persistent state, we will usually use smaller representations than 257-bit to reduce storage cost.`,B=`import "@stdlib/deploy";

contract Integers with Deployable {
 
    // integers can be persisted in state in various sizes
    i1: Int as int257 = 3001;   // range -2^256 to 2^256 - 1 (takes 257 bit = 32 bytes + 1 bit)
    i2: Int as uint256;         // range 0 to 2^256 - 1 (takes 256 bit = 32 bytes)
    i3: Int as int256 = 17;     // range -2^255 to 2^255 - 1 (takes 256 bit = 32 bytes)
    i4: Int as uint128;         // range 0 to 2^128 - 1 (takes 128 bit = 16 bytes)
    ///i5: Int as int128;          // range -2^127 to 2^127 - 1 (takes 128 bit = 16 bytes)
    i6: Int as coins;           // range 0 to 2^120 - 1 (takes 120 bit = 15 bytes)
    i7: Int as uint64 = 0x1c4a; // range 0 to 18,446,744,073,709,551,615 (takes 64 bit = 8 bytes)
    i8: Int as int64 = -203;    // range -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 (takes 64 bit = 8 bytes)
    i9: Int as uint32 = 0;      // range 0 to 4,294,967,295 (takes 32 bit = 4 bytes)
    i10: Int as int32 = 0;      // range -2,147,483,648 to 2,147,483,647 (takes 32 bit = 4 bytes)
    i11: Int as uint16 = 0;     // range 0 to 65,535 (takes 16 bit = 2 bytes)
    i12: Int as int16 = 0;      // range -32,768 to 32,767 (takes 16 bit = 2 bytes)
    i13: Int as uint8 = 0;      // range 0 to 255 (takes 8 bit = 1 byte)
    i14: Int as int8 = 0;       // range -128 to 127 (takes 8 bit = 1 byte)

    init() {
        self.i2 = 0x83dfd552e63729b472fcbcc8c45ebcc6691702558b68ec7527e1ba403a0f31a8;
        self.i4 = 1507998500293440234999;
        ///self.i5 = pow(10, 9);   // this is 10^9 = 1,000,000,000
        self.i6 = ton("1.23");  // easy to read coin balances (like cents, just with 9 decimals)
    }

    receive("integer dump") {
        dump(self.i1);
        dump(self.i2);
        dump(self.i3);
        dump(self.i4);
        ///dump(self.i5);
        dump(self.i6);
        dump(self.i7);
        dump(self.i8);
    }

    receive("integer ops") {
        // temporary variable, runtime Int type is always int257 (range -2^256 to 2^256 - 1)
        let i: Int = -12;                       dump(i);

        i = self.i4 * 3 + self.i1 - self.i8;    dump(i);
        i = self.i1 % 10;                       dump(i);
        i = self.i1 / 1000;                     dump(i);
        i = self.i1 >> 3;                       dump(i);
        i = self.i1 << 2;                       dump(i);
        i = min(self.i3, 11);                   dump(i);
        i = max(self.i3, 22);                   dump(i);
        i = abs(self.i8);                       dump(i);

        dump(self.i1 == 3001);
        dump(self.i1 > 2000);
        dump(self.i1 != 70);
    }
}`;function I(o){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(o.queryId,64)}}async function w(){const o=n.Cell.fromBase64("te6ccgECFQEABE4AART/APSkE/S88sgLAQIBYgIDAXbQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJIkFVbwT4YQQAuaF3owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwTgN6k73yqLLeOOp6e8CrOGTQThOy6ctWadluZ0HSzbKM3RSQOe7UTQ1AH4YtIAAY4tgQEB1wDT/9L/03/6ANQB0NM/0j/TH9If0w/SD9MH0gcwEI0QjBCLEIoQiWwdjo4w+CjXCwqDCbry4InbPOJVHNs8MAUGBwCegQu5gBGBHEqB/zVwVHAAUwCC8IPf1VLmNym0cvy8yMRevMZpFwJVi2jsdSfhukA6DzGoCYI4Ub+u5kxkTOX3UJiCEElQT4BHGEUVUEQGAwKY7aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEJRqmLa6jqMx0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yds8f+ABwACRMOMNcAgJAHrI+EIBzH8BygBVwFDNgQEBzwAay/8Yyv8Wy39QBPoCAsjLP8o/EssfEsofEssPEsoPEssHEsoHyQHMye1UASb4QW8kECNfA39wUAOAQgFtbds8CgK0+QEggvAMD1uC+hFA7vxvcSubd1pTQeov38zZvpRFWeoR7I5v7rqOhjDbPH/bMeCC8EJDdEcIbr2lva5/YEQ+EDAA4A7lUIzjCfBWTSlUAh+yuo6F2zx/2zHgDA0BzshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFlAD+gJwAcpoI26zJW6zsZczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wALAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMBCYs2zz+FDAr2zz+FDAq2zz+FDApEhISDgREgPTbPP4UMCmnAy2gJ6HbPP4UMCx6qQjbPP4UMCyBA+ipBBISEhAEJNs8/hQwKNs8/hQwJ9s8/hQwJhISEg8BCts8/hQwEgQ02zz+FDAsqwLbPP4UMCyqAds8/hQwKoALtggSEhIRBDjbPP4UMCqAFrYJ2zz+FDAmtgvbPP4UMCyBC7m6EhISEwDeyCHBAJiALQHLBwGjAd4hgjgyfLJzQRnTt6mqHbmOIHAgcY4UBHqpDKYwJagSoASqBwKkIcAARTDmMDOqAs8BjitvAHCOESN6qQgSb4wBpAN6qQQgwAAU5jMipQOcUwJvgaYwWMsHAqVZ5DAx4snQAxzbPCyBB9C82zwsw0bbPBQUFAAsmYtHRydWWP4UMJqLVmYWxzZY/hQw4g=="),e=n.Cell.fromBase64("te6cckECFwEABFgAAQHAAQEFoB6tAgEU/wD0pBP0vPLICwMCAWIFBAC5oXejBOC52Hq6WVz2PQnYc6yVCjbNBOE7rGpaVsj5ZkWnXlv74sRzBOBAq4A3AM7HKZywdVyOS2WHBOA3qTvfKost446np7wKs4ZNBOE7Lpy1Zp2W5nQdLNsozdFJAXbQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJIkFVbwT4YQYDnu1E0NQB+GLSAAGOLYEBAdcA0//S/9N/+gDUAdDTP9I/0x/SH9MP0g/TB9IHMBCNEIwQixCKEIlsHY6OMPgo1wsKgwm68uCJ2zziVRzbPDAWCAcAesj4QgHMfwHKAFXAUM2BAQHPABrL/xjK/xbLf1AE+gICyMs/yj8Syx8Syh8Syw8Syg8SywcSygfJAczJ7VQCmO2i7ftwIddJwh+VMCDXCx/eApJbf+AhghCUapi2uo6jMdMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8nbPH/gAcAAkTDjDXATCQK0+QEggvAMD1uC+hFA7vxvcSubd1pTQeov38zZvpRFWeoR7I5v7rqOhjDbPH/bMeCC8EJDdEcIbr2lva5/YEQ+EDAA4A7lUIzjCfBWTSlUAh+yuo6F2zx/2zHgDwoERID02zz+FDAppwMtoCeh2zz+FDAseqkI2zz+FDAsgQPoqQQSEhILBDTbPP4UMCyrAts8/hQwLKoB2zz+FDAqgAu2CBISEgwEONs8/hQwKoAWtgnbPP4UMCa2C9s8/hQwLIELuboSEhINAxzbPCyBB9C82zwsw0bbPA4ODgAsmYtHRydWWP4UMJqLVmYWxzZY/hQw4gQmLNs8/hQwK9s8/hQwKts8/hQwKRISEhAEJNs8/hQwKNs8/hQwJ9s8/hQwJhISEhEBCts8/hQwEgDeyCHBAJiALQHLBwGjAd4hgjgyfLJzQRnTt6mqHbmOIHAgcY4UBHqpDKYwJagSoASqBwKkIcAARTDmMDOqAs8BjitvAHCOESN6qQgSb4wBpAN6qQQgwAAU5jMipQOcUwJvgaYwWMsHAqVZ5DAx4snQASb4QW8kECNfA39wUAOAQgFtbds8FAHOyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WUAP6AnABymgjbrMlbrOxlzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7ABUAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwAnoELuYARgRxKgf81cFRwAFMAgvCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqAmCOFG/ruZMZEzl91CYghBJUE+ARxhFFVBEBgNel+dc");let t=n.beginCell();t.storeRef(e),t.storeUint(0,1);const a=t.endCell();return{code:o,data:a}}const Q={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class r{constructor(e,t){this.abi={errors:Q},this.address=e,this.init=t}static async init(){return await w()}static async fromInit(){const e=await w(),t=n.contractAddress(0,e);return new r(t,e)}static fromAddress(e){return new r(e)}async send(e,t,a,s){let i=null;if(s==="integer dump"&&(i=n.beginCell().storeUint(0,32).storeStringTail(s).endCell()),s==="integer ops"&&(i=n.beginCell().storeUint(0,32).storeStringTail(s).endCell()),s&&typeof s=="object"&&!(s instanceof n.Slice)&&s.$$type==="Deploy"&&(i=n.beginCell().store(I(s)).endCell()),i===null)throw new Error("Invalid message type");await e.internal(t,{...a,body:i})}}function f(o,e,t){let a;b(o,l,A=>t(2,a=A));let s,i;return m(l,a={markdown:C,tactCode:B,deploy:async()=>{const A=await p.Blockchain.create(),g=await A.treasury("deployer");return s=g.getSender(),i=A.openContract(await r.fromInit()),[await i.send(g.getSender(),{value:n.toNano(1)},{$$type:"Deploy",queryId:0n})]},messages:{"integer dump":async()=>[await i.send(s,{value:n.toNano(1)},"integer dump")],"integer ops":async()=>[await i.send(s,{value:n.toNano(1)},"integer ops")]},getters:{},prev:c(import.meta.url).prev,next:c(import.meta.url).next},a),[]}class M extends d{constructor(e){super(),u(this,e,f,null,y,{})}}export{M as default};
