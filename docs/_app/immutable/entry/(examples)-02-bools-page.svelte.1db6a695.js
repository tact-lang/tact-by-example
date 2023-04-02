var p=Object.defineProperty;var y=(n,e,t)=>e in n?p(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var i=(n,e,t)=>(y(n,typeof e!="symbol"?e+"":e,t),t);import{S as f,i as b,s as C,I,ac as m}from"../chunks/index.9fe14626.js";import{d as r,g,s as d}from"../chunks/store.2b42c038.js";import{d as B}from"../chunks/index.9fe59178.js";const h="# Bools\n\nThis primitive data type can hold the values `true` or `false`.\n\n`Bool` is convenient for boolean and logical operations. It is also useful for storing flags.\n\nThe only supported operations with booleans are `&&` `||` `!` - if you try to add them, for example, the code will not compile.\n\n## State costs\n\nPersisting bools to state is very space-efficient, they only take 1-bit. Storing 1000 bools in state [costs](https://ton.org/docs/develop/smart-contracts/fees#how-to-calculate-fees) about 0.00072 TON per year.",D=`import "@stdlib/deploy";

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
}`;function E(n){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(n.queryId,64)}}async function u(){const n=r.Cell.fromBase64("te6ccgECFQEAAxYAART/APSkE/S88sgLAQIBYgIDAqLQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVEts8MMj4QwHMfwHKAFUgUCPKAMoAygDJ7VQOBAIBIAwNAq7tou37cCHXScIflTAg1wsf3gKSW3/gIYIQlGqYtrqOrjHTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/Jf/hCcFgDgEIBbW3bPH/gAcAAkTDjDXAFBgHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAHBLL5ASCC8DJCzGWVLwXZsH0rLKrZFjijQcjh8lPCONTeYLkL/XNKuo+NMCLbPCHbPCDbPH/bMeCC8K6bFfDVDpUWTvZ3/rxXpfmuN5s6z3IbaUpILHfbZcPVugsLCwgAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwBEI6F2zx/2zHgCQQyf9s8IpEhkXDikX+SILPi2zwiwP/bPFMhugsLCwoCDts8UyG92zwLCwAsmYtHRydWWP4UMJqLVmYWxzZY/hQw4gIRv3KW2ebZ42GMDg8CASAREgFI7UTQ1AH4Y9IAAZrSANIA0gBVIGwT4DD4KNcLCoMJuvLgids8EAACIgAGf3B/ALm7vRgnBc7D1dLK57HoTsOdZKhRtmgnCd1jUtK2R8syLTry398WI5gnAgVcAbgGdjlM5YOq5HJbLDgnAb1J3vlUWW8cdT094FWcMmgnCdl05as07LczoOlm2UZuikgCAUgTFAARsK+7UTQ0gABgAHWybuNDVpcGZzOi8vUW1ZQm03VHhEall2dFAxUG5NcnFIVExnNXhQZjZiSFFuTDRuc2U1enl2N05FYoIA=="),e=r.Cell.fromBase64("te6cckECFwEAAyAAAQHAAQEFoN59AgEU/wD0pBP0vPLICwMCAWIMBAIBIAoFAgEgCQYCAUgIBwB1sm7jQ1aXBmczovL1FtWUJtN1R4RGpZdnRQMVBuTXJxSFRMZzV4UGY2YkhRbkw0bnNlNXp5djdORWKCAAEbCvu1E0NIAAYAC5u70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIAhG/cpbZ5tnjYYwVCwACIgKi0AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8VRLbPDDI+EMBzH8BygBVIFAjygDKAMoAye1UFQ0Cru2i7ftwIddJwh+VMCDXCx/eApJbf+AhghCUapi2uo6uMdMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8l/+EJwWAOAQgFtbds8f+ABwACRMOMNcBMOBLL5ASCC8DJCzGWVLwXZsH0rLKrZFjijQcjh8lPCONTeYLkL/XNKuo+NMCLbPCHbPCDbPH/bMeCC8K6bFfDVDpUWTvZ3/rxXpfmuN5s6z3IbaUpILHfbZcPVuhISEg8BEI6F2zx/2zHgEAQyf9s8IpEhkXDikX+SILPi2zwiwP/bPFMhuhISEhECDts8UyG92zwSEgAsmYtHRydWWP4UMJqLVmYWxzZY/hQw4gHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAUAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAUjtRNDUAfhj0gABmtIA0gDSAFUgbBPgMPgo1wsKgwm68uCJ2zwWAAZ/cH8Mqc0Y");let t=r.beginCell();t.storeRef(e),t.storeUint(0,1);const a=t.endCell();return{code:n,data:a}}const H={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class A{constructor(e,t){i(this,"address");i(this,"init");i(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]}],errors:H});this.address=e,this.init=t}static async init(){return await u()}static async fromInit(){const e=await u(),t=r.contractAddress(0,e);return new A(t,e)}static fromAddress(e){return new A(e)}async send(e,t,a,s){let o=null;if(s==="show all"&&(o=r.beginCell().storeUint(0,32).storeStringTail(s).endCell()),s==="show ops"&&(o=r.beginCell().storeUint(0,32).storeStringTail(s).endCell()),s&&typeof s=="object"&&!(s instanceof r.Slice)&&s.$$type==="Deploy"&&(o=r.beginCell().store(E(s)).endCell()),o===null)throw new Error("Invalid message type");await e.internal(t,{...a,body:o})}async getResult(e){let t=new r.TupleBuilder;return(await e.get("result",t.build())).stack.readBoolean()}}function M(n,e,t){let a;I(n,d,l=>t(2,a=l));let s,o;return m(d,a={markdown:h,tactCode:D,deploy:async()=>{const l=await B.Blockchain.create(),c=await l.treasury("deployer");s=c.getSender(),o=l.openContract(await A.fromInit());const w={[c.address.toString()]:"deployer",[o.address.toString()]:"contract"};return[[o],w,[await o.send(c.getSender(),{value:r.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{"show all":async()=>[await o.send(s,{value:r.toNano(1)},"show all")],"show ops":async()=>[await o.send(s,{value:r.toNano(1)},"show ops")]},getters:{result:async()=>await o.getResult()},prev:g(import.meta.url).prev,next:g(import.meta.url).next},a),[]}class S extends f{constructor(e){super(),b(this,e,M,null,C,{})}}export{S as default};
