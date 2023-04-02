var B=Object.defineProperty;var h=(s,e,t)=>e in s?B(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var c=(s,e,t)=>(h(s,typeof e!="symbol"?e+"":e,t),t);import{S as I,i as p,s as u,I as C,ac as m}from"../chunks/index.9fe14626.js";import{d as a,g,s as y}from"../chunks/store.380869d4.js";import{d as f}from"../chunks/index.b268dd33.js";const b=`# A Contract Deploying Another

Contracts are not necessarily only deployed by users, they can also be deployed by other contracts.

In this example, when pressing the <span class="mdButton blue">Deploy</span> button, we only deploy one contract instance - the one with constructor argument 1.

The second instance (with constructor argument 2) will be deployed by the first contract instance when it receives the \`deploy next\` message. Send this message to the first instance by pressing the <span class="mdButton grape">Send "deploy 2nd" to 1</span> button.

## Messages containing state init

The combination of the inital code and the initial data of a contract is called the *stateInit* of the contract.

When sending any message to a contract, we can attach its *stateInit* by specifying the \`code\` and \`data\` fields of the message. This will deploy the contract if it has not already been deployed. If the contract has already been deployed, these fields will be ignored.

Notice that in this example, we piggyback the deployment on the \`indentify\` message.`,M=`import "@stdlib/deploy";

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
}`;function E(s){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(s.queryId,64)}}function H(s){return e=>{e.storeInt(s.seqno,257)}}async function w(s){const e=a.Cell.fromBase64("te6ccgECEAEABAcAART/APSkE/S88sgLAQIBYgIDAgLLBAUAuaF3owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwTgN6k73yqLLeOOp6e8CrOGTQThOy6ctWadluZ0HSzbKM3RSQHv0AdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GLtRNDUAfhj0gABlNM/ATGOE/go1wsKgwm68uCJgQEB1wABAdHiWds8MMj4QwHMfwHKAAEByz/J7VSBgBnpwDoegIYNoDAqRuAwAh6B7fQ+XBDgMCpG5EBQAh6C+QA5HoAZIDmOADlACwAwICA54BkwAKY7aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEJRqmLa6jqMx0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yds8f+ABwACRMOMNcAcIARp/+EJwWAOAQgFtbds8DQKw+QEggvB2bSGJHoZfKfCmdwduN4rCPdtOz0o5Ai1EQdtvLNSE0LqOijAg2zz+FDB/2zHggvDrHm7dvPcdsbIhf27F8kb14HpdmR1M/6Waxo5e1dlp27rjAgkKAN7IIcEAmIAtAcsHAaMB3iGCODJ8snNBGdO3qaoduY4gcCBxjhQEeqkMpjAlqBKgBKoHAqQhwABFMOYwM6oCzwGOK28AcI4RI3qpCBJvjAGkA3qpBCDAABTmMyKlA5xTAm+BpjBYywcCpVnkMDHiydADVvhDcvAeXNs8ghAF9eEAcouGlkZW50aWZ5jbPBA1RDASfwYFBEEz2zx/2zELDA0AjHBZyHABywFzAcsBcAHLABLMzMn5AMhyAcsBcAHLABLKB8v/ydAg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkBQshwAcsfbwABb4xtb4wB2zxvIgHJkyFus5YBbyJZzMnoMQ4BzshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFlAD+gJwAcpoI26zJW6zsZczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAPALog10oh10mXIMIAIsIAsY5KA28igH8izzGrAqEFqwJRVbYIIMIAnCCqAhXXGFAzzxZAFN5ZbwJTQaHCAJnIAW8CUEShqgKOEjEzwgCZ1DDQINdKIddJknAg4uLoXwMAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMw="),t=a.Cell.fromBase64("te6cckECEgEABBEAAQHAAQEFoKRvAgEU/wD0pBP0vPLICwMCAWIFBAC5oXejBOC52Hq6WVz2PQnYc6yVCjbNBOE7rGpaVsj5ZkWnXlv74sRzBOBAq4A3AM7HKZywdVyOS2WHBOA3qTvfKost446np7wKs4ZNBOE7Lpy1Zp2W5nQdLNsozdFJAgLLBwYAZ6cA6HoCGDaAwKkbgMAIege30PlwQ4DAqRuRAUAIegvkAOR6AGSA5jgA5QAsAMCAgOeAZMAB79AHQ0wMBcbDAAZF/kXDiAfpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiVRQUwNvBPhhAvhi7UTQ1AH4Y9IAAZTTPwExjhP4KNcLCoMJuvLgiYEBAdcAAQHR4lnbPDDI+EMBzH8BygABAcs/ye1UggCmO2i7ftwIddJwh+VMCDXCx/eApJbf+AhghCUapi2uo6jMdMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8nbPH/gAcAAkTDjDXAPCQKw+QEggvB2bSGJHoZfKfCmdwduN4rCPdtOz0o5Ai1EQdtvLNSE0LqOijAg2zz+FDB/2zHggvDrHm7dvPcdsbIhf27F8kb14HpdmR1M/6Waxo5e1dlp27rjAg4KA1b4Q3LwHlzbPIIQBfXhAHKLhpZGVudGlmeY2zwQNUQwEn8GBQRBM9s8f9sxDQsQAULIcAHLH28AAW+MbW+MAds8byIByZMhbrOWAW8iWczJ6DEMALog10oh10mXIMIAIsIAsY5KA28igH8izzGrAqEFqwJRVbYIIMIAnCCqAhXXGFAzzxZAFN5ZbwJTQaHCAJnIAW8CUEShqgKOEjEzwgCZ1DDQINdKIddJknAg4uLoXwMAjHBZyHABywFzAcsBcAHLABLMzMn5AMhyAcsBcAHLABLKB8v/ydAg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkA3sghwQCYgC0BywcBowHeIYI4Mnyyc0EZ07epqh25jiBwIHGOFAR6qQymMCWoEqAEqgcCpCHAAEUw5jAzqgLPAY4rbwBwjhEjeqkIEm+MAaQDeqkEIMAAFOYzIqUDnFMCb4GmMFjLBwKlWeQwMeLJ0AEaf/hCcFgDgEIBbW3bPBABzshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFlAD+gJwAcpoI26zJW6zsZczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wARAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMknU51A==");let o=a.beginCell();o.storeRef(t),o.storeUint(0,1),H({$$type:"Todo_init_args",seqno:s})(o);const n=o.endCell();return{code:e,data:n}}const D={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class r{constructor(e,t){c(this,"address");c(this,"init");c(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]}],errors:D});this.address=e,this.init=t}static async init(e){return await w(e)}static async fromInit(e){const t=await w(e),o=a.contractAddress(0,t);return new r(o,t)}static fromAddress(e){return new r(e)}async send(e,t,o,n){let A=null;if(n==="identify"&&(A=a.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n==="deploy 2nd"&&(A=a.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n&&typeof n=="object"&&!(n instanceof a.Slice)&&n.$$type==="Deploy"&&(A=a.beginCell().store(E(n)).endCell()),A===null)throw new Error("Invalid message type");await e.internal(t,{...o,body:A})}}function Q(s,e,t){let o;C(s,y,i=>t(3,o=i));let n,A,d;return m(y,o={markdown:b,tactCode:M,deploy:async()=>{n=await f.Blockchain.create();const i=await n.treasury("deployer");A=i.getSender(),d=n.openContract(await r.fromInit(1n));const l={[i.address.toString()]:"deployer",[d.address.toString()]:"Todo(1)",[(await r.fromInit(2n)).address.toString()]:"Todo(2)"};return[[d],l,[await d.send(i.getSender(),{value:a.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{'"identify" to 1':async()=>[await d.send(A,{value:a.toNano(1)},"identify")],'"identify" to 2':async()=>{const i=await r.fromInit(2n);return[await n.openContract(r.fromAddress(i.address)).send(A,{value:a.toNano(1)},"identify")]},'"deploy 2nd" to 1':async()=>[await d.send(A,{value:a.toNano(1)},"deploy next")]},getters:{},prev:g(import.meta.url).prev,next:g(import.meta.url).next},o),[]}class N extends I{constructor(e){super(),p(this,e,Q,null,u,{})}}export{N as default};
