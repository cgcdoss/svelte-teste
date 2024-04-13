function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../chunks/2.DoNtJX0e.js","../chunks/scheduler.DP8Ud2zs.js","../chunks/index.Dk6zsm0b.js","../chunks/_page.BBXMc2j1.js","../chunks/store.Cy5ESEUF.js","../chunks/index.Dvw628dj.js","../chunks/4.DtAAXf-V.js","../chunks/paths.CSVgtANn.js","../assets/4.BGLS4vvC.css","../chunks/5.BgewK3Ol.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{s as G,e as Y,n as H,c as O,f as ee,u as te,g as le,h as se}from"../chunks/scheduler.DP8Ud2zs.js";import{S as J,i as K,b as C,l as T,c as w,f as k,k as A,m as I,d as _,h as v,C as M,a as y,j as b,u as Q,D as ae,t as W,g as X,n as ne,p as ie,r as re,v as N,w as P,x as oe,s as ce}from"../chunks/index.Dk6zsm0b.js";import{_ as L}from"../chunks/preload-helper.D6kgxu3v.js";import{b as fe}from"../chunks/paths.CSVgtANn.js";import{p as ue}from"../chunks/stores.B8GzokCd.js";import{i as pe,l as V,e as U}from"../chunks/store.Cy5ESEUF.js";function B(a){return(a==null?void 0:a.length)!==void 0?a:Array.from(a)}const he=!0,me="always",ke=Object.freeze(Object.defineProperty({__proto__:null,prerender:he,trailingSlash:me},Symbol.toStringTag,{value:"Module"}));function F(a,t,l){const s=a.slice();return s[8]=t[l],s}function R(a){let t,l="Svelte testes";return{c(){t=C("h1"),t.textContent=l,this.h()},l(s){t=w(s,"H1",{class:!0,"data-svelte-h":!0}),A(t)!=="svelte-12inda8"&&(t.textContent=l),this.h()},h(){v(t,"class","text-xl text-white py-1")},m(s,r){y(s,t,r)},d(s){s&&_(t)}}}function q(a){let t,l,s=a[8].name+"",r,c;return{c(){t=C("li"),l=C("a"),r=W(s),c=T(),this.h()},l(o){t=w(o,"LI",{class:!0});var i=k(t);l=w(i,"A",{href:!0,class:!0});var n=k(l);r=X(n,s),n.forEach(_),c=I(i),i.forEach(_),this.h()},h(){v(l,"href",fe+"/"+a[8].path),v(l,"class","text-white hover:bg-primary-700 px-4 py-2 transition-all"),M(l,"bg-primary-500",a[1]===a[8].path),v(t,"class","py-2")},m(o,i){y(o,t,i),b(t,l),b(l,r),b(t,c)},p(o,i){i&10&&M(l,"bg-primary-500",o[1]===o[8].path)},d(o){o&&_(t)}}}function de(a){let t,l,s,r,c='<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path></svg>',o,i,n,f,h,e,m,$,g=a[2]&&R(),j=B(a[3]),d=[];for(let u=0;u<j.length;u+=1)d[u]=q(F(a,j,u));return{c(){t=C("nav"),l=C("div"),s=C("div"),r=C("button"),r.innerHTML=c,o=T(),i=C("img"),f=T(),g&&g.c(),h=T(),e=C("ul");for(let u=0;u<d.length;u+=1)d[u].c();this.h()},l(u){t=w(u,"NAV",{class:!0});var x=k(t);l=w(x,"DIV",{class:!0});var p=k(l);s=w(p,"DIV",{class:!0});var E=k(s);r=w(E,"BUTTON",{class:!0,"data-svelte-h":!0}),A(r)!=="svelte-13wjajr"&&(r.innerHTML=c),o=I(E),i=w(E,"IMG",{src:!0,alt:!0,class:!0}),f=I(E),g&&g.l(E),E.forEach(_),h=I(p),e=w(p,"UL",{class:!0});var S=k(e);for(let D=0;D<d.length;D+=1)d[D].l(S);S.forEach(_),p.forEach(_),x.forEach(_),this.h()},h(){v(r,"class","block md:hidden ml-2"),Y(i.src,n="https://api.iconify.design/vscode-icons:file-type-svelte.svg")||v(i,"src",n),v(i,"alt","svelte logo"),v(i,"class","h-[40px]"),v(s,"class","flex gap-4"),v(e,"class","hidden md:flex gap-2"),M(e,"!flex",a[0]),M(e,"flex-col",a[0]),v(l,"class","flex container mx-auto px-8 py-4 gap-4"),M(l,"flex-col",a[0]),v(t,"class","bg-primary-950 w-full")},m(u,x){y(u,t,x),b(t,l),b(l,s),b(s,r),b(s,o),b(s,i),b(s,f),g&&g.m(s,null),b(l,h),b(l,e);for(let p=0;p<d.length;p+=1)d[p]&&d[p].m(e,null);m||($=Q(r,"click",a[5]),m=!0)},p(u,[x]){if(u[2]?g||(g=R(),g.c(),g.m(s,null)):g&&(g.d(1),g=null),x&10){j=B(u[3]);let p;for(p=0;p<j.length;p+=1){const E=F(u,j,p);d[p]?d[p].p(E,x):(d[p]=q(E),d[p].c(),d[p].m(e,null))}for(;p<d.length;p+=1)d[p].d(1);d.length=j.length}x&1&&M(e,"!flex",u[0]),x&1&&M(e,"flex-col",u[0]),x&1&&M(l,"flex-col",u[0])},i:H,o:H,d(u){u&&_(t),g&&g.d(),ae(d,u),m=!1,$()}}}function _e(a,t,l){let s,r,c;O(a,ue,e=>l(4,r=e)),O(a,pe,e=>l(2,c=e));const n=Object.keys(Object.assign({"../../routes/+page.svelte":()=>L(()=>import("../chunks/2.DoNtJX0e.js").then(e=>e._),__vite__mapDeps([0,1,2]),import.meta.url),"../../routes/cep/+page.svelte":()=>L(()=>import("../chunks/_page.BBXMc2j1.js"),__vite__mapDeps([3,1,2,4,5]),import.meta.url),"../../routes/imagens/+page.svelte":()=>L(()=>import("../chunks/4.DtAAXf-V.js").then(e=>e._),__vite__mapDeps([6,1,2,7,8]),import.meta.url),"../../routes/promises/+page.svelte":()=>L(()=>import("../chunks/5.BgewK3Ol.js").then(e=>e._),__vite__mapDeps([9,1,2]),import.meta.url)})).map(e=>e.replace("../../routes/","").replace("+page.svelte","").replace("/","")).map(e=>({path:e,name:e===""?"Home":e.substring(0,1).toUpperCase()+e.substring(1)}));let f=!1;const h=()=>l(0,f=!f);return a.$$.update=()=>{a.$$.dirty&16&&l(1,s=r.url.pathname.replace("/svelte-teste","").replaceAll("/",""))},[f,s,c,n,r,h]}class ve extends J{constructor(t){super(),K(this,t,_e,de,G,{})}}function Z(a){let t,l,s,r,c="×",o,i;return{c(){t=C("div"),l=W(a[0]),s=T(),r=C("button"),r.textContent=c,this.h()},l(n){t=w(n,"DIV",{class:!0});var f=k(t);l=X(f,a[0]),s=I(f),r=w(f,"BUTTON",{class:!0,"data-svelte-h":!0}),A(r)!=="svelte-16tojrl"&&(r.textContent=c),f.forEach(_),this.h()},h(){v(r,"class","ml-2"),v(t,"class","fixed top-16 right-3 bg-red-200 text-red-900 p-4")},m(n,f){y(n,t,f),b(t,l),b(t,s),b(t,r),o||(i=Q(r,"click",a[4]),o=!0)},p(n,f){f&1&&ce(l,n[0])},d(n){n&&_(t),o=!1,i()}}}function z(a){let t,l='<svg aria-hidden="true" class="w-16 h-16 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path></svg>';return{c(){t=C("div"),t.innerHTML=l,this.h()},l(s){t=w(s,"DIV",{class:!0,"data-svelte-h":!0}),A(t)!=="svelte-ioj9xq"&&(t.innerHTML=l),this.h()},h(){v(t,"class","fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/30")},m(s,r){y(s,t,r)},d(s){s&&_(t)}}}function ge(a){let t,l,s,r,c,o,i=a[0]&&Z(a),n=a[1]&&z();s=new ve({});const f=a[3].default,h=ee(f,a,a[2],null);return{c(){i&&i.c(),t=T(),n&&n.c(),l=T(),ne(s.$$.fragment),r=T(),c=C("main"),h&&h.c(),this.h()},l(e){i&&i.l(e),t=I(e),n&&n.l(e),l=I(e),ie(s.$$.fragment,e),r=I(e),c=w(e,"MAIN",{class:!0});var m=k(c);h&&h.l(m),m.forEach(_),this.h()},h(){v(c,"class","container mx-auto px-8 mt-6")},m(e,m){i&&i.m(e,m),y(e,t,m),n&&n.m(e,m),y(e,l,m),re(s,e,m),y(e,r,m),y(e,c,m),h&&h.m(c,null),o=!0},p(e,[m]){e[0]?i?i.p(e,m):(i=Z(e),i.c(),i.m(t.parentNode,t)):i&&(i.d(1),i=null),e[1]?n||(n=z(),n.c(),n.m(l.parentNode,l)):n&&(n.d(1),n=null),h&&h.p&&(!o||m&4)&&te(h,f,e,e[2],o?se(f,e[2],m,null):le(e[2]),null)},i(e){o||(N(s.$$.fragment,e),N(h,e),o=!0)},o(e){P(s.$$.fragment,e),P(h,e),o=!1},d(e){e&&(_(t),_(l),_(r),_(c)),i&&i.d(e),n&&n.d(e),oe(s,e),h&&h.d(e)}}}function be(a,t,l){let s,r;O(a,U,n=>l(0,s=n)),O(a,V,n=>l(1,r=n));let{$$slots:c={},$$scope:o}=t;{const n=window.fetch;window.fetch=async(f,h,e=!1)=>{e||V.set(!0);const m=await n(f,h);return e||V.set(!1),m}}const i=()=>U.set("");return a.$$set=n=>{"$$scope"in n&&l(2,o=n.$$scope)},[s,r,o,c,i]}class Te extends J{constructor(t){super(),K(this,t,be,ge,G,{})}}export{Te as component,ke as universal};
