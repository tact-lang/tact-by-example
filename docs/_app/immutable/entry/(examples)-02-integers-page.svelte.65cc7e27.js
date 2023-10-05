var m=Object.defineProperty;var u=(n,e,t)=>e in n?m(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var l=(n,e,t)=>(u(n,typeof e!="symbol"?e+"":e,t),t);import{S as f,i as b,s as w,I,ac as B}from"../chunks/index.9fe14626.js";import{d as i,g as d,s as p}from"../chunks/store.476c3091.js";import{d as C}from"../chunks/index.c056099e.js";const h=`# Integers

Tact supports a number of primitive data types that are tailored for smart contract use.

\`Int\` is the primary number type. Math in smart contracts is always done with integers and never with floating points since floats are [unpredictable](https://learn.microsoft.com/en-us/cpp/build/why-floating-point-numbers-may-lose-precision).

The runtime type \`Int\` is *always* 257-bit signed, so all runtime calculations are done at 257-bit. This should be large enough for pretty much anything you need as it's large enough to hold the number of atoms in the universe.

Persistent state variables can be initialized inline or inside \`init()\`. If you forget to initialize a state variable, the code will not compile.

## State costs

When encoding \`Int\` to persistent state, we will usually use smaller representations than 257-bit to reduce storage cost. The persistent state size is specified in every declaration of a state variable after the \`as\` keyword.

Storing 1000 257-bit integers in state [costs](https://ton.org/docs/develop/smart-contracts/fees#how-to-calculate-fees) about 0.184 TON per year. Storing 1000 32-bit integers only costs 0.023 TON per year by comparison.`,D=`import "@stdlib/deploy";

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
        self.i2 = 0x83dfd552e63729b472fcbcc8c45ebcc6691702558b68ec7527e1ba403a0f31a8; // we can define numbers in hex (base 16)
        self.i4 = 1507998500293440234999; // we can define numbers in decimal (base 10)
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
}`;function M(n){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(n.queryId,64)}}async function y(){const n=i.Cell.fromBase64("te6ccgECFgEABAEAART/APSkE/S88sgLAQIBYgIDAvjQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVHds88uCCyPhDAcx/AcoAVdBQ3oEBAc8AG8v/Gcr/F8t/BcjKf1AE+gISyz/KP8sfEsofEssPEsoPEssHEsoHyQHMye1UDwQCASANDgKg7aLt+wGSMH/gcCHXScIflTAg1wsf3iCCEJRqmLa6jqgw0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yfhCAXBt2zx/4MAAkTDjDXAFBgE6bW0ibrOZWyBu8tCAbyIBkTLiECRwAwSAQlAj2zwHAVr5AYLwMkLMZZUvBdmwfSssqtkWOKNByOHyU8I41N5guQv9c0q6joXbPH/bMeAJAcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AAgAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwEJi3bPP4UMCzbPP4UMCvbPP4UMCoMDAwKBCTbPP4UMCnbPP4UMCjbPP4UMCcMDAwLAhbbPP4UMCbbPP4UMAwMAN7IIcEAmIAtAcsHAaMB3iGCODJ8snNBGdO3qaoduY4gcCBxjhQEeqkMpjAlqBKgBKoHAqQhwABFMOYwM6oCzwGOK28AcI4RI3qpCBJvjAGkA3qpBCDAABTmMyKlA5xTAm+BpjBYywcCpVnkMDHiydACEb9yltnm2eNnDA8QAgEgEhMBkO1E0NQB+GPSAAGOLYEBAdcA0//S/9N/1AHQ0n/6ANM/0j/TH9If0w/SD9MH0gcwEK4QrRCsEKtsHuAw+CjXCwqDCbry4InbPBEAAi0AooELuYARgRxKgf81cFRwAFMAgvCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqAkIgjhRv67mTGRM5feCEDuaygBQmIIQSVBPgAhVMwC5u70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIAgFIFBUAEbCvu1E0NIAAYAB1sm7jQ1aXBmczovL1FtVXVXQVlHVnRpY040UzJnNGdGdUVXWWQ0ekpjbVNmVXN6YVNCWlVYRmY1NTeCA="),e=i.Cell.fromBase64("te6cckECGAEABAsAAQHAAQEFoB6tAgEU/wD0pBP0vPLICwMCAWIMBAIBIAoFAgEgCQYCAUgIBwB1sm7jQ1aXBmczovL1FtVXVXQVlHVnRpY040UzJnNGdGdUVXWWQ0ekpjbVNmVXN6YVNCWlVYRmY1NTeCAAEbCvu1E0NIAAYAC5u70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIAhG/cpbZ5tnjZwwWCwACLQL40AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8VR3bPPLggsj4QwHMfwHKAFXQUN6BAQHPABvL/xnK/xfLfwXIyn9QBPoCEss/yj/LHxLKHxLLDxLKDxLLBxLKB8kBzMntVBYNAqDtou37AZIwf+BwIddJwh+VMCDXCx/eIIIQlGqYtrqOqDDTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J+EIBcG3bPH/gwACRMOMNcBMOAVr5AYLwMkLMZZUvBdmwfSssqtkWOKNByOHyU8I41N5guQv9c0q6joXbPH/bMeAPBCYt2zz+FDAs2zz+FDAr2zz+FDAqEhISEAQk2zz+FDAp2zz+FDAo2zz+FDAnEhISEQIW2zz+FDAm2zz+FDASEgDeyCHBAJiALQHLBwGjAd4hgjgyfLJzQRnTt6mqHbmOIHAgcY4UBHqpDKYwJagSoASqBwKkIcAARTDmMDOqAs8BjitvAHCOESN6qQgSb4wBpAN6qQQgwAAU5jMipQOcUwJvgaYwWMsHAqVZ5DAx4snQATptbSJus5lbIG7y0IBvIgGRMuIQJHADBIBCUCPbPBQByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsAFQCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAGQ7UTQ1AH4Y9IAAY4tgQEB1wDT/9L/03/UAdDSf/oA0z/SP9Mf0h/TD9IP0wfSBzAQrhCtEKwQq2we4DD4KNcLCoMJuvLgids8FwCigQu5gBGBHEqB/zVwVHAAUwCC8IPf1VLmNym0cvy8yMRevMZpFwJVi2jsdSfhukA6DzGoCQiCOFG/ruZMZEzl94IQO5rKAFCYghBJUE+ACFUzp0c78Q==");let t=i.beginCell();t.storeRef(e),t.storeUint(0,1);const o=t.endCell();return{code:n,data:o}}const k={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}},Q=[{name:"StateInit",header:null,fields:[{name:"code",type:{kind:"simple",type:"cell",optional:!1}},{name:"data",type:{kind:"simple",type:"cell",optional:!1}}]},{name:"Context",header:null,fields:[{name:"bounced",type:{kind:"simple",type:"bool",optional:!1}},{name:"sender",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"raw",type:{kind:"simple",type:"slice",optional:!1}}]},{name:"SendParameters",header:null,fields:[{name:"bounce",type:{kind:"simple",type:"bool",optional:!1}},{name:"to",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"mode",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"body",type:{kind:"simple",type:"cell",optional:!0}},{name:"code",type:{kind:"simple",type:"cell",optional:!0}},{name:"data",type:{kind:"simple",type:"cell",optional:!0}}]},{name:"Deploy",header:2490013878,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"DeployOk",header:2952335191,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"FactoryDeploy",header:1829761339,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}},{name:"cashback",type:{kind:"simple",type:"address",optional:!1}}]}],v=[{name:"result",arguments:[],returnType:{kind:"simple",type:"int",optional:!1,format:257}}],H=[{receiver:"internal",message:{kind:"text",text:"show all"}},{receiver:"internal",message:{kind:"typed",type:"Deploy"}}];class A{constructor(e,t){l(this,"address");l(this,"init");l(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"FactoryDeploy",header:1829761339,fields:[]}],types:Q,getters:v,receivers:H,errors:k});this.address=e,this.init=t}static async init(){return await y()}static async fromInit(){const e=await y(),t=i.contractAddress(0,e);return new A(t,e)}static fromAddress(e){return new A(e)}async send(e,t,o,s){let a=null;if(s==="show all"&&(a=i.beginCell().storeUint(0,32).storeStringTail(s).endCell()),s&&typeof s=="object"&&!(s instanceof i.Slice)&&s.$$type==="Deploy"&&(a=i.beginCell().store(M(s)).endCell()),a===null)throw new Error("Invalid message type");await e.internal(t,{...o,body:a})}async getResult(e){let t=new i.TupleBuilder;return(await e.get("result",t.build())).stack.readBigNumber()}}function E(n,e,t){let o;I(n,p,r=>t(2,o=r));let s,a;return B(p,o={markdown:h,tactCode:D,deploy:async()=>{const r=await C.Blockchain.create(),c=await r.treasury("deployer");s=c.getSender(),a=r.openContract(await A.fromInit());const g={[c.address.toString()]:"deployer",[a.address.toString()]:"contract"};return[[a],g,[await a.send(c.getSender(),{value:i.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{"show all":async()=>[await a.send(s,{value:i.toNano(1)},"show all")]},getters:{result:async()=>await a.getResult()},prev:d(import.meta.url).prev,next:d(import.meta.url).next},o),[]}class N extends f{constructor(e){super(),b(this,e,E,null,w,{})}}export{N as default};
