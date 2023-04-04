var w=Object.defineProperty;var m=(s,e,t)=>e in s?w(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var i=(s,e,t)=>(m(s,typeof e!="symbol"?e+"":e,t),t);import{S as y,i as h,s as f,I as p,ac as Q}from"../chunks/index.9fe14626.js";import{d as o,g as u,s as C}from"../chunks/store.d3ab02ad.js";import{d as E}from"../chunks/index.78404594.js";const T=`# Unbounded Arrays - Todo List

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
`;function L(s){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(s.queryId,64)}}function D(s){return e=>{let t=e;t.storeUint(1804651575,32),t.storeStringRefTail(s.task)}}function H(s){return e=>{let t=e;t.storeUint(2587315870,32),t.storeUint(s.seqno,256)}}async function I(){const s=o.Cell.fromBase64("te6ccgECHQEABOAAART/APSkE/S88sgLAQIBYgIDAtDQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxa2zwwyPhDAcx/AcoAWVkg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbL/8ntVBoEAgEgDQ4DvHAh10nCH5UwINcLH94Cklt/4CGCEGuQzDe6jpUx0x8BghBrkMw3uvLggdQB0DHbPH/gIYIQmjdOnrqOlTHTHwGCEJo3Tp668uCB0/8BMds8f+ABghCUapi2uuMCMHAFBgcD4AGk+EP4KCLbPFxwWchwAcsBcwHLAXABywASzMzJ+QDIcgHLAXABywASygfL/8nQINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiATIAYIQu+rmXljLH8hYzxbJAczJEDSCCTEtAFpyWX8GRVXbPCAVCwgDrFnbPIEswFMxu/L0+EP4KEEE2zxwWchwAcsBcwHLAXABywASzMzJ+QDIcgHLAXABywASygfL/8nQINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiPhCCRUKAVrTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/Jf/hCcFgDgEIBbW3bPH8LATbIAYIQ5WPjnljLH8v/yX/4QnBYA4BCAW1t2zwLABL4QlIgxwXy4IQBbMgBghDPAIxMWMsfASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFslwgEJ/BANtbds8AQsByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsADACYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAIRviju2ebZ42EMGg8CASAQEQACIQIBWBITAgEgFhcCE7HVds8WNs8bCGAaFADdsvRgnBc7D1dLK57HoTsOdZKhRtmgnCd1jUtK2R8syLTry398WI5gnAgVcAbgGdjlM5YOq5HJbLDgnAb1J3vlUWW8cdT094FWcMmgnCdl05as07LczoOlm2UZuikgnBAznVp5xX50lCwHWFuJkeygAZD4Q/goWNs8cFnIcAHLAXMBywFwAcsAEszMyfkAyHIBywFwAcsAEsoHy//J0CDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgVAKIC0PQEMG0BgWhBAYAQ9A9vofLghwGBaEEiAoAQ9BfIAcj0AMkBzHABygBAA1kg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxaBAQHPAMkCASAYGQIRt477Z5tnjYQwGhsAEbCvu1E0NIAAYAB1sm7jQ1aXBmczovL1FtYU1Rd05XWW40Z2lHOFFpUnRBbXNUYm5XWDlveFNHYWtYNlVRamdpR1h2a06CABgO1E0NQB+GPSAAGOJfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB0/9ZbBLgMPgo1wsKgwm68uCJ2zwcAAIgAAhw+EIB"),e=o.Cell.fromBase64("te6cckECLwEAB0oAAQHAAQIBIB0CAQW80jwDART/APSkE/S88sgLBAIBYhIFAgEgEAYCASAMBwIBIAoIAhG3jvtnm2eNhDAbCQACIAIBICYLAHWybuNDVpcGZzOi8vUW1hTVF3TldZbjRnaUc4UWlSdEFtc1RibldYOW94U0dha1g2VVFqZ2lHWHZrToIAIBWA4NAN2y9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSCcEDOdWnnFfnSULAdYW4mR7KACE7HVds8WNs8bCGAbDwGQ+EP4KFjbPHBZyHABywFzAcsBcAHLABLMzMn5AMhyAcsBcAHLABLKB8v/ydAg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIGgIRviju2ebZ42EMGxEAAiEC0NAB0NMDAXGwowH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIVFBTA28E+GEC+GLbPFrbPDDI+EMBzH8BygBZWSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFsv/ye1UGxMDvHAh10nCH5UwINcLH94Cklt/4CGCEGuQzDe6jpUx0x8BghBrkMw3uvLggdQB0DHbPH/gIYIQmjdOnrqOlTHTHwGCEJo3Tp668uCB0/8BMds8f+ABghCUapi2uuMCMHAYFRQBWtMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8l/+EJwWAOAQgFtbds8fysDrFnbPIEswFMxu/L0+EP4KEEE2zxwWchwAcsBcwHLAXABywASzMzJ+QDIcgHLAXABywASygfL/8nQINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiPhCFxoWAWzIAYIQzwCMTFjLHwEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbJcIBCfwQDbW3bPAErABL4QlIgxwXy4IQD4AGk+EP4KCLbPFxwWchwAcsBcwHLAXABywASzMzJ+QDIcgHLAXABywASygfL/8nQINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiATIAYIQu+rmXljLH8hYzxbJAczJEDSCCTEtAFpyWX8GRVXbPCAaKxkBNsgBghDlY+OeWMsfy//Jf/hCcFgDgEIBbW3bPCsAogLQ9AQwbQGBaEEBgBD0D2+h8uCHAYFoQSICgBD0F8gByPQAyQHMcAHKAEADWSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFoEBAc8AyQGA7UTQ1AH4Y9IAAY4l+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAHT/1lsEuAw+CjXCwqDCbry4InbPBwACHD4QgEBBb9CDB4BFP8A9KQT9LzyyAsfAgFiKCACAVgnIQIBSCYiAgEgJCMAdazdxoatLgzOZ0Xl6i2sbO3Mxszmqi4O5sxOCW0mbghKbu7q7C7tJw9HLenNJi6oKurorSmujaoHJnBAAhGsNW2ebZ42IUAtJQACXAARsK+7UTQ0gABgALm7vRgnBc7D1dLK57HoTsOdZKhRtmgnCd1jUtK2R8syLTry398WI5gnAgVcAbgGdjlM5YOq5HJbLDgnAb1J3vlUWW8cdT094FWcMmgnCdl05as07LczoOlm2UZuikgC6tAB0NMDAXGwowH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIVFBTA28E+GEC+GLbPFUT2zwwyPhDAcx/AcoAVTBQQyDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFsv/yFADzxbJWMzKAMntVC0pAZJwIddJwh+VMCDXCx/eApJbf+AhghC76uZeuo4gMdMfAYIQu+rmXrry4IHUAdAxMoIA1IT4QlJQxwXy9H/gAYIQzwCMTLrjAjBwKgGS0x8BghDPAIxMuvLggfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgxMYIA1IT4QlJQxwXy9H8BcIEAgn9VIG1tbds8fysByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsALACYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAHe7UTQ1AH4Y9IAAY4s+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAHT/9QB0AHSAFUwbBTg+CjXCwqDCbry4In6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAYEBAdcAWQLRAds8LgAGiwhwYT14dQ==");let t=o.beginCell();t.storeRef(e),t.storeUint(0,1);const r=t.endCell();return{code:s,data:r}}const M={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"},11456:{message:"Todo does not exist"},54404:{message:"Parent only"}};class g{constructor(e,t){i(this,"address");i(this,"init");i(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"ChangeOwner",header:256331011,fields:[]},{name:"NewTodo",header:1804651575,fields:[]},{name:"NewTodoResponse",header:3848528798,fields:[]},{name:"CompleteTodo",header:2587315870,fields:[]},{name:"InternalSetTask",header:3152733790,fields:[]},{name:"InternalComplete",header:3472919628,fields:[]},{name:"TodoDetails",header:null,fields:[]}],errors:M});this.address=e,this.init=t}static async init(){return await I()}static async fromInit(){const e=await I(),t=o.contractAddress(0,e);return new g(t,e)}static fromAddress(e){return new g(e)}async send(e,t,r,n){let a=null;if(n&&typeof n=="object"&&!(n instanceof o.Slice)&&n.$$type==="NewTodo"&&(a=o.beginCell().store(D(n)).endCell()),n&&typeof n=="object"&&!(n instanceof o.Slice)&&n.$$type==="CompleteTodo"&&(a=o.beginCell().store(H(n)).endCell()),n&&typeof n=="object"&&!(n instanceof o.Slice)&&n.$$type==="Deploy"&&(a=o.beginCell().store(L(n)).endCell()),a===null)throw new Error("Invalid message type");await e.internal(t,{...r,body:a})}async getNumTodos(e){let t=new o.TupleBuilder;return(await e.get("numTodos",t.build())).stack.readBigNumber()}async getTodoAddress(e,t){let r=new o.TupleBuilder;return r.writeNumber(t),(await e.get("todoAddress",r.build())).stack.readAddress()}async getOwner(e){let t=new o.TupleBuilder;return(await e.get("owner",t.build())).stack.readAddress()}}function v(s){return e=>{let t=e;t.storeUint(3152733790,32),t.storeStringRefTail(s.task)}}function J(s){return e=>{let t=e;t.storeUint(3472919628,32),t.storeAddress(s.excess)}}function S(s){let e=s.readString(),t=s.readBoolean();return{$$type:"TodoDetails",task:e,completed:t}}function x(s){return e=>{let t=e;t.storeAddress(s.parent),t.storeInt(s.seqno,257)}}async function B(s,e){const t=o.Cell.fromBase64("te6ccgECEQEAAxYAART/APSkE/S88sgLAQIBYgIDAurQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVE9s8MMj4QwHMfwHKAFUwUEMg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbL/8hQA88WyVjMygDJ7VQOBAIBWAgJAZJwIddJwh+VMCDXCx/eApJbf+AhghC76uZeuo4gMdMfAYIQu+rmXrry4IHUAdAxMoIA1IT4QlJQxwXy9H/gAYIQzwCMTLrjAjBwBQGS0x8BghDPAIxMuvLggfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgxMYIA1IT4QlJQxwXy9H8BcIEAgn9VIG1tbds8fwYByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsABwCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAC5u70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIAgFICgsAEbCvu1E0NIAAYAIBIAwNAhGsNW2ebZ42IUAODwB1rN3Ghq0uDM5nReXqLaxs7czGzOaqLg7mzE4JbSZuCEpu7ursLu0nD0ct6c0mLqgq6uitKa6NqgcmcEAB3u1E0NQB+GPSAAGOLPpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB0//UAdAB0gBVMGwU4Pgo1wsKgwm68uCJ+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAGBAQHXAFkC0QHbPBAAAlwABosIcA=="),r=o.Cell.fromBase64("te6cckECEwEAAyAAAQHAAQEFoNCDAgEU/wD0pBP0vPLICwMCAWIMBAIBWAsFAgFICgYCASAIBwB1rN3Ghq0uDM5nReXqLaxs7czGzOaqLg7mzE4JbSZuCEpu7ursLu0nD0ct6c0mLqgq6uitKa6NqgcmcEACEaw1bZ5tnjYhQBEJAAJcABGwr7tRNDSAAGAAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSALq0AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8VRPbPDDI+EMBzH8BygBVMFBDINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8Wy//IUAPPFslYzMoAye1UEQ0BknAh10nCH5UwINcLH94Cklt/4CGCELvq5l66jiAx0x8BghC76uZeuvLggdQB0DEyggDUhPhCUlDHBfL0f+ABghDPAIxMuuMCMHAOAZLTHwGCEM8AjEy68uCB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiDExggDUhPhCUlDHBfL0fwFwgQCCf1UgbW1t2zx/DwHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAQAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAd7tRNDUAfhj0gABjiz6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAdP/1AHQAdIAVTBsFOD4KNcLCoMJuvLgifpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgBgQEB1wBZAtEB2zwSAAaLCHDCZVRa");let n=o.beginCell();n.storeRef(r),n.storeUint(0,1),x({$$type:"TodoChild_init_args",parent:s,seqno:e})(n);const a=n.endCell();return{code:t,data:a}}const N={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"},11456:{message:"Todo does not exist"},54404:{message:"Parent only"}};class l{constructor(e,t){i(this,"address");i(this,"init");i(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"ChangeOwner",header:256331011,fields:[]},{name:"NewTodo",header:1804651575,fields:[]},{name:"NewTodoResponse",header:3848528798,fields:[]},{name:"CompleteTodo",header:2587315870,fields:[]},{name:"InternalSetTask",header:3152733790,fields:[]},{name:"InternalComplete",header:3472919628,fields:[]},{name:"TodoDetails",header:null,fields:[]}],errors:N});this.address=e,this.init=t}static async init(e,t){return await B(e,t)}static async fromInit(e,t){const r=await B(e,t),n=o.contractAddress(0,r);return new l(n,r)}static fromAddress(e){return new l(e)}async send(e,t,r,n){let a=null;if(n&&typeof n=="object"&&!(n instanceof o.Slice)&&n.$$type==="InternalSetTask"&&(a=o.beginCell().store(v(n)).endCell()),n&&typeof n=="object"&&!(n instanceof o.Slice)&&n.$$type==="InternalComplete"&&(a=o.beginCell().store(J(n)).endCell()),a===null)throw new Error("Invalid message type");await e.internal(t,{...r,body:a})}async getDetails(e){let t=new o.TupleBuilder,r=(await e.get("details",t.build())).stack;return S(r)}}function z(s,e,t){let r;p(s,C,d=>t(3,r=d));let n,a,A;return Q(C,r={markdown:T,tactCode:b,deploy:async()=>{n=await E.Blockchain.create();const d=await n.treasury("deployer");a=d.getSender(),A=n.openContract(await g.fromInit());const c={[d.address.toString()]:"deployer",[A.address.toString()]:"TodoParent",[(await l.fromInit(A.address,1n)).address.toString()]:"TodoChild(1)",[(await l.fromInit(A.address,2n)).address.toString()]:"TodoChild(2)",[(await l.fromInit(A.address,3n)).address.toString()]:"TodoChild(3)"};return[[A],c,[await A.send(d.getSender(),{value:o.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{'NewTodo{"bla"}':async()=>[await A.send(a,{value:o.toNano(1)},{$$type:"NewTodo",task:"bla"})],"CompleteTodo{2}":async()=>[await A.send(a,{value:o.toNano(1)},{$$type:"CompleteTodo",seqno:2n})]},getters:{numTodos:async()=>await A.getNumTodos(),"details(todoAddress(2))":async()=>{const d=await A.getTodoAddress(2n);return await n.openContract(await l.fromAddress(d)).getDetails()}},prev:u(import.meta.url).prev,next:u(import.meta.url).next},r),[]}class U extends y{constructor(e){super(),h(this,e,z,null,f,{})}}export{U as default};
