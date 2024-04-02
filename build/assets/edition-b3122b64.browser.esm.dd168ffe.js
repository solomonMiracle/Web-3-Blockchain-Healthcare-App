var d=Object.defineProperty;var m=(c,e,t)=>e in c?d(c,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):c[e]=t;var a=(c,e,t)=>(m(c,typeof e!="symbol"?e+"":e,t),t);import{N as g,b as y,A as W,c as C,t as w,d as T,e as f,f as A,g as S,k as R,G as b,i as E,l as O,m as B,u as F,n as M,o as N,p as k,q as s,T as v}from"./index.5d446f14.js";import{S as I}from"./erc-1155-standard-c4641fc4.browser.esm.e4a44241.js";const o=class extends I{constructor(t,r,n){let h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},p=arguments.length>4?arguments[4]:void 0,u=arguments.length>5?arguments[5]:void 0,l=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new y(t,r,p,h,n);super(l,n,u);a(this,"mint",s(async t=>this.erc1155.mint.prepare(t)));a(this,"mintTo",s(async(t,r)=>this.erc1155.mintTo.prepare(t,r)));a(this,"mintAdditionalSupply",s(async(t,r)=>this.erc1155.mintAdditionalSupply.prepare(t,r)));a(this,"mintAdditionalSupplyTo",s(async(t,r,n)=>this.erc1155.mintAdditionalSupplyTo.prepare(t,r,n)));a(this,"mintBatch",s(async t=>this.erc1155.mintBatch.prepare(t)));a(this,"mintBatchTo",s(async(t,r)=>this.erc1155.mintBatchTo.prepare(t,r)));a(this,"burn",s(async(t,r)=>this.erc1155.burn.prepare(t,r)));this.abi=W.parse(p||[]),this.metadata=new C(this.contractWrapper,w,this.storage),this.app=new T(this.contractWrapper,this.metadata,this.storage),this.roles=new f(this.contractWrapper,o.contractRoles),this.royalties=new A(this.contractWrapper,this.metadata),this.sales=new S(this.contractWrapper),this.encoder=new R(this.contractWrapper),this.estimator=new b(this.contractWrapper),this.events=new E(this.contractWrapper),this.platformFees=new O(this.contractWrapper),this.interceptor=new B(this.contractWrapper),this.signature=new F(this.contractWrapper,this.storage,this.roles),this.owner=new M(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async getAll(t){return this.erc1155.getAll(t)}async getOwned(t){return this.erc1155.getOwned(t)}async getTotalCount(){return this.erc1155.totalCount()}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[N("transfer"),k])}async getMintTransaction(t,r){return this.erc1155.getMintTransaction(t,r)}async prepare(t,r,n){return v.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:n})}async call(t,r,n){return this.contractWrapper.call(t,r,n)}};let i=o;a(i,"contractRoles",g);export{i as Edition};
