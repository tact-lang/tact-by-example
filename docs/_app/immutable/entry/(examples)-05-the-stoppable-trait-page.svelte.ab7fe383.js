var p=Object.defineProperty;var C=(a,e,t)=>e in a?p(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var l=(a,e,t)=>(C(a,typeof e!="symbol"?e+"":e,t),t);import{S as B,i as I,s as m,I as h,ac as b}from"../chunks/index.9fe14626.js";import{d as n,g as d,s as u}from"../chunks/store.2b42c038.js";import{d as f}from"../chunks/index.9fe59178.js";const y=`# The Stoppable Trait

Tact allows you to add common boilerplate behaviors to your contract by using traits.

The Stoppable trait allows the contract to allow an \`owner\` role to stop the contract.

Consider for example a protocol where users can deposit funds, like a staking service or a compounding vault. If somebody discovers a security issue, we may want to stop the contract from accepting funds from new users.

Note that this trait doesn't allow to resume the contract after it has been stopped.

This trait implicitly adds the Ownable trait. Note that the Ownable trait doesn't allow the owner to transfer ownership to a different owner. To allow changing ownership, also add the \`OwnableTransferable\` trait.

## How to use Stoppable

Define state variables named \`owner: Address\` and \`stopped: Bool\` and call \`self.requireNotStopped()\` on actions that should be stopped.`,v=`// this trait has to be imported
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
}`;function L(a){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(a.queryId,64)}}async function g(){const a=n.Cell.fromBase64("te6ccgECHQEAA5QAART/APSkE/S88sgLAQIBYgIDAtrQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVEts8MMj4QwHMfwHKAFUgWiDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFhLKAMsfye1UGgQCASANDgKu7aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEJRqmLa6jq4x0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yX/4QnBYA4BCAW1t2zx/4AHAAJEw4w1wCwUCtvkBIILwxPjXIxLt/e9be+x4M727Fi0VEb14qRKu0PJjevZVcq66jocw2zykf9sx4ILwvPr3dpB8cZzI03nY8ZSqqifoyihxzVkXgXIfIVpFRQG6joXbPH/bMeAIBgQO2zzbPDF/iAcICQoAEvhCUjDHBfLghAAQggCdsCKz8vQAFgAAAABTdG9wcGVkARx/+EJwWAOAQgFtbds8AQsByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsADACYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAIBIA8QAgEgExQCEboXvbPNs8bDGBoRAhG4Ud2zzbPGwxgaEgACIQACIgHdu70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIJwkTBoZqbopDZ+4Ee+BVGPiYFQIBSBYXACSCcEDOdWnnFfnSULAdYW4mR7IAEbCvu1E0NIAAYAIBahgZAHOndxoatLgzOZ0Xl6i2sLw0pComsJiaN5q0uSyjPTq7mLKbGRihHKw8M5stJqwsKbEyKrozNxwpNLjBAg+lgbZ5tnjYYxobAYbtRNDUAfhj0gABjij6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAdIA0x9VIGwT4DD4KNcLCoMJuvLgids8HAACIAAI+EJwcA=="),e=n.Cell.fromBase64("te6cckECHwEAA54AAQHAAQEFoendAgEU/wD0pBP0vPLICwMCAWITBAIBIA4FAgEgDAYCAUgLBwIBagoIAg+lgbZ5tnjYYx0JAAIgAHOndxoatLgzOZ0Xl6i2sLw0pComsJiaN5q0uSyjPTq7mLKbGRihHKw8M5stJqwsKbEyKrozNxwpNLjBABGwr7tRNDSAAGAB3bu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSCcJEwaGam6KQ2fuBHvgVRj4mA0AJIJwQM51aecV+dJQsB1hbiZHsgIBIBEPAhG4Ud2zzbPGwxgdEAACIgIRuhe9s82zxsMYHRIAAiEC2tAB0NMDAXGwowH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIVFBTA28E+GEC+GLbPFUS2zwwyPhDAcx/AcoAVSBaINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WEsoAyx/J7VQdFAKu7aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEJRqmLa6jq4x0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yX/4QnBYA4BCAW1t2zx/4AHAAJEw4w1wGxUCtvkBIILwxPjXIxLt/e9be+x4M727Fi0VEb14qRKu0PJjevZVcq66jocw2zykf9sx4ILwvPr3dpB8cZzI03nY8ZSqqifoyihxzVkXgXIfIVpFRQG6joXbPH/bMeAaFgQO2zzbPDF/iBkaGBcBHH/4QnBYA4BCAW1t2zwBGwAWAAAAAFN0b3BwZWQAEvhCUjDHBfLghAAQggCdsCKz8vQByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsAHACYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAGG7UTQ1AH4Y9IAAY4o+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAHSANMfVSBsE+Aw+CjXCwqDCbry4InbPB4ACPhCcHC5GXcL");let t=n.beginCell();t.storeRef(e),t.storeUint(0,1);const r=t.endCell();return{code:a,data:r}}const Q={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"},40368:{message:"Contract stopped"},53296:{message:"Contract not stopped"}};class A{constructor(e,t){l(this,"address");l(this,"init");l(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"ChangeOwner",header:256331011,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]}],errors:Q});this.address=e,this.init=t}static async init(){return await g()}static async fromInit(){const e=await g(),t=n.contractAddress(0,e);return new A(t,e)}static fromAddress(e){return new A(e)}async send(e,t,r,s){let o=null;if(s==="increment"&&(o=n.beginCell().storeUint(0,32).storeStringTail(s).endCell()),s&&typeof s=="object"&&!(s instanceof n.Slice)&&s.$$type==="Deploy"&&(o=n.beginCell().store(L(s)).endCell()),s==="Stop"&&(o=n.beginCell().storeUint(0,32).storeStringTail(s).endCell()),o===null)throw new Error("Invalid message type");await e.internal(t,{...r,body:o})}async getValue(e){let t=new n.TupleBuilder;return(await e.get("value",t.build())).stack.readBigNumber()}async getStopped(e){let t=new n.TupleBuilder;return(await e.get("stopped",t.build())).stack.readBoolean()}async getOwner(e){let t=new n.TupleBuilder;return(await e.get("owner",t.build())).stack.readAddress()}}function H(a,e,t){let r;h(a,u,i=>t(2,r=i));let s,o;return b(u,r={markdown:y,tactCode:v,deploy:async()=>{const i=await f.Blockchain.create(),c=await i.treasury("deployer");s=c.getSender(),o=i.openContract(await A.fromInit());const w={[c.address.toString()]:"deployer",[o.address.toString()]:"contract"};return[[o],w,[await o.send(c.getSender(),{value:n.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{increment:async()=>[await o.send(s,{value:n.toNano(1)},"increment")],Stop:async()=>[await o.send(s,{value:n.toNano(1)},"Stop")]},getters:{stopped:async()=>await o.getStopped(),value:async()=>await o.getValue()},prev:d(import.meta.url).prev,next:d(import.meta.url).next},r),[]}class z extends B{constructor(e){super(),I(this,e,H,null,m,{})}}export{z as default};
