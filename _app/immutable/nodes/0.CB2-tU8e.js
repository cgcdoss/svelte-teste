function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../chunks/2.6CzUILfS.js","../chunks/scheduler.CwG2_Ctv.js","../chunks/index.B0ZQfwwR.js","../chunks/_page.a_esNbbM.js","../chunks/store.C_rYsCFS.js","../chunks/index.BXoO7qoC.js","../chunks/4.BPj_QsHo.js","../chunks/paths.D8iQbL8s.js","../assets/4.BGLS4vvC.css","../chunks/5.l4TqcZ32.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{s as N,n as I,c as $,e as Z,u as q,g as z,f as G}from"../chunks/scheduler.CwG2_Ctv.js";import{S as P,i as U,b as d,l as E,c as g,f as w,k as x,m as k,d as m,h as v,C as _,a as C,j as b,u as B,D as J,t as R,g as F,n as K,p as Q,r as W,v as O,w as j,x as X,s as Y}from"../chunks/index.B0ZQfwwR.js";import{_ as M}from"../chunks/preload-helper.D6kgxu3v.js";import{b as ee}from"../chunks/paths.D8iQbL8s.js";import{p as te}from"../chunks/stores.BHEEShpE.js";import{e as y,l as le}from"../chunks/store.C_rYsCFS.js";function A(a){return(a==null?void 0:a.length)!==void 0?a:Array.from(a)}const se=!0,ae="always",de=Object.freeze(Object.defineProperty({__proto__:null,prerender:se,trailingSlash:ae},Symbol.toStringTag,{value:"Module"}));function D(a,t,s){const r=a.slice();return r[7]=t[s],r}function V(a){let t,s,r=a[7].name+"",f,p;return{c(){t=d("li"),s=d("a"),f=R(r),p=E(),this.h()},l(i){t=g(i,"LI",{});var o=w(t);s=g(o,"A",{href:!0,class:!0});var n=w(s);f=F(n,r),n.forEach(m),p=k(o),o.forEach(m),this.h()},h(){v(s,"href",ee+"/"+a[7].path),v(s,"class","text-white hover:bg-primary-700 px-4 py-2 transition-all"),_(s,"bg-primary-500",a[1]===a[7].path)},m(i,o){C(i,t,o),b(t,s),b(s,f),b(t,p)},p(i,o){o&6&&_(s,"bg-primary-500",i[1]===i[7].path)},d(i){i&&m(t)}}}function ne(a){let t,s,r,f='<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path></svg>',p,i,o,n,h=A(a[2]),l=[];for(let e=0;e<h.length;e+=1)l[e]=V(D(a,h,e));return{c(){t=d("nav"),s=d("div"),r=d("button"),r.innerHTML=f,p=E(),i=d("ul");for(let e=0;e<l.length;e+=1)l[e].c();this.h()},l(e){t=g(e,"NAV",{class:!0});var u=w(t);s=g(u,"DIV",{class:!0});var c=w(s);r=g(c,"BUTTON",{class:!0,"data-svelte-h":!0}),x(r)!=="svelte-11hs1zl"&&(r.innerHTML=f),p=k(c),i=g(c,"UL",{class:!0});var T=w(i);for(let L=0;L<l.length;L+=1)l[L].l(T);T.forEach(m),c.forEach(m),u.forEach(m),this.h()},h(){v(r,"class","block md:hidden"),v(i,"class","hidden md:flex"),_(i,"!flex",a[0]),_(i,"flex-col",a[0]),_(i,"gap-4",a[0]),v(s,"class","flex container mx-auto px-8 py-4 gap-4"),_(s,"flex-col",a[0]),v(t,"class","bg-primary-950 w-full")},m(e,u){C(e,t,u),b(t,s),b(s,r),b(s,p),b(s,i);for(let c=0;c<l.length;c+=1)l[c]&&l[c].m(i,null);o||(n=B(r,"click",a[4]),o=!0)},p(e,[u]){if(u&6){h=A(e[2]);let c;for(c=0;c<h.length;c+=1){const T=D(e,h,c);l[c]?l[c].p(T,u):(l[c]=V(T),l[c].c(),l[c].m(i,null))}for(;c<l.length;c+=1)l[c].d(1);l.length=h.length}u&1&&_(i,"!flex",e[0]),u&1&&_(i,"flex-col",e[0]),u&1&&_(i,"gap-4",e[0]),u&1&&_(s,"flex-col",e[0])},i:I,o:I,d(e){e&&m(t),J(l,e),o=!1,n()}}}function re(a,t,s){let r,f;$(a,te,l=>s(3,f=l));const o=Object.keys(Object.assign({"../../routes/+page.svelte":()=>M(()=>import("../chunks/2.6CzUILfS.js").then(l=>l._),__vite__mapDeps([0,1,2]),import.meta.url),"../../routes/cep/+page.svelte":()=>M(()=>import("../chunks/_page.a_esNbbM.js"),__vite__mapDeps([3,1,2,4,5]),import.meta.url),"../../routes/imagens/+page.svelte":()=>M(()=>import("../chunks/4.BPj_QsHo.js").then(l=>l._),__vite__mapDeps([6,1,2,7,8]),import.meta.url),"../../routes/promises/+page.svelte":()=>M(()=>import("../chunks/5.l4TqcZ32.js").then(l=>l._),__vite__mapDeps([9,1,2]),import.meta.url)})).map(l=>l.replace("../../routes/","").replace("+page.svelte","").replace("/","")).map(l=>({path:l,name:l===""?"Home":l.substring(0,1).toUpperCase()+l.substring(1)}));let n=!1;const h=()=>s(0,n=!n);return a.$$.update=()=>{a.$$.dirty&8&&s(1,r=f.url.pathname.replace("/svelte-teste","").replaceAll("/",""))},[n,r,o,f,h]}class ie extends P{constructor(t){super(),U(this,t,re,ne,N,{})}}function S(a){let t,s,r,f,p="×",i,o;return{c(){t=d("div"),s=R(a[0]),r=E(),f=d("button"),f.textContent=p,this.h()},l(n){t=g(n,"DIV",{class:!0});var h=w(t);s=F(h,a[0]),r=k(h),f=g(h,"BUTTON",{class:!0,"data-svelte-h":!0}),x(f)!=="svelte-16tojrl"&&(f.textContent=p),h.forEach(m),this.h()},h(){v(f,"class","ml-2"),v(t,"class","fixed top-16 right-3 bg-red-200 text-red-900 p-4")},m(n,h){C(n,t,h),b(t,s),b(t,r),b(t,f),i||(o=B(f,"click",a[4]),i=!0)},p(n,h){h&1&&Y(s,n[0])},d(n){n&&m(t),i=!1,o()}}}function H(a){let t,s='<svg aria-hidden="true" class="w-16 h-16 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path></svg>';return{c(){t=d("div"),t.innerHTML=s,this.h()},l(r){t=g(r,"DIV",{class:!0,"data-svelte-h":!0}),x(t)!=="svelte-ioj9xq"&&(t.innerHTML=s),this.h()},h(){v(t,"class","fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/30")},m(r,f){C(r,t,f)},d(r){r&&m(t)}}}function oe(a){let t,s,r,f,p,i,o=a[0]&&S(a),n=a[1]&&H();r=new ie({});const h=a[3].default,l=Z(h,a,a[2],null);return{c(){o&&o.c(),t=E(),n&&n.c(),s=E(),K(r.$$.fragment),f=E(),p=d("main"),l&&l.c(),this.h()},l(e){o&&o.l(e),t=k(e),n&&n.l(e),s=k(e),Q(r.$$.fragment,e),f=k(e),p=g(e,"MAIN",{class:!0});var u=w(p);l&&l.l(u),u.forEach(m),this.h()},h(){v(p,"class","container mx-auto px-8 mt-6")},m(e,u){o&&o.m(e,u),C(e,t,u),n&&n.m(e,u),C(e,s,u),W(r,e,u),C(e,f,u),C(e,p,u),l&&l.m(p,null),i=!0},p(e,[u]){e[0]?o?o.p(e,u):(o=S(e),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null),e[1]?n||(n=H(),n.c(),n.m(s.parentNode,s)):n&&(n.d(1),n=null),l&&l.p&&(!i||u&4)&&q(l,h,e,e[2],i?G(h,e[2],u,null):z(e[2]),null)},i(e){i||(O(r.$$.fragment,e),O(l,e),i=!0)},o(e){j(r.$$.fragment,e),j(l,e),i=!1},d(e){e&&(m(t),m(s),m(f),m(p)),o&&o.d(e),n&&n.d(e),X(r,e),l&&l.d(e)}}}function fe(a,t,s){let r,f;$(a,y,n=>s(0,r=n)),$(a,le,n=>s(1,f=n));let{$$slots:p={},$$scope:i}=t;const o=()=>y.set("");return a.$$set=n=>{"$$scope"in n&&s(2,i=n.$$scope)},[r,f,i,p,o]}class ge extends P{constructor(t){super(),U(this,t,fe,oe,N,{})}}export{ge as component,de as universal};
