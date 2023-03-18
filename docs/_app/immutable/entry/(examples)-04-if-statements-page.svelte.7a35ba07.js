var I=Object.defineProperty;var w=(o,e,t)=>e in o?I(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var A=(o,e,t)=>(w(o,typeof e!="symbol"?e+"":e,t),t);import{S as h,i as m,s as f,I as y,ac as B}from"../chunks/index.9fe14626.js";import{d as a,g as d,s as g}from"../chunks/store.cab86f52.js";import{d as p}from"../chunks/index.f166c76f.js";const D=`# If Statements

Tact supports if statements in a similar syntax to most programming languages that you're used to. Curly braces are required though, so you can't leave them out.

The condition of the statement can be any boolean expression.

There is no \`switch\` statement in Tact. If you need to need to handle a group of outcomes separately, follow the \`else if\` patten you can see in the third example.`,b=`import "@stdlib/deploy";

contract IfStatements with Deployable {

    val: Int as int32;

    init() {
        self.val = 17;
    }

    receive("check1") {
        if (self.val > 10) {
            dump("larger than 10");
        }
    }

    receive("check2")  {
        if (self.val > 100) {
            dump("larger than 100");
        } else {
            dump("smaller than 100");
        }
    }

    receive("check3") {
        if (self.val > 1000) {
            dump("larger than 1000");
        } else if (self.val > 500) {
            dump("between 500 and 1000");
        } else {
            dump("smaller than 500");
        }
    }
}`;function M(o){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(o.queryId,64)}}async function u(){const o=a.Cell.fromBase64("te6ccgECDQEAAzMAART/APSkE/S88sgLAQIBYgIDAubQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GLtRNDUAfhj0gABlNIfATGOjjD4KNcLCoMJuvLgids84lnbPDDI+EMBzH8BygABAcofye1UBAUAuaF3owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwTgN6k73yqLLeOOp6e8CrOGTQThOy6ctWadluZ0HSzbKM3RSQAEgBECmO2i7ftwIddJwh+VMCDXCx/eApJbf+AhghCUapi2uo6jMdMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8nbPH/gAcAAkTDjDXAGBwEaf/hCcFgDgEIBbW3bPAgC2PkBIILwlvnIQ+L6lj0XS8W2iA5RB/skcXEwsDIS64SdXaXSFdi6jh0wIMIKjhOL5sYXJnZXIgdGhhbiAxMI/hQw3n/bMeAggvAJVw2BQS4Jib9Yrs43K57jAgMdbnHh0Jjgq5DjWDpQWrrjAgoLAc7IcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxZQA/oCcAHKaCNusyVus7GXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsACQCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzABsMCDCZI4Ui/bGFyZ2VyIHRoYW4gMTAwj+FDCOFo0EHNtYWxsZXIgdGhhbiAxMDCD+FDDif9sxAUqC8NBDYMMSH7POcZRyhe+a0NYghu9M8+BSFUslqxQ36myouuMCDAC6IIED6LyOFo0EGxhcmdlciB0aGFuIDEwMDCD+FDCOOiCBAfS8jhqNBRiZXR3ZWVuIDUwMCBhbmQgMTAwMIP4UMI4WjQQc21hbGxlciB0aGFuIDUwMIP4UMOLif9sx"),e=a.Cell.fromBase64("te6cckECDwEAAz0AAQHAAQEFofytAgEU/wD0pBP0vPLICwMCAWIFBAC5oXejBOC52Hq6WVz2PQnYc6yVCjbNBOE7rGpaVsj5ZkWnXlv74sRzBOBAq4A3AM7HKZywdVyOS2WHBOA3qTvfKost446np7wKs4ZNBOE7Lpy1Zp2W5nQdLNsozdFJAubQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GLtRNDUAfhj0gABlNIfATGOjjD4KNcLCoMJuvLgids84lnbPDDI+EMBzH8BygABAcofye1UDgYCmO2i7ftwIddJwh+VMCDXCx/eApJbf+AhghCUapi2uo6jMdMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8nbPH/gAcAAkTDjDXALBwLY+QEggvCW+chD4vqWPRdLxbaIDlEH+yRxcTCwMhLrhJ1dpdIV2LqOHTAgwgqOE4vmxhcmdlciB0aGFuIDEwj+FDDef9sx4CCC8AlXDYFBLgmJv1iuzjcrnuMCAx1uceHQmOCrkONYOlBauuMCCggBSoLw0ENgwxIfs85xlHKF75rQ1iCG70zz4FIVSyWrFDfqbKi64wIJALoggQPovI4WjQQbGFyZ2VyIHRoYW4gMTAwMIP4UMI46IIEB9LyOGo0FGJldHdlZW4gNTAwIGFuZCAxMDAwg/hQwjhaNBBzbWFsbGVyIHRoYW4gNTAwg/hQw4uJ/2zEAbDAgwmSOFIv2xhcmdlciB0aGFuIDEwMI/hQwjhaNBBzbWFsbGVyIHRoYW4gMTAwg/hQw4n/bMQEaf/hCcFgDgEIBbW3bPAwBzshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFlAD+gJwAcpoI26zJW6zsZczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wANAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAASAEWBMslg=");let t=a.beginCell();t.storeRef(e),t.storeUint(0,1);const r=t.endCell();return{code:o,data:r}}const E={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class l{constructor(e,t){A(this,"address");A(this,"init");A(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]}],errors:E});this.address=e,this.init=t}static async init(){return await u()}static async fromInit(){const e=await u(),t=a.contractAddress(0,e);return new l(t,e)}static fromAddress(e){return new l(e)}async send(e,t,r,n){let s=null;if(n==="check1"&&(s=a.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n==="check2"&&(s=a.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n==="check3"&&(s=a.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n&&typeof n=="object"&&!(n instanceof a.Slice)&&n.$$type==="Deploy"&&(s=a.beginCell().store(M(n)).endCell()),s===null)throw new Error("Invalid message type");await e.internal(t,{...r,body:s})}}function Q(o,e,t){let r;y(o,g,c=>t(2,r=c));let n,s;return B(g,r={markdown:D,tactCode:b,deploy:async()=>{const c=await p.Blockchain.create(),i=await c.treasury("deployer");n=i.getSender(),s=c.openContract(await l.fromInit());const C={[i.address.toString()]:"deployer",[s.address.toString()]:"contract"};return[[s],C,[await s.send(i.getSender(),{value:a.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{check1:async()=>[await s.send(n,{value:a.toNano(1)},"check1")],check2:async()=>[await s.send(n,{value:a.toNano(1)},"check2")],check3:async()=>[await s.send(n,{value:a.toNano(1)},"check3")]},getters:{},prev:d(import.meta.url).prev,next:d(import.meta.url).next},r),[]}class L extends h{constructor(e){super(),m(this,e,Q,null,f,{})}}export{L as default};
