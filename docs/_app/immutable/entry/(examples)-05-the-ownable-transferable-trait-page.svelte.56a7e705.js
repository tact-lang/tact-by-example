var h=Object.defineProperty;var m=(a,e,n)=>e in a?h(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n;var A=(a,e,n)=>(m(a,typeof e!="symbol"?e+"":e,n),n);import{S as f,i as I,s as B,I as p,ac as b}from"../chunks/index.9fe14626.js";import{d as r,g as u,s as w}from"../chunks/store.2b42c038.js";import{d as v}from"../chunks/index.9fe59178.js";const D=`# The Ownable-Transferable Trait

The Ownable-Transferable trait is almost identical to the Ownable trait that we covered in the previous example.

It adds one important feature which is the ability for the owner to transfer ownership to a new owner. This can also be used to renounce ownership completely by transferring ownership to an unusable address like the zero address.

If you're building a dapp and aiming for decentralization, always prefer this trait over Ownable. At some point in the dapps future, when you consider the owner role no longer unnecessary, you will be able to renounce ownership and make the dapp fully decentralized.

## How to use OwnableTransferable

Use it in a contract just like Ownable. Define a state variable named \`owner: Address\` and call \`self.requireOwner()\` in priviliged receivers.

Your contract will automatically handle the \`ChangeOwner{newOwner: Address}\` message which allows the owner to transfer ownership.`,E=`// this trait has to be imported
import "@stdlib/ownable";
import "@stdlib/deploy";

// the OwnableTransferable trait can limit certain actions to the owner only
contract Counter with Deployable, OwnableTransferable {

    owner: Address; // The OwnableTransferable trait requires you to add this exact state variable
    val: Int as uint32;
 
    init() {
        self.owner = sender(); // we can initialize owner to any value we want, the deployer in this case
        self.val = 0;
    }
 
    // this message is available to anyone
    receive("increment") {
        self.val = self.val + 1;
    }

    // this message in only available to the owner
    receive("double") {
        self.requireOwner();
        self.val = self.val * 2;
    }
 
    get fun value(): Int {
        return self.val;
    }

    // receive(msg: ChangeOwner) is added automatically to transfer ownership
    // get fun owner(): Address is added automatically to query who the owner is
}`;function Q(a){return e=>{let n=e;n.storeUint(256331011,32),n.storeAddress(a.newOwner)}}function O(a){return e=>{let n=e;n.storeUint(2490013878,32),n.storeUint(a.queryId,64)}}async function C(){const a=r.Cell.fromBase64("te6ccgECFwEAA4AAART/APSkE/S88sgLAQIBYgIDAtDQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxa2zwwyPhDAcx/AcoAWVkg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbLH8ntVBQEAgEgCgsDwu2i7ftwIddJwh+VMCDXCx/eApJbf+AhghCUapi2uo6uMdMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8l/+EJwWAOAQgFtbds8f+AhghAPR00DuuMCAcAAkTDjDXAFBgcByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsACAFmMdMfAYIQD0dNA7ry4IH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIMVnbPDF/CQG0+QEggvDE+NcjEu3971t77HgzvbsWLRURvXipEq7Q8mN69lVyrrqVMKR/2zHggvDIde7gyL2QabYaiAMlYC4bHMW5T7LipYHiyvyLG+4ZzrqOh9s8qgB/2zHgCQCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAAS+EJSIMcF8uCEAhG+KO7Z5tnjYQwUDAIBIA0OAAIhAd27vRgnBc7D1dLK57HoTsOdZKhRtmgnCd1jUtK2R8syLTry398WI5gnAgVcAbgGdjlM5YOq5HJbLDgnAb1J3vlUWW8cdT094FWcMmgnCdl05as07LczoOlm2UZuikgnCgFj3QmUS5taqpCsKWACwGgPAgFIEBEAJIJwQM51aecV+dJQsB1hbiZHsgARsK+7UTQ0gABgAgFqEhMAc6d3Ghq0uDM5nReXqLaytzcwmpykNSupmqaiKjEaGqiqKbstIzQwtKk8Obq0G7QapyggmTC6PKYhrEECD6WBtnm2eNhDFBUBgO1E0NQB+GPSAAGOJfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB0x9ZbBLgMPgo1wsKgwm68uCJ2zwWAAIgAAb4QnA="),e=r.Cell.fromBase64("te6cckECGQEAA4oAAQHAAQEFoendAgEU/wD0pBP0vPLICwMCAWIQBAIBIA4FAgEgDAYCAUgLBwIBagoIAg+lgbZ5tnjYQxcJAAIgAHOndxoatLgzOZ0Xl6i2src3MJqcpDUrqZqmoioxGhqoqim7LSM0MLSpPDm6tBu0GqcoIJkwujymIaxBABGwr7tRNDSAAGAB3bu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSCcKAWPdCZRLm1qqkKwpYALAaA0AJIJwQM51aecV+dJQsB1hbiZHsgIRviju2ebZ42EMFw8AAiEC0NAB0NMDAXGwowH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIVFBTA28E+GEC+GLbPFrbPDDI+EMBzH8BygBZWSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFssfye1UFxEDwu2i7ftwIddJwh+VMCDXCx/eApJbf+AhghCUapi2uo6uMdMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8l/+EJwWAOAQgFtbds8f+AhghAPR00DuuMCAcAAkTDjDXAVExIBtPkBIILwxPjXIxLt/e9be+x4M727Fi0VEb14qRKu0PJjevZVcq66lTCkf9sx4ILwyHXu4Mi9kGm2GogDJWAuGxzFuU+y4qWB4sr8ixvuGc66jofbPKoAf9sx4BQBZjHTHwGCEA9HTQO68uCB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiDFZ2zwxfxQAEvhCUiDHBfLghAHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAWAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAYDtRNDUAfhj0gABjiX6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAdMfWWwS4DD4KNcLCoMJuvLgids8GAAG+EJw8gITiw==");let n=r.beginCell();n.storeRef(e),n.storeUint(0,1);const o=n.endCell();return{code:a,data:o}}const M={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class d{constructor(e,n){A(this,"address");A(this,"init");A(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"ChangeOwner",header:256331011,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]}],errors:M});this.address=e,this.init=n}static async init(){return await C()}static async fromInit(){const e=await C(),n=r.contractAddress(0,e);return new d(n,e)}static fromAddress(e){return new d(e)}async send(e,n,o,t){let s=null;if(t==="increment"&&(s=r.beginCell().storeUint(0,32).storeStringTail(t).endCell()),t==="double"&&(s=r.beginCell().storeUint(0,32).storeStringTail(t).endCell()),t&&typeof t=="object"&&!(t instanceof r.Slice)&&t.$$type==="Deploy"&&(s=r.beginCell().store(O(t)).endCell()),t&&typeof t=="object"&&!(t instanceof r.Slice)&&t.$$type==="ChangeOwner"&&(s=r.beginCell().store(Q(t)).endCell()),s===null)throw new Error("Invalid message type");await e.internal(n,{...o,body:s})}async getValue(e){let n=new r.TupleBuilder;return(await e.get("value",n.build())).stack.readBigNumber()}async getOwner(e){let n=new r.TupleBuilder;return(await e.get("owner",n.build())).stack.readAddress()}}function J(a,e,n){let o;p(a,w,l=>n(3,o=l));let t,s,i;return b(w,o={markdown:D,tactCode:E,deploy:async()=>{const l=await v.Blockchain.create(),c=await l.treasury("deployer");t=c.getSender();const g=await l.treasury("another");s=g.getSender(),i=l.openContract(await d.fromInit());const y={[c.address.toString()]:"deployer",[g.address.toString()]:"sender 2",[i.address.toString()]:"contract"};return[[i],y,[await i.send(c.getSender(),{value:r.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{"ChangeOwner{sender 2} (from deployer)":async()=>[await i.send(t,{value:r.toNano(1)},{$$type:"ChangeOwner",newOwner:s.address})],"ChangeOwner{deployer} (from sender 2)":async()=>[await i.send(s,{value:r.toNano(1)},{$$type:"ChangeOwner",newOwner:t.address})]},getters:{owner:async()=>await i.getOwner(),value:async()=>await i.getValue()},prev:u(import.meta.url).prev,next:u(import.meta.url).next},o),[]}class K extends f{constructor(e){super(),I(this,e,J,null,B,{})}}export{K as default};
