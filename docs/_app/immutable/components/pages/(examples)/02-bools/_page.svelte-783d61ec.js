import{S as d,i as w,s as B,I as b,ac as y}from"../../../../chunks/index-1d4083c1.js";import{d as o,s as c}from"../../../../chunks/store-ab11a47e.js";import{d as f,g}from"../../../../chunks/helpers-be3eeda0.js";const C="# Bools\n\nThis primitive data type can hold the values `true` or `false`.\n\n`Bool` is convenient for boolean and logical operations. It is also useful for storing flags.\n\nPersisting bools to state is very space-efficient, they only take 1 bit.",I=`import "@stdlib/deploy";

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

    get fun result(): Bool {
        return self.b1;
    }
}`;function p(r){return e=>{let s=e;s.storeUint(2490013878,32),s.storeUint(r.queryId,64)}}async function u(){const r=o.Cell.fromBase64("te6ccgECEQEAAvEAART/APSkE/S88sgLAQIBYgIDAvjQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJIkFVbwT4Ye1E0NQB+GLSAAGa0gDSANIAVSBsE46OMPgo1wsKgwm68uCJ2zziVRLbPDDI+EIBzH8BygBVIFAjygDKAMoAye1UDwQCASANDgKY7aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEJRqmLa6jqMx0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yds8f+ABwACRMOMNcAUGASb4QW8kECNfA39wUAOAQgFtbds8BwSy+QEggvAyQsxllS8F2bB9Kyyq2RY4o0HI4fJTwjjU3mC5C/1zSrqPjTAi2zwh2zwg2zx/2zHggvCumxXw1Q6VFk72d/68V6X5rjebOs9yG2lKSCx322XD1boMDAwJAc7IcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxZQA/oCcAHKaCNusyVus7GXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsACACYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAEQjoXbPH/bMeAKBCZ/2zxTIbAhs7HbPCLA/9s8UyG6DAwMCwIO2zxTIb3bPAwMACyZi0dHJ1ZY/hQwmotWZhbHNlj+FDDiAlW/cpdqJoagD8MWkAAM1pAGkAaQAqkDYJx0cYfBRrhYVBhN15cETtnnFtnkDxAAub3ejBOC52Hq6WVz2PQnYc6yVCjbNBOE7rGpaVsj5ZkWnXlv74sRzBOBAq4A3AM7HKZywdVyOS2WHBOA3qTvfKost446np7wKs4ZNBOE7Lpy1Zp2W5nQdLNsozdFJAAGf3B/AAJb"),e=o.Cell.fromBase64("te6cckECEwEAAvsAAQHAAQEFoN59AgEU/wD0pBP0vPLICwMCAWIIBAIBIAYFALm93owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwTgN6k73yqLLeOOp6e8CrOGTQThOy6ctWadluZ0HSzbKM3RSQCVb9yl2omhqAPwxaQAAzWkAaQBpACqQNgnHRxh8FGuFhUGE3XlwRO2ecW2eQSBwACWwL40AHQ0wMBcbDAAZF/kXDiAfpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiSJBVW8E+GHtRNDUAfhi0gABmtIA0gDSAFUgbBOOjjD4KNcLCoMJuvLgids84lUS2zwwyPhCAcx/AcoAVSBQI8oAygDKAMntVBIJApjtou37cCHXScIflTAg1wsf3gKSW3/gIYIQlGqYtrqOozHTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J2zx/4AHAAJEw4w1wDwoEsvkBIILwMkLMZZUvBdmwfSssqtkWOKNByOHyU8I41N5guQv9c0q6j40wIts8Ids8INs8f9sx4ILwrpsV8NUOlRZO9nf+vFel+a43mzrPchtpSkgsd9tlw9W6Dg4OCwEQjoXbPH/bMeAMBCZ/2zxTIbAhs7HbPCLA/9s8UyG6Dg4ODQIO2zxTIb3bPA4OACyZi0dHJ1ZY/hQwmotWZhbHNlj+FDDiASb4QW8kECNfA39wUAOAQgFtbds8EAHOyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WUAP6AnABymgjbrMlbrOxlzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7ABEAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwABn9wf93Swuw=");let s=o.beginCell();s.storeRef(e),s.storeUint(0,1);const A=s.endCell();return{code:r,data:A}}const m={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class l{constructor(e,s){this.abi={errors:m},this.address=e,this.init=s}static async init(){return await u()}static async fromInit(){const e=await u(),s=o.contractAddress(0,e);return new l(s,e)}static fromAddress(e){return new l(e)}async send(e,s,A,t){let n=null;if(t==="show all"&&(n=o.beginCell().storeUint(0,32).storeStringTail(t).endCell()),t==="show ops"&&(n=o.beginCell().storeUint(0,32).storeStringTail(t).endCell()),t&&typeof t=="object"&&!(t instanceof o.Slice)&&t.$$type==="Deploy"&&(n=o.beginCell().store(p(t)).endCell()),n===null)throw new Error("Invalid message type");await e.internal(s,{...A,body:n})}async getResult(e){let s=new o.TupleBuilder;return(await e.get("result",s.build())).stack.readBoolean()}}function H(r,e,s){let A;b(r,c,a=>s(2,A=a));let t,n;return y(c,A={markdown:C,tactCode:I,deploy:async()=>{const a=await f.Blockchain.create(),i=await a.treasury("deployer");return t=i.getSender(),n=a.openContract(await l.fromInit()),[await n.send(i.getSender(),{value:o.toNano(1)},{$$type:"Deploy",queryId:0n})]},messages:{"show all":async()=>[await n.send(t,{value:o.toNano(1)},"show all")],"show ops":async()=>[await n.send(t,{value:o.toNano(1)},"show ops")]},getters:{result:async()=>await n.getResult()},prev:g(import.meta.url).prev,next:g(import.meta.url).next},A),[]}class v extends d{constructor(e){super(),w(this,e,H,null,B,{})}}export{v as default};
