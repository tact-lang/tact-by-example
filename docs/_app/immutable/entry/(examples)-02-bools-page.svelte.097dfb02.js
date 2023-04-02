var y=Object.defineProperty;var p=(n,e,t)=>e in n?y(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var A=(n,e,t)=>(p(n,typeof e!="symbol"?e+"":e,t),t);import{S as f,i as B,s as m,I as b,ac as C}from"../chunks/index.9fe14626.js";import{d as r,g,s as d}from"../chunks/store.380869d4.js";import{d as I}from"../chunks/index.b268dd33.js";const h="# Bools\n\nThis primitive data type can hold the values `true` or `false`.\n\n`Bool` is convenient for boolean and logical operations. It is also useful for storing flags.\n\nThe only supported operations with booleans are `&&` `||` `!` - if you try to add them, for example, the code will not compile.\n\n## State costs\n\nPersisting bools to state is very space-efficient, they only take 1-bit. Storing 1000 bools in state [costs](https://ton.org/docs/develop/smart-contracts/fees#how-to-calculate-fees) about 0.00072 TON per year.",D=`import "@stdlib/deploy";

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
}`;function Q(n){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(n.queryId,64)}}async function u(){const n=r.Cell.fromBase64("te6ccgECEgEAAvIAART/APSkE/S88sgLAQIBYgIDA9TQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GLtRNDUAfhj0gABmtIA0gDSAFUgbBOOjjD4KNcLCoMJuvLgids84lUS2zwwEAQFAgEgDg8CmO2i7ftwIddJwh+VMCDXCx/eApJbf+AhghCUapi2uo6jMdMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8nbPH/gAcAAkTDjDXAGBwAsyPhDAcx/AcoAVSBQI8oAygDKAMntVAEaf/hCcFgDgEIBbW3bPAgEsvkBIILwMkLMZZUvBdmwfSssqtkWOKNByOHyU8I41N5guQv9c0q6j40wIts8Ids8INs8f9sx4ILwrpsV8NUOlRZO9nf+vFel+a43mzrPchtpSkgsd9tlw9W6DQ0NCgHOyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WUAP6AnABymgjbrMlbrOxlzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AAkAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwBEI6F2zx/2zHgCwQmf9s8UyGwIbOx2zwiwP/bPFMhug0NDQwCDts8UyG92zwNDQAsmYtHRydWWP4UMJqLVmYWxzZY/hQw4gJVv3KXaiaGoA/DHpAADNaQBpAGkAKpA2CcdHGHwUa4WFQYTdeXBE7Z5xbZ5BARALm93owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwTgN6k73yqLLeOOp6e8CrOGTQThOy6ctWadluZ0HSzbKM3RSQABn9wfwACWw=="),e=r.Cell.fromBase64("te6cckECFAEAAvwAAQHAAQEFoN59AgEU/wD0pBP0vPLICwMCAWIIBAIBIAYFALm93owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwTgN6k73yqLLeOOp6e8CrOGTQThOy6ctWadluZ0HSzbKM3RSQCVb9yl2omhqAPwx6QAAzWkAaQBpACqQNgnHRxh8FGuFhUGE3XlwRO2ecW2eQTBwACWwPU0AHQ0wMBcbDAAZF/kXDiAfpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiVRQUwNvBPhhAvhi7UTQ1AH4Y9IAAZrSANIA0gBVIGwTjo4w+CjXCwqDCbry4InbPOJVEts8MBMKCQAsyPhDAcx/AcoAVSBQI8oAygDKAMntVAKY7aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEJRqmLa6jqMx0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yds8f+ABwACRMOMNcBALBLL5ASCC8DJCzGWVLwXZsH0rLKrZFjijQcjh8lPCONTeYLkL/XNKuo+NMCLbPCHbPCDbPH/bMeCC8K6bFfDVDpUWTvZ3/rxXpfmuN5s6z3IbaUpILHfbZcPVug8PDwwBEI6F2zx/2zHgDQQmf9s8UyGwIbOx2zwiwP/bPFMhug8PDw4CDts8UyG92zwPDwAsmYtHRydWWP4UMJqLVmYWxzZY/hQw4gEaf/hCcFgDgEIBbW3bPBEBzshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFlAD+gJwAcpoI26zJW6zsZczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wASAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAAZ/cH/lu+BV");let t=r.beginCell();t.storeRef(e),t.storeUint(0,1);const a=t.endCell();return{code:n,data:a}}const v={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class i{constructor(e,t){A(this,"address");A(this,"init");A(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]}],errors:v});this.address=e,this.init=t}static async init(){return await u()}static async fromInit(){const e=await u(),t=r.contractAddress(0,e);return new i(t,e)}static fromAddress(e){return new i(e)}async send(e,t,a,s){let o=null;if(s==="show all"&&(o=r.beginCell().storeUint(0,32).storeStringTail(s).endCell()),s==="show ops"&&(o=r.beginCell().storeUint(0,32).storeStringTail(s).endCell()),s&&typeof s=="object"&&!(s instanceof r.Slice)&&s.$$type==="Deploy"&&(o=r.beginCell().store(Q(s)).endCell()),o===null)throw new Error("Invalid message type");await e.internal(t,{...a,body:o})}async getResult(e){let t=new r.TupleBuilder;return(await e.get("result",t.build())).stack.readBoolean()}}function H(n,e,t){let a;b(n,d,l=>t(2,a=l));let s,o;return C(d,a={markdown:h,tactCode:D,deploy:async()=>{const l=await I.Blockchain.create(),c=await l.treasury("deployer");s=c.getSender(),o=l.openContract(await i.fromInit());const w={[c.address.toString()]:"deployer",[o.address.toString()]:"contract"};return[[o],w,[await o.send(c.getSender(),{value:r.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{"show all":async()=>[await o.send(s,{value:r.toNano(1)},"show all")],"show ops":async()=>[await o.send(s,{value:r.toNano(1)},"show ops")]},getters:{result:async()=>await o.getResult()},prev:g(import.meta.url).prev,next:g(import.meta.url).next},a),[]}class N extends f{constructor(e){super(),B(this,e,H,null,m,{})}}export{N as default};
