var C=Object.defineProperty;var B=(r,e,t)=>e in r?C(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var A=(r,e,t)=>(B(r,typeof e!="symbol"?e+"":e,t),t);import{S as I,i as b,s as y,I as p,ac as m}from"../chunks/index.9fe14626.js";import{d as o,g as c,s as d}from"../chunks/store.512f938c.js";import{d as h}from"../chunks/index.ab579dfb.js";const D=`# The Resumable Trait

The Resumable trait is almost identical to the Stoppable trait that we covered in the previous example.

It adds one important feature which is the ability for the owner to resume a stopped contract.

The Stoppable trait by itself may be a little dangerous because the owner cannot change their mind. If you're not sure which trait to use, use this one.

This trait implicitly adds the Ownable and Stoppable traits. Note that the Ownable trait doesn't allow the owner to transfer ownership to a different owner. To allow changing ownership, also add the \`OwnableTransferable\` trait.

## How to use Resumable

Define state variables named \`owner: Address\` and \`stopped: Bool\` and call \`self.requireNotStopped()\` on actions that should be stopped.`,f=`// this trait has to be imported
import "@stdlib/stoppable";
import "@stdlib/ownable";
import "@stdlib/deploy";

// the Resumable trait allows the owner to stop/resume the contract which can limit certain actions
contract Counter with Deployable, Resumable {

    owner: Address; // The Resumable trait requires you to add this exact state variable
    stopped: Bool;  // The Resumable trait requires you to add this exact state variable
    val: Int as uint32;
 
    init() {
        self.owner = sender(); // we can initialize owner to any value we want, the deployer in this case
        self.stopped = false;
        self.val = 0;
    }
 
    // this message will only work as long as the contract is not stopped
    receive("increment") {
        self.requireNotStopped();
        self.val = self.val + 1;
    }
 
    get fun value(): Int {
        return self.val;
    }

    // receive("Resume") is added automatically to allow owner to resume the contract
    // receive("Stop") is added automatically to allow owner to stop the contract
    // get fun stopped(): Bool is added automatically to query if contract is stopped
    // get fun owner(): Address is added automatically to query who the owner is
}`;function E(r){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(r.queryId,64)}}async function u(){const r=o.Cell.fromBase64("te6ccgECHwEABQ4AART/APSkE/S88sgLAQIBYgIDAX7QAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GIEAgEgFBUDnu1E0NQB+GPSAAGOLfpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiQHSANMfVSBsE46OMPgo1wsKgwm68uCJ2zziVRLbPDAdBQYCmO2i7ftwIddJwh+VMCDXCx/eApJbf+AhghCUapi2uo6jMdMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8nbPH/gAcAAkTDjDXARBwBuyPhDAcx/AcoAVSBaINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxYSygDLH8ntVAP++QEggvDE+NcjEu3971t77HgzvbsWLRURvXipEq7Q8mN69lVyrrqOhzDbPKR/2zHgIILwbI9E9F/ttM3+1N6NsUqlsTrVXUMPdZ0GaSELdMSP49+6joYw2zx/2zHggvC8+vd2kHxxnMjTedjxlKqqJ+jKKHHNWReBch8hWkVFAQ0ICQQi2zzbPDFwi3UmVzdW1lZI2zwMCg4PARK6joXbPH/bMeALAA6CANAwIvL0BCLbPNs8MX+LdTdG9wcGVkjbPAwNDg8AEPhCI8cF8uCEABCCAJ2wIrPy9AFCyHAByx9vAAFvjG1vjAHbPG8iAcmTIW6zlgFvIlnMyegxEAEG2zwBEQC6INdKIddJlyDCACLCALGOSgNvIoB/Is8xqwKhBasCUVW2CCDCAJwgqgIV1xhQM88WQBTeWW8CU0GhwgCZyAFvAlBEoaoCjhIxM8IAmdQw0CDXSiHXSZJwIOLi6F8DARp/+EJwWAOAQgFtbds8EgHOyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WUAP6AnABymgjbrMlbrOxlzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7ABMAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwCASAWFwIBIBobAp26F77UTQ1AH4Y9IAAY4t+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJAdIA0x9VIGwTjo4w+CjXCwqDCbry4InbPOLbPIHRgCnbhR3tRNDUAfhj0gABji36QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkB0gDTH1UgbBOOjjD4KNcLCoMJuvLgids84ts8gdGQAEMDEAAlsB3bu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSCcKPpAvltgVQjou8Eds5r0cuBwCnbmsDtRNDUAfhj0gABji36QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkB0gDTH1UgbBOOjjD4KNcLCoMJuvLgids84ts8gdHgBIgnCRMGhmpuikNn7gR74FUY+JgnBAznVp5xX50lCwHWFuJkeyAAj4QnBwAARsIQ=="),e=o.Cell.fromBase64("te6cckECIQEABRgAAQHAAQEFoendAgEU/wD0pBP0vPLICwMCAWIPBAIBIAoFAgEgCAYCnbmsDtRNDUAfhj0gABji36QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkB0gDTH1UgbBOOjjD4KNcLCoMJuvLgids84ts8ggBwAEbCEB3bu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSCcKPpAvltgVQjou8Eds5r0cuAkASIJwkTBoZqbopDZ+4Ee+BVGPiYJwQM51aecV+dJQsB1hbiZHsgIBIA0LAp24Ud7UTQ1AH4Y9IAAY4t+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJAdIA0x9VIGwTjo4w+CjXCwqDCbry4InbPOLbPIIAwAAlsCnboXvtRNDUAfhj0gABji36QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkB0gDTH1UgbBOOjjD4KNcLCoMJuvLgids84ts8ggDgAEMDEBftAB0NMDAXGwwAGRf5Fw4gH6QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IlUUFMDbwT4YQL4YhADnu1E0NQB+GPSAAGOLfpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiQHSANMfVSBsE46OMPgo1wsKgwm68uCJ2zziVRLbPDAgEhEAbsj4QwHMfwHKAFUgWiDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WEsoAyx/J7VQCmO2i7ftwIddJwh+VMCDXCx/eApJbf+AhghCUapi2uo6jMdMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8nbPH/gAcAAkTDjDXAdEwP++QEggvDE+NcjEu3971t77HgzvbsWLRURvXipEq7Q8mN69lVyrrqOhzDbPKR/2zHgIILwbI9E9F/ttM3+1N6NsUqlsTrVXUMPdZ0GaSELdMSP49+6joYw2zx/2zHggvC8+vd2kHxxnMjTedjxlKqqJ+jKKHHNWReBch8hWkVFARwWFAESuo6F2zx/2zHgFQQi2zzbPDF/i3U3RvcHBlZI2zwbHBgXBCLbPNs8MXCLdSZXN1bWVkjbPBsaGBcBBts8AR0BQshwAcsfbwABb4xtb4wB2zxvIgHJkyFus5YBbyJZzMnoMRkAuiDXSiHXSZcgwgAiwgCxjkoDbyKAfyLPMasCoQWrAlFVtgggwgCcIKoCFdcYUDPPFkAU3llvAlNBocIAmcgBbwJQRKGqAo4SMTPCAJnUMNAg10oh10mScCDi4uhfAwAOggDQMCLy9AAQ+EIjxwXy4IQAEIIAnbAis/L0ARp/+EJwWAOAQgFtbds8HgHOyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WUAP6AnABymgjbrMlbrOxlzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AB8AmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwACPhCcHCeAtKg");let t=o.beginCell();t.storeRef(e),t.storeUint(0,1);const a=t.endCell();return{code:r,data:a}}const v={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"},40368:{message:"Contract stopped"},53296:{message:"Contract not stopped"}};class g{constructor(e,t){A(this,"address");A(this,"init");A(this,"abi",{errors:v});this.address=e,this.init=t}static async init(){return await u()}static async fromInit(){const e=await u(),t=o.contractAddress(0,e);return new g(t,e)}static fromAddress(e){return new g(e)}async send(e,t,a,s){let n=null;if(s==="increment"&&(n=o.beginCell().storeUint(0,32).storeStringTail(s).endCell()),s&&typeof s=="object"&&!(s instanceof o.Slice)&&s.$$type==="Deploy"&&(n=o.beginCell().store(E(s)).endCell()),s==="Resume"&&(n=o.beginCell().storeUint(0,32).storeStringTail(s).endCell()),s==="Stop"&&(n=o.beginCell().storeUint(0,32).storeStringTail(s).endCell()),n===null)throw new Error("Invalid message type");await e.internal(t,{...a,body:n})}async getValue(e){let t=new o.TupleBuilder;return(await e.get("value",t.build())).stack.readBigNumber()}async getStopped(e){let t=new o.TupleBuilder;return(await e.get("stopped",t.build())).stack.readBoolean()}async getOwner(e){let t=new o.TupleBuilder;return(await e.get("owner",t.build())).stack.readAddress()}}function Q(r,e,t){let a;p(r,d,i=>t(2,a=i));let s,n;return m(d,a={markdown:D,tactCode:f,deploy:async()=>{const i=await h.Blockchain.create(),l=await i.treasury("deployer");s=l.getSender(),n=i.openContract(await g.fromInit());const w={[l.address.toString()]:"deployer",[n.address.toString()]:"contract"};return[n,w,[await n.send(l.getSender(),{value:o.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{increment:async()=>[await n.send(s,{value:o.toNano(1)},"increment")],Stop:async()=>[await n.send(s,{value:o.toNano(1)},"Stop")],Resume:async()=>[await n.send(s,{value:o.toNano(1)},"Resume")]},getters:{stopped:async()=>await n.getStopped(),value:async()=>await n.getValue()},prev:c(import.meta.url).prev,next:c(import.meta.url).next},a),[]}class N extends I{constructor(e){super(),b(this,e,Q,null,y,{})}}export{N as default};
