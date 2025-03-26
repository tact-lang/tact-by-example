var y=Object.defineProperty;var g=(r,e,t)=>e in r?y(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var l=(r,e,t)=>(g(r,typeof e!="symbol"?e+"":e,t),t);import{S as f,i as w,s as C,I as h,ac as I}from"../chunks/index.9fe14626.js";import{d as a,g as u,s as A}from"../chunks/store.476c3091.js";import{d as B}from"../chunks/index.c056099e.js";const v=`# Writing Your Own Trait

Tact doesn't support classical class inheritance and instead introduces the concept of *traits*. Traits are similar to simplified base classes that potentially add state variables, receivers, getters or contract methods.

Contracts can rely on multiple traits. Extract logic into a trait if you have multiple contracts that share this logic.

## The Trackable trait

This example shows how to write a new trait that adds simple analytics behavior to any contract.

This trait also makes use of the \`virtual\` keyword which lets the contract relying on the trait override some of the trait's behaviors. In the example, the default filter behavior ignores messages from owner in the analytics.

The contract relying on the trait can change this default behavior by specifying the \`override\` keyword and providing a new implementation to this method. In our case, the custom filter is to have no filters.`,b=`import "@stdlib/deploy";
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
    override fun filterMessage(): Bool {
        // our contract's custom filtering behavior is to remove all filters and count all messages
        return true;
    }

    // receive("reset stats") is added automatically to allow owner to reset the stats
    // get fun stats(): Int is added automatically to query the stats
    // get fun owner(): Address is added automatically to query who the owner is
}
`;function k(r){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(r.queryId,64)}}async function m(){const r=a.Cell.fromBase64("te6ccgECHQEAA5EAART/APSkE/S88sgLAQIBYgIDAt7QAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVEts88uCCyPhDAcx/AcoAVSBaINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WEss/yx/J7VQaBAIBIA4PAqDtou37AZIwf+BwIddJwh+VMCDXCx/eIIIQlGqYtrqOqDDTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J+EIBcG3bPH/gwACRMOMNcAsFAqr5ASCC8MT41yMS7f3vW3vseDO9uxYtFRG9eKkSrtDyY3r2VXKuuo6HMNs8pH/bMeCC8GoErs8n0AwOP0GMoCvd09z8w437hx2i+rbJ58c2GGUPuuMCBgcBDts8kwGkAd4IAyDbPDFwiBL4QgF/bds8f9sxCQoLAAJ/ABL4QlIwxwXy4IQAHAAAAAByZXNldCBkb25lATptbSJus5lbIG7y0IBvIgGRMuIQJHADBIBCUCPbPAwByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsADQCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAIBahARAgEgFBUCEbFHds82zxsMYBoSAhGzeLbPNs8bDGAaEwACIgACIQDdu70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIJwQM51aecV+dJQsB1hbiZHsoAgFIFhcAEbCvu1E0NIAAYAIBahgZAHOndxoatLgzOZ0Xl6i2qhm6u7O3MLyyGakpmRkcpZuqLTW5NKstPLgbKrC5JyEtMqKamKycujWypjhBAg+lgbZ5tnjYYxobAYbtRNDUAfhj0gABjij6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAdM/0x9VIGwT4DD4KNcLCoMJuvLgids8HAACIAAI+EJwIA=="),e=a.Cell.fromBase64("te6cckECHwEAA5sAAQHAAQEFoendAgEU/wD0pBP0vPLICwMCAWISBAIBIA0FAgEgDAYCAUgLBwIBagoIAg+lgbZ5tnjYYx0JAAIgAHOndxoatLgzOZ0Xl6i2qhm6u7O3MLyyGakpmRkcpZuqLTW5NKstPLgbKrC5JyEtMqKamKycujWypjhBABGwr7tRNDSAAGAA3bu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSCcEDOdWnnFfnSULAdYW4mR7KAIBahAOAhGzeLbPNs8bDGAdDwACIQIRsUd2zzbPGwxgHREAAiIC3tAB0NMDAXGwowH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIVFBTA28E+GEC+GLbPFUS2zzy4ILI+EMBzH8BygBVIFog10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxYSyz/LH8ntVB0TAqDtou37AZIwf+BwIddJwh+VMCDXCx/eIIIQlGqYtrqOqDDTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J+EIBcG3bPH/gwACRMOMNcBoUAqr5ASCC8MT41yMS7f3vW3vseDO9uxYtFRG9eKkSrtDyY3r2VXKuuo6HMNs8pH/bMeCC8GoErs8n0AwOP0GMoCvd09z8w437hx2i+rbJ58c2GGUPuuMCGBUDINs8MXCIEvhCAX9t2zx/2zEXFhoAHAAAAAByZXNldCBkb25lABL4QlIwxwXy4IQBDts8kwGkAd4ZAAJ/ATptbSJus5lbIG7y0IBvIgGRMuIQJHADBIBCUCPbPBsByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsAHACYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAGG7UTQ1AH4Y9IAAY4o+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAHTP9MfVSBsE+Aw+CjXCwqDCbry4InbPB4ACPhCcCBjluUV");let t=a.beginCell();t.storeRef(e),t.storeUint(0,1);const i=t.endCell();return{code:r,data:i}}const M={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}},D=[{name:"StateInit",header:null,fields:[{name:"code",type:{kind:"simple",type:"cell",optional:!1}},{name:"data",type:{kind:"simple",type:"cell",optional:!1}}]},{name:"Context",header:null,fields:[{name:"bounced",type:{kind:"simple",type:"bool",optional:!1}},{name:"sender",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"raw",type:{kind:"simple",type:"slice",optional:!1}}]},{name:"SendParameters",header:null,fields:[{name:"bounce",type:{kind:"simple",type:"bool",optional:!1}},{name:"to",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"mode",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"body",type:{kind:"simple",type:"cell",optional:!0}},{name:"code",type:{kind:"simple",type:"cell",optional:!0}},{name:"data",type:{kind:"simple",type:"cell",optional:!0}}]},{name:"Deploy",header:2490013878,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"DeployOk",header:2952335191,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"FactoryDeploy",header:1829761339,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}},{name:"cashback",type:{kind:"simple",type:"address",optional:!1}}]},{name:"ChangeOwner",header:2174598809,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}},{name:"newOwner",type:{kind:"simple",type:"address",optional:!1}}]},{name:"ChangeOwnerOk",header:846932810,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}},{name:"newOwner",type:{kind:"simple",type:"address",optional:!1}}]}],x=[{name:"value",arguments:[],returnType:{kind:"simple",type:"int",optional:!1,format:257}},{name:"stats",arguments:[],returnType:{kind:"simple",type:"int",optional:!1,format:257}},{name:"owner",arguments:[],returnType:{kind:"simple",type:"address",optional:!1}}],O=[{receiver:"internal",message:{kind:"text",text:"increment"}},{receiver:"internal",message:{kind:"typed",type:"Deploy"}},{receiver:"internal",message:{kind:"text",text:"reset stats"}}];class d{constructor(e,t){l(this,"address");l(this,"init");l(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"FactoryDeploy",header:1829761339,fields:[]},{name:"ChangeOwner",header:2174598809,fields:[]},{name:"ChangeOwnerOk",header:846932810,fields:[]}],types:D,getters:x,receivers:O,errors:M});this.address=e,this.init=t}static async init(){return await m()}static async fromInit(){const e=await m(),t=a.contractAddress(0,e);return new d(t,e)}static fromAddress(e){return new d(e)}async send(e,t,i,n){let s=null;if(n==="increment"&&(s=a.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n&&typeof n=="object"&&!(n instanceof a.Slice)&&n.$$type==="Deploy"&&(s=a.beginCell().store(k(n)).endCell()),n==="reset stats"&&(s=a.beginCell().storeUint(0,32).storeStringTail(n).endCell()),s===null)throw new Error("Invalid message type");await e.internal(t,{...i,body:s})}async getValue(e){let t=new a.TupleBuilder;return(await e.get("value",t.build())).stack.readBigNumber()}async getStats(e){let t=new a.TupleBuilder;return(await e.get("stats",t.build())).stack.readBigNumber()}async getOwner(e){let t=new a.TupleBuilder;return(await e.get("owner",t.build())).stack.readAddress()}}function J(r,e,t){let i;h(r,A,o=>t(2,i=o));let n,s;return I(A,i={markdown:v,tactCode:b,deploy:async()=>{const o=await B.Blockchain.create(),c=await o.treasury("deployer");n=c.getSender(),s=o.openContract(await d.fromInit());const p={[c.address.toString()]:"deployer",[s.address.toString()]:"contract"};return[[s],p,[await s.send(c.getSender(),{value:a.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{increment:async()=>[await s.send(n,{value:a.toNano(1)},"increment")],"reset stats":async()=>[await s.send(n,{value:a.toNano(1)},"reset stats")]},getters:{value:async()=>await s.getValue(),stats:async()=>await s.getStats()},prev:u(import.meta.url).prev,next:u(import.meta.url).next},i),[]}class G extends f{constructor(e){super(),w(this,e,J,null,C,{})}}export{G as default};
