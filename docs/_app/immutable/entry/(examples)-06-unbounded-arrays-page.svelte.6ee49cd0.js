var C=Object.defineProperty;var I=(s,e,t)=>e in s?C(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var d=(s,e,t)=>(I(s,typeof e!="symbol"?e+"":e,t),t);import{S as f,i as w,s as B,I as h,ac as T}from"../chunks/index.9fe14626.js";import{d as a,g as p,s as g}from"../chunks/store.d3ab02ad.js";import{d as E}from"../chunks/index.78404594.js";const k=`# Unbounded Arrays - Todo List

In general, inifinite data structures that can actually grow to billions of elements are very difficult to implement on blockchain. As the contract persistent state grows in size, read and write operations become more expensive in gas. In the extreme, they may cost more than a transaction gas limit, rendering the contract unusable.

**It is therefore important to design contracts to have an upper bound on state size.** If so, how would we implement a todo list that can scale to billions of items?

## Infinitely scalable todo list

The secret of infinite scalability on TON is sharding the data across multiple contracts. We can apply the parent-child design pattern to do just this.

In this example, every new todo item is a new deployed child contract. The user will interact with the children through the \`TodoParent\` contract.

When the user sends the \`NewTodo\` message to the parent, the parent deploys a new child to hold the new item. If users want to query the item details, they can call the parent getter \`todoAddress()\` and then call the \`details()\` getter on the child.

This example also handles gas efficiently. The excess gas from every operation is refunded to the original sender.`,b=`import "@stdlib/deploy";
import "@stdlib/ownable";

message NewTodo {
    task: String;
}

message NewTodoResponse {
    seqno: Int as uint256;
}

message CompleteTodo {
    seqno: Int as uint256;
}

// users are supposed to interact with this parent contract only
contract TodoParent with Deployable, Ownable {
 
    owner: Address;
    numTodos: Int as uint256 = 0;

    init() {
        self.owner = sender(); // set the owner as the deployer
    }

    // anybody can add a new todo, not just the owner
    receive(msg: NewTodo) {
        self.numTodos = self.numTodos + 1;
        let init: StateInit = initOf TodoChild(myAddress(), self.numTodos);
        send(SendParameters{
            to: contractAddress(init),
            body: InternalSetTask{task: msg.task}.toCell(),
            value: ton("0.02"),             // pay for the deployment and leave some TON in the child for storage
            mode: SendIgnoreErrors,
            code: init.code,                // deploy the child
            data: init.data
        });
        self.reply(NewTodoResponse{seqno: self.numTodos}.toCell()); // this will return excess gas to sender
    }

    // only the owner can mark a todo as completed
    receive(msg: CompleteTodo) {
        self.requireOwner();
        require(msg.seqno <= self.numTodos, "Todo does not exist");
        send(SendParameters{ // this will forward excess gas
            to: contractAddress(initOf TodoChild(myAddress(), msg.seqno)),
            body: InternalComplete{excess: sender()}.toCell(),
            value: 0, /// TODO: https://github.com/tact-lang/tact/issues/31
            mode: SendRemainingValue + SendIgnoreErrors /// TODO: issues/31
        });
    }

    get fun numTodos(): Int {
        return self.numTodos;
    }

    get fun todoAddress(seqno: Int): Address {
        return contractAddress(initOf TodoChild(myAddress(), seqno));
    }
}

////////////////////////////////////////////////////////////////////////////
// child contract - internal interface that users shouldn't access directly

message InternalSetTask {
    task: String;
}

message InternalComplete {
    excess: Address;
}

struct TodoDetails {
    task: String;
    completed: Bool;
}

contract TodoChild {

    parent: Address;
    seqno: Int as uint256;
    task: String = "";
    completed: Bool = false;
 
    init(parent: Address, seqno: Int) {
        self.parent = parent;
        self.seqno = seqno;
    }

    receive(msg: InternalSetTask) {
        require(sender() == self.parent, "Parent only");
        self.task = msg.task;
    }

    receive(msg: InternalComplete) {
        require(sender() == self.parent, "Parent only");
        self.completed = true;
        send(SendParameters{ // this will return excess gas to original sender
            to: msg.excess,
            value: 0, /// TODO: https://github.com/tact-lang/tact/issues/31
            mode: SendRemainingBalance + SendIgnoreErrors /// TODO: issues/31
        });
    }

     get fun details(): TodoDetails {
        return TodoDetails{task: self.task, completed: self.completed};
    }
}
`;function Q(s){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(s.queryId,64)}}function D(s){return e=>{let t=e;t.storeUint(1804651575,32),t.storeStringRefTail(s.task)}}function M(s){return e=>{let t=e;t.storeUint(2587315870,32),t.storeUint(s.seqno,256)}}async function y(){const s=a.Cell.fromBase64("te6ccgECHgEABPUAART/APSkE/S88sgLAQIBYgIDAtTQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxa2zzy4ILI+EMBzH8BygBZWSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFsv/ye1UGwQCASAODwO6AZIwf+BwIddJwh+VMCDXCx/eIIIQa5DMN7qOlTDTHwGCEGuQzDe68uCB1AHQMds8f+AgghCaN06euo6VMNMfAYIQmjdOnrry4IHT/wEx2zx/4IIQlGqYtrrjAjBwBQYHA+ABpPhD+Cgi2zxccFnIcAHLAXMBywFwAcsAEszMyfkAyHIBywFwAcsAEsoHy//J0CDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgEyAGCELvq5l5Yyx/IWM8WyQHMyRA0ggkxLQBacll/BkVV2zwgFgwIA6xZ2zyBLMBTMbvy9PhD+ChBBNs8cFnIcAHLAXMBywFwAcsAEszMyfkAyHIBywFwAcsAEsoHy//J0CDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4Ij4QgkWCgFO0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yfhCAXBt2zx/CwEqyAGCEOVj455Yyx/L/8n4QgF/bds8CwAS+EJSIMcF8uCEAWzIAYIQzwCMTFjLHwEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbJcIBCfwQDbW3bPAEMATptbSJus5lbIG7y0IBvIgGRMuIQJHADBIBCUCPbPAwByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsADQCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAIRviju2ebZ42EMGxACASAREgACIQIBWBMUAgEgFxgCE7HVds8WNs8bCGAbFQDdsvRgnBc7D1dLK57HoTsOdZKhRtmgnCd1jUtK2R8syLTry398WI5gnAgVcAbgGdjlM5YOq5HJbLDgnAb1J3vlUWW8cdT094FWcMmgnCdl05as07LczoOlm2UZuikgnBAznVp5xX50lCwHWFuJkeygAZD4Q/goWNs8cFnIcAHLAXMBywFwAcsAEszMyfkAyHIBywFwAcsAEsoHy//J0CDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgWAKIC0PQEMG0BgWhBAYAQ9A9vofLghwGBaEEiAoAQ9BfIAcj0AMkBzHABygBAA1kg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxaBAQHPAMkCASAZGgIRt477Z5tnjYQwGxwAEbCvu1E0NIAAYAB1sm7jQ1aXBmczovL1FtWENXdXZmMVBlVHZhY3lwdWkyYVBza295d1hZUU1HUWdOVUVHY1hiWkU4R1iCABgO1E0NQB+GPSAAGOJfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB0/9ZbBLgMPgo1wsKgwm68uCJ2zwdAAIgAAhw+EIB"),e=a.Cell.fromBase64("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");let t=a.beginCell();t.storeRef(e),t.storeUint(0,1);const o=t.endCell();return{code:s,data:o}}const L={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"},11456:{message:"Todo does not exist"},54404:{message:"Parent only"}},v=[{name:"StateInit",header:null,fields:[{name:"code",type:{kind:"simple",type:"cell",optional:!1}},{name:"data",type:{kind:"simple",type:"cell",optional:!1}}]},{name:"Context",header:null,fields:[{name:"bounced",type:{kind:"simple",type:"bool",optional:!1}},{name:"sender",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"raw",type:{kind:"simple",type:"slice",optional:!1}}]},{name:"SendParameters",header:null,fields:[{name:"bounce",type:{kind:"simple",type:"bool",optional:!1}},{name:"to",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"mode",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"body",type:{kind:"simple",type:"cell",optional:!0}},{name:"code",type:{kind:"simple",type:"cell",optional:!0}},{name:"data",type:{kind:"simple",type:"cell",optional:!0}}]},{name:"Deploy",header:2490013878,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"DeployOk",header:2952335191,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"FactoryDeploy",header:1829761339,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}},{name:"cashback",type:{kind:"simple",type:"address",optional:!1}}]},{name:"ChangeOwner",header:2174598809,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}},{name:"newOwner",type:{kind:"simple",type:"address",optional:!1}}]},{name:"ChangeOwnerOk",header:846932810,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}},{name:"newOwner",type:{kind:"simple",type:"address",optional:!1}}]},{name:"NewTodo",header:1804651575,fields:[{name:"task",type:{kind:"simple",type:"string",optional:!1}}]},{name:"NewTodoResponse",header:3848528798,fields:[{name:"seqno",type:{kind:"simple",type:"uint",optional:!1,format:256}}]},{name:"CompleteTodo",header:2587315870,fields:[{name:"seqno",type:{kind:"simple",type:"uint",optional:!1,format:256}}]},{name:"InternalSetTask",header:3152733790,fields:[{name:"task",type:{kind:"simple",type:"string",optional:!1}}]},{name:"InternalComplete",header:3472919628,fields:[{name:"excess",type:{kind:"simple",type:"address",optional:!1}}]},{name:"TodoDetails",header:null,fields:[{name:"task",type:{kind:"simple",type:"string",optional:!1}},{name:"completed",type:{kind:"simple",type:"bool",optional:!1}}]}],H=[{name:"numTodos",arguments:[],returnType:{kind:"simple",type:"int",optional:!1,format:257}},{name:"todoAddress",arguments:[{name:"seqno",type:{kind:"simple",type:"int",optional:!1,format:257}}],returnType:{kind:"simple",type:"address",optional:!1}},{name:"owner",arguments:[],returnType:{kind:"simple",type:"address",optional:!1}}],S=[{receiver:"internal",message:{kind:"typed",type:"NewTodo"}},{receiver:"internal",message:{kind:"typed",type:"CompleteTodo"}},{receiver:"internal",message:{kind:"typed",type:"Deploy"}}];class m{constructor(e,t){d(this,"address");d(this,"init");d(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"FactoryDeploy",header:1829761339,fields:[]},{name:"ChangeOwner",header:2174598809,fields:[]},{name:"ChangeOwnerOk",header:846932810,fields:[]},{name:"NewTodo",header:1804651575,fields:[]},{name:"NewTodoResponse",header:3848528798,fields:[]},{name:"CompleteTodo",header:2587315870,fields:[]},{name:"InternalSetTask",header:3152733790,fields:[]},{name:"InternalComplete",header:3472919628,fields:[]},{name:"TodoDetails",header:null,fields:[]}],types:v,getters:H,receivers:S,errors:L});this.address=e,this.init=t}static async init(){return await y()}static async fromInit(){const e=await y(),t=a.contractAddress(0,e);return new m(t,e)}static fromAddress(e){return new m(e)}async send(e,t,o,n){let r=null;if(n&&typeof n=="object"&&!(n instanceof a.Slice)&&n.$$type==="NewTodo"&&(r=a.beginCell().store(D(n)).endCell()),n&&typeof n=="object"&&!(n instanceof a.Slice)&&n.$$type==="CompleteTodo"&&(r=a.beginCell().store(M(n)).endCell()),n&&typeof n=="object"&&!(n instanceof a.Slice)&&n.$$type==="Deploy"&&(r=a.beginCell().store(Q(n)).endCell()),r===null)throw new Error("Invalid message type");await e.internal(t,{...o,body:r})}async getNumTodos(e){let t=new a.TupleBuilder;return(await e.get("numTodos",t.build())).stack.readBigNumber()}async getTodoAddress(e,t){let o=new a.TupleBuilder;return o.writeNumber(t),(await e.get("todoAddress",o.build())).stack.readAddress()}async getOwner(e){let t=new a.TupleBuilder;return(await e.get("owner",t.build())).stack.readAddress()}}function N(s){return e=>{let t=e;t.storeUint(3152733790,32),t.storeStringRefTail(s.task)}}function O(s){return e=>{let t=e;t.storeUint(3472919628,32),t.storeAddress(s.excess)}}function z(s){let e=s.readString(),t=s.readBoolean();return{$$type:"TodoDetails",task:e,completed:t}}function x(s){return e=>{let t=e;t.storeAddress(s.parent),t.storeInt(s.seqno,257)}}async function u(s,e){const t=a.Cell.fromBase64("te6ccgECEQEAAxcAART/APSkE/S88sgLAQIBYgIDAu7QAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVE9s88uCCyPhDAcx/AcoAVTBQQyDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFsv/yFADzxbJWMzKAMntVA4EAgFYCAkBkAGSMH/gcCHXScIflTAg1wsf3iCCELvq5l66jiAw0x8BghC76uZeuvLggdQB0DEyggDUhPhCUlDHBfL0f+CCEM8AjEy64wIwcAUBktMfAYIQzwCMTLry4IH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIMTGCANSE+EJSUMcF8vR/AXCBAIJ/VSBtbW3bPH8GAcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AAcAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSAIBSAoLABGwr7tRNDSAAGACASAMDQIRrDVtnm2eNiFADg8AdazdxoatLgzOZ0Xl6i2qCW7maOwmrixuqEivDimpjQ5u7wjqrGqKbohOTiro7iZuzImNrWoObe9GzDBAAd7tRNDUAfhj0gABjiz6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAdP/1AHQAdIAVTBsFOD4KNcLCoMJuvLgifpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgBgQEB1wBZAtEB2zwQAAJcAAaLCHA="),o=a.Cell.fromBase64("te6cckECEwEAAyEAAQHAAQEFoNCDAgEU/wD0pBP0vPLICwMCAWIMBAIBWAsFAgFICgYCASAIBwB1rN3Ghq0uDM5nReXqLaoJbuZo7CauLG6oSK8OKamNDm7vCOqsaopuiE5OKujuJm7MiY2tag5t70bMMEACEaw1bZ5tnjYhQBEJAAJcABGwr7tRNDSAAGAAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSALu0AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8VRPbPPLggsj4QwHMfwHKAFUwUEMg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbL/8hQA88WyVjMygDJ7VQRDQGQAZIwf+BwIddJwh+VMCDXCx/eIIIQu+rmXrqOIDDTHwGCELvq5l668uCB1AHQMTKCANSE+EJSUMcF8vR/4IIQzwCMTLrjAjBwDgGS0x8BghDPAIxMuvLggfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgxMYIA1IT4QlJQxwXy9H8BcIEAgn9VIG1tbds8fw8ByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsAEACYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAHe7UTQ1AH4Y9IAAY4s+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAHT/9QB0AHSAFUwbBTg+CjXCwqDCbry4In6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAYEBAdcAWQLRAds8EgAGiwhw4HwhKg==");let n=a.beginCell();n.storeRef(o),n.storeUint(0,1),x({$$type:"TodoChild_init_args",parent:s,seqno:e})(n);const r=n.endCell();return{code:t,data:r}}const J={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"},11456:{message:"Todo does not exist"},54404:{message:"Parent only"}},P=[{name:"StateInit",header:null,fields:[{name:"code",type:{kind:"simple",type:"cell",optional:!1}},{name:"data",type:{kind:"simple",type:"cell",optional:!1}}]},{name:"Context",header:null,fields:[{name:"bounced",type:{kind:"simple",type:"bool",optional:!1}},{name:"sender",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"raw",type:{kind:"simple",type:"slice",optional:!1}}]},{name:"SendParameters",header:null,fields:[{name:"bounce",type:{kind:"simple",type:"bool",optional:!1}},{name:"to",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"mode",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"body",type:{kind:"simple",type:"cell",optional:!0}},{name:"code",type:{kind:"simple",type:"cell",optional:!0}},{name:"data",type:{kind:"simple",type:"cell",optional:!0}}]},{name:"Deploy",header:2490013878,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"DeployOk",header:2952335191,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"FactoryDeploy",header:1829761339,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}},{name:"cashback",type:{kind:"simple",type:"address",optional:!1}}]},{name:"ChangeOwner",header:2174598809,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}},{name:"newOwner",type:{kind:"simple",type:"address",optional:!1}}]},{name:"ChangeOwnerOk",header:846932810,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}},{name:"newOwner",type:{kind:"simple",type:"address",optional:!1}}]},{name:"NewTodo",header:1804651575,fields:[{name:"task",type:{kind:"simple",type:"string",optional:!1}}]},{name:"NewTodoResponse",header:3848528798,fields:[{name:"seqno",type:{kind:"simple",type:"uint",optional:!1,format:256}}]},{name:"CompleteTodo",header:2587315870,fields:[{name:"seqno",type:{kind:"simple",type:"uint",optional:!1,format:256}}]},{name:"InternalSetTask",header:3152733790,fields:[{name:"task",type:{kind:"simple",type:"string",optional:!1}}]},{name:"InternalComplete",header:3472919628,fields:[{name:"excess",type:{kind:"simple",type:"address",optional:!1}}]},{name:"TodoDetails",header:null,fields:[{name:"task",type:{kind:"simple",type:"string",optional:!1}},{name:"completed",type:{kind:"simple",type:"bool",optional:!1}}]}],F=[{name:"details",arguments:[],returnType:{kind:"simple",type:"TodoDetails",optional:!1}}],G=[{receiver:"internal",message:{kind:"typed",type:"InternalSetTask"}},{receiver:"internal",message:{kind:"typed",type:"InternalComplete"}}];class A{constructor(e,t){d(this,"address");d(this,"init");d(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"FactoryDeploy",header:1829761339,fields:[]},{name:"ChangeOwner",header:2174598809,fields:[]},{name:"ChangeOwnerOk",header:846932810,fields:[]},{name:"NewTodo",header:1804651575,fields:[]},{name:"NewTodoResponse",header:3848528798,fields:[]},{name:"CompleteTodo",header:2587315870,fields:[]},{name:"InternalSetTask",header:3152733790,fields:[]},{name:"InternalComplete",header:3472919628,fields:[]},{name:"TodoDetails",header:null,fields:[]}],types:P,getters:F,receivers:G,errors:J});this.address=e,this.init=t}static async init(e,t){return await u(e,t)}static async fromInit(e,t){const o=await u(e,t),n=a.contractAddress(0,o);return new A(n,o)}static fromAddress(e){return new A(e)}async send(e,t,o,n){let r=null;if(n&&typeof n=="object"&&!(n instanceof a.Slice)&&n.$$type==="InternalSetTask"&&(r=a.beginCell().store(N(n)).endCell()),n&&typeof n=="object"&&!(n instanceof a.Slice)&&n.$$type==="InternalComplete"&&(r=a.beginCell().store(O(n)).endCell()),r===null)throw new Error("Invalid message type");await e.internal(t,{...o,body:r})}async getDetails(e){let t=new a.TupleBuilder,o=(await e.get("details",t.build())).stack;return z(o)}}function U(s,e,t){let o;h(s,g,l=>t(3,o=l));let n,r,i;return T(g,o={markdown:k,tactCode:b,deploy:async()=>{n=await E.Blockchain.create();const l=await n.treasury("deployer");r=l.getSender(),i=n.openContract(await m.fromInit());const c={[l.address.toString()]:"deployer",[i.address.toString()]:"TodoParent",[(await A.fromInit(i.address,1n)).address.toString()]:"TodoChild(1)",[(await A.fromInit(i.address,2n)).address.toString()]:"TodoChild(2)",[(await A.fromInit(i.address,3n)).address.toString()]:"TodoChild(3)"};return[[i],c,[await i.send(l.getSender(),{value:a.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{'NewTodo{"bla"}':async()=>[await i.send(r,{value:a.toNano(1)},{$$type:"NewTodo",task:"bla"})],"CompleteTodo{2}":async()=>[await i.send(r,{value:a.toNano(1)},{$$type:"CompleteTodo",seqno:2n})]},getters:{numTodos:async()=>await i.getNumTodos(),"details(todoAddress(2))":async()=>{const l=await i.getTodoAddress(2n);return await n.openContract(await A.fromAddress(l)).getDetails()}},prev:p(import.meta.url).prev,next:p(import.meta.url).next},o),[]}class j extends f{constructor(e){super(),w(this,e,U,null,B,{})}}export{j as default};
