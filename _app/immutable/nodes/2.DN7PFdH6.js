import{s as C,m as g,a as p,o as h,b as d,l as b,p as $,h as v,i as _,u as y,q as H,r as L,d as c}from"../chunks/scheduler.DZULovi0.js";import{S as T,i as q,t as z,a as M}from"../chunks/index.BbX9ERtF.js";import{b as x}from"../chunks/paths.Cw8C8le9.js";function P(i){let s,r="Título no +layout.svelte",n,a,u=`<a class="text-blue-500" href="${x+"/sub-rotas/one"}">Página um</a> <a class="text-blue-500" href="${x+"/sub-rotas/two"}">Página dois</a>`,f,o;const m=i[1].default,e=g(m,i,i[0],null);return{c(){s=p("h1"),s.textContent=r,n=h(),a=p("div"),a.innerHTML=u,f=h(),e&&e.c(),this.h()},l(t){s=d(t,"H1",{class:!0,"data-svelte-h":!0}),b(s)!=="svelte-1h8ibh5"&&(s.textContent=r),n=$(t),a=d(t,"DIV",{class:!0,"data-svelte-h":!0}),b(a)!=="svelte-udz1ze"&&(a.innerHTML=u),f=$(t),e&&e.l(t),this.h()},h(){v(s,"class","text-2xl"),v(a,"class","flex gap-4 mb-4")},m(t,l){_(t,s,l),_(t,n,l),_(t,a,l),_(t,f,l),e&&e.m(t,l),o=!0},p(t,[l]){e&&e.p&&(!o||l&1)&&y(e,m,t,t[0],o?L(m,t[0],l,null):H(t[0]),null)},i(t){o||(z(e,t),o=!0)},o(t){M(e,t),o=!1},d(t){t&&(c(s),c(n),c(a),c(f)),e&&e.d(t)}}}function S(i,s,r){let{$$slots:n={},$$scope:a}=s;return i.$$set=u=>{"$$scope"in u&&r(0,a=u.$$scope)},[a,n]}class V extends T{constructor(s){super(),q(this,s,S,P,C,{})}}export{V as component};