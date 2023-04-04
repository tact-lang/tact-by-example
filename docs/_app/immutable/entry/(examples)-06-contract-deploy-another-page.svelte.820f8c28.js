var B=Object.defineProperty;var m=(s,e,t)=>e in s?B(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var d=(s,e,t)=>(m(s,typeof e!="symbol"?e+"":e,t),t);import{S as u,i as h,s as p,I,ac as C}from"../chunks/index.9fe14626.js";import{d as a,g,s as y}from"../chunks/store.d3ab02ad.js";import{d as f}from"../chunks/index.78404594.js";const b=`# A Contract Deploying Another

Contracts are not necessarily only deployed by users, they can also be deployed by other contracts.

In this example, when pressing the <span class="mdButton blue">Deploy</span> button, we only deploy one contract instance - the one with constructor argument 1.

The second instance (with constructor argument 2) will be deployed by the first contract instance when it receives the \`deploy next\` message. Send this message to the first instance by pressing the <span class="mdButton grape">Send "deploy 2nd" to 1</span> button.

## Messages containing state init

The combination of the inital code and the initial data of a contract is called the *stateInit* of the contract.

When sending any message to a contract, we can attach its *stateInit* by specifying the \`code\` and \`data\` fields of the message. This will deploy the contract if it has not already been deployed. If the contract has already been deployed, these fields will be ignored.

Notice that in this example, we piggyback the deployment on the \`indentify\` message.`,E=`import "@stdlib/deploy";

// we're going to have multiple instances of this contract, each with a different seqno
contract Todo with Deployable {

    seqno: Int as uint64;
 
    // when deploying an instance, we must specify its index (sequence number)
    init(seqno: Int) {
        self.seqno = seqno;
    }

    // this message handler will just debug print the seqno so we can see when it's called
    receive("identify") {
        dump(self.seqno);
    }

    // this message handler will cause the contract to deploy the second instance
    receive("deploy 2nd") {
        let init: StateInit = initOf Todo(2);
        let address: Address = contractAddress(init);
        send(SendParameters{
            to: address,
            value: ton("0.1"),              // pay for message, the deployment and give some TON for storage
            mode: SendIgnoreErrors,
            code: init.code,                // attaching the state init will cause the message to deploy
            data: init.data,
            body: "identify".asComment()    // we must piggyback the deployment on another message
        });
    }
}`;function Q(s){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(s.queryId,64)}}function M(s){return e=>{e.storeInt(s.seqno,257)}}async function w(s){const e=a.Cell.fromBase64("te6ccgECEQEAA7oAART/APSkE/S88sgLAQIBYgIDApTQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxZ2zwwyPhDAcx/AcoAAQHLP8ntVAQFAgFYDQ4ARu1E0NQB+GPSAAGU0z8BMeD4KNcLCoMJuvLgiYEBAdcAAQHRAq7tou37cCHXScIflTAg1wsf3gKSW3/gIYIQlGqYtrqOrjHTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/Jf/hCcFgDgEIBbW3bPH/gAcAAkTDjDXALBgKw+QEggvB2bSGJHoZfKfCmdwduN4rCPdtOz0o5Ai1EQdtvLNSE0LqOijAg2zz+FDB/2zHggvDrHm7dvPcdsbIhf27F8kb14HpdmR1M/6Waxo5e1dlp27rjAgcIAN7IIcEAmIAtAcsHAaMB3iGCODJ8snNBGdO3qaoduY4gcCBxjhQEeqkMpjAlqBKgBKoHAqQhwABFMOYwM6oCzwGOK28AcI4RI3qpCBJvjAGkA3qpBCDAABTmMyKlA5xTAm+BpjBYywcCpVnkMDHiydADvvhDcts8XHBZyHABywFzAcsBcAHLABLMzMn5AMhyAcsBcAHLABLKB8v/ydAg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIghAF9eEAcogQNUQwEn8GBQRBM9s8f9sxCQoLAGQB0PQEMG0BgVI3AYAQ9A9vofLghwGBUjciAoAQ9BfIAcj0AMkBzHABygBYAYEBAc8AyQAYAAAAAGlkZW50aWZ5AcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AAwAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSAIBSA8QABGwr7tRNDSAAGAAdbJu40NWlwZnM6Ly9RbVhuaGs2Z0FNRXJOMjVNZUFhMUZiaVpHM3hUQjhXbmpiOTRkNEVvM3V1WGtMgg"),t=a.Cell.fromBase64("te6cckECEwEAA8QAAQHAAQEFoKRvAgEU/wD0pBP0vPLICwMCAWIJBAIBWAgFAgFIBwYAdbJu40NWlwZnM6Ly9RbVhuaGs2Z0FNRXJOMjVNZUFhMUZiaVpHM3hUQjhXbmpiOTRkNEVvM3V1WGtMggABGwr7tRNDSAAGAAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSAKU0AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8Wds8MMj4QwHMfwHKAAEByz/J7VQSCgKu7aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEJRqmLa6jq4x0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yX/4QnBYA4BCAW1t2zx/4AHAAJEw4w1wEAsCsPkBIILwdm0hiR6GXynwpncHbjeKwj3bTs9KOQItREHbbyzUhNC6joowINs8/hQwf9sx4ILw6x5u3bz3HbGyIX9uxfJG9eB6XZkdTP+lmsaOXtXZadu64wIPDAO++ENy2zxccFnIcAHLAXMBywFwAcsAEszMyfkAyHIBywFwAcsAEsoHy//J0CDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IiCEAX14QByiBA1RDASfwYFBEEz2zx/2zEODRAAGAAAAABpZGVudGlmeQBkAdD0BDBtAYFSNwGAEPQPb6Hy4IcBgVI3IgKAEPQXyAHI9ADJAcxwAcoAWAGBAQHPAMkA3sghwQCYgC0BywcBowHeIYI4Mnyyc0EZ07epqh25jiBwIHGOFAR6qQymMCWoEqAEqgcCpCHAAEUw5jAzqgLPAY4rbwBwjhEjeqkIEm+MAaQDeqkEIMAAFOYzIqUDnFMCb4GmMFjLBwKlWeQwMeLJ0AHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wARAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAEbtRNDUAfhj0gABlNM/ATHg+CjXCwqDCbry4ImBAQHXAAEB0fJybN0=");let o=a.beginCell();o.storeRef(t),o.storeUint(0,1),M({$$type:"Todo_init_args",seqno:s})(o);const n=o.endCell();return{code:e,data:n}}const H={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class r{constructor(e,t){d(this,"address");d(this,"init");d(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]}],errors:H});this.address=e,this.init=t}static async init(e){return await w(e)}static async fromInit(e){const t=await w(e),o=a.contractAddress(0,t);return new r(o,t)}static fromAddress(e){return new r(e)}async send(e,t,o,n){let A=null;if(n==="identify"&&(A=a.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n==="deploy 2nd"&&(A=a.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n&&typeof n=="object"&&!(n instanceof a.Slice)&&n.$$type==="Deploy"&&(A=a.beginCell().store(Q(n)).endCell()),A===null)throw new Error("Invalid message type");await e.internal(t,{...o,body:A})}}function v(s,e,t){let o;I(s,y,i=>t(3,o=i));let n,A,c;return C(y,o={markdown:b,tactCode:E,deploy:async()=>{n=await f.Blockchain.create();const i=await n.treasury("deployer");A=i.getSender(),c=n.openContract(await r.fromInit(1n));const l={[i.address.toString()]:"deployer",[c.address.toString()]:"Todo(1)",[(await r.fromInit(2n)).address.toString()]:"Todo(2)"};return[[c],l,[await c.send(i.getSender(),{value:a.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{'"identify" to 1':async()=>[await c.send(A,{value:a.toNano(1)},"identify")],'"identify" to 2':async()=>{const i=await r.fromInit(2n);return[await n.openContract(r.fromAddress(i.address)).send(A,{value:a.toNano(1)},"identify")]},'"deploy 2nd" to 1':async()=>[await c.send(A,{value:a.toNano(1)},"deploy next")]},getters:{},prev:g(import.meta.url).prev,next:g(import.meta.url).next},o),[]}class S extends u{constructor(e){super(),h(this,e,v,null,p,{})}}export{S as default};
