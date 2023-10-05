var m=Object.defineProperty;var h=(r,e,t)=>e in r?m(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var l=(r,e,t)=>(h(r,typeof e!="symbol"?e+"":e,t),t);import{S as y,i as C,s as f,I,ac as v}from"../chunks/index.9fe14626.js";import{d as a,g as u,s as d}from"../chunks/store.476c3091.js";import{d as B}from"../chunks/index.c056099e.js";const b=`# Writing Your Own Trait

Tact doesn't support classical class inheritance and instead introduces the concept of *traits*. Traits are similar to simplified base classes that potentially add state variables, receivers, getters or contract methods.

Contracts can rely on multiple traits. Extract logic into a trait if you have multiple contracts that share this logic.

## The Trackable trait

This example shows how to write a new trait that adds simple analytics behavior to any contract.

This trait also makes use of the \`virtual\` keyword which lets the contract relying on the trait override some of the trait's behaviors. In the example, the default filter behavior ignores messages from owner in the analytics.

The contract relying on the trait can change this default behavior by specifying the \`overrides\` keyword and providing a new implementation to this method. In our case, the custom filter is to have no filters.`,p=`import "@stdlib/deploy";
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
        self.reply("reset done".asComment());
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
}`;function L(r){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(r.queryId,64)}}async function g(){const r=a.Cell.fromBase64("te6ccgECHAEAA3wAART/APSkE/S88sgLAQIBYgIDAtrQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVEts8MMj4QwHMfwHKAFUgWiDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFhLLP8sfye1UGQQCASANDgKu7aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEJRqmLa6jq4x0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yX/4QnBYA4BCAW1t2zx/4AHAAJEw4w1wCwUCqvkBIILwxPjXIxLt/e9be+x4M727Fi0VEb14qRKu0PJjevZVcq66jocw2zykf9sx4ILwagSuzyfQDA4/QYygK93T3PzDjfuHHaL6tsnnxzYYZQ+64wIGBwEO2zyTAaQB3ggDLNs8MXCIf/hCcFgDgEIBbW3bPAF/2zEJCgsAAn8AEvhCUjDHBfLghAAcAAAAAHJlc2V0IGRvbmUByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsADACYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAIBag8QAgEgExQCEbFHds82zxsMYBkRAhGzeLbPNs8bDGAZEgACIgACIQDdu70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIJwQM51aecV+dJQsB1hbiZHsoAgFIFRYAEbCvu1E0NIAAYAIBahcYAHOndxoatLgzOZ0Xl6i2py0ZMLeqNyE1OTExHKq4mKIoprEZqrk4mTQyLJojqrg8piM9HDy8KqmirLtBAg+lgbZ5tnjYYxkaAYbtRNDUAfhj0gABjij6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAdM/0x9VIGwT4DD4KNcLCoMJuvLgids8GwACIAAI+EJwIA=="),e=a.Cell.fromBase64("te6cckECHgEAA4YAAQHAAQEFoendAgEU/wD0pBP0vPLICwMCAWISBAIBIA0FAgEgDAYCAUgLBwIBagoIAg+lgbZ5tnjYYxwJAAIgAHOndxoatLgzOZ0Xl6i2py0ZMLeqNyE1OTExHKq4mKIoprEZqrk4mTQyLJojqrg8piM9HDy8KqmirLtBABGwr7tRNDSAAGAA3bu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSCcEDOdWnnFfnSULAdYW4mR7KAIBahAOAhGzeLbPNs8bDGAcDwACIQIRsUd2zzbPGwxgHBEAAiIC2tAB0NMDAXGwowH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIVFBTA28E+GEC+GLbPFUS2zwwyPhDAcx/AcoAVSBaINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WEss/yx/J7VQcEwKu7aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEJRqmLa6jq4x0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yX/4QnBYA4BCAW1t2zx/4AHAAJEw4w1wGhQCqvkBIILwxPjXIxLt/e9be+x4M727Fi0VEb14qRKu0PJjevZVcq66jocw2zykf9sx4ILwagSuzyfQDA4/QYygK93T3PzDjfuHHaL6tsnnxzYYZQ+64wIYFQMs2zwxcIh/+EJwWAOAQgFtbds8AX/bMRcWGgAcAAAAAHJlc2V0IGRvbmUAEvhCUjDHBfLghAEO2zyTAaQB3hkAAn8ByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsAGwCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAGG7UTQ1AH4Y9IAAY4o+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAHTP9MfVSBsE+Aw+CjXCwqDCbry4InbPB0ACPhCcCDj7h7k");let t=a.beginCell();t.storeRef(e),t.storeUint(0,1);const i=t.endCell();return{code:r,data:i}}const x={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class c{constructor(e,t){l(this,"address");l(this,"init");l(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"ChangeOwner",header:256331011,fields:[]}],errors:x});this.address=e,this.init=t}static async init(){return await g()}static async fromInit(){const e=await g(),t=a.contractAddress(0,e);return new c(t,e)}static fromAddress(e){return new c(e)}async send(e,t,i,s){let n=null;if(s==="increment"&&(n=a.beginCell().storeUint(0,32).storeStringTail(s).endCell()),s&&typeof s=="object"&&!(s instanceof a.Slice)&&s.$$type==="Deploy"&&(n=a.beginCell().store(L(s)).endCell()),s==="reset stats"&&(n=a.beginCell().storeUint(0,32).storeStringTail(s).endCell()),n===null)throw new Error("Invalid message type");await e.internal(t,{...i,body:n})}async getValue(e){let t=new a.TupleBuilder;return(await e.get("value",t.build())).stack.readBigNumber()}async getStats(e){let t=new a.TupleBuilder;return(await e.get("stats",t.build())).stack.readBigNumber()}async getOwner(e){let t=new a.TupleBuilder;return(await e.get("owner",t.build())).stack.readAddress()}}function E(r,e,t){let i;I(r,d,o=>t(2,i=o));let s,n;return v(d,i={markdown:b,tactCode:p,deploy:async()=>{const o=await B.Blockchain.create(),A=await o.treasury("deployer");s=A.getSender(),n=o.openContract(await c.fromInit());const w={[A.address.toString()]:"deployer",[n.address.toString()]:"contract"};return[[n],w,[await n.send(A.getSender(),{value:a.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{increment:async()=>[await n.send(s,{value:a.toNano(1)},"increment")],"reset stats":async()=>[await n.send(s,{value:a.toNano(1)},"reset stats")]},getters:{value:async()=>await n.getValue(),stats:async()=>await n.getStats()},prev:u(import.meta.url).prev,next:u(import.meta.url).next},i),[]}class T extends y{constructor(e){super(),C(this,e,E,null,f,{})}}export{T as default};
