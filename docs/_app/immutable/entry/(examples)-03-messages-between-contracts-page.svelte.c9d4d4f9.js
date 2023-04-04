var h=Object.defineProperty;var f=(r,e,t)=>e in r?h(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var A=(r,e,t)=>(f(r,typeof e!="symbol"?e+"":e,t),t);import{S as B,i as I,s as p,I as b,ac as v}from"../chunks/index.9fe14626.js";import{d as s,g as d,s as C}from"../chunks/store.d3ab02ad.js";import{d as E}from"../chunks/index.78404594.js";const H=`# Messages Between Contracts

Different contracts can only communicate with each other by sending each other messages. This example shows two separate contracts that work together:

* \`Counter\` - Our simple counter that can only increment by 1.

* \`BulkAdder\` - This contract will tell \`Counter\` to increment multiple times.

Press the <span class="mdButton blue">Deploy</span> button to deploy both. Then, to make the counter reach 5, send BulkAdder the \`Reach\` message by pressing the <span class="mdButton grape">Send Reach{5}</span> button.

Notice how many messages are sent back and forth between the two contracts as a result. Each of these messages is processed as a *separate* transaction! Also notice that BulkAdder can't call a *getter* on Counter, it must send the \`query\` message instead.

## Who's paying for gas

The default behavior is that the original sender will pay for the entire cascade of messages that they triggered. This is funded from the original TON coin value sent on the first \`Reach\` message.

Under the hood, this works by each message handler sending the remaining excess TON coin value it received on the next message it sends out.

**Challenge:** modify the code to refund the original sender any unused excess gas.`,D=`import "@stdlib/deploy";

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
}`;function Q(r){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(r.queryId,64)}}async function w(){const r=s.Cell.fromBase64("te6ccgECEgEAAu0AART/APSkE/S88sgLAQIBYgIDApTQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxZ2zwwyPhDAcx/AcoAAQHLH8ntVA8EAgFYCQoCru2i7ftwIddJwh+VMCDXCx/eApJbf+AhghCUapi2uo6uMdMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8l/+EJwWAOAQgFtbds8f+ABwACRMOMNcAcFAt75ASCC8MT41yMS7f3vW3vseDO9uxYtFRG9eKkSrtDyY3r2VXKuuo6hMKQgyAGCEE5lCrhYyx/LH8l/+EJwWAOAQgFtbds8f9sx4ILwFmePoYWL344arXlvTJ0LVxL8CRef+HgB52Ok3Urc9xC64wIHBgE+IMgBghBOZQq4WMsfyx/Jf/hCcFgDgEIBbW3bPH/bMQcByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsACACYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAC5u70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIAgFICwwAEbCvu1E0NIAAYAIBag0OAHOndxoatLgzOZ0Xl6i2qaMzt6G6vSUrqBiwpyicGjuiuTEaK6IpoZsyOzwjLLgnOa0tHDamoKcitpnBAg2lgbZ5tnhjDxABPO1E0NQB+GPSAAGU0x8BMeAw+CjXCwqDCbry4InbPBEAAiAAAnA="),e=s.Cell.fromBase64("te6cckECFAEAAvcAAQHAAQEFoendAgEU/wD0pBP0vPLICwMCAWIMBAIBWAsFAgFICgYCAWoJBwINpYG2ebZ4YxIIAAIgAHOndxoatLgzOZ0Xl6i2qaMzt6G6vSUrqBiwpyicGjuiuTEaK6IpoZsyOzwjLLgnOa0tHDamoKcitpnBABGwr7tRNDSAAGAAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSAKU0AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8Wds8MMj4QwHMfwHKAAEByx/J7VQSDQKu7aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEJRqmLa6jq4x0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yX/4QnBYA4BCAW1t2zx/4AHAAJEw4w1wEA4C3vkBIILwxPjXIxLt/e9be+x4M727Fi0VEb14qRKu0PJjevZVcq66jqEwpCDIAYIQTmUKuFjLH8sfyX/4QnBYA4BCAW1t2zx/2zHggvAWZ4+hhYvfjhqteW9MnQtXEvwJF5/4eAHnY6TdStz3ELrjAhAPAT4gyAGCEE5lCrhYyx/LH8l/+EJwWAOAQgFtbds8f9sxEAHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wARAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMATztRNDUAfhj0gABlNMfATHgMPgo1wsKgwm68uCJ2zwTAAJwqi6ujA==");let t=s.beginCell();t.storeRef(e),t.storeUint(0,1);const o=t.endCell();return{code:r,data:o}}const M={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class g{constructor(e,t){A(this,"address");A(this,"init");A(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"CounterValue",header:1315244728,fields:[]},{name:"Reach",header:2577471031,fields:[]}],errors:M});this.address=e,this.init=t}static async init(){return await w()}static async fromInit(){const e=await w(),t=s.contractAddress(0,e);return new g(t,e)}static fromAddress(e){return new g(e)}async send(e,t,o,n){let a=null;if(n==="increment"&&(a=s.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n==="query"&&(a=s.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n&&typeof n=="object"&&!(n instanceof s.Slice)&&n.$$type==="Deploy"&&(a=s.beginCell().store(Q(n)).endCell()),a===null)throw new Error("Invalid message type");await e.internal(t,{...o,body:a})}async getValue(e){let t=new s.TupleBuilder;return(await e.get("value",t.build())).stack.readBigNumber()}}function x(r){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(r.queryId,64)}}function J(r){return e=>{let t=e;t.storeUint(1315244728,32),t.storeUint(r.value,32)}}function O(r){return e=>{let t=e;t.storeUint(2577471031,32),t.storeAddress(r.counter),t.storeUint(r.target,32)}}async function m(){const r=s.Cell.fromBase64("te6ccgECEQEAAtgAART/APSkE/S88sgLAQIBYgIDApTQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxZ2zwwyPhDAcx/AcoAAQHLH8ntVAQFAgFYDQ4BPO1E0NQB+GPSAAGU0x8BMeAw+CjXCwqDCbry4InbPAYE3nAh10nCH5UwINcLH94Cklt/4CGCEJmhFje6j0Ax0x8BghCZoRY3uvLggfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB0x9ZbBIycIBCiH9VMG1t2zx/4CGCEE5lCri64wIBghCUapi2ugcLCAkAAnAAEgAAAABxdWVyeQJKMdMfAYIQTmUKuLry4IHTHwExIbmPDfhCcIBCiH9VMG1t2zzefwoLAWSOrdMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8l/+EJwWAOAQgFtbds8f+AwcAsAGgAAAABpbmNyZW1lbnQByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsADACYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAC5u70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIAgFIDxAAEbCvu1E0NIAAYAB1sm7jQ1aXBmczovL1FtVExiNFdmZmQyUGtFSjhhMkNROWhmV3BkQmJKV29EYm5Bd1BnVFliSFp4Y0OCA="),e=s.Cell.fromBase64("te6cckECEwEAAuIAAQHAAQEFobL5AgEU/wD0pBP0vPLICwMCAWIJBAIBWAgFAgFIBwYAdbJu40NWlwZnM6Ly9RbVRMYjRXZmZkMlBrRUo4YTJDUTloZldwZEJiSldvRGJuQXdQZ1RZYkhaeGNDggABGwr7tRNDSAAGAAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSAKU0AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8Wds8MMj4QwHMfwHKAAEByx/J7VQRCgTecCHXScIflTAg1wsf3gKSW3/gIYIQmaEWN7qPQDHTHwGCEJmhFje68uCB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAHTH1lsEjJwgEKIf1UwbW3bPH/gIYIQTmUKuLrjAgGCEJRqmLa6EA4MCwFkjq3THwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/Jf/hCcFgDgEIBbW3bPH/gMHAOAkox0x8BghBOZQq4uvLggdMfATEhuY8N+EJwgEKIf1UwbW3bPN5/DQ4AGgAAAABpbmNyZW1lbnQByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsADwCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAASAAAAAHF1ZXJ5ATztRNDUAfhj0gABlNMfATHgMPgo1wsKgwm68uCJ2zwSAAJw9BeHjQ==");let t=s.beginCell();t.storeRef(e),t.storeUint(0,1);const o=t.endCell();return{code:r,data:o}}const S={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class u{constructor(e,t){A(this,"address");A(this,"init");A(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"CounterValue",header:1315244728,fields:[]},{name:"Reach",header:2577471031,fields:[]}],errors:S});this.address=e,this.init=t}static async init(){return await m()}static async fromInit(){const e=await m(),t=s.contractAddress(0,e);return new u(t,e)}static fromAddress(e){return new u(e)}async send(e,t,o,n){let a=null;if(n&&typeof n=="object"&&!(n instanceof s.Slice)&&n.$$type==="Reach"&&(a=s.beginCell().store(O(n)).endCell()),n&&typeof n=="object"&&!(n instanceof s.Slice)&&n.$$type==="CounterValue"&&(a=s.beginCell().store(J(n)).endCell()),n&&typeof n=="object"&&!(n instanceof s.Slice)&&n.$$type==="Deploy"&&(a=s.beginCell().store(x(n)).endCell()),a===null)throw new Error("Invalid message type");await e.internal(t,{...o,body:a})}}function L(r,e,t){let o;b(r,C,l=>t(3,o=l));let n,a,i;return v(C,o={markdown:H,tactCode:D,deploy:async()=>{const l=await E.Blockchain.create(),c=await l.treasury("deployer");n=c.getSender(),a=l.openContract(await g.fromInit()),i=l.openContract(await u.fromInit());const y={[c.address.toString()]:"deployer",[a.address.toString()]:"Counter",[i.address.toString()]:"BulkAdder"};return[[a,i],y,[await a.send(c.getSender(),{value:s.toNano(1)},{$$type:"Deploy",queryId:0n}),await i.send(c.getSender(),{value:s.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{"Reach{5}":async()=>[await i.send(n,{value:s.toNano(1)},{$$type:"Reach",counter:a.address,target:5n})]},getters:{value:async()=>await a.getValue()},prev:d(import.meta.url).prev,next:d(import.meta.url).next},o),[]}class k extends B{constructor(e){super(),I(this,e,L,null,p,{})}}export{k as default};
