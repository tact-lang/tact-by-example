var B=Object.defineProperty;var m=(s,e,n)=>e in s?B(s,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[e]=n;var d=(s,e,n)=>(m(s,typeof e!="symbol"?e+"":e,n),n);import{S as y,i as E,s as f,I as h,ac as Q}from"../chunks/index.9fe14626.js";import{d as o,g as C,s as u}from"../chunks/store.7ab6b232.js";import{d as p}from"../chunks/index.639aa391.js";const D=`# Unbounded Arrays - Todo List

In general, inifinite data structures that can actually grow to billions of elements are very difficult to implement on blockchain. As the contract persistent state grows in size, read and write operations become more expensive in gas. In the extreme, they may cost more than a transaction gas limit, rendering the contract unusable.

**It is therefore important to design contracts to have an upper bound on state size.** If so, how would we implement a todo list that can scale to billions of items?

## Infinitely scalable todo list

The secret of infinite scalability on TON is sharding the data across multiple contracts. We can apply the parent-child design pattern to do just this.

In this example, every new todo item is a new deployed child contract. The user will interact with the children through the \`TodoParent\` contract.

When the user sends the \`NewTodo\` message to the parent, the parent deploys a new child to hold the new item. If users want to query the item details, they can call the parent getter \`todoAddress()\` and then call the \`details()\` getter on the child.

This example also handles gas efficiently. The excess gas from every operation is refunded to the original sender.`,T=`import "@stdlib/deploy";
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
        reply(NewTodoResponse{seqno: self.numTodos}.toCell()); // this will return excess gas to sender
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
`;function L(s){return e=>{let n=e;n.storeUint(2490013878,32),n.storeUint(s.queryId,64)}}function b(s){return e=>{let n=e;n.storeUint(1804651575,32),n.storeStringRefTail(s.task)}}function J(s){return e=>{let n=e;n.storeUint(2587315870,32),n.storeUint(s.seqno,256)}}async function I(){const s=o.Cell.fromBase64("te6ccgECGQEABPkAART/APSkE/S88sgLAQIBYgIDAgLKBAUCASAODwF91AdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GKBgCvqIC0PQEMG0BgWhBAYAQ9A9vofLghwGBaEEiAoAQ9BfIAcj0AMkBzHABygBAA1kg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFoEBAc8AyYAL87UTQ1AH4Y9IAAY4q+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJAdP/WWwSjo4w+CjXCwqDCbry4InbPOJa2zwwyPhDAcx/AcoAWVkg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFsv/ye1UFwcE8nAh10nCH5UwINcLH94Cklt/4CGCEGuQzDe6j9Qx0x8BghBrkMw3uvLggdQB0DEBpPhD+Cgi8CJc2zwEyAGCELvq5l5Yyx/IWM8WyQHMyRA0ggkxLQBacll/BkVV2zwgyAGCEOVj455Yyx/L/8nbPH/gIYIQmjdOnroWDAsIBOCP5THTHwGCEJo3Tp668uCB0/8BMVnbPIEswFMxu/L0+EP4KEEE8CLbPPhCyAGCEM8AjExYyx8BINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxbJcIBCfwQDbW3bPAF/4AGCEJRqmLa6CRYMCgAQ+EIixwXy4IQBTo6i0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yds8f+AwcAsBGn/4QnBYA4BCAW1t2zwMAc7IcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxZQA/oCcAHKaCNusyVus7GXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsADQCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAKXvijvaiaGoA/DHpAADHFX0gAJBrpMCAhd15cEQQa4WFEEGE3RDAgn/dWPlwREGE3XlwRIDp/6y2CUdHGHwUa4WFQYTdeXBE7Z5xbZ5BcQAgEgERIAAjACAVgTFAKXu8d+1E0NQB+GPSAAGOKvpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiQHT/1lsEo6OMPgo1wsKgwm68uCJ2zzi2zyBcYApmx1XtRNDUAfhj0gABjir6QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkB0/9ZbBKOjjD4KNcLCoMJuvLgids84ljbPIBcVAN2y9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSCcEDOdWnnFfnSULAdYW4mR7KABFmwh+EP4KFjwIts8FgCMcFnIcAHLAXMBywFwAcsAEszMyfkAyHIBywFwAcsAEsoHy//J0CDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiQAIcPhCAQACMQ=="),e=o.Cell.fromBase64("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");let n=o.beginCell();n.storeRef(e),n.storeUint(0,1);const r=n.endCell();return{code:s,data:r}}const M={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"},11456:{message:"Todo does not exist"},54404:{message:"Parent only"}};class l{constructor(e,n){d(this,"address");d(this,"init");d(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"ChangeOwner",header:256331011,fields:[]},{name:"NewTodo",header:1804651575,fields:[]},{name:"NewTodoResponse",header:3848528798,fields:[]},{name:"CompleteTodo",header:2587315870,fields:[]},{name:"InternalSetTask",header:3152733790,fields:[]},{name:"InternalComplete",header:3472919628,fields:[]},{name:"TodoDetails",header:null,fields:[]}],errors:M});this.address=e,this.init=n}static async init(){return await I()}static async fromInit(){const e=await I(),n=o.contractAddress(0,e);return new l(n,e)}static fromAddress(e){return new l(e)}async send(e,n,r,t){let a=null;if(t&&typeof t=="object"&&!(t instanceof o.Slice)&&t.$$type==="NewTodo"&&(a=o.beginCell().store(b(t)).endCell()),t&&typeof t=="object"&&!(t instanceof o.Slice)&&t.$$type==="CompleteTodo"&&(a=o.beginCell().store(J(t)).endCell()),t&&typeof t=="object"&&!(t instanceof o.Slice)&&t.$$type==="Deploy"&&(a=o.beginCell().store(L(t)).endCell()),a===null)throw new Error("Invalid message type");await e.internal(n,{...r,body:a})}async getNumTodos(e){let n=new o.TupleBuilder;return(await e.get("numTodos",n.build())).stack.readBigNumber()}async getTodoAddress(e,n){let r=new o.TupleBuilder;return r.writeNumber(n),(await e.get("todoAddress",r.build())).stack.readAddress()}async getOwner(e){let n=new o.TupleBuilder;return(await e.get("owner",n.build())).stack.readAddress()}}function H(s){return e=>{let n=e;n.storeUint(3152733790,32),n.storeStringRefTail(s.task)}}function x(s){return e=>{let n=e;n.storeUint(3472919628,32),n.storeAddress(s.excess)}}function S(s){let e=s.readString(),n=s.readBoolean();return{$$type:"TodoDetails",task:e,completed:n}}function v(s){return e=>{let n=e;n.storeAddress(s.parent),n.storeInt(s.seqno,257)}}async function w(s,e){const n=o.Cell.fromBase64("te6ccgECDwEAA2EAART/APSkE/S88sgLAQIBYgIDAX7QAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GIEAgFYCgsD/u1E0NQB+GPSAAGOMfpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiQHT/9QB0AHSAFUwbBSOu/go1wsKgwm68uCJ+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJAYEBAdcAWQLRAds84lUT2zwMBQYBkHAh10nCH5UwINcLH94Cklt/4CGCELvq5l66jh8x0x8BghC76uZeuvLggdQB0DEyggDUhPhCJccF8vR/4AGCEM8AjEy64wIwcAcAgDDI+EMBzH8BygBVMFBDINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxbL/8hQA88WyVjMygDJ7VQBmtMfAYIQzwCMTLry4IH6QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkxMYIA1IT4QiXHBfL0fwFwgQCCf1UgbW1t2zx/CAHOyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WUAP6AnABymgjbrMlbrOxlzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AAkAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSAL7uQau1E0NQB+GPSAAGOMfpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiQHT/9QB0AHSAFUwbBSOu/go1wsKgwm68uCJ+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJAYEBAdcAWQLRAds84oDA0ABosIcAEE2zwOAARsIg=="),r=o.Cell.fromBase64("te6cckECEQEAA2sAAQHAAQEFoNCDAgEU/wD0pBP0vPLICwMCAWIJBAIBWAgFAvu5Bq7UTQ1AH4Y9IAAY4x+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJAdP/1AHQAdIAVTBsFI67+CjXCwqDCbry4In6QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkBgQEB1wBZAtEB2zzigQBgEE2zwHAARsIgC5u70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIAX7QAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GIKA/7tRNDUAfhj0gABjjH6QAEg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4IkB0//UAdAB0gBVMGwUjrv4KNcLCoMJuvLgifpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiQGBAQHXAFkC0QHbPOJVE9s8EAwLAIAwyPhDAcx/AcoAVTBQQyDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8Wy//IUAPPFslYzMoAye1UAZBwIddJwh+VMCDXCx/eApJbf+AhghC76uZeuo4fMdMfAYIQu+rmXrry4IHUAdAxMoIA1IT4QiXHBfL0f+ABghDPAIxMuuMCMHANAZrTHwGCEM8AjEy68uCB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJMTGCANSE+EIlxwXy9H8BcIEAgn9VIG1tbds8fw4BzshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFlAD+gJwAcpoI26zJW6zsZczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAPAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAAaLCHC7fJtf");let t=o.beginCell();t.storeRef(r),t.storeUint(0,1),v({$$type:"TodoChild_init_args",parent:s,seqno:e})(t);const a=t.endCell();return{code:n,data:a}}const k={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"},11456:{message:"Todo does not exist"},54404:{message:"Parent only"}};class g{constructor(e,n){d(this,"address");d(this,"init");d(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"ChangeOwner",header:256331011,fields:[]},{name:"NewTodo",header:1804651575,fields:[]},{name:"NewTodoResponse",header:3848528798,fields:[]},{name:"CompleteTodo",header:2587315870,fields:[]},{name:"InternalSetTask",header:3152733790,fields:[]},{name:"InternalComplete",header:3472919628,fields:[]},{name:"TodoDetails",header:null,fields:[]}],errors:k});this.address=e,this.init=n}static async init(e,n){return await w(e,n)}static async fromInit(e,n){const r=await w(e,n),t=o.contractAddress(0,r);return new g(t,r)}static fromAddress(e){return new g(e)}async send(e,n,r,t){let a=null;if(t&&typeof t=="object"&&!(t instanceof o.Slice)&&t.$$type==="InternalSetTask"&&(a=o.beginCell().store(H(t)).endCell()),t&&typeof t=="object"&&!(t instanceof o.Slice)&&t.$$type==="InternalComplete"&&(a=o.beginCell().store(x(t)).endCell()),a===null)throw new Error("Invalid message type");await e.internal(n,{...r,body:a})}async getDetails(e){let n=new o.TupleBuilder,r=(await e.get("details",n.build())).stack;return S(r)}}function Y(s,e,n){let r;h(s,u,i=>n(3,r=i));let t,a,A;return Q(u,r={markdown:D,tactCode:T,deploy:async()=>{t=await p.Blockchain.create();const i=await t.treasury("deployer");a=i.getSender(),A=t.openContract(await l.fromInit());const c={[i.address.toString()]:"deployer",[A.address.toString()]:"TodoParent",[(await g.fromInit(A.address,1n)).address.toString()]:"TodoChild(1)",[(await g.fromInit(A.address,2n)).address.toString()]:"TodoChild(2)",[(await g.fromInit(A.address,3n)).address.toString()]:"TodoChild(3)"};return[[A],c,[await A.send(i.getSender(),{value:o.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{'NewTodo{"bla"}':async()=>[await A.send(a,{value:o.toNano(1)},{$$type:"NewTodo",task:"bla"})],"CompleteTodo{2}":async()=>[await A.send(a,{value:o.toNano(1)},{$$type:"CompleteTodo",seqno:2n})]},getters:{numTodos:async()=>await A.getNumTodos(),"details(todoAddress(2))":async()=>{const i=await A.getTodoAddress(2n);return await t.openContract(await g.fromAddress(i)).getDetails()}},prev:C(import.meta.url).prev,next:C(import.meta.url).next},r),[]}class X extends y{constructor(e){super(),E(this,e,Y,null,f,{})}}export{X as default};
