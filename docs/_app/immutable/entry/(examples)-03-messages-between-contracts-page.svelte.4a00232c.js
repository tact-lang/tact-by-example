var C=Object.defineProperty;var h=(s,e,t)=>e in s?C(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var l=(s,e,t)=>(h(s,typeof e!="symbol"?e+"":e,t),t);import{S as w,i as B,s as I,I as b,ac as v}from"../chunks/index.9fe14626.js";import{d as a,g as m,s as p}from"../chunks/store.476c3091.js";import{d as k}from"../chunks/index.c056099e.js";const D=`# Messages Between Contracts

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
        self.reply(CounterValue{value: self.val}.toCell());
    }

    // step 3: this contract replies with its current value to anyone asking (ie. the other contract)
    receive("query") {
        self.reply(CounterValue{value: self.val}.toCell());
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
}`;function H(s){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(s.queryId,64)}}async function y(){const s=a.Cell.fromBase64("te6ccgECEwEAAvwAART/APSkE/S88sgLAQIBYgIDApjQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxZ2zzy4ILI+EMBzH8BygABAcsfye1UEAQCAVgKCwKg7aLt+wGSMH/gcCHXScIflTAg1wsf3iCCEJRqmLa6jqgw0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yfhCAXBt2zx/4MAAkTDjDXAHBQLS+QEggvDE+NcjEu3971t77HgzvbsWLRURvXipEq7Q8mN69lVyrrqOmzCkIMgBghBOZQq4WMsfyx/J+EIBf23bPH/bMeCC8BZnj6GFi9+OGq15b0ydC1cS/AkXn/h4AedjpN1K3PcQuuMCBwYBMiDIAYIQTmUKuFjLH8sfyfhCAX9t2zx/2zEHATptbSJus5lbIG7y0IBvIgGRMuIQJHADBIBCUCPbPAgByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsACQCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAC5u70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIAgFIDA0AEbCvu1E0NIAAYAIBag4PAHOndxoatLgzOZ0Xl6i2sxu8mac7NpoyoiqiO6a0m6mzKDE6IzatGK07HKOpube0HLW3LKOnIrWauShBAg2lgbZ5tnhjEBEBPO1E0NQB+GPSAAGU0x8BMeAw+CjXCwqDCbry4InbPBIAAiAAAnA="),e=a.Cell.fromBase64("te6cckECFQEAAwYAAQHAAQEFoendAgEU/wD0pBP0vPLICwMCAWIMBAIBWAsFAgFICgYCAWoJBwINpYG2ebZ4YxMIAAIgAHOndxoatLgzOZ0Xl6i2sxu8mac7NpoyoiqiO6a0m6mzKDE6IzatGK07HKOpube0HLW3LKOnIrWauShBABGwr7tRNDSAAGAAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSAKY0AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8Wds88uCCyPhDAcx/AcoAAQHLH8ntVBMNAqDtou37AZIwf+BwIddJwh+VMCDXCx/eIIIQlGqYtrqOqDDTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J+EIBcG3bPH/gwACRMOMNcBAOAtL5ASCC8MT41yMS7f3vW3vseDO9uxYtFRG9eKkSrtDyY3r2VXKuuo6bMKQgyAGCEE5lCrhYyx/LH8n4QgF/bds8f9sx4ILwFmePoYWL344arXlvTJ0LVxL8CRef+HgB52Ok3Urc9xC64wIQDwEyIMgBghBOZQq4WMsfyx/J+EIBf23bPH/bMRABOm1tIm6zmVsgbvLQgG8iAZEy4hAkcAMEgEJQI9s8EQHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wASAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMATztRNDUAfhj0gABlNMfATHgMPgo1wsKgwm68uCJ2zwUAAJw6bJCag==");let t=a.beginCell();t.storeRef(e),t.storeUint(0,1);const r=t.endCell();return{code:s,data:r}}const M={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}},Q=[{name:"StateInit",header:null,fields:[{name:"code",type:{kind:"simple",type:"cell",optional:!1}},{name:"data",type:{kind:"simple",type:"cell",optional:!1}}]},{name:"Context",header:null,fields:[{name:"bounced",type:{kind:"simple",type:"bool",optional:!1}},{name:"sender",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"raw",type:{kind:"simple",type:"slice",optional:!1}}]},{name:"SendParameters",header:null,fields:[{name:"bounce",type:{kind:"simple",type:"bool",optional:!1}},{name:"to",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"mode",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"body",type:{kind:"simple",type:"cell",optional:!0}},{name:"code",type:{kind:"simple",type:"cell",optional:!0}},{name:"data",type:{kind:"simple",type:"cell",optional:!0}}]},{name:"Deploy",header:2490013878,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"DeployOk",header:2952335191,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"FactoryDeploy",header:1829761339,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}},{name:"cashback",type:{kind:"simple",type:"address",optional:!1}}]},{name:"CounterValue",header:1315244728,fields:[{name:"value",type:{kind:"simple",type:"uint",optional:!1,format:32}}]},{name:"Reach",header:2577471031,fields:[{name:"counter",type:{kind:"simple",type:"address",optional:!1}},{name:"target",type:{kind:"simple",type:"uint",optional:!1,format:32}}]}],O=[{name:"value",arguments:[],returnType:{kind:"simple",type:"int",optional:!1,format:257}}],J=[{receiver:"internal",message:{kind:"text",text:"increment"}},{receiver:"internal",message:{kind:"text",text:"query"}},{receiver:"internal",message:{kind:"typed",type:"Deploy"}}];class A{constructor(e,t){l(this,"address");l(this,"init");l(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"FactoryDeploy",header:1829761339,fields:[]},{name:"CounterValue",header:1315244728,fields:[]},{name:"Reach",header:2577471031,fields:[]}],types:Q,getters:O,receivers:J,errors:M});this.address=e,this.init=t}static async init(){return await y()}static async fromInit(){const e=await y(),t=a.contractAddress(0,e);return new A(t,e)}static fromAddress(e){return new A(e)}async send(e,t,r,n){let o=null;if(n==="increment"&&(o=a.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n==="query"&&(o=a.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n&&typeof n=="object"&&!(n instanceof a.Slice)&&n.$$type==="Deploy"&&(o=a.beginCell().store(H(n)).endCell()),o===null)throw new Error("Invalid message type");await e.internal(t,{...r,body:o})}async getValue(e){let t=new a.TupleBuilder;return(await e.get("value",t.build())).stack.readBigNumber()}}function S(s){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(s.queryId,64)}}function L(s){return e=>{let t=e;t.storeUint(1315244728,32),t.storeUint(s.value,32)}}function T(s){return e=>{let t=e;t.storeUint(2577471031,32),t.storeAddress(s.counter),t.storeUint(s.target,32)}}async function g(){const s=a.Cell.fromBase64("te6ccgECEgEAAvMAART/APSkE/S88sgLAQIBYgIDApjQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxZ2zzy4ILI+EMBzH8BygABAcsfye1UBAUCAVgODwE87UTQ1AH4Y9IAAZTTHwEx4DD4KNcLCoMJuvLgids8BgTcAZIwf+BwIddJwh+VMCDXCx/eIIIQmaEWN7qPQDDTHwGCEJmhFje68uCB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAHTH1lsEjJwgEKIf1UwbW3bPH/gIIIQTmUKuLrjAoIQlGqYtroHDAgJAAJwABIAAAAAcXVlcnkCSjDTHwGCEE5lCri68uCB0x8BMSG5jw34QnCAQoh/VTBtbds83n8KDAFYjqfTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J+EIBcG3bPH/gMHALABoAAAAAaW5jcmVtZW50ATptbSJus5lbIG7y0IBvIgGRMuIQJHADBIBCUCPbPAwByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsADQCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAC5u70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIAgFIEBEAEbCvu1E0NIAAYAB1sm7jQ1aXBmczovL1FtWW5ZTnBDQldKbjE3MW9Rc2ZnV0JrTktGeTFOWGFYRlZ1bmNlZk04NzJMNkiCA="),e=a.Cell.fromBase64("te6cckECFAEAAv0AAQHAAQEFobL5AgEU/wD0pBP0vPLICwMCAWIJBAIBWAgFAgFIBwYAdbJu40NWlwZnM6Ly9RbVluWU5wQ0JXSm4xNzFvUXNmZ1dCa05LRnkxTlhhWEZWdW5jZWZNODcyTDZIggABGwr7tRNDSAAGAAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSAKY0AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8Wds88uCCyPhDAcx/AcoAAQHLH8ntVBIKBNwBkjB/4HAh10nCH5UwINcLH94gghCZoRY3uo9AMNMfAYIQmaEWN7ry4IH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAdMfWWwSMnCAQoh/VTBtbds8f+AgghBOZQq4uuMCghCUapi2uhEPDQsBWI6n0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yfhCAXBt2zx/4DBwDAE6bW0ibrOZWyBu8tCAbyIBkTLiECRwAwSAQlAj2zwPAkow0x8BghBOZQq4uvLggdMfATEhuY8N+EJwgEKIf1UwbW3bPN5/Dg8AGgAAAABpbmNyZW1lbnQByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsAEACYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAASAAAAAHF1ZXJ5ATztRNDUAfhj0gABlNMfATHgMPgo1wsKgwm68uCJ2zwTAAJwifjLMA==");let t=a.beginCell();t.storeRef(e),t.storeUint(0,1);const r=t.endCell();return{code:s,data:r}}const x={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}},N=[{name:"StateInit",header:null,fields:[{name:"code",type:{kind:"simple",type:"cell",optional:!1}},{name:"data",type:{kind:"simple",type:"cell",optional:!1}}]},{name:"Context",header:null,fields:[{name:"bounced",type:{kind:"simple",type:"bool",optional:!1}},{name:"sender",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"raw",type:{kind:"simple",type:"slice",optional:!1}}]},{name:"SendParameters",header:null,fields:[{name:"bounce",type:{kind:"simple",type:"bool",optional:!1}},{name:"to",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"mode",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"body",type:{kind:"simple",type:"cell",optional:!0}},{name:"code",type:{kind:"simple",type:"cell",optional:!0}},{name:"data",type:{kind:"simple",type:"cell",optional:!0}}]},{name:"Deploy",header:2490013878,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"DeployOk",header:2952335191,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"FactoryDeploy",header:1829761339,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}},{name:"cashback",type:{kind:"simple",type:"address",optional:!1}}]},{name:"CounterValue",header:1315244728,fields:[{name:"value",type:{kind:"simple",type:"uint",optional:!1,format:32}}]},{name:"Reach",header:2577471031,fields:[{name:"counter",type:{kind:"simple",type:"address",optional:!1}},{name:"target",type:{kind:"simple",type:"uint",optional:!1,format:32}}]}],z=[],U=[{receiver:"internal",message:{kind:"typed",type:"Reach"}},{receiver:"internal",message:{kind:"typed",type:"CounterValue"}},{receiver:"internal",message:{kind:"typed",type:"Deploy"}}];class u{constructor(e,t){l(this,"address");l(this,"init");l(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"FactoryDeploy",header:1829761339,fields:[]},{name:"CounterValue",header:1315244728,fields:[]},{name:"Reach",header:2577471031,fields:[]}],types:N,getters:z,receivers:U,errors:x});this.address=e,this.init=t}static async init(){return await g()}static async fromInit(){const e=await g(),t=a.contractAddress(0,e);return new u(t,e)}static fromAddress(e){return new u(e)}async send(e,t,r,n){let o=null;if(n&&typeof n=="object"&&!(n instanceof a.Slice)&&n.$$type==="Reach"&&(o=a.beginCell().store(T(n)).endCell()),n&&typeof n=="object"&&!(n instanceof a.Slice)&&n.$$type==="CounterValue"&&(o=a.beginCell().store(L(n)).endCell()),n&&typeof n=="object"&&!(n instanceof a.Slice)&&n.$$type==="Deploy"&&(o=a.beginCell().store(S(n)).endCell()),o===null)throw new Error("Invalid message type");await e.internal(t,{...r,body:o})}}function K(s,e,t){let r;b(s,p,d=>t(3,r=d));let n,o,i;return v(p,r={markdown:D,tactCode:E,deploy:async()=>{const d=await k.Blockchain.create(),c=await d.treasury("deployer");n=c.getSender(),o=d.openContract(await A.fromInit()),i=d.openContract(await u.fromInit());const f={[c.address.toString()]:"deployer",[o.address.toString()]:"Counter",[i.address.toString()]:"BulkAdder"};return[[o,i],f,[await o.send(c.getSender(),{value:a.toNano(1)},{$$type:"Deploy",queryId:0n}),await i.send(c.getSender(),{value:a.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{"Reach{5}":async()=>[await i.send(n,{value:a.toNano(1)},{$$type:"Reach",counter:o.address,target:5n})]},getters:{value:async()=>await o.getValue()},prev:m(import.meta.url).prev,next:m(import.meta.url).next},r),[]}class P extends w{constructor(e){super(),B(this,e,K,null,I,{})}}export{P as default};
