var f=Object.defineProperty;var m=(i,c,r)=>c in i?f(i,c,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[c]=r;var d=(i,c,r)=>(m(i,typeof c!="symbol"?c+"":c,r),r);import{ae as W,b as C,A as T,c as v,af as y,d as I,e as E,k as R,G as $,i as b,f as S,n as P,Y as q,Z as F,q as w,ag as L,w as g,T as p,F as O,P as A}from"./index.5d446f14.js";import{h as U}from"./hasERC20Allowance-1499f181.browser.esm.a8279357.js";import{S as Y}from"./erc-721-standard-c858f30e.browser.esm.deaa2a60.js";const u=class extends Y{constructor(r,e,n){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},t=arguments.length>4?arguments[4]:void 0,a=arguments.length>5?arguments[5]:void 0,o=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new C(r,e,t,s,n);super(o,n,a);d(this,"wrap",w(async(r,e,n)=>{const s=await L(e,this.storage),t=await g(n||await this.contractWrapper.getSignerAddress()),a=await this.toTokenStructList(r);return p.fromContractWrapper({contractWrapper:this.contractWrapper,method:"wrap",args:[a,s,t],parse:o=>{const k=this.contractWrapper.parseLogs("TokensWrapped",o==null?void 0:o.logs);if(k.length===0)throw new Error("TokensWrapped event not found");const l=k[0].args.tokenIdOfWrappedToken;return{id:l,receipt:o,data:()=>this.get(l)}}})}));d(this,"unwrap",w(async(r,e)=>{const n=await g(e||await this.contractWrapper.getSignerAddress());return p.fromContractWrapper({contractWrapper:this.contractWrapper,method:"unwrap",args:[r,n]})}));this.abi=T.parse(t||[]),this.metadata=new v(this.contractWrapper,y,this.storage),this.app=new I(this.contractWrapper,this.metadata,this.storage),this.roles=new E(this.contractWrapper,u.contractRoles),this.encoder=new R(this.contractWrapper),this.estimator=new $(this.contractWrapper),this.events=new b(this.contractWrapper),this.royalties=new S(this.contractWrapper,this.metadata),this.owner=new P(this.contractWrapper)}async getWrappedContents(r){const e=await this.contractWrapper.read("getWrappedContents",[r]),n=[],s=[],t=[];for(const a of e)switch(a.tokenType){case 0:{const o=await q(this.contractWrapper.getProvider(),a.assetContract);n.push({contractAddress:a.assetContract,quantity:F(a.totalAmount,o.decimals)});break}case 1:{s.push({contractAddress:a.assetContract,tokenId:a.tokenId});break}case 2:{t.push({contractAddress:a.assetContract,tokenId:a.tokenId,quantity:a.totalAmount.toString()});break}}return{erc20Tokens:n,erc721Tokens:s,erc1155Tokens:t}}async toTokenStructList(r){const e=[],n=this.contractWrapper.getProvider(),s=await this.contractWrapper.getSignerAddress();if(r.erc20Tokens)for(const t of r.erc20Tokens){const a=await O(n,t.quantity,t.contractAddress);if(!await U(this.contractWrapper,t.contractAddress,a))throw new Error(`ERC20 token with contract address "${t.contractAddress}" does not have enough allowance to transfer.

You can set allowance to the multiwrap contract to transfer these tokens by running:

await sdk.getToken("${t.contractAddress}").setAllowance("${this.getAddress()}", ${t.quantity});

`);e.push({assetContract:t.contractAddress,totalAmount:a,tokenId:0,tokenType:0})}if(r.erc721Tokens)for(const t of r.erc721Tokens){if(!await A(this.contractWrapper.getProvider(),this.getAddress(),t.contractAddress,t.tokenId,s))throw new Error(`ERC721 token "${t.tokenId}" with contract address "${t.contractAddress}" is not approved for transfer.

You can give approval the multiwrap contract to transfer this token by running:

await sdk.getNFTCollection("${t.contractAddress}").setApprovalForToken("${this.getAddress()}", ${t.tokenId});

`);e.push({assetContract:t.contractAddress,totalAmount:0,tokenId:t.tokenId,tokenType:1})}if(r.erc1155Tokens)for(const t of r.erc1155Tokens){if(!await A(this.contractWrapper.getProvider(),this.getAddress(),t.contractAddress,t.tokenId,s))throw new Error(`ERC1155 token "${t.tokenId}" with contract address "${t.contractAddress}" is not approved for transfer.

You can give approval the multiwrap contract to transfer this token by running:

await sdk.getEdition("${t.contractAddress}").setApprovalForAll("${this.getAddress()}", true);

`);e.push({assetContract:t.contractAddress,totalAmount:t.quantity,tokenId:t.tokenId,tokenType:2})}return e}async prepare(r,e,n){return p.fromContractWrapper({contractWrapper:this.contractWrapper,method:r,args:e,overrides:n})}async call(r,e,n){return this.contractWrapper.call(r,e,n)}};let h=u;d(h,"contractRoles",W);export{h as Multiwrap};
