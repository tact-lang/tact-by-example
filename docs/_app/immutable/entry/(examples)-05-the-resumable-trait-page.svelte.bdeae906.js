var C=Object.defineProperty;var p=(o,e,t)=>e in o?C(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var A=(o,e,t)=>(p(o,typeof e!="symbol"?e+"":e,t),t);import{S as B,i as m,s as I,I as h,ac as f}from"../chunks/index.9fe14626.js";import{d as a,g as d,s as u}from"../chunks/store.d3ab02ad.js";import{d as b}from"../chunks/index.78404594.js";const y=`# The Resumable Trait

The Resumable trait is almost identical to the Stoppable trait that we covered in the previous example.

It adds one important feature which is the ability for the owner to resume a stopped contract.

The Stoppable trait by itself may be a little dangerous because the owner cannot change their mind. If you're not sure which trait to use, use this one.

This trait implicitly adds the Ownable and Stoppable traits. Note that the Ownable trait doesn't allow the owner to transfer ownership to a different owner. To allow changing ownership, also add the \`OwnableTransferable\` trait.

## How to use Resumable

Define state variables named \`owner: Address\` and \`stopped: Bool\` and call \`self.requireNotStopped()\` on actions that should be stopped.`,v=`// this trait has to be imported
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
}`;function E(o){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(o.queryId,64)}}async function g(){const o=a.Cell.fromBase64("te6ccgECIQEAA/oAART/APSkE/S88sgLAQIBYgIDAtrQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVEts8MMj4QwHMfwHKAFUgWiDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFhLKAMsfye1UHgQCASAREgKu7aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEJRqmLa6jq4x0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yX/4QnBYA4BCAW1t2zx/4AHAAJEw4w1wDwUD/vkBIILwxPjXIxLt/e9be+x4M727Fi0VEb14qRKu0PJjevZVcq66jocw2zykf9sx4CCC8GyPRPRf7bTN/tTejbFKpbE61V1DD3WdBmkhC3TEj+Pfuo6GMNs8f9sx4ILwvPr3dpB8cZzI03nY8ZSqqifoyihxzVkXgXIfIVpFRQEMBgcEDts82zwxcIgLCAkOARK6joXbPH/bMeAKAA6CANAwIvL0ABYAAAAAUmVzdW1lZAQO2zzbPDF/iAsMDQ4AEvhCUjDHBfLghAAQggCdsCKz8vQAFgAAAABTdG9wcGVkARx/+EJwWAOAQgFtbds8AQ8ByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsAEACYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAIBIBMUAgEgFxgCEboXvbPNs8bDGB4VAhG4Ud2zzbPGwxgeFgACIQACIgHdu70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIJwo+kC+W2BVCOi7wR2zmvRy4GQIBSBobAEiCcJEwaGam6KQ2fuBHvgVRj4mCcEDOdWnnFfnSULAdYW4mR7IAEbCvu1E0NIAAYAIBahwdAHOndxoatLgzOZ0Xl6i2qLgqvRslmportraasrO4LBkmrTS8shu1uCW7G7SmGpqtOjOotKykIKqZuqVBAg+lgbZ5tnjYYx4fAYbtRNDUAfhj0gABjij6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAdIA0x9VIGwT4DD4KNcLCoMJuvLgids8IAACIAAI+EJwcA=="),e=a.Cell.fromBase64("te6cckECIwEABAQAAQHAAQEFoendAgEU/wD0pBP0vPLICwMCAWITBAIBIA4FAgEgDAYCAUgLBwIBagoIAg+lgbZ5tnjYYyEJAAIgAHOndxoatLgzOZ0Xl6i2qLgqvRslmportraasrO4LBkmrTS8shu1uCW7G7SmGpqtOjOotKykIKqZuqVBABGwr7tRNDSAAGAB3bu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSCcKPpAvltgVQjou8Eds5r0cuA0ASIJwkTBoZqbopDZ+4Ee+BVGPiYJwQM51aecV+dJQsB1hbiZHsgIBIBEPAhG4Ud2zzbPGwxghEAACIgIRuhe9s82zxsMYIRIAAiEC2tAB0NMDAXGwowH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIVFBTA28E+GEC+GLbPFUS2zwwyPhDAcx/AcoAVSBaINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WEsoAyx/J7VQhFAKu7aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEJRqmLa6jq4x0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yX/4QnBYA4BCAW1t2zx/4AHAAJEw4w1wHxUD/vkBIILwxPjXIxLt/e9be+x4M727Fi0VEb14qRKu0PJjevZVcq66jocw2zykf9sx4CCC8GyPRPRf7bTN/tTejbFKpbE61V1DD3WdBmkhC3TEj+Pfuo6GMNs8f9sx4ILwvPr3dpB8cZzI03nY8ZSqqifoyihxzVkXgXIfIVpFRQEeGRYBErqOhds8f9sx4BcEDts82zwxf4gdHhgaABYAAAAAU3RvcHBlZAQO2zzbPDFwiB0cGxoBHH/4QnBYA4BCAW1t2zwBHwAWAAAAAFJlc3VtZWQADoIA0DAi8vQAEvhCUjDHBfLghAAQggCdsCKz8vQByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsAIACYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAGG7UTQ1AH4Y9IAAY4o+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAHSANMfVSBsE+Aw+CjXCwqDCbry4InbPCIACPhCcHAsMc2w");let t=a.beginCell();t.storeRef(e),t.storeUint(0,1);const r=t.endCell();return{code:o,data:r}}const x={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"},40368:{message:"Contract stopped"},53296:{message:"Contract not stopped"}};class l{constructor(e,t){A(this,"address");A(this,"init");A(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"ChangeOwner",header:256331011,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]}],errors:x});this.address=e,this.init=t}static async init(){return await g()}static async fromInit(){const e=await g(),t=a.contractAddress(0,e);return new l(t,e)}static fromAddress(e){return new l(e)}async send(e,t,r,s){let n=null;if(s==="increment"&&(n=a.beginCell().storeUint(0,32).storeStringTail(s).endCell()),s&&typeof s=="object"&&!(s instanceof a.Slice)&&s.$$type==="Deploy"&&(n=a.beginCell().store(E(s)).endCell()),s==="Resume"&&(n=a.beginCell().storeUint(0,32).storeStringTail(s).endCell()),s==="Stop"&&(n=a.beginCell().storeUint(0,32).storeStringTail(s).endCell()),n===null)throw new Error("Invalid message type");await e.internal(t,{...r,body:n})}async getValue(e){let t=new a.TupleBuilder;return(await e.get("value",t.build())).stack.readBigNumber()}async getStopped(e){let t=new a.TupleBuilder;return(await e.get("stopped",t.build())).stack.readBoolean()}async getOwner(e){let t=new a.TupleBuilder;return(await e.get("owner",t.build())).stack.readAddress()}}function Q(o,e,t){let r;h(o,u,i=>t(2,r=i));let s,n;return f(u,r={markdown:y,tactCode:v,deploy:async()=>{const i=await b.Blockchain.create(),c=await i.treasury("deployer");s=c.getSender(),n=i.openContract(await l.fromInit());const w={[c.address.toString()]:"deployer",[n.address.toString()]:"contract"};return[n,w,[await n.send(c.getSender(),{value:a.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{increment:async()=>[await n.send(s,{value:a.toNano(1)},"increment")],Stop:async()=>[await n.send(s,{value:a.toNano(1)},"Stop")],Resume:async()=>[await n.send(s,{value:a.toNano(1)},"Resume")]},getters:{stopped:async()=>await n.getStopped(),value:async()=>await n.getValue()},prev:d(import.meta.url).prev,next:d(import.meta.url).next},r),[]}class z extends B{constructor(e){super(),m(this,e,Q,null,I,{})}}export{z as default};
