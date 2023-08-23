var f=Object.defineProperty;var m=(a,e,t)=>e in a?f(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var r=(a,e,t)=>(m(a,typeof e!="symbol"?e+"":e,t),t);import{S as h,i as y,s as A,I as b,ac as w}from"../chunks/index.9fe14626.js";import{d as s,g as p,s as d}from"../chunks/store.96cf5894.js";import{d as B}from"../chunks/index.7100d5a9.js";const I=`# Bitwise Operations

The Tact language also supports bitwise operations, which involve manipulating one or more bit patterns or binary numerals at the level of their individual bits. These are fundamental operations that are performed at the binary level. The most common bitwise operations supported in Tact are:

1. **AND** (\`&\`): Takes two numbers as operands and performs a logical AND on every pair of corresponding bits. The result in each position is 1 if the corresponding bits of both numbers are 1.

2. **OR** (\`|\`): Takes two numbers as operands and performs a logical OR on every pair of corresponding bits. The result in each position is 1 if at least one corresponding bit of either number is 1.

3. **Left Shift** (\`<<\`): Shifts the bits of a number to the left a specified number of positions. This has the effect of multiplying the number by 2 for every position the bits are shifted.

4. **Right Shift** (\`>>\`): Shifts the bits of a number to the right a specified number of positions. This has the effect of dividing the number by 2 for every position the bits are shifted.

Unfortunately, Tact doesn't support XOR or NOT operations at this moment. 





### *Exapnd: "<<" and ">>"

The left shift (\`<<\`) and right shift (\`>>\`) operators shift the bits of a number to the left or right by a specified number of positions. Here's why the code lines you provided output the values 10 and 2:

1. **Left Shift** (\`<<\`): When you shift the bits of 5 (\`0101\` in binary) to the left by 1 position, you get \`1010\`, which is 10 in decimal. In mathematical terms, a left shift by 1 position is equivalent to multiplying the number by \\(2^1 = 2\\), so \\(5 \\times 2 = 10\\).

   \`\`\`
   5 << 1 = 0101 << 1 = 1010 (in binary) = 10 (in decimal)
   \`\`\`

2. **Right Shift** (\`>>\`): When you shift the bits of 5 (\`0101\` in binary) to the right by 1 position, you get \`0010\`, which is 2 in decimal. In mathematical terms, a right shift by 1 position is equivalent to dividing the number by \\(2^1 = 2\\), so \\(5 / 2 = 2\\).

   \`\`\`
   5 >> 1 = 0101 >> 1 = 0010 (in binary) = 2 (in decimal)
   \`\`\`

In the left shift operation, you are essentially pushing the bits one position to the left and filling the empty position with a 0. In the right shift operation, you are pushing the bits one position to the right, discarding the rightmost bit and filling the empty position with a 0.

These shifting operations can be highly efficient in programming, as they allow quick multiplication or division by powers of 2 without performing the actual arithmetic operations.`,C=`contract BitWiseOperation {
    a: Bool;
    b: Bool;
    c: Int;
    d: Int;

    init() {
        self.a = true;
        self.b = false;
        self.c = 5;
        self.d = 3;
    }

    get fun Bool_and(): Bool {
        return self.a && self.b; // Will get false
    }

    get fun int_and(): Int {
        return self.c & self.d; // Will get 1
    }

    get fun int_or(): Int {
        return self.c | self.d; // Will get 7
    }

    get fun int_left_shift(): Int {
        return self.c << 1; // Will get 10
    }

    get fun int_right_shift(): Int {
        return self.c >> 1; // Will get 2
    }

    // TODO: Will show up in the nearly future maybe
    // get fun int_xor(): Int {
    //     return self.c ^ self.d; // Will get 6
    // }

    // get fun int_not(): Int {
    //     return ~self.c; // Will get -6
    // }
}

`;async function g(){const a=s.Cell.fromBase64("te6ccgECGgEAAdkAART/APSkE/S88sgLAQIBYgIDArbQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVE9s88uCCyPhDAcx/AcoAVTBQNMoAygCBAQHPAIEBAc8Aye1UFwQCASAFBgAaAZIwf+Ag10kxwh8wcAIBIAcIAgEgDg8CEbn07bPNs8bEGBcJAgEgCgsABiGrAAIRtDwbZ5tnjYgwFwwCEbfGm2ebZ42IMBcNAAwjkSKRcOIABFyxAgFYEBECAUgTFAIRs2v2zzbPGxBgFxIAubL0YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIAAGIaoAABGwr7tRNDSAAGACAWoVFgBzp3caGrS4MzmdF5eotrKYsjw0KjepqywhMrCppCYbma0iu7eiJC0muZy1JDy5saQquzMnNyoZpZkrwQIPpMm2ebZ42IMXGAFa7UTQ1AH4Y9IAAY4S0gDSAIEBAdcAgQEB1wBVMGwU4DD4KNcLCoMJuvLgids8GQAEXLAACH9wdXM="),e=s.Cell.fromBase64("te6cckECHAEAAeMAAQHAAQEFoYftAgEU/wD0pBP0vPLICwMCAWIYBAIBIBAFAgEgDAYCAUgLBwIBagoIAg+kybZ5tnjYgxoJAARcsABzp3caGrS4MzmdF5eotrKYsjw0KjepqywhMrCppCYbma0iu7eiJC0muZy1JDy5saQquzMnNyoZpZkrwQARsK+7UTQ0gABgAgFYDg0AubL0YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIAIRs2v2zzbPGxBgGg8ABiGqAAIBIBYRAgEgFBICEbfGm2ebZ42IMBoTAARcsQIRtDwbZ5tnjYgwGhUADCORIpFw4gIRufTts82zxsQYGhcABiGrAAK20AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8VRPbPPLggsj4QwHMfwHKAFUwUDTKAMoAgQEBzwCBAQHPAMntVBoZABoBkjB/4CDXSTHCHzBwAVrtRNDUAfhj0gABjhLSANIAgQEB1wCBAQHXAFUwbBTgMPgo1wsKgwm68uCJ2zwbAAh/cHVziIPf+w==");let t=s.beginCell();t.storeRef(e),t.storeUint(0,1);const i=t.endCell();return{code:a,data:i}}const v={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}},k=[{name:"StateInit",header:null,fields:[{name:"code",type:{kind:"simple",type:"cell",optional:!1}},{name:"data",type:{kind:"simple",type:"cell",optional:!1}}]},{name:"Context",header:null,fields:[{name:"bounced",type:{kind:"simple",type:"bool",optional:!1}},{name:"sender",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"raw",type:{kind:"simple",type:"slice",optional:!1}}]},{name:"SendParameters",header:null,fields:[{name:"bounce",type:{kind:"simple",type:"bool",optional:!1}},{name:"to",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"mode",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"body",type:{kind:"simple",type:"cell",optional:!0}},{name:"code",type:{kind:"simple",type:"cell",optional:!0}},{name:"data",type:{kind:"simple",type:"cell",optional:!0}}]}],S=[{name:"Bool_and",arguments:[],returnType:{kind:"simple",type:"bool",optional:!1}},{name:"int_and",arguments:[],returnType:{kind:"simple",type:"int",optional:!1,format:257}},{name:"int_or",arguments:[],returnType:{kind:"simple",type:"int",optional:!1,format:257}},{name:"int_left_shift",arguments:[],returnType:{kind:"simple",type:"int",optional:!1,format:257}},{name:"int_right_shift",arguments:[],returnType:{kind:"simple",type:"int",optional:!1,format:257}}],T=[];class l{constructor(e,t){r(this,"address");r(this,"init");r(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]}],types:k,getters:S,receivers:T,errors:v});this.address=e,this.init=t}static async init(){return await g()}static async fromInit(){const e=await g(),t=s.contractAddress(0,e);return new l(t,e)}static fromAddress(e){return new l(e)}async send(e,t,i,n){let o=null;if(n===null&&(o=new s.Cell),o===null)throw new Error("Invalid message type");await e.internal(t,{...i,body:o})}async getBoolAnd(e){let t=new s.TupleBuilder;return(await e.get("Bool_and",t.build())).stack.readBoolean()}async getIntAnd(e){let t=new s.TupleBuilder;return(await e.get("int_and",t.build())).stack.readBigNumber()}async getIntOr(e){let t=new s.TupleBuilder;return(await e.get("int_or",t.build())).stack.readBigNumber()}async getIntLeftShift(e){let t=new s.TupleBuilder;return(await e.get("int_left_shift",t.build())).stack.readBigNumber()}async getIntRightShift(e){let t=new s.TupleBuilder;return(await e.get("int_right_shift",t.build())).stack.readBigNumber()}}function _(a,e,t){let i;b(a,d,o=>t(2,i=o));let n;return w(d,i={markdown:I,tactCode:C,deploy:async()=>{const o=await B.Blockchain.create(),u=await o.treasury("deployer");u.getSender(),n=o.openContract(await l.fromInit());const c={[u.address.toString()]:"deployer",[n.address.toString()]:"contract"};return[[n],c,[await n.send(u.getSender(),{value:s.toNano(1)},null)]]},messages:{},getters:{counter:async()=>await n.getBoolAnd(),location:async()=>await n.getIntAnd(),greeting:async()=>await n.getIntOr(),"sum(3,4)":async()=>await n.getIntLeftShift(),"and(true,false)":async()=>await n.getIntRightShift()},prev:p(import.meta.url).prev,next:p(import.meta.url).next},i),[]}class O extends h{constructor(e){super(),y(this,e,_,null,A,{})}}export{O as default};
