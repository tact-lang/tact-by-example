var y=Object.defineProperty;var B=(o,e,s)=>e in o?y(o,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[e]=s;var A=(o,e,s)=>(B(o,typeof e!="symbol"?e+"":e,s),s);import{S as f,i as p,s as b,I as m,ac as C}from"../chunks/index.9fe14626.js";import{d as r,g,s as d}from"../chunks/store.cab86f52.js";import{d as I}from"../chunks/index.f166c76f.js";const h="# Bools\n\nThis primitive data type can hold the values `true` or `false`.\n\n`Bool` is convenient for boolean and logical operations. It is also useful for storing flags.\n\nPersisting bools to state is very space-efficient, they only take 1 bit.",D=`import "@stdlib/deploy";

contract Bools with Deployable {
 
    // contract persistent state variables
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

    get fun result(): Bool {
        return self.b1;
    }
}`;function Q(o){return e=>{let s=e;s.storeUint(2490013878,32),s.storeUint(o.queryId,64)}}async function u(){const o=r.Cell.fromBase64("te6ccgECEgEAAvIAART/APSkE/S88sgLAQIBYgIDA9TQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GLtRNDUAfhj0gABmtIA0gDSAFUgbBOOjjD4KNcLCoMJuvLgids84lUS2zwwEAQFAgEgDg8CmO2i7ftwIddJwh+VMCDXCx/eApJbf+AhghCUapi2uo6jMdMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8nbPH/gAcAAkTDjDXAGBwAsyPhDAcx/AcoAVSBQI8oAygDKAMntVAEaf/hCcFgDgEIBbW3bPAgEsvkBIILwMkLMZZUvBdmwfSssqtkWOKNByOHyU8I41N5guQv9c0q6j40wIts8Ids8INs8f9sx4ILwrpsV8NUOlRZO9nf+vFel+a43mzrPchtpSkgsd9tlw9W6DQ0NCgHOyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WUAP6AnABymgjbrMlbrOxlzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AAkAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwBEI6F2zx/2zHgCwQmf9s8UyGwIbOx2zwiwP/bPFMhug0NDQwCDts8UyG92zwNDQAsmYtHRydWWP4UMJqLVmYWxzZY/hQw4gJVv3KXaiaGoA/DHpAADNaQBpAGkAKpA2CcdHGHwUa4WFQYTdeXBE7Z5xbZ5BARALm93owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwTgN6k73yqLLeOOp6e8CrOGTQThOy6ctWadluZ0HSzbKM3RSQABn9wfwACWw=="),e=r.Cell.fromBase64("te6cckECFAEAAvwAAQHAAQEFoN59AgEU/wD0pBP0vPLICwMCAWIIBAIBIAYFALm93owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwTgN6k73yqLLeOOp6e8CrOGTQThOy6ctWadluZ0HSzbKM3RSQCVb9yl2omhqAPwx6QAAzWkAaQBpACqQNgnHRxh8FGuFhUGE3XlwRO2ecW2eQTBwACWwPU0AHQ0wMBcbDAAZF/kXDiAfpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiVRQUwNvBPhhAvhi7UTQ1AH4Y9IAAZrSANIA0gBVIGwTjo4w+CjXCwqDCbry4InbPOJVEts8MBMKCQAsyPhDAcx/AcoAVSBQI8oAygDKAMntVAKY7aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEJRqmLa6jqMx0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yds8f+ABwACRMOMNcBALBLL5ASCC8DJCzGWVLwXZsH0rLKrZFjijQcjh8lPCONTeYLkL/XNKuo+NMCLbPCHbPCDbPH/bMeCC8K6bFfDVDpUWTvZ3/rxXpfmuN5s6z3IbaUpILHfbZcPVug8PDwwBEI6F2zx/2zHgDQQmf9s8UyGwIbOx2zwiwP/bPFMhug8PDw4CDts8UyG92zwPDwAsmYtHRydWWP4UMJqLVmYWxzZY/hQw4gEaf/hCcFgDgEIBbW3bPBEBzshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFlAD+gJwAcpoI26zJW6zsZczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wASAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAAZ/cH/lu+BV");let s=r.beginCell();s.storeRef(e),s.storeUint(0,1);const a=s.endCell();return{code:o,data:a}}const H={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class i{constructor(e,s){A(this,"address");A(this,"init");A(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]}],errors:H});this.address=e,this.init=s}static async init(){return await u()}static async fromInit(){const e=await u(),s=r.contractAddress(0,e);return new i(s,e)}static fromAddress(e){return new i(e)}async send(e,s,a,t){let n=null;if(t==="show all"&&(n=r.beginCell().storeUint(0,32).storeStringTail(t).endCell()),t==="show ops"&&(n=r.beginCell().storeUint(0,32).storeStringTail(t).endCell()),t&&typeof t=="object"&&!(t instanceof r.Slice)&&t.$$type==="Deploy"&&(n=r.beginCell().store(Q(t)).endCell()),n===null)throw new Error("Invalid message type");await e.internal(s,{...a,body:n})}async getResult(e){let s=new r.TupleBuilder;return(await e.get("result",s.build())).stack.readBoolean()}}function v(o,e,s){let a;m(o,d,l=>s(2,a=l));let t,n;return C(d,a={markdown:h,tactCode:D,deploy:async()=>{const l=await I.Blockchain.create(),c=await l.treasury("deployer");t=c.getSender(),n=l.openContract(await i.fromInit());const w={[c.address.toString()]:"deployer",[n.address.toString()]:"contract"};return[[n],w,[await n.send(c.getSender(),{value:r.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{"show all":async()=>[await n.send(t,{value:r.toNano(1)},"show all")],"show ops":async()=>[await n.send(t,{value:r.toNano(1)},"show ops")]},getters:{result:async()=>await n.getResult()},prev:g(import.meta.url).prev,next:g(import.meta.url).next},a),[]}class N extends f{constructor(e){super(),p(this,e,v,null,b,{})}}export{N as default};
