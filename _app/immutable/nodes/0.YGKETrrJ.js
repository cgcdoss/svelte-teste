function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../chunks/2.CP4AU1ul.js","../chunks/scheduler.fGr_Mz3W.js","../chunks/index.DPfmm7dN.js","../chunks/_page.oxPQ7O2E.js","../chunks/store.B6G1jZlL.js","../chunks/index.B2-cCk9F.js","../chunks/index.CNB9pEE_.js","../chunks/4.Ccv-6X0I.js","../chunks/paths.ClTQaayy.js","../assets/4.BGLS4vvC.css","../chunks/5.CaecVGJq.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{s as P,c as S,b as pe,v as be,n as V,w as ve,x as ke,y as ye,z as we,A as Ce}from"../chunks/scheduler.fGr_Mz3W.js";import{S as F,i as B,e as x,a as M,q as H,A as me,r as D,u as he,d as b,b as E,t as K,l as I,c as $,f as A,g as Q,m as j,k as X,h as C,j as w,p as de,s as _e,D as ee,E as te,F as Ee,G as L,B as se,H as $e,v as U,n as Me,w as q,x as z,z as Z,y as Ae}from"../chunks/index.DPfmm7dN.js";import{p as ge}from"../chunks/stores.CnDbsAKH.js";import{e as le,i as Te,l as G}from"../chunks/store.B6G1jZlL.js";import{f as W}from"../chunks/index.CNB9pEE_.js";import{_ as N}from"../chunks/preload-helper.D6kgxu3v.js";import{b as He}from"../chunks/paths.ClTQaayy.js";import{w as Ie}from"../chunks/index.B2-cCk9F.js";function ne(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}function je(l){var s;const e=`; ${document.cookie}`.split(`; ${l}=`);if(e.length===2)return(s=e.pop())==null?void 0:s.split(";").shift()}const Le=async()=>{const l=localStorage.getItem("texto")||"",t=je("algum-cookie");return{titleApplication:"Svelte testes",textFromLocalStorage:l,cookie:t}},De=!1,Oe=!0,Se="always",st=Object.freeze(Object.defineProperty({__proto__:null,load:Le,prerender:Oe,ssr:De,trailingSlash:Se},Symbol.toStringTag,{value:"Module"}));function ie(l){let t,e,s,n,i="×",o,a,u,m;return{c(){t=E("div"),e=K(l[0]),s=I(),n=E("button"),n.textContent=i,this.h()},l(f){t=$(f,"DIV",{class:!0});var h=A(t);e=Q(h,l[0]),s=j(h),n=$(h,"BUTTON",{class:!0,"data-svelte-h":!0}),X(n)!=="svelte-16tojrl"&&(n.textContent=i),h.forEach(b),this.h()},h(){C(n,"class","ml-2"),C(t,"class","fixed top-16 right-3 bg-red-200 text-red-900 p-4")},m(f,h){M(f,t,h),w(t,e),w(t,s),w(t,n),a=!0,u||(m=de(n,"click",l[1]),u=!0)},p(f,h){(!a||h&1)&&_e(e,f[0])},i(f){a||(f&&pe(()=>{a&&(o||(o=ee(t,W,{x:200},!0)),o.run(1))}),a=!0)},o(f){f&&(o||(o=ee(t,W,{x:200},!1)),o.run(0)),a=!1},d(f){f&&b(t),f&&o&&o.end(),u=!1,m()}}}function xe(l){let t,e=l[0]&&ie(l);return{c(){e&&e.c(),t=x()},l(s){e&&e.l(s),t=x()},m(s,n){e&&e.m(s,n),M(s,t,n)},p(s,[n]){s[0]?e?(e.p(s,n),n&1&&H(e,1)):(e=ie(s),e.c(),H(e,1),e.m(t.parentNode,t)):e&&(me(),D(e,1,1,()=>{e=null}),he())},i(s){H(e)},o(s){D(e)},d(s){s&&b(t),e&&e.d(s)}}}function Ve(l,t,e){let s;return S(l,le,i=>e(0,s=i)),[s,()=>le.set("")]}let Pe=class extends F{constructor(t){super(),B(this,t,Ve,xe,P,{})}};function oe(l){return Object.prototype.toString.call(l)==="[object Date]"}function J(l,t,e,s){if(typeof e=="number"||oe(e)){const n=s-e,i=(e-t)/(l.dt||1/60),o=l.opts.stiffness*n,a=l.opts.damping*i,u=(o-a)*l.inv_mass,m=(i+u)*l.dt;return Math.abs(m)<l.opts.precision&&Math.abs(n)<l.opts.precision?s:(l.settled=!1,oe(e)?new Date(e.getTime()+m):e+m)}else{if(Array.isArray(e))return e.map((n,i)=>J(l,t[i],e[i],s[i]));if(typeof e=="object"){const n={};for(const i in e)n[i]=J(l,t[i],e[i],s[i]);return n}else throw new Error(`Cannot spring ${typeof e} values`)}}function Ne(l,t={}){const e=Ie(l),{stiffness:s=.15,damping:n=.8,precision:i=.01}=t;let o,a,u,m=l,f=l,h=1,p=0,r=!1;function v(c,g={}){f=c;const d=u={};return l==null||g.hard||_.stiffness>=1&&_.damping>=1?(r=!0,o=te(),m=c,e.set(l=f),Promise.resolve()):(g.soft&&(p=1/((g.soft===!0?.5:+g.soft)*60),h=0),a||(o=te(),r=!1,a=Ee(y=>{if(r)return r=!1,a=null,!1;h=Math.min(h+p,1);const k={inv_mass:h,opts:_,settled:!0,dt:(y-o)*60/1e3},T=J(k,m,l,f);return o=y,m=l,e.set(l=T),k.settled&&(a=null),!k.settled})),new Promise(y=>{a.promise.then(()=>{d===u&&y()})}))}const _={set:v,update:(c,g)=>v(c(f,l),g),subscribe:e.subscribe,stiffness:s,damping:n,precision:i};return _}function re(l,t,e){const s=l.slice();return s[13]=t[e],s}function ae(l){let t,e;return{c(){t=E("h1"),e=K(l[0]),this.h()},l(s){t=$(s,"H1",{class:!0});var n=A(t);e=Q(n,l[0]),n.forEach(b),this.h()},h(){C(t,"class","text-xl text-white py-1")},m(s,n){M(s,t,n),w(t,e)},p(s,n){n&1&&_e(e,s[0])},d(s){s&&b(t)}}}function fe(l){let t,e,s=l[13].name+"",n,i,o,a;return{c(){t=E("li"),e=E("a"),n=K(s),i=I(),this.h()},l(u){t=$(u,"LI",{});var m=A(t);e=$(m,"A",{href:!0,class:!0});var f=A(e);n=Q(f,s),f.forEach(b),i=j(m),m.forEach(b),this.h()},h(){C(e,"href",He+"/"+l[13].path),C(e,"class","block w-full text-white hover:bg-primary-700 px-4 py-2 transition-all"),L(e,"bg-primary-500",l[2]===l[13].path)},m(u,m){M(u,t,m),w(t,e),w(e,n),w(t,i),o||(a=ve(l[7].call(null,t)),o=!0)},p(u,m){m&36&&L(e,"bg-primary-500",u[2]===u[13].path)},d(u){u&&b(t),o=!1,a()}}}function Fe(l){let t,e,s,n,i,o='<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path></svg>',a,u,m,f,h,p,r,v,_=l[3]&&ae(l),c=ne(l[5]),g=[];for(let d=0;d<c.length;d+=1)g[d]=fe(re(l,c,d));return{c(){t=E("header"),e=E("nav"),s=E("div"),n=E("div"),i=E("button"),i.innerHTML=o,a=I(),u=E("img"),f=I(),_&&_.c(),h=I(),p=E("ul");for(let d=0;d<g.length;d+=1)g[d].c();this.h()},l(d){t=$(d,"HEADER",{});var y=A(t);e=$(y,"NAV",{class:!0,style:!0});var k=A(e);s=$(k,"DIV",{class:!0});var T=A(s);n=$(T,"DIV",{class:!0});var O=A(n);i=$(O,"BUTTON",{class:!0,"data-svelte-h":!0}),X(i)!=="svelte-ydyu1z"&&(i.innerHTML=o),a=j(O),u=$(O,"IMG",{src:!0,alt:!0,class:!0}),f=j(O),_&&_.l(O),O.forEach(b),h=j(T),p=$(T,"UL",{class:!0});var Y=A(p);for(let R=0;R<g.length;R+=1)g[R].l(Y);Y.forEach(b),T.forEach(b),k.forEach(b),y.forEach(b),this.h()},h(){C(i,"class","block md:hidden ml-2"),be(u.src,m="https://api.iconify.design/vscode-icons:file-type-svelte.svg")||C(u,"src",m),C(u,"alt","svelte logo"),C(u,"class","h-[40px]"),C(n,"class","flex gap-4"),C(p,"class","hidden md:flex gap-2"),L(p,"!flex",l[1]),L(p,"flex-col",l[1]),C(s,"class","flex container mx-auto px-8 py-4 gap-4"),L(s,"flex-col",l[1]),C(e,"class","bg-primary-950 w-full"),se(e,"height",l[4]+"px")},m(d,y){M(d,t,y),w(t,e),w(e,s),w(s,n),w(n,i),w(n,a),w(n,u),w(n,f),_&&_.m(n,null),w(s,h),w(s,p);for(let k=0;k<g.length;k+=1)g[k]&&g[k].m(p,null);r||(v=de(i,"click",l[9]),r=!0)},p(d,[y]){if(d[3]?_?_.p(d,y):(_=ae(d),_.c(),_.m(n,null)):_&&(_.d(1),_=null),y&36){c=ne(d[5]);let k;for(k=0;k<c.length;k+=1){const T=re(d,c,k);g[k]?g[k].p(T,y):(g[k]=fe(T),g[k].c(),g[k].m(p,null))}for(;k<g.length;k+=1)g[k].d(1);g.length=c.length}y&2&&L(p,"!flex",d[1]),y&2&&L(p,"flex-col",d[1]),y&2&&L(s,"flex-col",d[1]),y&16&&se(e,"height",d[4]+"px")},i:V,o:V,d(d){d&&b(t),_&&_.d(),$e(g,d),r=!1,v()}}}function Be(l,t,e){let s,n,i,o;S(l,Te,c=>e(3,n=c)),S(l,ge,c=>e(8,i=c));const m=Object.keys(Object.assign({"../../routes/+page.svelte":()=>N(()=>import("../chunks/2.CP4AU1ul.js").then(c=>c._),__vite__mapDeps([0,1,2]),import.meta.url),"../../routes/cep/+page.svelte":()=>N(()=>import("../chunks/_page.oxPQ7O2E.js"),__vite__mapDeps([3,1,2,4,5,6]),import.meta.url),"../../routes/imagens/+page.svelte":()=>N(()=>import("../chunks/4.Ccv-6X0I.js").then(c=>c._),__vite__mapDeps([7,1,2,8,6,9]),import.meta.url),"../../routes/promises/+page.svelte":()=>N(()=>import("../chunks/5.CaecVGJq.js").then(c=>c._),__vite__mapDeps([10,1,2,6]),import.meta.url)})).map(c=>c.replace("../../routes/","").replace("+page.svelte","").replace("/","")).map(c=>({path:c,name:c===""?"Home":c.substring(0,1).toUpperCase()+c.substring(1)}));let f=!1;const h=Ne(72,{stiffness:.1,damping:.27});S(l,h,c=>e(4,o=c));let{title:p}=t;function r(){return m.length*46+72+16}function v(c){c.addEventListener("click",()=>{n&&e(1,f=!1)})}const _=()=>e(1,f=!f);return l.$$set=c=>{"title"in c&&e(0,p=c.title)},l.$$.update=()=>{l.$$.dirty&256&&e(2,s=i.url.pathname.replace("/svelte-teste","").replaceAll("/","")),l.$$.dirty&2&&h.set(f?r():72)},[p,f,s,n,o,m,h,v,i,_]}class Re extends F{constructor(t){super(),B(this,t,Be,Fe,P,{title:0})}}function ce(l){let t,e='<svg aria-hidden="true" class="w-16 h-16 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path></svg>';return{c(){t=E("div"),t.innerHTML=e,this.h()},l(s){t=$(s,"DIV",{class:!0,"data-svelte-h":!0}),X(t)!=="svelte-ioj9xq"&&(t.innerHTML=e),this.h()},h(){C(t,"class","fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/30")},m(s,n){M(s,t,n)},d(s){s&&b(t)}}}function Ue(l){let t,e=l[0]&&ce();return{c(){e&&e.c(),t=x()},l(s){e&&e.l(s),t=x()},m(s,n){e&&e.m(s,n),M(s,t,n)},p(s,[n]){s[0]?e||(e=ce(),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},i:V,o:V,d(s){s&&b(t),e&&e.d(s)}}}function qe(l,t,e){let s;return S(l,G,n=>e(0,s=n)),[s]}class ze extends F{constructor(t){super(),B(this,t,qe,Ue,P,{})}}function ue(l){let t,e,s;const n=l[3].default,i=ke(n,l,l[2],null);return{c(){t=E("main"),i&&i.c(),this.h()},l(o){t=$(o,"MAIN",{class:!0});var a=A(t);i&&i.l(a),a.forEach(b),this.h()},h(){C(t,"class","container mx-auto px-8 mt-6")},m(o,a){M(o,t,a),i&&i.m(t,null),s=!0},p(o,a){i&&i.p&&(!s||a&4)&&ye(i,n,o,o[2],s?Ce(n,o[2],a,null):we(o[2]),null)},i(o){s||(H(i,o),o&&(e||pe(()=>{e=Ae(t,W,{y:200,delay:200}),e.start()})),s=!0)},o(o){D(i,o),s=!1},d(o){o&&b(t),i&&i.d(o)}}}function Ze(l){let t,e,s,n,i,o,a,u,m=l[1].url.pathname,f,h;s=new Re({props:{title:l[0].titleApplication}}),i=new Pe({}),a=new ze({});let p=ue(l);return{c(){t=E("meta"),e=I(),U(s.$$.fragment),n=I(),U(i.$$.fragment),o=I(),U(a.$$.fragment),u=I(),p.c(),f=x(),this.h()},l(r){const v=Me("svelte-blo6j2",document.head);t=$(v,"META",{name:!0,content:!0}),v.forEach(b),e=j(r),q(s.$$.fragment,r),n=j(r),q(i.$$.fragment,r),o=j(r),q(a.$$.fragment,r),u=j(r),p.l(r),f=x(),this.h()},h(){C(t,"name","theme-color"),C(t,"content","#356169")},m(r,v){w(document.head,t),M(r,e,v),z(s,r,v),M(r,n,v),z(i,r,v),M(r,o,v),z(a,r,v),M(r,u,v),p.m(r,v),M(r,f,v),h=!0},p(r,[v]){const _={};v&1&&(_.title=r[0].titleApplication),s.$set(_),v&2&&P(m,m=r[1].url.pathname)?(me(),D(p,1,1,V),he(),p=ue(r),p.c(),H(p,1),p.m(f.parentNode,f)):p.p(r,v)},i(r){h||(H(s.$$.fragment,r),H(i.$$.fragment,r),H(a.$$.fragment,r),H(p),h=!0)},o(r){D(s.$$.fragment,r),D(i.$$.fragment,r),D(a.$$.fragment,r),D(p),h=!1},d(r){r&&(b(e),b(n),b(o),b(u),b(f)),b(t),Z(s,r),Z(i,r),Z(a,r),p.d(r)}}}function Ge(l,t,e){let s;S(l,ge,a=>e(1,s=a));let{$$slots:n={},$$scope:i}=t,{data:o}=t;{const a=window.fetch;window.fetch=async(u,m,f=!1)=>{f||G.set(!0);const h=await a(u,m);return f||G.set(!1),h}}return l.$$set=a=>{"data"in a&&e(0,o=a.data),"$$scope"in a&&e(2,i=a.$$scope)},[o,s,i,n]}class nt extends F{constructor(t){super(),B(this,t,Ge,Ze,P,{data:0})}}export{nt as component,st as universal};
