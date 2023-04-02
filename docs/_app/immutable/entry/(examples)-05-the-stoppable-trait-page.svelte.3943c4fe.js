var C=Object.defineProperty;var B=(a,e,t)=>e in a?C(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var l=(a,e,t)=>(B(a,typeof e!="symbol"?e+"":e,t),t);import{S as p,i as I,s as y,I as b,ac as m}from"../chunks/index.9fe14626.js";import{d as o,g as c,s as d}from"../chunks/store.380869d4.js";import{d as h}from"../chunks/index.b268dd33.js";const f=`# The Stoppable Trait

Tact allows you to add common boilerplate behaviors to your contract by using traits.

The Stoppable trait allows the contract to allow an \`owner\` role to stop the contract.

Consider for example a protocol where users can deposit funds, like a staking service or a compounding vault. If somebody discovers a security issue, we may want to stop the contract from accepting funds from new users.

Note that this trait doesn't allow to resume the contract after it has been stopped.

This trait implicitly adds the Ownable trait. Note that the Ownable trait doesn't allow the owner to transfer ownership to a different owner. To allow changing ownership, also add the \`OwnableTransferable\` trait.

## How to use Stoppable

Define state variables named \`owner: Address\` and \`stopped: Bool\` and call \`self.requireNotStopped()\` on actions that should be stopped.`,D=`// this trait has to be imported
import "@stdlib/stoppable";
import "@stdlib/ownable";
import "@stdlib/deploy";

// the Stoppable trait allows the owner to stop the contract which can limit certain actions
contract Counter with Deployable, Stoppable {

    owner: Address; // The Stoppable trait requires you to add this exact state variable
    stopped: Bool;  // The Stoppable trait requires you to add this exact state variable
    val: Int as uint32;
 
    init() {
        self.owner = sender(); // we can initialize owner to any value we want, the deployer in this case
        self.stopped = false;
        self.val = 0;
    }
 
    // this message will only work until the contract was stopped
    receive("increment") {
        self.requireNotStopped();
        self.val = self.val + 1;
    }
 
    get fun value(): Int {
        return self.val;
    }

    // receive("Stop") is added automatically to allow owner to stop the contract
    // get fun stopped(): Bool is added automatically to query if contract is stopped
    // get fun owner(): Address is added automatically to query who the owner is
}`;function E(a){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(a.queryId,64)}}async function u(){const a=o.Cell.fromBase64("te6ccgECHAEABKsAART/APSkE/S88sgLAQIBYgIDAX7QAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GIEAgEgERIDnu1E0NQB+GPSAAGOLfpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiQHSANMfVSBsE46OMPgo1wsKgwm68uCJ2zziVRLbPDAaBQYCmO2i7ftwIddJwh+VMCDXCx/eApJbf+AhghCUapi2uo6jMdMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8nbPH/gAcAAkTDjDXAOBwBuyPhDAcx/AcoAVSBaINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxYSygDLH8ntVAK2+QEggvDE+NcjEu3971t77HgzvbsWLRURvXipEq7Q8mN69lVyrrqOhzDbPKR/2zHggvC8+vd2kHxxnMjTedjxlKqqJ+jKKHHNWReBch8hWkVFAbqOhds8f9sx4AoIBCLbPNs8MX+LdTdG9wcGVkjbPAkKCwwAEPhCI8cF8uCEABCCAJ2wIrPy9AFCyHAByx9vAAFvjG1vjAHbPG8iAcmTIW6zlgFvIlnMyegxDQEG2zwBDgC6INdKIddJlyDCACLCALGOSgNvIoB/Is8xqwKhBasCUVW2CCDCAJwgqgIV1xhQM88WQBTeWW8CU0GhwgCZyAFvAlBEoaoCjhIxM8IAmdQw0CDXSiHXSZJwIOLi6F8DARp/+EJwWAOAQgFtbds8DwHOyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WUAP6AnABymgjbrMlbrOxlzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7ABAAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwCASATFAIBIBcYAp26F77UTQ1AH4Y9IAAY4t+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJAdIA0x9VIGwTjo4w+CjXCwqDCbry4InbPOLbPIGhUCnbhR3tRNDUAfhj0gABji36QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkB0gDTH1UgbBOOjjD4KNcLCoMJuvLgids84ts8gaFgAEMDEAAlsB3bu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSCcJEwaGam6KQ2fuBHvgVRj4mBkCnbmsDtRNDUAfhj0gABji36QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkB0gDTH1UgbBOOjjD4KNcLCoMJuvLgids84ts8gaGwAkgnBAznVp5xX50lCwHWFuJkeyAAj4QnBwAARsIQ=="),e=o.Cell.fromBase64("te6cckECHgEABLUAAQHAAQEFoendAgEU/wD0pBP0vPLICwMCAWIPBAIBIAoFAgEgCAYCnbmsDtRNDUAfhj0gABji36QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkB0gDTH1UgbBOOjjD4KNcLCoMJuvLgids84ts8gdBwAEbCEB3bu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSCcJEwaGam6KQ2fuBHvgVRj4mAkAJIJwQM51aecV+dJQsB1hbiZHsgIBIA0LAp24Ud7UTQ1AH4Y9IAAY4t+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJAdIA0x9VIGwTjo4w+CjXCwqDCbry4InbPOLbPIHQwAAlsCnboXvtRNDUAfhj0gABji36QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkB0gDTH1UgbBOOjjD4KNcLCoMJuvLgids84ts8gdDgAEMDEBftAB0NMDAXGwwAGRf5Fw4gH6QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IlUUFMDbwT4YQL4YhADnu1E0NQB+GPSAAGOLfpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiQHSANMfVSBsE46OMPgo1wsKgwm68uCJ2zziVRLbPDAdEhEAbsj4QwHMfwHKAFUgWiDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WEsoAyx/J7VQCmO2i7ftwIddJwh+VMCDXCx/eApJbf+AhghCUapi2uo6jMdMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8nbPH/gAcAAkTDjDXAaEwK2+QEggvDE+NcjEu3971t77HgzvbsWLRURvXipEq7Q8mN69lVyrrqOhzDbPKR/2zHggvC8+vd2kHxxnMjTedjxlKqqJ+jKKHHNWReBch8hWkVFAbqOhds8f9sx4BkUBCLbPNs8MX+LdTdG9wcGVkjbPBgZFhUBBts8ARoBQshwAcsfbwABb4xtb4wB2zxvIgHJkyFus5YBbyJZzMnoMRcAuiDXSiHXSZcgwgAiwgCxjkoDbyKAfyLPMasCoQWrAlFVtgggwgCcIKoCFdcYUDPPFkAU3llvAlNBocIAmcgBbwJQRKGqAo4SMTPCAJnUMNAg10oh10mScCDi4uhfAwAQ+EIjxwXy4IQAEIIAnbAis/L0ARp/+EJwWAOAQgFtbds8GwHOyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WUAP6AnABymgjbrMlbrOxlzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7ABwAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwACPhCcHCoyVTK");let t=o.beginCell();t.storeRef(e),t.storeUint(0,1);const r=t.endCell();return{code:a,data:r}}const v={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"},40368:{message:"Contract stopped"},53296:{message:"Contract not stopped"}};class A{constructor(e,t){l(this,"address");l(this,"init");l(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"ChangeOwner",header:256331011,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]}],errors:v});this.address=e,this.init=t}static async init(){return await u()}static async fromInit(){const e=await u(),t=o.contractAddress(0,e);return new A(t,e)}static fromAddress(e){return new A(e)}async send(e,t,r,s){let n=null;if(s==="increment"&&(n=o.beginCell().storeUint(0,32).storeStringTail(s).endCell()),s&&typeof s=="object"&&!(s instanceof o.Slice)&&s.$$type==="Deploy"&&(n=o.beginCell().store(E(s)).endCell()),s==="Stop"&&(n=o.beginCell().storeUint(0,32).storeStringTail(s).endCell()),n===null)throw new Error("Invalid message type");await e.internal(t,{...r,body:n})}async getValue(e){let t=new o.TupleBuilder;return(await e.get("value",t.build())).stack.readBigNumber()}async getStopped(e){let t=new o.TupleBuilder;return(await e.get("stopped",t.build())).stack.readBoolean()}async getOwner(e){let t=new o.TupleBuilder;return(await e.get("owner",t.build())).stack.readAddress()}}function Q(a,e,t){let r;b(a,d,i=>t(2,r=i));let s,n;return m(d,r={markdown:f,tactCode:D,deploy:async()=>{const i=await h.Blockchain.create(),g=await i.treasury("deployer");s=g.getSender(),n=i.openContract(await A.fromInit());const w={[g.address.toString()]:"deployer",[n.address.toString()]:"contract"};return[[n],w,[await n.send(g.getSender(),{value:o.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{increment:async()=>[await n.send(s,{value:o.toNano(1)},"increment")],Stop:async()=>[await n.send(s,{value:o.toNano(1)},"Stop")]},getters:{stopped:async()=>await n.getStopped(),value:async()=>await n.getValue()},prev:c(import.meta.url).prev,next:c(import.meta.url).next},r),[]}class x extends p{constructor(e){super(),I(this,e,Q,null,y,{})}}export{x as default};
