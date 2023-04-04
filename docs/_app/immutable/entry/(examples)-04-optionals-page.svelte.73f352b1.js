var I=Object.defineProperty;var w=(t,s,e)=>s in t?I(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e;var a=(t,s,e)=>(w(t,typeof s!="symbol"?s+"":s,e),e);import{S as C,i as p,s as y,I as m,ac as b}from"../chunks/index.9fe14626.js";import{d as l,g as u,s as c}from"../chunks/store.d3ab02ad.js";import{d as Q}from"../chunks/index.78404594.js";const f="# Optionals\n\nOptionals are variables or struct fields that can be null and don't necessarily hold a value. They are useful to reduce state size when the variable isn't necessarily used.\n\nYou can make any variable optional by adding `?` after its type.\n\nOptional variables that are not defined hold the `null` value. You cannot access them without checking for `null` first.\n\nIf you're certain an optional variable is not null, append to the end of its name `!!` to access its value. Trying to access the value without `!!` will result in a compilation error.",v=`import "@stdlib/deploy";

struct StrctOpts {
    sa: Int?;
    sb: Bool?;
    sc: Address?;
}

message MsgOpts {
    ma: Int?;
    mb: Bool?;
    mc: Address?;
    md: StrctOpts?;
}

contract Optionals with Deployable {

    ca: Int?;
    cb: Bool?;
    cc: Address?;
    cd: StrctOpts?;

    init(a: Int?, b: Bool?, c: Address?) {
        self.ca = a;
        self.cb = b;
        self.cc = c;
        self.cd = StrctOpts{sa: null, sb: true, sc: null};
    }

    receive(msg: MsgOpts) {
        let i: Int = 12;
        if (msg.ma != null) {
            i = i + msg.ma!!; // !! tells the compiler this can't be null
            self.ca = i;
        }
    }

    get fun optInt(): Int? {
        return self.ca;
    }

    get fun optIntVal(): Int {
        if (self.ca == null) {
            return -1;
        } else {
            return self.ca!!; // !! tells the compiler this can't be null
        }
    }

    get fun optNested(): Int? {
        if (self.cd != null && (self.cd!!).sa != null) {
            return (self.cd!!).sa!!; // !! tells the compiler this can't be null
        } else {
            return null;
        }
    }
}`;function M(t){return s=>{let e=s;e.storeUint(2490013878,32),e.storeUint(t.queryId,64)}}function E(t){return s=>{let e=s;t.sa!==null&&t.sa!==void 0?e.storeBit(!0).storeInt(t.sa,257):e.storeBit(!1),t.sb!==null&&t.sb!==void 0?e.storeBit(!0).storeBit(t.sb):e.storeBit(!1),e.storeAddress(t.sc)}}function h(t){return s=>{let e=s;e.storeUint(162313165,32),t.ma!==null&&t.ma!==void 0?e.storeBit(!0).storeInt(t.ma,257):e.storeBit(!1),t.mb!==null&&t.mb!==void 0?e.storeBit(!0).storeBit(t.mb):e.storeBit(!1),e.storeAddress(t.mc);let r=new l.Builder;t.md!==null&&t.md!==void 0?(r.storeBit(!0),r.store(E(t.md))):r.storeBit(!1),e.storeRef(r.endCell())}}function L(t){return s=>{let e=s;t.a!==null&&t.a!==void 0?e.storeBit(!0).storeInt(t.a,257):e.storeBit(!1),t.b!==null&&t.b!==void 0?e.storeBit(!0).storeBit(t.b):e.storeBit(!1),e.storeAddress(t.c)}}async function B(t,s,e){const r=l.Cell.fromBase64("te6ccgECGwEABNcAART/APSkE/S88sgLAQIBYgIDA3bQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVE9s8MBQEBQIBIAoLAqxwIddJwh+VMCDXCx/eApJbf+AhghAJrLPNuuMCAYIQlGqYtrqOrdMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8l/+EJwWAOAQgFtbds8f+AwcAYHAeDI+EMBzH8BygBVMCNus5t/UAXKABOBAQHPAJgzcFAEygAQI+IhbrOWfwHKAMoAlHAyygDiASBulTBwAcsBjh4g10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbiyCJus5UycFjKAOMNyQHMye1UCQHqMdMfAYIQCayzzbry4IHSAAGVgQEB1wCSbQHi0gABktIAkm0B4vpAIdcLAcMAjh0BINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiJIxbeIB1AHQ0gABkjBt4w0UQzBsFF8DIG6zmjQDIG7y0ICmDAORMOJ/FgHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAIAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAMB/AcoAAiBu8tCAbyMQNCJus5t/UATKABKBAQHPAJcycFADygAS4iFus5Z/AcoAygCUcDLKAOIBIG6VMHABywGOHiDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFuICEb4D9tnm2eNiDBQMAgEgDQ4ARiBus5sgIG7y0IBvI1tus5Fw4p4gIG7y0IBvI1sgbvLQgOBtAgEgDxACAUgZGgIBWBESALm3ejBOC52Hq6WVz2PQnYc6yVCjbNBOE7rGpaVsj5ZkWnXlv74sRzBOBAq4A3AM7HKZywdVyOS2WHBOA3qTvfKost446np7wKs4ZNBOE7Lpy1Zp2W5nQdLNsozdFJACEaxD7Z5tnjYgwBQTAhGtCe2ebZ42IMAUFQAWI26Rf+AjIG7y0IAC1u1E0NQB+GPSAAGO09IAAZWBAQHXAJJtAeLSAAGS0gCSbQHi+kAh1wsBwwCOHQEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIkjFt4gHUAdDSAAGSMG3jDRRDMGwU4Pgo1wsKgwm68uCJFhcAAiMAkNIAAZWBAQHXAJJtAeLSAAGS0gCSbQHi+kAh1wsBwwCOHQEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIkjFt4kMwbBNvAwGS0gABlYEBAdcAkm0B4tIAAZLSAJJtAeL6QCHXCwHDAI4dASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IiSMW3iQzAD0VjbPBgACm1/bW8DABGwr7tRNDSAAGAAdbJu40NWlwZnM6Ly9RbVRFdDRzR0h2MmdieEhiU1ZSVXp0MVpYdzdtN0dYeUJhaXBMckpDTVpvUE5Igg"),n=l.Cell.fromBase64("te6cckECHQEABOEAAQHAAQEFoB0zAgEU/wD0pBP0vPLICwMCAWISBAIBIBAFAgEgCQYCAUgIBwB1sm7jQ1aXBmczovL1FtVEV0NHNHSHYyZ2J4SGJTVlJVenQxWlh3N203R1h5QmFpcExySkNNWm9QTkiCAAEbCvu1E0NIAAYAIBIAsKALm3ejBOC52Hq6WVz2PQnYc6yVCjbNBOE7rGpaVsj5ZkWnXlv74sRzBOBAq4A3AM7HKZywdVyOS2WHBOA3qTvfKost446np7wKs4ZNBOE7Lpy1Zp2W5nQdLNsozdFJACAVgODAIRrQntnm2eNiDAGQ0AAiMCEaxD7Z5tnjYgwBkPABYjbpF/4CMgbvLQgAIRvgP22ebZ42IMGREARiBus5sgIG7y0IBvI1tus5Fw4p4gIG7y0IBvI1sgbvLQgOBtA3bQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVE9s8MBkVEwHgyPhDAcx/AcoAVTAjbrObf1AFygATgQEBzwCYM3BQBMoAECPiIW6zln8BygDKAJRwMsoA4gEgbpUwcAHLAY4eINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8W4sgibrOVMnBYygDjDckBzMntVBQAwH8BygACIG7y0IBvIxA0Im6zm39QBMoAEoEBAc8AlzJwUAPKABLiIW6zln8BygDKAJRwMsoA4gEgbpUwcAHLAY4eINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8W4gKscCHXScIflTAg1wsf3gKSW3/gIYIQCayzzbrjAgGCEJRqmLa6jq3THwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/Jf/hCcFgDgEIBbW3bPH/gMHAYFgHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAXAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAeox0x8BghAJrLPNuvLggdIAAZWBAQHXAJJtAeLSAAGS0gCSbQHi+kAh1wsBwwCOHQEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIkjFt4gHUAdDSAAGSMG3jDRRDMGwUXwMgbrOaNAMgbvLQgKYMA5Ew4n8cAtbtRNDUAfhj0gABjtPSAAGVgQEB1wCSbQHi0gABktIAkm0B4vpAIdcLAcMAjh0BINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiJIxbeIB1AHQ0gABkjBt4w0UQzBsFOD4KNcLCoMJuvLgiRwaAZLSAAGVgQEB1wCSbQHi0gABktIAkm0B4vpAIdcLAcMAjh0BINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiJIxbeJDMAPRWNs8GwAKbX9tbwMAkNIAAZWBAQHXAJJtAeLSAAGS0gCSbQHi+kAh1wsBwwCOHQEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIkjFt4kMwbBNvA24T46M=");let A=l.beginCell();A.storeRef(n),A.storeUint(0,1),L({$$type:"Optionals_init_args",a:t,b:s,c:e})(A);const o=A.endCell();return{code:r,data:o}}const J={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class i{constructor(s,e){a(this,"address");a(this,"init");a(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]},{name:"StrctOpts",header:null,fields:[]},{name:"MsgOpts",header:162313165,fields:[]}],errors:J});this.address=s,this.init=e}static async init(s,e,r){return await B(s,e,r)}static async fromInit(s,e,r){const n=await B(s,e,r),A=l.contractAddress(0,n);return new i(A,n)}static fromAddress(s){return new i(s)}async send(s,e,r,n){let A=null;if(n&&typeof n=="object"&&!(n instanceof l.Slice)&&n.$$type==="MsgOpts"&&(A=l.beginCell().store(h(n)).endCell()),n&&typeof n=="object"&&!(n instanceof l.Slice)&&n.$$type==="Deploy"&&(A=l.beginCell().store(M(n)).endCell()),A===null)throw new Error("Invalid message type");await s.internal(e,{...r,body:A})}async getOptInt(s){let e=new l.TupleBuilder;return(await s.get("optInt",e.build())).stack.readBigNumberOpt()}async getOptIntVal(s){let e=new l.TupleBuilder;return(await s.get("optIntVal",e.build())).stack.readBigNumber()}async getOptNested(s){let e=new l.TupleBuilder;return(await s.get("optNested",e.build())).stack.readBigNumberOpt()}}function D(t,s,e){let r;m(t,c,o=>e(2,r=o));let n,A;return b(c,r={markdown:f,tactCode:v,deploy:async()=>{const o=await Q.Blockchain.create(),g=await o.treasury("deployer");n=g.getSender(),A=o.openContract(await i.fromInit(null,null,null));const d={[g.address.toString()]:"deployer",[A.address.toString()]:"contract"};return[[A],d,[await A.send(g.getSender(),{value:l.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{"MsgOpts{ma:5}":async()=>[await A.send(n,{value:l.toNano(1)},{$$type:"MsgOpts",ma:5n,mb:null,mc:null,md:null})]},getters:{optInt:async()=>await A.getOptInt(),optIntVal:async()=>await A.getOptIntVal(),optNested:async()=>await A.getOptNested()},prev:u(import.meta.url).prev,next:u(import.meta.url).next},r),[]}class k extends C{constructor(s){super(),p(this,s,D,null,y,{})}}export{k as default};
