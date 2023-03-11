var I=Object.defineProperty;var b=(s,e,t)=>e in s?I(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var A=(s,e,t)=>(b(s,typeof e!="symbol"?e+"":e,t),t);import{S as y,i as C,s as m,I as B,ac as p}from"../../../../chunks/index-1d4083c1.js";import{d as o,g,s as w}from"../../../../chunks/store-568ba917.js";import{d as f}from"../../../../chunks/index-4450da48.js";const Q="# Integers\n\nTact supports a number of primitive data types that are tailored for smart contract use.\n\n`Int` is the primary number type. Math in smart contracts is always done with integers and no floating points.\n\nThe runtime type `Int` is *always* 257-bit signed, so all runtime calculations are done at 257-bit. This should be enough for everything as it's large enough to hold the number of atoms in the universe.\n\nWhen encoding `Int` to persistent state, we will usually use smaller representations than 257-bit to reduce storage cost. The persistent state size is specified in every declaration of a state variable after the `as` keyword.",h=`import "@stdlib/deploy";

contract Integers with Deployable {
 
    // contract persistent state variables
    // integers can be persisted in state in various sizes
    i1: Int as int257 = 3001;   // range -2^256 to 2^256 - 1 (takes 257 bit = 32 bytes + 1 bit)
    i2: Int as uint256;         // range 0 to 2^256 - 1 (takes 256 bit = 32 bytes)
    i3: Int as int256 = 17;     // range -2^255 to 2^255 - 1 (takes 256 bit = 32 bytes)
    i4: Int as uint128;         // range 0 to 2^128 - 1 (takes 128 bit = 16 bytes)
    i5: Int as int128;          // range -2^127 to 2^127 - 1 (takes 128 bit = 16 bytes)
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
        self.i5 = pow(10, 9);   // this is 10^9 = 1,000,000,000
        self.i6 = ton("1.23");  // easy to read coin balances (coins type is nano-tons, like cents, just with 9 decimals)
    }

    receive("show all") {
        dump(self.i1);
        dump(self.i2);
        dump(self.i3);
        dump(self.i4);
        dump(self.i5);
        dump(self.i6);
        dump(self.i7);
        dump(self.i8);
    }

    get fun result(): Int {
        return self.i1;
    }
}`;function H(s){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(s.queryId,64)}}async function u(){const s=o.Cell.fromBase64("te6ccgECEgEAA+4AART/APSkE/S88sgLAQIBYgIDAX7QAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GIEAgEgDg8Dnu1E0NQB+GPSAAGOLYEBAdcA0//S/9N/1AHQ0n/6ANM/0j/TH9If0w/SD9MH0gcwEK4QrRCsEKtsHo6OMPgo1wsKgwm68uCJ2zziVR3bPDAQBQYC9O2i7ftwIddJwh+VMCDXCx/eApJbf+AhghCUapi2uo6jMdMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8nbPH/gAcAAjq35AYLwMkLMZZUvBdmwfSssqtkWOKNByOHyU8I41N5guQv9c0q6joXbPH/bMeCRMOJwBwgAfsj4QwHMfwHKAFXQUN6BAQHPABvL/xnK/xfLfwXIyn9QBPoCEss/yj/LHxLKHxLLDxLKDxLLBxLKB8kBzMntVAEaf/hCcFgDgEIBbW3bPAkEJi3bPP4UMCzbPP4UMCvbPP4UMCoNDQ0LAc7IcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxZQA/oCcAHKaCNusyVus7GXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsACgCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAQk2zz+FDAp2zz+FDAo2zz+FDAnDQ0NDAIW2zz+FDAm2zz+FDANDQDeyCHBAJiALQHLBwGjAd4hgjgyfLJzQRnTt6mqHbmOIHAgcY4UBHqpDKYwJagSoASqBwKkIcAARTDmMDOqAs8BjitvAHCOESN6qQgSb4wBpAN6qQQgwAAU5jMipQOcUwJvgaYwWMsHAqVZ5DAx4snQAp2/cpdqJoagD8MekAAMcWwICA64Bp/+l/6b/qAOhpP/0AaZ/pH+mP6Q/ph+kH6YPpA5gIVwhWiFYIVbYPR0cYfBRrhYVBhN15cETtnnFtnkEBEAub3ejBOC52Hq6WVz2PQnYc6yVCjbNBOE7rGpaVsj5ZkWnXlv74sRzBOBAq4A3AM7HKZywdVyOS2WHBOA3qTvfKost446np7wKs4ZNBOE7Lpy1Zp2W5nQdLNsozdFJACigQu5gBGBHEqB/zVwVHAAUwCC8IPf1VLmNym0cvy8yMRevMZpFwJVi2jsdSfhukA6DzGoCQiCOFG/ruZMZEzl94IQO5rKAFCYghBJUE+ACFUzAARfDQ=="),e=o.Cell.fromBase64("te6cckECFAEAA/gAAQHAAQEFoB6tAgEU/wD0pBP0vPLICwMCAWIIBAIBIAYFALm93owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwTgN6k73yqLLeOOp6e8CrOGTQThOy6ctWadluZ0HSzbKM3RSQCnb9yl2omhqAPwx6QAAxxbAgIDrgGn/6X/pv+oA6Gk//QBpn+kf6Y/pD+mH6Qfpg+kDmAhXCFaIVghVtg9HRxh8FGuFhUGE3XlwRO2ecW2eQTBwAEXw0BftAB0NMDAXGwwAGRf5Fw4gH6QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IlUUFMDbwT4YQL4YgkDnu1E0NQB+GPSAAGOLYEBAdcA0//S/9N/1AHQ0n/6ANM/0j/TH9If0w/SD9MH0gcwEK4QrRCsEKtsHo6OMPgo1wsKgwm68uCJ2zziVR3bPDATCwoAfsj4QwHMfwHKAFXQUN6BAQHPABvL/xnK/xfLfwXIyn9QBPoCEss/yj/LHxLKHxLLDxLKDxLLBxLKB8kBzMntVAL07aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEJRqmLa6jqMx0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yds8f+ABwACOrfkBgvAyQsxllS8F2bB9Kyyq2RY4o0HI4fJTwjjU3mC5C/1zSrqOhds8f9sx4JEw4nAQDAQmLds8/hQwLNs8/hQwK9s8/hQwKg8PDw0EJNs8/hQwKds8/hQwKNs8/hQwJw8PDw4CFts8/hQwJts8/hQwDw8A3sghwQCYgC0BywcBowHeIYI4Mnyyc0EZ07epqh25jiBwIHGOFAR6qQymMCWoEqAEqgcCpCHAAEUw5jAzqgLPAY4rbwBwjhEjeqkIEm+MAaQDeqkEIMAAFOYzIqUDnFMCb4GmMFjLBwKlWeQwMeLJ0AEaf/hCcFgDgEIBbW3bPBEBzshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFlAD+gJwAcpoI26zJW6zsZczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wASAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAKKBC7mAEYEcSoH/NXBUcABTAILwg9/VUuY3KbRy/LzIxF68xmkXAlWLaOx1J+G6QDoPMagJCII4Ub+u5kxkTOX3ghA7msoAUJiCEElQT4AIVTMFHGbF");let t=o.beginCell();t.storeRef(e),t.storeUint(0,1);const i=t.endCell();return{code:s,data:i}}const E={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class c{constructor(e,t){A(this,"address");A(this,"init");A(this,"abi",{errors:E});this.address=e,this.init=t}static async init(){return await u()}static async fromInit(){const e=await u(),t=o.contractAddress(0,e);return new c(t,e)}static fromAddress(e){return new c(e)}async send(e,t,i,n){let a=null;if(n==="show all"&&(a=o.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n&&typeof n=="object"&&!(n instanceof o.Slice)&&n.$$type==="Deploy"&&(a=o.beginCell().store(H(n)).endCell()),a===null)throw new Error("Invalid message type");await e.internal(t,{...i,body:a})}async getResult(e){let t=new o.TupleBuilder;return(await e.get("result",t.build())).stack.readBigNumber()}}function D(s,e,t){let i;B(s,w,r=>t(2,i=r));let n,a;return p(w,i={markdown:Q,tactCode:h,deploy:async()=>{const r=await f.Blockchain.create(),l=await r.treasury("deployer");n=l.getSender(),a=r.openContract(await c.fromInit());const d={[l.address.toString()]:"deployer",[a.address.toString()]:"contract"};return[a,d,[await a.send(l.getSender(),{value:o.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{"show all":async()=>[await a.send(n,{value:o.toNano(1)},"show all")]},getters:{result:async()=>await a.getResult()},prev:g(import.meta.url).prev,next:g(import.meta.url).next},i),[]}class K extends y{constructor(e){super(),C(this,e,D,null,m,{})}}export{K as default};
