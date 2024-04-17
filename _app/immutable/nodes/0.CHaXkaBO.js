function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../chunks/2.C52y47pC.js","../chunks/scheduler.BPsu77fK.js","../chunks/index.BiXCtGz0.js","../chunks/_page.C_r-GzZe.js","../chunks/store.DDN5xzAM.js","../chunks/index.avfgfnar.js","../chunks/index.CMN_YJkU.js","../chunks/_page.D5lLjNQE.js","../chunks/5.BZK_QOZc.js","../chunks/paths.DBK_XZWj.js","../assets/5.BGLS4vvC.css","../chunks/6.CguBCkDz.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{s as N,c as S,d as pe,a as be,n as P,w as ve,x as ke,y as ye,z as we,A as Ce}from"../chunks/scheduler.BPsu77fK.js";import{S as F,i as R,e as x,a as A,q as T,A as me,r as D,u as he,d as b,b as E,t as K,l as I,c as $,f as M,g as Q,n as H,k as X,h as C,j as w,p as de,s as _e,D as ee,E as te,F as Ee,G as j,B as se,H as $e,v as U,m as Ae,w as q,x as z,z as Z,y as Me}from"../chunks/index.BiXCtGz0.js";import{p as ge}from"../chunks/stores.QPimnm4W.js";import{e as le,i as Le,l as G}from"../chunks/store.DDN5xzAM.js";import{f as W}from"../chunks/index.CMN_YJkU.js";import{_ as V}from"../chunks/preload-helper.D6kgxu3v.js";import{b as Te}from"../chunks/paths.DBK_XZWj.js";import{w as Ie}from"../chunks/index.avfgfnar.js";function ne(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}function He(l){var s;const e=`; ${document.cookie}`.split(`; ${l}=`);if(e.length===2)return(s=e.pop())==null?void 0:s.split(";").shift()}const je=async()=>{const l=localStorage.getItem("texto")||"",t=He("algum-cookie");return{titleApplication:"Svelte testes",textFromLocalStorage:l,cookie:t}},De=!1,Oe=!0,Se="always",st=Object.freeze(Object.defineProperty({__proto__:null,load:je,prerender:Oe,ssr:De,trailingSlash:Se},Symbol.toStringTag,{value:"Module"}));function ie(l){let t,e,s,n,i="×",r,a,p,u;return{c(){t=E("div"),e=K(l[0]),s=I(),n=E("button"),n.textContent=i,this.h()},l(f){t=$(f,"DIV",{class:!0});var d=M(t);e=Q(d,l[0]),s=H(d),n=$(d,"BUTTON",{class:!0,"data-svelte-h":!0}),X(n)!=="svelte-16tojrl"&&(n.textContent=i),d.forEach(b),this.h()},h(){C(n,"class","ml-2"),C(t,"class","fixed top-16 right-3 bg-red-200 text-red-900 p-4")},m(f,d){A(f,t,d),w(t,e),w(t,s),w(t,n),a=!0,p||(u=de(n,"click",l[1]),p=!0)},p(f,d){(!a||d&1)&&_e(e,f[0])},i(f){a||(f&&pe(()=>{a&&(r||(r=ee(t,W,{x:200},!0)),r.run(1))}),a=!0)},o(f){f&&(r||(r=ee(t,W,{x:200},!1)),r.run(0)),a=!1},d(f){f&&b(t),f&&r&&r.end(),p=!1,u()}}}function xe(l){let t,e=l[0]&&ie(l);return{c(){e&&e.c(),t=x()},l(s){e&&e.l(s),t=x()},m(s,n){e&&e.m(s,n),A(s,t,n)},p(s,[n]){s[0]?e?(e.p(s,n),n&1&&T(e,1)):(e=ie(s),e.c(),T(e,1),e.m(t.parentNode,t)):e&&(me(),D(e,1,1,()=>{e=null}),he())},i(s){T(e)},o(s){D(e)},d(s){s&&b(t),e&&e.d(s)}}}function Ve(l,t,e){let s;return S(l,le,i=>e(0,s=i)),[s,()=>le.set("")]}let Pe=class extends F{constructor(t){super(),R(this,t,Ve,xe,N,{})}};function re(l){return Object.prototype.toString.call(l)==="[object Date]"}function J(l,t,e,s){if(typeof e=="number"||re(e)){const n=s-e,i=(e-t)/(l.dt||1/60),r=l.opts.stiffness*n,a=l.opts.damping*i,p=(r-a)*l.inv_mass,u=(i+p)*l.dt;return Math.abs(u)<l.opts.precision&&Math.abs(n)<l.opts.precision?s:(l.settled=!1,re(e)?new Date(e.getTime()+u):e+u)}else{if(Array.isArray(e))return e.map((n,i)=>J(l,t[i],e[i],s[i]));if(typeof e=="object"){const n={};for(const i in e)n[i]=J(l,t[i],e[i],s[i]);return n}else throw new Error(`Cannot spring ${typeof e} values`)}}function Ne(l,t={}){const e=Ie(l),{stiffness:s=.15,damping:n=.8,precision:i=.01}=t;let r,a,p,u=l,f=l,d=1,m=0,o=!1;function v(c,g={}){f=c;const h=p={};return l==null||g.hard||_.stiffness>=1&&_.damping>=1?(o=!0,r=te(),u=c,e.set(l=f),Promise.resolve()):(g.soft&&(m=1/((g.soft===!0?.5:+g.soft)*60),d=0),a||(r=te(),o=!1,a=Ee(y=>{if(o)return o=!1,a=null,!1;d=Math.min(d+m,1);const k={inv_mass:d,opts:_,settled:!0,dt:(y-r)*60/1e3},L=J(k,u,l,f);return r=y,u=l,e.set(l=L),k.settled&&(a=null),!k.settled})),new Promise(y=>{a.promise.then(()=>{h===p&&y()})}))}const _={set:v,update:(c,g)=>v(c(f,l),g),subscribe:e.subscribe,stiffness:s,damping:n,precision:i};return _}function oe(l,t,e){const s=l.slice();return s[13]=t[e],s}function ae(l){let t,e;return{c(){t=E("h1"),e=K(l[0]),this.h()},l(s){t=$(s,"H1",{class:!0});var n=M(t);e=Q(n,l[0]),n.forEach(b),this.h()},h(){C(t,"class","text-xl text-white py-1")},m(s,n){A(s,t,n),w(t,e)},p(s,n){n&1&&_e(e,s[0])},d(s){s&&b(t)}}}function fe(l){let t,e,s=l[13].name+"",n,i,r,a;return{c(){t=E("li"),e=E("a"),n=K(s),i=I(),this.h()},l(p){t=$(p,"LI",{});var u=M(t);e=$(u,"A",{href:!0,class:!0});var f=M(e);n=Q(f,s),f.forEach(b),i=H(u),u.forEach(b),this.h()},h(){C(e,"href",Te+"/"+l[13].path),C(e,"class","block w-full text-white hover:bg-primary-700 px-4 py-2 transition-all"),j(e,"bg-primary-500",l[2]===l[13].path)},m(p,u){A(p,t,u),w(t,e),w(e,n),w(t,i),r||(a=ve(l[7].call(null,t)),r=!0)},p(p,u){u&36&&j(e,"bg-primary-500",p[2]===p[13].path)},d(p){p&&b(t),r=!1,a()}}}function Fe(l){let t,e,s,n,i,r='<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path></svg>',a,p,u,f,d,m,o,v,_=l[3]&&ae(l),c=ne(l[5]),g=[];for(let h=0;h<c.length;h+=1)g[h]=fe(oe(l,c,h));return{c(){t=E("header"),e=E("nav"),s=E("div"),n=E("div"),i=E("button"),i.innerHTML=r,a=I(),p=E("img"),f=I(),_&&_.c(),d=I(),m=E("ul");for(let h=0;h<g.length;h+=1)g[h].c();this.h()},l(h){t=$(h,"HEADER",{});var y=M(t);e=$(y,"NAV",{class:!0,style:!0});var k=M(e);s=$(k,"DIV",{class:!0});var L=M(s);n=$(L,"DIV",{class:!0});var O=M(n);i=$(O,"BUTTON",{class:!0,"data-svelte-h":!0}),X(i)!=="svelte-ydyu1z"&&(i.innerHTML=r),a=H(O),p=$(O,"IMG",{src:!0,alt:!0,class:!0}),f=H(O),_&&_.l(O),O.forEach(b),d=H(L),m=$(L,"UL",{class:!0});var Y=M(m);for(let B=0;B<g.length;B+=1)g[B].l(Y);Y.forEach(b),L.forEach(b),k.forEach(b),y.forEach(b),this.h()},h(){C(i,"class","block md:hidden ml-2"),be(p.src,u="https://api.iconify.design/vscode-icons:file-type-svelte.svg")||C(p,"src",u),C(p,"alt","svelte logo"),C(p,"class","h-[40px]"),C(n,"class","flex gap-4"),C(m,"class","hidden md:flex gap-2"),j(m,"!flex",l[1]),j(m,"flex-col",l[1]),C(s,"class","flex container mx-auto px-8 py-4 gap-4"),j(s,"flex-col",l[1]),C(e,"class","bg-primary-950 w-full"),se(e,"height",l[4]+"px")},m(h,y){A(h,t,y),w(t,e),w(e,s),w(s,n),w(n,i),w(n,a),w(n,p),w(n,f),_&&_.m(n,null),w(s,d),w(s,m);for(let k=0;k<g.length;k+=1)g[k]&&g[k].m(m,null);o||(v=de(i,"click",l[9]),o=!0)},p(h,[y]){if(h[3]?_?_.p(h,y):(_=ae(h),_.c(),_.m(n,null)):_&&(_.d(1),_=null),y&36){c=ne(h[5]);let k;for(k=0;k<c.length;k+=1){const L=oe(h,c,k);g[k]?g[k].p(L,y):(g[k]=fe(L),g[k].c(),g[k].m(m,null))}for(;k<g.length;k+=1)g[k].d(1);g.length=c.length}y&2&&j(m,"!flex",h[1]),y&2&&j(m,"flex-col",h[1]),y&2&&j(s,"flex-col",h[1]),y&16&&se(e,"height",h[4]+"px")},i:P,o:P,d(h){h&&b(t),_&&_.d(),$e(g,h),o=!1,v()}}}function Re(l,t,e){let s,n,i,r;S(l,Le,c=>e(3,n=c)),S(l,ge,c=>e(8,i=c));const u=Object.keys(Object.assign({"../../routes/+page.svelte":()=>V(()=>import("../chunks/2.C52y47pC.js").then(c=>c._),__vite__mapDeps([0,1,2]),import.meta.url),"../../routes/cep/+page.svelte":()=>V(()=>import("../chunks/_page.C_r-GzZe.js"),__vite__mapDeps([3,1,2,4,5,6]),import.meta.url),"../../routes/fetch-on-load/+page.svelte":()=>V(()=>import("../chunks/_page.D5lLjNQE.js"),__vite__mapDeps([7,1,2]),import.meta.url),"../../routes/imagens/+page.svelte":()=>V(()=>import("../chunks/5.BZK_QOZc.js").then(c=>c._),__vite__mapDeps([8,1,2,9,6,10]),import.meta.url),"../../routes/promises/+page.svelte":()=>V(()=>import("../chunks/6.CguBCkDz.js").then(c=>c._),__vite__mapDeps([11,1,2,6]),import.meta.url)})).map(c=>c.replace("../../routes/","").replace("+page.svelte","").replace("/","")).map(c=>({path:c,name:c===""?"Home":c.substring(0,1).toUpperCase()+c.substring(1).replaceAll("-"," ")}));let f=!1;const d=Ne(72,{stiffness:.1,damping:.27});S(l,d,c=>e(4,r=c));let{title:m}=t;function o(){return u.length*46+72+16}function v(c){c.addEventListener("click",()=>{n&&e(1,f=!1)})}const _=()=>e(1,f=!f);return l.$$set=c=>{"title"in c&&e(0,m=c.title)},l.$$.update=()=>{l.$$.dirty&256&&e(2,s=i.url.pathname.replace("/svelte-teste","").replaceAll("/","")),l.$$.dirty&2&&d.set(f?o():72)},[m,f,s,n,r,u,d,v,i,_]}class Be extends F{constructor(t){super(),R(this,t,Re,Fe,N,{title:0})}}function ce(l){let t,e='<svg aria-hidden="true" class="w-16 h-16 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path></svg>';return{c(){t=E("div"),t.innerHTML=e,this.h()},l(s){t=$(s,"DIV",{class:!0,"data-svelte-h":!0}),X(t)!=="svelte-ioj9xq"&&(t.innerHTML=e),this.h()},h(){C(t,"class","fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/30")},m(s,n){A(s,t,n)},d(s){s&&b(t)}}}function Ue(l){let t,e=l[0]&&ce();return{c(){e&&e.c(),t=x()},l(s){e&&e.l(s),t=x()},m(s,n){e&&e.m(s,n),A(s,t,n)},p(s,[n]){s[0]?e||(e=ce(),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},i:P,o:P,d(s){s&&b(t),e&&e.d(s)}}}function qe(l,t,e){let s;return S(l,G,n=>e(0,s=n)),[s]}class ze extends F{constructor(t){super(),R(this,t,qe,Ue,N,{})}}function ue(l){let t,e,s;const n=l[3].default,i=ke(n,l,l[2],null);return{c(){t=E("main"),i&&i.c(),this.h()},l(r){t=$(r,"MAIN",{class:!0});var a=M(t);i&&i.l(a),a.forEach(b),this.h()},h(){C(t,"class","container mx-auto px-8 mt-6")},m(r,a){A(r,t,a),i&&i.m(t,null),s=!0},p(r,a){i&&i.p&&(!s||a&4)&&ye(i,n,r,r[2],s?Ce(n,r[2],a,null):we(r[2]),null)},i(r){s||(T(i,r),r&&(e||pe(()=>{e=Me(t,W,{y:200,delay:200}),e.start()})),s=!0)},o(r){D(i,r),s=!1},d(r){r&&b(t),i&&i.d(r)}}}function Ze(l){let t,e,s,n,i,r,a,p,u=l[1].url.pathname,f,d;s=new Be({props:{title:l[0].titleApplication}}),i=new Pe({}),a=new ze({});let m=ue(l);return{c(){t=E("meta"),e=I(),U(s.$$.fragment),n=I(),U(i.$$.fragment),r=I(),U(a.$$.fragment),p=I(),m.c(),f=x(),this.h()},l(o){const v=Ae("svelte-blo6j2",document.head);t=$(v,"META",{name:!0,content:!0}),v.forEach(b),e=H(o),q(s.$$.fragment,o),n=H(o),q(i.$$.fragment,o),r=H(o),q(a.$$.fragment,o),p=H(o),m.l(o),f=x(),this.h()},h(){C(t,"name","theme-color"),C(t,"content","#356169")},m(o,v){w(document.head,t),A(o,e,v),z(s,o,v),A(o,n,v),z(i,o,v),A(o,r,v),z(a,o,v),A(o,p,v),m.m(o,v),A(o,f,v),d=!0},p(o,[v]){const _={};v&1&&(_.title=o[0].titleApplication),s.$set(_),v&2&&N(u,u=o[1].url.pathname)?(me(),D(m,1,1,P),he(),m=ue(o),m.c(),T(m,1),m.m(f.parentNode,f)):m.p(o,v)},i(o){d||(T(s.$$.fragment,o),T(i.$$.fragment,o),T(a.$$.fragment,o),T(m),d=!0)},o(o){D(s.$$.fragment,o),D(i.$$.fragment,o),D(a.$$.fragment,o),D(m),d=!1},d(o){o&&(b(e),b(n),b(r),b(p),b(f)),b(t),Z(s,o),Z(i,o),Z(a,o),m.d(o)}}}function Ge(l,t,e){let s;S(l,ge,a=>e(1,s=a));let{$$slots:n={},$$scope:i}=t,{data:r}=t;{const a=window.fetch;window.fetch=async(p,u)=>{try{return u!=null&&u.skipLoading||G.set(!0),await a(p,u)}finally{u!=null&&u.skipLoading||G.set(!1)}}}return l.$$set=a=>{"data"in a&&e(0,r=a.data),"$$scope"in a&&e(2,i=a.$$scope)},[r,s,i,n]}class nt extends F{constructor(t){super(),R(this,t,Ge,Ze,N,{data:0})}}export{nt as component,st as universal};