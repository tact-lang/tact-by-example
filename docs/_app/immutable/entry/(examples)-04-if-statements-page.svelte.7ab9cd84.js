var I=Object.defineProperty;var w=(r,e,t)=>e in r?I(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var c=(r,e,t)=>(w(r,typeof e!="symbol"?e+"":e,t),t);import{S as h,i as m,s as y,I as f,ac as M}from"../chunks/index.9fe14626.js";import{d as a,g as d,s as g}from"../chunks/store.d3ab02ad.js";import{d as B}from"../chunks/index.78404594.js";const p=`# If Statements

Tact supports if statements in a similar syntax to most programming languages that you're used to. Curly braces are required though, so you can't leave them out.

The condition of the statement can be any boolean expression.

There is no \`switch\` statement in Tact. If you need to handle a group of outcomes separately, follow the \`else if\` patten you can see in the third example.`,D=`import "@stdlib/deploy";

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
}`;function b(r){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(r.queryId,64)}}async function u(){const r=a.Cell.fromBase64("te6ccgECEQEAA3YAART/APSkE/S88sgLAQIBYgIDApTQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxZ2zwwyPhDAcx/AcoAAQHKH8ntVAQFAgFYDQ4BPO1E0NQB+GPSAAGU0h8BMeAw+CjXCwqDCbry4InbPAYCru2i7ftwIddJwh+VMCDXCx/eApJbf+AhghCUapi2uo6uMdMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8l/+EJwWAOAQgFtbds8f+ABwACRMOMNcAcIAASAEQHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAJAtj5ASCC8Jb5yEPi+pY9F0vFtogOUQf7JHFxMLAyEuuEnV2l0hXYuo4dMCDCCo4Ti+bGFyZ2VyIHRoYW4gMTCP4UMN5/2zHgIILwCVcNgUEuCYm/WK7ONyue4wIDHW5x4dCY4KuQ41g6UFq64wIKCwCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzABsMCDCZI4Ui/bGFyZ2VyIHRoYW4gMTAwj+FDCOFo0EHNtYWxsZXIgdGhhbiAxMDCD+FDDif9sxAUqC8NBDYMMSH7POcZRyhe+a0NYghu9M8+BSFUslqxQ36myouuMCDAC6IIED6LyOFo0EGxhcmdlciB0aGFuIDEwMDCD+FDCOOiCBAfS8jhqNBRiZXR3ZWVuIDUwMCBhbmQgMTAwMIP4UMI4WjQQc21hbGxlciB0aGFuIDUwMIP4UMOLif9sxALm7vRgnBc7D1dLK57HoTsOdZKhRtmgnCd1jUtK2R8syLTry398WI5gnAgVcAbgGdjlM5YOq5HJbLDgnAb1J3vlUWW8cdT094FWcMmgnCdl05as07LczoOlm2UZuikgCAUgPEAARsK+7UTQ0gABgAHWybuNDVpcGZzOi8vUW1XdWUxSFZqcGJ1R1hlbWg5dERvY1NQakZUQ3dtM2VCM3pheUVVMzlZWUtkcYIA=="),e=a.Cell.fromBase64("te6cckECEwEAA4AAAQHAAQEFofytAgEU/wD0pBP0vPLICwMCAWIJBAIBWAgFAgFIBwYAdbJu40NWlwZnM6Ly9RbVd1ZTFIVmpwYnVHWGVtaDl0RG9jU1BqRlRDd20zZUIzemF5RVUzOVlZS2RxggABGwr7tRNDSAAGAAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSAKU0AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8Wds8MMj4QwHMfwHKAAEByh/J7VQRCgKu7aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEJRqmLa6jq4x0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yX/4QnBYA4BCAW1t2zx/4AHAAJEw4w1wDwsC2PkBIILwlvnIQ+L6lj0XS8W2iA5RB/skcXEwsDIS64SdXaXSFdi6jh0wIMIKjhOL5sYXJnZXIgdGhhbiAxMI/hQw3n/bMeAggvAJVw2BQS4Jib9Yrs43K57jAgMdbnHh0Jjgq5DjWDpQWrrjAg4MAUqC8NBDYMMSH7POcZRyhe+a0NYghu9M8+BSFUslqxQ36myouuMCDQC6IIED6LyOFo0EGxhcmdlciB0aGFuIDEwMDCD+FDCOOiCBAfS8jhqNBRiZXR3ZWVuIDUwMCBhbmQgMTAwMIP4UMI4WjQQc21hbGxlciB0aGFuIDUwMIP4UMOLif9sxAGwwIMJkjhSL9sYXJnZXIgdGhhbiAxMDCP4UMI4WjQQc21hbGxlciB0aGFuIDEwMIP4UMOJ/2zEByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsAEACYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAE87UTQ1AH4Y9IAAZTSHwEx4DD4KNcLCoMJuvLgids8EgAEgBHNmsUh");let t=a.beginCell();t.storeRef(e),t.storeUint(0,1);const o=t.endCell();return{code:r,data:o}}const U={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class i{constructor(e,t){c(this,"address");c(this,"init");c(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]}],errors:U});this.address=e,this.init=t}static async init(){return await u()}static async fromInit(){const e=await u(),t=a.contractAddress(0,e);return new i(t,e)}static fromAddress(e){return new i(e)}async send(e,t,o,n){let s=null;if(n==="check1"&&(s=a.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n==="check2"&&(s=a.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n==="check3"&&(s=a.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n&&typeof n=="object"&&!(n instanceof a.Slice)&&n.$$type==="Deploy"&&(s=a.beginCell().store(b(n)).endCell()),s===null)throw new Error("Invalid message type");await e.internal(t,{...o,body:s})}}function Q(r,e,t){let o;f(r,g,A=>t(2,o=A));let n,s;return M(g,o={markdown:p,tactCode:D,deploy:async()=>{const A=await B.Blockchain.create(),l=await A.treasury("deployer");n=l.getSender(),s=A.openContract(await i.fromInit());const C={[l.address.toString()]:"deployer",[s.address.toString()]:"contract"};return[[s],C,[await s.send(l.getSender(),{value:a.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{check1:async()=>[await s.send(n,{value:a.toNano(1)},"check1")],check2:async()=>[await s.send(n,{value:a.toNano(1)},"check2")],check3:async()=>[await s.send(n,{value:a.toNano(1)},"check3")]},getters:{},prev:d(import.meta.url).prev,next:d(import.meta.url).next},o),[]}class S extends h{constructor(e){super(),m(this,e,Q,null,y,{})}}export{S as default};
