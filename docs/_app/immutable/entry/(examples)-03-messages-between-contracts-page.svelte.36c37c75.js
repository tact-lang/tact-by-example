var h=Object.defineProperty;var I=(r,e,t)=>e in r?h(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var i=(r,e,t)=>(I(r,typeof e!="symbol"?e+"":e,t),t);import{S as f,i as B,s as p,I as v,ac as b}from"../chunks/index.9fe14626.js";import{d as s,g as d,s as C}from"../chunks/store.cab86f52.js";import{d as H}from"../chunks/index.f166c76f.js";const D=`# Messages Between Contracts

Different contracts can only communicate with each other by sending each other messages. This example shows two separate contracts that work together:

* \`Counter\` - Our simple counter that can only increment by 1.

* \`BulkAdder\` - This contract will tell \`Counter\` to increment multiple times.

Press the <span class="mdButton blue">Deploy</span> button to deploy both. Then, to make the counter reach 5, send BulkAdder the \`Reach\` message by pressing the <span class="mdButton grape">Send Reach{5}</span> button.

Notice how many messages are sent back and forth between the two contracts as a result. Each of these messages is processed as a *separate* transaction! Also notice that BulkAdder can't call a *getter* on Counter, it must send the \`query\` message instead.

## Who's paying for gas

The default behavior is that the original sender will pay for the entire cascade of messages that they triggered. This is funded from the original TON coin value sent on the first \`Reach\` message.

Under the hood, this works by each message handler sending the remaining excess TON coin value it received on the next message it sends out.

**Challenge:** modify the code to refund the original sender any unused excess gas.`,E=`import "@stdlib/deploy";

message CounterValue {
    value: Int as uint32;
}

////////////////////////////////////////////////////////////////////////////
// this is our famous Counter contract, we've seen it before
// this contract is very annoying, it only allows to increment +1 at a time!

contract Counter with Deployable {

    val: Int as uint32;

    init() {
        self.val = 0;
    }

    // step 6: this contract allows anyone to ask it to increment by 1 (ie. the other contract)
    receive("increment") {
        self.val = self.val + 1;
        reply(CounterValue{value: self.val}.toCell());
    }

    // step 3: this contract replies with its current value to anyone asking (ie. the other contract)
    receive("query") {
        reply(CounterValue{value: self.val}.toCell());
    }

    get fun value(): Int {
        return self.val;
    }
}

message Reach {
    counter: Address;
    target: Int as uint32;
}

////////////////////////////////////////////////////////////////////////////
// let's write a second helper contract to make our lives a little easier
// it will keep incrementing the previous contract as many times as we need!

contract BulkAdder with Deployable {

    target: Int as uint32;

    init() {
        self.target = 0;
    }

    // step 1: users will send this message to tell us what target value we need to reach
    receive(msg: Reach) {
        self.target = msg.target;
        // step 2: this contract will query the current counter value from the other contract
        send(SendParameters{
            to: msg.counter,
            value: 0, /// TODO: https://github.com/tact-lang/tact/issues/31
            mode: SendRemainingValue + SendIgnoreErrors, /// TODO: issues/31
            body: "query".asComment()
        });
    }

    // step 4: the other contract will tell us what is its current value by sending us this message
    receive(msg: CounterValue) {
        if (msg.value < self.target) {
            // step 5: if its value is too low, send it another message to increment it by +1 more
            send(SendParameters{
                to: sender(),
                value: 0, /// TODO: same issue 31
                mode: SendRemainingValue + SendIgnoreErrors, /// TODO: https://github.com/tact-lang/tact/issues/31
                body: "increment".asComment()
            });
        }
    }
}`;function M(r){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(r.queryId,64)}}async function w(){const r=s.Cell.fromBase64("te6ccgECDAEAAqsAART/APSkE/S88sgLAQIBYgIDAubQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GLtRNDUAfhj0gABlNMfATGOjjD4KNcLCoMJuvLgids84lnbPDDI+EMBzH8BygABAcsfye1UCwQCAVgJCgKY7aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEJRqmLa6jqMx0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yds8f+ABwACRMOMNcAYFAvL5ASCC8MT41yMS7f3vW3vseDO9uxYtFRG9eKkSrtDyY3r2VXKuuo6WMKQgyAGCEE5lCrhYyx/LH8nbPH/bMeCC8BZnj6GFi9+OGq15b0ydC1cS/AkXn/h4AedjpN1K3PcQuo6UIMgBghBOZQq4WMsfyx/J2zx/2zHgBgYBGn/4QnBYA4BCAW1t2zwHAc7IcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxZQA/oCcAHKaCNusyVus7GXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsACACYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAC5u70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIAUW5rA7UTQ1AH4Y9IAAZTTHwExjo4w+CjXCwqDCbry4InbPOKAsAAnA="),e=s.Cell.fromBase64("te6cckECDgEAArUAAQHAAQEFoendAgEU/wD0pBP0vPLICwMCAWIHBAIBWAYFAUW5rA7UTQ1AH4Y9IAAZTTHwExjo4w+CjXCwqDCbry4InbPOKA0Aubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSALm0AHQ0wMBcbDAAZF/kXDiAfpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiVRQUwNvBPhhAvhi7UTQ1AH4Y9IAAZTTHwExjo4w+CjXCwqDCbry4InbPOJZ2zwwyPhDAcx/AcoAAQHLH8ntVA0IApjtou37cCHXScIflTAg1wsf3gKSW3/gIYIQlGqYtrqOozHTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J2zx/4AHAAJEw4w1wCgkC8vkBIILwxPjXIxLt/e9be+x4M727Fi0VEb14qRKu0PJjevZVcq66jpYwpCDIAYIQTmUKuFjLH8sfyds8f9sx4ILwFmePoYWL344arXlvTJ0LVxL8CRef+HgB52Ok3Urc9xC6jpQgyAGCEE5lCrhYyx/LH8nbPH/bMeAKCgEaf/hCcFgDgEIBbW3bPAsBzshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFlAD+gJwAcpoI26zJW6zsZczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAMAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAAJw85Vp0g==");let t=s.beginCell();t.storeRef(e),t.storeUint(0,1);const o=t.endCell();return{code:r,data:o}}const L={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class g{constructor(e,t){i(this,"address");i(this,"init");i(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"CounterValue",header:1315244728,fields:[]},{name:"Reach",header:2577471031,fields:[]}],errors:L});this.address=e,this.init=t}static async init(){return await w()}static async fromInit(){const e=await w(),t=s.contractAddress(0,e);return new g(t,e)}static fromAddress(e){return new g(e)}async send(e,t,o,n){let a=null;if(n==="increment"&&(a=s.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n==="query"&&(a=s.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n&&typeof n=="object"&&!(n instanceof s.Slice)&&n.$$type==="Deploy"&&(a=s.beginCell().store(M(n)).endCell()),a===null)throw new Error("Invalid message type");await e.internal(t,{...o,body:a})}async getValue(e){let t=new s.TupleBuilder;return(await e.get("value",t.build())).stack.readBigNumber()}}function Q(r){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(r.queryId,64)}}function x(r){return e=>{let t=e;t.storeUint(1315244728,32),t.storeUint(r.value,32)}}function T(r){return e=>{let t=e;t.storeUint(2577471031,32),t.storeAddress(r.counter),t.storeUint(r.target,32)}}async function m(){const r=s.Cell.fromBase64("te6ccgECDQEAAxcAART/APSkE/S88sgLAQIBYgIDAubQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GLtRNDUAfhj0gABlNMfATGOjjD4KNcLCoMJuvLgids84lnbPDDI+EMBzH8BygABAcsfye1UBAUAuaF3owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwTgN6k73yqLLeOOp6e8CrOGTQThOy6ctWadluZ0HSzbKM3RSQACcAT2cCHXScIflTAg1wsf3gKSW3/gIYIQmaEWN7qPTTHTHwGCEJmhFje68uCB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJAdMfWWwSMnCAQotXF1ZXJ5jbPH9VMG1t2zx/4CGCEE5lCri64wIBghCUapi2CAsGBwJiMdMfAYIQTmUKuLry4IHTHwExIbmPGfhCcIBCi5aW5jcmVtZW50jbPH9VMG1t2zzefwgLAVC6jqLTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J2zx/4DBwCgFCyHAByx9vAAFvjG1vjAHbPG8iAcmTIW6zlgFvIlnMyegxCQC6INdKIddJlyDCACLCALGOSgNvIoB/Is8xqwKhBasCUVW2CCDCAJwgqgIV1xhQM88WQBTeWW8CU0GhwgCZyAFvAlBEoaoCjhIxM8IAmdQw0CDXSiHXSZJwIOLi6F8DARp/+EJwWAOAQgFtbds8CwHOyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WUAP6AnABymgjbrMlbrOxlzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AAwAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMw="),e=s.Cell.fromBase64("te6cckECDwEAAyEAAQHAAQEFobL5AgEU/wD0pBP0vPLICwMCAWIFBAC5oXejBOC52Hq6WVz2PQnYc6yVCjbNBOE7rGpaVsj5ZkWnXlv74sRzBOBAq4A3AM7HKZywdVyOS2WHBOA3qTvfKost446np7wKs4ZNBOE7Lpy1Zp2W5nQdLNsozdFJAubQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GLtRNDUAfhj0gABlNMfATGOjjD4KNcLCoMJuvLgids84lnbPDDI+EMBzH8BygABAcsfye1UDgYE9nAh10nCH5UwINcLH94Cklt/4CGCEJmhFje6j00x0x8BghCZoRY3uvLggfpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiQHTH1lsEjJwgEKLVxdWVyeY2zx/VTBtbds8f+AhghBOZQq4uuMCAYIQlGqYtgwKCQcBULqOotMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8nbPH/gMHAIARp/+EJwWAOAQgFtbds8CgJiMdMfAYIQTmUKuLry4IHTHwExIbmPGfhCcIBCi5aW5jcmVtZW50jbPH9VMG1t2zzefwwKAc7IcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxZQA/oCcAHKaCNusyVus7GXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsACwCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAFCyHAByx9vAAFvjG1vjAHbPG8iAcmTIW6zlgFvIlnMyegxDQC6INdKIddJlyDCACLCALGOSgNvIoB/Is8xqwKhBasCUVW2CCDCAJwgqgIV1xhQM88WQBTeWW8CU0GhwgCZyAFvAlBEoaoCjhIxM8IAmdQw0CDXSiHXSZJwIOLi6F8DAAJwY58RhQ==");let t=s.beginCell();t.storeRef(e),t.storeUint(0,1);const o=t.endCell();return{code:r,data:o}}const O={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class u{constructor(e,t){i(this,"address");i(this,"init");i(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"CounterValue",header:1315244728,fields:[]},{name:"Reach",header:2577471031,fields:[]}],errors:O});this.address=e,this.init=t}static async init(){return await m()}static async fromInit(){const e=await m(),t=s.contractAddress(0,e);return new u(t,e)}static fromAddress(e){return new u(e)}async send(e,t,o,n){let a=null;if(n&&typeof n=="object"&&!(n instanceof s.Slice)&&n.$$type==="Reach"&&(a=s.beginCell().store(T(n)).endCell()),n&&typeof n=="object"&&!(n instanceof s.Slice)&&n.$$type==="CounterValue"&&(a=s.beginCell().store(x(n)).endCell()),n&&typeof n=="object"&&!(n instanceof s.Slice)&&n.$$type==="Deploy"&&(a=s.beginCell().store(Q(n)).endCell()),a===null)throw new Error("Invalid message type");await e.internal(t,{...o,body:a})}}function J(r,e,t){let o;v(r,C,l=>t(3,o=l));let n,a,A;return b(C,o={markdown:D,tactCode:E,deploy:async()=>{const l=await H.Blockchain.create(),c=await l.treasury("deployer");n=c.getSender(),a=l.openContract(await g.fromInit()),A=l.openContract(await u.fromInit());const y={[c.address.toString()]:"deployer",[a.address.toString()]:"Counter",[A.address.toString()]:"BulkAdder"};return[[a,A],y,[await a.send(c.getSender(),{value:s.toNano(1)},{$$type:"Deploy",queryId:0n}),await A.send(c.getSender(),{value:s.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{"Reach{5}":async()=>[await A.send(n,{value:s.toNano(1)},{$$type:"Reach",counter:a.address,target:5n})]},getters:{value:async()=>await a.getValue()},prev:d(import.meta.url).prev,next:d(import.meta.url).next},o),[]}class k extends f{constructor(e){super(),B(this,e,J,null,p,{})}}export{k as default};
