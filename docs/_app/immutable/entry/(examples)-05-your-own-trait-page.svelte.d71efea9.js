var y=Object.defineProperty;var B=(a,e,t)=>e in a?y(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var l=(a,e,t)=>(B(a,typeof e!="symbol"?e+"":e,t),t);import{S as f,i as C,s as m,I as h,ac as I}from"../chunks/index.9fe14626.js";import{d as r,g as A,s as u}from"../chunks/store.380869d4.js";import{d as b}from"../chunks/index.b268dd33.js";const v=`# Writing Your Own Trait

Tact doesn't support classical class inheritance and instead introduces the concept of *traits*. Traits are similar to simplified base classes that potentially add state variables, receivers, getters or contract methods.

Contracts can rely on multiple traits. Extract logic into a trait if you have multiple contracts that share this logic.

## The Trackable trait

This example shows how to write a new trait that adds simple analytics behavior to any contract.

This trait also makes use of the \`virtual\` keyword which lets the contract relying on the trait override some of the trait's behaviors. In the example, the default filter behavior ignores messages from owner in the analytics.

The contract relying on the trait can change this default behavior by specifying the \`overrides\` keyword and providing a new implementation to this method. In our case, the custom filter is to have no filters.`,D=`import "@stdlib/deploy";
import "@stdlib/ownable";

/////////////////////////////////////////////////////////////////////////////
// this trait adds basic analytics to any contract to track how popular it is

trait Trackable with Ownable {          // your new trait may rely on other traits

    // Storage

    owner: Address;
    numMessagesReceived: Int;           // your new trait may add state variables but should not specify their size

    // Receivers

    receive("reset stats") {            // your new trait may handle specific messages
        self.requireOwner();
        self.numMessagesReceived = 0;
        reply("reset done".asComment());
    }

    // Getters

    get fun stats(): Int {              // your new trait may add getters
        return self.numMessagesReceived;
    }

    // Methods

    fun receivedNewMessage() {          // your new trait may define new contract methods
        if (self.filterMessage()) {
            self.numMessagesReceived = self.numMessagesReceived + 1;
        }
    }

    virtual fun filterMessage(): Bool { // virtual functions can be overridden by users of this trait
        // the default filtering behavior is to ignore messages sent by the owner
        if (sender() == self.owner) {
            return false;
        }
        return true;
    }
}

/////////////////////////////////////////////////////////////////////////////
// this Counter contract is going to use our new trait to add analytics to it

contract Counter with Deployable, Trackable {

    owner: Address;                     // The Trackable trait requires this exact state variable
    numMessagesReceived: Int as uint64; // The Trackable trait requires this exact state variable
    val: Int as uint32;
 
    init() {
        self.owner = sender(); // we can initialize owner to any value we want, the deployer in this case
        self.numMessagesReceived = 0;
        self.val = 0;
    }
 
    receive("increment") {
        self.receivedNewMessage(); // here we are using our trait
        self.val = self.val + 1;
    }
 
    get fun value(): Int {
        return self.val;
    }

    // the trait allows us to override the default filtering behavior
    overrides fun filterMessage(): Bool {
        // our contract's custom filtering behavior is to remove all filters and count all messages
        return true;
    }

    // receive("reset stats") is added automatically to allow owner to reset the stats
    // get fun stats(): Int is added automatically to query the stats
    // get fun owner(): Address is added automatically to query who the owner is
}`;function p(a){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(a.queryId,64)}}async function d(){const a=r.Cell.fromBase64("te6ccgECGwEABJMAART/APSkE/S88sgLAQIBYgIDAX7QAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GIEAgEgERIDnu1E0NQB+GPSAAGOLfpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiQHTP9MfVSBsE46OMPgo1wsKgwm68uCJ2zziVRLbPDAZBQYCmO2i7ftwIddJwh+VMCDXCx/eApJbf+AhghCUapi2uo6jMdMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8nbPH/gAcAAkTDjDXANBwBuyPhDAcx/AcoAVSBaINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxYSyz/LH8ntVAKq+QEggvDE+NcjEu3971t77HgzvbsWLRURvXipEq7Q8mN69lVyrrqOhzDbPKR/2zHggvBqBK7PJ9AMDj9BjKAr3dPc/MON+4cdovq2yefHNhhlD7rjAggJAQ7bPJMBpAHeCgMw2zwxcIunJlc2V0IGRvbmWNs82zwBf9sxCwwNAAJ/ABD4QiPHBfLghAFCyHAByx9vAAFvjG1vjAHbPG8iAcmTIW6zlgFvIlnMyegxDgEaf/hCcFgDgEIBbW3bPA8AuiDXSiHXSZcgwgAiwgCxjkoDbyKAfyLPMasCoQWrAlFVtgggwgCcIKoCFdcYUDPPFkAU3llvAlNBocIAmcgBbwJQRKGqAo4SMTPCAJnUMNAg10oh10mScCDi4uhfAwHOyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WUAP6AnABymgjbrMlbrOxlzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7ABAAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwCAWoTFAIBIBcYAp2xR3tRNDUAfhj0gABji36QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkB0z/TH1UgbBOOjjD4KNcLCoMJuvLgids84ts8gGRUCnbN4u1E0NQB+GPSAAGOLfpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiQHTP9MfVSBsE46OMPgo1wsKgwm68uCJ2zzi2zyAZFgACWwAEMDEA3bu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSCcEDOdWnnFfnSULAdYW4mR7KAKduawO1E0NQB+GPSAAGOLfpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiQHTP9MfVSBsE46OMPgo1wsKgwm68uCJ2zzi2zyBkaAAj4QnAgAARsIQ=="),e=r.Cell.fromBase64("te6cckECHQEABJ0AAQHAAQEFoendAgEU/wD0pBP0vPLICwMCAWIOBAIBIAkFAgEgCAYCnbmsDtRNDUAfhj0gABji36QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkB0z/TH1UgbBOOjjD4KNcLCoMJuvLgids84ts8gcBwAEbCEA3bu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSCcEDOdWnnFfnSULAdYW4mR7KAIBagwKAp2zeLtRNDUAfhj0gABji36QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkB0z/TH1UgbBOOjjD4KNcLCoMJuvLgids84ts8gHAsABDAxAp2xR3tRNDUAfhj0gABji36QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkB0z/TH1UgbBOOjjD4KNcLCoMJuvLgids84ts8gHA0AAlsBftAB0NMDAXGwwAGRf5Fw4gH6QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IlUUFMDbwT4YQL4Yg8Dnu1E0NQB+GPSAAGOLfpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiQHTP9MfVSBsE46OMPgo1wsKgwm68uCJ2zziVRLbPDAcERAAbsj4QwHMfwHKAFUgWiDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WEss/yx/J7VQCmO2i7ftwIddJwh+VMCDXCx/eApJbf+AhghCUapi2uo6jMdMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8nbPH/gAcAAkTDjDXAZEgKq+QEggvDE+NcjEu3971t77HgzvbsWLRURvXipEq7Q8mN69lVyrrqOhzDbPKR/2zHggvBqBK7PJ9AMDj9BjKAr3dPc/MON+4cdovq2yefHNhhlD7rjAhcTAzDbPDFwi6cmVzZXQgZG9uZY2zzbPAF/2zEWFBkBQshwAcsfbwABb4xtb4wB2zxvIgHJkyFus5YBbyJZzMnoMRUAuiDXSiHXSZcgwgAiwgCxjkoDbyKAfyLPMasCoQWrAlFVtgggwgCcIKoCFdcYUDPPFkAU3llvAlNBocIAmcgBbwJQRKGqAo4SMTPCAJnUMNAg10oh10mScCDi4uhfAwAQ+EIjxwXy4IQBDts8kwGkAd4YAAJ/ARp/+EJwWAOAQgFtbds8GgHOyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WUAP6AnABymgjbrMlbrOxlzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7ABsAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwACPhCcCAaTajO");let t=r.beginCell();t.storeRef(e),t.storeUint(0,1);const i=t.endCell();return{code:a,data:i}}const M={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class g{constructor(e,t){l(this,"address");l(this,"init");l(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"ChangeOwner",header:256331011,fields:[]}],errors:M});this.address=e,this.init=t}static async init(){return await d()}static async fromInit(){const e=await d(),t=r.contractAddress(0,e);return new g(t,e)}static fromAddress(e){return new g(e)}async send(e,t,i,s){let n=null;if(s==="increment"&&(n=r.beginCell().storeUint(0,32).storeStringTail(s).endCell()),s&&typeof s=="object"&&!(s instanceof r.Slice)&&s.$$type==="Deploy"&&(n=r.beginCell().store(p(s)).endCell()),s==="reset stats"&&(n=r.beginCell().storeUint(0,32).storeStringTail(s).endCell()),n===null)throw new Error("Invalid message type");await e.internal(t,{...i,body:n})}async getValue(e){let t=new r.TupleBuilder;return(await e.get("value",t.build())).stack.readBigNumber()}async getStats(e){let t=new r.TupleBuilder;return(await e.get("stats",t.build())).stack.readBigNumber()}async getOwner(e){let t=new r.TupleBuilder;return(await e.get("owner",t.build())).stack.readAddress()}}function E(a,e,t){let i;h(a,u,o=>t(2,i=o));let s,n;return I(u,i={markdown:v,tactCode:D,deploy:async()=>{const o=await b.Blockchain.create(),c=await o.treasury("deployer");s=c.getSender(),n=o.openContract(await g.fromInit());const w={[c.address.toString()]:"deployer",[n.address.toString()]:"contract"};return[[n],w,[await n.send(c.getSender(),{value:r.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{increment:async()=>[await n.send(s,{value:r.toNano(1)},"increment")],"reset stats":async()=>[await n.send(s,{value:r.toNano(1)},"reset stats")]},getters:{value:async()=>await n.getValue(),stats:async()=>await n.getStats()},prev:A(import.meta.url).prev,next:A(import.meta.url).next},i),[]}class S extends f{constructor(e){super(),C(this,e,E,null,m,{})}}export{S as default};
