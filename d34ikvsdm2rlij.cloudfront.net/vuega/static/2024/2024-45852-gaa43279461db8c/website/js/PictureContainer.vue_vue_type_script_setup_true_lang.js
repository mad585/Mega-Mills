import{J as k}from"./website.js";import{c as L,e as c,g as a,p as m,F as s,i as p,v as f,m as l,a5 as B,j as r}from"./vendor.js";const v=["srcset","media"],C=["srcset","media"],w=["src","alt","fetchpriority","onload"],$=["srcset","media"],P=["srcset","media"],I=["src","alt","fetchpriority","onload"],T=L({__name:"PictureContainer",props:{imageSet:{},imageBreakpointSet:{},hasThumbnail:{type:Boolean,default:!0},hasBackground:{type:Boolean,default:!0},useBackgroundLayout:{type:Boolean,default:!1},useInlineLayout:{type:Boolean,default:!1},allowContainLayout:{type:Boolean,default:!1},forceContainLayout:{type:Boolean,default:!1},alt:{default:""},fetchPriority:{default:k.LOW}},setup(b){const o=b,d=c(()=>o.imageBreakpointSet===void 0?[]:Object.values(o.imageBreakpointSet).reverse()),y=c(()=>o.useBackgroundLayout?"this.parentNode.style.backgroundImage = 'url(' + this.currentSrc + ')';":""),S=c(()=>o.hasThumbnail?'this.parentNode.nextElementSibling.style.display = "none"':"");return(e,M)=>{var g,h;return e.imageSet?(r(),a("div",{key:0,style:B({backgroundColor:e.hasBackground?e.imageSet.backgroundColor:"none"})},[m("picture",{class:f({"ins-picture ins-picture--full":!0,"ins-picture--background":e.useBackgroundLayout,"ins-picture--inline":e.useInlineLayout,"ins-picture--contain":e.forceContainLayout||e.allowContainLayout&&e.imageSet.simpleBackground})},[(r(!0),a(s,null,p(d.value,(t,n)=>{var i,u;return r(),a("source",{key:`imgwebp${n}`,srcset:`${(i=e.imageSet[t.image1x])==null?void 0:i.webp}, ${(u=e.imageSet[t.image2x])==null?void 0:u.webp} 2x`,media:t.breakpointMediaQuery,type:"image/webp"},null,8,v)}),128)),(r(!0),a(s,null,p(d.value,(t,n)=>{var i,u;return r(),a("source",{key:`imgdefault${n}`,srcset:`${(i=e.imageSet[t.image1x])==null?void 0:i.default}, ${(u=e.imageSet[t.image2x])==null?void 0:u.default} 2x`,media:t.breakpointMediaQuery},null,8,C)}),128)),m("img",{src:(g=e.imageSet.url200)==null?void 0:g.default,alt:e.alt,fetchpriority:e.fetchPriority,onload:`${y.value}${S.value}`},null,8,w)],2),e.hasThumbnail?(r(),a("picture",{key:0,class:f({"ins-picture ins-picture--thumb":!0,"ins-picture--background":e.useBackgroundLayout,"ins-picture--inline":e.useInlineLayout,"ins-picture--contain":e.allowContainLayout&&e.imageSet.simpleBackground})},[(r(!0),a(s,null,p(d.value,(t,n)=>{var i,u;return r(),a(s,{key:`thumbwebp${n}`},[t.thumbnail?(r(),a("source",{key:0,srcset:(i=e.imageSet[t.thumbnail])==null?void 0:i.webp,media:t.breakpointMediaQuery,type:"image/webp"},null,8,$)):l("",!0),t.thumbnail?(r(),a("source",{key:1,srcset:(u=e.imageSet[t.thumbnail])==null?void 0:u.default,media:t.breakpointMediaQuery},null,8,P)):l("",!0)],64)}),128)),m("img",{src:(h=e.imageSet.url200)==null?void 0:h.default,alt:e.alt,fetchpriority:e.fetchPriority,onload:y.value},null,8,I)],2)):l("",!0)],4)):l("",!0)}}});export{T as _};